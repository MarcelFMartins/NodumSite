"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Aurora, Magnetic, ScrambleText, SplitText } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { hero, site } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // O conteúdo sobe e desaparece enquanto a malha de fundo fica — dá a
  // sensação de o texto "descolar" da rede ao rolar.
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacidade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-surface pt-32 pb-24"
    >
      <div aria-hidden className="absolute inset-0 grid-lines opacity-70" />
      <Aurora />
      <NodeField className="opacity-90" />

      {/* Escurece a base para o conteúdo da próxima seção emendar sem corte. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(180deg, transparent, #121110)" }}
      />

      <motion.div style={{ y, opacity: opacidade }} className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-forest-400"
              style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-400" />
          </span>
          <ScrambleText text={hero.eyebrow} className="eyebrow text-forest-400" />
        </motion.div>

        <h1 className="mt-8 max-w-5xl text-[2.75rem] leading-[1.03] sm:text-[3.75rem] md:text-display-xl lg:text-[5.25rem]">
          <SplitText text={hero.titulo[0]} delay={0.15} className="text-white" />{" "}
          <SplitText text={hero.titulo[1]} delay={0.35} className="lit" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-body md:text-xl"
        >
          {hero.subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Magnetic>
            <ButtonLink href={hero.ctaPrimario.href} size="lg">
              {hero.ctaPrimario.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Magnetic>
          <Magnetic forca={0.2}>
            <ButtonLink href={hero.ctaSecundario.href} size="lg" variant="outline">
              {hero.ctaSecundario.label}
            </ButtonLink>
          </Magnetic>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid max-w-4xl gap-4 sm:grid-cols-3"
        >
          {hero.provas.map((prova, i) => (
            <motion.div
              key={prova.rotulo}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="card card-lit p-6"
              style={{ animation: `float-slow ${9 + i * 2}s ease-in-out ${i * 0.6}s infinite` }}
            >
              <dt className="font-display text-2xl font-bold text-forest-400">{prova.valor}</dt>
              <dd className="mt-1.5 text-sm font-semibold text-white">{prova.rotulo}</dd>
              <dd className="mt-0.5 text-sm text-muted">{prova.nota}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#problema"
        aria-label="Ir para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity: opacidade }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-muted transition-colors hover:text-forest-400"
      >
        <span className="eyebrow text-[10px]">{site.tagline}</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
