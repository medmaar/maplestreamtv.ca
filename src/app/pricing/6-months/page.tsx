import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Canada 6 Month Plan 2026 | Most Popular | Starting at $39",
  description:
    "Canada's most popular IPTV plan. 6 months of 25,000+ channels, 4K quality, NHL, TSN, CTV and more for just $39. Save 28% vs monthly.",
  keywords:
    "IPTV Canada 6 months, IPTV 6 month plan Canada, IPTV semi-annual Canada, best IPTV plan Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/pricing/6-months" },
};

const devicePlans = [
  { devices: 1, price: 39, perMonth: "6.50" },
  { devices: 2, price: 69, perMonth: "11.50" },
  { devices: 3, price: 105, perMonth: "17.50" },
  { devices: 4, price: 140, perMonth: "23.33" },
  { devices: 5, price: 175, perMonth: "29.17" },
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
  { q: "Why is the 6-month plan the most popular?", a: "It's the sweet spot between savings and flexibility. You save 28% versus monthly pricing while not locking in for a full year — perfect for most households." },
  { q: "Does the 6-month plan cover all sports seasons?", a: "Yes. A 6-month plan covers an entire NHL regular season, the NBA season, a full CFL season, and all major PPV events within the period." },
  { q: "Can I add devices partway through?", a: "You can purchase an additional subscription for more devices at any time. Contact us via WhatsApp or Telegram and we'll set it up instantly." },
  { q: "What happens when 6 months expire?", a: "Nothing automatic. You'll receive a reminder and can choose to renew at the same or a different plan level. No auto-billing ever." },
];

export default function Pricing6MonthsPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Most Popular Plan
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV Canada <span className="text-red-500">6 Month Plan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Canada&apos;s most popular IPTV subscription. Save 28% versus monthly pricing
            and enjoy 6 uninterrupted months of 25,000+ channels in 4K.
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
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">BEST SELLER</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-center mb-1">
                  {plan.devices} {plan.devices === 1 ? "Device" : "Devices"}
                </h3>
                <div className="text-4xl font-extrabold text-red-500 text-center my-3">${plan.price}</div>
                <div className="text-gray-400 text-sm text-center mb-6">for 6 months · ${plan.perMonth}/mo</div>
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
            Everything Included in the <span className="text-red-500">6-Month Plan</span>
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

      {/* What 6 months covers */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            What You Get in <span className="text-red-500">6 Months</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Full NHL Season", desc: "Cover the entire NHL regular season (October–April) and playoff push with every TSN and Sportsnet broadcast." },
              { title: "NBA & NFL Coverage", desc: "Watch complete NBA and NFL regular seasons, including Canadian teams and all playoff rounds." },
              { title: "Every PPV Event", desc: "6 months includes dozens of UFC, boxing, and wrestling PPV events at no extra charge." },
              { title: "Movies & Binge Sessions", desc: "120,000+ titles in the VOD library — enough to watch something new every single day for months." },
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
          <h2 className="text-3xl font-bold mb-4">How Much You Save</h2>
          <p className="text-gray-400 mb-10">1 device pricing compared across all plan durations:</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "1 Month", total: "$9", perMonth: "$9/mo", highlight: false },
              { label: "6 Months", total: "$39", perMonth: "$6.50/mo", savings: "Save 28%", highlight: true },
              { label: "12 Months", total: "$49", perMonth: "$4.08/mo", savings: "Save 55%", highlight: false },
            ].map((item) => (
              <div key={item.label} className={`rounded-2xl p-5 border-2 ${item.highlight ? "border-red-500 bg-red-950" : "border-gray-700 bg-gray-900"}`}>
                <div className="font-bold text-lg mb-1">{item.label}</div>
                <div className="text-3xl font-extrabold text-red-500 mb-1">{item.total}</div>
                <div className="text-gray-400 text-sm">{item.perMonth}</div>
                {"savings" in item && item.savings && (
                  <div className="mt-2 text-green-400 text-xs font-bold">{item.savings}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            6-Month Plan <span className="text-red-500">FAQ</span>
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
          <h2 className="text-3xl font-bold mb-4">Get 6 Months of IPTV Canada</h2>
          <p className="text-gray-300 mb-8">Test free for 24 hours first — no credit card needed.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
