"use client";

/**
 * Marca Nodum.
 *
 * Wordmark "nod" (branco) + "um" (menta) sobre o terreno escuro — o
 * split de duas cores definido pela marca. O símbolo são dois nós
 * ligados: aqui o nó de acento pulsa devagar e a ligação acende no
 * hover, transformando o logo na versão mínima do efeito de fundo.
 *
 * Fonte: Nodum_Design_System/assets/logo-wordmark*.svg
 */

import { cn } from "@/lib/utils";

export function NodumMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-6 w-6", className)} aria-hidden focusable="false">
      <circle cx="30" cy="26" r="10" fill="#5FCB9E" opacity="0.18">
        <animate attributeName="r" values="7;12;7" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.22;0;0.22" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="14" r="6" fill="#FFFFFF" />
      <circle cx="30" cy="26" r="6" fill="#5FCB9E" />
      <path
        d="M13.5 17.5 L26.5 22.5"
        stroke="#5FCB9E"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function NodumLogo({ className }: { className?: string }) {
  return (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <NodumMark className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-12deg]" />
      <span className="font-display text-lg font-bold leading-none tracking-tight text-white">
        nod
        <span className="text-forest-400">um</span>
      </span>
      <span className="sr-only">Nodum Soluções Integradas</span>
    </span>
  );
}
