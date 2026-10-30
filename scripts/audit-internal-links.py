#!/usr/bin/env python3
"""Read-only audit of rendered internal links; never follows external handoffs."""

import argparse
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlsplit, urlunsplit
from urllib.request import HTTPRedirectHandler, ProxyHandler, Request, build_opener
import xml.etree.ElementTree as ET

SITE = "https://maplestreamtv.ca"
ROOT = Path(__file__).resolve().parents[1]
PLANS = ("1-month", "3-months", "6-months", "12-months")


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, request, fp, code, message, headers, newurl):
        return None


class Document(HTMLParser):
    def __init__(self, body):
        super().__init__(convert_charrefs=True)
        self.ids = Counter()
        self.links = []
        self.metadata_links = []
        self.canonicals = []
        self.noindex = False
        self.ld = []
        self.ld_buffer = None
        self.feed(body)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get("id"):
            self.ids[attrs["id"]] += 1
        if tag == "a" and attrs.get("name"):
            self.ids[attrs["name"]] += 1
        if tag in ("a", "area") and "href" in attrs:
            self.links.append(attrs["href"])
        if tag == "link":
            if attrs.get("rel") == "canonical":
                self.canonicals.append(attrs.get("href", ""))
            if attrs.get("rel") == "alternate":
                self.metadata_links.append(attrs.get("href", ""))
        if tag == "meta":
            if attrs.get("property") == "og:url":
                self.metadata_links.append(attrs.get("content", ""))
            if attrs.get("name") == "robots" and "noindex" in attrs.get("content", "").lower():
                self.noindex = True
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.ld_buffer = []

    def handle_data(self, data):
        if self.ld_buffer is not None:
            self.ld_buffer.append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self.ld_buffer is not None:
            self.ld.append("".join(self.ld_buffer))
            self.ld_buffer = None


def page_paths():
    result = []
    for page in sorted((ROOT / "src/app/ca").rglob("page.tsx")):
        relative = page.parent.relative_to(ROOT / "src/app/ca").as_posix()
        if relative == ".":
            result.append("/ca")
        elif relative == "[plan]":
            result.extend("/ca/" + plan for plan in PLANS)
        elif not relative.startswith("pricing/"):
            result.append("/ca/" + relative)
    return result


