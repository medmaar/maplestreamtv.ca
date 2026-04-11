"use client";
import { useState } from "react";
import OrderForm from "../pricing/OrderForm";
import PlanFAQ, { type FaqItem } from "../pricing/PlanFAQ";
import Link from "next/link";

export interface PlanStaticData {
  label: string;
  badge: string;
  badgeExtra?: string;
  faqItems: FaqItem[];
}

interface Props {
  plan: string;
  data: PlanStaticData;
  prices: number[]; // index 0 = 1 device, index 9 = 10 devices
  defaultDevices: number;
}

const features = [
  "25,000+ Live TV Channels",
  "120,000+ Movies & Series (VOD)",
  "4K Ultra HD & HD Quality",
  "NHL · TSN · Sportsnet · CTV · CBC",
  "PPV Events Included",
  "Electronic Program Guide (EPG)",
  "7-Day Catch-Up TV",
  "All Devices Supported",
  "Anti-Freeze Technology",
  "24/7 Canadian Support",
];

const otherPlans = [
  { slug: "1-month",   label: "1 Month"  },
  { slug: "3-months",  label: "3 Months" },
  { slug: "6-months",  label: "6 Months" },
  { slug: "12-months", label: "12 Months" },
];

export default function PlanPageContent({ plan, data, prices, defaultDevices }: Props) {
  const [devices, setDevices] = useState(defaultDevices);
  const price = prices[devices - 1];

  const savings =
    plan !== "1-month"
      ? Math.round(100 - (price / (prices[devices - 1] * (plan === "3-months" ? 3 : plan === "6-months" ? 6 : 12) / (plan === "3-months" ? 3 : plan === "6-months" ? 6 : 12))) * 100)
      : 0;

  // Per-month cost
  const months = plan === "1-month" ? 1 : plan === "3-months" ? 3 : plan === "6-months" ? 6 : 12;
  const perMonth = Math.round((price / months) * 100) / 100;
  const monthlyPrice = prices[devices - 1]; // 1-month price = monthly rate
  const savingPercent = plan !== "1-month"
    ? Math.round(100 - (perMonth / prices[devices - 1]) * 100)
    : 0;

  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="pt-16 pb-12 px-4"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-2xl mx-auto">

          {/* Badge */}
          <div className="mb-6">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(253,3,34,0.12)",
                border: "1px solid rgba(253,3,34,0.28)",
                color: "#fd0322",
              }}
            >
              {data.badge}
            </span>
            {data.badgeExtra && (
              <span
                className="ml-2 inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: "#fd0322", color: "#fff" }}
              >
                {data.badgeExtra}
              </span>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            {data.label} Plan —{" "}
            <span style={{ color: "#fd0322" }}>${price}</span>
          </h1>

          {/* Per-month note */}
          {plan !== "1-month" && (
            <p className="text-gray-400 text-sm mb-2">
              Just{" "}
              <span className="text-white font-semibold">${perMonth.toFixed(2)}/mo</span>
              {" "}— save{" "}
              <span style={{ color: "#4ade80" }} className="font-semibold">
                {savingPercent}%
              </span>{" "}
              vs monthly billing
            </p>
          )}

          <div style={{ width: 48, height: 4, background: "#fd0322", borderRadius: 2 }} className="mb-8" />

          {/* Device selector */}
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-3 font-medium">
              Select number of devices:
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setDevices(n)}
                  className="font-semibold text-sm transition-all"
                  style={{
                    padding: "7px 16px",
                    borderRadius: 999,
                    border: devices === n ? "none" : "1px solid rgba(255,255,255,0.15)",
                    background: devices === n ? "#fd0322" : "rgba(255,255,255,0.04)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  {n} {n === 1 ? "Device" : "Devices"}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Price shown is for {devices} simultaneous connection{devices > 1 ? "s" : ""}
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                <span style={{ color: "#fd0322", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Order form ───────────────────────────────────────── */}
      <section className="px-4 pb-12">
        <div className="max-w-2xl mx-auto">

          {/* Instruction */}
          <div className="mb-6">
            <p className="text-gray-300 text-base">Fill out the form below to place your order.</p>
            <p className="text-gray-400 text-sm mt-1">
              We&apos;ll send your IPTV login credentials to your email within 15 minutes.
            </p>
          </div>

          {/* Price summary card */}
          <div
            className="flex items-center justify-between rounded-2xl px-5 py-4 mb-6 border"
            style={{
              background: "rgba(253,3,34,0.06)",
              borderColor: "rgba(253,3,34,0.22)",
            }}
          >
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">Your Plan</p>
              <p className="font-bold text-white">
                {data.label} · {devices} Device{devices > 1 ? "s" : ""}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-extrabold" style={{ color: "#fd0322" }}>
                ${price}
              </p>
              {plan !== "1-month" && (
                <p className="text-xs text-gray-400">${perMonth.toFixed(2)}/mo</p>
              )}
            </div>
          </div>

          {/* Form card */}
          <div
            className="rounded-3xl p-6 md:p-8 border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <OrderForm
              plan={`${data.label} Plan`}
              price={price}
              devices={devices}
            />
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-gray-500">
            {["No contracts", "Instant activation", "24/7 support", "Cancel anytime"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span style={{ color: "#4ade80" }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other plans ──────────────────────────────────────── */}
      <section
        className="px-4 py-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4 text-center">
            Compare Other Plans
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherPlans.map((p) => {
              const isCurrent = p.slug === plan;
              const planPrice = {
                "1-month": [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
                "3-months": [29, 50, 75, 99, 120, 144, 168, 192, 216, 240],
                "6-months": [39, 69, 105, 140, 175, 210, 245, 280, 315, 350],
                "12-months": [49, 89, 135, 180, 225, 270, 315, 360, 405, 450],
              }[p.slug]![devices - 1];

              return (
                <Link
                  key={p.slug}
                  href={`/${p.slug}?devices=${devices}`}
                  className="rounded-2xl px-4 py-3 text-center transition-all"
                  style={{
                    background: isCurrent ? "rgba(253,3,34,0.1)" : "rgba(255,255,255,0.03)",
                    border: isCurrent ? "1px solid rgba(253,3,34,0.35)" : "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    pointerEvents: isCurrent ? "none" : "auto",
                  }}
                >
                  <p className="text-xs text-gray-400 mb-0.5">{p.label}</p>
                  <p
                    className="font-bold text-sm"
                    style={{ color: isCurrent ? "#fd0322" : "#fff" }}
                  >
                    ${planPrice}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <PlanFAQ items={data.faqItems} />
        </div>
      </section>

    </main>
  );
}
