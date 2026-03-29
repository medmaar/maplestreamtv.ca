import type { Metadata } from "next";
import OrderForm from "../OrderForm";

export const metadata: Metadata = {
  title: "IPTV Canada 1 Month Plan 2026 | Starting at $9 | No Contract",
  description:
    "Get IPTV Canada for just $9/month with our 1-month plan. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. No contract. Instant activation.",
  keywords:
    "IPTV Canada 1 month, IPTV monthly plan Canada, IPTV $9 Canada, month to month IPTV Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/pricing/1-month" },
};

const deviceOptions = [
  { devices: 1, price: 9 },
  { devices: 2, price: 18 },
  { devices: 3, price: 27 },
  { devices: 4, price: 36 },
  { devices: 5, price: 45 },
];

export default function Pricing1MonthPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen py-16 px-4">
      <div className="max-w-xl mx-auto">

        {/* Badge */}
        <div className="text-center mb-8">
          <span className="bg-red-600 text-white text-xs px-4 py-1 rounded-full font-bold uppercase tracking-widest">
            IPTV Canada · 1 Month
          </span>
        </div>

        {/* Title & Price */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-3">1 Month</h1>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-gray-500 line-through text-2xl">$18</span>
            <span className="text-red-500 text-5xl font-extrabold">$9</span>
          </div>
          <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full font-bold">50% OFF</span>
          <p className="text-gray-400 text-sm mt-4 max-w-sm mx-auto">
            IPTV Subscription for 1 Month. Stable streaming, 25,000+ live channels + VOD, and fast activation after you submit your order.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-10">
          {["Fast activation", "25,000+ channels", "4K Ultra HD", "NHL · TSN · CTV", "No contract"].map((f) => (
            <span key={f} className="flex items-center gap-1">
              <span className="text-green-400">✓</span> {f}
            </span>
          ))}
        </div>

        {/* Device options */}
        <div className="mb-8">
          <p className="text-sm text-gray-400 text-center mb-3">Select number of simultaneous devices:</p>
          <div className="grid grid-cols-5 gap-2 text-center text-sm">
            {deviceOptions.map((opt) => (
              <div key={opt.devices} className="bg-gray-900 border border-gray-700 rounded-xl py-3 px-1">
                <div className="font-bold text-white">{opt.devices}</div>
                <div className="text-gray-500 text-xs">{opt.devices === 1 ? "device" : "devices"}</div>
                <div className="text-red-400 font-bold mt-1">${opt.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold mb-6 text-center">Place Your Order</h2>
          <OrderForm plan="1 Month" price={9} devices={1} />
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Not sure yet?{" "}
          <a href="/free-trial" className="text-red-400 hover:underline">Get a free 24-hour trial first</a>
        </p>
      </div>
    </main>
  );
}
