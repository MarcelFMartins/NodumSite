"use client";

import { Marquee, Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { publico, valores } from "@/lib/content";

export function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brand">{valores.eyebrow}</p>
        </Reveal>

        <div className="mt-4 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-display-md md:text-display-lg">
              Uma parceira, não um fornecedor.
            </h2>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-brand pl-5">
                <p className="eyebrow text-muted">Missão</p>
                <p className="mt-2 text-lg text-ink">{valores.missao}</p>
              </div>
              <div className="border-l-2 border-line pl-5">
                <p className="eyebrow text-muted">Visão</p>
                <p className="mt-2 text-lg text-ink">{valores.visao}</p>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {valores.lista.map((valor) => (
              <StaggerItem key={valor.titulo}>
                <div className="rounded-[var(--radius-card)] bg-canvas p-6">
                  <h3 className="text-base font-semibold">{valor.titulo}</h3>
                  <p className="mt-1.5 text-sm text-body">{valor.texto}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-20">
          <p className="eyebrow text-brand">{publico.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-display-md">{publico.titulo}</h2>
          <p className="mt-4 max-w-2xl text-lg text-body">{publico.intro}</p>
          <Marquee items={publico.segmentos} className="mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
