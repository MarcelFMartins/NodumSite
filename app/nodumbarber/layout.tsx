import type { Metadata } from "next";
import { HeaderBarber } from "@/components/barber/header";
import { FooterBarber } from "@/components/barber/footer";
import { BarraFixa } from "@/components/barber/barra-fixa";
import { sistema } from "@/lib/barber";

export const metadata: Metadata = {
  title: "NodumBarber — sistema de gestão para barbearias",
  description:
    "Agenda em grade por barbeiro, carteira de clientes, comissão automática, planos com crédito, estoque e caixa. A partir de R$ 79,90/mês, com 14 dias grátis e sem fidelidade.",
  keywords: [
    "sistema para barbearia",
    "agenda para barbearia",
    "software de barbearia",
    "comissão de barbeiro",
    "gestão de barbearia",
    "NodumBarber",
  ],
  alternates: { canonical: "/nodumbarber" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/nodumbarber",
    siteName: "NodumBarber",
    title: "NodumBarber — sua barbearia inteira numa tela só",
    description:
      "Agenda, clientes, comissões, planos, estoque e caixa no mesmo lugar. 14 dias grátis, sem cartão.",
  },
};

/**
 * A landing do produto tem cabeçalho e rodapé próprios: quem chega aqui
 * por anúncio precisa ver o NodumBarber, não o menu da consultoria. O
 * vínculo com a Nodum fica no rodapé e no lockup da marca.
 */
export default function BarberLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        // Rich result de software: preço, teste grátis e vínculo com a
        // Nodum saem direto do mesmo arquivo que alimenta a página.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "NodumBarber",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://nodumsolucoes.com/nodumbarber",
            description:
              "Sistema de agenda e gestão para barbearias: agenda por barbeiro, clientes, comissões, planos com crédito, estoque e caixa.",
            inLanguage: "pt-BR",
            publisher: { "@type": "Organization", name: "Nodum Soluções Integradas" },
            offers: [
              { "@type": "Offer", name: "Essencial", price: "79.90", priceCurrency: "BRL" },
              { "@type": "Offer", name: "Profissional", price: "99.90", priceCurrency: "BRL" },
              { "@type": "Offer", name: "Premium", price: "149.90", priceCurrency: "BRL" },
            ],
            potentialAction: { "@type": "RegisterAction", target: sistema.cadastro },
          }),
        }}
      />
      <HeaderBarber />
      <main id="conteudo">{children}</main>
      <FooterBarber />
      <BarraFixa />
    </>
  );
}
