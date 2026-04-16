"use client";
import { useState } from "react";

const items = [
  {
    q: "How much can I save by cutting the cord?",
    a: "Most Canadian families pay $80–$150/month for cable. MapleStreamTV starts at $9/month — that's a saving of over $900 a year. A 12-month plan costs just $49 total, less than one cable bill.",
  },
  {
    q: "Is setup easy if I'm not tech-savvy?",
    a: "Very easy. Install one app on your Fire Stick, Smart TV, phone, or tablet, enter your login details, and you're live in under 5 minutes. No technician needed, no equipment to return. We send full setup instructions with every subscription.",
  },
  {
    q: "What kids and family channels are included?",
    a: "Disney Channel, Treehouse, YTV, Teletoon, Nickelodeon, Cartoon Network, Disney Junior, and many more — included in every plan. Plus CBC Kids, TVO Kids, and all Canadian family channels. No add-ons required.",
  },
  {
    q: "Can multiple family members stream at the same time?",
    a: "Yes — choose a 2–10 connection plan so everyone streams simultaneously. Kids on the tablet, you on the TV, partner on a laptop — all independent streams at the same time, on the same plan.",
  },
  {
    q: "Will I keep my local Canadian channels like CBC and CTV?",
    a: "Yes. CBC, CTV, Global, City TV, CP24, Noovo, and regional feeds are all included in every plan. Same channels you have now — no cable contract required.",
  },
  {
    q: "Is there a free trial before I commit?",
    a: "Yes — 24-hour free trial, no credit card required. Full access to all 25,000+ channels on any device. Contact us via WhatsApp or email and we'll activate it instantly.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border overflow-hidden transition-colors"
          style={{
            borderColor: open === i ? "rgba(253,3,34,0.38)" : "rgba(255,255,255,0.07)",
            background: open === i ? "rgba(253,3,34,0.05)" : "rgba(255,255,255,0.03)",
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-white text-sm md:text-base leading-snug">
              {item.q}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all duration-300"
              style={{
                background: open === i ? "#fd0322" : "rgba(255,255,255,0.08)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
