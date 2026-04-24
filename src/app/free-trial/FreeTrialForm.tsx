"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SERVICE_ID  = "service_2jcensj";
const TEMPLATE_ID = "template_s8c799i";
const PUBLIC_KEY  = "hbzN9XtS5uTJfVZT7";

const deviceTypes = [
  "Firestick",
  "Android TV Box",
  "Smart TV (Samsung/LG)",
  "Apple TV",
  "iPhone/iPad",
  "Android Phone",
  "MAG Box",
  "Windows PC",
  "Mac",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 16px",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
};

export default function FreeTrialForm() {
  const [form, setForm] = useState({ full_name: "", email: "", device: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone) return;
    setStatus("loading");
    console.log('EmailJS config:', { serviceId: SERVICE_ID, templateId: TEMPLATE_ID, publicKey: PUBLIC_KEY });
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.full_name || "Not provided",
          from_email: form.email || "Not provided",
          phone: phone,
          device: form.device || "Not specified",
          plan: "Free Trial (24h)",
          message: form.message || "—",
          site_name: "MapleStreamTV.ca",
        },
        PUBLIC_KEY
      );
      console.log("EmailJS success:", result);
      setStatus("success");
      setForm({ full_name: "", email: "", device: "", message: "" });
      setPhone("");
    } catch (error) {
      console.error("EmailJS error:", JSON.stringify(error));
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80" }}
        >
          ✅ Your free trial request has been sent! Check your email in 5 minutes.
        </div>
      )}
      {status === "error" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(253,3,34,0.1)", border: "1px solid rgba(253,3,34,0.3)", color: "#ff6b6b" }}
        >
          Something went wrong. Please try again or{" "}
          <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="underline">
            contact us on WhatsApp
          </a>.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Full Name <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input
          type="text"
          name="full_name"
          required
          placeholder="Your full name"
          value={form.full_name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Email Address <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Phone — react-phone-number-input with dark theme */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Phone / WhatsApp <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <div className="phone-input-wrapper">
          <PhoneInput
            defaultCountry="CA"
            value={phone}
            onChange={setPhone}
            international
            countryCallingCodeEditable={false}
            placeholder="Enter phone number"
          />
        </div>
      </div>

      {/* Device */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Device Type <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <select
          name="device"
          value={form.device}
          onChange={handleChange}
          required
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#111827" }}
        >
          <option value="" style={{ backgroundColor: "#111827", color: "#fff" }}>Select your device</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d} style={{ backgroundColor: "#111827", color: "#fff" }}>{d}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Notes / Message{" "}
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
        </label>
        <textarea
          name="message"
          placeholder="Any special requests or questions?"
          value={form.message}
          onChange={handleChange}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !phone}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#fd0322" }}
      >
        {status === "loading" ? "Sending…" : "Get My Free Trial →"}
      </button>

      <p className="text-center text-gray-600 text-xs">
        Your trial credentials will be sent to your email within 5 minutes
      </p>
    </form>
  );
}
