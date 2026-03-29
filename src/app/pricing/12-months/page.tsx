import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Canada 1 Year Plan 2026 | Best Value | Starting at $49",
  description:
    "Best value IPTV Canada plan. Full year of 25,000+ channels, 4K quality, NHL, TSN, CTV and more for just $49. Save 55% vs monthly pricing.",
  keywords:
    "IPTV Canada 1 year, IPTV annual plan Canada, IPTV 12 months Canada, cheapest IPTV Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/pricing/12-months" },
};

const devicePlans = [
  { devices: 1, price: 49, perMonth: "4.08" },
  { devices: 2, price: 89, perMonth: "7.42" },
  { devices: 3, price: 135, perMonth: "11.25" },
  { devices: 4, price: 180, perMonth: "15.00" },
  { devices: 5, price: 225, perMonth: "18.75" },
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
  { q: "How much do I save with a 12-month plan?", a: "You save 55% compared to paying month-to-month. At $49 for 1 device, that's $4.08/month — less than a single movie ticket for an entire year of content." },
  { q: "Does the price ever increase during the year?", a: "No. Your price is locked in for the full 12 months. We will never charge more mid-subscription." },
  { q: "What if I want to try before committing to a year?", a: "We offer a free 24-hour trial with no credit card required. Try every channel and feature before purchasing the annual plan." },
  { q: "Is there an auto-renewal after 12 months?", a: "Never. All our plans are prepaid with zero auto-billing. You'll receive a reminder before your plan expires and can choose to renew manually." },
  { q: "Can I get a refund if I cancel early?", a: "Due to the digital nature of the service and our free trial offering, refunds are not available after activation. We encourage everyone to use the free trial first." },
];

export default function Pricing12MonthsPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Best Value · Save 55%
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV Canada <span className="text-red-500">12 Month Plan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            The best value IPTV subscription in Canada. Pay just $49 for a full year of
            25,000+ channels, 120,000+ movies, and every live sports event — that&apos;s $4.08/month.
          </p>
          <div className="bg-gray-900 border border-red-500 rounded-2xl px-8 py-5 inline-block mb-8">
            <div className="text-gray-400 text-sm mb-1">1 Device — Full Year</div>
            <div className="text-6xl font-extrabold text-red-500">$49</div>
            <div className="text-green-400 text-sm font-bold mt-1">Only $4.08/month · Save 55%</div>
          </div>
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
                  plan.devices === 2 ? "border-red-500 bg-red-950" : "border-gray-700 bg-gray-950"
                }`}
              >
                {plan.devices === 2 && (
                  <div className="text-center mb-3">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">FAMILY PICK</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-center mb-1">
                  {plan.devices} {plan.devices === 1 ? "Device" : "Devices"}
                </h3>
                <div className="text-4xl font-extrabold text-red-500 text-center my-3">${plan.price}</div>
                <div className="text-gray-400 text-sm text-center mb-1">for 12 months</div>
                <div className="text-green-400 text-xs font-bold text-center mb-6">${plan.perMonth}/mo</div>
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-bold transition-colors mt-auto ${
                    plan.devices === 2
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
            Everything Included for a <span className="text-red-500">Full Year</span>
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

      {/* A year of content */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            A Full Year of <span className="text-red-500">Canadian Sports & Entertainment</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Complete NHL Season + Playoffs", desc: "All 82 regular season games per team, plus the full playoff run through the Stanley Cup Final." },
              { title: "NFL, NBA, MLB & CFL", desc: "Never miss a game. All four major North American leagues covered from opening day to championship." },
              { title: "100+ UFC & Boxing PPVs", desc: "Every PPV event is included at no extra cost. That alone is worth hundreds of dollars annually." },
              { title: "120,000+ Movies & Series", desc: "New releases added weekly. Thousands of Canadian and international titles always available on demand." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-950 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value comparison */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Numbers Speak for Themselves</h2>
          <p className="text-gray-400 mb-10">1 device cost comparison — paying monthly vs. annual:</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "1 Month", total: "$9/mo", annual: "$108/yr", highlight: false },
              { label: "6 Months", total: "$6.50/mo", annual: "$78/yr", highlight: false },
              { label: "12 Months", total: "$4.08/mo", annual: "$49/yr", highlight: true },
            ].map((item) => (
              <div key={item.label} className={`rounded-2xl p-5 border-2 ${item.highlight ? "border-red-500 bg-red-950" : "border-gray-700 bg-gray-900"}`}>
                <div className="font-bold text-lg mb-1">{item.label}</div>
                <div className="text-2xl font-extrabold text-red-500 mb-1">{item.total}</div>
                <div className="text-gray-400 text-sm">{item.annual}</div>
                {item.highlight && (
                  <div className="mt-2 text-green-400 text-xs font-bold">Best Value</div>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">Paying monthly for 12 months costs $108. The annual plan is just $49. You save $59.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            12-Month Plan <span className="text-red-500">FAQ</span>
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
          <h2 className="text-3xl font-bold mb-4">Lock In a Full Year for Just $49</h2>
          <p className="text-gray-300 mb-8">Test free for 24 hours first — no credit card needed.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
