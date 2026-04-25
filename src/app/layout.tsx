import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maplestreamtv.ca"),
    title: "IPTV Box Canada — Best IPTV Providers Near Me | MapleStreamTV",
    description: "Best IPTV box and provider in Canada. IPTV near me — free trial, no credit card. Top rated IPTV service Canada: 25,000+ channels, 4K, no contracts from $9/month.",
    keywords: "iptv box, iptv near me, iptv free trial, iptv providers canada, iptv server, iptv supplier, best iptv for canada, iptv provider canada, cord cutting Canada, cancel cable Canada, cheap TV Canada, family IPTV Canada, MapleStreamTV",
    verification: { google: "NPe9mnD6fyjcZMDzlkDeeJ9xsSMileOAckN4P0zXxVw" },
    openGraph: {
        images: [{ url: "/og-image.webp", width: 1403, height: 761, alt: "MapleStreamTV — Best IPTV Canada 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og-image.webp"],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full">
            <head>
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
