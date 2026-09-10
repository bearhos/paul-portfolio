import { ImageResponse } from "next/og";

export const alt = "Phạm Hải Phước, Senior React Native Engineer at SCEX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 80px",
        background: "#080808",
        color: "#f1f1f1",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 35, fontWeight: 700 }}>
        phuoc<span style={{ color: "#e8e8e8" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -3,
          lineHeight: 1.13,
        }}
      >
        <span>Thoughtful code.</span>
        <span style={{ color: "#a7a7a7" }}>Real-world impact.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#bcbcbc",
        }}
      >
        <span>Phạm Hải Phước</span>
        <span>Senior React Native Engineer at SCEX</span>
      </div>
    </div>,
    size,
  );
}
