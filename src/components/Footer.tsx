import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="py-16 px-4 border-t"
      style={{ background: "#050508", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
              Canada&apos;s #1 IPTV subscription service. 25,000+ live channels, 120,000+ movies &amp;
              series in 4K. Serving all of Canada.
            </p>
            <a
              href="mailto:help@maplestreamtv.ca"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              help@maplestreamtv.ca
            </a>
            <div className="mt-3 text-gray-500 text-sm leading-relaxed">
              <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Address</p>
              <p>9361 Rue Lajeunesse</p>
              <p>Montréal, QC H2M 1S5</p>
              <p>Canada</p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link>
              <Link href="/channels-list" className="text-gray-400 hover:text-white text-sm transition-colors">Channels</Link>
              <Link href="/free-trial" className="text-gray-400 hover:text-white text-sm transition-colors">Free Trial</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link>
              <Link href="/reseller" className="text-gray-400 hover:text-white text-sm transition-colors">Reseller</Link>
              <Link href="/referral" className="text-gray-400 hover:text-white text-sm transition-colors">Referral</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
              <Link href="/dmca" className="text-gray-400 hover:text-white text-sm transition-colors">DMCA</Link>
            </div>
          </div>

          {/* By Device */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By Device</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-firestick-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Firestick</Link>
              <Link href="/iptv-android-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Android TV</Link>
              <Link href="/iptv-smart-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Smart TV</Link>
              <Link href="/iptv-apple-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Apple TV</Link>
              <Link href="/iptv-mag-box-canada" className="text-gray-400 hover:text-white text-sm transition-colors">MAG Box</Link>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 mt-6">By City</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-toronto" className="text-gray-400 hover:text-white text-sm transition-colors">Toronto</Link>
              <Link href="/iptv-vancouver" className="text-gray-400 hover:text-white text-sm transition-colors">Vancouver</Link>
              <Link href="/iptv-montreal" className="text-gray-400 hover:text-white text-sm transition-colors">Montreal</Link>
              <Link href="/iptv-calgary" className="text-gray-400 hover:text-white text-sm transition-colors">Calgary</Link>
              <Link href="/iptv-ottawa" className="text-gray-400 hover:text-white text-sm transition-colors">Ottawa</Link>
              <Link href="/iptv-edmonton" className="text-gray-400 hover:text-white text-sm transition-colors">Edmonton</Link>
            </div>
          </div>

          {/* Legal + Disclaimer */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Legal</p>
            <div className="flex flex-col gap-2.5 mb-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Disclaimer</p>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              MapleStreamTV does not host or stream any copyrighted content. All content is provided by
              third-party providers. Users are responsible for ensuring they have the rights to view
              content in their jurisdiction.
            </p>
            <Link href="/disclaimer" className="text-xs text-red-500 hover:text-red-400 transition-colors">
              Read Disclaimer →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-gray-600 text-xs">© 2026 MapleStreamTV. All rights reserved.</p>
          <p className="text-gray-700 text-xs">help@maplestreamtv.ca</p>
        </div>
      </div>
    </footer>
  );
}
