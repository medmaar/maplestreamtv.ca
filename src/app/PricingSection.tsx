"use client";
import { useState } from "react";

const plans = [
  { devices: 1, prices: { "1 Month": 9,  "3 Months": 24,  "6 Months": 39,  "1 Year": 49  } },
  { devices: 2, prices: { "1 Month": 18, "3 Months": 45,  "6 Months": 69,  "1 Year": 89  } },
  { devices: 3, prices: { "1 Month": 27, "3 Months": 65,  "6 Months": 105, "1 Year": 135 } },
  { devices: 4, prices: { "1 Month": 36, "3 Months": 85,  "6 Months": 140, "1 Year": 180 } },
  { devices: 5, prices: { "1 Month": 45, "3 Months": 105, "6 Months": 175, "1 Year": 225 } },
];

const durations = ["1 Month", "3 Months", "6 Months", "1 Year"] as const;
type Duration = typeof durations[number];

const badges: Partial<Record<Duration, string>> = {
  "6 Months": "Most Popular",
  "1 Year": "Best Value",
};

const slugMap: Record<Duration, string> = {
  "1 Month":  "1-month",
  "3 Months": "3-months",
  "6 Months": "6-months",
  "1 Year":   "1-year",
};

const monthlyMap: Record<Duration, number> = {
  "1 Month": 1,
  "3 Months": 3,
  "6 Months": 6,
  "1 Year": 12,
};

function getPlanSlug(duration: Duration, devices: number): string {
  const base = slugMap[duration];
  return devices === 1 ? `/${base}` : `/${base}-${devices}-devices`;
}

const features = [
  "25,000+ Live Channels",
  "120,000+ Movies & Series",
  "4K Ultra HD Quality",
  "NHL · TSN · Sportsnet · CTV",
  "PPV Events Included",
  "EPG & Catch-Up TV",
  "All Devices Supported",
  "24/7 Canadian Support",
];

export default function PricingSection() {
  const [selectedDevices, setSelectedDevices] = useState(1);
  const current = plans.find((p) => p.devices === selectedDevices)!;

  return (
    <section id="pricing" className="py-24 px-4" style={{ background: "#10131E" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fd0322" }}>
          Pricing Plans
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto text-sm">
          No contracts. No hidden fees. Instant activation after you order.
        </p>

        {/* Device selector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {plans.map((p) => (
            <button
              key={p.devices}
              onClick={() => setSelectedDevices(p.devices)}
              className="px-5 py-2.5 rounded-full text-sm font-bold border transition-all"
              style={
                selectedDevices === p.devices
                  ? { background: "#fd0322", borderColor: "#fd0322", color: "#fff" }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.12)",
                      color: "#94a3b8",
                    }
              }
            >
              {p.devices} {p.devices === 1 ? "Device" : "Devices"}
            </button>
          ))}
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {durations.map((duration) => {
            const price = current.prices[duration];
            const badge = badges[duration];
            const popular = duration === "6 Months";
            const perMonth = Math.round(price / monthlyMap[duration]);

            return (
              <div
                key={duration}
                className="rounded-3xl p-7 border relative flex flex-col transition-all duration-200 hover:-translate-y-1"
                style={
                  popular
                    ? {
                        background:
                          "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(253,3,34,0.12) 0%, transparent 60%), rgba(253,3,34,0.06)",
                        borderColor: "rgba(253,3,34,0.45)",
                        boxShadow: "0 0 32px rgba(253,3,34,0.14)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }
                }
              >
                {/* Badge pill */}
                {badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[11px] px-4 py-1 rounded-full font-bold whitespace-nowrap"
                    style={{ background: "#fd0322" }}
                  >
                    {badge}
                  </div>
                )}

                {/* Duration label */}
                <p className="text-sm font-semibold text-gray-400 mb-1">{duration}</p>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-5xl font-extrabold text-white">${price}</span>
                </div>

                {/* Per month note */}
                <p className="text-xs font-medium mb-6" style={{ color: "#fd0322" }}>
                  Costs only ${perMonth}/mo
                </p>

                {/* Features */}
                <ul className="space-y-2.5 text-sm text-gray-400 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-[2px] shrink-0 text-green-400 font-bold text-xs">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getPlanSlug(duration, selectedDevices)}
                  className="block text-center py-3.5 rounded-2xl font-bold text-sm transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.99]"
                  style={
                    popular
                      ? {
                          background: "#fd0322",
                          color: "#fff",
                          boxShadow: "0 6px 20px rgba(253,3,34,0.3)",
                        }
                      : {
                          border: "1px solid rgba(253,3,34,0.45)",
                          color: "#fd0322",
                        }
                  }
                >
                  Get Started →
                </a>
              </div>
            );
          })}
        </div>

        {/* Trust note */}
        <p className="text-center text-gray-500 text-xs mt-8">
          All plans include the same channels, VOD library, and features. Longer plans = lower monthly cost.
        </p>
      </div>
    </section>
  );
}
