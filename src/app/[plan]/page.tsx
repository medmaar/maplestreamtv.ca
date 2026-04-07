export const runtime = "edge";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlanOrderForm from "../pricing/PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../pricing/PlanFAQ";

type PlanData = {
  label: string;
  price: number;
  devices: number;
  perMonth: string;
};

const plans: Record<string, PlanData> = {
  "1-month":   { label: "1 Month",   price: 9,  devices: 1, perMonth: "$9/mo" },
  "6-months":  { label: "6 Months",  price: 39, devices: 1, perMonth: "$6.50/mo" },
  "12-months": { label: "12 Months", price: 49, devices: 1, perMonth: "$4.08/mo" },
};

const faqItems: FaqItem[] = [
  { q: "When will my service be activated?", a: "Activation happens within 1 hour of payment confirmation, usually faster. You'll receive your login credentials via email or WhatsApp." },
  { q: "What devices are supported?", a: "All plans work on Fire Stick, Android TV, Smart TVs (Samsung/LG), iOS, Android, MAG boxes, and any IPTV app like TiviMate or IPTV Smarters." },
  { q: "Is there a free trial?", a: "Yes — we offer a 24-hour free trial with no credit card required. Visit our Free Trial page to get started before purchasing." },
  { q: "What payment methods are accepted?", a: "We accept credit/debit cards, PayPal, Interac e-Transfer, and cryptocurrency. Payment instructions are sent after you place your order." },
  { q: "Can I upgrade my plan later?", a: "Yes. Contact us anytime and we'll credit the remaining time on your current plan toward a new one." },
];

export async function generateMetadata({ params }: { params: Promise<{ plan: string }> }): Promise<Metadata> {
  const { plan } = await params;
  const data = plans[plan];
  if (!data) return {};
  return {
    title: `IPTV Canada ${data.label} Plan — ${data.perMonth} | MapleStream TV`,
    description: `Subscribe to our ${data.label} IPTV Canada plan for only $${data.price}. 25,000+ channels, 4K quality, instant activation.`,
  };
}

export default async function PlanPage({ params }: { params: Promise<{ plan: string }> }) {
  const { plan } = await params;
  const data = plans[plan];

  if (!data) notFound();

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold mb-4 uppercase tracking-wide">
            IPTV Canada
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            {data.label} <span className="text-red-500">Plan</span>
          </h1>
          <p className="text-2xl font-bold text-white mb-1">
            ${data.price} <span className="text-gray-400 text-base font-normal">— {data.perMonth}</span>
          </p>
          <p className="text-gray-400 mt-4">
            25,000+ channels · 120,000+ VOD · 4K HD · Instant activation
          </p>
        </div>
      </section>

      {/* Order form + features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Order form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Complete Your Order</h2>
            <PlanOrderForm planLabel={data.label} price={data.price} devices={data.devices} />
          </div>

          {/* What's included */}
          <div>
            <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
            <ul className="space-y-3">
              {[
                "25,000+ Live TV Channels",
                "120,000+ Movies & Series (VOD)",
                "4K Ultra HD & HD Quality",
                "NHL, NFL, NBA, MLB, UFC",
                "TSN, Sportsnet, CBC, CTV, Global",
                "PPV Events Included",
                "Electronic Program Guide (EPG)",
                "Catch-Up TV (7 days)",
                "Fire Stick, Smart TV, iOS, Android",
                "Anti-Freeze Technology",
                "99.9% Uptime Guarantee",
                "24/7 Canadian Support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 border border-gray-800">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-200 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <a
                href="/free-trial"
                className="text-sm text-red-400 hover:text-red-300 underline"
              >
                Want to try first? Get a 24-hour free trial →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Common <span className="text-red-500">Questions</span>
          </h2>
          <PlanFAQ items={faqItems} />
        </div>
      </section>
    </main>
  );
}
