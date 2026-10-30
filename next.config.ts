import type { NextConfig } from "next";

const migratedPagePaths = [
  "/1-month",
  "/3-months",
  "/6-months",
  "/12-months",
  "/best-iptv-apps",
  "/channels-list",
  "/contact",
  "/disclaimer",
  "/dmca",
  "/fr",
  "/free-trial",
  "/how-it-works",
  "/iptv-android-canada",
  "/iptv-android-tv-canada",
  "/iptv-apple-tv-canada",
  "/iptv-box",
  "/iptv-calgary",
  "/iptv-edmonton",
  "/iptv-firestick-canada",
  "/iptv-for-beginners",
  "/iptv-ios-canada",
  "/iptv-lg-tv-canada",
  "/iptv-mag-box-canada",
  "/iptv-montreal",
  "/iptv-near-me",
  "/iptv-ottawa",
  "/iptv-providers-canada",
  "/iptv-roku-canada",
  "/iptv-samsung-tv-canada",
  "/iptv-server",
  "/iptv-smart-tv-canada",
  "/iptv-supplier",
  "/iptv-toronto",
  "/iptv-vancouver",
  "/iptv-windows-canada",
  "/order",
  "/pricing",
  "/privacy-policy",
  "/referral",
  "/refund-policy",
  "/reseller",
  "/terms-of-service",
  "/whatsapp-contact",
];

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // www → non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.maplestreamtv.ca" }],
        destination: "https://maplestreamtv.ca/:path*",
        permanent: true,
      },
      // The English homepage now lives at /ca.
      { source: "/", destination: "/ca", permanent: true },
      { source: "/en", destination: "/ca", permanent: true },
      { source: "/ca/en", destination: "/ca", permanent: true },
      // Send legacy plan links straight to their canonical URL in one hop.
      ...["1-month", "3-months", "6-months", "12-months"].flatMap((plan) =>
        ["/pricing", "/ca/pricing"].map((prefix) => ({
          source: `${prefix}/${plan}`,
          destination: `/ca/${plan}`,
          permanent: true,
        })),
      ),
      ...migratedPagePaths.map((path) => ({
        source: path,
        destination: `/ca${path}`,
        permanent: true,
      })),
      { source: "/blog/:path*", destination: "/ca/blog/:path*", permanent: true },
    ];
  },
};

export default async function config(): Promise<NextConfig> {
  if (process.env.NODE_ENV === "development") {
    const { setupDevPlatform } = await import("@cloudflare/next-on-pages/next-dev");
    await setupDevPlatform();
  }

  return nextConfig;
}
