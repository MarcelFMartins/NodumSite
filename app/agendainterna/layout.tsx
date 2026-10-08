import type { Metadata } from "next";
import { HeaderAgenda } from "@/components/agenda/header";
import { FooterAgenda } from "@/components/agenda/footer";
import { BarraFixaAgenda } from "@/components/agenda/barra-fixa";

export const metadata: Metadata = {
  title: "Nodum Tarefas — tarefas, CRM e financeiro num sistema só",
  description:
    "Gestão de tarefas (kanban, tabela, gráficos), CRM (funil, contatos, WhatsApp) e financeiro (contas a pagar e a receber, cartão, saldo previsto) num sistema multiempresa. Já usado pela Nodum e pela Vogel Assessoria Contábil.",
  keywords: [
    "gestão de tarefas",
    "CRM para empresas",
    "sistema multiempresa",
    "kanban e funil de vendas",
    "contas a pagar e a receber",
    "Nodum Tarefas",
  ],
  alternates: { canonical: "/agendainterna" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/agendainterna",
    siteName: "Nodum Tarefas",
    title: "Nodum Tarefas — tarefas, CRM e financeiro da sua empresa",
    description:
      "Tarefas, CRM e financeiro multiempresa, com dados isolados por empresa e saldo previsto sem planilha.",
  },
};

export default function AgendaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Nodum Tarefas",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://nodumsolucoes.com/agendainterna",
            description:
              "Sistema multiempresa de gestão de tarefas, CRM e financeiro: quadro kanban, tabela, gráficos, funil de vendas, WhatsApp, contas a pagar e a receber e painel financeiro, com dados isolados por empresa.",
            inLanguage: "pt-BR",
            publisher: { "@type": "Organization", name: "Nodum Soluções Integradas" },
          }),
        }}
      />
      <HeaderAgenda />
      <main id="conteudo">{children}</main>
      <FooterAgenda />
      <BarraFixaAgenda />
    </>
  );
}
