import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'], display: 'swap', variable: '--font-jakarta' });
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maplestreamtv.ca"),
    title: {
        template: "%s | MapleStreamTV",
        default: "Best IPTV Canada 2026 — 25,000+ Channels, Free Trial | MapleStreamTV",
    },
    description: "Canada's best IPTV service. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet & more. Free 24h trial, no credit card. From $9/month.",
    keywords: "iptv canada, best iptv canada, iptv service canada, iptv subscription canada, iptv box, iptv near me, iptv free trial, iptv providers canada, iptv server, iptv supplier, best iptv for canada, iptv provider canada, best iptv app, best iptv apps, fire stick iptv, iptv for beginners, best canadian iptv provider, cord cutting Canada, cancel cable Canada, MapleStreamTV",
    verification: { google: "NPe9mnD6fyjcZMDzlkDeeJ9xsSMileOAckN4P0zXxVw" },
    openGraph: {
        siteName: "MapleStreamTV",
        locale: "en_CA",
        type: "website",
        images: [{ url: "/og-image.webp", width: 1403, height: 761, alt: "MapleStreamTV — Best IPTV Canada 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og-image.webp"],
    },
};



const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MapleStreamTV",
  "url": "https://maplestreamtv.ca"
};


const sitelinksSearchSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MapleStreamTV",
  "url": "https://maplestreamtv.ca",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://maplestreamtv.ca/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full">
            <head>
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZMRVJYWQR3" />
                <script dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-ZMRVJYWQR3');
                `}} />
            </head>
            <body className="min-h-full flex flex-col" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
                <FloatingContact />
            </body>
        </html>
    );
}
