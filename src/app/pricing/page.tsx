import type { Metadata } from "next";
import PricingSection from "../PricingSection";

export const metadata: Metadata = {
  title: "IPTV Canada Pricing 2026 | Plans Starting at $9 CAD",
  description:
    "View all IPTV Canada subscription plans for 2026. Pricing for 1 to 5 devices. Starting at $9/month CAD. No contracts, instant activation.",
  keywords:
    "IPTV Canada pricing, IPTV Canada plans, IPTV subscription price Canada, cheap IPTV Canada",
  alternates: { canonical: "https://www.iptvsubscriptionincanada.ca/pricing" },
};

const faqItems = [
  { q: "How much does IPTV Canada cost?", a: "Plans start at $9 CAD per month for 1 device. Multi-device plans are also available — 2 devices from $18/month, up to 5 devices at $45/month. Longer subscriptions offer significant savings." },
  { q: "Is there a contract or commitment?", a: "No contracts ever. All plans are prepaid with no auto-renewal. You choose your duration and there are no cancellation fees." },
  { q: "Can I share my IPTV subscription with family?", a: "Yes. Our 2, 3, 4, and 5 device plans allow simultaneous streams, perfect for families. Each device streams independently." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, PayPal, Interac e-Transfer, and cryptocurrency. Contact us for full payment options." },
  { q: "Do you offer a refund?", a: "We offer a 24-hour free trial before purchase so you can verify compatibility. Due to the digital nature of the service, refunds are not available after activation. Please test first." },
  { q: "What's the difference between the plans?", a: "All plans include the exact same channels, VOD library, and features. The only differences are duration (longer = cheaper per month) and the number of simultaneous device connections." },
];

export default function PricingPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            IPTV Canada <span className="text-red-500">Pricing Plans</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Transparent pricing with no hidden fees. All plans include 25,000+ channels,
            120,000+ movies &amp; series, and 24/7 Canadian support.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> No contracts</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Instant activation</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 24h free trial available</span>
          </div>
        </div>
      </section>

      {/* Interactive pricing */}
      <PricingSection />

      {/* What's included */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Every Plan Includes <span className="text-red-500">Everything</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "25,000+ Live TV Channels",
              "120,000+ Movies & Series (VOD)",
              "4K Ultra HD & HD Quality",
              "NHL, NFL, NBA, MLB, UFC",
              "TSN, Sportsnet, CBC, CTV, Global",
              "PPV Events Included",
              "Electronic Program Guide (EPG)",
              "Catch-Up TV (7 days)",
              "All Devices: Fire Stick, Smart TV, iOS, Android",
              "Anti-Freeze Technology",
              "99.9% Uptime Guarantee",
              "24/7 Canadian Support",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-gray-900 rounded-xl px-5 py-4 border border-gray-800">
                <span className="text-green-400 text-lg">✓</span>
                <span className="text-gray-200 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Not Sure Yet? Try Free for 24 Hours</h2>
          <p className="text-gray-300 mb-8">
            No credit card required. Test every channel, every feature, on any device.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Get Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Pricing <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
