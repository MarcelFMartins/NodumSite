"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/fx";
import type { CtaDocumento, Documento } from "@/lib/legal";
import { cn } from "@/lib/utils";

/**
 * A chamada para pedir proposta, nos contratos vendidos sob orçamento
 * (Nodum BI, Agenda Interna). Fica de fora do corpo do documento — é
 * texto comercial, não cláusula — mas precisa aparecer onde quem lê
 * até aqui ainda está decidindo: logo no topo, e de novo ao final,
 * para quem leu o contrato inteiro antes de decidir.
 */
function CtaProposta({ cta }: { cta: CtaDocumento }) {
  return (
    <div className="card flex flex-col items-start gap-5 rounded-[var(--radius-panel)] border-brand/40 bg-brand/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <h3 className="font-display text-lg font-bold text-white md:text-xl">{cta.titulo}</h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-body">{cta.texto}</p>
      </div>
      <Magnetic forca={0.15} className="w-full shrink-0 sm:w-auto">
        <ButtonLink href={cta.href} target="_blank" rel="noopener" size="lg" className="w-full sm:w-auto">
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </ButtonLink>
      </Magnetic>
    </div>
  );
}

/**
 * Renderiza um documento legal.
 *
 * O sumário é uma lista de âncoras que acompanha a leitura: num texto
 * de doze cláusulas, saber onde se está vale mais que qualquer efeito.
 * Nada aqui usa TiltCard nem parallax — é texto para ler, não para
 * impressionar.
 */
export function DocumentoLegal({ doc }: { doc: Documento }) {
  const [ativa, setAtiva] = useState(doc.secoes[0]?.n);

  useEffect(() => {
    const alvos = doc.secoes
      .map((s) => document.getElementById(`sec-${s.n}`))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entradas) => {
        // A seção "ativa" é a que está mais acima entre as visíveis —
        // sem isso, rolar para cima acende a de baixo.
        const visiveis = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visiveis[0]) setAtiva(visiveis[0].target.id.replace("sec-", ""));
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [doc]);

  return (
    <article className="shell py-14 md:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow text-forest-400">{doc.aplica}</p>
        <h1 className="mt-5 text-display-md md:text-display-lg">
          <span className="text-white">{doc.titulo}</span>
        </h1>
        <p className="mt-4 text-xl text-body">{doc.subtitulo}</p>
        <p className="mt-6 text-lg leading-relaxed text-muted">{doc.resumo}</p>

        <dl className="mt-10 grid gap-4 border-y border-line py-6 sm:grid-cols-3">
          {[
            { r: "Versão", v: doc.versao },
            { r: "Vigente desde", v: doc.vigencia },
            { r: "Aplica-se a", v: doc.aplica },
          ].map((i) => (
            <div key={i.r}>
              <dt className="eyebrow text-muted">{i.r}</dt>
              <dd className="mt-1.5 font-mono text-sm font-semibold text-white">{i.v}</dd>
            </div>
          ))}
        </dl>

        {doc.cta && (
          <div className="mt-8">
            <CtaProposta cta={doc.cta} />
          </div>
        )}
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
        <nav aria-label="Sumário" className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-muted">Sumário</p>
          <ol className="mt-4 space-y-1">
            {doc.secoes.map((s) => (
              <li key={s.n}>
                <a
                  href={`#sec-${s.n}`}
                  className={cn(
                    "flex gap-3 rounded-[var(--radius-control)] px-3 py-2 text-sm transition-colors duration-200",
                    ativa === s.n
                      ? "bg-brand/10 text-forest-400"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="numeral shrink-0 text-xs opacity-70">{s.n}</span>
                  <span>{s.titulo}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl">
          {doc.secoes.map((s) => (
            <section key={s.n} id={`sec-${s.n}`} className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0">
              <h2 className="flex gap-4 font-display text-xl font-bold text-white md:text-2xl">
                <span className="numeral shrink-0 text-base text-forest-400">{s.n}</span>
                {s.titulo}
              </h2>

              <div className="mt-5 space-y-4">
                {s.blocos.map((b, i) => {
                  if (b.tipo === "p") {
                    return (
                      <p key={i} className="leading-relaxed text-body">
                        {b.texto}
                      </p>
                    );
                  }
                  if (b.tipo === "lista") {
                    return (
                      <ul key={i} className="space-y-2.5">
                        {b.itens.map((item) => (
                          <li key={item} className="flex gap-3 leading-relaxed text-body">
                            <span
                              aria-hidden
                              className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <dl key={i} className="space-y-3.5">
                      {b.itens.map((item) => (
                        <div
                          key={item.termo}
                          className="rounded-[var(--radius-control)] border border-line bg-ink-950/40 p-4"
                        >
                          <dt className="font-semibold text-white">{item.termo}</dt>
                          <dd className="mt-1 leading-relaxed text-body">{item.texto}</dd>
                        </div>
                      ))}
                    </dl>
                  );
                })}
              </div>
            </section>
          ))}

          {doc.cta && (
            <div className="mt-9">
              <CtaProposta cta={doc.cta} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
