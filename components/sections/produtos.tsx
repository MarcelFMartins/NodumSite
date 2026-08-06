"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic, Reveal, ScrambleText, SplitText, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { produto } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Vitrine do Nodum Barbearia.
 *
 * De propósito é curta: o produto tem landing page própria, então aqui
 * a função é provar que já existe entrega feita e mandar o visitante
 * para lá. As telas são capturas reais do sistema em operação.
 */
export function Produtos() {
  const [ativa, setAtiva] = useState(0);
  const tela = produto.telas[ativa];

  return (
    <section id="produtos" className="section relative overflow-hidden bg-panel">
      <NodeField className="opacity-40" densidade={0.00005} maxNos={45} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={produto.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text="Não é promessa:" animateOnView className="text-white" />{" "}
          <SplitText text="já tem produto nosso rodando." animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <div className="card mt-14 overflow-hidden rounded-[var(--radius-panel)]">
            <div className="grid lg:grid-cols-[1fr_1.15fr]">
              <div className="p-6 sm:p-8 md:p-12">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full bg-forest-400"
                      style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                    />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-400" />
                  </span>
                  <span className="eyebrow text-forest-400">Em operação</span>
                </span>

                <h3 className="mt-7 font-display text-3xl font-bold text-white md:text-4xl">
                  Nodum <span className="lit">Barbearia</span>
                </h3>
                <p className="mt-4 text-lg text-body">{produto.chamada}</p>
                <p className="mt-4 text-muted">{produto.texto}</p>

                <ul className="mt-9 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {produto.destaques.map((destaque) => (
                    <li key={destaque} className="flex items-center gap-3 text-sm text-body">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                        <Check className="h-3 w-3 text-forest-400" />
                      </span>
                      {destaque}
                    </li>
                  ))}
                </ul>

                <Magnetic className="mt-10">
                  <ButtonLink
                    href={produto.cta.href}
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {produto.cta.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </ButtonLink>
                </Magnetic>
              </div>

              <div className="border-t border-line bg-ink-950/60 p-6 sm:p-8 md:p-12 lg:border-l lg:border-t-0">
                <TiltCard intensidade={7} brilho={false} className="overflow-hidden p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-950">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tela.src}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={tela.src}
                          alt={`Nodum Barbearia — ${tela.legenda}`}
                          fill
                          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 92vw, 55vw"
                          className="object-cover object-top"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </TiltCard>

                <div className="mt-6 flex flex-wrap gap-2">
                  {produto.telas.map((t, i) => (
                    <button
                      key={t.src}
                      type="button"
                      onClick={() => setAtiva(i)}
                      aria-pressed={i === ativa}
                      className={cn(
                        "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                        // Alvo de 44px no toque: com py-2 a pílula tem 36px de
                        // altura e escapa do polegar.
                        "max-lg:min-h-11 max-lg:px-5",
                        i === ativa ? "text-white" : "text-muted hover:text-white"
                      )}
                    >
                      {i === ativa && (
                        // layoutId faz a pílula deslizar entre as abas em
                        // vez de piscar de uma para a outra.
                        <motion.span
                          layoutId="aba-produto"
                          className="absolute inset-0 rounded-full bg-brand"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{t.legenda}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-7 text-sm text-muted">
            Seu segmento é outro? É esse mesmo o trabalho: construir a ferramenta que a sua operação
            precisa.{" "}
            <a
              href="#contato"
              className="font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
            >
              Conte o seu caso
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
