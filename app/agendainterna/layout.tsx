import type { Metadata } from "next";
import { HeaderAgenda } from "@/components/agenda/header";
import { FooterAgenda } from "@/components/agenda/footer";
import { BarraFixaAgenda } from "@/components/agenda/barra-fixa";

export const metadata: Metadata = {
  title: "Agenda Interna Nodum — tarefas e CRM num sistema só",
  description:
    "Gestão de tarefas (kanban, tabela, gráficos) e CRM (funil, contatos, automações de WhatsApp) num sistema multiempresa, com dados isolados por empresa. Já usado pela Nodum e pela Vogel Assessoria Contábil.",
  keywords: [
    "gestão de tarefas",
    "CRM para empresas",
    "sistema multiempresa",
    "kanban e funil de vendas",
    "Agenda Interna Nodum",
  ],
  alternates: { canonical: "/agendainterna" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/agendainterna",
    siteName: "Agenda Interna Nodum",
    title: "Agenda Interna Nodum — tarefas e CRM da sua empresa, num sistema só",
    description:
      "Gestão de tarefas e CRM multiempresa, com dados isolados por empresa e ponte direta entre negócio ganho e tarefa de execução.",
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
            name: "Agenda Interna Nodum",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://nodum.com.br/agendainterna",
            description:
              "Sistema multiempresa de gestão de tarefas e CRM: quadro kanban, tabela, gráficos, funil de vendas, contatos e automações de WhatsApp, com dados isolados por empresa.",
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
