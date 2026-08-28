"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { validacao } from "@/lib/barber";
import { cn } from "@/lib/utils";

/**
 * A Nodum vende honestidade antes de venda — então o que ainda está em
 * homologação aparece como está: pronto, testado, e ainda não em
 * produção. Some da página no dia em que essas duas telas subirem.
 */
export function Validacao() {
  const [ativa, setAtiva] = useState(0);
  const item = validacao.itens[ativa];

  return (
    <section className="section bg-panel">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-neutral-400" />
                <ScrambleText text={validacao.eyebrow} className="eyebrow text-neutral-300" />
              </span>
            </Reveal>

            <h2 className="mt-5 text-display-md md:text-display-lg">
              <SplitText text={validacao.titulo[0]} animateOnView className="text-white" />{" "}
              <SplitText text={validacao.titulo[1]} animateOnView delay={0.12} className="lit" />
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-body">{validacao.intro}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {validacao.itens.map((t, i) => (
                  <button
                    key={t.aba}
                    type="button"
                    onClick={() => setAtiva(i)}
                    aria-pressed={i === ativa}
                    className={cn(
                      "relative inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-colors duration-200",
                      i === ativa ? "text-white" : "text-muted hover:text-white"
                    )}
                  >
                    {i === ativa && (
                      <motion.span
                        layoutId="aba-validacao"
                        className="absolute inset-0 rounded-full border border-line-strong bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{t.aba}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={item.aba}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.26 }}
                  className="mt-7"
                >
                  <h3 className="font-display text-2xl font-bold text-white">{item.titulo}</h3>
                  <p className="mt-3 text-body">{item.texto}</p>
                </motion.div>
              </AnimatePresence>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card overflow-hidden rounded-[var(--radius-panel)] p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.src}
                      alt={`NodumBarber — ${item.titulo}`}
                      fill
                      sizes="(max-width: 1024px) 94vw, 55vw"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Sinaliza na própria imagem que a tela ainda não está no ar. */}
                <span className="absolute right-4 top-4 rounded-full border border-line-strong bg-ink-950/85 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-neutral-300 backdrop-blur">
                  Em teste
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
