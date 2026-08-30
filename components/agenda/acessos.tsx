"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { acessosAgenda } from "@/lib/agenda";
import { cn } from "@/lib/utils";

export function AcessosAgenda() {
  const [ativo, setAtivo] = useState(0);
  const perfil = acessosAgenda.perfis[ativo];

  return (
    <section id="acessos" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text={acessosAgenda.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={acessosAgenda.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={acessosAgenda.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{acessosAgenda.intro}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
            <div className="flex gap-2 lg:flex-col">
              {acessosAgenda.perfis.map((p, i) => (
                <button
                  key={p.aba}
                  type="button"
                  onClick={() => setAtivo(i)}
                  aria-pressed={i === ativo}
                  className={cn(
                    "relative flex min-h-11 items-center whitespace-nowrap rounded-[var(--radius-control)] px-5 py-3 text-left text-sm font-semibold transition-colors duration-200 lg:text-base",
                    i === ativo ? "text-white" : "text-muted hover:text-white"
                  )}
                >
                  {i === ativo && (
                    <motion.span
                      layoutId="aba-acesso-agenda"
                      className="absolute inset-0 rounded-[var(--radius-control)] border border-brand/40 bg-brand/15"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{p.aba}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={perfil.aba}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="card rounded-[var(--radius-panel)] p-6 sm:p-9"
              >
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{perfil.titulo}</h3>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {perfil.pode.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                        <Check className="h-3 w-3 text-forest-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {perfil.naoPode.length > 0 && (
                  <ul className="mt-7 grid gap-3 border-t border-line pt-7 sm:grid-cols-2">
                    {perfil.naoPode.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                          <X className="h-3 w-3 text-neutral-500" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
