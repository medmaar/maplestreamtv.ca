# Canada URL migration

The English homepage is `/ca`. All other site pages use the `/ca/` prefix,
including the French homepage at `/ca/fr`. Page copy, pricing, and designs are
unchanged. The internal-link audit also adds navigation to the existing French,
referral, and DMCA pages and lists the two missing existing blog posts.

| Previous path | Canonical path |
| --- | --- |
| `/` or `/en` | `/ca` |
| `/fr` | `/ca/fr` |
| `/pricing` | `/ca/pricing` |
| `/12-months` | `/ca/12-months` |
| `/pricing/12-months` | `/ca/12-months` |
| `/blog/best-iptv-canada-2026` | `/ca/blog/best-iptv-canada-2026` |
| Other page paths | `/ca` followed by the existing path |

The same plan rule applies to 1, 3, 6, and 12 months. Permanent HTTP 308 redirects
in `next.config.ts` preserve query parameters such as `?devices=3`. Pages live in
`src/app/ca`; their internal links, canonical metadata, social URLs, and
structured data use the new addresses. API routes, `/chat/wa`, public images,
icons, `/robots.txt`, and `/sitemap.xml` retain their existing root paths.

## Verify and release

With Node.js 24 and locked dependencies installed, run:

```sh
node --test --experimental-test-isolation=none tests/*.test.mjs
./node_modules/.bin/tsc --noEmit
npm run build
```

The build downloads Google Fonts and needs `fonts.googleapis.com` and
`fonts.gstatic.com` allowed in the cloud environment's network settings.

Start the site with `npm run dev`. Check that `/en` redirects to `/ca`, old page
addresses redirect to their new counterparts, and new pages render with their
own canonical URLs. Check a plan URL with `?devices=3` to confirm that its device
selection survives the redirect. No form submissions or email sends are needed.

After the change is deployed, verify these checks against the live site and
submit `https://maplestreamtv.ca/sitemap.xml` in Google Search Console. The sitemap
lists the final `/ca` URLs, including the previously omitted 3-month plan, and
excludes the old redirected pricing URLs. Request indexing for important new
pages only after deployment.

A URL migration does not resolve copyright removal notices or guarantee indexing
or ranking. Copyright complaints require a separate content/licensing review or
the appropriate dispute process.
