import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Firestick Canada 2026 | Best IPTV for Amazon Fire Stick",
  description:
    "The best IPTV service for Amazon Fire Stick in Canada. Easy setup, 25,000+ channels in 4K, NHL, TSN, and more. Get started today.",
  keywords:
    "IPTV Firestick Canada, IPTV Fire Stick Canada, best IPTV for Firestick Canada, Amazon Fire Stick IPTV Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/iptv-firestick-canada" },
};

const steps = [
  { step: "1", title: "Subscribe to a Plan", desc: "Choose a plan on our pricing page and contact us via WhatsApp, Telegram, or email to get your login credentials." },
  { step: "2", title: "Enable Unknown Sources", desc: "On your Fire Stick go to Settings > My Fire TV > Developer Options and enable 'Apps from Unknown Sources'." },
  { step: "3", title: "Install Downloader App", desc: "Search for 'Downloader' in the Fire Stick app store and install it. This lets you sideload apps." },
  { step: "4", title: "Download Your IPTV App", desc: "Open Downloader and enter the URL we send you. This installs your IPTV player with your credentials pre-configured." },
  { step: "5", title: "Start Watching", desc: "Launch the app, browse the channel list, and start streaming. Your full guide (EPG) loads automatically." },
];

export default function IPTVFirestickPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Fire Stick Compatible
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">Firestick Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Canada&apos;s best IPTV service, fully compatible with Amazon Fire Stick, Fire Stick 4K,
            Fire Stick Lite, and all Fire TV devices. Setup takes under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Get Free Trial
            </a>
            <a href="/pricing" className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible Fire TV Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Fire Stick (all generations)", "Fire Stick 4K", "Fire Stick 4K Max", "Fire Stick Lite", "Fire TV Cube", "Fire TV Smart TV"].map((d) => (
              <span key={d} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How to Set Up IPTV on <span className="text-red-500">Firestick in Canada</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            5 simple steps — takes about 5 minutes total.
          </p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-extrabold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog/iptv-firestick-canada" className="text-red-400 hover:underline text-sm">
              Read our detailed Firestick setup guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Our IPTV is <span className="text-red-500">Best for Firestick</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Optimized for Fire Stick", desc: "Our app is built to run smoothly on Fire Stick hardware with minimal buffering and fast channel switching." },
              { title: "4K on Fire Stick 4K", desc: "Full 4K Ultra HD support on Fire Stick 4K and 4K Max. Automatic quality adjustment for older devices." },
              { title: "Simple Remote Navigation", desc: "Designed for TV remotes. Navigate channels, search VOD, and manage recordings with just arrow keys." },
              { title: "Auto-Updates", desc: "Your app stays up to date automatically. No manual reinstalls needed when we add new channels or features." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-950 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Watch on Your Fire Stick?</h2>
          <p className="text-gray-300 mb-8">Start with a free 24-hour trial — no credit card needed.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
