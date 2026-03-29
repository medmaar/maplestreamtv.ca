import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Canada 1 Month Plan 2026 | Starting at $9 | No Contract",
  description:
    "Get IPTV Canada for just $9/month with our 1-month plan. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. No contract. Instant activation.",
  keywords:
    "IPTV Canada 1 month, IPTV monthly plan Canada, IPTV $9 Canada, month to month IPTV Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/pricing/1-month" },
};

const devicePlans = [
  { devices: 1, price: 9, perMonth: 9 },
  { devices: 2, price: 18, perMonth: 18 },
  { devices: 3, price: 27, perMonth: 27 },
  { devices: 4, price: 36, perMonth: 36 },
  { devices: 5, price: 45, perMonth: 45 },
];

const features = [
  "25,000+ Live TV Channels",
  "120,000+ Movies & Series (VOD)",
  "4K Ultra HD & HD Quality",
  "NHL, NFL, NBA, MLB, UFC Live",
  "TSN, Sportsnet, CBC, CTV, Global",
  "PPV Events Included",
  "Electronic Program Guide (EPG)",
  "Catch-Up TV (7 days)",
  "All Devices: Fire Stick, Smart TV, iOS, Android",
  "Anti-Freeze Technology",
  "99.9% Uptime Guarantee",
  "24/7 Canadian Support",
];

const faqItems = [
  { q: "Can I cancel after 1 month?", a: "Yes. Our 1-month plan has no auto-renewal and no cancellation fees. You simply don't repurchase when the month ends." },
  { q: "Is the 1-month plan the same quality as longer plans?", a: "Absolutely. You get identical channel count, VOD library, 4K quality, and support. The only difference is the duration." },
  { q: "Can I upgrade to a longer plan later?", a: "Yes. When your 1-month plan expires, you can subscribe to a 6-month or 12-month plan at any time for greater savings." },
  { q: "How quickly will I get access?", a: "Instant activation. Once your payment is confirmed, we send your credentials within minutes via WhatsApp, Telegram, or email." },
];

export default function Pricing1MonthPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            No Contract · Month to Month
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV Canada <span className="text-red-500">1 Month Plan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Try Canada&apos;s best IPTV service with no long-term commitment.
            Full access to 25,000+ channels and 120,000+ movies starting at just $9.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Get Free Trial First
            </a>
            <a href="/pricing" className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Compare All Plans
            </a>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Choose Your <span className="text-red-500">Device Count</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">All plans include the same channels and features. Pick how many devices stream simultaneously.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devicePlans.map((plan) => (
              <div
                key={plan.devices}
                className={`rounded-2xl p-7 border-2 flex flex-col ${
                  plan.devices === 1 ? "border-red-500 bg-red-950" : "border-gray-700 bg-gray-950"
                }`}
              >
                {plan.devices === 1 && (
                  <div className="text-center mb-3">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">MOST FLEXIBLE</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-center mb-1">
                  {plan.devices} {plan.devices === 1 ? "Device" : "Devices"}
                </h3>
                <div className="text-4xl font-extrabold text-red-500 text-center my-3">${plan.price}</div>
                <div className="text-gray-400 text-sm text-center mb-6">for 1 month · ${plan.perMonth}/mo</div>
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-bold transition-colors mt-auto ${
                    plan.devices === 1
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Everything Included in the <span className="text-red-500">1-Month Plan</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-gray-900 rounded-xl px-5 py-4 border border-gray-800">
                <span className="text-green-400 text-lg">✓</span>
                <span className="text-gray-200 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 1 month */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Who is the <span className="text-red-500">1-Month Plan</span> For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "New to IPTV", desc: "Try the full service before committing to a longer plan. If you love it, upgrade anytime." },
              { title: "Seasonal Watchers", desc: "Subscribe only during hockey playoffs, the World Cup, or any sports season you care about." },
              { title: "Travellers", desc: "Need Canadian TV while abroad for a month? The 1-month plan covers exactly that." },
              { title: "Gift Givers", desc: "Give one month of IPTV as a gift — easy, no commitment for the recipient." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-950 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings comparison */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Save More?</h2>
          <p className="text-gray-400 mb-10">Longer plans cost less per month. Here&apos;s how 1 device compares:</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "1 Month", total: "$9", perMonth: "$9/mo", savings: "" },
              { label: "6 Months", total: "$39", perMonth: "$6.50/mo", savings: "Save 28%" },
              { label: "12 Months", total: "$49", perMonth: "$4.08/mo", savings: "Save 55%" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
                <div className="font-bold text-lg mb-1">{item.label}</div>
                <div className="text-3xl font-extrabold text-red-500 mb-1">{item.total}</div>
                <div className="text-gray-400 text-sm">{item.perMonth}</div>
                {item.savings && (
                  <div className="mt-2 text-green-400 text-xs font-bold">{item.savings}</div>
                )}
              </div>
            ))}
          </div>
          <a href="/pricing/12-months" className="inline-block mt-8 text-red-400 hover:underline text-sm">
            View 12-month plan →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            1-Month Plan <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-gray-950 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Your 1-Month IPTV Plan Today</h2>
          <p className="text-gray-300 mb-8">Test free for 24 hours first — no credit card needed.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
