"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Celular, JanelaNavegador } from "@/components/ui/molduras";
import { Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { blocosStudio } from "@/lib/studio";
import { cn } from "@/lib/utils";

type Bloco = (typeof blocosStudio)[number];

/** Texto de um lado, print real do outro — alternando a cada bloco. */
function BlocoStudio({ bloco, invertido }: { bloco: Bloco; invertido: boolean }) {
  const celular = "celular" in bloco ? bloco.celular : undefined;

  return (
    <section id={bloco.id} className={cn("section", invertido ? "bg-panel" : "bg-surface")}>
      <div className="shell">
        <Reveal>
          <ScrambleText text={bloco.eyebrow} className="eyebrow text-forest-400" />
        </Reveal>

        <h2 className="mt-5 max-w-4xl text-display-md md:text-display-lg">
          <SplitText text={bloco.titulo[0]} animateOnView className="text-white" />{" "}
          <SplitText text={bloco.titulo[1]} animateOnView delay={0.12} className="lit" />
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-14">
          <Reveal delay={0.1} className={cn(invertido && "lg:order-2")}>
            <p className="text-lg text-body">{bloco.texto}</p>
            <ul className="mt-8 grid gap-3">
              {bloco.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Check className="h-3 w-3 text-forest-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className={cn("relative", invertido && "lg:order-1", celular && "pb-10 sm:pb-0")}>
            <JanelaNavegador endereco={`NodumStudio · ${bloco.eyebrow.replace(/^Novo · /, "").split(",")[0]}`}>
              <Image
                src={bloco.src}
                alt={bloco.alt}
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 94vw, 58vw"
                className="w-full"
              />
            </JanelaNavegador>
            {celular && (
              <div className="absolute -bottom-2 right-3 w-[36%] max-w-[13rem] sm:-bottom-10 sm:-right-4">
                <Celular>
                  <Image
                    src={celular}
                    alt="Página de agendamento online do estúdio no celular: a cliente escolhe se já é cliente ou é a primeira vez"
                    width={800}
                    height={840}
                    sizes="13rem"
                    className="w-full"
                  />
                </Celular>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function BlocosStudio() {
  return (
    <>
      {blocosStudio.map((bloco, i) => (
        <BlocoStudio key={bloco.id} bloco={bloco} invertido={i % 2 === 1} />
      ))}
    </>
  );
}
