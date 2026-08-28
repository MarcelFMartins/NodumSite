"use client";

import { useState } from "react";
import { Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { dinheiro } from "@/lib/barber";

const DIAS = 26;

const real = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function Controle({
  rotulo,
  valor,
  exibicao,
  min,
  max,
  passo = 1,
  onChange,
}: {
  rotulo: string;
  valor: number;
  exibicao: string;
  min: number;
  max: number;
  passo?: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-white">{rotulo}</span>
        <span className="font-mono text-lg font-bold text-forest-400">{exibicao}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={passo}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="faixa mt-3"
        aria-label={rotulo}
      />
    </label>
  );
}

export function Calculadora() {
  const [barbeiros, setBarbeiros] = useState(3);
  const [cortes, setCortes] = useState(8);
  const [ticket, setTicket] = useState(45);
  const [comissao, setComissao] = useState(50);

  const atendimentos = barbeiros * cortes * DIAS;
  const faturamento = atendimentos * ticket;
  const comissoes = (faturamento * comissao) / 100;
  const casa = faturamento - comissoes;

  const saidas = [
    { rotulo: "Faturamento no mês", valor: real(faturamento), destaque: true },
    { rotulo: "Comissões a pagar", valor: real(comissoes), destaque: false },
    { rotulo: "Atendimentos no mês", valor: atendimentos.toLocaleString("pt-BR"), destaque: false },
    {
      rotulo: "Parte da casa",
      valor: real(casa),
      destaque: true,
      nota: "antes de aluguel, produtos e impostos",
    },
  ];

  return (
    <section id="dinheiro" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text={dinheiro.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={dinheiro.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={dinheiro.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{dinheiro.texto}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card mt-12 grid gap-10 rounded-[var(--radius-panel)] p-6 sm:p-9 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-7">
              <Controle
                rotulo="Barbeiros na equipe"
                valor={barbeiros}
                exibicao={String(barbeiros)}
                min={1}
                max={15}
                onChange={setBarbeiros}
              />
              <Controle
                rotulo="Cortes por barbeiro / dia"
                valor={cortes}
                exibicao={String(cortes)}
                min={1}
                max={20}
                onChange={setCortes}
              />
              <Controle
                rotulo="Valor médio do corte"
                valor={ticket}
                exibicao={real(ticket)}
                min={20}
                max={150}
                passo={5}
                onChange={setTicket}
              />
              <Controle
                rotulo="Comissão do barbeiro"
                valor={comissao}
                exibicao={`${comissao}%`}
                min={0}
                max={70}
                passo={5}
                onChange={setComissao}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:content-start">
              {saidas.map((s) => (
                <div
                  key={s.rotulo}
                  className={`rounded-[var(--radius-control)] border p-5 transition-colors duration-300 ${
                    s.destaque
                      ? "border-brand/40 bg-brand/10"
                      : "border-line bg-ink-950/50"
                  }`}
                >
                  <p className="eyebrow text-muted">{s.rotulo}</p>
                  <p
                    className={`mt-2.5 font-mono text-2xl font-bold tabular-nums sm:text-[1.75rem] ${
                      s.destaque ? "text-forest-400" : "text-white"
                    }`}
                  >
                    {s.valor}
                  </p>
                  {s.nota && <p className="mt-1.5 text-xs text-muted">{s.nota}</p>}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm text-muted">{dinheiro.nota}</p>
        </Reveal>
      </div>
    </section>
  );
}
