import type { Metadata } from "next";
import { HeaderBi } from "@/components/bi/header";
import { FooterBi } from "@/components/bi/footer";
import { BarraFixaBi } from "@/components/bi/barra-fixa";

export const metadata: Metadata = {
  title: "Nodum BI — painel de indicadores financeiros para contabilidade",
  description:
    "Consolide e compare as DREs de várias empresas num painel só. Comparação automática de período, acesso segmentado por cliente e importação direta de Excel ou PDF do Domínio.",
  keywords: [
    "business intelligence contabilidade",
    "painel financeiro para contador",
    "consolidação de DRE",
    "BI para escritório contábil",
    "Nodum BI",
  ],
  alternates: { canonical: "/nodumbi" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/nodumbi",
    siteName: "Nodum BI",
    title: "Nodum BI — todas as DREs dos seus clientes, num painel só",
    description:
      "Consolidação e comparação automática de DRE para escritórios que acompanham várias empresas.",
  },
};

export default function BiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Nodum Business Intelligence",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://nodumsolucoes.com/nodumbi",
            description:
              "Painel de indicadores financeiros para consolidar e comparar as DREs de várias empresas — feito para escritórios de contabilidade e consultoria.",
            inLanguage: "pt-BR",
            publisher: { "@type": "Organization", name: "Nodum Soluções Integradas" },
          }),
        }}
      />
      <HeaderBi />
      <main id="conteudo">{children}</main>
      <FooterBi />
      <BarraFixaBi />
    </>
  );
}
