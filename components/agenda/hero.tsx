"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Aurora, Magnetic, ScrambleText, SplitText } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { heroAgenda, zapAgenda } from "@/lib/agenda";
import { site } from "@/lib/content";
import { useTelaPequena } from "@/lib/hooks";

export function HeroAgenda() {
  const ref = useRef<HTMLElement>(null);
  const pequena = useTelaPequena();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yTexto = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yTela = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacidade = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-surface pb-20 pt-32 md:pb-28 md:pt-40">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-70" />
      <Aurora />
      <NodeField className="opacity-80" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(180deg, transparent, #121110)" }}
      />

      <motion.div style={{ y: yTexto, opacity: opacidade }} className="shell relative z-10">
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
          <ScrambleText text={heroAgenda.eyebrow} className="eyebrow text-forest-400" />
        </motion.div>

        <h1 className="mt-8 max-w-4xl text-[2.4rem] leading-[1.05] sm:text-[3.1rem] md:text-display-xl lg:text-[4.2rem]">
          <SplitText text={heroAgenda.titulo[0]} delay={0.15} className="text-white" />{" "}
          <SplitText text={heroAgenda.titulo[1]} delay={0.35} className="lit" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-body md:text-xl"
        >
          {heroAgenda.subtitulo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Magnetic className="w-full sm:w-auto">
            <ButtonLink
              href={zapAgenda(site.whatsapp)}
              size="lg"
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto"
            >
              Falar com a Nodum
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Magnetic>
          <Magnetic forca={0.2} className="w-full sm:w-auto">
            <ButtonLink href="#pordentro" size="lg" variant="outline" className="w-full sm:w-auto">
              Ver o sistema por dentro
            </ButtonLink>
          </Magnetic>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5"
        >
          {heroAgenda.selos.map((selo) => (
            <li key={selo} className="flex items-center gap-2 text-sm text-muted">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand/15">
                <Check className="h-2.5 w-2.5 text-forest-400" />
              </span>
              {selo}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        style={pequena ? undefined : { y: yTela }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
        className="shell relative z-10 mt-14 md:mt-20"
      >
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[2.5rem] opacity-70 blur-3xl"
            style={{
              background: "radial-gradient(50% 50% at 50% 45%, rgba(29,158,117,.35), transparent 70%)",
            }}
          />
          <Image
            src="/img/agenda/painel.webp"
            alt="Painel da Agenda Interna Nodum: tarefas em aberto, atrasadas, vencendo e concluídas, com gráficos por status e prioridade"
            width={1800}
            height={1069}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
            className="relative w-full rounded-[var(--radius-panel)]"
          />
        </div>
      </motion.div>

      <div className="shell relative z-10 mt-14 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {heroAgenda.provas.map((prova, i) => (
          <motion.div
            key={prova.rotulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="card card-lit p-5 sm:p-6"
          >
            <p className="font-mono text-4xl font-bold leading-none text-forest-400">{prova.valor}</p>
            <p className="mt-3 text-sm font-semibold text-white">{prova.rotulo}</p>
            <p className="mt-1 text-sm text-muted">{prova.nota}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
