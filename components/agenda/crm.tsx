"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal, ScrambleText, SplitText, TiltCard } from "@/components/ui/fx";
import { JanelaNavegador } from "@/components/ui/molduras";
import { NodeField } from "@/components/ui/node-field";
import { crmAgenda } from "@/lib/agenda";

export function CrmAgenda() {
  return (
    <section id="crm" className="section relative overflow-hidden bg-surface">
      <NodeField className="opacity-40" densidade={0.00005} maxNos={45} interativo={false} />

      <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal delay={0.1} className="lg:order-2">
          <ul className="card space-y-4 rounded-[var(--radius-panel)] p-7 sm:p-9">
            {crmAgenda.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                  <Check className="h-3 w-3 text-forest-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:order-1">
          <Reveal>
            <ScrambleText text={crmAgenda.eyebrow} className="eyebrow text-forest-400" />
          </Reveal>
          <h2 className="mt-5 text-display-md md:text-display-lg">
            <SplitText text={crmAgenda.titulo[0]} animateOnView className="text-white" />{" "}
            <SplitText text={crmAgenda.titulo[1]} animateOnView delay={0.12} className="lit" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-body">{crmAgenda.texto}</p>
          </Reveal>
        </div>
      </div>

      <div className="shell relative mt-14">
        <Reveal>
          <TiltCard intensidade={3} brilho={false} className="p-0">
            <JanelaNavegador endereco="Agenda Interna Nodum · Funil">
              <Image src={crmAgenda.src} alt="Funil de vendas da Agenda Interna Nodum: negócios em aberto, ganhos, perdidos e taxa de conversão" width={1600} height={1000} sizes="(max-width: 1280px) 94vw, 1200px" className="w-full" />
            </JanelaNavegador>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
