import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maplestreamtv.ca"),
    title: "Cancel Cable & Save $900/Year — Family IPTV Canada | MapleStreamTV",
    description: "Canada's cord-cutting alternative to Bell and Rogers. 25,000+ channels, kids channels, all Canadian locals. Easy setup, no contracts. Free 24h trial.",
    keywords: "cord cutting Canada, cancel cable Canada, cheap TV Canada, family IPTV Canada, MapleStreamTV, save on TV Canada",
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
