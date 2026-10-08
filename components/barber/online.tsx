"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic, Reveal, ScrambleText, SplitText, Stagger, StaggerItem } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { Celular } from "@/components/ui/molduras";
import { online, sistema } from "@/lib/barber";
import { cn } from "@/lib/utils";

/**
 * O recurso que mais vende: o cliente marca sozinho. Os três passos
 * avançam sozinhos enquanto a seção está na tela (e param quando a
 * pessoa toca num deles) — o celular mostra o print real de cada etapa.
 */
export function Online() {
  const [ativo, setAtivo] = useState(0);
  const [manual, setManual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { margin: "-20%" });

  useEffect(() => {
    if (manual || !visivel) return;
    const t = setInterval(() => setAtivo((n) => (n + 1) % online.passos.length), 4200);
    return () => clearInterval(t);
  }, [manual, visivel]);

  const passo = online.passos[ativo];

  return (
    <section id="online" className="section relative overflow-hidden bg-surface">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
      <NodeField className="opacity-50" densidade={0.00006} maxNos={50} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <span className="inline-flex items-center gap-2">
            <Globe className="h-4 w-4 text-forest-400" />
            <ScrambleText text={online.eyebrow} className="eyebrow text-forest-400" />
          </span>
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={online.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={online.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{online.intro}</p>
        </Reveal>

        <div ref={ref} className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <ol className="space-y-3">
            {online.passos.map((p, i) => (
              <li key={p.n}>
                <button
                  type="button"
                  onClick={() => {
                    setAtivo(i);
                    setManual(true);
                  }}
                  aria-pressed={i === ativo}
                  className={cn(
                    "card relative w-full overflow-hidden p-5 text-left transition-colors duration-200 sm:p-6",
                    i === ativo ? "border-brand/50 bg-brand/[0.07]" : "hover:border-line-strong"
                  )}
                >
                  <span className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold transition-colors",
                        i === ativo ? "bg-brand text-white" : "bg-white/5 text-muted"
                      )}
                    >
                      {p.n}
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold text-white">{p.titulo}</span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-body">{p.texto}</span>
                    </span>
                  </span>
                  {/* Barra de progresso do passo da vez — some quando a
                      pessoa assume o controle. */}
                  {i === ativo && !manual && visivel && (
                    <motion.span
                      key={`barra-${ativo}`}
                      aria-hidden
                      className="absolute bottom-0 left-0 h-0.5 bg-forest-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4.2, ease: "linear" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ol>

          <div className="relative mx-auto w-full max-w-[19rem]">
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(29,158,117,.4), transparent)" }}
            />
            <Celular>
              <div className="relative aspect-[800/1292] bg-ink-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={passo.src}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={passo.src}
                      alt={`Agendamento online do NodumBarber — ${passo.titulo}`}
                      fill
                      sizes="300px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Celular>
          </div>
        </div>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {online.extras.map((e) => (
            <StaggerItem key={e.titulo} className="h-full">
              <div className="card h-full p-5">
                <h3 className="font-display text-base font-bold text-white">{e.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{e.texto}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <Magnetic className="mt-10 inline-block">
            <ButtonLink href={sistema.cadastro} size="lg">
              {online.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
