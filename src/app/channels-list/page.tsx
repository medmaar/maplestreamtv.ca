import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Canada Channel List 2026 | 25,000+ Live Channels",
  description:
    "Full IPTV Canada channel list for 2026. Browse 25,000+ live channels including TSN, Sportsnet, CBC, CTV, NHL, NFL, NBA, and thousands of international channels.",
  keywords:
    "IPTV Canada channel list, IPTV Canada channels, Canadian IPTV channels, TSN IPTV Canada, Sportsnet IPTV Canada",
  alternates: { canonical: "https://www.iptvsubscriptionincanada.ca/channels-list" },
};

const categories = [
  {
    name: "Canadian Networks",
    count: "150+",
    channels: [
      "CBC", "CBC News", "CTV", "CTV2", "CTV News Channel", "Global", "Global News",
      "Citytv", "City News", "CHCH Hamilton", "CP24", "Omni 1", "Omni 2",
      "Aboriginal Peoples Television Network (APTN)", "AMI-tv", "CPAC",
    ],
  },
  {
    name: "Canadian Sports",
    count: "20+",
    channels: [
      "TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5",
      "Sportsnet", "Sportsnet East", "Sportsnet West", "Sportsnet Pacific",
      "Sportsnet Ontario", "Sportsnet 360", "Sportsnet One",
      "CBC Sports", "NHL Network Canada", "Fight Network",
    ],
  },
  {
    name: "French Canadian",
    count: "40+",
    channels: [
      "TVA", "TVA Sports", "V", "Noovo", "RDS", "RDS2", "RDS Info",
      "TV5", "LCN", "Canal D", "Historia", "Series+", "Zeste",
      "ICI Radio-Canada Tele", "ICI RDI", "ICI Explora",
    ],
  },
  {
    name: "US Networks",
    count: "200+",
    channels: [
      "ABC", "NBC", "CBS", "FOX", "PBS", "The CW",
      "CNN", "Fox News", "MSNBC", "CNN International",
      "ESPN", "ESPN2", "ESPN3", "FS1", "FS2", "NFL Network",
      "NBA TV", "MLB Network", "NHL Network", "Golf Channel",
      "HBO", "Showtime", "Starz", "AMC", "FX", "Comedy Central",
      "MTV", "VH1", "BET", "Nickelodeon", "Cartoon Network", "Disney Channel",
    ],
  },
  {
    name: "Movies & Entertainment",
    count: "300+",
    channels: [
      "Super Channel Heart & Home", "Super Channel Fuse", "Super Channel Vault",
      "Hollywood Suite 70s", "Hollywood Suite 80s", "Hollywood Suite 90s", "Hollywood Suite 2000s",
      "Crave", "Starz", "Sundance TV", "IFC", "TCM", "Lifetime", "Hallmark Channel",
      "Hallmark Movies & Mysteries", "W Network", "OWN Canada",
    ],
  },
  {
    name: "Kids & Family",
    count: "50+",
    channels: [
      "YTV", "Treehouse", "Disney Channel Canada", "Disney Junior",
      "Disney XD", "Nickelodeon", "Nick Jr.", "Cartoon Network",
      "Teletoon", "Family Channel", "PBS Kids", "BBC CBeebies",
    ],
  },
  {
    name: "News & Documentary",
    count: "100+",
    channels: [
      "BBC World News", "Sky News", "Al Jazeera English", "France 24",
      "DW English", "NHK World", "RT", "Euronews",
      "Discovery Channel", "National Geographic", "History",
      "History 2", "Science Channel", "Animal Planet", "BBC Earth",
    ],
  },
  {
    name: "UK Channels",
    count: "80+",
    channels: [
      "BBC One", "BBC Two", "BBC Three", "BBC Four",
      "ITV", "ITV2", "ITV3", "ITV4", "Channel 4", "Channel 5",
      "Sky Sports Main Event", "Sky Sports Premier League", "Sky Sports Football",
      "Sky Sports Cricket", "BT Sport 1", "BT Sport 2", "BT Sport ESPN",
      "Sky One", "Sky Atlantic", "Dave", "Gold",
    ],
  },
  {
    name: "Sports (International)",
    count: "200+",
    channels: [
      "beIN Sports", "beIN Sports 2", "beIN Sports 3",
      "Eurosport 1", "Eurosport 2", "DAZN", "SuperSport",
      "Sky Sports (UK)", "BT Sport (UK)", "LaLiga TV",
      "Serie A TV", "Bundesliga", "Ligue 1", "Premier Sports",
      "Fight Network", "Combate", "ESPN Deportes",
    ],
  },
  {
    name: "South Asian",
    count: "200+",
    channels: [
      "Star Plus", "Star Gold", "Star Sports 1", "Star Sports 2",
      "Sony LIV", "Sony Entertainment", "Colors TV", "Zee TV",
      "Zee Cinema", "Zee News", "Aaj Tak", "NDTV 24x7",
      "Sun TV", "Vijay TV", "Gemini TV", "ETV Telugu",
      "Surya TV", "Mazhavil Manorama", "Asianet",
    ],
  },
  {
    name: "Arabic Channels",
    count: "150+",
    channels: [
      "MBC 1", "MBC 2", "MBC 3", "MBC 4", "MBC Drama", "MBC Action",
      "Dubai TV", "Abu Dhabi TV", "Al Arabiya", "Al Jazeera Arabic",
      "Rotana Cinema", "Rotana Khalijiah", "LBC Lebanon", "Future TV",
      "OSN Sports", "beIN Arabic",
    ],
  },
  {
    name: "European",
    count: "300+",
    channels: [
      "RAI 1", "RAI 2", "RAI 3", "Mediaset Italia", "Canale 5",
      "TF1", "France 2", "France 3", "M6", "Canal+",
      "ARD", "ZDF", "RTL Germany", "Pro7", "SAT.1",
      "Antena 3", "Telecinco", "TVE Spain",
      "TVP Poland", "Polsat", "TVN Poland",
      "NTV Turkey", "ATV Turkey", "TRT 1",
    ],
  },
];

export default function ChannelsListPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            IPTV Canada <span className="text-red-500">Channel List</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            25,000+ live channels across Canada, the US, UK, and worldwide.
            Every plan includes all channels below — no add-ons required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> All Canadian networks</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> TSN &amp; Sportsnet</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> 4K &amp; HD quality</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> PPV included</span>
          </div>
        </div>
      </section>

      {/* Channel categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <h2 className="text-xl font-bold">{cat.name}</h2>
                <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {cat.count} channels
                </span>
              </div>
              <div className="px-6 py-4 flex flex-wrap gap-2">
                {cat.channels.map((ch) => (
                  <span
                    key={ch}
                    className="bg-gray-800 border border-gray-700 text-gray-300 text-sm px-3 py-1.5 rounded-lg"
                  >
                    {ch}
                  </span>
                ))}
                <span className="bg-gray-800 border border-gray-700 text-red-400 text-sm px-3 py-1.5 rounded-lg font-medium">
                  + many more...
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Access All 25,000+ Channels</h2>
          <p className="text-gray-300 mb-8">
            Every plan includes the full channel list. Try it free for 24 hours — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Get Free Trial
            </a>
            <a href="/pricing" className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
