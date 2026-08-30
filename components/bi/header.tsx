"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { BiLogo } from "@/components/bi/logo";
import { navBi } from "@/lib/bi";
import { site } from "@/lib/content";
import { zapBi } from "@/lib/bi";

export function HeaderBi() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

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
        <Link href="/nodumbi" aria-label="Nodum BI, ir para o topo">
          <BiLogo />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navBi.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-body transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <ButtonLink href={zapBi(site.whatsapp)} target="_blank" rel="noopener">
            Agendar demonstração
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
              {navBi.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="rounded-[var(--radius-control)] px-2 py-3 text-base text-body transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4">
                <ButtonLink
                  href={zapBi(site.whatsapp)}
                  size="lg"
                  target="_blank"
                  rel="noopener"
                  className="w-full"
                >
                  Agendar demonstração
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
