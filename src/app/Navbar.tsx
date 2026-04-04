"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const links = [
  { label: "Pricing",      href: "/pricing" },
  { label: "Channels",     href: "/channels-list" },
  { label: "Free Trial",   href: "/free-trial" },
  { label: "Blog",         href: "/blog" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Referral",     href: "/referral" },
  { label: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-red-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-red-400 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/free-trial"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
        >
          Free Trial
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span className={`block h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-red-400 hover:bg-gray-800 px-3 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg text-sm font-bold text-center transition-colors"
            >
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
