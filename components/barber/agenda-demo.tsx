"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Aurora, Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { agenda, sistema } from "@/lib/barber";
import { cn } from "@/lib/utils";

const min = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const hhmm = (t: number) =>
  `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;

export function AgendaDemo() {
  const { demo } = agenda;
  const [escolhido, setEscolhido] = useState<number | null>(null);

  /**
   * A regra é a mesma do sistema: um horário só entra na lista se o
   * atendimento inteiro couber antes do próximo compromisso. Não basta
   * começar antes das 15:00 — tem que TERMINAR antes.
   */
  const horarios = useMemo(() => {
    const inicioOcupado = min(demo.ocupado.inicio);
    const fimOcupado = min(demo.ocupado.fim);
    const fecha = min(demo.fecha);
    const lista = [];
    for (let t = min(demo.abre); t + demo.duracao <= fecha; t += 15) {
      const fim = t + demo.duracao;
      const colide = t < fimOcupado && fim > inicioOcupado;
      lista.push({ inicio: t, fim, cabe: !colide });
    }
    return lista;
  }, [demo]);

  const sel = horarios.find((h) => h.inicio === escolhido);

  return (
    <section id="agenda" className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-60" />

      <div className="shell relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <ScrambleText text={agenda.eyebrow} className="eyebrow text-forest-400" />
          </Reveal>

          <h2 className="mt-5 text-display-md md:text-display-lg">
            <SplitText text={agenda.titulo[0]} animateOnView className="text-white" />{" "}
            <SplitText text={agenda.titulo[1]} animateOnView delay={0.12} className="lit" />
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-body">{agenda.texto}</p>
            <p className="mt-4 text-body">{agenda.detalhe}</p>
            <p className="mt-4 text-muted">{agenda.fecho}</p>

            <ul className="mt-8 space-y-2.5 border-t border-line pt-7">
              {agenda.extras.map((extra) => (
                <li key={extra} className="flex items-start gap-3 text-sm text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Check className="h-3 w-3 text-forest-400" />
                  </span>
                  {extra}
                </li>
              ))}
            </ul>

            <ButtonLink
              href={sistema.cadastro}
              size="lg"
              target="_blank"
              rel="noopener"
              className="mt-9"
            >
              {agenda.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card rounded-[var(--radius-panel)] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="eyebrow text-forest-400">Quarta-feira</p>
                <p className="mt-1.5 font-semibold text-white">{demo.servico}</p>
              </div>
              <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                demonstração
              </span>
            </div>

            <div className="mt-6 rounded-[var(--radius-control)] border border-line-strong bg-ink-950/60 p-4">
              <p className="eyebrow text-muted">Já na agenda</p>
              <div className="mt-2.5 flex items-baseline gap-3">
                <span className="font-mono text-2xl font-bold text-white">
                  {demo.ocupado.inicio}
                </span>
                <span className="text-sm text-body">
                  {demo.ocupado.cliente} · sai {demo.ocupado.fim}
                </span>
              </div>
            </div>

            <p className="mt-7 eyebrow text-muted">Onde cabe o cliente novo?</p>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {horarios.map((h) => (
                <button
                  key={h.inicio}
                  type="button"
                  onClick={() => setEscolhido(h.inicio)}
                  aria-pressed={escolhido === h.inicio}
                  className={cn(
                    "relative rounded-[var(--radius-control)] border px-2 py-3 font-mono text-sm transition-all duration-200",
                    h.cabe
                      ? "border-brand/40 bg-brand/10 text-forest-400 hover:border-brand hover:bg-brand/20"
                      : "border-line bg-ink-950/40 text-neutral-600 line-through",
                    escolhido === h.inicio && "ring-2 ring-brand ring-offset-2 ring-offset-[#1c1b1a]"
                  )}
                >
                  {hhmm(h.inicio)}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm border border-brand/40 bg-brand/20" /> cabe
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm border border-line bg-ink-950" /> não cabe
              </span>
            </div>

            <motion.div
              key={escolhido ?? "vazio"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="mt-6 rounded-[var(--radius-control)] border border-line bg-ink-950/60 p-4 text-sm"
            >
              {!sel ? (
                <p className="text-muted">Toque num horário para ver a conta que o sistema faz.</p>
              ) : sel.cabe ? (
                <p className="flex items-start gap-3 text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Check className="h-3 w-3 text-forest-400" />
                  </span>
                  <span>
                    Começa {hhmm(sel.inicio)} e termina{" "}
                    <strong className="text-white">{hhmm(sel.fim)}</strong>
                    {sel.fim <= min(demo.ocupado.inicio)
                      ? ` — o ${demo.ocupado.cliente} chega ${demo.ocupado.inicio} e não espera nada.`
                      : ` — depois que o ${demo.ocupado.cliente} sai, sem sobreposição.`}
                  </span>
                </p>
              ) : (
                <p className="flex items-start gap-3 text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <X className="h-3 w-3 text-neutral-400" />
                  </span>
                  <span>
                    Começa {hhmm(sel.inicio)} e só termina{" "}
                    <strong className="text-white">{hhmm(sel.fim)}</strong> — invade o horário do{" "}
                    {demo.ocupado.cliente}. Por isso o sistema não oferece.
                  </span>
                </p>
              )}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
