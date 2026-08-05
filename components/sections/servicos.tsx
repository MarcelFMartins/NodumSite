"use client";

import { Reveal, SpotlightCard, Stagger, StaggerItem } from "@/components/ui/motion";
import { servicos } from "@/lib/content";

export function Servicos() {
  return (
    <section id="servicos" className="section bg-canvas">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brand">O que fazemos</p>
          <h2 className="mt-4 max-w-3xl text-display-md md:text-display-lg">
            Seis frentes, um resultado só: a empresa rodando com método.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => (
            <StaggerItem key={servico.titulo} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-7">
                <span className="numeral text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{servico.titulo}</h3>
                <p className="mt-2 flex-1 text-body">{servico.texto}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {servico.entregas.map((entrega) => (
                    <li
                      key={entrega}
                      className="rounded-full bg-jade-100 px-3 py-1 text-xs font-medium text-forest-500"
                    >
                      {entrega}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
