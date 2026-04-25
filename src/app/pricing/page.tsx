import type { Metadata } from "next";
import PricingSection from "../PricingSection";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "IPTV Plans Canada — Best IPTV Subscription from $9 | MapleStreamTV" },
  description:
    "MapleStreamTV cord-cutting plans for Canadian families. 1, 3, 6 & 12-month options from $9. 25,000+ channels, kids channels, all Canadian locals. No contracts.",
  keywords:
    "iptv subscription canada, iptv plans canada, best iptv subscription, iptv service canada, MapleStreamTV pricing",
  alternates: { canonical: "https://maplestreamtv.ca/pricing" },
  openGraph: {
    images: [{ url: "/og-image.webp", width: 1403, height: 761, alt: "MapleStreamTV — Cut Your Cable Bill Today" }],
    title: { absolute: "IPTV Plans Canada — Best IPTV Subscription from $9 | MapleStreamTV" },
    description:
      "MapleStreamTV cord-cutting plans for Canadian families. From $9/month. Kids channels, all Canadian locals, no contracts, cancel anytime.",
    url: "https://maplestreamtv.ca/pricing",
    siteName: "MapleStreamTV",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "IPTV Plans Canada — Best IPTV Subscription from $9 | MapleStreamTV" },
    description:
      "MapleStreamTV cord-cutting plans from $9. Kids channels, Canadian locals, no contracts.",
  },
};

export default function PricingPage() {
  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.12) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#fd0322" }}
          >
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            MapleStreamTV{" "}
            <span style={{ color: "#fd0322" }}>Cord-Cutting Plans 2026</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            No hidden fees. No contracts. Cancel any time. Every plan includes 25,000+ channels,
            kids channels, all Canadian locals, and 24/7 Canadian support.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            {["No contracts", "Cancel anytime", "Kids channels included", "Free 24h trial"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <span style={{ color: "#4ade80" }}>✓</span> {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Interactive pricing */}
      <PricingSection />

      {/* What's included */}
      <section className="py-20 px-4" style={{ background: "#10131E" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
            Included in Every Plan
          </p>
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Every Plan Includes{" "}
            <span style={{ color: "#fd0322" }}>Everything</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "25,000+ Live TV Channels",
              "120,000+ Movies & Series (VOD)",
              "All Local Canadian Channels (CBC, CTV, Global, City TV)",
              "Kids: Disney, Treehouse, YTV, Teletoon, Nickelodeon",
              "Save $900+/Year vs Bell or Rogers",
              "NHL, NFL, NBA, MLB, UFC — All Included",
              "TSN, Sportsnet, CBC, CTV, Global",
              "PPV Events — No Extra Charge",
              "EPG + Catch-Up TV (7 days)",
              "All Devices: Smart TV, Phone, Tablet, PC",
              "99.9% Uptime Guarantee",
              "24/7 Canadian Support",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl px-5 py-4 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-green-400 text-sm shrink-0">✓</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(253,3,34,0.15) 0%, transparent 70%), #10131E",
          borderTop: "1px solid rgba(253,3,34,0.15)",
          borderBottom: "1px solid rgba(253,3,34,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Try It Free for 24 Hours — Risk-Free
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            No credit card. No commitment. Full access to all channels on any device. Cancel any time.
          </p>
          <a
            href="/free-trial"
            className="inline-block text-white px-10 py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110"
            style={{ background: "#fd0322", boxShadow: "0 8px 28px rgba(253,3,34,0.3)" }}
          >
            Get Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Pricing <span style={{ color: "#fd0322" }}>FAQ</span>
          </h2>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
