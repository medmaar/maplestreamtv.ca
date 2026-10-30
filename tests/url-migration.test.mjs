import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import path from "node:path";
import test, { before } from "node:test";
import { fileURLToPath } from "node:url";
import { unstable_getResponseFromNextConfig } from "next/experimental/testing/server.js";
import createConfig from "../next.config.ts";
import sitemap from "../src/app/sitemap.ts";
import robots from "../src/app/robots.ts";

const origin = "https://maplestreamtv.ca";
let config;
before(async () => {
  config = await createConfig();
});
const plans = ["1-month", "3-months", "6-months", "12-months"];
const pagesDirectory = fileURLToPath(new URL("../src/app/ca/", import.meta.url));
const pages = readdirSync(pagesDirectory, { recursive: true })
  .filter((file) => file.endsWith("page.tsx"))
  .flatMap((file) => {
    const directory = path.dirname(file).split(path.sep).join("/");
    if (directory === ".") return ["/ca"];
    if (directory === "[plan]") return plans.map((plan) => `/ca/${plan}`);
    if (directory.startsWith("pricing/")) return [];
    return [`/ca/${directory}`];
  });

async function responseFor(pathname, options = {}) {
  return unstable_getResponseFromNextConfig({
    url: new URL(pathname, origin).href,
    nextConfig: config,
    ...options,
  });
}

test("every migrated page has a permanent redirect preserving query parameters", async (t) => {
  for (const page of pages) {
    const old = page === "/ca" ? "/en" : page.slice(3);
    await t.test(`${old} → ${page}`, async () => {
      const response = await responseFor(`${old}?devices=3&ref=email`);
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), `${origin}${page}?devices=3&ref=email`);
      assert.equal((await responseFor(page)).status, 200, "new URL must not redirect again");
    });
  }
});

test("homepage aliases and legacy pricing links redirect directly to canonical pages", async () => {
  for (const alias of ["/", "/ca/en"]) {
    const response = await responseFor(alias);
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), `${origin}/ca`);
  }
  for (const plan of plans) {
    for (const prefix of ["/pricing", "/ca/pricing"]) {
      const response = await responseFor(`${prefix}/${plan}?devices=2`);
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), `${origin}/ca/${plan}?devices=2`);
    }
  }
});

test("www host normalization remains in place", async () => {
  const response = await responseFor("/ca/pricing", {
    headers: { host: "www.maplestreamtv.ca" },
  });
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), `${origin}/ca/pricing`);
});

test("API endpoints, public assets, and crawler files are not migrated", async () => {
  for (const pathname of ["/api/order", "/chat/wa", "/og-image.webp", "/favicon.ico", "/icon", "/_next/static/app.js", "/robots.txt", "/sitemap.xml"]) {
    const response = await responseFor(pathname);
    assert.equal(response.status, 200, pathname);
    assert.equal(response.headers.get("location"), null, pathname);
  }
});

test("sitemap contains each indexable page once at its final URL", async () => {
  const urls = sitemap().map((entry) => entry.url);
  const excluded = new Set(["/ca/order", "/ca/whatsapp-contact"]);
  const expected = pages.filter((page) => !excluded.has(page)).map((page) => origin + page);
  assert.equal(urls.length, new Set(urls).size, "sitemap must not contain duplicates");
  assert.deepEqual([...urls].sort(), expected.sort());
  for (const url of urls) {
    assert.equal((await responseFor(url)).status, 200, `sitemap URL must not redirect: ${url}`);
  }
});

test("robots preserves root sitemap discovery and excludes migrated private pages", () => {
  const rules = robots();
  assert.equal(rules.sitemap, `${origin}/sitemap.xml`);
  assert.equal(rules.rules.allow, "/");
  for (const pathname of ["/ca/order", "/ca/whatsapp-contact", "/api/"]) {
    assert.ok(rules.rules.disallow.includes(pathname), pathname);
  }
});
