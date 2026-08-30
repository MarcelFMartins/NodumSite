import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NodumLogo } from "@/components/brand/logo";
import { documentos, type GrupoDocumento } from "@/lib/legal";

/**
 * Cabeçalho e rodapé próprios da área legal.
 *
 * Não reaproveitam os do site porque a navegação de lá é toda por
 * âncora (#problema, #contato) e não existe fora da home. Aqui o que
 * importa é voltar para onde o leitor estava e alcançar os outros
 * documentos que fazem sentido a partir de onde se está.
 */

export function HeaderLegal() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-950/85 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Nodum, ir para a página inicial">
          <NodumLogo />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao site
        </Link>
      </div>
    </header>
  );
}

export function FooterLegal({ atual }: { atual?: string }) {
  const grupoAtual: GrupoDocumento | undefined = documentos.find((d) => d.slug === atual)?.grupo;

  // Numa página geral (Termos, Privacidade — ou no índice /legal, sem
  // `atual`), todos os outros documentos fazem sentido, contratos
  // inclusive. Já a partir do contrato de UM produto, só os dois
  // documentos gerais são relevantes — o contrato do outro produto não
  // tem nada a ver com quem está lendo o do NodumBarber, por exemplo.
  const outros = documentos.filter((d) => {
    if (d.slug === atual) return false;
    if (!grupoAtual || grupoAtual === "geral") return true;
    return d.grupo === "geral";
  });

  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="shell py-14">
        {outros.length > 0 && (
          <>
            <p className="eyebrow text-muted">
              {atual ? "Os outros documentos" : "Os documentos"}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {outros.map((d) => (
                <Link
                  key={d.slug}
                  href={`/legal/${d.slug}`}
                  className="card group p-6 transition-colors duration-200 hover:border-brand/40"
                >
                  <p className="font-display text-lg font-bold text-white transition-colors group-hover:text-forest-400">
                    {d.titulo}
                  </p>
                  <p className="mt-1.5 text-sm text-muted">{d.subtitulo}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nodum Soluções Integradas.{" "}
            <Link href="/" className="font-semibold text-forest-400 hover:underline">
              Voltar ao site
            </Link>
          </p>
          <p className="font-display text-forest-400">Conectados para crescer.</p>
        </div>
      </div>
    </footer>
  );
}
