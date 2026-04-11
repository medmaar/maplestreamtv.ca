import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlanPageContent, { type PlanStaticData } from "./PlanPageContent";
import type { FaqItem } from "../pricing/PlanFAQ";

import { devicePrices } from "./planPricing";

// ─── Per-plan FAQ items ───────────────────────────────────────────────────────
const faq1Month: FaqItem[] = [
  { q: "What is included in the 1-month IPTV plan?", a: "The 1-month plan gives you full access to 25,000+ live TV channels including all Canadian networks (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA), 120,000+ movies and series on demand, 4K Ultra HD streaming, electronic program guide (EPG), and 7-day catch-up TV." },
  { q: "How do I receive my login credentials after ordering?", a: "After placing your order, our team will send your IPTV login credentials (server URL, username, and password) directly to your email within 15 minutes. Check your spam folder if you don't see it." },
  { q: "Which devices are compatible with MapleStreamTV?", a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs — any device that supports an IPTV player app." },
  { q: "Is there a contract or commitment required?", a: "No contracts at all. The 1-month plan is completely flexible — pay month to month, cancel anytime, no questions asked." },
  { q: "Can I upgrade to a longer plan to save money?", a: "Yes! You can upgrade to our 3-month, 6-month, or 12-month plan at any time to get a much lower monthly rate. The 12-month plan works out to as little as $4.08/month per device." },
  { q: "What Canadian sports channels are included?", a: "Every plan includes TSN (all feeds), Sportsnet (all regional feeds), CBC Sports, RDS, TVA Sports, and more. Full NHL, NFL, NBA, MLB, UFC, CFL, and Premier League coverage is included." },
  { q: "Is there a free trial available?", a: "Yes, we offer a 24-hour free trial — no credit card required. Visit our Free Trial page to get started before committing." },
  { q: "What if I have issues with my IPTV service?", a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email at help@maplestreamtv.ca. Most issues are resolved within minutes." },
];

const faq3Months: FaqItem[] = [
  { q: "What is included in the 3-month IPTV plan?", a: "The 3-month plan gives you full access to 25,000+ live TV channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV — for 3 full months." },
  { q: "How much do I save compared to month-to-month?", a: "With the 3-month plan for 1 device, you pay $29 total. Billed monthly that same period would be $27 — but for 2+ devices the savings grow significantly, making the quarterly plan a smart upgrade." },
  { q: "How do I receive my login credentials after ordering?", a: "After placing your order, our team will send your IPTV login credentials (server URL, username, and password) directly to your email within 15 minutes. Check your spam folder if you don't see it." },
  { q: "Which devices are compatible with MapleStreamTV?", a: "Our service works on Amazon Firestick, Samsung & LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs." },
  { q: "Is there a contract or commitment?", a: "No contracts at all. Pay once for 3 months with no automatic renewals. You choose when and if you want to continue." },
  { q: "What Canadian sports channels are included?", a: "Every plan includes TSN (all feeds), Sportsnet (all regional feeds), CBC Sports, RDS, TVA Sports. Full NHL, NFL, NBA, MLB, UFC, and CFL coverage is included." },
  { q: "Is there a free trial available?", a: "Yes, we offer a 24-hour free trial with no credit card required. Visit our Free Trial page to test the service first." },
  { q: "What if I have issues with my IPTV service?", a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email at help@maplestreamtv.ca. Most issues are resolved within minutes." },
];

const faq6Months: FaqItem[] = [
  { q: "What is included in the 6-month IPTV plan?", a: "The 6-month plan includes six full months of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV." },
  { q: "How much do I save compared to monthly billing?", a: "With the 6-month plan for 1 device, you pay $39 total — just $6.50/month instead of $9/month billed monthly. For 2 devices, you pay $69 instead of $108 billed monthly, saving 36%." },
  { q: "How do I receive my login credentials after ordering?", a: "After placing your order, our team will send your IPTV login credentials (server URL, username, and password) directly to your email within 15 minutes." },
  { q: "Which devices are compatible with MapleStreamTV?", a: "Our service works on Amazon Firestick, Samsung & LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs." },
  { q: "Is there a contract or commitment?", a: "No contracts. You pay once for 6 months with no automatic renewals. There is no obligation to continue after your subscription ends." },
  { q: "Why is the 6-month plan the most popular?", a: "It is the sweet spot between price and commitment — you save significantly over monthly billing without locking in for a full year. Most of our Canadian customers choose this plan." },
  { q: "What Canadian sports channels are included?", a: "Every plan includes TSN (all feeds), Sportsnet (all regional feeds), CBC Sports, RDS, TVA Sports. Full NHL, NFL, NBA, MLB, UFC, CFL, and Premier League coverage with no blackouts." },
  { q: "What if I have issues with my IPTV service?", a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email at help@maplestreamtv.ca. Most issues are resolved within minutes." },
];

const faq12Months: FaqItem[] = [
  { q: "What is included in the 12-month IPTV plan?", a: "The 12-month plan includes a full year of access to 25,000+ live channels (TSN, Sportsnet, CBC, CTV, Global, RDS, TVA and more), 120,000+ movies and series on demand, 4K Ultra HD streaming, EPG, and 7-day catch-up TV." },
  { q: "How much do I save compared to monthly billing?", a: "With the annual plan for 1 device, you pay $49 total — just $4.08/month instead of $9/month billed monthly, a 55% saving. For a family with 2 devices, you pay $89 instead of $216 annually." },
  { q: "How do I receive my login credentials after ordering?", a: "After placing your order, our team will send your IPTV login credentials (server URL, username, and password) directly to your email within 15 minutes." },
  { q: "Which devices are compatible with MapleStreamTV?", a: "Our service works on Amazon Firestick, Samsung & LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs." },
  { q: "Is there a contract or commitment?", a: "No contracts. You pay once for 12 months with no automatic renewals. There is no obligation to continue after your year is up." },
  { q: "Why choose the 12-month plan over shorter plans?", a: "It is the best value we offer. At $4.08/month per device, it is cheaper than a single coffee and gives you access to every channel, sport, and movie we carry for the entire year." },
  { q: "What Canadian sports channels are included?", a: "Every plan includes TSN (all feeds), Sportsnet (all regional feeds), CBC Sports, RDS, TVA Sports. Full NHL, NFL, NBA, MLB, UFC, CFL, and Premier League coverage with no blackouts." },
  { q: "What if I have issues with my IPTV service?", a: "Our Canadian support team is available 24/7 via WhatsApp (+1 782-802-6280) and email at help@maplestreamtv.ca. Most issues are resolved within minutes." },
];

// ─── Static plan metadata ─────────────────────────────────────────────────────
const planStaticData: Record<string, PlanStaticData> = {
  "1-month":   { label: "1 Month",   badge: "IPTV CANADA · 1 MONTH PLAN",   faqItems: faq1Month   },
  "3-months":  { label: "3 Months",  badge: "IPTV CANADA · 3 MONTH PLAN",   faqItems: faq3Months  },
  "6-months":  { label: "6 Months",  badge: "IPTV CANADA · 6 MONTH PLAN",   badgeExtra: "Most Popular", faqItems: faq6Months  },
  "12-months": { label: "12 Months", badge: "IPTV CANADA · ANNUAL PLAN",    badgeExtra: "Best Value",   faqItems: faq12Months },
};

// ─── SEO metadata per plan ────────────────────────────────────────────────────
const seoMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "1-month":   { title: "1 Month IPTV Canada — From $9/Device | MapleStreamTV",   description: "Get 1 month of IPTV in Canada from $9. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. No contract. Login credentials sent within 15 minutes.", keywords: "IPTV Canada 1 month, monthly IPTV Canada, IPTV $9 Canada, month to month IPTV Canada" },
  "3-months":  { title: "3 Month IPTV Canada — From $29/Device | MapleStreamTV",  description: "Get 3 months of IPTV in Canada from $29. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. Save vs monthly. Credentials sent within 15 minutes.",    keywords: "IPTV Canada 3 months, 3 month IPTV Canada, quarterly IPTV Canada, IPTV $29 Canada" },
  "6-months":  { title: "6 Month IPTV Canada — From $39/Device | MapleStreamTV",  description: "Get 6 months of IPTV in Canada from $39. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. Most popular plan. Credentials sent within 15 minutes.",   keywords: "IPTV Canada 6 months, 6 month IPTV Canada, best IPTV plan Canada, IPTV $39 Canada" },
  "12-months": { title: "12 Month IPTV Canada — From $49/Device | MapleStreamTV", description: "Get 12 months of IPTV in Canada from $49. 25,000+ live channels, 4K quality, NHL, TSN, CTV and more. Best value annual plan. Credentials sent in 15 minutes.",  keywords: "IPTV Canada 12 months, annual IPTV Canada, yearly IPTV Canada, best value IPTV Canada" },
};

// ─── Static params ────────────────────────────────────────────────────────────
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { plan: "1-month" },
    { plan: "3-months" },
    { plan: "6-months" },
    { plan: "12-months" },
  ];
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ plan: string }>;
}): Promise<Metadata> {
  const { plan } = await params;
  const meta = seoMeta[plan];
  if (!meta) return { title: "Plan Not Found" };
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `https://maplestreamtv.ca/${plan}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://maplestreamtv.ca/${plan}`,
      siteName: "MapleStreamTV",
      locale: "en_CA",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function PlanPage({
  params,
  searchParams,
}: {
  params: Promise<{ plan: string }>;
  searchParams: Promise<{ devices?: string }>;
}) {
  const { plan } = await params;
  const { devices: devicesStr } = await searchParams;

  const data = planStaticData[plan];
  const prices = devicePrices[plan];
  if (!data || !prices) notFound();

  const defaultDevices = Math.min(10, Math.max(1, parseInt(devicesStr ?? "1", 10) || 1));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `MapleStreamTV ${data.label} IPTV Plan`,
    description: seoMeta[plan].description,
    brand: { "@type": "Brand", name: "MapleStreamTV" },
    offers: {
      "@type": "Offer",
      price: prices[0],
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: `https://maplestreamtv.ca/${plan}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqItems.map((item: FaqItem) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PlanPageContent plan={plan} data={data} prices={prices} defaultDevices={defaultDevices} />
    </>
  );
}
