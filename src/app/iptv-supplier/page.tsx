import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV Supplier Canada — Trusted Canadian IPTV Source 2026 | MapleStreamTV" },
  description: "MapleStreamTV is a trusted IPTV supplier in Canada. 25,000+ channels, 4K quality, free trial, 24/7 support. Canada's reliable IPTV supplier from $9/month.",
  keywords: "iptv supplier, iptv supplier canada, best iptv supplier canada, trusted iptv supplier canada, reliable iptv supplier canada 2026",
  alternates: { canonical: "https://maplestreamtv.ca/iptv-supplier" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"MapleStreamTV","item":"https://maplestreamtv.ca"},
    {"@type":"ListItem","position":2,"name":"IPTV Supplier Canada","item":"https://maplestreamtv.ca/iptv-supplier"}
  ]
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What should I look for in a Canadian IPTV supplier?","acceptedAnswer":{"@type":"Answer","text":"Look for a Canadian IPTV supplier with verifiable channel quality, transparent pricing, a genuine free trial, fast Canadian-based support, and no long-term contracts. MapleStreamTV meets all of these criteria."}},
    {"@type":"Question","name":"Is MapleStreamTV a reliable IPTV supplier in Canada?","acceptedAnswer":{"@type":"Answer","text":"Yes — MapleStreamTV is one of Canada's most trusted IPTV suppliers, serving thousands of Canadian subscribers with 99.9% uptime, 24/7 Canadian support, and plans starting at $9/month."}},
    {"@type":"Question","name":"How do I get started with an IPTV supplier in Canada?","acceptedAnswer":{"@type":"Answer","text":"Start with MapleStreamTV's free 24-hour trial — no credit card required. Contact us via the free trial page and receive your credentials within minutes. Setup takes under 5 minutes on any device."}}
  ]
};

export default function IPTVSupplierPage() {
  return (
    <main style={{ background: "#f0f9f9", color: "#000", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #1a4a5e 0%, #2d7a9a 100%)", padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV Supplier Canada · MapleStreamTV</span>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ background: "rgba(63,154,174,0.12)", border: "1px solid rgba(63,154,174,0.25)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 999 }}>
            🗓 Last updated: April 2026
          </span>
        </div>
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

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What Makes a Trustworthy IPTV Supplier in Canada?</h2>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          Canada has dozens of IPTV suppliers, but the quality varies enormously. A reliable IPTV supplier in Canada should have Canadian-based servers to minimize latency for subscribers from coast to coast. They should offer a genuine free trial — not a &quot;money-back guarantee after you pay&quot; — so you can verify stream quality before committing. They should have responsive support that answers within hours, not days, and ideally has Canadian staff who understand the local channel lineup and sports coverage expectations.
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 32 }}>
          Price transparency matters too. The best IPTV suppliers in Canada publish their pricing clearly, don&apos;t charge extra for sports events, and don&apos;t lock you into long-term contracts. MapleStreamTV was built on these principles — our pricing is on our website, our trial is genuinely free, and our month-to-month plans have no cancellation penalties.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>MapleStreamTV as Your Canadian IPTV Supplier: What We Deliver</h2>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          As a Canadian IPTV supplier, MapleStreamTV provides direct access to our server infrastructure — no intermediary resellers, no middlemen inflating the price. You deal with the source. Your subscription credentials connect directly to MapleStreamTV&apos;s Canadian servers, which serve the complete 25,000+ channel lineup with 99.9% uptime SLA. When something isn&apos;t working, our support team has direct access to the infrastructure to diagnose and fix issues immediately rather than escalating through layers of reseller support.
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 32 }}>
          The channel quality from a direct supplier is noticeably better than channels resold through third parties. When a new season starts, a new channel launches, or a broadcaster changes their feed URL, our team updates the system within hours. Resellers operating off cached stream lists can lag days or weeks behind. Direct IPTV subscribers on MapleStreamTV always have the latest, most accurate channel data.
        </p>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>IPTV Supplier vs IPTV Reseller: Understanding the Difference</h2>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 16 }}>
          An IPTV supplier like MapleStreamTV operates the server infrastructure directly and sources or aggregates channel streams. An IPTV reseller purchases credits from a supplier and sells them to end users, often under a different brand name. Both models can deliver good service, but buying from the supplier directly means lower prices (no reseller markup), faster support (no third party to go through), and more stable streams (no reseller panel intermediating your credentials).
        </p>
        <p style={{ color: "#333", lineHeight: 1.85, marginBottom: 24 }}>
          For Canadian customers, MapleStreamTV offers the benefits of both: direct supplier pricing and quality with the personal support touch of a local service. We know the Canadian market, the Canadian sports calendar, and the Canadian channel landscape better than offshore suppliers who treat Canada as an afterthought.
        </p>

        <div style={{ background: "#1a4a5e", borderRadius: 16, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Try Canada&apos;s Most Trusted IPTV Supplier Free</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, lineHeight: 1.7 }}>24-hour trial, no credit card, no commitment. Direct supplier quality from $9/month.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 40px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
        </div>
      </section>

    </main>
  );
}
