import Link from "next/link";
import { NodumLogo } from "@/components/brand/logo";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      <div className="shell flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <NodumLogo />
          <p className="mt-5 text-sm text-body">{site.tagline}</p>
          <p className="mt-1 text-sm text-muted">Gestão e tecnologia para PMEs brasileiras.</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm">
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-white transition-colors hover:text-forest-400"
          >
            {site.email}
          </a>
          <div className="mt-4 flex gap-5">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-forest-400"
            >
              LinkedIn
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-forest-400"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Assinatura em escala grande, recortada pela base da página. */}
      <div
        aria-hidden
        className="pointer-events-none select-none px-6 text-center font-display text-[18vw] font-extrabold leading-[0.75] tracking-tighter text-white/[0.035]"
      >
        nodum
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
          <p className="font-display text-forest-400">{site.fechamento}</p>
        </div>
      </div>
    </footer>
  );
}
