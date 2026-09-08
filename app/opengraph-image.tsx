import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

/**
 * Imagem de compartilhamento (og:image / Twitter card) gerada em build,
 * com os tokens de cor da marca — sem depender de um arquivo estático
 * exportado do design (que ficaria desatualizado assim que a copy
 * mudasse). É o que aparece quando o link do site é colado no WhatsApp,
 * LinkedIn, Slack, ou lido por um crawler de IA que exibe preview.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#121110",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(29,158,117,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(95,203,158,0.2), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#1d9e75",
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#5fcb9e", letterSpacing: 1 }}>
            NODUM SOLUÇÕES INTEGRADAS
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 64,
            fontWeight: 700,
            color: "#f7f7f6",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {site.tagline}
        </div>

        <div style={{ marginTop: 28, fontSize: 30, color: "#c8eedf", maxWidth: 900 }}>
          Consultoria de gestão + sistemas sob medida para PMEs brasileiras.
        </div>
      </div>
    ),
    { ...size }
  );
}
