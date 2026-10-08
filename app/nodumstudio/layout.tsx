import type { Metadata } from "next";
import { HeaderStudio } from "@/components/studio/header";
import { FooterStudio } from "@/components/studio/footer";
import { BarraFixaStudio } from "@/components/studio/barra-fixa";

export const metadata: Metadata = {
  title: "NodumStudio — agenda e gestão para estúdios de beleza",
  description:
    "Agenda por profissional, agendamento online, planos e pacotes com crédito, comissão automática, estoque, condicional, venda a prazo e financeiro. Para manicure, salão, sobrancelhas, estética, depilação, maquiagem e tatuagem. A partir de R$ 79,90/mês.",
  keywords: [
    "sistema para salão de beleza",
    "agenda para manicure",
    "sistema para estúdio de beleza",
    "agendamento online salão",
    "comissão de manicure",
    "sistema para clínica de estética",
    "NodumStudio",
  ],
  alternates: { canonical: "/nodumstudio" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/nodumstudio",
    siteName: "NodumStudio",
    title: "NodumStudio — a agenda cheia, o caixa no lugar",
    description:
      "Agenda, agendamento online, planos, comissões, estoque e financeiro para estúdios de beleza. Da família do NodumBarber.",
  },
};

/**
 * A landing do NodumStudio roda com a paleta do próprio sistema (rosé
 * + ameixa). O #tema-studio abaixo é o gatilho: app/globals.css troca
 * os tokens de cor da página inteira enquanto ele está montado.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "NodumStudio",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://nodumsolucoes.com/nodumstudio",
            description:
              "Sistema de agenda e gestão para estúdios de beleza: agendamento online, agenda por profissional, comissões, planos com crédito, estoque, condicional, venda a prazo e financeiro.",
            inLanguage: "pt-BR",
            publisher: { "@type": "Organization", name: "Nodum Soluções Integradas" },
            offers: [
              { "@type": "Offer", name: "Essencial", price: "79.90", priceCurrency: "BRL" },
              { "@type": "Offer", name: "Profissional", price: "99.90", priceCurrency: "BRL" },
              { "@type": "Offer", name: "Premium", price: "149.90", priceCurrency: "BRL" },
            ],
          }),
        }}
      />
      <div id="tema-studio" hidden />
      <HeaderStudio />
      <main id="conteudo">{children}</main>
      <FooterStudio />
      <BarraFixaStudio />
    </>
  );
}
