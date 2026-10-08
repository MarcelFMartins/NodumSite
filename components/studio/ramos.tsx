"use client";

import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { ramosStudio } from "@/lib/studio";

export function RamosStudio() {
  return (
    <section id="ramos" className="section bg-panel">
      <div className="shell">
        <Reveal>
          <ScrambleText text={ramosStudio.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-4xl text-display-md md:text-display-lg">
          <SplitText text={ramosStudio.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={ramosStudio.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{ramosStudio.intro}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ramosStudio.ramos.map((ramo, i) => (
            <StaggerItem key={ramo.nome} className="h-full">
              <TiltCard intensidade={5} className="card-lit h-full p-6">
                <span className="numeral text-sm text-forest-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{ramo.nome}</h3>
                <p className="mt-2 text-sm text-body">
                  A equipe vira <span className="font-semibold text-forest-400">{ramo.quem}</span>
                </p>
                <p className="mt-4 font-mono text-xs text-muted">{ramo.exemplo}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
