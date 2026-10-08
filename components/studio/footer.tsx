import Link from "next/link";
import { StudioLogo } from "@/components/studio/logo";
import { navStudio, studio, legalStudio } from "@/lib/studio";

export function FooterStudio() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="max-w-xs">
          <StudioLogo />
          <p className="mt-5 text-sm text-body">
            Agenda e gestão para estúdios de beleza: manicure, salão, sobrancelhas, estética,
            depilação, maquiagem e tatuagem. Da família do NodumBarber.
          </p>
          <a
            href={studio.whatsapp}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-block text-sm font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
          >
            Falar com a Nodum
          </a>
        </div>

        <nav className="flex flex-col gap-2.5">
          <p className="eyebrow mb-1 text-muted">A página</p>
          {navStudio.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <p className="eyebrow mb-1 text-muted">Legal</p>
          <Link
            href={legalStudio.termos}
            className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
          >
            Termos de Uso
          </Link>
          <Link
            href={legalStudio.privacidade}
            className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NodumStudio. Um produto{" "}
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
