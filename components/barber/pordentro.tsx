"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, ScrambleText, SplitText, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { pordentro } from "@/lib/barber";
import { cn } from "@/lib/utils";

export function PorDentro() {
  const [ativa, setAtiva] = useState(0);
  const tela = pordentro.telas[ativa];

  return (
    <section id="pordentro" className="section relative overflow-hidden bg-surface">
      <NodeField className="opacity-40" densidade={0.00005} maxNos={45} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={pordentro.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={pordentro.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={pordentro.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{pordentro.intro}</p>
        </Reveal>

        <Reveal delay={0.15}>
          {/* As abas rolam de lado no celular em vez de quebrarem em três
              linhas e empurrarem a imagem para fora da dobra. */}
          <div className="fade-x mt-12 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
              {pordentro.telas.map((t, i) => (
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
                    <motion.span
                      layoutId="aba-pordentro"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{t.aba}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-12">
            <TiltCard intensidade={5} brilho={false} className="overflow-hidden p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tela.src}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={tela.src}
                      alt={`NodumBarber — ${tela.titulo}`}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 94vw, 62vw"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>

            <AnimatePresence mode="wait">
              <motion.div
                key={tela.aba}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <p className="eyebrow text-forest-400">{tela.aba}</p>
                <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
                  {tela.titulo}
                </h3>
                <p className="mt-4 text-body">{tela.texto}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-8 text-sm text-muted">{pordentro.rodape}</p>
        </Reveal>
      </div>
    </section>
  );
}
