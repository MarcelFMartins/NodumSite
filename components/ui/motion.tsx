"use client";

/**
 * Primitivas de movimento do site.
 *
 * O design system diz que a marca é "flat e direta" e que movimento
 * deve ser funcional, não enfeite. Então as animações aqui são só
 * três: revelar ao entrar na tela, contar um número e um brilho de
 * hover em card. Nada de parallax, gradiente animado ou blur.
 *
 * Ideias de padrão vindas de reactbits.dev (SplitText, CountUp,
 * SpotlightCard) e uiverse.io (botão com preenchimento deslizante),
 * reimplementadas do zero com os tokens da Nodum.
 */

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Reveal — sobe 16px e aparece quando entra na viewport.              */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger — pai que escalona os filhos <StaggerItem>.                 */
/* ------------------------------------------------------------------ */

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={reduced ? undefined : staggerChild}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SplitText — revela palavra por palavra. Só no título do hero.       */
/* ------------------------------------------------------------------ */

export function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const palavras = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={cn("inline-block", className)}>
      {palavras.map((palavra, i) => (
        // O wrapper com overflow-hidden faz a palavra "subir" de dentro
        // da própria linha, em vez de só surgir por opacidade.
        <span key={`${palavra}-${i}`} className="inline-block overflow-hidden pb-[0.08em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + i * 0.07, ease: EASE }}
          >
            {palavra}
            {i < palavras.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — anima o número ao entrar na tela, preservando prefixo,    */
/* sufixo e separador decimal em PT-BR ("6,5M+", "83%").               */
/* ------------------------------------------------------------------ */

export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const emVista = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [texto, setTexto] = useState(value);

  // Quebra "6,5M+" em prefixo (""), número ("6,5") e sufixo ("M+").
  // Memoizado: `match` entra nas deps do efeito abaixo e String.match
  // devolve um array novo a cada render — sem isso, cada tick reinicia
  // a contagem e o número nunca chega no alvo.
  const match = useMemo(() => value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/), [value]);

  useEffect(() => {
    if (!match || reduced || !emVista) return;

    const [, prefixo, numeroTexto, sufixo] = match;
    const casas = numeroTexto.includes(",") ? numeroTexto.split(",")[1].length : 0;
    const alvo = parseFloat(numeroTexto.replace(",", "."));
    const duracao = 1100;
    const inicio = performance.now();
    let frame = 0;

    const tick = (agora: number) => {
      const t = Math.min((agora - inicio) / duracao, 1);
      // easeOutExpo: rápido no começo, assenta no fim.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const atual = (alvo * eased).toFixed(casas).replace(".", ",");
      setTexto(`${prefixo}${atual}${sufixo}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [emVista, match, reduced]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {match && !reduced ? texto : value}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SpotlightCard — halo jade suave seguindo o cursor. Sem gradiente    */
/* de fundo: o brilho vive numa camada própria e some no mouse-leave.  */
/* ------------------------------------------------------------------ */

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacidade = useSpring(0, { stiffness: 260, damping: 30 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseEnter={() => opacidade.set(1)}
      onMouseLeave={() => opacidade.set(0)}
      className={cn(
        "group relative isolate overflow-hidden rounded-[var(--radius-card)]",
        "border border-line bg-white transition-shadow duration-150",
        "hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-56 w-56 rounded-full"
        style={{
          x,
          y,
          opacity: opacidade,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(29,158,117,0.12) 0%, rgba(29,158,117,0) 70%)",
        }}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — faixa infinita. Duplica a lista e desliza -50%.           */
/* ------------------------------------------------------------------ */

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const reduced = useReducedMotion();
  const dobrado = [...items, ...items];

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        // Esmaece as pontas para a faixa não "cortar" seca na borda.
        "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex shrink-0 gap-3 pr-3"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {dobrado.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-neutral-50 px-4 py-2 text-sm font-medium text-body"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
