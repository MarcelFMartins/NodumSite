import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterLegal } from "@/components/legal/casca";
import { documentos, empresa, contatoLegal, legalHub } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Termos, privacidade e contratos",
  description:
    "Termos de Uso e Política de Privacidade da Nodum, válidos para todos os produtos, e o contrato específico de cada um: NodumBarber e Nodum BI.",
  alternates: { canonical: "/legal" },
};

function Cartao({ d }: { d: (typeof documentos)[number] }) {
  return (
    <Link
      href={`/legal/${d.slug}`}
      className="card group flex flex-col p-7 transition-colors duration-200 hover:border-brand/40"
    >
      <p className="eyebrow text-muted">v{d.versao}</p>
      <h2 className="mt-4 font-display text-xl font-bold text-white transition-colors group-hover:text-forest-400">
        {d.titulo}
      </h2>
      <p className="mt-2 text-sm font-medium text-forest-400">{d.subtitulo}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-body">{d.resumo}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
        Ler o documento
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function LegalPage() {
  const gerais = documentos.filter((d) => d.grupo === "geral");
  const contratos = documentos.filter((d) => d.grupo !== "geral");

  return (
    <>
      <div className="shell py-16 md:py-24">
        <p className="eyebrow text-forest-400">{legalHub.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <span className="text-white">{legalHub.titulo[0]}</span>{" "}
          <span className="lit">{legalHub.titulo[1]}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">{legalHub.intro}</p>

        <p className="eyebrow mt-14 text-muted">Vale para todos os produtos</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {gerais.map((d) => (
            <Cartao key={d.slug} d={d} />
          ))}
        </div>

        <p className="eyebrow mt-12 text-muted">Contrato de cada produto</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contratos.map((d) => (
            <Cartao key={d.slug} d={d} />
          ))}
        </div>

        <div className="card mt-12 max-w-3xl p-7">
          <p className="eyebrow text-muted">Quem responde por estes documentos</p>
          <p className="mt-4 leading-relaxed text-body">
            {empresa.razao}, CNPJ {empresa.cnpj}, com sede em {empresa.endereco}.
          </p>
          <p className="mt-3 leading-relaxed text-body">
            Dúvidas sobre os documentos, pedidos de LGPD ou contato com o encarregado de dados:{" "}
            <a
              href={`mailto:${contatoLegal}`}
              className="font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
            >
              {contatoLegal}
            </a>
            .
          </p>
        </div>
      </div>

      <FooterLegal />
    </>
  );
}
