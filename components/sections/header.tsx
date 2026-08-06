"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NodumLogo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/fx";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca no menu a seção que está sendo lida. O rootMargin recorta a
  // viewport para uma faixa central: sem isso, duas seções ficam
  // "ativas" ao mesmo tempo durante a transição.
  useEffect(() => {
    const alvos = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const io = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas.find((e) => e.isIntersecting);
        if (visivel) setAtivo(`#${visivel.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        rolou
          ? "border-b border-line bg-surface/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" aria-label="Nodum — início">
          <NodumLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                ativo === item.href ? "text-white" : "text-muted hover:text-white"
              )}
            >
              {ativo === item.href && (
                <motion.span
                  layoutId="pilula-nav"
                  className="absolute inset-0 rounded-full border border-line bg-white/5"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Magnetic forca={0.25}>
            <ButtonLink href="#contato">Vamos conversar?</ButtonLink>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-line text-white transition-colors hover:border-brand lg:hidden"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="shell flex flex-col gap-1 py-5">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setAberto(false)}
                    className="block rounded-[var(--radius-control)] px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <ButtonLink href="#contato" className="mt-4" onClick={() => setAberto(false)}>
                Vamos conversar?
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
