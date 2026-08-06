"use client";

import {
  Aurora,
  Marquee,
  Reveal,
  ScrambleText,
  SplitText,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/ui/fx";
import { publico, valores } from "@/lib/content";

export function Sobre() {
  return (
    <section id="sobre" className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-50" />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={valores.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-display-md md:text-display-lg">
              <SplitText text="Uma parceira," animateOnView className="text-white" />{" "}
              <SplitText text="não um fornecedor." animateOnView delay={0.12} className="lit" />
            </h2>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5">
                <div className="card p-6">
                  <p className="eyebrow text-forest-400">Missão</p>
                  <p className="mt-3 text-lg text-white">{valores.missao}</p>
                </div>
                <div className="card p-6">
                  <p className="eyebrow text-muted">Visão</p>
                  <p className="mt-3 text-lg text-white">{valores.visao}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {valores.lista.map((valor) => (
              <StaggerItem key={valor.titulo} className="h-full">
                <TiltCard intensidade={4} className="h-full p-6">
                  <h3 className="text-base font-semibold text-white">{valor.titulo}</h3>
                  <p className="mt-2 text-sm text-body">{valor.texto}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="rule mt-20" />

        <Reveal className="mt-16">
          <ScrambleText text={publico.eyebrow} className="eyebrow text-forest-400" />
          <h2 className="mt-5 max-w-3xl text-display-md">
            <SplitText text={publico.titulo} animateOnView className="text-white" />
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-body">{publico.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Marquee items={publico.segmentos} />
          <Marquee items={[...publico.segmentos].reverse()} duracao={42} className="mt-3" />
        </Reveal>
      </div>
    </section>
  );
}
