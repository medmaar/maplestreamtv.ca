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
  "6 Months": "MOST POPULAR",
  "1 Year": "BEST VALUE",
};

const slugMap: Record<Duration, string> = {
  "1 Month":  "1-month",
  "3 Months": "3-months",
  "6 Months": "6-months",
  "1 Year":   "1-year",
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
    <section id="pricing" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          IPTV Canada <span className="text-red-500">Subscription Plans</span>
        </h2>
        <p className="text-center text-gray-400 mb-10">
          No contracts. Instant activation. Cancel anytime.
        </p>

        {/* Device tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {plans.map((p) => (
            <button
              key={p.devices}
              onClick={() => setSelectedDevices(p.devices)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-colors ${
                selectedDevices === p.devices
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-gray-600 text-gray-400 hover:border-red-500 hover:text-white"
              }`}
            >
              {p.devices} {p.devices === 1 ? "Device" : "Devices"}
            </button>
          ))}
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {durations.map((duration) => {
            const price = current.prices[duration];
            const badge = badges[duration];
            const popular = duration === "6 Months";
            return (
              <div
                key={duration}
                className={`rounded-2xl p-8 border-2 relative flex flex-col ${
                  popular
                    ? "border-red-500 bg-red-950"
                    : "border-gray-700 bg-gray-950"
                }`}
              >
                {badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-4 py-1 rounded-full font-bold whitespace-nowrap">
                    {badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{duration}</h3>
                <div className="text-5xl font-extrabold text-red-500 mb-1">
                  ${price}
                </div>
                <div className="text-gray-400 text-sm mb-6">
                  {selectedDevices} {selectedDevices === 1 ? "Device" : "Devices"}
                </div>
                <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={getPlanSlug(duration, selectedDevices)}
                  className={`block text-center py-3 rounded-xl font-bold transition-colors ${
                    popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
