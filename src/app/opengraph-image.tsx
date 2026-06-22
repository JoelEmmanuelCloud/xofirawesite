import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Tranox — Instant money transfers between Nigeria and Ivory Coast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const markData = await readFile(
    join(process.cwd(), "public", "tranox-mark.png"),
  );
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #060e1d 0%, #0a1322 55%, #0c2018 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <img src={markSrc} width={60} height={60} alt="" />
          <div style={{ display: "flex", fontSize: 38, fontWeight: 700 }}>
            Tranox
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#1fb35a",
              marginBottom: 24,
              letterSpacing: "0.12em",
            }}
          >
            CROSS-BORDER TRANSFERS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            Send money between Nigeria and Ivory Coast in minutes
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginTop: 44,
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            <span
              style={{
                display: "flex",
                padding: "12px 28px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
              }}
            >
              NGN
            </span>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1fb35a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "flex" }}
            >
              <path d="m16 3 4 4-4 4" />
              <path d="M20 7H4" />
              <path d="m8 21-4-4 4-4" />
              <path d="M4 17h16" />
            </svg>
            <span
              style={{
                display: "flex",
                padding: "12px 28px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
              }}
            >
              XOF
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex" }}>Fast. Secure. Global.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
