"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Rede de nós em canvas — o efeito de fundo principal do site.
 *
 * Não é enfeite aleatório: "nodum" é nó, e a marca vende conexão. Os
 * pontos flutuam devagar e traçam uma linha entre si quando ficam perto;
 * o cursor puxa os vizinhos e acende as ligações ao redor.
 *
 * Cuidados de performance: densidade proporcional à área (com teto),
 * `requestAnimationFrame` pausado quando a seção sai da tela ou a aba
 * perde o foco, e nada roda sob `prefers-reduced-motion`.
 */

type No = { x: number; y: number; vx: number; vy: number; r: number };

export function NodeField({
  className,
  densidade = 0.00009,
  maxNos = 90,
  distancia = 150,
  interativo = true,
}: {
  className?: string;
  densidade?: number;
  maxNos?: number;
  distancia?: number;
  interativo?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Em tela de toque não há cursor: a interação inteira sai, e com ela
    // o `hypot` por nó e por ligação dentro do laço O(n²). O teto de nós
    // também cai, e o DPR é limitado a 1,5 — num celular a diferença
    // entre 2x e 1,5x nesses pontos de 1px não se vê, mas são ~40% menos
    // pixels para pintar a cada quadro.
    const toque = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const puxaCursor = interativo && !toque;
    const tetoNos = toque ? Math.min(maxNos, 26) : maxNos;
    const tetoDpr = toque ? 1.5 : 2;

    let nos: No[] = [];
    let largura = 0;
    let altura = 0;
    let frame = 0;
    let visivel = true;
    let pronto = false;
    let ocioso = 0;
    const mouse = { x: -9999, y: -9999 };

    const dpr = () => Math.min(window.devicePixelRatio || 1, tetoDpr);

    function dimensionar() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      largura = rect.width;
      altura = rect.height;
      canvas.width = largura * dpr();
      canvas.height = altura * dpr();
      ctx.setTransform(dpr(), 0, 0, dpr(), 0, 0);

      const alvo = Math.min(Math.round(largura * altura * densidade), tetoNos);
      nos = Array.from({ length: alvo }, () => ({
        x: Math.random() * largura,
        y: Math.random() * altura,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.9,
      }));
    }

    function desenhar() {
      if (!ctx) return;
      ctx.clearRect(0, 0, largura, altura);

      for (const no of nos) {
        no.x += no.vx;
        no.y += no.vy;

        // Rebate nas bordas em vez de teletransportar: o salto de um
        // wrap-around fica visível quando a linha já estava traçada.
        if (no.x < 0 || no.x > largura) no.vx *= -1;
        if (no.y < 0 || no.y > altura) no.vy *= -1;

        if (puxaCursor) {
          const dx = mouse.x - no.x;
          const dy = mouse.y - no.y;
          const d = Math.hypot(dx, dy);
          if (d < 170 && d > 0.5) {
            // Atração fraquíssima: o campo "respira" perto do cursor.
            no.x += (dx / d) * 0.32;
            no.y += (dy / d) * 0.32;
          }
        }
      }

      // Ligações. O laço é O(n²), por isso o teto de ~90 nós.
      for (let i = 0; i < nos.length; i++) {
        for (let j = i + 1; j < nos.length; j++) {
          const a = nos[i];
          const b = nos[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > distancia) continue;

          const forca = 1 - d / distancia;
          const pertoDoMouse =
            puxaCursor &&
            Math.min(Math.hypot(a.x - mouse.x, a.y - mouse.y), Math.hypot(b.x - mouse.x, b.y - mouse.y)) <
              170;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = pertoDoMouse
            ? `rgba(95, 203, 158, ${forca * 0.55})`
            : `rgba(29, 158, 117, ${forca * 0.22})`;
          ctx.lineWidth = pertoDoMouse ? 1 : 0.7;
          ctx.stroke();
        }
      }

      for (const no of nos) {
        const perto = puxaCursor && Math.hypot(no.x - mouse.x, no.y - mouse.y) < 170;
        ctx.beginPath();
        ctx.arc(no.x, no.y, no.r, 0, Math.PI * 2);
        ctx.fillStyle = perto ? "rgba(159, 225, 203, 0.95)" : "rgba(79, 184, 147, 0.55)";
        ctx.fill();
      }

      frame = requestAnimationFrame(desenhar);
    }

    function onMouse(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function iniciar() {
      pronto = true;
      dimensionar();
      if (visivel && !document.hidden) frame = requestAnimationFrame(desenhar);
    }

    // No celular a rede não disputa a hidratação: o primeiro quadro sai
    // depois que a linha principal esvazia. O texto do herói é o LCP e
    // não tem por que esperar um canvas de enfeite.
    if (toque && typeof window.requestIdleCallback === "function") {
      ocioso = window.requestIdleCallback(iniciar, { timeout: 1200 });
    } else {
      iniciar();
    }

    const ro = new ResizeObserver(() => {
      if (pronto) dimensionar();
    });
    ro.observe(canvas);

    // Congela quando ninguém está olhando — aba oculta ou fora da tela.
    const io = new IntersectionObserver(
      ([entrada]) => {
        visivel = entrada.isIntersecting;
        cancelAnimationFrame(frame);
        if (pronto && visivel && !document.hidden) frame = requestAnimationFrame(desenhar);
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    function onVisibilidade() {
      cancelAnimationFrame(frame);
      if (pronto && !document.hidden && visivel) frame = requestAnimationFrame(desenhar);
    }

    document.addEventListener("visibilitychange", onVisibilidade);
    if (puxaCursor) {
      window.addEventListener("mousemove", onMouse, { passive: true });
      window.addEventListener("mouseout", onLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      if (ocioso) window.cancelIdleCallback?.(ocioso);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibilidade);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [densidade, distancia, interativo, maxNos]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
