import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "Best IPTV Apps Canada 2026 — Top Rated Players & Tools | MapleStreamTV" },
  description: "Best IPTV apps for Canada in 2026. TiviMate, IPTV Smarters Pro, GSE Smart IPTV — top rated tools for Fire Stick, Smart TV, iPhone and Android. Free trial from $9/month.",
  keywords: "best iptv app, best iptv apps, top rated iptv tool, best iptv apps canada, iptv app canada 2026, tivimate canada, iptv smarters canada, best iptv player canada, iptv tool canada, best iptv channel",
  alternates: { canonical: "https://maplestreamtv.ca/best-iptv-apps" },
};
const apps = [
  { name: "TiviMate", platforms: "Android TV, Fire TV", price: "Free (Premium $4.99/yr)", rating: 5, desc: "The #1 IPTV app for Android TV and Fire Stick. Hardware-accelerated 4K H.265, full EPG guide, multi-stream support, catch-up TV. Highly recommended for all MapleStreamTV subscribers.", best: true },
  { name: "IPTV Smarters Pro", platforms: "iOS, Android, Smart TV, Fire TV, PC", price: "Free (Android) / $5.99 (iOS)", rating: 5, desc: "The most versatile IPTV app — works on every platform. Full Xtream Codes support, clean interface, EPG, VOD sections organized by genre and year. Best for multi-device households.", best: true },
  { name: "GSE Smart IPTV", platforms: "iOS, Android", price: "$2.99", rating: 4, desc: "Great alternative for iPhone users who want a simpler interface. Supports M3U playlists and Xtream Codes. Reliable and fast — especially on older iOS devices." },
  { name: "Flex IPTV", platforms: "Apple TV, iPhone, iPad", price: "$4.99", rating: 4, desc: "Best dedicated Apple TV IPTV app. Native Dolby Vision and HDR support on Apple TV 4K. Clean tvOS interface with full remote control support." },
  { name: "Perfect Player", platforms: "Android", price: "Free", rating: 4, desc: "Lightweight and fast on older Android TV boxes. Good EPG support, simple interface, low memory usage. Ideal for budget Android boxes that struggle with heavier apps." },
  { name: "OTT Navigator", platforms: "Android, Fire TV", price: "Free (Premium ~$7/yr)", rating: 4, desc: "Feature-rich IPTV app with great channel management tools. Supports multiple playlists, parental controls, and customizable channel groups. Popular with power users." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleStreamTV","item":"https://maplestreamtv.ca"},
    {"@type":"ListItem","position":2,"name":"Best IPTV Apps Canada","item":"https://maplestreamtv.ca/best-iptv-apps"}
  ]
};

export default function BestIPTVAppsPage() {
  return (
    <main style={{ background: "#f0f9f9", color: "#000", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #1a4a5e 0%, #2d7a9a 100%)", padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>Best IPTV Apps · Canada 2026 · MapleStreamTV</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.25)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, color: "#fff" }}>
            Best IPTV Apps Canada 2026 — <span style={{ color: "#F96E5B" }}>Top Rated Tools Reviewed</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            The right IPTV app makes a huge difference to your streaming experience. We&apos;ve tested every major IPTV app with MapleStreamTV and ranked them for Canadian subscribers. All apps below work perfectly with MapleStreamTV&apos;s Xtream Codes or M3U format.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try MapleStreamTV Free →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24 }}>Best IPTV Apps — Canada 2026 Rankings</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {apps.map((app, i) => (
            <div key={app.name} style={{ background: "#fff", borderRadius: 16, padding: 24, border: app.best ? "2px solid rgba(249,110,91,0.4)" : "1px solid rgba(45,122,154,0.12)", position: "relative" }}>
              {app.best && <span style={{ position: "absolute", top: -10, right: 16, background: "#F96E5B", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>EDITOR&apos;S PICK</span>}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <div>
                  <span style={{ fontSize: 12, color: "#999", fontWeight: 600 }}>#{i+1} </span>
                  <span style={{ fontWeight: 800, fontSize: 18 }}>{app.name}</span>
                  <span style={{ marginLeft: 10, fontSize: 15 }}>{"⭐".repeat(app.rating)}</span>
                </div>
                <span style={{ background: "rgba(45,122,154,0.08)", border: "1px solid rgba(45,122,154,0.2)", borderRadius: 8, padding: "4px 12px", fontSize: 13, fontWeight: 600, color: "#2d7a9a" }}>{app.price}</span>
              </div>
              <p style={{ color: "#555", fontSize: 13, marginBottom: 8 }}>📱 {app.platforms}</p>
              <p style={{ color: "#333", lineHeight: 1.7, fontSize: 14 }}>{app.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#1a4a5e", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Get MapleStreamTV — Works with All IPTV Apps</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 14 }}>Free 24-hour trial. Full access on any IPTV app. Plans from $9/month.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
        </div>
      </section>
    </main>
  );
}
