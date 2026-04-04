import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Canada 2026 | #1 IPTV Subscription – 24h Free Trial",
  description:
    "Canada's best IPTV service in 2026. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet & more. Free 24h trial. Starting at $19 CAD/month.",
  keywords:
    "IPTV Canada 2026, best IPTV Canada, IPTV subscription Canada, Canadian IPTV, IPTV free trial Canada, IPTV Canada cheap",
  alternates: {
    canonical: "https://www.maplestreamtv.ca",
  },
  openGraph: {
    title: "Best IPTV Canada 2026 | #1 IPTV Subscription – 24h Free Trial",
    description:
      "Canada's best IPTV service in 2026. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet & more. Free 24h trial. Starting at $19 CAD/month.",
    url: "https://www.maplestreamtv.ca",
    type: "website",
    siteName: "MapleStreamTV",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const channels = [
  "NHL", "NFL", "NBA", "MLB", "UFC", "F1", "Premier League",
  "TSN", "Sportsnet", "CTV", "CBC", "Global", "RDS", "ESPN", "Sky Sports",
];

const testimonials = [
  {
    name: "Marc L.",
    city: "Montreal, QC",
    text: "Switched from Bell and saving over $100/month. Every Canadiens game in 4K — absolutely incredible service.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    city: "Toronto, ON",
    text: "All Leafs games, TSN, and Sportsnet in crystal clear quality. Setup took less than 5 minutes on my Fire Stick.",
    rating: 5,
  },
  {
    name: "Derek P.",
    city: "Vancouver, BC",
    text: "Been using it for 8 months. Zero buffering, great support, and the VOD library is massive. Best IPTV in Canada.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    city: "Calgary, AB",
    text: "International channels for my family AND all Canadian sports. Finally one service that has everything.",
    rating: 5,
  },
  {
    name: "James T.",
    city: "Ottawa, ON",
    text: "The free trial convinced me instantly. Cancelled Rogers the same week. Never looking back.",
    rating: 5,
  },
  {
    name: "Nicole B.",
    city: "Edmonton, AB",
    text: "Customer support is incredibly responsive. Had a question at midnight and got a reply in minutes. 10/10.",
    rating: 5,
  },
];

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
    a: "MapleStreamTV works on Amazon Firestick, all Android TV boxes, Samsung & LG Smart TVs, Apple TV, iPhone, Android phones, MAG boxes, Roku, Chromecast, and Windows/Mac computers.",
  },
  {
    q: "Do I need a VPN for IPTV in Canada?",
    a: "No, you do not need a VPN to use MapleStreamTV in Canada. Our service is optimized for Canadian internet connections and streams reliably without one.",
  },
  {
    q: "What Canadian sports channels are included?",
    a: "All MapleStreamTV plans include TSN 1–5, Sportsnet (East, West, Ontario, Pacific, 360), CBC Sports, RDS, TVA Sports, and every regional feed for NHL, NFL, NBA, MLB, CFL, UFC, and F1.",
  },
  {
    q: "How do I set up IPTV on my Firestick?",
    a: "Download the Downloader app from the Amazon App Store, use it to install an IPTV player like TiviMate or IPTV Smarters, then enter the server credentials sent by MapleStreamTV. Full setup takes under 5 minutes.",
  },
];

const plans = [
  { duration: "1 Month", price: "$19", period: "CAD", best: false },
  { duration: "3 Months", price: "$29", period: "CAD", best: false },
  { duration: "6 Months", price: "$49", period: "CAD", best: false },
  { duration: "12 Months", price: "$79", period: "CAD", best: true },
];

const devices = [
  { icon: "🔥", name: "Amazon Firestick", href: "/iptv-firestick-canada" },
  { icon: "📱", name: "Android TV", href: "/iptv-android-tv-canada" },
  { icon: "📺", name: "Samsung & LG Smart TV", href: "/iptv-smart-tv-canada" },
  { icon: "🍎", name: "Apple TV & iPhone", href: "/iptv-apple-tv-canada" },
  { icon: "📡", name: "MAG Box", href: "/iptv-mag-box-canada" },
  { icon: "🪟", name: "Windows & Mac", href: "/iptv-windows-canada" },
  { icon: "🤖", name: "Android Phone", href: "/iptv-android-canada" },
  { icon: "🔴", name: "Roku", href: "/iptv-roku-canada" },
];

