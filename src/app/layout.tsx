import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
