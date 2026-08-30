"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { bi, zapBi } from "@/lib/bi";
import { site } from "@/lib/content";

/** Barra de conversão que gruda no rodapé depois da primeira dobra. */
export function BarraFixaBi() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const fim = document.querySelector("footer");
    const avaliar = () => {
      const passouDobra = window.scrollY > window.innerHeight * 0.9;
      const atrapalha = fim
        ? (() => {
            const r = fim.getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
          })()
        : false;
      setVisivel(passouDobra && !atrapalha);
    };
    avaliar();
    window.addEventListener("scroll", avaliar, { passive: true });
    window.addEventListener("resize", avaliar);
    return () => {
      window.removeEventListener("scroll", avaliar);
      window.removeEventListener("resize", avaliar);
    };
  }, []);

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink-950/92 backdrop-blur-xl"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="shell flex items-center justify-between gap-4 py-3.5">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{bi.nomeCompleto}</p>
              <p className="hidden truncate text-xs text-muted sm:block">{bi.tagline}</p>
            </div>
            <ButtonLink href={zapBi(site.whatsapp)} target="_blank" rel="noopener" className="shrink-0">
              Agendar demo
            </ButtonLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
