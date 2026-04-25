import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV Box Canada 2026 — Best Boxes & Free Trial | MapleStreamTV" },
  description:
    "Looking for an IPTV box in Canada? MapleStreamTV works on all IPTV boxes — MAG, Formuler, Fire Stick, Android TV box and more. Free 24h trial from $9/month.",
  keywords:
    "iptv box, iptv box canada, best iptv box canada, iptv box near me, iptv with box, at iptv box, iptv box at, free box for iptv in canada, iptv android box canada, mag box iptv canada",
  alternates: { canonical: "https://maplestreamtv.ca/iptv-box" },
  openGraph: {
    title: "IPTV Box Canada 2026 — Best Boxes & Free Trial | MapleStreamTV",
    description: "Best IPTV box in Canada. Works on MAG, Formuler, Fire Stick, Android TV. Free 24h trial from $9.",
    url: "https://maplestreamtv.ca/iptv-box",
    type: "website", siteName: "MapleStreamTV", locale: "en_CA",
    images: [{ url: "/og-image.webp", width: 1403, height: 761, alt: "IPTV Box Canada – MapleStreamTV" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.webp"] },
};

const faqItems = [
  { q: "What is the best IPTV box in Canada?", a: "For 4K IPTV in Canada, the Nvidia Shield Pro, Formuler Z10, and Amazon Fire TV Stick 4K Max are the top-rated IPTV boxes. For budget-friendly options, any Android TV box (Mecool, Ugoos) supports IPTV apps like TiviMate. MAG boxes are popular for their simple interface designed specifically for IPTV." },
  { q: "Do I need a box for IPTV or can I use my Smart TV?", a: "You don't necessarily need a separate IPTV box — most Samsung (Tizen), LG (webOS), and Android TV Smart TVs can run IPTV apps directly. However, an external Android TV box or Fire Stick usually delivers better performance and 4K H.265 support than the built-in TV apps." },
  { q: "Does MapleStreamTV offer a free IPTV box in Canada?", a: "MapleStreamTV includes free setup assistance and IPTV player recommendations with every subscription. We'll recommend the best IPTV box setup for your existing TV and help you get streaming within minutes of subscribing." },
  { q: "What IPTV app should I use on my box?", a: "TiviMate is the #1 recommended IPTV app for Android TV boxes — excellent 4K playback, EPG guide, and multi-stream support. IPTV Smarters Pro is great for multiple devices. For MAG boxes, the built-in Stalker Middleware app is preconfigured and easy to use." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const boxes = [
  { name: "Amazon Fire Stick 4K Max", price: "~$70", rating: "⭐⭐⭐⭐⭐", desc: "Best value IPTV box. TiviMate + IPTV Smarters both work great. Compact, easy to set up.", ideal: "Beginners & budget buyers" },
  { name: "Formuler Z10 Pro Max", price: "~$170", rating: "⭐⭐⭐⭐⭐", desc: "Premium IPTV box with built-in MyTVOnline 3 app. Dedicated hardware for IPTV streaming. Best 4K performance.", ideal: "IPTV power users" },
  { name: "Nvidia Shield Pro", price: "~$250", rating: "⭐⭐⭐⭐⭐", desc: "The most powerful Android TV box. Perfect for 4K HDR IPTV with TiviMate. Also great as a gaming console.", ideal: "Premium home theatre" },
  { name: "MAG 524w3", price: "~$130", rating: "⭐⭐⭐⭐", desc: "Purpose-built IPTV box with simple remote. 4K H.265 support. Easy setup for non-technical users.", ideal: "Simple, TV-like experience" },
  { name: "Mecool KM2 Plus", price: "~$80", rating: "⭐⭐⭐⭐", desc: "Netflix-certified Android TV box. TiviMate and IPTV Smarters work well. Good 4K performance at low price.", ideal: "Budget 4K" },
  { name: "Your Smart TV", price: "Free!", rating: "⭐⭐⭐⭐", desc: "Samsung, LG, Sony, and most Smart TVs support IPTV apps. No extra hardware needed in most cases.", ideal: "No extra box needed" },
];

export default function IPTVBoxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#f0f9f9", color: "#000", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #1a4a5e 0%, #2d7a9a 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>
              IPTV Box Canada · MapleStreamTV 2026
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, color: "#fff" }}>
              Best IPTV Box Canada 2026 — <span style={{ color: "#F96E5B" }}>Top Picks & Free Trial</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
              Looking for the best IPTV box in Canada? MapleStreamTV works on every IPTV box — from a $70 Fire Stick to a premium Formuler Z10. We also work on Smart TVs without any extra box. Get a free 24-hour trial to test on your existing equipment before buying anything new.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Free Trial →</a>
              <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
            </div>
          </div>
        </section>

        {/* Box comparison */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "60px 16px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>Best IPTV Boxes in Canada — 2026 Comparison</h2>
          <p style={{ color: "#333", marginBottom: 32, lineHeight: 1.7 }}>
            All of these IPTV boxes work with MapleStreamTV. You can also skip the box entirely if you have a Smart TV.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 18 }}>
            {boxes.map(box => (
              <div key={box.name} style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid rgba(45,122,154,0.15)", boxShadow: "0 2px 12px rgba(45,122,154,0.07)" }}>
                <p style={{ fontSize: 20, marginBottom: 4 }}>{box.rating}</p>
                <p style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{box.name}</p>
                <p style={{ color: "#2d7a9a", fontWeight: 700, marginBottom: 8, fontSize: 15 }}>{box.price}</p>
                <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{box.desc}</p>
                <p style={{ background: "rgba(45,122,154,0.07)", borderRadius: 6, padding: "5px 10px", fontSize: 12, fontWeight: 600, color: "#2d7a9a", display: "inline-block" }}>Best for: {box.ideal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Setup steps */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>How to Set Up IPTV on Your Box</h2>
          <ol style={{ paddingLeft: 24, lineHeight: 2.4, fontSize: "1rem", marginBottom: 40, color: "#333" }}>
            {["Subscribe to MapleStreamTV or start your free 24-hour trial","Receive your M3U URL or Xtream Codes credentials by email/WhatsApp","Download TiviMate or IPTV Smarters Pro on your box","Enter your credentials — channels load in under 2 minutes","Enjoy 25,000+ live channels and 120,000+ on-demand titles"].map((step, i) => (
              <li key={i} style={{ marginBottom: 6 }}><strong>Step {i+1}:</strong> {step}</li>
            ))}
          </ol>

          {/* FAQ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV Box Canada — FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map(item => (
              <div key={item.q} style={{ background: "#fff", border: "1px solid rgba(45,122,154,0.12)", borderRadius: 12, padding: "20px 24px" }}>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>{item.q}</p>
                <p style={{ color: "#333", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1a4a5e", padding: "60px 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>Try MapleStreamTV on Your IPTV Box — Free</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>24-hour free trial. No credit card. Works on any IPTV box or Smart TV. Plans from $9/month.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Get Free Trial →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>See Plans</a>
          </div>
        </section>
      </main>
    </>
  );
}
