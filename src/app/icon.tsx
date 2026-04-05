import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
        }}
      >
        <svg viewBox="0 0 100 100" width="32" height="32">
          <path
            d="M50,5 L54,27 L73,17 L65,36 L87,32 L76,49 L95,54 L75,58 L82,76 L62,67 L66,86 L50,77 L34,86 L38,67 L18,76 L25,58 L5,54 L24,49 L13,32 L35,36 L27,17 L46,27 Z"
            fill="#E53935"
          />
          <rect x="46" y="77" width="8" height="17" rx="3" fill="#E53935" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
