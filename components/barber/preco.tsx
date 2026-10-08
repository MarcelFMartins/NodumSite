"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic, Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { AnimatePresence, motion } from "framer-motion";
import { preco, sistema } from "@/lib/barber";
import { cn } from "@/lib/utils";

type Meio = "PIX" | "CARTAO";

/** Mesma conta de lib/billing/ciclos.ts do sistema — ver lib/barber.ts. */
function precoCartao(pix: number) {
  return Math.ceil((pix / (1 - preco.taxaCartao) - 90) / 100) * 100 + 90;
}
function precoPeriodo(mensal: number, meses: number, desconto: number) {
  return Math.round(mensal * meses * (1 - desconto));
}
const brl = (c: number) =>
  (c / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function Preco() {
  const [cicloId, setCicloId] = useState("MENSAL");
  const [meio, setMeio] = useState<Meio>("PIX");
  const ciclo = preco.ciclos.find((c) => c.id === cicloId)!;

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

        {/* Os dois seletores mudam os três cartões ao mesmo tempo: o
            dono vê na hora quanto economiza pagando o ano no PIX. */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="fade-x -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <div className="flex w-max gap-1 rounded-full border border-line bg-ink-950/60 p-1">
                {preco.ciclos.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCicloId(c.id)}
                    aria-pressed={c.id === cicloId}
                    className={cn(
                      "relative inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors",
                      c.id === cicloId ? "text-white" : "text-muted hover:text-white"
                    )}
                  >
                    {c.id === cicloId && (
                      <motion.span layoutId="ciclo-preco" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                    )}
                    <span className="relative z-10">{c.label}</span>
                    {c.desconto > 0 && (
                      <span className="relative z-10 font-mono text-[10px] text-forest-300">−{Math.round(c.desconto * 100)}%</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex w-max gap-1 rounded-full border border-line bg-ink-950/60 p-1">
              {(["PIX", "CARTAO"] as Meio[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMeio(m)}
                  aria-pressed={m === meio}
                  className={cn(
                    "min-h-10 rounded-full px-4 text-sm font-medium transition-colors",
                    m === meio ? "bg-white/10 text-white" : "text-muted hover:text-white"
                  )}
                >
                  {m === "PIX" ? "PIX · sem taxa" : "Cartão · renova sozinho"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
          {preco.planos.map((plano) => {
            const mensal = meio === "CARTAO" ? precoCartao(plano.pixCentavos) : plano.pixCentavos;
            const total = precoPeriodo(mensal, ciclo.meses, ciclo.desconto);
            const porMes = Math.round(total / ciclo.meses);
            const economia = mensal * ciclo.meses - total;
            const [reais, centavos] = brl(porMes).split(",");
            return (
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
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={`${reais}-${meio}-${cicloId}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.22 }}
                      className="text-5xl font-bold tracking-tight"
                    >
                      {reais}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-2xl font-bold">,{centavos}</span>
                  <span className="ml-1 text-sm font-medium text-muted">/mês</span>
                </p>
                <p className="mt-1 min-h-5 text-xs text-muted">
                  {ciclo.meses === 1
                    ? meio === "PIX" ? "no PIX, pago mês a mês" : "no cartão, renovação mensal"
                    : `R$ ${brl(total)} a cada ${ciclo.meses} meses · economia de R$ ${brl(economia)}`}
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
            );
          })}
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
