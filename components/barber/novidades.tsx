"use client";

import { Sparkles } from "lucide-react";
import { Marquee, Reveal, ScrambleText, SplitText, Stagger, StaggerItem } from "@/components/ui/fx";
import { barber, novidades } from "@/lib/barber";

/**
 * Prova de que o produto está vivo: as últimas levas publicadas em
 * produção, com data. Um sistema que muda toda semana vende sozinho —
 * desde que cada item seja verdade (a fonte é a aba Atualizações).
 */
export function Novidades() {
  const todos = novidades.levas.flatMap((l) => l.itens);

  return (
    <section id="novidades" className="relative overflow-hidden border-y border-line bg-panel py-16 md:py-20">
      <Marquee items={todos} className="opacity-60" duracao={60} />

      <div className="shell mt-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-forest-400" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-forest-400">
                  Atualizado em {barber.atualizadoEm}
                </span>
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <ScrambleText text={novidades.eyebrow} className="eyebrow mt-6 block text-forest-400" />
            </Reveal>
            <h2 className="mt-4 text-display-md">
              <SplitText text={novidades.titulo[0]} animateOnView className="text-white" />{" "}
              <SplitText text={novidades.titulo[1]} animateOnView delay={0.12} className="lit" />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-5 text-body">{novidades.intro}</p>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {novidades.levas.map((leva, i) => (
              <StaggerItem key={leva.data} className="h-full">
                <div className={`card h-full p-5 ${i === 0 ? "card-lit border-brand/40" : ""}`}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-forest-400">{leva.data}</p>
                    {i === 0 && (
                      <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white">
                        Novo
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {leva.itens.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-body">
                        <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
