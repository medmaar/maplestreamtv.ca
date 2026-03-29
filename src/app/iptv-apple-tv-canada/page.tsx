import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Apple TV Canada 2026 | Best IPTV for Apple TV 4K",
  description:
    "Stream IPTV on Apple TV in Canada. 25,000+ channels, 4K Dolby Vision quality, NHL, TSN, CTV and more. Easy App Store setup. Try free today.",
  keywords:
    "IPTV Apple TV Canada, IPTV Apple TV 4K Canada, Apple TV IPTV Canada, best IPTV for Apple TV Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/iptv-apple-tv-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. We send your login credentials within minutes." },
  { step: "2", title: "Open the App Store", desc: "On your Apple TV, go to the App Store and search for our recommended IPTV player." },
  { step: "3", title: "Install the IPTV App", desc: "Download and install the player. It's available directly from Apple's App Store — no sideloading needed." },
  { step: "4", title: "Enter Your Credentials", desc: "Open the app, enter the server URL, username, and password we provided, and connect." },
  { step: "5", title: "Stream in Dolby Vision 4K", desc: "Your full channel list loads automatically. Apple TV 4K delivers stunning Dolby Vision and HDR10 quality." },
];

export default function IPTVAppleTVPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            tvOS Compatible · App Store Install
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">Apple TV Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The premium IPTV experience on Apple&apos;s most powerful streaming device.
            Dolby Vision 4K, Dolby Atmos audio, and a dead-simple App Store install.
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

      {/* Compatible models */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible Apple TV Models</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Apple TV 4K (3rd gen)", "Apple TV 4K (2nd gen)", "Apple TV 4K (1st gen)", "Apple TV HD (4th gen)"].map((m) => (
              <span key={m} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How to Set Up IPTV on <span className="text-red-500">Apple TV</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">No sideloading, no jailbreak — just the App Store.</p>
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
            Why Apple TV is <span className="text-red-500">Great for IPTV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Dolby Vision & HDR10", desc: "Apple TV 4K supports Dolby Vision, HDR10, and HLG — the best picture quality available for IPTV streaming." },
              { title: "Dolby Atmos Audio", desc: "Immersive Dolby Atmos surround sound on supported content and channels. Compatible with all major soundbar brands." },
              { title: "Siri Voice Control", desc: "Use Siri to search for channels, ask 'what's on TSN right now', or switch between apps hands-free." },
              { title: "App Store Only", desc: "Everything installs cleanly from Apple's App Store. No sideloading, no developer certificates, no jailbreak." },
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
            Apple TV IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Do I need to jailbreak my Apple TV for IPTV?", a: "No. All required apps are available on the App Store. No jailbreak or modification of any kind is needed." },
              { q: "Which Apple TV model should I buy for IPTV?", a: "The Apple TV 4K (3rd generation) is the best choice — it supports Dolby Vision, Dolby Atmos, Wi-Fi 6, and runs the latest tvOS." },
              { q: "Can I use the same IPTV subscription on my iPhone and Apple TV?", a: "Yes — with a 2-device or higher plan you can stream on your Apple TV and iPhone (or any other device) simultaneously." },
              { q: "Is the IPTV app available in the Canadian App Store?", a: "Yes. We recommend apps that are available in the Canadian App Store. We'll guide you to the correct app after subscribing." },
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
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your Apple TV?</h2>
          <p className="text-gray-300 mb-8">Try it free for 24 hours — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
