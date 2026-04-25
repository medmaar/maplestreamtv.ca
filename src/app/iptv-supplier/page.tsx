import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Supplier Canada — Trusted Canadian IPTV Source 2026 | MapleStreamTV" },
  description: "MapleStreamTV is a trusted IPTV supplier in Canada. 25,000+ channels, 4K quality, free trial, 24/7 support. Canada's reliable IPTV supplier from $9/month.",
  keywords: "iptv supplier, iptv supplier canada, best iptv supplier canada, trusted iptv supplier canada, reliable iptv supplier canada 2026",
  alternates: { canonical: "https://maplestreamtv.ca/iptv-supplier" },
};
export default function IPTVSupplierPage() {
  return (
    <main style={{ background: "#f0f9f9", color: "#000", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #1a4a5e 0%, #2d7a9a 100%)", padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Supplier Canada · MapleStreamTV</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, color: "#fff" }}>
            Trusted IPTV Supplier Canada — <span style={{ color: "#F96E5B" }}>MapleStreamTV</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
            MapleStreamTV is Canada&apos;s most trusted IPTV supplier. We deliver a reliable, high-quality IPTV service to thousands of Canadian subscribers — direct to you, no middleman, with genuine 24/7 Canadian support. IPTV subscriptions from $9/month with a free 24-hour trial.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try Free →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What to Look for in a Canadian IPTV Supplier</h2>
        <p style={{ color: "#333", lineHeight: 1.8, marginBottom: 24 }}>A trustworthy IPTV supplier in Canada should offer verifiable channel quality (not just a long list), responsive Canadian-based support, transparent pricing without hidden costs, and a genuine free trial. MapleStreamTV ticks every box — backed by thousands of satisfied Canadian subscribers.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginBottom: 40 }}>
          {["✅ 25,000+ Verified Channels","✅ 4K Ultra HD Quality","✅ 120,000+ VOD Titles","✅ Free 24h Trial","✅ No Contracts","✅ Canadian Support 24/7","✅ Instant Activation","✅ Multi-Device Support"].map(f => (
            <div key={f} style={{ background: "#fff", borderRadius: 10, padding: "12px 16px", border: "1px solid rgba(45,122,154,0.1)", fontSize: 14, fontWeight: 600 }}>{f}</div>
          ))}
        </div>
        <div style={{ background: "#1a4a5e", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try MapleStreamTV Free →</a>
        </div>
      </section>
    </main>
  );
}
