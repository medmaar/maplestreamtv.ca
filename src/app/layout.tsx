import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Best IPTV Canada 2026 | #1 IPTV Subscription in Canada",
  description:
    "Best IPTV service in Canada for 2026. Get 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet included. Try free for 24 hours!",
  keywords:
    "IPTV Canada 2026, best IPTV Canada, IPTV subscription Canada, IPTV service Canada, Canadian IPTV",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
