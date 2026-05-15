import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleur IPTV Canada 2026 — Service #1 au Québec | MapleStreamTV",
  description:
    "MapleStreamTV est le meilleur service IPTV au Canada et au Québec en 2026. 25 000+ chaînes en 4K, RDS, TVA Sports, Noovo, Radio-Canada et plus. Essai gratuit 24h sans carte de crédit.",
  keywords:
    "meilleur IPTV Canada, IPTV Québec, IPTV francophone, IPTV Canada français, service IPTV Québec, IPTV RDS TVA Sports, abonnement IPTV Canada, MapleStreamTV",
  alternates: {
    canonical: "https://maplestreamtv.ca/fr",
    languages: {
      "fr-CA": "https://maplestreamtv.ca/fr",
      "en-CA": "https://maplestreamtv.ca",
    },
  },
  openGraph: {
    title: "Meilleur IPTV Canada 2026 — Service #1 au Québec | MapleStreamTV",
    description:
      "Économisez 900 $/an comparé à Vidéotron ou Bell. 25 000+ chaînes, RDS, TVA Sports, Radio-Canada — essai gratuit 24h.",
    url: "https://maplestreamtv.ca/fr",
    type: "website",
    siteName: "MapleStreamTV",
    images: [{ url: "/og-image.webp", width: 1403, height: 761, alt: "MapleStreamTV — Meilleur IPTV Canada 2026" }],
    locale: "fr_CA",
  },
  twitter: { card: "summary_large_image", images: ["/og-image.webp"] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien puis-je économiser en remplaçant Vidéotron ou Bell par MapleStreamTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le câble typique au Québec coûte entre 80 $ et 150 $/mois avec Vidéotron, Bell ou Cogeco. MapleStreamTV commence à 9 $/mois — la plupart des familles économisent plus de 900 $ par année. Un abonnement de 12 mois coûte seulement 49 $ en tout.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que les chaînes françaises comme TVA, Noovo et Radio-Canada sont incluses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Chaque abonnement MapleStreamTV inclut TVA, Noovo, Radio-Canada, RDS, TVA Sports, LCN, Canal D, Canal Vie, Historia, Séries+ et toutes les chaînes locales québécoises et canadiennes-françaises.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que MapleStreamTV fonctionne sur mon téléviseur Samsung ou LG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. MapleStreamTV fonctionne sur les téléviseurs intelligents Samsung et LG, Amazon Fire Stick, Android TV, iPhone, iPad, téléphones Android, PC et Mac. Toute appareil avec une application IPTV est compatible.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un essai gratuit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui — essai gratuit de 24 heures, sans carte de crédit. Contactez-nous par WhatsApp ou courriel pour l'activer immédiatement.",
      },
    },
    {
      "@type": "Question",
      name: "L'IPTV est-il légal au Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La technologie IPTV est tout à fait légale au Canada — c'est la même méthode de diffusion utilisée par Bell Fibe, Rogers Ignite et Telus Optik. MapleStreamTV fonctionne dans le respect des normes canadiennes de radiodiffusion.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MapleStreamTV",
  url: "https://maplestreamtv.ca/fr",
  email: "help@maplestreamtv.ca",
  description:
    "Le meilleur service IPTV au Canada et au Québec. Économisez 900 $/an vs le câble. 25 000+ chaînes, RDS, TVA Sports, Radio-Canada à partir de 9 $/mois.",
  address: { "@type": "PostalAddress", addressCountry: "CA" },
  areaServed: "CA",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "289",
    bestRating: "5",
    worstRating: "1",
  },
};

const frChannels = [
  "TVA", "Noovo", "Radio-Canada", "RDS", "TVA Sports", "LCN",
  "Canal D", "Canal Vie", "Historia", "Séries+", "TV5", "TFO",
  "Télé-Québec", "RDI", "RDS 2", "TVA Sports 2",
];

const devices = [
  { name: "Amazon Fire Stick", icon: "📡" },
  { name: "Samsung Smart TV", icon: "📺" },
  { name: "LG Smart TV", icon: "📺" },
  { name: "iPhone & iPad", icon: "📱" },
  { name: "Android", icon: "📱" },
  { name: "Apple TV", icon: "📺" },
  { name: "Android Box", icon: "📦" },
  { name: "PC & Mac", icon: "💻" },
];

const comparison = [
  { feature: "Coût mensuel", us: "9 $", cable: "80–150 $", other: "15–25 $" },
  { feature: "Économies annuelles", us: "900 $/an", cable: "—", other: "Quelques économies" },
  { feature: "Chaînes en direct", us: "25 000+", cable: "150–500", other: "5 000–15 000" },
  { feature: "Chaînes françaises", us: "100+ incluses", cable: "Frais supplémentaires", other: "Limitées" },
  { feature: "RDS & TVA Sports", us: "✓ Inclus", cable: "✓ Inclus (coût élevé)", other: "Rarement" },
  { feature: "Contrats", us: "Aucun — annulable en tout temps", cable: "1–2 ans", other: "Variable" },
  { feature: "Essai gratuit", us: "Essai 24h gratuit", cable: "×", other: "Rarement" },
  { feature: "Installation", us: "5 minutes", cable: "Technicien à domicile", other: "Variable" },
];

