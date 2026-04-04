import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="shrink-0 flex items-center" aria-label="MapleStreamTV Home">
      <svg
        width="200"
        height="40"
        viewBox="0 0 200 40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Play button triangle */}
        <polygon points="4,6 4,34 26,20" fill="#EF4444" />

        {/* IPTV text */}
        <text
          x="34"
          y="27"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#EF4444"
          letterSpacing="-0.5"
        >
          IPTV
        </text>

        {/* Canada 2026 text */}
        <text
          x="97"
          y="25"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="#FFFFFF"
          letterSpacing="0"
        >
          Canada 2026
        </text>
      </svg>
    </Link>
  );
}
