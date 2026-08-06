"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { servicos } from "@/lib/content";

export function Servicos() {
  return (
    <section id="servicos" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text="O que fazemos" className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text="Seis frentes," animateOnView className="text-white" />{" "}
          <SplitText text="um resultado só." animateOnView delay={0.12} className="lit" />
        </h2>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => (
            <StaggerItem key={servico.titulo} className="h-full">
              <TiltCard intensidade={6} className="flex h-full flex-col p-7">
                <div className="flex items-start justify-between">
                  <span className="numeral text-sm text-muted transition-colors duration-300 group-hover:text-forest-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-y-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-forest-400 group-hover:opacity-100" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">{servico.titulo}</h3>
                <p className="mt-2.5 flex-1 text-body">{servico.texto}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {servico.entregas.map((entrega) => (
                    <li
                      key={entrega}
                      className="rounded-full border border-line px-3 py-1 text-xs font-medium text-body transition-colors duration-300 group-hover:border-brand/40 group-hover:text-forest-400"
                    >
                      {entrega}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
