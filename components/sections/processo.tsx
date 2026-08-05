"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { processo } from "@/lib/content";

export function Processo() {
  return (
    <section id="processo" className="section bg-canvas">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brand">{processo.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-display-md md:text-display-lg">{processo.titulo}</h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {processo.etapas.map((etapa) => (
            <StaggerItem key={etapa.numero} className="h-full">
              <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6">
                {/* A régua no topo faz as etapas lerem como uma linha do tempo. */}
                <span className="mb-5 block h-0.5 w-10 bg-brand" />
                <span className="numeral text-sm text-brand">{etapa.numero}</span>
                <h3 className="mt-2 text-lg font-semibold">{etapa.titulo}</h3>
                <p className="mt-2 flex-1 text-sm text-body">{etapa.texto}</p>
                <p className="eyebrow mt-5 text-muted">{etapa.prazo}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
