"use client";

import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { porque } from "@/lib/barber";

export function Porque() {
  return (
    <section id="porque" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text={porque.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-4xl text-display-md md:text-display-lg">
          <SplitText text={porque.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={porque.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{porque.intro}</p>
        </Reveal>

        <div className="rule mt-14" />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {porque.cenas.map((cena, i) => (
            <StaggerItem key={cena.titulo} className="h-full">
              <TiltCard intensidade={5} className="h-full p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="numeral text-sm text-forest-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow text-muted">{cena.quando}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{cena.titulo}</h3>
                <p className="mt-3 text-body">{cena.texto}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
