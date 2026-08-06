"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Botão da Nodum no terreno escuro.
 *
 * A variante primária tem duas camadas de efeito: um preenchimento
 * florestal que sobe de baixo no hover (uiverse.io) e um brilho que
 * varre a superfície da esquerda para a direita. O press continua em
 * scale(0.98), como o design system pede.
 */

type Variante = "primary" | "outline" | "ghost";
type Tamanho = "md" | "lg";

const base = cn(
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden",
  "rounded-[var(--radius-control)] font-body font-semibold whitespace-nowrap",
  "transition-[color,background-color,border-color,box-shadow,transform] duration-200",
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
);

const variantes: Record<Variante, string> = {
  primary: "bg-brand text-white shadow-[0_0_28px_-8px_rgba(29,158,117,0.9)] hover:shadow-[0_0_44px_-6px_rgba(29,158,117,1)]",
  outline: "border border-line-strong text-white hover:border-brand-lit hover:bg-white/5",
  ghost: "text-body hover:text-white",
};

const tamanhos: Record<Tamanho, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-8 text-base",
};

function Camadas({ children, variant }: { children: ReactNode; variant: Variante }) {
  return (
    <>
      {variant === "primary" && (
        <>
          <span
            aria-hidden
            className="absolute inset-0 translate-y-full bg-forest-500 transition-transform duration-300 ease-out group-hover/btn:translate-y-0"
          />
          {/* Varredura de luz: -150% → 150% só no hover. */}
          <span
            aria-hidden
            className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/25 blur-[6px] transition-transform duration-700 ease-out group-hover/btn:translate-x-[420%]"
          />
        </>
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
    <button className={cn(base, variantes[variant], tamanhos[size], className)} {...props}>
      <Camadas variant={variant}>{children}</Camadas>
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
    <Link href={href} className={cn(base, variantes[variant], tamanhos[size], className)} {...props}>
      <Camadas variant={variant}>{children}</Camadas>
    </Link>
  );
}
