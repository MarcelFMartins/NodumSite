import Link from "next/link";
import { NodumLogo } from "@/components/brand/logo";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <NodumLogo />
          <p className="mt-4 text-sm text-body">{site.tagline}</p>
          <p className="mt-1 text-sm text-muted">Gestão e tecnologia para PMEs brasileiras.</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3 md:grid-cols-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-body transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm">
          <a href={`mailto:${site.email}`} className="font-medium text-ink hover:text-brand">
            {site.email}
          </a>
          <div className="mt-3 flex gap-4">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-brand"
            >
              LinkedIn
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-brand"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
          <p className="font-display">{site.fechamento}</p>
        </div>
      </div>
    </footer>
  );
}
