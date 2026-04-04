import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best IPTV Canada 2026 | #1 IPTV Subscription – 24h Free Trial",
  description:
    "Canada's best IPTV service in 2026. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet & more. Free 24h trial. Starting at $19 CAD/month.",
  keywords:
    "IPTV Canada 2026, best IPTV Canada, IPTV subscription Canada, Canadian IPTV, IPTV free trial Canada, IPTV Canada cheap, best IPTV subscription Canada",
  alternates: { canonical: "https://www.maplestreamtv.ca" },
  openGraph: {
    title: "Best IPTV Canada 2026 | #1 IPTV Subscription – 24h Free Trial",
    description:
      "Canada's best IPTV service in 2026. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet & more. Free 24h trial. Starting at $19 CAD/month.",
    url: "https://www.maplestreamtv.ca",
    type: "website",
    siteName: "MapleStreamTV",
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What is IPTV and how does it work in Canada?",
    a: "IPTV (Internet Protocol Television) delivers live TV channels and on-demand content over your internet connection instead of cable or satellite. In Canada, MapleStreamTV provides 25,000+ live channels and 120,000+ movies and series streamed directly to your device in 4K quality.",
  },
  {
    q: "Is IPTV legal in Canada in 2026?",
    a: "IPTV technology is legal in Canada. MapleStreamTV complies with Canadian broadcasting regulations and provides access to publicly available streams. Users are responsible for ensuring they have the right to view content in their jurisdiction.",
  },
  {
    q: "How much does IPTV cost compared to cable in Canada?",
    a: "MapleStreamTV plans start at $19 CAD/month — compared to $80–$150/month for cable. A 12-month plan costs just $79 CAD total, saving you over $900/year versus Bell or Rogers.",
  },
  {
    q: "Can I get a free IPTV trial in Canada?",
    a: "Yes! MapleStreamTV offers a free 24-hour trial with no credit card required. Contact us via WhatsApp or email to activate your trial instantly.",
  },
  {
    q: "What devices work with MapleStreamTV?",
    a: "MapleStreamTV works on Amazon Firestick, Samsung & LG Smart TVs, Android TV boxes, Android phones, iPhones, iPads, Apple TV, MAG boxes, Windows PCs, and Macs. Any device with an IPTV player app is compatible.",
  },
  {
    q: "Do I need a VPN for IPTV in Canada?",
    a: "No VPN is required to use MapleStreamTV in Canada. Our servers are optimized for Canadian connections and deliver fast, stable streams without any additional software.",
  },
  {
    q: "What Canadian sports channels are included?",
    a: "Every plan includes TSN (all feeds), Sportsnet (all regional feeds), CBC Sports, RDS, TVA Sports, and more. Full NHL, NFL, NBA, MLB, UFC, CFL, and Premier League coverage is included with no blackouts.",
  },
  {
    q: "How do I set up IPTV on my Firestick?",
    a: "Download IPTV Smarters Pro or TiviMate from the Amazon App Store, enter the server URL, username, and password we send you, and start streaming. Full setup takes under 5 minutes. See our Firestick setup guide for step-by-step instructions.",
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
  url: "https://www.maplestreamtv.ca",
  email: "help@maplestreamtv.ca",
  description:
    "Canada's #1 IPTV subscription service. 25,000+ live channels, 120,000+ movies & series in 4K.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
  },
  areaServed: "CA",
};

const plans = [
  { name: "1 Month", price: "$19 CAD", href: "/pricing/1-month", badge: null },
  { name: "3 Months", price: "$29 CAD", href: "/pricing/3-months", badge: null },
  { name: "6 Months", price: "$49 CAD", href: "/pricing/6-months", badge: "Popular" },
  { name: "12 Months", price: "$79 CAD", href: "/pricing/12-months", badge: "Best Value" },
];

const devices = [
  { name: "Firestick", href: "/iptv-firestick-canada" },
  { name: "Android TV", href: "/iptv-android-tv-canada" },
  { name: "Samsung / LG", href: "/iptv-smart-tv-canada" },
  { name: "Apple TV", href: "/iptv-apple-tv-canada" },
  { name: "MAG Box", href: "/iptv-mag-box-canada" },
  { name: "iPhone / iPad", href: "/iptv-apple-tv-canada" },
  { name: "Android Phone", href: "/iptv-android-tv-canada" },
  { name: "PC / Mac", href: "/pricing" },
];

