"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, RotateCcw, Scissors } from "lucide-react";
import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { caixa } from "@/lib/barber";
import { cn } from "@/lib/utils";

/**
 * Checkout + planos. O print real do "Concluir atendimento" mostra que
 * fechar a conta é uma tela só; ao lado, uma demonstração do plano de
 * cortes: cada toque gasta um crédito, e quando acaba aparecem as três
 * saídas que o sistema oferece de verdade.
 */
export function Caixa() {
  return (
    <section id="caixa" className="section bg-panel">
      <div className="shell">
        <Reveal>
          <ScrambleText text={caixa.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={caixa.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={caixa.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{caixa.intro}</p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
          <Reveal>
            <TiltCard intensidade={4} brilho={false} className="overflow-hidden p-2">
              <Image
                src={caixa.src}
                alt="Concluir atendimento no NodumBarber: produtos, desconto, gorjeta, forma de pagamento dividida e total a cobrar"
                width={1000}
                height={1718}
                sizes="(max-width: 1024px) 92vw, 40vw"
                className="w-full rounded-xl"
              />
            </TiltCard>
          </Reveal>

          <div>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {caixa.pontos.map((p) => (
                <StaggerItem key={p.titulo} className="h-full">
                  <div className="card h-full p-5">
                    <h3 className="font-display text-base font-bold text-white">{p.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{p.texto}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <DemoPlano />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoPlano() {
  const { plano } = caixa;
  const [usados, setUsados] = useState(1);
  const restam = plano.demo.total - usados;
  const acabou = restam <= 0;

  return (
    <div className="card card-lit mt-6 p-6 sm:p-7">
      <h3 className="font-display text-xl font-bold text-white">{plano.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{plano.texto}</p>

      <div className="mt-6 rounded-[var(--radius-control)] border border-line bg-ink-950/60 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">{plano.demo.nome}</p>
            <p className="font-mono text-xs text-muted">{plano.demo.valor} · validade 30 dias</p>
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest",
              acabou ? "bg-white/10 text-white" : "bg-brand/15 text-forest-400"
            )}
          >
            {acabou ? "Créditos acabaram" : `${restam} de ${plano.demo.total} restantes`}
          </span>
        </div>

        <div className="mt-5 flex gap-2.5" aria-label={`${usados} de ${plano.demo.total} cortes usados`}>
          {Array.from({ length: plano.demo.total }).map((_, i) => (
            <motion.span
              key={i}
              layout
              className={cn(
                "flex h-11 flex-1 items-center justify-center rounded-lg border transition-colors duration-300",
                i < usados ? "border-line bg-white/5 text-muted" : "border-brand/50 bg-brand/15 text-forest-400"
              )}
            >
              {i < usados ? <Check className="h-4 w-4" /> : <Scissors className="h-4 w-4" />}
            </motion.span>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {acabou ? (
            <motion.div
              key="acabou"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-5 grid gap-2 sm:grid-cols-3"
            >
              {["Renovar o mesmo plano", "Trocar por outro plano", "Cobrar só o serviço"].map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setUsados(0)}
                  className="min-h-11 rounded-lg border border-line px-3 text-xs font-semibold text-white transition-colors hover:border-brand hover:bg-brand/10"
                >
                  {o}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div key="usar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setUsados((u) => u + 1)}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
              >
                <Minus className="h-4 w-4" />
                Usar 1 crédito — R$ 0,00
              </button>
              <button
                type="button"
                onClick={() => setUsados(0)}
                className="inline-flex min-h-11 items-center gap-1.5 px-2 text-xs text-muted hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Recomeçar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ul className="mt-6 space-y-2.5">
        {plano.itens.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-body">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
              <Check className="h-3 w-3 text-forest-400" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
