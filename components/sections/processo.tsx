"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { processo } from "@/lib/content";

export function Processo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  // Aqui a numeração e o trilho significam algo: as etapas acontecem
  // nessa ordem, e a linha marca o avanço da leitura pela sequência.
  const largura = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="processo" className="section bg-surface">
      <div className="shell">
        <Reveal>
          <ScrambleText text={processo.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text="Do primeiro café" animateOnView className="text-white" />{" "}
          <SplitText text="ao sistema rodando." animateOnView delay={0.12} className="lit" />
        </h2>

        <div ref={ref} className="mt-14">
          <div aria-hidden className="relative h-px w-full overflow-hidden bg-line">
            <motion.div style={{ width: largura }} className="h-px bg-brand-lit" />
          </div>

          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processo.etapas.map((etapa) => (
              <StaggerItem key={etapa.numero} className="h-full">
                <TiltCard intensidade={5} className="flex h-full flex-col p-6">
                  <span className="numeral text-3xl font-bold text-line-strong transition-colors duration-300 group-hover:text-forest-400">
                    {etapa.numero}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{etapa.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm text-body">{etapa.texto}</p>
                  <p className="eyebrow mt-6 text-muted">{etapa.prazo}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
