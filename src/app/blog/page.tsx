import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Canada Blog 2026 | Guides, Reviews & Tips",
  description:
    "The IPTV Canada blog — expert guides on the best IPTV services in Canada, setup tutorials, comparisons, and tips for 2026.",
  alternates: { canonical: "https://www.iptvsubscriptionincanada.ca/blog" },
};

const posts = [
  {
    slug: "best-iptv-canada-2026",
    title: "Best IPTV Canada 2026: Top Services Reviewed & Compared",
    excerpt:
      "A complete breakdown of the best IPTV services available in Canada for 2026 — including channel counts, pricing, reliability, and Canadian content coverage.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Reviews",
  },
  {
    slug: "iptv-vs-cable-canada",
    title: "IPTV vs Cable in Canada 2026: Which Is Better?",
    excerpt:
      "We compare IPTV and traditional cable TV head-to-head on price, channels, quality, and flexibility to help Canadians make the right choice.",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Comparison",
  },
  {
    slug: "iptv-firestick-canada",
    title: "How to Install IPTV on Firestick in Canada (2026 Guide)",
    excerpt:
      "Step-by-step instructions for setting up IPTV on Amazon Fire Stick in Canada. Works with Fire Stick 4K, Lite, and all Fire TV devices.",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Setup Guide",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          IPTV Canada <span className="text-red-500">Blog</span>
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Guides, reviews, and tips for IPTV users in Canada.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-red-400 font-semibold text-sm">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
