import type { Metadata } from "next";
import Navbar from "../../Navbar";
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

const features = [
  "25,000+ Live Channels",
  "120,000+ Movies & Series",
  "4K Ultra HD Quality",
  "NHL · TSN · CTV · Sportsnet",
  "All Devices Supported",
  "99.9% Uptime Guarantee",
  "Fast Activation",
  "No Contract",
];

export default function Pricing1MonthPage() {
  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.12) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-xl mx-auto">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(253,3,34,0.12)", border: "1px solid rgba(253,3,34,0.28)", color: "#fd0322" }}
          >
            IPTV Canada · 1 Month
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">1 Month Plan</h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-gray-500 line-through text-2xl">$18</span>
            <span className="text-5xl font-extrabold" style={{ color: "#fd0322" }}>$9</span>
          </div>
          <span
            className="inline-block text-xs px-3 py-1 rounded-full font-bold mb-6"
            style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80" }}
          >
            50% OFF — Limited Time
          </span>
          <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
            Full access to 25,000+ live channels and 120,000+ movies. Stable streaming with instant activation.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-12 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 px-3 py-3 rounded-2xl border text-xs font-medium text-gray-300"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <span style={{ color: "#4ade80" }} className="shrink-0">✓</span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Device options + Order form */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto">

          {/* Device selector */}
          <div
            className="rounded-3xl p-6 border mb-4"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <p className="text-sm text-gray-400 text-center mb-4">Simultaneous devices — all at the same price per device:</p>
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              {deviceOptions.map((opt) => (
                <div
                  key={opt.devices}
                  className="rounded-2xl py-3 px-1 border"
                  style={{ background: "rgba(253,3,34,0.06)", borderColor: "rgba(253,3,34,0.2)" }}
                >
                  <div className="font-bold text-white text-base">{opt.devices}</div>
                  <div className="text-gray-500 text-xs">{opt.devices === 1 ? "device" : "devices"}</div>
                  <div className="font-bold mt-1 text-sm" style={{ color: "#fd0322" }}>${opt.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order form card */}
          <div
            className="rounded-3xl p-6 md:p-8 border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: "#fd0322" }}>
              Place Your Order
            </p>
            <h2 className="text-2xl font-extrabold text-white text-center mb-6">Get Started Today</h2>
            <OrderForm plan="1 Month" price={9} devices={1} />
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            Not sure yet?{" "}
            <a href="/free-trial" className="hover:underline" style={{ color: "#fd0322" }}>
              Get a free 24-hour trial first
            </a>
          </p>
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
                Canada&apos;s #1 IPTV subscription service. Serving Toronto, Montreal, Vancouver, Calgary, Ottawa and all of Canada.
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
  );
}
