"use client";

import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Aurora, Magnetic, Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { fechamentoAgenda, zapAgenda } from "@/lib/agenda";
import { site } from "@/lib/content";

export function FechamentoAgenda() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <Aurora />
      <NodeField className="opacity-70" densidade={0.00007} maxNos={70} />

      <div className="shell relative max-w-3xl text-center">
        <ScrambleText text={fechamentoAgenda.eyebrow} className="eyebrow text-forest-400" />

        <h2 className="mt-5 text-display-md md:text-display-lg">
          <SplitText text={fechamentoAgenda.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={fechamentoAgenda.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-body">{fechamentoAgenda.texto}</p>

          <div className="mt-10 flex justify-center">
            <Magnetic className="w-full sm:w-auto">
              <ButtonLink
                href={zapAgenda(site.whatsapp)}
                size="lg"
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto"
              >
                Falar com a Nodum
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
