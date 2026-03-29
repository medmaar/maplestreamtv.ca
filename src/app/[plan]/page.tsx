import { notFound } from "next/navigation";
import type { Metadata } from "next";

const plans: Record<string, { duration: string; devices: number; price: number; monthlyPrice: string; badge?: string }> = {
  // 1 Month
  "1-month":           { duration: "1 Month",  devices: 1, price: 9,   monthlyPrice: "$9/mo" },
  "1-month-2-devices": { duration: "1 Month",  devices: 2, price: 18,  monthlyPrice: "$18/mo" },
  "1-month-3-devices": { duration: "1 Month",  devices: 3, price: 27,  monthlyPrice: "$27/mo" },
  "1-month-4-devices": { duration: "1 Month",  devices: 4, price: 36,  monthlyPrice: "$36/mo" },
  "1-month-5-devices": { duration: "1 Month",  devices: 5, price: 45,  monthlyPrice: "$45/mo" },
  // 3 Months
  "3-months":           { duration: "3 Months", devices: 1, price: 24,  monthlyPrice: "$8/mo", badge: "Save 11%" },
  "3-months-2-devices": { duration: "3 Months", devices: 2, price: 45,  monthlyPrice: "$15/mo", badge: "Save 17%" },
  "3-months-3-devices": { duration: "3 Months", devices: 3, price: 65,  monthlyPrice: "$21.67/mo", badge: "Save 20%" },
  "3-months-4-devices": { duration: "3 Months", devices: 4, price: 85,  monthlyPrice: "$28.33/mo", badge: "Save 21%" },
  "3-months-5-devices": { duration: "3 Months", devices: 5, price: 105, monthlyPrice: "$35/mo", badge: "Save 22%" },
  // 6 Months
  "6-months":           { duration: "6 Months", devices: 1, price: 39,  monthlyPrice: "$6.50/mo", badge: "Most Popular" },
  "6-months-2-devices": { duration: "6 Months", devices: 2, price: 69,  monthlyPrice: "$11.50/mo", badge: "Most Popular" },
  "6-months-3-devices": { duration: "6 Months", devices: 3, price: 105, monthlyPrice: "$17.50/mo", badge: "Most Popular" },
  "6-months-4-devices": { duration: "6 Months", devices: 4, price: 140, monthlyPrice: "$23.33/mo", badge: "Most Popular" },
  "6-months-5-devices": { duration: "6 Months", devices: 5, price: 175, monthlyPrice: "$29.17/mo", badge: "Most Popular" },
  // 1 Year
  "1-year":           { duration: "1 Year", devices: 1, price: 49,  monthlyPrice: "$4.08/mo", badge: "Best Value" },
  "1-year-2-devices": { duration: "1 Year", devices: 2, price: 89,  monthlyPrice: "$7.42/mo", badge: "Best Value" },
  "1-year-3-devices": { duration: "1 Year", devices: 3, price: 135, monthlyPrice: "$11.25/mo", badge: "Best Value" },
  "1-year-4-devices": { duration: "1 Year", devices: 4, price: 180, monthlyPrice: "$15/mo", badge: "Best Value" },
  "1-year-5-devices": { duration: "1 Year", devices: 5, price: 225, monthlyPrice: "$18.75/mo", badge: "Best Value" },
};

const features = [
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
];

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
  const devLabel = data.devices === 1 ? "1 Device" : `${data.devices} Devices`;
  return {
    title: `IPTV Canada ${data.duration} – ${devLabel} | $${data.price} CAD`,
    description: `Get the IPTV Canada ${data.duration} plan for ${devLabel} at $${data.price} CAD. 25,000+ channels, 4K quality, instant activation. Best IPTV subscription in Canada 2026.`,
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

  const devLabel = data.devices === 1 ? "1 Device" : `${data.devices} Devices`;
  const whatsappMsg = encodeURIComponent(
    `Hi IPTV Canada, I'd like to order the ${data.duration} plan for ${devLabel} at $${data.price} CAD.`
  );
  const telegramMsg = encodeURIComponent(
    `Hi IPTV Canada, I want to order the ${data.duration} plan for ${devLabel} at $${data.price} CAD.`
  );
  const emailSubject = encodeURIComponent(`IPTV Canada Order – ${data.duration} / ${devLabel}`);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI'd like to purchase:\n\n- Plan: ${data.duration}\n- Devices: ${devLabel}\n- Price: $${data.price} CAD\n\nPlease send payment instructions.\n\nThank you!`
  );

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {data.badge && (
            <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
              {data.badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            IPTV Canada{" "}
            <span className="text-red-500">{data.duration}</span>
            {" "}–{" "}
            <span className="text-red-500">{devLabel}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Canada&apos;s #1 IPTV subscription. 25,000+ channels, 4K quality, instant activation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> No contracts</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Instant activation</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 24/7 Canadian support</span>
          </div>
        </div>
      </section>

      {/* Plan card + CTA */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          {/* Price card */}
          <div className="bg-gray-900 border-2 border-red-600 rounded-2xl p-8 mb-8 text-center">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">{data.duration} · {devLabel}</div>
            <div className="text-6xl font-extrabold text-red-500 mb-1">${data.price}</div>
            <div className="text-gray-400 text-sm mb-1">CAD · {data.monthlyPrice}</div>
            <div className="text-gray-500 text-xs">One-time payment · No auto-renewal</div>
          </div>

          {/* Order buttons */}
          <div className="space-y-4 mb-10">
            <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wider">Order now via</p>

            <a
              href={`https://wa.me/17828026280?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-gray-900 bg-[#25D366] hover:brightness-110 transition text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

            <a
              href={`https://t.me/IPTVCanadaSupport?text=${telegramMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-gray-900 bg-[#88C9F0] hover:brightness-110 transition text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>

            <a
              href={`mailto:help@iptvsubscriptioncanada.ca?subject=${emailSubject}&body=${emailBody}`}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-gray-900 bg-[#F5C518] hover:brightness-110 transition text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-400 mb-8">
            <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
              <div className="text-xl mb-1">⚡</div>
              <div>Instant Activation</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
              <div className="text-xl mb-1">🔒</div>
              <div>Secure Payment</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
              <div className="text-xl mb-1">🇨🇦</div>
              <div>Canadian Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Everything Included in Your Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-gray-950 rounded-xl px-4 py-3 border border-gray-800">
                <span className="text-green-400">✓</span>
                <span className="text-gray-200 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other plans */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for a different plan?</h2>
          <p className="text-gray-400 mb-8">Browse all available durations and device options.</p>
          <a
            href="/pricing"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-colors"
          >
            View All Plans
          </a>
        </div>
      </section>
    </main>
  );
}
