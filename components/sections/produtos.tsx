"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic, Reveal, ScrambleText, SplitText, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { produtosVitrine } from "@/lib/content";
import { cn } from "@/lib/utils";

type Produto = (typeof produtosVitrine)[number];

/**
 * Um cartão de produto, com o próprio carrossel de telas.
 *
 * Vive fora de `Produtos` para que cada produto tenha seu próprio
 * estado de aba ativa — sem isso, trocar de tela num produto trocaria
 * junto no outro.
 */
function CartaoProduto({ produto, invertido }: { produto: Produto; invertido: boolean }) {
  const [ativa, setAtiva] = useState(0);
  const tela = produto.telas[ativa];

  return (
    <div className="card overflow-hidden rounded-[var(--radius-panel)]">
      <div className="grid lg:grid-cols-[1fr_1.15fr]">
        <div className={cn("p-6 sm:p-8 md:p-12", invertido && "lg:order-2")}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-forest-400"
                style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-400" />
            </span>
            <span className="eyebrow text-forest-400">{produto.selo}</span>
          </span>

          <h3 className="mt-7 font-display text-3xl font-bold text-white md:text-4xl">
            {produto.titulo}
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
            <ButtonLink href={produto.cta.href} size="lg">
              {produto.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Magnetic>
        </div>

        <div
          className={cn(
            "border-t border-line bg-ink-950/60 p-6 sm:p-8 md:p-12 lg:border-t-0",
            invertido ? "lg:order-1 lg:border-r lg:border-l-0" : "lg:border-l"
          )}
        >
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
                    alt={`${produto.titulo} — ${tela.legenda}`}
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
                  // layoutId escopado ao próprio produto: sem isso, os dois
                  // cartões compartilhariam a mesma pílula animada.
                  <motion.span
                    layoutId={`aba-produto-${produto.titulo}`}
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
  );
}

export function Produtos() {
  return (
    <section id="produtos" className="section relative overflow-hidden bg-panel">
      <NodeField className="opacity-40" densidade={0.00005} maxNos={45} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text="Já está de pé" className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text="Não é promessa:" animateOnView className="text-white" />{" "}
          <SplitText text="já tem produto nosso rodando." animateOnView delay={0.12} className="lit" />
        </h2>

        <div className="mt-14 flex flex-col gap-10">
          {produtosVitrine.map((produto, i) => (
            <Reveal key={produto.titulo} delay={i * 0.05}>
              <CartaoProduto produto={produto} invertido={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
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
