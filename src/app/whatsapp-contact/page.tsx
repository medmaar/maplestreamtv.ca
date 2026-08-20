import type { Metadata } from "next";
import WhatsAppContactForm from "./WhatsAppContactForm";

export const metadata: Metadata = {
  title: "Contact Us on WhatsApp",
  description: "Get in touch with us on WhatsApp for fast IPTV support, trial requests, and subscription help. We respond in minutes.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://maplestreamtv.ca/whatsapp-contact" },
};

export default function WhatsAppContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "MapleStreamTV", "item": "https://maplestreamtv.ca"}, {"@type": "ListItem", "position": 2, "name": "Contact Us on WhatsApp", "item": "https://maplestreamtv.ca/whatsapp-contact"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Contact Us on WhatsApp", "url": "https://maplestreamtv.ca/whatsapp-contact", "inLanguage": "en-CA", "dateModified": "2026-07-19", "isPartOf": {"@type": "WebSite", "name": "MapleStreamTV", "url": "https://maplestreamtv.ca"}}) }} />
      <main className="bg-gray-950 text-white min-h-screen py-20 px-4">
        <WhatsAppContactForm />
      </main>
    </>
  );
}
