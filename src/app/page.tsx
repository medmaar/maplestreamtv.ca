import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "./PricingSection";

export const metadata: Metadata = {
  title: "Best IPTV Box Canada 2026 — Top Providers Near You | MapleStreamTV",
  description:
    "Best IPTV box and providers in Canada 2026. MapleStreamTV is #1 rated IPTV near you — free 24h trial, no credit card. 25,000+ channels, 4K, kids channels from $9/month.",
  keywords:
    "iptv box, iptv near me, iptv free trial, iptv providers canada, iptv server, iptv supplier, best iptv for canada, iptv provider canada, iptv service canada, la iptv, best iptv apps, MapleStreamTV",
  alternates: { canonical: "https://maplestreamtv.ca" },
  openGraph: {
    images: [{ url: "/og-image.webp", width: 1403, height: 761, alt: "MapleStreamTV — Cut Your Cable Bill, Keep Every Channel" }],
    title: "Best IPTV Box Canada 2026 — Top Providers Near You | MapleStreamTV",
    description:
      "Save $900+/year vs Bell or Rogers. 25,000+ channels, kids channels, all Canadian locals — 5-minute setup, no contracts. Free 24h trial.",
    url: "https://maplestreamtv.ca",
    type: "website",
    siteName: "MapleStreamTV",
  },
  twitter: { card: "summary_large_image", images: ["/og-image.webp"] },
};

const faqs = [
  {
    q: "How much can I save by switching from cable to MapleStreamTV?",
    a: "The average Canadian cable bill runs $80–$150/month with Bell, Rogers, or Telus. MapleStreamTV plans start at $9/month — most families save over $900 a year. A 12-month plan costs just $49 total, less than a single month of cable.",
  },
  {
    q: "Is setup difficult if I'm not very tech-savvy?",
    a: "Not at all. If you can install an app on your phone or Smart TV, you can set up MapleStreamTV. Plug in a Fire Stick, open the app on your Smart TV, enter your login details, and you're watching live TV in under 5 minutes. We walk you through every step after you subscribe.",
  },
  {
    q: "What kids and family channels are included?",
    a: "MapleStreamTV includes Disney Channel, Treehouse, YTV, Teletoon, Nickelodeon, Cartoon Network, Disney Junior, and hundreds more. Plus CBC Kids, TVO Kids, and all major Canadian family networks — included in every plan, no add-ons needed.",
  },
  {
    q: "Can my whole family stream at the same time?",
    a: "Yes — multi-connection plans let 2–10 family members stream simultaneously on separate devices. Kids watch cartoons on the tablet, you catch the game on the living room TV, your partner streams a movie on another screen — all at the same time, one subscription.",
  },
  {
    q: "Will I keep all my local Canadian channels like CBC and CTV?",
    a: "Yes. Every MapleStreamTV plan includes CBC, CTV, Global, City TV, CP24, Noovo, and regional feeds. All the local news, weather, and Canadian content you rely on — without the cable contract.",
  },
  {
    q: "Is there a free trial before I commit?",
    a: "Yes — free 24-hour trial with no credit card required. Full access to all 25,000+ channels on any device. Contact us via WhatsApp or email to start instantly.",
  },
  {
    q: "Is IPTV legal in Canada?",
    a: "IPTV technology is completely legal in Canada — it's the same delivery method used by Bell Fibe, Rogers Ignite, and other major telecoms. MapleStreamTV provides access to publicly available streams and operates within Canadian broadcasting standards.",
  },
  {
    q: "Do I need to sign a contract?",
    a: "No contracts, ever. Subscribe month-to-month and cancel any time with no penalty. Most families start with a 1-month plan to try it out, then switch to the 12-month plan once they see how much they're saving.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MapleStreamTV",
  url: "https://maplestreamtv.ca",
  email: "help@maplestreamtv.ca",
  description:
    "Canada's cord-cutting IPTV service. Save $900+/year vs cable. 25,000+ channels, kids channels, all Canadian locals from $9/month.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
  },
  areaServed: "CA",
};

const deviceNames = [
  "Amazon Fire Stick", "Samsung Smart TV", "LG Smart TV", "iPhone & iPad",
  "Android Phone", "Android TV Box", "MAG Box", "Apple TV",
  "Roku", "Windows PC", "Mac", "Kodi", "VLC Player", "Formuler", "Xbox", "PlayStation",
];

const sportsChannels = [
  "TSN", "Sportsnet", "CBC Sports", "TVA Sports", "RDS", "NHL Network",
  "NFL Network", "NBA TV", "ESPN", "ESPN 2", "beIN Sports", "Sky Sports",
  "DAZN", "UFC Fight Pass", "Golf Channel", "Olympic Channel",
];

const cities = [
  { name: "Toronto", href: "/iptv-toronto" },
  { name: "Vancouver", href: "/iptv-vancouver" },
  { name: "Montreal", href: "/iptv-montreal" },
  { name: "Calgary", href: "/iptv-calgary" },
  { name: "Ottawa", href: "/iptv-ottawa" },
  { name: "Edmonton", href: "/iptv-edmonton" },
];

