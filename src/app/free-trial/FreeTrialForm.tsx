"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
      setForm({ full_name: "", email: "", device: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error("Trial error:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Success */}
      {status === "success" && (
        <>
          <style>{`
            @keyframes popIn{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}
            @keyframes drawCheck{to{stroke-dashoffset:0}}
          `}</style>
          <div style={{
            textAlign:"center", padding:"2.5rem 1.5rem",
            background:"rgba(46,204,113,0.08)",
            border:"1px solid rgba(46,204,113,0.35)",
            borderRadius:20,
            boxShadow:"0 0 40px rgba(46,204,113,0.12)"
          }}>
            <div style={{marginBottom:"1.5rem"}}>
              <div style={{
                width:90, height:90, borderRadius:"50%",
                background:"rgba(46,204,113,0.15)",
                border:"3px solid #2ecc71",
                display:"flex", alignItems:"center", justifyContent:"center",
                margin:"0 auto",
                animation:"popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both"
              }}>
                <svg viewBox="0 0 52 52" style={{
                  width:44, height:44, stroke:"#2ecc71", strokeWidth:3, fill:"none",
                  strokeDasharray:60, strokeDashoffset:60,
                  animation:"drawCheck 0.5s 0.35s ease forwards"
                } as React.CSSProperties}>
                  <polyline points="14,27 22,36 38,17"/>
                </svg>
              </div>
            </div>
            <div style={{color:"#2ecc71", fontSize:"1.8rem", fontWeight:900, marginBottom:"0.5rem"}}>
              Your Trial is Active!
            </div>
            <p style={{color:"rgba(255,255,255,0.85)", fontSize:"1rem", lineHeight:1.7, margin:0}}>
              Your login credentials have been sent to your email.<br/>
              Check your inbox — your 24H access starts now.
            </p>
          </div>
        </>
      )}

      {/* Error */}
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
