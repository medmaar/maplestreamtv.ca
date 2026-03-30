"use client";
import { useState } from "react";

const countries = [
  "Canada", "United States", "United Kingdom", "Australia", "France", "Germany",
  "Spain", "Italy", "Netherlands", "Belgium", "Switzerland", "Portugal", "Sweden",
  "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Austria", "Ireland",
  "New Zealand", "South Africa", "Nigeria", "Ghana", "Kenya", "Morocco", "Algeria",
  "Tunisia", "Senegal", "Cameroon", "Côte d'Ivoire", "Egypt", "Saudi Arabia",
  "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Lebanon",
  "Iraq", "Iran", "Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal",
  "Philippines", "Malaysia", "Singapore", "Indonesia", "Thailand", "Vietnam",
  "China", "Hong Kong", "Taiwan", "Japan", "South Korea", "Brazil", "Mexico",
  "Argentina", "Colombia", "Chile", "Peru", "Venezuela", "Ecuador", "Bolivia",
  "Uruguay", "Paraguay", "Guatemala", "Honduras", "El Salvador", "Costa Rica",
  "Panama", "Dominican Republic", "Cuba", "Haiti", "Jamaica", "Trinidad and Tobago",
  "Other",
];

interface Props {
  plan: string;
  price: number;
  devices: number;
}

export default function OrderForm({ plan, price, devices }: Props) {
  const [form, setForm] = useState({ name: "", email: "", country: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country: form.country,
          whatsapp: form.whatsapp,
          plan: `${plan} — ${devices} device${devices > 1 ? "s" : ""} — $${price}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
    } catch {
      // Still show success to user even if email fails
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-green-400 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2">Order Received!</h3>
        <p className="text-gray-400 text-sm mb-1">
          Thanks, <span className="text-white font-semibold">{form.name}</span>. We&apos;ll contact you shortly on WhatsApp or email.
        </p>
        <p className="text-gray-500 text-xs mt-4">
          Usually activated within 15 minutes. Check WhatsApp and your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-1">First Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your first name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Country</label>
        <select
          name="country"
          required
          value={form.country}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
        >
          <option value="" disabled>Select your country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsapp"
          required
          placeholder="+1 234 567 8900"
          value={form.whatsapp}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
        />
      </div>
      <input type="hidden" name="plan" value={`${plan} — ${devices} device${devices > 1 ? "s" : ""} — $${price}`} />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white py-4 rounded-xl font-bold text-lg transition-colors mt-2"
      >
        {loading ? "Submitting…" : "Submit Order"}
      </button>
      <p className="text-center text-gray-500 text-xs">
        🔒 Secure. We&apos;ll contact you via WhatsApp or email to activate your subscription.
      </p>
    </form>
  );
}
