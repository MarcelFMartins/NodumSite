"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Botão da Nodum.
 *
 * Regras do design system: raio de 10px, hover escurece o preenchimento
 * da marca (jade → forest), press usa scale 0.98 em vez de trocar cor,
 * transição de 150ms. Sem gradiente e sem sombra colorida.
 *
 * A variante `primary` traz uma camada de preenchimento que sobe de baixo
 * no hover — padrão de botão do uiverse.io, refeito só com os tokens.
 */

type Variante = "primary" | "secondary" | "ghost" | "inverse";
type Tamanho = "md" | "lg";

const base = cn(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden",
  "rounded-[var(--radius-control)] font-body font-semibold",
  "transition-[color,background-color,border-color,transform] duration-150",
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
);

const variantes: Record<Variante, string> = {
  primary: "bg-brand text-white",
  secondary: "border border-line bg-white text-ink hover:border-neutral-400",
  ghost: "text-ink hover:bg-neutral-100",
  inverse: "bg-white text-ink-900 hover:bg-jade-100",
};

const tamanhos: Record<Tamanho, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

function Conteudo({
  children,
  variant,
}: {
  children: ReactNode;
  variant: Variante;
}) {
  return (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 -z-0 translate-y-full bg-forest-500",
            "transition-transform duration-200 ease-out group-hover:translate-y-0"
          )}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variante; size?: Tamanho }) {
  return (
    <button
      className={cn(base, variantes[variant], tamanhos[size], className)}
      {...props}
    >
      <Conteudo variant={variant}>{children}</Conteudo>
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variante; size?: Tamanho }) {
  return (
    <Link
      href={href}
      className={cn(base, variantes[variant], tamanhos[size], className)}
      {...props}
    >
      <Conteudo variant={variant}>{children}</Conteudo>
    </Link>
  );
}