const faqs = [
  {
    q: "Combien puis-je économiser en remplaçant Vidéotron ou Bell?",
    a: "Le câble typique au Québec coûte entre 80 $ et 150 $/mois. MapleStreamTV commence à 9 $/mois — la plupart des familles économisent plus de 900 $ par année.",
  },
  {
    q: "Les chaînes françaises comme TVA, Noovo et Radio-Canada sont-elles incluses?",
    a: "Oui. Tous les abonnements incluent TVA, Noovo, Radio-Canada, RDS, TVA Sports, LCN, Canal D, Canal Vie, Historia, Séries+ et toutes les grandes chaînes canadiennes-françaises.",
  },
  {
    q: "MapleStreamTV fonctionne-t-il sur les téléviseurs Samsung et LG?",
    a: "Oui. MapleStreamTV fonctionne sur Samsung Smart TV, LG Smart TV, Amazon Fire Stick, Android TV, iPhone, iPad, Android, PC et Mac.",
  },
  {
    q: "Y a-t-il un essai gratuit?",
    a: "Oui — essai gratuit de 24 heures, sans carte de crédit. Contactez-nous par WhatsApp ou courriel pour l'activer immédiatement.",
  },
  {
    q: "L'IPTV est-il légal au Canada?",
    a: "La technologie IPTV est légale au Canada. MapleStreamTV fonctionne dans le respect des normes canadiennes de radiodiffusion.",
  },
];

export default function FrenchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Language switcher hint */}
      <div className="bg-green-900/20 border-b border-green-800/30 py-2 text-center text-sm text-green-400">
        <span>🇫🇷 Vous êtes sur la version française. </span>
        <Link href="/" className="underline hover:text-green-300">
          Switch to English →
        </Link>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-green-950/20 to-gray-950 py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-semibold">🍁 #1 IPTV Canada 2026 — Essai 24h gratuit</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Meilleur IPTV Canada —{" "}
            <span className="text-green-400">Québec, Ontario et partout au Canada</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            25 000+ chaînes en 4K, RDS, TVA Sports, Radio-Canada inclus. Économisez{" "}
            <strong className="text-white">900 $ par année</strong> comparé à Vidéotron ou Bell. Configuré en 5 minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href="/free-trial"
              className="bg-green-500 hover:bg-green-400 text-gray-950 font-black text-lg px-8 py-4 rounded-xl transition-all"
            >
              Essai gratuit 24h — Sans carte de crédit
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-700 hover:border-gray-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Voir les prix →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { n: "25 000+", l: "Chaînes en direct" },
              { n: "120 000+", l: "Films & Séries" },
              { n: "4K", l: "Ultra HD" },
              { n: "9 $/mois", l: "À partir de" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-green-400">{s.n}</div>
                <div className="text-gray-500 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* French channels */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-green-400 font-bold text-sm uppercase tracking-widest mb-3">
              Chaînes francophones incluses
            </p>
            <h2 className="text-3xl font-black text-white">
              Toutes vos chaînes québécoises et canadiennes-françaises
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              RDS, TVA Sports, Radio-Canada, Noovo et bien plus — inclus dans chaque abonnement, sans frais supplémentaires.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {frChannels.map((ch) => (
              <span
                key={ch}
                className="bg-gray-900 border border-gray-800 text-white font-semibold px-4 py-2 rounded-lg text-sm"
              >
                {ch}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            + CBC, CTV, Global, CP24, TSN, Sportsnet, CNN, Fox News et 25 000+ autres chaînes
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-green-400 font-bold text-sm uppercase tracking-widest mb-3">Comparaison</p>
            <h2 className="text-3xl font-black text-white">MapleStreamTV vs Câble vs Autres IPTV</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold">Fonctionnalité</th>
                  <th className="text-center px-5 py-4 text-green-400 font-bold">MapleStreamTV</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-semibold">Câble</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-semibold">Autre IPTV</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-gray-950" : "bg-gray-900/30"}>
                    <td className="px-5 py-3.5 text-gray-300 font-medium">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center text-green-400 font-bold">{row.us}</td>
                    <td className="px-5 py-3.5 text-center text-gray-500">{row.cable}</td>
                    <td className="px-5 py-3.5 text-center text-gray-500">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-green-400 font-bold text-sm uppercase tracking-widest mb-3">Compatibilité</p>
            <h2 className="text-3xl font-black text-white">Fonctionne sur tous vos appareils</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {devices.map((d) => (
              <div key={d.name} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">{d.icon}</div>
                <p className="text-white font-semibold text-sm">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-green-400 font-bold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-black text-white">Questions fréquentes</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                <h3 className="text-white font-bold text-base mb-2">{f.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-950/30 to-gray-950 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-4">
            Prêt à couper le câble?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Essai gratuit 24h · Sans carte de crédit · Activation en 5 minutes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/free-trial"
              className="bg-green-500 hover:bg-green-400 text-gray-950 font-black text-lg px-8 py-4 rounded-xl transition-all"
            >
              Commencer l'essai gratuit
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-700 hover:border-gray-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Voir les abonnements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