const sports = [
  { icon: "🏒", name: "NHL", tagline: "Every game, every team, every regional feed." },
  { icon: "🏈", name: "NFL", tagline: "Sunday Ticket, RedZone & all playoff action." },
  { icon: "🏀", name: "NBA", tagline: "All 82 games plus playoffs and Finals." },
  { icon: "⚾", name: "MLB", tagline: "Full season coverage including postseason." },
  { icon: "🥊", name: "UFC", tagline: "Every PPV event included at no extra cost." },
  { icon: "⚽", name: "Premier League", tagline: "All 380 matches streamed in HD & 4K." },
];

const cities = [
  { name: "Toronto", href: "/iptv-toronto" },
  { name: "Vancouver", href: "/iptv-vancouver" },
  { name: "Montreal", href: "/iptv-montreal" },
  { name: "Calgary", href: "/iptv-calgary" },
  { name: "Ottawa", href: "/iptv-ottawa" },
  { name: "Edmonton", href: "/iptv-edmonton" },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MapleStreamTV",
    addressCountry: "CA",
    email: "help@maplestreamtv.ca",
    url: "https://www.maplestreamtv.ca",
    telephone: "+17828026280",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MapleStreamTV IPTV Canada",
    description:
      "Premium Canadian IPTV service with 25,000+ live channels and 120,000+ movies and series in 4K quality.",
    brand: { "@type": "Brand", name: "MapleStreamTV" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "19",
      highPrice: "79",
      priceCurrency: "CAD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1247",
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main style={{ background: "#0a0a0a", color: "#fff" }}>

        {/* ── 1. HERO ── */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(229,57,53,0.22) 0%, transparent 65%), #0a0a0a",
            padding: "100px 16px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                marginBottom: 24,
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(229,57,53,0.12)",
                border: "1px solid rgba(229,57,53,0.32)",
                color: "#E53935",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              🍁 #1 IPTV Service in Canada 2026
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 20,
                color: "#fff",
              }}
            >
              Canada&apos;s Best{" "}
              <span style={{ color: "#E53935" }}>IPTV Service</span> 2026
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: "clamp(15px, 2.2vw, 19px)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 620,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Stream 25,000+ live TV channels and 120,000+ movies &amp; series in 4K.
              NHL, TSN, CTV, Sportsnet &amp; more — all in one Canadian IPTV subscription.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 28,
              }}
            >
              <a
                href="/pricing"
                style={{
                  background: "#E53935",
                  color: "#fff",
                  padding: "16px 36px",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  boxShadow: "0 8px 32px rgba(229,57,53,0.35)",
                  display: "inline-block",
                }}
              >
                Subscribe Now →
              </a>
              <a
                href="/free-trial"
                style={{
                  color: "#fff",
                  padding: "16px 36px",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.28)",
                  display: "inline-block",
                  background: "transparent",
                }}
              >
                Try 24h Free
              </a>
            </div>

            {/* Trust line */}
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, letterSpacing: "0.01em" }}>
              ✓ Free 24h Trial &nbsp;&nbsp; ✓ No Contracts &nbsp;&nbsp; ✓ Interac e-Transfer Accepted
            </p>
          </div>
        </section>

        {/* ── 2. STATS BAR ── */}
        <section
          style={{
            background: "#10131E",
            borderTop: "1px solid rgba(229,57,53,0.2)",
            borderBottom: "1px solid rgba(229,57,53,0.2)",
            padding: "32px 16px",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              textAlign: "center",
            }}
          >
            {[
              { num: "25,000+", label: "Live Channels" },
              { num: "120,000+", label: "Movies & Series" },
              { num: "4K", label: "Ultra HD" },
              { num: "24/7", label: "Canadian Support" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "clamp(22px, 3.5vw, 36px)",
                    fontWeight: 900,
                    color: "#E53935",
                    lineHeight: 1.1,
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. CHANNEL TICKER ── */}
        <div
          style={{
            background: "rgba(229,57,53,0.07)",
            borderBottom: "1px solid rgba(229,57,53,0.14)",
            padding: "14px 0",
            overflow: "hidden",
          }}
        >
          <style>{`
            @keyframes ticker {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .channel-ticker {
              display: flex;
              white-space: nowrap;
              animation: ticker 30s linear infinite;
            }
          `}</style>
          <div className="channel-ticker">
            {[...channels, ...channels].map((ch, i) => (
              <span
                key={i}
                style={{
                  marginRight: 48,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.6)",
                  flexShrink: 0,
                }}
              >
                {ch}
                <span style={{ marginLeft: 48, color: "#E53935", opacity: 0.5 }}>•</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 4. PRICING PREVIEW ── */}
        <section style={{ background: "#0a0a0a", padding: "80px 16px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Transparent Pricing
            </p>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              IPTV Canada Subscription Plans
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                fontSize: 15,
                marginBottom: 48,
              }}
            >
              All plans include every feature. No add-ons, no surprises.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
                marginBottom: 28,
              }}
            >
              {plans.map((plan) => (
                <div
                  key={plan.duration}
                  style={{
                    background: plan.best ? "rgba(229,57,53,0.08)" : "rgba(255,255,255,0.03)",
                    border: plan.best
                      ? "2px solid #E53935"
                      : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: "32px 24px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {plan.best && (
                    <div
                      style={{
                        position: "absolute",
                        top: -13,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#E53935",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "4px 14px",
                        borderRadius: 999,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Best Value
                    </div>
                  )}
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: 10,
                    }}
                  >
                    {plan.duration}
                  </div>
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: 900,
                      color: plan.best ? "#E53935" : "#fff",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {plan.price}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                      marginBottom: 24,
                    }}
                  >
                    {plan.period}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 24px",
                      textAlign: "left",
                    }}
                  >
                    {[
                      "25,000+ channels",
                      "120,000+ movies & series",
                      "4K Ultra HD",
                      "Multi-device",
                      "Interac e-Transfer",
                    ].map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.6)",
                          padding: "5px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span style={{ color: "#4ade80", fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/pricing"
                    style={{
                      display: "block",
                      background: plan.best ? "#E53935" : "rgba(255,255,255,0.07)",
                      color: "#fff",
                      padding: "12px 20px",
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    Get This Plan →
                  </a>
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Interac e-Transfer accepted · Instant activation · No contracts
            </p>
          </div>
        </section>

        {/* ── 5. DEVICES SECTION ── */}
        <section
          style={{
            background: "#10131E",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Compatible Devices
            </p>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 48,
              }}
            >
              Works on All Your Devices
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16,
              }}
            >
              {devices.map((d) => (
                <a
                  key={d.name}
                  href={d.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "18px 20px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "border-color 0.2s",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{d.icon}</span>
                  {d.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CANADIAN CHANNELS SECTION ── */}
        <section
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(229,57,53,0.07) 0%, transparent 70%), #0a0a0a",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Canadian Content
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              All Your Favourite Canadian Channels
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Every major Canadian broadcaster is covered. CBC, CTV, Global, City TV, CP24, RDS, and TVA — all in one subscription. Plus all five TSN feeds and every regional Sportsnet channel (East, West, Ontario, Pacific, and 360).
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
                marginBottom: 32,
              }}
            >
              {[
                "CBC", "CTV", "Global", "City TV", "CP24",
                "TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5",
                "Sportsnet East", "Sportsnet West", "Sportsnet Ontario", "Sportsnet Pacific", "Sportsnet 360",
                "RDS", "TVA Sports",
              ].map((ch) => (
                <span
                  key={ch}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              No blackouts on NHL, CFL, or NBA — watch every game live, including local matchups.
            </p>
          </div>
        </section>

        {/* ── 7. SPORTS SECTION ── */}
        <section
          style={{
            background: "#10131E",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Live Sports
            </p>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 48,
              }}
            >
              Never Miss a Game
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 18,
                marginBottom: 28,
              }}
            >
              {sports.map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 18,
                    padding: "28px 22px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {s.name}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    {s.tagline}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "#E53935", fontWeight: 600 }}>
              All PPV events included at no extra charge
            </p>
          </div>
        </section>

        {/* ── 8. COMPARISON TABLE ── */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Compare
            </p>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 48,
              }}
            >
              MapleStreamTV vs Cable vs Other IPTV
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr>
                    {["Feature", "MapleStreamTV", "Cable", "Other IPTV"].map((col, i) => (
                      <th
                        key={col}
                        style={{
                          padding: "14px 16px",
                          textAlign: i === 0 ? "left" : "center",
                          fontWeight: 700,
                          color: i === 1 ? "#E53935" : "rgba(255,255,255,0.6)",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          background: i === 1 ? "rgba(229,57,53,0.06)" : "transparent",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Price/month",
                      maple: "$19/mo",
                      cable: "$90–150/mo",
                      other: "$15–30/mo",
                    },
                    {
                      feature: "Channels",
                      maple: "25,000+",
                      cable: "200–500",
                      other: "5,000–10,000",
                    },
                    {
                      feature: "4K Included",
                      maple: "✓",
                      cable: "Extra cost",
                      other: "Sometimes",
                    },
                    {
                      feature: "Contracts",
                      maple: "None",
                      cable: "2-year",
                      other: "None",
                    },
                    {
                      feature: "Free Trial",
                      maple: "✓ Free 24h",
                      cable: "✗",
                      other: "Rarely",
                    },
                    {
                      feature: "Canadian Support",
                      maple: "✓ 24/7",
                      cable: "✓",
                      other: "✗",
                    },
                    {
                      feature: "Device Limit",
                      maple: "5 devices",
                      cable: "1–2 TVs",
                      other: "1–3",
                    },
                    {
                      feature: "Interac e-Transfer",
                      maple: "✓",
                      cable: "N/A",
                      other: "✗",
                    },
                  ].map((row, ri) => (
                    <tr
                      key={row.feature}
                      style={{
                        background: ri % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 16px",
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 600,
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {row.feature}
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          textAlign: "center",
                          color: "#4ade80",
                          fontWeight: 700,
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          background: "rgba(229,57,53,0.04)",
                        }}
                      >
                        {row.maple}
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {row.cable}
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {row.other}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 9. TESTIMONIALS ── */}
        <section
          style={{
            background: "#10131E",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Reviews
            </p>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 48,
              }}
            >
              What Our Customers Say
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 20,
                    padding: "28px 24px",
                  }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} style={{ color: "#facc15", fontSize: 14 }}>★</span>
                    ))}
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: 14,
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                      {t.city}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#facc15", fontSize: 20 }}>★</span>
                ))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                <span style={{ color: "#fff", fontWeight: 700 }}>4.9/5</span> average from{" "}
                <span style={{ color: "#fff", fontWeight: 700 }}>1,247+</span> Canadian customers
              </p>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ SECTION ── */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 48,
              }}
            >
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    padding: "24px 28px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 10,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. CITY LINKS SECTION ── */}
        <section
          style={{
            background: "#10131E",
            padding: "80px 16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E53935",
                marginBottom: 12,
              }}
            >
              Nationwide Coverage
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Serving Canadians Coast to Coast
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 36 }}>
              Fast servers. All Canadian channels. Every city covered.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 14,
              }}
            >
              {cities.map((city) => (
                <a
                  key={city.name}
                  href={city.href}
                  style={{
                    display: "block",
                    padding: "16px 20px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  🍁 IPTV {city.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(229,57,53,0.18) 0%, transparent 70%), #0a0a0a",
            borderTop: "1px solid rgba(229,57,53,0.15)",
            padding: "80px 16px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Ready to Cut the Cable?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>
              Join thousands of Canadians who switched to MapleStreamTV. Start with a free 24-hour trial — no credit card required.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://wa.me/17828026280?text=Hi%20MapleStreamTV%2C%20I%27m%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#25D366",
                  color: "#000",
                  padding: "16px 32px",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Free Trial
              </a>
              <a
                href="/pricing"
                style={{
                  display: "inline-block",
                  background: "#E53935",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 8px 32px rgba(229,57,53,0.3)",
                }}
              >
                View Pricing →
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
