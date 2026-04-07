"use client";
import { useState } from "react";

type Props = {
  planLabel: string;
  price: number;
  devices: number;
};

export default function PlanOrderForm({ planLabel, price, devices }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-900 border border-green-600 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-400 mb-2">Order Received!</h3>
        <p className="text-gray-300 text-sm">
          We&apos;ll contact you within 1 hour via WhatsApp or email to complete your activation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-gray-800 rounded-xl p-4 mb-2 flex items-center justify-between">
        <span className="text-gray-300 font-medium">{planLabel} — {devices} {devices === 1 ? "Device" : "Devices"}</span>
        <span className="text-red-400 font-extrabold text-xl">${price}</span>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Smith"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Phone / WhatsApp</label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="+1 (555) 000-0000"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Device / App (optional)</label>
        <input
          type="text"
          name="device"
          placeholder="e.g. Fire Stick, Smart TV, iPhone"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
      >
        Order Now — ${price}
      </button>

      <p className="text-center text-xs text-gray-500">
        We&apos;ll send payment instructions &amp; activate within 1 hour.
      </p>
    </form>
  );
}
