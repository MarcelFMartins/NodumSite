"use client";

import { Check } from "lucide-react";
import { Aurora, Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { tarefasAgenda } from "@/lib/agenda";

export function TarefasAgenda() {
  return (
    <section id="tarefas" className="section relative overflow-hidden bg-panel">
      <Aurora className="opacity-60" />

      <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <ScrambleText text={tarefasAgenda.eyebrow} className="eyebrow text-forest-400" />
          </Reveal>
          <h2 className="mt-5 text-display-md md:text-display-lg">
            <SplitText text={tarefasAgenda.titulo[0]} animateOnView className="text-white" />{" "}
            <SplitText text={tarefasAgenda.titulo[1]} animateOnView delay={0.12} className="lit" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-body">{tarefasAgenda.texto}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="card space-y-4 rounded-[var(--radius-panel)] p-7 sm:p-9">
            {tarefasAgenda.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                  <Check className="h-3 w-3 text-forest-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
