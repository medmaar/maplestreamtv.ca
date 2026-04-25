import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { absolute: "IPTV for Beginners Canada — Complete Guide 2026 | MapleStreamTV" },
  description: "New to IPTV? This complete IPTV beginner's guide explains everything — what IPTV is, how it works, what you need, and how to start in Canada from $9/month.",
  keywords: "iptv for beginners, iptv beginners guide canada, what is iptv canada, how does iptv work canada, iptv explained canada, iptv starter guide 2026",
  alternates: { canonical: "https://maplestreamtv.ca/iptv-for-beginners" },
};
const faqs = [
  { q: "What is IPTV?", a: "IPTV stands for Internet Protocol Television. Instead of receiving TV signals through cable, satellite, or antenna, IPTV delivers live TV channels over your internet connection — the same way Netflix streams video. The difference is that IPTV includes live TV channels, sports, and news in real-time, not just on-demand content." },
  { q: "What do I need to start with IPTV in Canada?", a: "You need: (1) a reliable internet connection — 10 Mbps is enough for HD, 25 Mbps for 4K; (2) a compatible device — Smart TV, Fire Stick, Android TV box, iPhone, or Android phone; (3) an IPTV app like IPTV Smarters Pro or TiviMate; and (4) an IPTV subscription like MapleStreamTV. That's it." },
  { q: "Is IPTV legal in Canada?", a: "IPTV technology itself is completely legal in Canada — it's the same delivery method used by Bell Fibe, Rogers Ignite, and Telus Optik. MapleStreamTV provides access to publicly available streams within Canadian broadcasting standards." },
  { q: "Is IPTV difficult to set up as a beginner?", a: "Not at all. If you can install an app on your phone or Smart TV, you can set up IPTV. MapleStreamTV walks every new subscriber through setup step-by-step via WhatsApp — most beginners are watching live TV within 5 minutes of subscribing." },
  { q: "What's the difference between IPTV and cable TV?", a: "Cable TV uses a physical cable connection and costs $80–$150/month with limited channels. IPTV uses your internet connection and costs from $9/month with 25,000+ channels. IPTV also has no contracts, no equipment rental fees, and works on every device you already own." },
];
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
export default function IPTVBeginnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#f0f9f9", color: "#000", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #1a4a5e 0%, #2d7a9a 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" }}>IPTV for Beginners · Canada · MapleStreamTV</span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16, color: "#fff" }}>
              IPTV for Beginners Canada — <span style={{ color: "#F96E5B" }}>Complete Starter Guide 2026</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
              New to IPTV? You&apos;re in the right place. This beginner&apos;s guide explains everything you need to know about IPTV in Canada — what it is, what you need to get started, how much it costs, and how to set it up in under 5 minutes. No technical experience required.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Start Free (No Experience Needed) →</a>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>IPTV Explained: How It Works</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: 32 }}>
            When you watch Netflix, you&apos;re streaming video over the internet. IPTV works the same way — but instead of movies and shows, you&apos;re streaming live TV channels. Your router receives the TV signal from IPTV servers (ours are in Canada), and your device displays it in real-time. The result is live TV — news, sports, Canadian channels — delivered over your existing internet connection.
          </p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What You Need for IPTV (Beginner Checklist)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginBottom: 40 }}>
            {[
              { num: "1", title: "Internet Connection", desc: "10 Mbps+ for HD. 25 Mbps+ for 4K. Most Canadian home internet plans are more than sufficient." },
              { num: "2", title: "A Device", desc: "You probably already have one — Smart TV, Fire Stick, iPhone, Android, or laptop. Any works." },
              { num: "3", title: "An IPTV App", desc: "IPTV Smarters Pro (free for Android, ~$6 for iOS) or TiviMate (Android). We recommend and help install both." },
              { num: "4", title: "A Subscription", desc: "MapleStreamTV from $9/month. We send your credentials by email after you sign up — takes 2 minutes." },
            ].map(s => (
              <div key={s.num} style={{ background: "#fff", borderRadius: 14, padding: 22, border: "1px solid rgba(45,122,154,0.12)" }}>
                <p style={{ fontSize: 28, fontWeight: 900, color: "#2d7a9a", marginBottom: 8 }}>{s.num}</p>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>{s.title}</p>
                <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>How to Start IPTV in Canada — Step by Step</h2>
          <ol style={{ paddingLeft: 24, lineHeight: 2.5, fontSize: "1rem", marginBottom: 40, color: "#333" }}>
            {["Sign up for MapleStreamTV or start your free 24-hour trial (no credit card needed)","Receive your IPTV credentials by email or WhatsApp within minutes","Download IPTV Smarters Pro on your device (App Store / Google Play / Fire Stick)","Open the app → Add New User → enter your MapleStreamTV credentials","All 25,000+ channels load automatically — live TV, sports, kids channels, movies and more","If you need help: contact us via WhatsApp and we&apos;ll guide you through setup in real time"].map((s, i) => (
              <li key={i} style={{ marginBottom: 4 }}><strong>Step {i+1}:</strong> {s}</li>
            ))}
          </ol>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV Beginner FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {faqs.map(f => (
              <div key={f.q} style={{ background: "#fff", border: "1px solid rgba(45,122,154,0.12)", borderRadius: 12, padding: "20px 24px" }}>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>{f.q}</p>
                <p style={{ color: "#333", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#1a4a5e", padding: "60px 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: 16 }}>Ready to Start? Try IPTV Free — No Experience Needed</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>24-hour free trial. No credit card. We&apos;ll walk you through setup step by step. Plans from $9/month.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Start Your Free Trial →</a>
        </section>
      </main>
    </>
  );
}
