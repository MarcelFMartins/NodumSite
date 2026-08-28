"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { faq } from "@/lib/barber";

function Item({ p, r, aberto, alternar }: { p: string; r: string; aberto: boolean; alternar: () => void }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={alternar}
        aria-expanded={aberto}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-white"
      >
        <span className="font-display text-lg font-semibold text-white md:text-xl">{p}</span>
        <span
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            aberto ? "rotate-45 border-brand bg-brand text-white" : "border-line-strong text-forest-400"
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 pr-12 text-body">{r}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  // Uma resposta aberta por vez: a lista é longa e duas abertas já
  // empurram a próxima pergunta para fora da tela no celular.
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="section bg-surface">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <div>
          <Reveal>
            <ScrambleText text={faq.eyebrow} className="eyebrow text-forest-400" />
          </Reveal>
          <h2 className="mt-5 text-display-md">
            <SplitText text={faq.titulo} animateOnView className="text-white" />
          </h2>
        </div>

        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {faq.itens.map((item, i) => (
              <Item
                key={item.p}
                p={item.p}
                r={item.r}
                aberto={aberto === i}
                alternar={() => setAberto(aberto === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
