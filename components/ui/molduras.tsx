"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell } from "lucide-react";

/* Molduras usadas nas landings de produto para mostrar print real
   "dentro" de um navegador ou de um celular. */

/** Moldura de navegador — barra com três pontos e o endereço do sistema. */
export function JanelaNavegador({ children, endereco }: { children: React.ReactNode; endereco?: string }) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-ink-950 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-line bg-ink-900 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-muted">
          {endereco}
        </span>
      </div>
      {children}
    </div>
  );
}

/** Moldura de celular — bordas grossas e cantos bem arredondados. */
export function Celular({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[2rem] border-[6px] border-ink-800 bg-ink-950 p-1 shadow-2xl ring-1 ring-white/10 ${className ?? ""}`}>
      <div className="overflow-hidden rounded-[1.5rem]">{children}</div>
    </div>
  );
}

/**
 * Avisos que o sistema dispara de verdade, um depois do outro — o herói
 * mostra que o sistema trabalha sozinho enquanto a equipe atende.
 */
export function AvisoAoVivo({ avisos }: { avisos: { titulo: string; texto: string }[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % avisos.length), 3200);
    return () => clearInterval(t);
  }, [avisos.length]);
  const aviso = avisos[i];
  return (
    <div className="pointer-events-none absolute -bottom-6 left-4 z-20 w-[min(20rem,80%)] sm:left-8 md:-bottom-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={aviso.titulo}
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex items-start gap-3 rounded-2xl border border-brand/40 bg-ink-900/95 p-3.5 shadow-2xl backdrop-blur"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/20">
            <Bell className="h-4 w-4 text-forest-400" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white">{aviso.titulo}</span>
            <span className="block truncate text-xs text-muted">{aviso.texto}</span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
