import type { MetadataRoute } from "next";

const base = "https://maplestreamtv.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: base,                                              lastModified: new Date("2026-05-16"), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/fr`,                                      lastModified: new Date("2026-05-16"), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/pricing`,                                 lastModified: new Date("2026-05-16"), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/pricing/1-month`,                         lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/pricing/6-months`,                        lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/pricing/12-months`,                       lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/free-trial`,                              lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/1-month`,                                 lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/6-months`,                                lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/12-months`,                               lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    // Keyword-targeted landing pages
    { url: `${base}/iptv-box`,                                lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/iptv-near-me`,                            lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/iptv-providers-canada`,                   lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/iptv-server`,                             lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-for-beginners`,                      lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/best-iptv-apps`,                          lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/iptv-supplier`,                           lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.75 },
    // Supporting pages
    { url: `${base}/channels-list`,                           lastModified: new Date("2026-05-11"), changeFrequency: "weekly",  priority: 0.75 },
    { url: `${base}/how-it-works`,                            lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/referral`,                                lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/reseller`,                                lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,                                 lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.6 },
    // Device landing pages
    { url: `${base}/iptv-firestick-canada`,                   lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/iptv-android-tv-canada`,                  lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-smart-tv-canada`,                    lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-apple-tv-canada`,                    lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-mag-box-canada`,                     lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/iptv-samsung-tv-canada`,                  lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-lg-tv-canada`,                       lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-roku-canada`,                        lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-android-canada`,                     lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-ios-canada`,                         lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-windows-canada`,                     lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.75 },
    // City landing pages
    { url: `${base}/iptv-toronto`,                            lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/iptv-vancouver`,                          lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/iptv-montreal`,                           lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/iptv-calgary`,                            lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-ottawa`,                             lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-edmonton`,                           lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.8 },
    // Blog
    { url: `${base}/blog`,                                    lastModified: new Date("2026-05-16"), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/blog/best-iptv-canada-2026`,              lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/iptv-firestick-canada`,              lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/is-iptv-legal-canada`,               lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/iptv-vs-cable-canada`,               lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/iptv-vs-satellite-canada`,           lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/best-iptv-player-canada`,            lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.8 },
    // Legal
    { url: `${base}/privacy-policy`,                          lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms-of-service`,                        lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/refund-policy`,                           lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/disclaimer`,                              lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.2 },
  ];
}
