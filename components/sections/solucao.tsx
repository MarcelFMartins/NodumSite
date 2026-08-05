"use client";

import { Check } from "lucide-react";
import { Reveal, SpotlightCard, Stagger, StaggerItem } from "@/components/ui/motion";
import { solucao } from "@/lib/content";

export function Solucao() {
  return (
    <section id="solucao" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brand">{solucao.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-display-md md:text-display-lg">{solucao.titulo}</h2>
          <p className="mt-5 max-w-2xl text-lg text-body">{solucao.intro}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {solucao.pilares.map((pilar) => (
            <StaggerItem key={pilar.numero} className="h-full">
              <SpotlightCard className="h-full p-8">
                <span className="numeral text-sm text-brand">{pilar.numero}</span>
                <h3 className="mt-4 text-xl font-semibold">{pilar.titulo}</h3>
                <p className="mt-3 text-body">{pilar.texto}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {pilar.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                      {/* O check é o único glifo não-textual que a marca usa. */}
                      <Check className="h-4 w-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
