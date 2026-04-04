import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import PricingSection from "./PricingSection";
import FaqAccordion from "./components/FaqAccordion";

export const metadata: Metadata = {
  title: "Best IPTV Canada 2026 | #1 IPTV Subscription in Canada",
  description:
    "Best IPTV service in Canada for 2026. Get 25,000+ live channels, 120,000+ movies & series in 4K. NHL, NFL, NBA, CTV, TSN included. Try free for 24 hours!",
  keywords:
    "IPTV Canada 2026, best IPTV Canada, IPTV subscription Canada, IPTV service Canada, Canadian IPTV, IPTV Canada free trial",
  alternates: {
    canonical: "https://www.iptvsubscriptioncanada.ca",
  },
};

const channels = [
  "NHL", "NFL", "NBA", "MLB", "UFC", "F1", "Premier League",
  "TSN", "Sportsnet", "CTV", "CBC", "Global", "TVAS", "RDS",
  "ESPN", "FOX Sports", "BeIN Sports", "Sky Sports", "DAZN",
];

const features = [
  {
    icon: "📺",
    title: "25,000+ Live Channels",
    desc: "Every Canadian channel plus thousands of international ones — TSN, Sportsnet, CBC, CTV, Global and more in HD & 4K.",
  },
  {
    icon: "🎬",
    title: "120,000+ Movies & Series",
    desc: "Massive on-demand library. Latest Hollywood releases, Canadian content, and popular series updated daily.",
  },
  {
    icon: "🏒",
    title: "Live Sports in 4K",
    desc: "Never miss a Leafs, Habs, or Canucks game. Full NHL, NFL, NBA, UFC, F1 and Premier League coverage.",
  },
  {
    icon: "⚡",
    title: "Zero Buffering",
    desc: "Our Canadian servers deliver lightning-fast streams with 99.9% uptime. No freezing, no lag — guaranteed.",
  },
  {
    icon: "📱",
    title: "All Devices Supported",
    desc: "Fire Stick, Smart TV, Android, iPhone, iPad, MAG Box, PC, Mac and more. Up to 5 devices simultaneously.",
  },
  {
    icon: "🇨🇦",
    title: "24/7 Canadian Support",
    desc: "Our team is available around the clock via WhatsApp, email, and live chat in English and French.",
  },
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
          text: "IPTV technology itself is completely legal in Canada. Our service provides access to publicly available streams.",
        },
      },
      {
        "@type": "Question",
        name: "How much does IPTV cost in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our IPTV Canada plans start at just $9/month for 1 device, $39 for 6 months, and $49 for 12 months.",
        },
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IPTV Subscription Canada 2026",
    description: "Premium IPTV service in Canada with 25,000+ live channels and 120,000+ movies in 4K.",
    brand: { "@type": "Brand", name: "IPTV Subscription Canada" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "9",
      highPrice: "225",
      priceCurrency: "CAD",
      offerCount: "20",
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

      <main style={{ background: "#10131E", color: "#fff" }}>
        {/* HERO */}
        <HeroSection />

        {/* SCROLLING CHANNELS TICKER */}
        <div
          className="py-4 overflow-hidden border-y"
          style={{ background: "rgba(253,3,34,0.08)", borderColor: "rgba(253,3,34,0.18)" }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...channels, ...channels].map((ch, i) => (
              <span key={i} className="mx-6 text-sm font-bold text-white/70">
                {ch}
                <span className="mx-6 text-red-600 opacity-60">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES GRID */}
        <section id="features" className="py-24 px-4" style={{ background: "#10131E" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
              Everything You Need to Stream
            </h2>
            <p className="text-center text-gray-400 mb-14 max-w-xl mx-auto text-sm">
              Canada&apos;s most reliable IPTV subscription — built for Canadian viewers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-3xl p-7 border transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED HIGHLIGHT */}
        <section
          className="py-20 px-4"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(253,3,34,0.07) 0%, transparent 70%), rgba(255,255,255,0.015)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
                All Plans Include
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Every Plan.
                <br />
                Every Feature.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                Unlike cable, every IPTV Canada plan comes fully loaded. No add-ons, no surprises —
                just unlimited entertainment from day one.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all hover:brightness-110"
                style={{ background: "#fd0322" }}
              >
                See All Plans →
              </a>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "25,000+ Live TV Channels",
                "120,000+ Movies & Series",
                "4K Ultra HD & HD Quality",
                "NHL, NFL, NBA, MLB, UFC",
                "TSN, Sportsnet, CBC, CTV",
                "PPV Events Included",
                "Electronic Program Guide",
                "Catch-Up TV (7 days)",
                "Fire Stick, Smart TV, iOS, Android",
                "Anti-Freeze Technology",
                "99.9% Uptime Guarantee",
                "24/7 Canadian Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-green-400 font-bold text-sm shrink-0">✓</span>
                  <span className="text-gray-300 text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <PricingSection />

        {/* FREE TRIAL CTA */}
        <section
          id="trial"
          className="py-20 px-4 text-center"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(253,3,34,0.18) 0%, transparent 70%), #10131E",
            borderTop: "1px solid rgba(253,3,34,0.15)",
            borderBottom: "1px solid rgba(253,3,34,0.15)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <div
              className="inline-block mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(253,3,34,0.12)", border: "1px solid rgba(253,3,34,0.28)", color: "#fd0322" }}
            >
              Risk-Free
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Try IPTV Canada FREE
              <br />
              for 24 Hours
            </h2>
            <p className="text-gray-400 mb-10 text-sm max-w-md mx-auto leading-relaxed">
              No credit card required. Get instant access to all 25,000+ channels and test our
              service completely risk-free before subscribing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto sm:max-w-none">
              <a
                href="https://wa.me/17828026280?text=Hi%20MapleStreamTV%2C%20I%27m%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:brightness-110"
                style={{ background: "#25D366", color: "#000" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Free Trial
              </a>
              <a
                href="mailto:help@maplestreamtv.ca?subject=Free%20Trial%20Request"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }}
              >
                Email Free Trial
              </a>
            </div>
            <p className="text-gray-600 text-xs mt-6">Fast activation · Human support · No obligation</p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-4" style={{ background: "#10131E" }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
              Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-14">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-3xl p-6 border"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating summary */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-bold">4.9/5</span> average from{" "}
                <span className="text-white font-bold">1,247+</span> Canadian customers
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-24 px-4"
          style={{
            background: "rgba(255,255,255,0.015)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </div>
        </section>

      </main>
    </>
  );
}
