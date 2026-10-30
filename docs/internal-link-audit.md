# Internal-link audit — 30 October 2026

The migrated checkout was audited through its running Next.js development server.
The public site's network access was denied by the cloud environment, so these
results do not establish the state of the live Cloudflare deployment.

## Final results

- 51 rendered pages and 2,884 anchor links inspected.
- 59 distinct internal destinations, including query-string variants, checked.
- 49 sitemap entries matched final canonical pages.
- No broken internal destinations, links through old migration redirects,
  missing fragment targets, duplicate element IDs, invalid structured data,
  canonical mismatches, or orphaned indexable pages found.
- Three WhatsApp URL variants returned their intended HTTP 302 handoff to
  `wa.me`; external handoffs were not followed and no messages were sent.
- All 61 routing/WhatsApp tests and the TypeScript check passed.

## Corrections

- Included the existing `/chat/wa` redirect in the Next.js edge build. A standalone
  Pages Function is insufficient for Next.js development and advanced-mode
  next-on-pages output. The wrapper also gives Next.js mutable response headers.
- Removed nonexistent `/about` author-profile URLs from four articles' structured
  data while retaining their existing author names.
- Added footer links to the existing French homepage, referral program, and DMCA
  policy. Added the indexable DMCA policy to the sitemap.
- Linked the existing Firestick setup and satellite comparison articles from the
  blog index.

## Repeat the audit

Start the site with `npm run dev`, then run from the repository directory:

```sh
python3 scripts/audit-internal-links.py --report /tmp/maplestreamtv-links.json
node --test --experimental-test-isolation=none tests/*.test.mjs
./node_modules/.bin/tsc --noEmit
```

After deployment, repeat the HTTP audit against production once outbound access
is permitted:

```sh
python3 scripts/audit-internal-links.py --base-url https://maplestreamtv.ca --report /tmp/maplestreamtv-live-links.json
```

The crawler checks rendered links and metadata using GET requests, with up to
three requests at once. It preserves TLS verification, does not submit forms,
and never follows external messaging links. Mobile navigation uses the same
destination list as desktop navigation; interactive browser behavior is outside
this HTTP audit.

The production build still needs the saved Google Fonts network allowances.
The separate, pre-existing ESLint configuration error remains unresolved.