const comparison = [
  { feature: "Monthly Cost", us: "$9", cable: "$80–$150", other: "$15–$25" },
  { feature: "Annual Savings", us: "$900+/yr saved", cable: "—", other: "Some savings" },
  { feature: "Live Channels", us: "25,000+", cable: "150–500", other: "5,000–15,000" },
  { feature: "Kids Channels", us: "100+ included", cable: "Add-on cost", other: "Limited" },
  { feature: "Contracts", us: "None — cancel anytime", cable: "1–2 years", other: "Varies" },
  { feature: "Setup Time", us: "5 minutes", cable: "Technician visit", other: "Varies" },
  { feature: "Free Trial", us: "Free 24h trial", cable: "×", other: "Rarely" },
  { feature: "Devices", us: "Any TV, phone, tablet", cable: "1–2 cable boxes", other: "Limited" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main style={{ background: "#0a0a0a", color: "#fff" }}>
        {/* ── 1. HERO ── */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(229,57,53,0.18) 0%, transparent 65%), #0a0a0a",
            padding: "90px 16px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(229,57,53,0.12)",
                border: "1px solid rgba(229,57,53,0.3)",
                color: "#E53935",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 18px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              🍁 Canada's #1 Cord-Cutting Service 2026
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Cut the Cable,<br />
              <span style={{ color: "#E53935" }}>Not the Entertainment</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "#9ca3af",
                maxWidth: 640,
                margin: "0 auto 36px",
                lineHeight: 1.7,
              }}
            >
              Save $900+ a year vs Bell or Rogers. 25,000+ channels including all your local
              Canadian favourites — easy setup in 5 minutes on any TV.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link
                href="/pricing"
                style={{
                  background: "#E53935",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Subscribe Now →
              </Link>
              <Link
                href="/free-trial"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(229,57,53,0.5)",
                  color: "#E53935",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Try 24h Free
              </Link>
            </div>
            <p style={{ color: "#6b7280", fontSize: 13 }}>
              ✓ Free 24h Trial &nbsp;&nbsp; ✓ No Contracts &nbsp;&nbsp; ✓ Interac e-Transfer Accepted
            </p>
          </div>
        </section>

        {/* ── 2. STATS BAR ── */}
        <section style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "28px 16px" }}>
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
              textAlign: "center",
            }}
          >
            {[
              { val: "$900+", label: "Saved vs Cable/Year" },
              { val: "25,000+", label: "Live Channels" },
              { val: "5 min", label: "Setup Time" },
              { val: "24/7", label: "Canadian Support" },
            ].map((s) => (
              <div key={s.val}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#E53935" }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. INTERACTIVE PRICING ── */}
        <PricingSection />

        {/* ── 4. DEVICES ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Works on Every Screen in Your Home
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              No cable boxes to rent or return — watch on your existing TVs, phones, and tablets.
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...deviceNames, ...deviceNames].map((name, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: "14px 24px",
                    color: "#d1d5db",
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CANADIAN CHANNELS ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ color: "#E53935", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
              Canadian Content
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 16 }}>
              Keep All Your Canadian Favourites
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              Every local channel, every regional network. No missing channels when you cut the cord with MapleStreamTV.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {["CBC", "CTV", "Global", "City TV", "CP24", "Disney Channel", "Treehouse", "YTV", "Teletoon", "Nickelodeon", "HGTV", "Food Network", "W Network", "TSN", "Sportsnet", "TVA", "Canal Vie", "Noovo"].map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#d1d5db",
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#6b7280", fontSize: 13 }}>
              + 25,000+ more channels from around the world
            </p>
          </div>
        </section>

        {/* ── 6. SPORTS ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Sports, Movies &amp; More — All Included
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 16, fontSize: 15 }}>
              Cutting the cord doesn't mean losing sports or entertainment. NHL, UFC, movies, and kids shows — all in one plan.
            </p>
            <p style={{ textAlign: "center", color: "#4ade80", fontSize: 13, marginBottom: 44 }}>
              ✓ No blackouts &nbsp;&nbsp; ✓ PPV events included &nbsp;&nbsp; ✓ 120,000+ movies &amp; series
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...sportsChannels, ...sportsChannels].map((ch, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "rgba(229,57,53,0.06)",
                    border: "1px solid rgba(229,57,53,0.15)",
                    borderRadius: 14,
                    padding: "14px 24px",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {ch}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. COMPARISON TABLE ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              MapleStreamTV vs Bell/Rogers vs Other IPTV
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              You get more channels, no contract, and save over $900 a year. Here's why Canadian families are cutting the cord.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#6b7280", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#E53935", fontWeight: 700, borderBottom: "1px solid rgba(229,57,53,0.3)", background: "rgba(229,57,53,0.06)" }}>MapleStreamTV</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#6b7280", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Cable</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#6b7280", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Other IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                      <td style={{ padding: "14px 16px", color: "#d1d5db", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#4ade80", fontWeight: 600, background: "rgba(229,57,53,0.04)" }}>{row.us}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#6b7280" }}>{row.cable}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#6b7280" }}>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#E53935", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    padding: "24px 28px",
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: "#fff" }}>{faq.q}</h3>
                  <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CITIES ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Serving Canadians Coast to Coast
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              Fast IPTV Canada servers optimized for every major Canadian city.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 14,
              }}
            >
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "18px 16px",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#d1d5db",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "block",
                  }}
                >
                  🍁 {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            padding: "80px 16px",
            textAlign: "center",
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(229,57,53,0.14) 0%, transparent 70%), #0d0d0d",
          }}
        >
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: 16 }}>
              Ready to Cut Your Cable Bill?
            </h2>
            <p style={{ color: "#9ca3af", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              The average Canadian family saves over $900/year switching to MapleStreamTV. Try free for 24 hours — no credit card, no commitment.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/free-trial"
                style={{
                  background: "#E53935",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get Free Trial
              </Link>
              <Link
                href="/pricing"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(229,57,53,0.4)",
                  color: "#E53935",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
