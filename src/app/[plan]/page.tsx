import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlanOrderForm from "../components/PlanOrderForm";

interface PlanData {
  duration: string;
  devices: number;
  price: number;
  originalPrice: number;
  badge?: string;
}

const plans: Record<string, PlanData> = {
  // 1 Month
  "1-month":           { duration: "1 Month",  devices: 1, price: 9,   originalPrice: 18  },
  "1-month-2-devices": { duration: "1 Month",  devices: 2, price: 18,  originalPrice: 36  },
  "1-month-3-devices": { duration: "1 Month",  devices: 3, price: 27,  originalPrice: 54  },
  "1-month-4-devices": { duration: "1 Month",  devices: 4, price: 36,  originalPrice: 72  },
  "1-month-5-devices": { duration: "1 Month",  devices: 5, price: 45,  originalPrice: 90  },
  // 3 Months
  "3-months":           { duration: "3 Months", devices: 1, price: 24,  originalPrice: 36,  badge: "Save 33%" },
  "3-months-2-devices": { duration: "3 Months", devices: 2, price: 45,  originalPrice: 72,  badge: "Save 38%" },
  "3-months-3-devices": { duration: "3 Months", devices: 3, price: 65,  originalPrice: 108, badge: "Save 40%" },
  "3-months-4-devices": { duration: "3 Months", devices: 4, price: 85,  originalPrice: 144, badge: "Save 41%" },
  "3-months-5-devices": { duration: "3 Months", devices: 5, price: 105, originalPrice: 180, badge: "Save 42%" },
  // 6 Months
  "6-months":           { duration: "6 Months", devices: 1, price: 39,  originalPrice: 54,  badge: "Most Popular" },
  "6-months-2-devices": { duration: "6 Months", devices: 2, price: 69,  originalPrice: 108, badge: "Most Popular" },
  "6-months-3-devices": { duration: "6 Months", devices: 3, price: 105, originalPrice: 162, badge: "Most Popular" },
  "6-months-4-devices": { duration: "6 Months", devices: 4, price: 140, originalPrice: 216, badge: "Most Popular" },
  "6-months-5-devices": { duration: "6 Months", devices: 5, price: 175, originalPrice: 270, badge: "Most Popular" },
  // 1 Year
  "1-year":           { duration: "1 Year", devices: 1, price: 49,  originalPrice: 108, badge: "Best Value" },
  "1-year-2-devices": { duration: "1 Year", devices: 2, price: 89,  originalPrice: 216, badge: "Best Value" },
  "1-year-3-devices": { duration: "1 Year", devices: 3, price: 135, originalPrice: 324, badge: "Best Value" },
  "1-year-4-devices": { duration: "1 Year", devices: 4, price: 180, originalPrice: 432, badge: "Best Value" },
  "1-year-5-devices": { duration: "1 Year", devices: 5, price: 225, originalPrice: 540, badge: "Best Value" },
};

export async function generateStaticParams() {
  return Object.keys(plans).map((plan) => ({ plan }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ plan: string }>;
}): Promise<Metadata> {
  const { plan } = await params;
  const data = plans[plan];
  if (!data) return {};
  const devLabel = data.devices === 1 ? "1 Connection" : `${data.devices} Connections`;
  return {
    title: `IPTV Canada ${data.duration} – ${devLabel} | $${data.price} CAD`,
    description: `IPTV Canada ${data.duration} subscription for ${devLabel} — only $${data.price} CAD. 25,000+ channels, 4K, instant activation. Best IPTV service in Canada 2026.`,
    alternates: { canonical: `https://www.iptvsubscriptioncanada.ca/${plan}` },
  };
}

