import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className ?? ""}`} aria-label="MapleStreamTV Home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M50,5 L54,27 L73,17 L65,36 L87,32 L76,49 L95,54 L75,58 L82,76 L62,67 L66,86 L50,77 L34,86 L38,67 L18,76 L25,58 L5,54 L24,49 L13,32 L35,36 L27,17 L46,27 Z"
          fill="#E53935"
        />
        <rect x="46" y="77" width="8" height="17" rx="3" fill="#E53935" />
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
