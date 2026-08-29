import Link from "next/link";
import { BarberLogo } from "@/components/barber/logo";
import { navBarber, sistema } from "@/lib/barber";

export function FooterBarber() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="max-w-xs">
          <BarberLogo />
          <p className="mt-5 text-sm text-body">
            Sistema de agenda e gestão para barbearias. Agenda, comissões, planos, estoque e caixa
            no mesmo lugar.
          </p>
          <a
            href={sistema.entrar}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-block text-sm font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-forest-400"
          >
            Já é cliente? Entrar no sistema
          </a>
        </div>

        <nav className="flex flex-col gap-2.5">
          <p className="eyebrow mb-1 text-muted">A página</p>
          {navBarber.map((item) => (
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
          <p className="eyebrow mb-1 text-muted">Legal e suporte</p>
          <a
            href={sistema.whatsappSuporte}
            target="_blank"
            rel="noopener"
            className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
          >
            Suporte no WhatsApp
          </a>
          {[
            { label: "Termos de Uso", href: sistema.termos },
            { label: "Política de Privacidade", href: sistema.privacidade },
            { label: "Contrato de Assinatura", href: sistema.contrato },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-forest-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NodumBarber. Um produto{" "}
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
