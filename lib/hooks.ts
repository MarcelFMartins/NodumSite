"use client";

import { useSyncExternalStore } from "react";

/**
 * Assinatura de media query compartilhada.
 *
 * Um único `useSyncExternalStore` por consulta: o React deduplica os
 * inscritos e o snapshot no servidor é sempre `false`, então o HTML
 * gerado continua sendo o do desktop — o mobile só "desliga" o que
 * precisa depois da hidratação, sem descasar a marcação.
 */
function assinar(consulta: string) {
  return (aoMudar: () => void) => {
    const mql = window.matchMedia(consulta);
    mql.addEventListener("change", aoMudar);
    return () => mql.removeEventListener("change", aoMudar);
  };
}

function useMedia(consulta: string) {
  return useSyncExternalStore(
    assinar(consulta),
    () => window.matchMedia(consulta).matches,
    () => false
  );
}

/**
 * `true` em telas de toque. Tudo que existe só para perseguir o cursor
 * (tilt, magnético, halo) não tem o que fazer aqui — e, pior, custa
 * caro: são springs do framer-motion e camadas com `transform-gpu`
 * multiplicadas por dezenas de cartões num aparelho fraco.
 */
export function useToque() {
  return useMedia("(hover: none), (pointer: coarse)");
}

/** `true` em viewports estreitas — usado para aliviar efeitos de fundo. */
export function useTelaPequena() {
  return useMedia("(max-width: 767px)");
}
