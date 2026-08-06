"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp, Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { problema } from "@/lib/content";

/**
 * Anel de progresso que desenha a porcentagem junto com a contagem.
 * Só faz sentido nas duas primeiras estatísticas (83% e 72%), que são
 * proporções de verdade — a terceira é uma contagem absoluta e ganha
 * um traço reto no lugar.
 */
function Anel({ pct }: { pct: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const emVista = useInView(ref, { once: true, margin: "-60px" });
  const raio = 34;
  const volta = 2 * Math.PI * raio;

  return (
    <svg ref={ref} viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
      <circle cx="40" cy="40" r={raio} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
      <motion.circle
        cx="40"
        cy="40"
        r={raio}
        fill="none"
        stroke="#1D9E75"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={volta}
        initial={{ strokeDashoffset: volta }}
        animate={emVista ? { strokeDashoffset: volta * (1 - pct / 100) } : {}}
        transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </svg>
  );
}

export function Problema() {
  return (
    <section id="problema" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text={problema.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text={problema.titulo} animateOnView className="text-white" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{problema.intro}</p>
        </Reveal>

        <div className="rule mt-14" />

        {/* Todo número carrega a fonte — nunca um dado solto. */}
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {problema.stats.map((stat, i) => (
            <StaggerItem key={stat.valor} className="h-full">
              <TiltCard className="h-full p-8">
                <div className="flex items-center gap-5">
                  {i < 2 ? (
                    <Anel pct={parseFloat(stat.valor)} />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center">
                      <span className="h-0.5 w-12 bg-brand" />
                    </div>
                  )}
                  <CountUp
                    value={stat.valor}
                    className="font-mono text-4xl font-bold leading-none text-white"
                  />
                </div>
                <p className="mt-6 text-base leading-relaxed text-body">{stat.descricao}</p>
                <p className="eyebrow mt-5 text-muted">Fonte: {stat.fonte}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-5 grid gap-5 md:grid-cols-2">
          {problema.dores.map((dor) => (
            <StaggerItem key={dor.numero} className="h-full">
              <TiltCard intensidade={5} className="h-full p-8">
                <div className="flex gap-5">
                  <span className="numeral flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-sm text-forest-400 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    {dor.numero}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{dor.titulo}</h3>
                    <p className="mt-2 text-body">{dor.texto}</p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
