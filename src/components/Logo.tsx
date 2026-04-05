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
          d="M50,5 L53,24 L70,14 L65,32 L86,27 L75,46 L96,51 L75,56 L82,74 L63,66 L67,85 L50,75 L33,85 L37,66 L18,74 L25,56 L4,51 L25,46 L14,27 L35,32 L30,14 L47,24 Z"
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
