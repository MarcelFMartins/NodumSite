import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { GlowCursor, ScrollProgress } from "@/components/ui/fx";
import { site } from "@/lib/content";

/* Fontes da marca auto-hospedadas pelo next/font: sem requisição a um
   domínio externo em runtime, sem FOUT e sem depender do Google Fonts
   responder para a página hidratar. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nodum.com.br"),
  title: {
    default: `${site.nome} — ${site.tagline}`,
    template: `%s | Nodum`,
  },
  description:
    "Consultoria de gestão e tecnologia sob medida para pequenas e médias empresas brasileiras. Não vendemos software sem suporte, nem consultoria sem ferramenta.",
  keywords: [
    "consultoria de gestão",
    "tecnologia para PME",
    "sistema sob medida",
    "gestão empresarial",
    "Nodum",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: `${site.nome} — ${site.tagline}`,
    description:
      "Gestão e tecnologia andam juntas. Consultoria e sistemas sob medida para PMEs de 5 a 200 colaboradores.",
  },
  icons: { icon: "/brand/logo-mark.svg" },
};

export const viewport: Viewport = {
  themeColor: "#1C1B1A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-control)] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <GlowCursor />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
