"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Aurora, Reveal, ScrambleText, SplitText, TiltCard } from "@/components/ui/fx";
import { JanelaNavegador } from "@/components/ui/molduras";
import { tarefasAgenda } from "@/lib/agenda";
import { cn } from "@/lib/utils";

export function TarefasAgenda() {
  const [ativa, setAtiva] = useState(0);
  const tela = tarefasAgenda.telas[ativa];
  return (
    <section id="tarefas" className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-60" />

      <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <ScrambleText text={tarefasAgenda.eyebrow} className="eyebrow text-forest-400" />
          </Reveal>
          <h2 className="mt-5 text-display-md md:text-display-lg">
            <SplitText text={tarefasAgenda.titulo[0]} animateOnView className="text-white" />{" "}
            <SplitText text={tarefasAgenda.titulo[1]} animateOnView delay={0.12} className="lit" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-body">{tarefasAgenda.texto}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="card space-y-4 rounded-[var(--radius-panel)] p-7 sm:p-9">
            {tarefasAgenda.itens.map((item) => (
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

      {/* As três visões das mesmas tarefas, em print real — troca com um
          toque, como no próprio sistema. */}
      <div className="shell relative mt-14">
        <Reveal>
          <div className="flex w-max gap-1 rounded-full border border-line bg-ink-950/60 p-1">
            {tarefasAgenda.telas.map((t, i) => (
              <button
                key={t.aba}
                type="button"
                onClick={() => setAtiva(i)}
                aria-pressed={i === ativa}
                className={cn("relative min-h-10 rounded-full px-5 text-sm font-medium transition-colors", i === ativa ? "text-white" : "text-muted hover:text-white")}
              >
                {i === ativa && <motion.span layoutId="aba-tarefas" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative z-10">{t.aba}</span>
              </button>
            ))}
          </div>
          <TiltCard intensidade={3} brilho={false} className="mt-6 p-0">
            <JanelaNavegador endereco="Agenda Interna Nodum · Todas as tarefas">
              <div className="relative aspect-[16/10] bg-ink-950">
                <AnimatePresence mode="wait">
                  <motion.div key={tela.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                    <Image src={tela.src} alt={`Agenda Interna Nodum — tarefas em ${tela.aba}`} fill sizes="(max-width: 1280px) 94vw, 1200px" className="object-cover object-top" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </JanelaNavegador>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
