"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BarberLogo } from "@/components/barber/logo";
import { navBarber, sistema } from "@/lib/barber";

export function HeaderBarber() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava a página atrás do menu aberto — sem isso o fundo rola por baixo.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou ? "border-b border-line bg-ink-950/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link href="/nodumbarber" aria-label="NodumBarber, ir para o topo">
          <BarberLogo />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navBarber.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-body transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={sistema.entrar} variant="outline" target="_blank" rel="noopener">
            Entrar
          </ButtonLink>
          <ButtonLink href={sistema.cadastro} target="_blank" rel="noopener">
            Testar 14 dias grátis
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-line text-white transition-colors hover:border-brand active:bg-white/5 md:hidden"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <nav className="shell flex max-h-[calc(100svh-5rem)] flex-col gap-1 overflow-y-auto py-5">
              {navBarber.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="rounded-[var(--radius-control)] px-2 py-3 text-base text-body transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <ButtonLink
                  href={sistema.cadastro}
                  size="lg"
                  target="_blank"
                  rel="noopener"
                  className="w-full"
                >
                  Testar 14 dias grátis
                </ButtonLink>
                <ButtonLink
                  href={sistema.entrar}
                  size="lg"
                  variant="outline"
                  target="_blank"
                  rel="noopener"
                  className="w-full"
                >
                  Já tenho conta
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