const sports = [
  { name: "NHL", icon: "🏒" },
  { name: "NFL", icon: "🏈" },
  { name: "NBA", icon: "🏀" },
  { name: "MLB", icon: "⚾" },
  { name: "UFC PPV", icon: "🥊" },
  { name: "Premier League", icon: "⚽" },
  { name: "CFL", icon: "🏉" },
  { name: "F1", icon: "🏎️" },
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
  { feature: "Price/month", us: "$19 CAD", cable: "$80–$150", other: "$15–$25" },
  { feature: "Live Channels", us: "25,000+", cable: "150–500", other: "5,000–15,000" },
  { feature: "4K Streaming", us: "✓", cable: "Limited", other: "Varies" },
  { feature: "Contracts", us: "None", cable: "1–2 years", other: "Varies" },
  { feature: "Free Trial", us: "24h free trial", cable: "×", other: "Rarely" },
  { feature: "Canadian Support", us: "24/7", cable: "Business hours", other: "×" },
  { feature: "Devices", us: "All devices", cable: "1–2 boxes", other: "Limited" },
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
              🍁 #1 IPTV Service in Canada 2026
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Canada&apos;s Best IPTV<br />
              <span style={{ color: "#E53935" }}>Service 2026</span>
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
              Stream 25,000+ live TV channels and 120,000+ movies &amp; series in 4K. NHL, TSN,
              CTV, Sportsnet &amp; more — all in one Canadian IPTV subscription.
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
              { val: "25,000+", label: "Live Channels" },
              { val: "120,000+", label: "Movies & Series" },
              { val: "4K Ultra HD", label: "Streaming Quality" },
              { val: "24/7", label: "Canadian Support" },
            ].map((s) => (
              <div key={s.val}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#E53935" }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. PRICING PREVIEW ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#E53935", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              Transparent Pricing
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, marginBottom: 12 }}>
              IPTV Canada Subscription Plans
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              All plans include 25,000+ channels, 4K streaming, and 24/7 Canadian support. Pay via Interac e-Transfer.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    background: plan.badge === "Best Value" ? "rgba(229,57,53,0.08)" : "rgba(255,255,255,0.03)",
                    border: plan.badge === "Best Value" ? "1.5px solid rgba(229,57,53,0.5)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "32px 24px",
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  {plan.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#E53935",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "4px 14px",
                        borderRadius: 999,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#E53935", marginBottom: 20 }}>{plan.price}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 8 }}>✓ 25,000+ channels</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 8 }}>✓ 4K streaming</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 24 }}>✓ All devices</div>
                  <Link
                    href={plan.href}
                    style={{
                      display: "block",
                      background: plan.badge === "Best Value" ? "#E53935" : "rgba(229,57,53,0.15)",
                      color: plan.badge === "Best Value" ? "#fff" : "#E53935",
                      fontWeight: 700,
                      fontSize: 14,
                      padding: "12px 20px",
                      borderRadius: 12,
                      textDecoration: "none",
                      border: plan.badge === "Best Value" ? "none" : "1px solid rgba(229,57,53,0.3)",
                    }}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/pricing" style={{ color: "#E53935", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                View full pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. DEVICES ── */}
        <section style={{ padding: "80px 16px", background: "#0d0d0d" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Works on All Your Devices
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              MapleStreamTV IPTV Canada works on every major platform and device.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 16,
              }}
            >
              {devices.map((d) => (
                <Link
                  key={d.name}
                  href={d.href}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: "20px 16px",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#d1d5db",
                    fontSize: 13,
                    fontWeight: 600,
                    transition: "border-color 0.2s",
                    display: "block",
                  }}
                >
                  {d.name}
                </Link>
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
              All Your Favourite Canadian Channels
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              MapleStreamTV IPTV Canada includes every major Canadian network — no blackouts on NHL, CFL, or NBA games.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {["CBC", "CTV", "Global", "City TV", "CP24", "TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5", "Sportsnet", "Sportsnet ONE", "Sportsnet West", "Sportsnet Pacific", "RDS", "TVA Sports", "TVA", "Canal Vie"].map((ch) => (
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
        <section style={{ padding: "80px 16px", background: "#0d0d0d" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              Never Miss a Game
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 16, fontSize: 15 }}>
              All PPV events included at no extra charge with your IPTV Canada subscription.
            </p>
            <p style={{ textAlign: "center", color: "#4ade80", fontSize: 13, marginBottom: 44 }}>
              ✓ No blackouts &nbsp;&nbsp; ✓ All PPV events free &nbsp;&nbsp; ✓ 4K live sports
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: 16,
              }}
            >
              {sports.map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: "rgba(229,57,53,0.06)",
                    border: "1px solid rgba(229,57,53,0.15)",
                    borderRadius: 16,
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. COMPARISON TABLE ── */}
        <section style={{ padding: "80px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12 }}>
              MapleStreamTV vs Cable vs Other IPTV
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
              See why Canadian IPTV subscribers are switching to MapleStreamTV.
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
              Start Streaming Today
            </h2>
            <p style={{ color: "#9ca3af", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              Join thousands of Canadians who switched from cable to MapleStreamTV. Try free for 24 hours — no credit card required.
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
