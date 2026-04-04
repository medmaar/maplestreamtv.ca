import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className ?? ""}`} aria-label="MapleStreamTV Home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2L13 8L7 7L10 12L2 18L9 18L8 24L16 21L24 24L23 18L30 18L22 12L25 7L19 8Z"
          fill="#E53935"
        />
      </svg>
      <span style={{ fontWeight: 700, fontSize: "20px", lineHeight: 1.1 }}>
        <span style={{ color: "#ffffff" }}>Maple</span>
        <span style={{ color: "#E53935" }}>Stream</span>
        <span
          style={{
            display: "block",
            fontSize: "11px",
            fontWeight: 400,
            color: "#9ca3af",
            letterSpacing: "0.1em",
          }}
        >
          TV · CANADA
        </span>
      </span>
    </Link>
  );
}
