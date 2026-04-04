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
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path
            d="M16 2L13 8L7 7L10 12L2 18L9 18L8 24L16 21L24 24L23 18L30 18L22 12L25 7L19 8Z"
            fill="#E53935"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
