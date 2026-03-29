import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV MAG Box Canada 2026 | Best IPTV for MAG & Formuler Boxes",
  description:
    "Stream IPTV on MAG box or Formuler Z8 in Canada. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. Portal URL setup. Try free today.",
  keywords:
    "IPTV MAG box Canada, IPTV Formuler Canada, MAG 254 IPTV Canada, MAG 322 IPTV Canada, best IPTV MAG Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/iptv-mag-box-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Register Your MAC Address", desc: "Choose a plan and send us your MAG box or Formuler MAC address. You can find it in Settings > System Information > Network." },
  { step: "2", title: "Receive Your Portal URL", desc: "We activate your MAC address on our servers and send you the portal URL within minutes." },
  { step: "3", title: "Open Portal Settings", desc: "On your MAG box go to Settings > System Settings > Servers > Portals. Enter the portal URL we provided." },
  { step: "4", title: "Reboot the Box", desc: "Save your settings and reboot the MAG box. It will connect to our portal on startup." },
  { step: "5", title: "Watch Live TV", desc: "Your full channel list and EPG guide load automatically. Use your remote to browse and watch." },
];

export default function IPTVMAGBoxPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            MAG Box · Formuler · Infomir
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">MAG Box Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The preferred IPTV setup for dedicated set-top boxes. Works with all MAG,
            Formuler, and Infomir devices. Portal activation in minutes.
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
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible MAG & Formuler Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["MAG 254 / 256", "MAG 322 / 324", "MAG 351 / 352", "MAG 410 / 420", "Formuler Z8", "Formuler Z10 Pro", "Formuler GTV", "Any Infomir Device"].map((d) => (
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
            How to Set Up IPTV on <span className="text-red-500">MAG Box</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">MAC address portal activation — the cleanest IPTV setup method.</p>
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
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why MAG Boxes are <span className="text-red-500">Built for IPTV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Dedicated IPTV Hardware", desc: "MAG boxes are purpose-built for IPTV with dedicated processors that handle streams more efficiently than general-purpose devices." },
              { title: "Portal-Based Activation", desc: "Easier than entering a username and password — just one portal URL and your MAC address. No app installation needed." },
              { title: "Wired Ethernet Port", desc: "All MAG boxes have a built-in Ethernet port for a wired connection. No Wi-Fi interference, no buffering." },
              { title: "Full EPG & Catch-Up", desc: "MAG's native UI displays a full 7-day electronic program guide and catch-up TV without any extra configuration." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-950 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            MAG Box IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "What information do I need to give you for MAG setup?", a: "Just your MAG box MAC address. You can find it on the sticker on the bottom of the box, or in Settings > System Information > Network." },
              { q: "Which MAG box model should I buy in Canada?", a: "The MAG 351 or Formuler Z8 are great current-generation options. For 4K, the MAG 520 and Formuler Z10 Pro both support 4K Ultra HD." },
              { q: "Can I use a MAG box and a phone on the same subscription?", a: "MAG portal activation is tied to one device. For multi-device use, you can add an Xtream Codes connection for additional devices on a multi-device plan." },
              { q: "What internet speed do I need for MAG box IPTV?", a: "We recommend at least 10 Mbps for HD and 25 Mbps for 4K. A wired Ethernet connection is strongly preferred for the most stable MAG experience." },
            ].map((item) => (
              <div key={item.q} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Activate IPTV on Your MAG Box Today</h2>
          <p className="text-gray-300 mb-8">Try it free for 24 hours — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
