import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "https://maplestreamtv.ca/ca/order" },
  robots: { index: false, follow: true },
};

export default function OrderLayout({ children }: { children: ReactNode }) {
  return children;
}
