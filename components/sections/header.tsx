"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NodumLogo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  // A borda inferior só aparece depois que a página rola — no topo o
  // header encosta no hero sem costura visível.
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-[2px] transition-colors duration-150",
        rolou ? "border-b border-line" : "border-b border-transparent"
      )}
    >
      <div className="shell flex h-18 items-center justify-between py-4">
        <Link href="/" aria-label="Nodum — início">
          <NodumLogo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-body transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#contato">Vamos conversar?</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line text-ink lg:hidden"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-line bg-white lg:hidden"
          >
            <nav className="shell flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="rounded-[var(--radius-control)] px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="#contato" className="mt-3" onClick={() => setAberto(false)}>
                Vamos conversar?
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
