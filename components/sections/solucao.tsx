"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { Aurora, Reveal, ScrambleText, SplitText, Stagger, StaggerItem, TiltCard } from "@/components/ui/fx";
import { solucao } from "@/lib/content";

export function Solucao() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });

  // O trilho vertical se preenche conforme os pilares passam pela tela:
  // as quatro etapas são uma sequência, e a linha mostra onde você está.
  const alturaTrilho = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="solucao" className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-60" />

      <div className="shell relative">
        <Reveal>
          <ScrambleText text={solucao.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-3xl text-display-md md:text-display-lg">
          <SplitText text="Gestão e tecnologia" animateOnView className="text-white" />{" "}
          <SplitText text="andam juntas." animateOnView delay={0.15} className="lit" />
        </h2>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-body">{solucao.intro}</p>
        </Reveal>

        <div ref={ref} className="relative mt-16 lg:pl-16">
          {/* Trilho só no desktop: no mobile a coluna única já é a sequência. */}
          <div aria-hidden className="absolute left-5 top-0 hidden h-full w-px bg-line lg:block">
            <motion.div style={{ height: alturaTrilho }} className="w-px bg-brand-lit" />
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2">
            {solucao.pilares.map((pilar) => (
              <StaggerItem key={pilar.numero} className="h-full">
                <TiltCard className="h-full p-8 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="numeral text-sm text-forest-400">{pilar.numero}</span>
                    <span className="h-px w-12 bg-line transition-all duration-500 group-hover:w-20 group-hover:bg-brand" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">{pilar.titulo}</h3>
                  <p className="mt-3 text-body">{pilar.texto}</p>

                  <ul className="mt-7 space-y-2.5 border-t border-line pt-6">
                    {pilar.itens.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-body">
                        {/* O check é o único glifo não-textual que a marca usa. */}
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                          <Check className="h-3 w-3 text-forest-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
