import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Server Canada — Fastest Canadian IPTV Servers 2026 | MapleStreamTV" },
  description: "MapleStreamTV runs Canada-based IPTV servers for fast, stable streaming. Low-latency IPTV server connections for all Canadian cities. Free 24h trial from $9/month.",
  keywords: "iptv server, iptv server canada, fast iptv server canada, canadian iptv server, iptv server list canada, stable iptv server canada",
  alternates: { canonical: "https://maplestreamtv.ca/iptv-server" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleStreamTV","item":"https://maplestreamtv.ca"},
    {"@type":"ListItem","position":2,"name":"IPTV Server Canada","item":"https://maplestreamtv.ca/iptv-server"}
  ]
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Where are MapleStreamTV's IPTV servers located?","acceptedAnswer":{"@type":"Answer","text":"MapleStreamTV operates server infrastructure distributed across Canada, ensuring low-latency connections for subscribers in all provinces — from BC to Nova Scotia."}},
    {"@type":"Question","name":"What uptime does MapleStreamTV's IPTV server have?","acceptedAnswer":{"@type":"Answer","text":"MapleStreamTV maintains 99.9% server uptime with redundant connections and automatic failover. Our infrastructure scales during peak events like NHL playoffs and UFC fight nights."}},
    {"@type":"Question","name":"What happens if the IPTV server goes down?","acceptedAnswer":{"@type":"Answer","text":"MapleStreamTV uses redundant failover architecture — if one server path experiences issues, your stream automatically routes to the next available node within seconds. You may see a brief pause, not a full outage."}}
  ]
};

export default function IPTVServerPage() {
  return (
    <main style={{ background: "#f0f9f9", color: "#000", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #1a4a5e 0%, #2d7a9a 100%)", padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Server Canada · MapleStreamTV</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.25)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, color: "#fff" }}>
            IPTV Server Canada — <span style={{ color: "#F96E5B" }}>Fast, Stable, Low Latency</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            The quality of your IPTV experience depends heavily on the server infrastructure behind it. MapleStreamTV operates Canada-based IPTV servers with enterprise-grade hardware, redundant connections, and optimized routing for every major Canadian city.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Test Our Servers Free →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { icon: "⚡", title: "99.9% Server Uptime", desc: "Our IPTV server infrastructure maintains 99.9% uptime across all streams — no dropouts during NHL playoffs or UFC fight cards." },
            { icon: "🌐", title: "Canadian Server Locations", desc: "IPTV servers geographically distributed across Canada. Lower latency means faster channel switching and fewer buffering events." },
            { icon: "🔒", title: "Redundant Connections", desc: "Multiple uplinks and failover routing mean if one server path has an issue, traffic automatically routes to the next available server." },
            { icon: "📈", title: "Scalable Capacity", desc: "Our IPTV server infrastructure scales during high-demand events like NHL playoffs, UFC cards, and major Canadian sports events." },
          ].map(f => (
            <div key={f.title} style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid rgba(45,122,154,0.12)" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
              <p style={{ fontWeight: 700, marginBottom: 8 }}>{f.title}</p>
              <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#1a4a5e", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Test Our Canadian IPTV Servers — Free Trial</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 14 }}>24-hour free trial. Test server speed, stability, and quality on your own connection.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
        </div>
      </section>
    </main>
  );
}
