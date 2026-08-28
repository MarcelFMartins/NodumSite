"use client";

import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic, Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { preco, sistema } from "@/lib/barber";
import { cn } from "@/lib/utils";

export function Preco() {
  return (
    <section id="preco" className="section relative overflow-hidden bg-surface">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
      <NodeField className="opacity-50" densidade={0.00006} maxNos={55} interativo={false} />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={preco.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={preco.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={preco.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{preco.intro}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {preco.planos.map((plano) => (
            <StaggerItem key={plano.nome} className="h-full">
              <TiltCard
                intensidade={5}
                className={cn(
                  "flex h-full flex-col p-7 sm:p-8",
                  plano.destaque && "border-brand/45 bg-brand/[0.07]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-white">{plano.nome}</h3>
                  {plano.destaque && (
                    <span className="rounded-full bg-brand px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white">
                      Mais escolhido
                    </span>
                  )}
                </div>

                <p className="mt-6 flex items-baseline gap-1 font-display text-white">
                  <span className="text-lg font-semibold text-muted">R$</span>
                  <span className="text-5xl font-bold tracking-tight">{plano.valor}</span>
                  <span className="text-2xl font-bold">{plano.centavos}</span>
                  <span className="ml-1 text-sm font-medium text-muted">/mês</span>
                </p>
                <p className="mt-2 text-sm font-semibold text-forest-400">{plano.limite}</p>

                <ul className="mt-8 space-y-3 border-t border-line pt-7">
                  {plano.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-body">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                        <Check className="h-3 w-3 text-forest-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Magnetic forca={0.12} className="mt-9 block w-full">
                  <ButtonLink
                    href={sistema.cadastro}
                    size="lg"
                    target="_blank"
                    rel="noopener"
                    variant={plano.destaque ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plano.cta}
                  </ButtonLink>
                </Magnetic>
                <p className="mt-3 text-center font-mono text-xs uppercase tracking-widest text-muted">
                  14 dias grátis · sem cartão
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <p className="text-sm text-muted">{preco.rodape}</p>
            <p className="text-sm text-muted">{preco.pagamento}</p>
          </div>

          <p className="mt-8 text-sm text-body">
            Já tem conta?{" "}
            <a
              href={sistema.entrar}
              target="_blank"
              rel="noopener"
              className="font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
            >
              Entrar no sistema
            </a>{" "}
            · Prefere falar com alguém antes?{" "}
            <a
              href={sistema.whatsappTeste}
              target="_blank"
              rel="noopener"
              className="font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
            >
              Chamar no WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
