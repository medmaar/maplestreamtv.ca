import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t" style={{ background: "#050508", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-12 mb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Canada&apos;s best family IPTV service. 25,000+ live channels,
              kids channels, all Canadian locals. Cut cable, save $900/year.
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <a href="mailto:help@maplestreamtv.ca" className="text-sm text-gray-400 hover:text-white transition-colors">help@maplestreamtv.ca</a>
            <div className="mt-3 text-gray-500 text-sm leading-relaxed">
              <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Address</p>
              <p>1599 Blvd. Saint-Martin O</p>
              <p>Laval, QC H7S 1N1</p>
              <p>Canada</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/ca" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/ca/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link>
              <Link href="/ca/channels-list" className="text-gray-400 hover:text-white text-sm transition-colors">Channels</Link>
              <Link href="/ca/free-trial" className="text-gray-400 hover:text-white text-sm transition-colors">Free Trial</Link>
              <Link href="/ca/how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How It Works</Link>
              <Link href="/ca/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link>
              <Link href="/ca/reseller" className="text-gray-400 hover:text-white text-sm transition-colors">Reseller</Link>
              <Link href="/ca/referral" className="text-gray-400 hover:text-white text-sm transition-colors">Referral Program</Link>
              <Link href="/ca/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
              <Link href="/ca/fr" hrefLang="fr-CA" lang="fr" className="text-gray-400 hover:text-white text-sm transition-colors">Français</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">IPTV Services</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/ca/iptv-box" className="text-gray-400 hover:text-white text-sm transition-colors">IPTV Box Canada</Link>
              <Link href="/ca/iptv-near-me" className="text-gray-400 hover:text-white text-sm transition-colors">IPTV Near Me</Link>
              <Link href="/ca/iptv-providers-canada" className="text-gray-400 hover:text-white text-sm transition-colors">IPTV Providers</Link>
              <Link href="/ca/iptv-for-beginners" className="text-gray-400 hover:text-white text-sm transition-colors">IPTV for Beginners</Link>
              <Link href="/ca/best-iptv-apps" className="text-gray-400 hover:text-white text-sm transition-colors">Best IPTV Apps</Link>
              <Link href="/ca/iptv-server" className="text-gray-400 hover:text-white text-sm transition-colors">IPTV Server</Link>
              <Link href="/ca/iptv-supplier" className="text-gray-400 hover:text-white text-sm transition-colors">IPTV Supplier</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By Device</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/ca/iptv-firestick-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Firestick</Link>
              <Link href="/ca/iptv-android-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Android TV</Link>
              <Link href="/ca/iptv-smart-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Smart TV</Link>
              <Link href="/ca/iptv-apple-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Apple TV</Link>
              <Link href="/ca/iptv-mag-box-canada" className="text-gray-400 hover:text-white text-sm transition-colors">MAG Box</Link>
              <Link href="/ca/iptv-samsung-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Samsung TV</Link>
              <Link href="/ca/iptv-lg-tv-canada" className="text-gray-400 hover:text-white text-sm transition-colors">LG TV</Link>
              <Link href="/ca/iptv-roku-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Roku</Link>
              <Link href="/ca/iptv-android-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Android</Link>
              <Link href="/ca/iptv-ios-canada" className="text-gray-400 hover:text-white text-sm transition-colors">iPhone / iPad</Link>
              <Link href="/ca/iptv-windows-canada" className="text-gray-400 hover:text-white text-sm transition-colors">Windows PC</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By City</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/ca/iptv-toronto" className="text-gray-400 hover:text-white text-sm transition-colors">Toronto</Link>
              <Link href="/ca/iptv-vancouver" className="text-gray-400 hover:text-white text-sm transition-colors">Vancouver</Link>
              <Link href="/ca/iptv-montreal" className="text-gray-400 hover:text-white text-sm transition-colors">Montreal</Link>
              <Link href="/ca/iptv-calgary" className="text-gray-400 hover:text-white text-sm transition-colors">Calgary</Link>
              <Link href="/ca/iptv-ottawa" className="text-gray-400 hover:text-white text-sm transition-colors">Ottawa</Link>
              <Link href="/ca/iptv-edmonton" className="text-gray-400 hover:text-white text-sm transition-colors">Edmonton</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Legal</p>
            <div className="flex flex-col gap-2.5 mb-4">
              <Link href="/ca/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/ca/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/ca/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</Link>
              <Link href="/ca/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
              <Link href="/ca/dmca" className="text-gray-400 hover:text-white text-sm transition-colors">DMCA Policy</Link>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">MapleStreamTV does not host or stream any copyrighted content.</p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© 2026 MapleStreamTV. All rights reserved.</p>
          <p className="text-gray-700 text-xs">help@maplestreamtv.ca</p>
        </div>
      </div>
    </footer>
  );
}