def structured_urls(value):
    if isinstance(value, dict):
        for item in value.values():
            yield from structured_urls(item)
    elif isinstance(value, list):
        for item in value:
            yield from structured_urls(item)
    elif isinstance(value, str) and value.startswith((SITE, "https://www.maplestreamtv.ca")):
        yield value


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="http://127.0.0.1:3000")
    parser.add_argument("--report", type=Path)
    args = parser.parse_args()
    base = args.base_url.rstrip("/")
    base_url = urlsplit(base)
    handlers = [NoRedirect()]
    if base_url.hostname in {"127.0.0.1", "localhost", "::1"}:
        # Only loopback requests bypass the outbound proxy; live checks use it.
        handlers.append(ProxyHandler({}))
    opener = build_opener(*handlers)

    def fetch(path):
        try:
            response = opener.open(Request(base + path, headers={"User-Agent": "MapleStreamTV-LinkAudit/1.0"}), timeout=60)
        except HTTPError as error:
            response = error
        except (URLError, TimeoutError) as error:
            return {"status": 0, "error": str(error), "body": "", "location": None}
        with response:
            return {"status": response.status, "location": response.headers.get("Location"),
                    "body": response.read().decode("utf-8", errors="replace")}

    internal_hosts = {"maplestreamtv.ca", "www.maplestreamtv.ca", base_url.hostname}

    def internal_url(source, href):
        url = urlsplit(urljoin(SITE + source, href))
        if url.scheme not in {"http", "https"} or url.hostname not in internal_hosts:
            return None
        return url

    def path_of(url):
        return urlunsplit(("", "", url.path or "/", url.query, ""))

    problems = []

    def problem(kind, source, target, detail):
        problems.append({"kind": kind, "source": source, "target": target, "detail": detail})

    paths = page_paths()
    with ThreadPoolExecutor(max_workers=3) as pool:
        responses = dict(zip(paths, pool.map(fetch, paths)))
    documents = {}
    references = defaultdict(list)
    inbound = defaultdict(set)
    anchor_references = []
    total_links = 0
    for source, response in responses.items():
        if response["status"] != 200:
            problem("page-status", source, source, response["status"])
            continue
        doc = documents[source] = Document(response["body"])
        if doc.canonicals != [SITE + source]:
            problem("canonical", source, source, doc.canonicals)
        for fragment, count in doc.ids.items():
            if count > 1:
                problem("duplicate-id", source, "#" + fragment, count)
        for href in doc.links:
            total_links += 1
            url = internal_url(source, href)
            if not url:
                continue
            target = path_of(url)
            references[target].append((source, "navigation"))
            if source != url.path:
                inbound[url.path].add(source)
            if url.hostname == "www.maplestreamtv.ca":
                problem("noncanonical-host", source, href, "Link directly to the non-www host")
            if url.fragment:
                anchor_references.append((source, target, unquote(url.fragment)))
        metadata = doc.metadata_links + doc.canonicals
        for raw in doc.ld:
            try:
                metadata.extend(structured_urls(json.loads(raw)))
            except json.JSONDecodeError as error:
                problem("invalid-json-ld", source, source, str(error))
        for href in metadata:
            url = internal_url(source, href)
            if url:
                references[path_of(url)].append((source, "metadata"))

    missing = sorted(set(references) - set(responses))
    with ThreadPoolExecutor(max_workers=3) as pool:
        responses.update(zip(missing, pool.map(fetch, missing)))
    handoffs = set()
    for target, sources in references.items():
        response = responses[target]
        if urlsplit(target).path == "/chat/wa" and response["status"] == 302:
            dest = urlsplit(response["location"] or "")
            if dest.scheme == "https" and dest.hostname == "wa.me":
                handoffs.add(target)
                continue
        if response["status"] != 200:
            problem("link-status", sorted(set(sources))[0][0], target,
                    {"status": response["status"], "location": response.get("location"),
                     "references": sorted(set(sources))})
    for source, target, fragment in anchor_references:
        if fragment.startswith(":~:text="):
            continue
        doc = documents.get(target)
        if doc is None and responses[target]["status"] == 200:
            doc = Document(responses[target]["body"])
        if doc is not None and fragment not in doc.ids:
            problem("missing-fragment", source, target + "#" + fragment, "No matching element ID")

    sitemap_response = fetch("/sitemap.xml")
    sitemap_urls = []
    if sitemap_response["status"] == 200:
        try:
            xml = ET.fromstring(sitemap_response["body"])
            sitemap_urls = [entry.text for entry in xml.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
        except ET.ParseError as error:
            problem("invalid-sitemap", "/sitemap.xml", "/sitemap.xml", str(error))
    else:
        problem("sitemap-status", "/sitemap.xml", "/sitemap.xml", sitemap_response["status"])
    for url, count in Counter(sitemap_urls).items():
        if count > 1:
            problem("duplicate-sitemap-entry", "/sitemap.xml", url, count)
        pathname = urlsplit(url).path
        if url != SITE + pathname or pathname not in documents:
            problem("sitemap-destination", "/sitemap.xml", url, "Must be a final canonical page URL")
        if pathname in documents and documents[pathname].noindex:
            problem("noindex-in-sitemap", "/sitemap.xml", url, "Page is marked noindex")
    for pathname, doc in documents.items():
        if doc.noindex:
            continue
        if not inbound[pathname] and pathname != "/ca":
            problem("orphan-page", pathname, pathname, "No incoming link from another page")
        if SITE + pathname not in sitemap_urls:
            problem("missing-from-sitemap", pathname, pathname, "Indexable page omitted from sitemap")

    summary = {"base_url": base, "pages": len(paths), "anchor_links": total_links,
               "unique_internal_targets": len(references), "fragment_links": len(anchor_references),
               "sitemap_entries": len(sitemap_urls), "external_handoff_targets": sorted(handoffs),
               "problems": problems}
    if args.report:
        args.report.write_text(json.dumps(summary, indent=2) + "\n")
    print(json.dumps({key: value for key, value in summary.items() if key != "problems"}, indent=2))
    print(f"Problems: {len(problems)}")
    for item in problems:
        print(f"{item['kind']}: {item['source']} -> {item['target']}: {item['detail']}")
    return bool(problems)


if __name__ == "__main__":
    sys.exit(main())
