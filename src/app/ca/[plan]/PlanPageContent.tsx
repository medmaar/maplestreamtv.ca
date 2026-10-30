"use client";
import { useSearchParams } from "next/navigation";
import PlanOrderForm from "../pricing/PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../pricing/PlanFAQ";

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

export default function PlanPageContent({ plan, data, prices, defaultDevices }: Props) {
  const searchParams = useSearchParams();
  const raw = parseInt(searchParams.get("devices") ?? String(defaultDevices), 10);
  const devices = Math.min(10, Math.max(1, isNaN(raw) ? defaultDevices : raw));

  const price = prices[devices - 1];
  const deviceLabel = `${devices} Device${devices > 1 ? "s" : ""}`;
  const planLabel = `${data.label} - ${deviceLabel}`;
  const badgeText = `MAPLESTREAMTV · ${data.label.toUpperCase()} · ${devices} DEVICE${devices > 1 ? "S" : ""}`;

  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
      <section
        className="py-20 px-4"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-2xl mx-auto">

          {/* ── Title block ───────────────────────────────────── */}
          <div className="mb-8">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(253,3,34,0.12)",
                border: "1px solid rgba(253,3,34,0.28)",
                color: "#fd0322",
              }}
            >
              {badgeText}
            </span>

            <h1
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              {planLabel}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10 }}>
              <span style={{ color: "#fd0322", fontWeight: 800, fontSize: "2rem" }}>
                ${price}
              </span>
              <span
                style={{
                  background: "rgba(253,3,34,0.15)",
                  color: "#fd0322",
                  border: "1px solid rgba(253,3,34,0.4)",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "4px 12px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}
              >
                50% OFF
              </span>
            </div>
          </div>

          {/* ── Instructions ──────────────────────────────────── */}
          <div className="mb-10">
            <p className="text-gray-300 text-base">Fill out the form below to place your order.</p>
            <p className="text-gray-400 text-sm mt-1">
              We&apos;ll send your login credentials via WhatsApp or email within 5 minutes.
            </p>
          </div>

          {/* ── Form card ─────────────────────────────────────── */}
          <div
            className="rounded-3xl p-6 md:p-8 border mb-16"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <PlanOrderForm plan={`${planLabel} — $${price}`} />
          </div>

          {/* ── FAQ ───────────────────────────────────────────── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#fd0322" }}>FAQ</p>
            <h2 className="text-2xl font-extrabold text-white mb-6">Frequently Asked Questions</h2>
            <PlanFAQ items={data.faqItems} />
          </div>

        </div>
      </section>
    </main>
  );
}
