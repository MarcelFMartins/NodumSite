"use client";

import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { precoStudio, sistemaStudio } from "@/lib/studio";
import { cn } from "@/lib/utils";

export function PrecoStudio() {
  return (
    <section id="preco" className="section relative overflow-hidden bg-surface">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
      <NodeField className="opacity-50" densidade={0.00006} maxNos={55} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={precoStudio.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={precoStudio.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={precoStudio.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{precoStudio.intro}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {precoStudio.planos.map((plano) => {
            const destaque = "destaque" in plano && plano.destaque;
            return (
              <StaggerItem key={plano.nome} className="h-full">
                <TiltCard
                  intensidade={4}
                  className={cn("flex h-full flex-col p-7", destaque && "border-brand/50 shadow-glow")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{plano.nome}</h3>
                    {destaque && (
                      <span className="rounded-full bg-brand px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-white">
                        Mais escolhido
                      </span>
                    )}
                  </div>
                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-sm text-muted">R$</span>
                    <span className="numeral text-5xl text-white">{plano.valor}</span>
                    <span className="text-sm text-muted">/mês</span>
                  </p>
                  <p className="mt-3 text-sm font-semibold text-forest-400">{plano.equipe}</p>

                  <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
                    {precoStudio.incluso.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-body">
                        <Check className="h-3.5 w-3.5 shrink-0 text-forest-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href={sistemaStudio.cadastro}
                    variant={destaque ? "primary" : "outline"}
                    className="mt-8 w-full"
                  >
                    Quero o {plano.nome}
                  </ButtonLink>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-7 text-sm text-muted">{precoStudio.nota}</p>
        </Reveal>
      </div>
    </section>
  );
}
