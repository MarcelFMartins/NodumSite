"use client";

import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Rolagem suave (Lenis) em todas as páginas — fica no layout raiz.
 *
 * - Só no desktop com mouse/trackpad: no toque o Lenis repassa para a
 *   rolagem nativa (syncTouch desligado), que já é suave e tem inércia.
 * - `prefers-reduced-motion` desliga tudo, como o resto dos efeitos.
 * - `anchors` faz os links "#secao" do menu deslizarem até a seção; o
 *   desconto do cabeçalho fixo vem do `scroll-padding-top: 6rem` do CSS,
 *   que o Lenis já respeita (somar um offset aqui contaria duas vezes).
 * - Áreas com rolagem própria (modais, listas) continuam rolando sozinhas:
 *   o Lenis respeita elementos roláveis aninhados e `data-lenis-prevent`.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
      allowNestedScroll: true,
      autoRaf: true,
    });

    // Troca de página: começa do topo, sem animar a volta.
    lenis.scrollTo(0, { immediate: true });

    return () => lenis.destroy();
  }, [pathname]);

  return null;
}
