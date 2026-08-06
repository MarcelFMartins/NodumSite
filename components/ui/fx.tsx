"use client";

/**
 * Efeitos de interface do site.
 *
 * Tudo aqui é escrito à mão sobre os tokens da Nodum — nenhuma
 * biblioteca de UI. Padrões inspirados em reactbits.dev (TiltCard,
 * ScrambleText, CountUp), 21st.dev (bento/beam) e uiverse.io (botão
 * magnético, borda que gira).
 *
 * Regra de ouro deste arquivo: todo efeito precisa desligar sob
 * `prefers-reduced-motion` e nenhum pode capturar clique sem querer.
 */

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useTelaPequena, useToque } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* ================================================================== */
/* Revelações de scroll                                                */
/* ================================================================== */

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const paiStagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const filhoStagger: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={paiStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={reduced ? undefined : filhoStagger}>
      {children}
    </motion.div>
  );
}

/* ================================================================== */
/* SplitText — o título sobe palavra por palavra                       */
/* ================================================================== */

export function SplitText({
  text,
  className,
  delay = 0,
  animateOnView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  animateOnView?: boolean;
}) {
  const reduced = useReducedMotion();
  const palavras = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  const alvo = { y: "0%", opacity: 1 };

  return (
    <span className={cn("inline-block", className)}>
      {palavras.map((palavra, i) => (
        <span key={`${palavra}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            {...(animateOnView
              ? { whileInView: alvo, viewport: { once: true, margin: "-60px" } }
              : { animate: alvo })}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease: EASE }}
          >
            {palavra}
            {i < palavras.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ================================================================== */
/* ScrambleText — o rótulo "decodifica" ao entrar na tela              */
/* ================================================================== */

const GLIFOS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]{}*#$%";

export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const emVista = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [saida, setSaida] = useState(text);

  useEffect(() => {
    if (!emVista || reduced) return;

    let quadro = 0;
    let id = 0;
    const passosPorLetra = 3;

    const tick = () => {
      const revelado = quadro / passosPorLetra;
      setSaida(
        text
          .split("")
          .map((letra, i) => {
            if (i < revelado || letra === " ") return letra;
            return GLIFOS[Math.floor(Math.random() * GLIFOS.length)];
          })
          .join("")
      );

      quadro += 1;
      if (revelado <= text.length) id = window.setTimeout(tick, 28);
      else setSaida(text);
    };

    tick();
    return () => window.clearTimeout(id);
  }, [emVista, reduced, text]);

  return (
    <span ref={ref} className={className}>
      {saida}
    </span>
  );
}

/* ================================================================== */
/* CountUp                                                             */
/* ================================================================== */

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const emVista = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [texto, setTexto] = useState(value);

  // Memoizado de propósito: `match` entra nas deps do efeito e
  // String.match devolve um array novo a cada render — sem isso, cada
  // tick reiniciaria a contagem e o número nunca chegaria no alvo.
  const match = useMemo(() => value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/), [value]);

  useEffect(() => {
    if (!match || reduced || !emVista) return;

    const [, prefixo, numeroTexto, sufixo] = match;
    const casas = numeroTexto.includes(",") ? numeroTexto.split(",")[1].length : 0;
    const alvo = parseFloat(numeroTexto.replace(",", "."));
    const duracao = 1400;
    const inicio = performance.now();
    let frame = 0;

    const tick = (agora: number) => {
      const t = Math.min((agora - inicio) / duracao, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setTexto(`${prefixo}${(alvo * eased).toFixed(casas).replace(".", ",")}${sufixo}`);
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

/* ================================================================== */
/* TiltCard — inclinação 3D + brilho que segue o cursor                */
/* ================================================================== */

export function TiltCard({
  children,
  className,
  intensidade = 8,
  brilho = true,
}: {
  children: ReactNode;
  className?: string;
  intensidade?: number;
  brilho?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const toque = useToque();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const luzX = useMotionValue(0);
  const luzY = useMotionValue(0);
  const luzOp = useSpring(0, { stiffness: 220, damping: 28 });

  const mola = { stiffness: 200, damping: 22, mass: 0.4 };
  const rotX = useSpring(useTransform(my, [0, 1], [intensidade, -intensidade]), mola);
  const rotY = useSpring(useTransform(mx, [0, 1], [-intensidade, intensidade]), mola);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      mx.set(x / r.width);
      my.set(y / r.height);
      luzX.set(x);
      luzY.set(y);
    },
    [luzX, luzY, mx, my]
  );

  const onLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
    luzOp.set(0);
  }, [luzOp, mx, my]);

  // No toque não há cursor para inclinar o cartão em direção a nada, e o
  // wrapper 3D ainda cobraria caro: cada cartão vira um contexto de
  // empilhamento com `transform-gpu` e dois springs vivos. O cartão
  // chapado é o mesmo visual e não custa nada.
  if (reduced || toque) {
    return <div className={cn("card", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => luzOp.set(1)}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      className={cn("card card-lit group relative overflow-hidden transform-gpu", className)}
    >
      {brilho && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute h-64 w-64 rounded-full"
          style={{
            x: luzX,
            y: luzY,
            opacity: luzOp,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(95,203,158,0.16) 0%, rgba(29,158,117,0) 68%)",
          }}
        />
      )}
      {/* translateZ tira o conteúdo do plano do cartão: sem isso o texto
          "afunda" junto com a inclinação e perde nitidez. */}
      <div className="relative" style={{ transform: "translateZ(28px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/* Magnetic — o elemento persegue o cursor de leve                     */
/* ================================================================== */

export function Magnetic({
  children,
  className,
  forca = 0.35,
}: {
  children: ReactNode;
  className?: string;
  forca?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 260, damping: 18, mass: 0.3 });
  const y = useSpring(0, { stiffness: 260, damping: 18, mass: 0.3 });
  const toque = useToque();

  if (reduced || toque) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * forca);
        y.set((e.clientY - (r.top + r.height / 2)) * forca);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================== */
/* Parallax — desloca no eixo Y conforme a seção cruza a tela          */
/* ================================================================== */

export function Parallax({
  children,
  className,
  distancia = 60,
}: {
  children: ReactNode;
  className?: string;
  distancia?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distancia, -distancia]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/* ================================================================== */
/* ScrollProgress — trilho de leitura no topo da página                */
/* ================================================================== */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const escala = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: escala }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-jade-500 via-forest-400 to-jade-300"
    />
  );
}

/* ================================================================== */
/* GlowCursor — halo que segue o mouse (só em ponteiro fino)           */
/* ================================================================== */

export function GlowCursor() {
  const [ativo, setAtivo] = useState(false);
  const x = useSpring(0, { stiffness: 380, damping: 30, mass: 0.25 });
  const y = useSpring(0, { stiffness: 380, damping: 30, mass: 0.25 });

  useEffect(() => {
    // Em telas de toque não existe cursor para seguir, e o halo viraria
    // um elemento parado no canto.
    const fino = window.matchMedia("(pointer: fine)").matches;
    const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fino || calmo) return;

    setAtivo(true);
    const mover = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", mover, { passive: true });
    return () => window.removeEventListener("mousemove", mover);
  }, [x, y]);

  if (!ativo) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[55] -ml-40 -mt-40 h-80 w-80 rounded-full opacity-70 mix-blend-screen"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(29,158,117,0.13) 0%, rgba(29,158,117,0) 62%)",
        }}
      />
    </motion.div>
  );
}

/* ================================================================== */
/* Aurora — manchas de luz jade respirando ao fundo                    */
/* ================================================================== */

export function Aurora({ className }: { className?: string }) {
  // Duas manchas de 30rem+ com `blur-3xl` animadas em loop são o efeito
  // mais caro da página para uma GPU de celular: cada quadro repinta uma
  // área maior que a tela inteira. No mobile elas ficam paradas — a luz
  // continua lá, o custo por quadro vai a zero.
  const pequena = useTelaPequena();
  const flutuar = (css: string) => (pequena ? undefined : css);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute -left-40 -top-40 h-[22rem] w-[22rem] rounded-full opacity-60 blur-3xl md:h-[36rem] md:w-[36rem]"
        style={{
          background: "radial-gradient(circle, rgba(29,158,117,0.22) 0%, rgba(29,158,117,0) 65%)",
          animation: flutuar("float-slow 14s ease-in-out infinite"),
        }}
      />
      <div
        className="absolute -right-32 top-1/3 h-[18rem] w-[18rem] rounded-full opacity-50 blur-3xl md:h-[30rem] md:w-[30rem]"
        style={{
          background: "radial-gradient(circle, rgba(95,203,158,0.18) 0%, rgba(95,203,158,0) 65%)",
          animation: flutuar("float-slow 18s ease-in-out infinite reverse"),
        }}
      />
    </div>
  );
}

/* ================================================================== */
/* Marquee                                                             */
/* ================================================================== */

export function Marquee({
  items,
  className,
  duracao = 34,
}: {
  items: string[];
  className?: string;
  duracao?: number;
}) {
  const dobrado = [...items, ...items];
  return (
    <div className={cn("fade-x relative flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 gap-3 pr-3"
        style={{ animation: `marquee-x ${duracao}s linear infinite` }}
      >
        {dobrado.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm font-medium text-body transition-colors duration-200 hover:border-brand hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
