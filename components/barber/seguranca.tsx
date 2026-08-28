"use client";

import { ShieldCheck } from "lucide-react";
import { Aurora, Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { seguranca } from "@/lib/barber";

export function Seguranca() {
  return (
    <section className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-50" />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={seguranca.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={seguranca.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={seguranca.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {seguranca.itens.map((item) => (
            <StaggerItem key={item.titulo} className="h-full">
              <TiltCard intensidade={5} className="flex h-full flex-col p-6 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-brand/10">
                  <ShieldCheck className="h-4 w-4 text-forest-400" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.titulo}</h3>
                <p className="mt-2.5 flex-1 text-body">{item.texto}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
