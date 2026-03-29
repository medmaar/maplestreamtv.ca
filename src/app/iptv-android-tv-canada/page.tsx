import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Android TV Canada 2026 | Best IPTV for Android Box & Google TV",
  description:
    "Stream IPTV on Android TV, Android Box, or Google TV in Canada. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. Easy APK install. Try free today.",
  keywords:
    "IPTV Android TV Canada, IPTV Android box Canada, Google TV IPTV Canada, IPTV Nvidia Shield Canada, best IPTV Android Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/iptv-android-tv-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and reach us via WhatsApp, Telegram, or email. Your login credentials arrive within minutes." },
  { step: "2", title: "Enable Unknown Sources", desc: "Go to Settings > Security on your Android TV or box and enable 'Unknown Sources' to allow APK installs." },
  { step: "3", title: "Install the IPTV App", desc: "Open a browser or file manager and download the APK we send you, or install via the Play Store if available." },
  { step: "4", title: "Enter Your Credentials", desc: "Launch the app, enter the server URL, username, and password we provided, and tap Connect." },
  { step: "5", title: "Start Streaming in 4K", desc: "Your channels and VOD library load instantly. Android TV handles 4K HDR streams flawlessly." },
];

export default function IPTVAndroidTVPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Android TV · Google TV · Android Box
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">Android TV Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The most flexible IPTV setup in Canada. Works on any Android TV, Google TV,
            Android box, or Nvidia Shield. Full 4K HDR. Instant APK install.
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
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible Android Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Nvidia Shield TV", "Chromecast with Google TV", "Xiaomi Mi Box", "MECOOL Android Box", "Sony Android TV", "TCL Google TV", "Hisense Android TV", "Any Android Box"].map((d) => (
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
            How to Set Up IPTV on <span className="text-red-500">Android TV</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">5 simple steps — takes about 5 minutes.</p>
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
            Why Android TV is <span className="text-red-500">Ideal for IPTV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Maximum Compatibility", desc: "Android TV supports more IPTV apps than any other platform. Install any player — IPTV Smarters, TiviMate, GSE, or our dedicated app." },
              { title: "True 4K HDR", desc: "Android boxes like Nvidia Shield support 4K HDR10, Dolby Vision, and Dolby Atmos for a true cinema experience." },
              { title: "External Storage", desc: "Download and cache VOD content locally using USB storage on most Android boxes for offline viewing." },
              { title: "Google Assistant", desc: "Voice search for channels, shows, and movies using Google Assistant on Google TV and newer Android TV devices." },
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
            Android TV IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Which Android box is best for IPTV in Canada?", a: "The Nvidia Shield TV Pro is the top pick for power users. For budget options, the Xiaomi Mi Box S and MECOOL KM7 deliver excellent IPTV performance." },
              { q: "Can I use any IPTV app on Android TV?", a: "Yes. Android TV supports virtually all IPTV players. We recommend TiviMate for the best EPG experience, but any Xtream Codes compatible app will work." },
              { q: "Do I need to root my Android box?", a: "No rooting required. Standard APK sideloading is all you need, which is built into Android TV by design." },
              { q: "Will buffering be an issue on Android boxes?", a: "Not with our anti-freeze servers. We recommend a minimum 25 Mbps connection for 4K. Most Android boxes also support wired Ethernet for rock-solid streaming." },
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
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your Android TV?</h2>
          <p className="text-gray-300 mb-8">Try it free for 24 hours — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
