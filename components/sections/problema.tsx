"use client";

import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { problema } from "@/lib/content";

export function Problema() {
  return (
    <section id="problema" className="section bg-canvas">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brand">{problema.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-display-md md:text-display-lg">
            {problema.titulo}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-body">{problema.intro}</p>
        </Reveal>

        {/* Todo número carrega a fonte — nunca um dado solto. */}
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {problema.stats.map((stat) => (
            <StaggerItem key={stat.valor}>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-sm)]">
                <CountUp
                  value={stat.valor}
                  className="font-mono text-[3.5rem] font-bold leading-none text-brand"
                />
                <p className="mt-4 text-base leading-relaxed text-ink">{stat.descricao}</p>
                <p className="eyebrow mt-4 text-muted">Fonte: {stat.fonte}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-6 grid gap-5 md:grid-cols-2">
          {problema.dores.map((dor) => (
            <StaggerItem key={dor.numero}>
              <div className="flex h-full gap-5 rounded-[var(--radius-card)] border border-line bg-white p-7">
                <span className="numeral flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade-100 text-sm text-forest-500">
                  {dor.numero}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{dor.titulo}</h3>
                  <p className="mt-2 text-body">{dor.texto}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
