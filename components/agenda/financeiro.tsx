"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal, ScrambleText, SplitText, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { financeiroAgenda } from "@/lib/agenda";
import { cn } from "@/lib/utils";

const brl = (v: number) => `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** O módulo mais novo da Agenda Interna: contas, cartão e o painel. */
export function FinanceiroAgenda() {
  const [ativa, setAtiva] = useState(0);
  const tela = financeiroAgenda.telas[ativa];

  return (
    <section id="financeiro" className="section relative overflow-hidden bg-panel">
      <NodeField className="opacity-40" densidade={0.00005} maxNos={45} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5">
            <ScrambleText text={financeiroAgenda.eyebrow} className="eyebrow text-forest-400" />
          </span>
        </Reveal>

        <h2 className="mt-6 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={financeiroAgenda.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={financeiroAgenda.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{financeiroAgenda.texto}</p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {financeiroAgenda.numeros.map((n) => (
            <Reveal key={n.rotulo}>
              <div className="card p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{n.rotulo}</p>
                <p className={cn("mt-3 font-mono text-3xl font-bold tabular-nums", n.cor)}>{brl(n.valor)}</p>
                <p className="mt-1 text-xs text-muted">empresa de demonstração · mês atual</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:gap-12">
          <div>
            <div className="fade-x -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
              <div className="flex w-max gap-2">
                {financeiroAgenda.telas.map((t, i) => (
                  <button
                    key={t.aba}
                    type="button"
                    onClick={() => setAtiva(i)}
                    aria-pressed={i === ativa}
                    className={cn(
                      "relative inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-5 text-sm font-medium transition-colors duration-200",
                      i === ativa ? "text-white" : "text-muted hover:text-white"
                    )}
                  >
                    {i === ativa && (
                      <motion.span layoutId="aba-financeiro" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                    )}
                    <span className="relative z-10">{t.aba}</span>
                  </button>
                ))}
              </div>
            </div>

            <TiltCard intensidade={4} brilho={false} className="mt-6 overflow-hidden p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-950">
                <AnimatePresence mode="wait">
                  <motion.div key={tela.src} initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                    <Image src={tela.src} alt={`Agenda Interna Nodum — ${tela.aba}`} fill sizes="(max-width: 1024px) 94vw, 60vw" className="object-cover object-top" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
            <AnimatePresence mode="wait">
              <motion.p key={tela.aba} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 text-sm text-body">
                {tela.texto}
              </motion.p>
            </AnimatePresence>
          </div>

          <Reveal delay={0.1}>
            <ul className="card space-y-4 rounded-[var(--radius-panel)] p-7 sm:p-8">
              {financeiroAgenda.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Check className="h-3 w-3 text-forest-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
