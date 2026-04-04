import type { Metadata } from "next";
import Navbar from "../../Navbar";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: "1 Year IPTV Plan — $100 CAD | MapleStreamTV Canada",
  description:
    "Get a full year of IPTV in Canada for $100 CAD. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. Best value. Login credentials sent within 24 hours.",
  keywords:
    "IPTV Canada 1 year, IPTV annual plan Canada, IPTV 12 months Canada, best value IPTV Canada",
  alternates: { canonical: "https://www.maplestreamtv.ca/pricing/12-months" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 1-year IPTV plan?",
    a: "The 1-year plan gives you a full 12 months of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and hundreds more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV — all for $100 CAD.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within 24 hours. Check your spam folder if you don't see it in your inbox.",
  },
  {
    q: "Which devices are compatible with this IPTV service?",
    a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs. Any device that supports an IPTV player app will work.",
  },
  {
    q: "How fast does my internet connection need to be?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Standard Canadian home broadband handles this with ease. Our anti-freeze buffer technology also reduces interruptions on slower connections.",
  },
  {
    q: "Can I watch live Canadian and Quebec channels?",
    a: "Yes — all plans include TSN, Sportsnet, CBC, CTV, Global, City TV, RDS, TVA, Canal Vie, and every regional Canadian channel in HD and 4K. Full coverage of NHL, NFL, NBA, MLB, UFC, F1 and CFL is included throughout the year.",
  },
  {
    q: "Can I use this service on more than one device at a time?",
    a: "The base plan supports 1 simultaneous connection. Need to stream on multiple screens? Contact us and we'll set up a multi-connection plan tailored to your household.",
  },
  {
    q: "What happens when my 1-year subscription expires?",
    a: "You'll receive a reminder before your renewal date. Simply place a new order to renew for another year. There are no automatic charges and no long-term contracts — you're always in control.",
  },
  {
    q: "How do I get support if something stops working?",
    a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email in English and French. Most issues are resolved within minutes, any time of day.",
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

export default function Pricing12MonthsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
        <Navbar />

        <section
          className="py-20 px-4"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
          }}
        >
          <div className="max-w-2xl mx-auto">
            {/* 1. Page title */}
            <div className="mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(253,3,34,0.12)",
                  border: "1px solid rgba(253,3,34,0.28)",
                  color: "#fd0322",
                }}
              >
                IPTV Canada · Best Value
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                1 Year Plan —{" "}
                <span style={{ color: "#fd0322" }}>$100 CAD</span>
              </h1>
            </div>

            {/* 2. Instruction text */}
            <div className="mb-10">
              <p className="text-gray-300 text-base">Fill out the form below to place your order.</p>
              <p className="text-gray-400 text-sm mt-1">
                We&apos;ll send your login credentials to your email within 24 hours.
              </p>
            </div>

            {/* 3. Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <PlanOrderForm plan="1 Year Plan — $100 CAD" />
            </div>

            {/* 4. FAQ */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#fd0322" }}
              >
                FAQ
              </p>
              <h2 className="text-2xl font-extrabold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <PlanFAQ items={faqItems} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-12 px-4 border-t mt-12"
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
