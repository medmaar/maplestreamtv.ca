import type { Metadata } from "next";
import Navbar from "../../Navbar";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: "IPTV Canada 1 Month Plan 2026 | Starting at $9 | No Contract",
  description:
    "Get IPTV Canada for just $9/month. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. No contract. Instant activation in Canada.",
  keywords:
    "IPTV Canada 1 month, IPTV monthly plan Canada, IPTV $9 Canada, month to month IPTV Canada",
  alternates: { canonical: "https://www.maplestreamtv.ca/pricing/1-month" },
};

const deviceOptions = [
  { devices: 1, price: 9 },
  { devices: 2, price: 18 },
  { devices: 3, price: 27 },
  { devices: 4, price: 36 },
  { devices: 5, price: 45 },
];

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 1-month IPTV plan?",
    a: "The 1-month plan gives you full access to 25,000+ live channels including all Canadian networks (TSN, Sportsnet, CBC, CTV, Global), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG (electronic program guide), and catch-up TV for 7 days — all for just $9.",
  },
  {
    q: "How do I activate my 1-month IPTV subscription in Canada?",
    a: "After placing your order, our team will contact you within 15 minutes via WhatsApp or email with your login credentials. You then enter them into your preferred IPTV app (TiviMate, IPTV Smarters, etc.) and start streaming instantly.",
  },
  {
    q: "Is this IPTV service compatible with my device?",
    a: "Yes — our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, MAG boxes, Windows PCs and Macs. You can use up to 5 simultaneous devices.",
  },
  {
    q: "How fast does my internet need to be for IPTV?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Most Canadian home internet plans are more than sufficient. Our anti-freeze technology also minimises buffering on slower connections.",
  },
  {
    q: "Can I watch live Canadian channels and NHL games?",
    a: "Absolutely. Every plan includes TSN, Sportsnet, CBC Sports, CTV, Global, City TV, and all regional Canadian channels. Every NHL game — Leafs, Habs, Canucks, Oilers, Flames, Senators — is covered in HD and 4K.",
  },
  {
    q: "What happens when my 1-month subscription expires?",
    a: "You'll receive a reminder before expiry. Simply place a new order to renew — or upgrade to our 6-month or 12-month plans for significant savings. There are no automatic charges and no contracts.",
  },
  {
    q: "Do you offer customer support in Canada?",
    a: "Yes! Our Canadian support team is available 24/7 via WhatsApp and email in English and French. Most issues are resolved within minutes.",
  },
  {
    q: "Can I upgrade from the 1-month plan to a longer plan?",
    a: "Yes, you can upgrade to the 6-month or 12-month plan at any time. Just contact our support team and we'll apply a prorated credit toward your new plan.",
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
  "Fast Activation",
  "No Contract",
  "24/7 Support",
];

export default function Pricing1MonthPage() {
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
              IPTV Canada · 1 Month Plan
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
              1 Month Plan
            </h1>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="text-gray-500 line-through text-2xl">$18</span>
              <span className="text-5xl md:text-6xl font-extrabold" style={{ color: "#fd0322" }}>
                $9
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
              50% OFF — Limited Time
            </span>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
              Full access to 25,000+ live channels and 120,000+ movies & series. Stable
              4K streaming with instant activation — no contract, cancel anytime.
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
                Get Started Today
              </h2>
              <PlanOrderForm plan="1 Month Plan — $9" />
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
