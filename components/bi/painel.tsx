"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Aurora, Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { painelBi } from "@/lib/bi";
import { cn } from "@/lib/utils";

const tomCor: Record<string, string> = {
  bom: "text-forest-400",
  ruim: "text-red-400",
  neutro: "text-muted",
};

const setaDirecao: Record<string, string> = {
  baixa: "▾",
  alta: "▴",
  estavel: "•",
};

/**
 * Demonstra o paradigma central do produto — trocar o recorte e ver a
 * comparação pronta — sem fabricar um segundo conjunto de números.
 * Os botões de período são reais (o mesmo menu do painel) mas
 * cosméticos aqui: só destacam a escolha. Os KPIs sob o gráfico são
 * os valores verdadeiros da captura de tela, para o período que já
 * está selecionado por padrão (1º Semestre).
 */
export function PainelBi() {
  const [periodo, setPeriodo] = useState("1º Semestre");
  const [comparacao, setComparacao] = useState(painelBi.comparacoes[0]);

  return (
    <section id="painel" className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-60" />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={painelBi.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={painelBi.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={painelBi.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{painelBi.texto}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card mt-12 rounded-[var(--radius-panel)] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <p className="eyebrow text-muted">Período</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {painelBi.periodos.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriodo(p)}
                      aria-pressed={periodo === p}
                      className={cn(
                        "relative min-h-10 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                        periodo === p ? "text-white" : "text-muted hover:text-white"
                      )}
                    >
                      {periodo === p && (
                        <motion.span
                          layoutId="periodo-ativo"
                          className="absolute inset-0 rounded-full bg-brand"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{p}</span>
                    </button>
                  ))}
                </div>

                <p className="eyebrow mt-7 text-muted">Comparar com</p>
                <div className="mt-3 flex flex-col gap-2">
                  {painelBi.comparacoes.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setComparacao(c)}
                      aria-pressed={comparacao === c}
                      className={cn(
                        "flex min-h-11 items-center gap-3 rounded-[var(--radius-control)] border px-4 text-left text-sm transition-colors duration-200",
                        comparacao === c
                          ? "border-brand/40 bg-brand/10 text-white"
                          : "border-line text-muted hover:text-white"
                      )}
                    >
                      <span
                        className={cn(
                          "h-2 w-2 shrink-0 rounded-full",
                          comparacao === c ? "bg-forest-400" : "bg-line-strong"
                        )}
                      />
                      {c}
                    </button>
                  ))}
                </div>

                <p className="mt-7 text-sm text-muted">
                  Mostrando <strong className="text-white">Jan/26 – Jun/26</strong>, comparado com{" "}
                  <strong className="text-white">Jan/25 – Jun/25</strong> — a mesma janela que aparece
                  nos indicadores ao lado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {painelBi.kpis.map((k) => (
                  <div key={k.rotulo} className="rounded-[var(--radius-control)] border border-line bg-ink-950/50 p-4">
                    <p className="eyebrow text-muted">{k.rotulo}</p>
                    <p className="mt-2 font-mono text-xl font-bold text-white sm:text-2xl">{k.valor}</p>
                    <p className={cn("mt-1.5 text-xs font-semibold", tomCor[k.tom])}>
                      {setaDirecao[k.direcao]} {k.variacao}
                    </p>
                    <p className="mt-1 text-xs text-muted">{k.nota}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
