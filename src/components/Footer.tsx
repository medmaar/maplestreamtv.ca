import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 border-t"
      style={{ background: "#0c0f1a", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-xl font-extrabold" style={{ color: "#fd0322" }}>IPTV</span>
              <span className="text-xl font-extrabold text-white">Canada 2026</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Canada&apos;s #1 IPTV subscription service. Serving Toronto, Montreal, Vancouver,
              Calgary, Ottawa, Edmonton and all of Canada.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Service</p>
              <div className="flex flex-col gap-2">
                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link>
                <Link href="/channels-list" className="text-gray-400 hover:text-white text-sm transition-colors">Channels</Link>
                <Link href="/free-trial" className="text-gray-400 hover:text-white text-sm transition-colors">Free Trial</Link>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How It Works</Link>
                <Link href="/referral" className="text-gray-400 hover:text-white text-sm transition-colors">Referral Program</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Legal</p>
              <div className="flex flex-col gap-2">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
                <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</Link>
                <Link href="/dmca" className="text-gray-400 hover:text-white text-sm transition-colors">DMCA</Link>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Contact</p>
              <div className="flex flex-col gap-2">
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link>
                <a
                  href="https://wa.me/17828026280?text=Hi%20MapleStreamTV%2C%20I%27m%20interested%20in%20your%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  WhatsApp
                </a>
                <a href="mailto:help@maplestreamtv.ca" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Email Support
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-xs">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Disclaimer</p>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">
              MapleStreamTV does not host or stream any copyrighted content. All content is provided by
              third-party providers. Users are responsible for ensuring they have the rights to view
              content in their jurisdiction.
            </p>
            <Link href="/disclaimer" className="text-xs text-red-500 hover:text-red-400 transition-colors">
              Read Disclaimer →
            </Link>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-gray-600 text-xs">
            © 2026 MapleStreamTV. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">maplestreamtv.ca</p>
        </div>
      </div>
    </footer>
  );
}