export default async function PlanPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;
  const data = plans[plan];
  if (!data) notFound();

  const devLabel = data.devices === 1 ? "1 Connection" : `${data.devices} Connections`;
  const savingsPct = Math.round((1 - data.price / data.originalPrice) * 100);
  const planLabel = `${data.duration} – ${devLabel}`;

  return (
    <main
      className="min-h-screen py-8 px-4"
      style={{ background: "linear-gradient(180deg,#f3f4f6 0%,#e5e7eb 100%)" }}
    >
      {/* Back nav */}
      <div className="max-w-[860px] mx-auto mb-4">
        <a href="/pricing" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
          ← All Plans
        </a>
      </div>

      <section className="max-w-[860px] mx-auto">
        <div
          className="rounded-[22px] border border-black/[.08] shadow-[0_18px_45px_rgba(2,6,23,.12)] p-6 md:p-8"
          style={{
            background:
              "radial-gradient(900px 380px at 12% 0%,rgba(255,255,255,.28),transparent 58%)," +
              "radial-gradient(800px 320px at 88% 18%,rgba(255,255,255,.16),transparent 58%)," +
              "linear-gradient(180deg,#d5d9df 0%,#c7cdd5 100%)",
          }}
        >
          {/* Badge */}
          <div className="inline-block mb-3 px-3 py-[6px] rounded-full text-[11px] font-bold tracking-[.08em] uppercase border"
            style={{ background: "rgba(225,29,46,.08)", borderColor: "rgba(225,29,46,.18)", color: "#b91c1c" }}>
            IPTV Canada • {data.duration}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(28px,3vw,42px)] font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-0">
            {data.duration}
          </h1>
          <p className="text-base font-semibold text-gray-500 mt-1">{devLabel}</p>

          {/* Red accent line */}
          <span
            className="block mt-3 mb-4 h-[4px] w-[94px] rounded-full"
            style={{ background: "linear-gradient(90deg,#e11d2e,#ef4444)" }}
            aria-hidden="true"
          />

          {/* Price block */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2 text-[11px] font-bold tracking-[.08em] uppercase text-gray-600">
              <span>
                Original Price{" "}
                <s className="opacity-80" style={{ textDecorationThickness: "2px" }}>
                  ${data.originalPrice}
                </s>
              </span>
              <span
                className="px-[10px] py-[5px] rounded-full text-[11px] font-extrabold border"
                style={{ background: "rgba(225,29,46,.10)", borderColor: "rgba(225,29,46,.18)", color: "#b91c1c" }}
              >
                {savingsPct}% OFF
              </span>
              {data.badge && (
                <span
                  className="px-[10px] py-[5px] rounded-full text-[11px] font-extrabold border"
                  style={{ background: "rgba(225,29,46,.10)", borderColor: "rgba(225,29,46,.18)", color: "#b91c1c" }}
                >
                  {data.badge}
                </span>
              )}
            </div>
            <p
              className="text-[clamp(24px,2.6vw,34px)] font-extrabold leading-[1.1] tracking-tight"
              style={{ color: "#b91c1c" }}
            >
              Final Price: ${data.price}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-7 text-gray-800 mb-3 max-w-[70ch]">
            IPTV Canada subscription for <strong>{data.duration}</strong> — <strong>{devLabel}</strong>. Get stable streaming,
            25,000+ live TV channels, 120,000+ movies &amp; series in 4K, and fast activation after you submit your order.
          </p>

          <p className="text-sm leading-[1.65] text-gray-700 mb-4">
            Please complete the form below to place your order. Make sure your details are correct so we can contact you without delay.
          </p>

          {/* Steps */}
          <ol className="list-decimal pl-5 text-sm leading-8 text-gray-700 mb-4">
            <li>Enter your <strong className="text-gray-900">first name</strong>.</li>
            <li>Add your <strong className="text-gray-900">email address</strong> — we&apos;ll send your login details there.</li>
            <li>Select your <strong className="text-gray-900">country</strong> and optionally add your WhatsApp number.</li>
            <li>Submit the form — we will contact you <strong className="text-gray-900">within minutes</strong>.</li>
          </ol>

          {/* Divider */}
          <hr className="my-5 border-black/[.10]" />

          {/* Form box */}
          <div
            className="rounded-2xl p-4 md:p-5 border border-black/[.08]"
            style={{ background: "rgba(255,255,255,.42)", backdropFilter: "blur(4px)" }}
          >
            <PlanOrderForm
              planLabel={planLabel}
              price={data.price}
              whatsappNumber="17828026280"
              emailAddress="help@iptvsubscriptioncanada.ca"
            />
          </div>

          {/* Support text */}
          <p className="mt-4 text-[13px] text-gray-500 leading-relaxed">
            Need help?{" "}
            <a href="/contact" className="text-gray-700 underline hover:text-red-600 transition-colors">
              Contact Support
            </a>{" "}
            or reach us on{" "}
            <a
              href="https://wa.me/17828026280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline hover:text-red-600 transition-colors"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>

        {/* What's included */}
        <div className="mt-8 rounded-[22px] bg-white/60 border border-black/[.07] p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Everything Included in Your Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-black/[.06] bg-white/70">
                <span className="text-green-600 font-bold text-base">✓</span>
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back to pricing */}
        <div className="mt-8 text-center pb-8">
          <a
            href="/pricing"
            className="inline-block bg-[#e11d2e] hover:brightness-95 text-white font-bold px-8 py-4 rounded-xl transition shadow-md shadow-red-200"
          >
            View All Plans
          </a>
        </div>
      </section>
    </main>
  );
}
