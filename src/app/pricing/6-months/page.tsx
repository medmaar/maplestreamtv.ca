import type { Metadata } from "next";
import Navbar from "../../Navbar";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: "IPTV Canada 6 Month Plan 2026 | Most Popular | Starting at $39",
  description:
    "Canada's most popular IPTV plan. 6 months of 25,000+ channels, 4K quality, NHL, TSN, CTV and more for just $39. Save 28% vs monthly.",
  keywords:
    "IPTV Canada 6 months, IPTV 6 month plan Canada, IPTV semi-annual Canada, best IPTV plan Canada",
  alternates: { canonical: "https://www.maplestreamtv.ca/pricing/6-months" },
};

const deviceOptions = [
  { devices: 1, price: 39 },
  { devices: 2, price: 69 },
  { devices: 3, price: 105 },
  { devices: 4, price: 140 },
  { devices: 5, price: 175 },
];

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 6-month IPTV plan?",
    a: "The 6-month plan includes full access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global and more), 120,000+ movies and series on demand, 4K Ultra HD quality, electronic program guide (EPG), catch-up TV for 7 days, and support for up to 5 simultaneous devices — all for $39.",
  },
  {
    q: "How much do I save with the 6-month plan?",
    a: "At $39 for 6 months, you pay only $6.50/month compared to $9/month on the monthly plan — saving you 28%. That's over $15 in savings compared to paying month-to-month.",
  },
  {
    q: "How do I activate my 6-month IPTV subscription in Canada?",
    a: "After placing your order, our team will contact you within 15 minutes via WhatsApp or email with your login credentials. Enter them in your favourite IPTV player (TiviMate, IPTV Smarters, GSE IPTV, etc.) and start streaming right away.",
  },
  {
    q: "Is this IPTV service compatible with my device?",
    a: "Yes. Our IPTV works on Amazon Firestick, Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, MAG boxes, Windows PCs and Macs. You can connect up to 5 devices at the same time.",
  },
  {
    q: "Can I watch live NHL games and Canadian sports?",
    a: "Every plan includes full coverage of NHL, NFL, NBA, MLB, UFC, F1 and Premier League through TSN, Sportsnet, CBC Sports, CTV and regional Canadian channels. All 7 Canadian NHL teams are covered in HD and 4K.",
  },
  {
    q: "How fast does my internet need to be?",
    a: "We recommend a minimum of 10 Mbps for HD and 25 Mbps for 4K Ultra HD. Standard Canadian home broadband is more than enough. Our anti-freeze buffer technology also helps minimise interruptions on slower connections.",
  },
  {
    q: "What happens when my 6-month subscription expires?",
    a: "You'll receive a reminder before your expiry date. You can renew for another 6 months or upgrade to the annual plan for even better savings. There are no automatic charges — you're always in control.",
  },
  {
    q: "Do you offer 24/7 customer support in Canada?",
    a: "Yes! Our Canadian support team is available around the clock via WhatsApp and email in both English and French. Most questions are answered within minutes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const features = [
  "25,000+ Live Channels",
  "120,000+ Movies & Series",
  "4K Ultra HD",
  "NHL · TSN · CTV · CBC",
  "All Devices Supported",
  "Save 28% vs Monthly",
  "No Contract",
  "24/7 Support",
];

export default function Pricing6MonthsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <section
          className="py-20 px-4 text-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(253,3,34,0.12)",
                border: "1px solid rgba(253,3,34,0.28)",
                color: "#fd0322",
              }}
            >
              IPTV Canada · Most Popular
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
              6 Month Plan
            </h1>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="text-gray-500 line-through text-2xl">$54</span>
              <span className="text-5xl md:text-6xl font-extrabold" style={{ color: "#fd0322" }}>
                $39
              </span>
            </div>
            <span
              className="inline-block text-xs px-3 py-1 rounded-full font-bold mb-6"
              style={{
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.25)",
                color: "#4ade80",
              }}
            >
              Save 28% — Only $6.50/month
            </span>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
              Canada&apos;s most popular IPTV plan. Six months of stable 4K streaming,
              25,000+ live channels and 120,000+ movies — no contract, instant activation.
            </p>
          </div>
        </section>

        {/* Device options */}
        <section
          className="py-8 px-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xs text-gray-500 text-center uppercase tracking-widest mb-4">
              Simultaneous devices
            </p>
            <div className="grid grid-cols-5 gap-2 text-center">
              {deviceOptions.map((opt) => (
                <div
                  key={opt.devices}
                  className="rounded-2xl py-3 px-1 border"
                  style={{
                    background: "rgba(253,3,34,0.06)",
                    borderColor: "rgba(253,3,34,0.2)",
                  }}
                >
                  <div className="font-extrabold text-white text-lg">{opt.devices}</div>
                  <div className="text-gray-500 text-xs">{opt.devices === 1 ? "device" : "devices"}</div>
                  <div className="font-bold mt-1 text-sm" style={{ color: "#fd0322" }}>
                    ${opt.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium text-gray-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <span style={{ color: "#4ade80" }} className="shrink-0">✓</span>
                {f}
              </div>
            ))}
          </div>
        </section>

        {/* Form + FAQ */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2 text-center"
                style={{ color: "#fd0322" }}
              >
                Place Your Order
              </p>
              <h2 className="text-2xl font-extrabold text-white text-center mb-6">
                Get 6 Months of IPTV
              </h2>
              <PlanOrderForm plan="6 Month Plan — $39" />
              <p className="text-center text-gray-600 text-xs mt-4">
                Not sure yet?{" "}
                <a href="/free-trial" className="hover:underline" style={{ color: "#fd0322" }}>
                  Try free for 24 hours →
                </a>
              </p>
            </div>

            {/* FAQ */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#fd0322" }}
              >
                FAQ
              </p>
              <h2 className="text-2xl font-extrabold text-white mb-6">
                Common Questions
              </h2>
              <PlanFAQ items={faqItems} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-12 px-4 border-t mt-8"
          style={{ background: "#0c0f1a", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-xl font-extrabold" style={{ color: "#fd0322" }}>IPTV</span>
                  <span className="text-xl font-extrabold text-white">Canada 2026</span>
                </div>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Canada&apos;s #1 IPTV subscription service. Serving Toronto, Montreal,
                  Vancouver, Calgary, Ottawa and all of Canada.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Service</p>
                  <div className="flex flex-col gap-2">
                    <a href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
                    <a href="/channels-list" className="text-gray-400 hover:text-white text-sm transition-colors">Channels</a>
                    <a href="/free-trial" className="text-gray-400 hover:text-white text-sm transition-colors">Free Trial</a>
                    <a href="/how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How It Works</a>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Legal</p>
                  <div className="flex flex-col gap-2">
                    <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                    <a href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Contact</p>
                  <div className="flex flex-col gap-2">
                    <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
                    <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-gray-600 text-xs text-center">© 2026 IPTV Subscription Canada. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
