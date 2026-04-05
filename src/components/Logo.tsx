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
          d="M50,5 C51,9 60,18 62,22 C64,26 73,14 76,18 C79,22 78,30 81,34 C84,38 89,41 91,46 C93,51 84,55 82,59 C80,63 77,66 75,71 C73,76 60,79 54,83 L53,97 C52,99 48,99 47,97 L46,83 C40,79 27,76 25,71 C23,66 20,63 18,59 C16,55 7,51 9,46 C11,41 16,38 19,34 C22,30 21,22 24,18 C27,14 36,26 38,22 C40,18 49,9 50,5 Z"
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
