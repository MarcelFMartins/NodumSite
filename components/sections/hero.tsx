"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SplitText } from "@/components/ui/motion";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    // Painel de abertura em ink: o design system reserva o carvão cheio
    // para os momentos de abertura e fechamento.
    <section className="relative bg-ink-900 pt-32 pb-20 text-white md:pt-40 md:pb-28">
      {/* Malha de linhas finíssimas — dá estrutura sem virar textura. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="shell relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow text-forest-400"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="mt-6 max-w-4xl text-[2.5rem] leading-[1.06] text-white sm:text-[3.25rem] md:text-display-xl">
          <SplitText text={hero.titulo[0]} delay={0.1} className="text-white" />{" "}
          <SplitText text={hero.titulo[1]} delay={0.28} className="text-forest-400" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300"
        >
          {hero.subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.68 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <ButtonLink href={hero.ctaPrimario.href} size="lg">
            {hero.ctaPrimario.label}
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href={hero.ctaSecundario.href}
            size="lg"
            variant="secondary"
            className="border-white/20 bg-transparent text-white hover:border-white/50 hover:bg-white/5"
          >
            {hero.ctaSecundario.label}
          </ButtonLink>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-white/10 sm:grid-cols-3"
        >
          {hero.provas.map((prova) => (
            <div key={prova.rotulo} className="bg-ink-900 p-6">
              <dt className="font-display text-2xl font-bold text-forest-400">{prova.valor}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{prova.rotulo}</dd>
              <dd className="mt-0.5 text-sm text-neutral-400">{prova.nota}</dd>
            </div>
          ))}
        </motion.dl>

        <p className="mt-10 font-display text-sm text-neutral-400">
          &ldquo;{site.tagline}&rdquo;
        </p>
      </div>
    </section>
  );
}
