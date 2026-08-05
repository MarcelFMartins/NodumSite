"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { produto } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Vitrine do Nodum Barbearia.
 *
 * De propósito é curta: o produto tem landing page própria, então aqui
 * a função é só provar que já existe coisa entregue e mandar o visitante
 * para o site dele.
 */
export function Produtos() {
  const [ativa, setAtiva] = useState(0);
  const tela = produto.telas[ativa];

  return (
    <section id="produtos" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brand">{produto.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-display-md md:text-display-lg">
            Não é promessa: já tem produto nosso rodando.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[var(--radius-panel)] border border-line bg-ink-900">
            <div className="grid lg:grid-cols-2">
              {/* Texto */}
              <div className="p-8 md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-400" />
                  <span className="eyebrow text-forest-400">Em operação</span>
                </span>

                <h3 className="mt-6 font-display text-3xl font-bold text-white md:text-4xl">
                  Nodum <span className="text-forest-400">Barbearia</span>
                </h3>
                <p className="mt-4 text-lg text-neutral-300">{produto.chamada}</p>
                <p className="mt-4 text-neutral-400">{produto.texto}</p>

                <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {produto.destaques.map((destaque) => (
                    <li key={destaque} className="flex items-center gap-2.5 text-sm text-white">
                      <Check className="h-4 w-4 shrink-0 text-forest-400" />
                      {destaque}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={produto.cta.href}
                  size="lg"
                  variant="inverse"
                  className="mt-9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {produto.cta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>

              {/* Telas reais do sistema */}
              <div className="border-t border-white/10 bg-ink-800 p-8 md:p-12 lg:border-l lg:border-t-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-ink-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tela.src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={tela.src}
                        alt={`Nodum Barbearia — ${tela.legenda}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {produto.telas.map((t, i) => (
                    <button
                      key={t.src}
                      type="button"
                      onClick={() => setAtiva(i)}
                      aria-pressed={i === ativa}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150",
                        i === ativa
                          ? "bg-brand text-white"
                          : "border border-white/15 text-neutral-300 hover:border-white/40 hover:text-white"
                      )}
                    >
                      {t.legenda}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-sm text-muted">
            Seu segmento é outro? É esse mesmo o trabalho: construir a ferramenta que a sua
            operação precisa.{" "}
            <a href="#contato" className="font-semibold text-brand underline underline-offset-4">
              Conte o seu caso
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
