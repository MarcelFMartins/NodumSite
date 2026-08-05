/**
 * Marca Nodum, redesenhada inline para acompanhar o contexto (claro
 * ou escuro) sem trocar de arquivo.
 *
 * Wordmark: "nod" em carvão + "um" em jade no claro; "nod" em branco +
 * "um" em menta no escuro — exatamente o split de duas cores definido
 * pela marca. O símbolo de dois nós ligados representa "conexões".
 *
 * Fonte: Nodum_Design_System/assets/logo-wordmark*.svg
 */

import { cn } from "@/lib/utils";

export function NodumMark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const noPrincipal = tone === "dark" ? "#FFFFFF" : "#1C1B1A";
  const noAcento = tone === "dark" ? "#5FCB9E" : "#1D9E75";

  return (
    <svg viewBox="0 0 40 40" className={cn("h-6 w-6", className)} aria-hidden focusable="false">
      <circle cx="10" cy="14" r="6" fill={noPrincipal} />
      <circle cx="30" cy="26" r="6" fill={noAcento} />
      <path
        d="M13.5 17.5 L26.5 22.5"
        stroke={noAcento}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function NodumLogo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <NodumMark tone={tone} className="h-6 w-6" />
      <span
        className={cn(
          "font-display text-lg font-bold leading-none tracking-tight",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        nod
        <span className={tone === "dark" ? "text-forest-400" : "text-brand"}>um</span>
      </span>
      <span className="sr-only">Nodum Soluções Integradas</span>
    </span>
  );
}
