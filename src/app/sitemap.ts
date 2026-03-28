import type { MetadataRoute } from "next";

const base = "https://www.iptvsubscriptionincanada.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base,                                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/pricing`,                                 lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/free-trial`,                              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/iptv-firestick-canada`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iptv-samsung-tv-canada`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,                                    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/blog/best-iptv-canada-2026`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/iptv-vs-cable-canada`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/iptv-firestick-canada`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`,                          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms-of-service`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/refund-policy`,                           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/dmca`,                                    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
