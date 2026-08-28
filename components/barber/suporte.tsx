"use client";

import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { suporte } from "@/lib/barber";

export function Suporte() {
  return (
    <section className="section bg-panel">
      <div className="shell">
        <Reveal>
          <ScrambleText text={suporte.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={suporte.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={suporte.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{suporte.intro}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {suporte.itens.map((item, i) => (
            <StaggerItem key={item.titulo} className="h-full">
              <TiltCard intensidade={5} className="flex h-full flex-col p-6 sm:p-7">
                <span className="numeral text-sm text-muted transition-colors duration-300 group-hover:text-forest-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.titulo}</h3>
                <p className="mt-2.5 flex-1 text-body">{item.texto}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
