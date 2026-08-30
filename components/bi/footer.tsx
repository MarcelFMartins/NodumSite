import Link from "next/link";
import { BiLogo } from "@/components/bi/logo";
import { navBi, zapBi } from "@/lib/bi";
import { site } from "@/lib/content";

export function FooterBi() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr]">
        <div className="max-w-xs">
          <BiLogo />
          <p className="mt-5 text-sm text-body">
            Painel de indicadores financeiros para consolidar e comparar as DREs de várias
            empresas, num só lugar.
          </p>
          <a
            href={zapBi(site.whatsapp)}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-block text-sm font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
          >
            Agendar uma demonstração
          </a>
        </div>

        <nav className="flex flex-col gap-2.5">
          <p className="eyebrow mb-1 text-muted">A página</p>
          {navBi.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nodum BI. Um produto{" "}
            <Link href="/" className="font-semibold text-forest-400 hover:underline">
              Nodum Soluções Integradas
            </Link>
            .
          </p>
          <p className="font-display text-forest-400">Conectados para crescer.</p>
        </div>
      </div>
    </footer>
  );
}
