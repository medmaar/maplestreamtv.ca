import type { Metadata } from "next";
import FreeTrialForm from "./FreeTrialForm";
import PlanFAQ, { type FaqItem } from "../pricing/PlanFAQ";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free 24-Hour IPTV Trial — No Credit Card | MapleStreamTV Canada",
  description:
    "Start your free 24-hour IPTV Canada trial. No credit card required. Instant access to 25,000+ live channels, NHL, TSN, CTV and 120,000+ movies in 4K.",
  keywords:
    "IPTV Canada free trial, free IPTV Canada, IPTV trial Canada, try IPTV Canada",
  alternates: { canonical: "https://maplestreamtv.ca/free-trial" },
};

const faqItems: FaqItem[] = [
  {
    q: "How long does the free trial last?",
    a: "24 hours — with full access to all 25,000+ live channels and the entire VOD library, exactly the same as a paid subscription.",
  },
  {
    q: "Do I need a credit card?",
    a: "No credit card or payment of any kind is required. The trial is completely free with zero obligation to subscribe afterwards.",
  },
  {
    q: "How do I receive my trial credentials?",
    a: "Fill out the form above and we will send your login credentials (server URL, username, and password) to your email within 5 minutes.",
  },
  {
    q: "What devices work with the trial?",
    a: "All devices — Amazon Firestick, Samsung/LG Smart TVs, Android TV boxes, Android phones, iPhone, iPad, Apple TV, MAG boxes, Windows PC, Mac, and more.",
  },
  {
    q: "Can I upgrade to a paid plan after the trial?",
    a: "Yes — contact us any time via WhatsApp or email and we will activate your chosen plan instantly. Plans start at $15/month.",
  },
];

export default function FreeTrialPage() {
  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh", fontFamily: "inherit" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Badge */}
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              background: "#fd0322",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: 999,
              letterSpacing: 1,
            }}
          >
            100% FREE · NO COMMITMENT · INSTANT ACTIVATION
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(2rem,5vw,2.8rem)",
            fontWeight: 900,
            marginBottom: 8,
            lineHeight: 1.15,
          }}
        >
          Start Your Free 24-Hour Trial
        </h1>
        <div style={{ width: 48, height: 4, background: "#fd0322", borderRadius: 2, marginBottom: 20 }} />

        {/* Subtitle */}
        <p style={{ color: "#aaa", fontSize: 15, marginBottom: 36 }}>
          No credit card required. Get instant access to 25,000+ channels in 4K.
        </p>

        {/* Order Form */}
        <FreeTrialForm />

        {/* FAQ */}
        <PlanFAQ items={faqItems} />

      </div>
    </main>
  );
}
