"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const deviceTypes = [
  "Smart TV (Samsung / LG)",
  "Amazon Firestick",
  "Android Box",
  "Android Phone / Tablet",
  "iPhone / iPad (iOS)",
  "MAG Box",
  "Windows PC / Mac",
  "Other",
];

interface Props {
  plan: string;
}

export default function PlanOrderForm({ plan }: Props) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    plan,
    device_type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          full_name: form.full_name || "Not provided",
          email: form.email || "Not provided",
          phone: form.phone || "Not provided",
          plan: form.plan,
          device_type: form.device_type || "Not specified",
          message: form.message || "—",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl"
          style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.3)" }}
        >
          ✓
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-2">Order Received!</h3>
        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          Thanks{form.full_name ? `, ${form.full_name}` : ""}! We&apos;ll contact you shortly to
          activate your <span className="text-white font-semibold">{plan}</span> subscription.
        </p>
        <p className="text-gray-600 text-xs mt-4">
          Usually activated within 15 minutes · Check WhatsApp &amp; your inbox
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Full Name</label>
        <input
          type="text"
          name="full_name"
          placeholder="Your full name"
          value={form.full_name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Phone / WhatsApp
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+1 234 567 8900"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Selected Plan (read-only) */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Selected Plan</label>
        <input
          type="text"
          name="plan"
          value={form.plan}
          readOnly
          style={{ ...inputStyle, opacity: 0.6, cursor: "default" }}
        />
      </div>

      {/* Device Type */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Device Type</label>
        <select
          name="device_type"
          value={form.device_type}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">Select your device</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Message / Notes
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
        </label>
        <textarea
          name="message"
          placeholder="Any questions or special requests..."
          value={form.message}
          onChange={handleChange}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400 text-center">
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60 mt-1"
        style={{ background: "#fd0322" }}
      >
        {status === "loading" ? "Sending…" : "Order Now →"}
      </button>

      <p className="text-center text-gray-600 text-xs">
        Secure · We&apos;ll activate your subscription within 15 minutes
      </p>
    </form>
  );
}
