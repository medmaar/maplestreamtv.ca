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
            d="M50,5 L53,24 L70,14 L65,32 L86,27 L75,46 L96,51 L75,56 L82,74 L63,66 L67,85 L50,75 L33,85 L37,66 L18,74 L25,56 L4,51 L25,46 L14,27 L35,32 L30,14 L47,24 Z"
            fill="#E53935"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
