import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maplestreamtv.ca"),
    title: "Best IPTV Canada 2026 | #1 IPTV Subscription in Canada | MapleStreamTV",
    description: "Best IPTV service in Canada for 2026. Get 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet included. Try free for 24 hours at maplestreamtv.ca!",
    keywords: "IPTV Canada 2026, best IPTV Canada, IPTV subscription Canada, IPTV service Canada, Canadian IPTV",
    verification: { google: "NPe9mnD6fyjcZMDzlkDeeJ9xsSMileOAckN4P0zXxVw" },
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
