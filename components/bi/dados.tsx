"use client";

import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { dadosBi } from "@/lib/bi";

export function DadosBi() {
  return (
    <section id="dados" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text={dadosBi.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={dadosBi.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={dadosBi.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{dadosBi.intro}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
          {dadosBi.passos.map((passo) => (
            <StaggerItem key={passo.numero} className="h-full">
              <TiltCard intensidade={5} className="flex h-full flex-col p-6 sm:p-7">
                <span className="numeral text-3xl font-bold text-line-strong transition-colors duration-300 group-hover:text-forest-400">
                  {passo.numero}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{passo.titulo}</h3>
                <p className="mt-2.5 flex-1 text-body">{passo.texto}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="card mt-8 max-w-3xl p-6 text-sm leading-relaxed text-body">
            {dadosBi.cobertura}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
