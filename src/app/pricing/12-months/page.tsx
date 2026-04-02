import type { Metadata } from "next";
import Navbar from "../../Navbar";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: "IPTV Canada 12 Month Plan 2026 | Best Value | Starting at $49",
  description:
    "Best value IPTV Canada plan. Full year of 25,000+ channels, 4K quality, NHL, TSN, CTV and more for just $49. Save 55% vs monthly pricing.",
  keywords:
    "IPTV Canada 1 year, IPTV annual plan Canada, IPTV 12 months Canada, cheapest IPTV Canada",
  alternates: { canonical: "https://www.maplestreamtv.ca/pricing/12-months" },
};

const deviceOptions = [
  { devices: 1, price: 49 },
  { devices: 2, price: 89 },
  { devices: 3, price: 135 },
  { devices: 4, price: 180 },
  { devices: 5, price: 225 },
];

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 12-month IPTV plan?",
    a: "The 12-month plan includes a full year of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global and hundreds more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, catch-up TV for 7 days, and up to 5 simultaneous devices — all for just $49.",
  },
  {
    q: "How much do I save with the annual plan?",
    a: "At $49 for 12 months, you pay only $4.08/month — saving 55% compared to the $9/month plan. That's over $59 in savings over the year, making this the best value IPTV subscription in Canada.",
  },
  {
    q: "How do I activate my annual IPTV subscription in Canada?",
    a: "After placing your order, our team will contact you within 15 minutes via WhatsApp or email with your login credentials. Simply enter them in your IPTV player (TiviMate, IPTV Smarters, GSE IPTV, etc.) and start streaming immediately.",
  },
  {
    q: "Is this IPTV service compatible with all devices?",
    a: "Yes — our service supports Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, MAG boxes, Windows PCs and Macs. You can stream on up to 5 devices simultaneously.",
  },
  {
    q: "Can I watch all Canadian channels and live sports all year?",
    a: "Absolutely. With the annual plan you get a full season of every NHL, NFL, NBA, MLB, UFC and Premier League game via TSN, Sportsnet, CBC Sports and CTV. Every Canadian team is covered — Leafs, Habs, Canucks, Oilers, Flames and Senators.",
  },
  {
    q: "How fast does my internet connection need to be?",
    a: "We recommend at least 10 Mbps for HD and 25 Mbps for 4K Ultra HD streams. Any standard Canadian home internet plan will handle this easily. Our anti-freeze technology also reduces buffering on slower connections.",
  },
  {
    q: "What happens when my 12-month subscription expires?",
    a: "You'll receive a reminder before your renewal date. You can renew for another year at the same great price. There are no automatic charges and no contracts — you're in full control.",
  },
  {
    q: "Do you offer 24/7 customer support in Canada?",
    a: "Yes! Our Canadian support team is available 24/7 via WhatsApp and email in English and French. Most issues are resolved within minutes, any time of day or night.",
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
  "Save 55% vs Monthly",
  "No Contract",
  "24/7 Support",
];

export default function Pricing12MonthsPage() {
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
              IPTV Canada · Best Value
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
              12 Month Plan
            </h1>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="text-gray-500 line-through text-2xl">$108</span>
              <span className="text-5xl md:text-6xl font-extrabold" style={{ color: "#fd0322" }}>
                $49
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
              Save 55% — Only $4.08/month
            </span>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
              The best value IPTV plan in Canada. A full year of 25,000+ live channels and
              120,000+ movies — 4K quality, instant activation, no contract.
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
                Get a Full Year of IPTV
              </h2>
              <PlanOrderForm plan="12 Month Plan — $49" />
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
