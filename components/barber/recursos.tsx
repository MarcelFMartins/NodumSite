"use client";

import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { recursos } from "@/lib/barber";

export function Recursos() {
  return (
    <section id="recursos" className="section bg-panel">
      <div className="shell">
        <Reveal>
          <ScrambleText text={recursos.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={recursos.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={recursos.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{recursos.intro}</p>
        </Reveal>

        {/* Os recursos vêm agrupados por assunto: a lista corrida de nove
            cartões não deixava claro que o sistema cobre três frentes
            diferentes (a agenda, o dinheiro e o controle). */}
        {recursos.grupos.map((grupo, g) => (
          <div key={grupo.nome} className={g === 0 ? "mt-14" : "mt-12"}>
            <Reveal>
              <div className="flex items-center gap-5">
                <span className="numeral text-sm text-forest-400">
                  {String(g + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-bold text-white">{grupo.nome}</h3>
                <span className="h-px flex-1 bg-line" />
              </div>
            </Reveal>

            <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {grupo.itens.map((item) => (
                <StaggerItem key={item.titulo} className="h-full">
                  <TiltCard intensidade={6} className="flex h-full flex-col p-6 sm:p-7">
                    <h4 className="text-lg font-semibold text-white">{item.titulo}</h4>
                    <p className="mt-2.5 flex-1 text-body">{item.texto}</p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </section>
  );
}
