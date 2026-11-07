"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { celebrate } from "../../../components/Celebrate";

const WORKER_URL = "https://iptv-trial-maplestreamtv.medmaar.workers.dev";

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
    setStatus("loading");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.full_name,
          email:    form.email,
          device:   form.device || "Not specified",
          whatsapp: phone || "",
          notes:    form.message || "",
          country:  "Canada",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Worker error");

      setStatus("success");
      celebrate("trial", form.email);
      setForm({ full_name: "", email: "", device: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error("Trial error:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Success: the full-screen celebration (components/Celebrate) replaces the old inline message. */}

      {/* Error */}
      {status === "error" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(253,3,34,0.1)", border: "1px solid rgba(253,3,34,0.3)", color: "#ff6b6b" }}
        >
          Something went wrong. Please try again or{" "}
          <a href="/chat/wa" target="_blank" rel="noopener noreferrer" className="underline">
            contact us on WhatsApp
          </a>.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Full Name
        </label>
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
        <label className="block text-sm text-gray-400 mb-1.5">
          Email Address
        </label>
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
          Phone / WhatsApp{" "}
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
          Device Type
        </label>
        <select
          name="device"
          value={form.device}
          onChange={handleChange}
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
        disabled={status === "loading" || status === "success"}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#fd0322" }}
      >
        {status === "loading" ? "Activating trial…" : status === "success" ? "✅ Trial Sent!" : "Get My Free Trial →"}
      </button>

      <p className="text-center text-gray-600 text-xs">
        Secure · Login credentials sent to your email automatically
      </p>
    </form>
  );
}
