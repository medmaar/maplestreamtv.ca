import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Canada 2026 | #1 IPTV Subscription in Canada",
  description:
    "Best IPTV service in Canada for 2026. Get 25,000+ live channels, 120,000+ movies & series in 4K. NHL, NFL, NBA, CTV, TSN included. Try free for 24 hours!",
  keywords:
    "IPTV Canada 2026, best IPTV Canada, IPTV subscription Canada, IPTV service Canada, Canadian IPTV, IPTV Canada free trial",
  alternates: {
    canonical: "https://www.iptvsubscriptionincanada.ca",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best IPTV service in Canada for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IPTV Subscription Canada is the best IPTV service in Canada for 2026, offering 25,000+ live channels, 120,000+ movies and series in 4K quality with 99.9% uptime and 24/7 Canadian support.",
        },
      },
      {
        "@type": "Question",
        name: "Is IPTV legal in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IPTV technology itself is completely legal in Canada. Our service provides access to publicly available streams and complies with Canadian broadcasting standards.",
        },
      },
      {
        "@type": "Question",
        name: "How much does IPTV cost in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our IPTV Canada plans start at just $9/month for 1 device, $39 for 6 months, and $49 for 12 months — saving you up to 80% compared to traditional cable.",
        },
      },
      {
        "@type": "Question",
        name: "Can I watch NHL and TSN with Canadian IPTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our IPTV Canada service includes TSN, Sportsnet, CBC, CTV, NHL games, NFL, NBA, UFC and all major Canadian and international sports channels in HD and 4K.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a free trial for IPTV in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a 24-hour free trial so you can test all 25,000+ channels and 120,000+ VOD titles completely risk-free before subscribing.",
        },
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IPTV Subscription Canada 2026",
    description:
      "Premium IPTV service in Canada with 25,000+ live channels, 120,000+ movies and series in 4K quality.",
    brand: { "@type": "Brand", name: "IPTV Subscription Canada" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "9",
      highPrice: "135",
      priceCurrency: "CAD",
      offerCount: "15",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="bg-gray-950 text-white min-h-screen">
        {/* NAVBAR */}
        <nav className="bg-gray-900 border-b border-red-600 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-red-500">
              IPTV Canada 2026
            </div>
            <div className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#pricing" className="hover:text-red-400">Pricing</a>
              <a href="#features" className="hover:text-red-400">Features</a>
              <a href="#faq" className="hover:text-red-400">FAQ</a>
              <a href="#trial" className="hover:text-red-400">Free Trial</a>
            </div>
            <a
              href="#trial"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold"
            >
              Free Trial
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
              #1 IPTV Service in Canada 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Best <span className="text-red-500">IPTV Canada</span> Service for{" "}
              <span className="text-red-500">2026</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stream 25,000+ live TV channels, 120,000+ movies & series in
              stunning 4K. NHL, TSN, CTV, Sportsnet & more — all in one
              Canadian IPTV subscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#trial"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold"
              >
                Get 24h Free Trial
              </a>
              <a
                href="#pricing"
                className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl text-lg font-bold"
              >
                View Plans
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>25,000+ Live Channels</span>
              <span>120,000+ Movies &amp; Series</span>
              <span>4K Ultra HD Quality</span>
              <span>99.9% Uptime</span>
              <span>24/7 Canadian Support</span>
            </div>
          </div>
        </section>

        {/* CHANNELS BANNER */}
        <section className="bg-red-600 py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 text-white font-bold text-sm">
            {["NHL", "NFL", "NBA", "MLB", "UFC", "F1", "Premier League", "TSN", "Sportsnet", "CTV", "CBC", "Netflix"].map((ch) => (
              <span key={ch}>{ch}</span>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose Our <span className="text-red-500">IPTV Canada</span> Service?
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Canada&apos;s most reliable IPTV subscription — built for Canadian viewers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "25,000+ Live Channels", desc: "Access every Canadian channel — TSN, Sportsnet, CBC, CTV, Global — plus thousands of international channels in HD and 4K." },
                { title: "120,000+ Movies & Series", desc: "Massive on-demand library with the latest Hollywood releases, Canadian content, and popular series updated daily." },
                { title: "Live Sports in 4K", desc: "Never miss a Leafs, Habs, or Canucks game. Full NHL, NFL, NBA, UFC, F1 and Premier League coverage included." },
                { title: "Zero Buffering", desc: "Our Canadian servers deliver lightning-fast streams with 99.9% uptime guaranteed. No freezing, no lag." },
                { title: "All Devices Supported", desc: "Works on Fire Stick, Smart TV, Android, iPhone, iPad, MAG Box, PC, Mac and more. Up to 5 devices simultaneously." },
                { title: "24/7 Canadian Support", desc: "Our Canadian support team is available around the clock via WhatsApp, email and live chat in English and French." },
              ].map((f) => (
                <div key={f.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              IPTV Canada <span className="text-red-500">Subscription Plans</span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              No contracts. Instant activation. Cancel anytime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "1 Month", price: "$9", devices: "1 Device", badge: "", popular: false },
                { name: "6 Months", price: "$39", devices: "1 Device", badge: "MOST POPULAR", popular: true },
                { name: "12 Months", price: "$49", devices: "1 Device", badge: "BEST VALUE", popular: false },
              ].map((plan) => (
                <div key={plan.name} className={`rounded-2xl p-8 border-2 ${plan.popular ? "border-red-500 bg-red-950" : "border-gray-700 bg-gray-950"} relative`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-4 py-1 rounded-full font-bold">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-extrabold text-red-500 mb-1">{plan.price}</div>
                  <div className="text-gray-400 text-sm mb-6">CAD · {plan.devices}</div>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    {["25,000+ Live Channels", "120,000+ Movies & Series", "4K Ultra HD Quality", "NHL · TSN · Sportsnet · CTV", "PPV Events Included", "EPG & Catch-Up TV", "All Devices Supported", "24/7 Canadian Support"].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#trial" className={`block text-center py-3 rounded-xl font-bold ${plan.popular ? "bg-red-600 hover:bg-red-700 text-white" : "border border-red-600 text-red-400 hover:bg-red-600 hover:text-white"}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8 text-sm">
              Need more devices? We offer plans for 2, 3, 4 and 5 simultaneous connections. Contact us for pricing.
            </p>
          </div>
        </section>

        {/* FREE TRIAL */}
        <section id="trial" className="py-20 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try IPTV Canada FREE for 24 Hours
            </h2>
            <p className="text-gray-300 mb-8">
              No credit card required. Get instant access to all 25,000+ channels and test our service completely risk-free.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-xl bg-gray-800 border border-gray-600 text-white flex-1 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap"
              >
                Get Free Trial
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-4">
              Instant activation · No credit card · Cancel anytime
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
            <div className="space-y-6">
              {[
                { q: "What is the best IPTV service in Canada for 2026?", a: "IPTV Subscription Canada is the #1 rated IPTV service in Canada for 2026, offering 25,000+ live channels including all Canadian networks, NHL, TSN, Sportsnet, CTV, CBC and 120,000+ movies and series in 4K quality with 99.9% uptime." },
                { q: "Is IPTV legal in Canada?", a: "IPTV technology is completely legal in Canada and is used by major telecoms. Our service provides access to publicly available streams and operates within Canadian broadcasting standards." },
                { q: "Can I watch NHL and Canadian sports with your IPTV?", a: "Yes! We include TSN, Sportsnet, CBC Sports, CTV, and all NHL games. Every Leafs, Habs, Canucks, Oilers, Flames and Senators game is covered in HD and 4K." },
                { q: "How much does IPTV cost compared to cable in Canada?", a: "Our IPTV plans start at just $9/month compared to $80-150/month for cable. You save up to 80% while getting more channels and better quality." },
                { q: "What devices work with your Canadian IPTV service?", a: "Our IPTV works on Amazon Fire Stick, all Smart TVs (Samsung, LG), Android boxes, iPhone, iPad, Android phones, MAG boxes, Windows and Mac computers." },
              ].map((item) => (
                <div key={item.q} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold text-red-500 mb-4">IPTV Canada 2026</div>
            <p className="text-gray-500 text-sm mb-6">
              Canada&apos;s #1 IPTV subscription service. Serving Toronto, Montreal, Vancouver, Calgary, Ottawa, Edmonton and all of Canada.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-6">
              <a href="#" className="hover:text-red-400">Privacy Policy</a>
              <a href="#" className="hover:text-red-400">Terms of Service</a>
              <a href="#" className="hover:text-red-400">Refund Policy</a>
              <a href="#" className="hover:text-red-400">Contact Us</a>
              <a href="#" className="hover:text-red-400">DMCA</a>
            </div>
            <p className="text-gray-700 text-xs">
              © 2026 IPTV Subscription Canada. All rights reserved. · iptvsubscriptionincanada.ca
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
