import type { Metadata } from "next";
import { Aurora, ScrambleText, SplitText } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { FormCadastro } from "@/components/barber/form-cadastro";
import { sistema } from "@/lib/barber";

export const metadata: Metadata = {
  title: "Criar minha barbearia",
  description: "Crie sua conta no NodumBarber. 14 dias grátis, sem cartão de crédito.",
  alternates: { canonical: "/nodumbarber/cadastro" },
  robots: { index: false, follow: true }, // página transacional, não é destino de busca
};

export default function CadastroPage() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24 md:py-28">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <Aurora />
      <NodeField className="opacity-60" densidade={0.00006} maxNos={55} interativo={false} />

      <div className="shell relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <ScrambleText text="Comece agora" className="eyebrow text-forest-400" />
          <h1 className="mt-5 text-display-md md:text-display-lg">
            <SplitText text="Sua barbearia" className="text-white" />{" "}
            <SplitText text="em minutos." delay={0.1} className="lit" />
          </h1>
          <p className="mt-6 max-w-md text-lg text-body">
            Cria a conta, ajusta seus horários e já marca o primeiro cliente. Os serviços vêm
            prontos para você editar. Se não servir, é só não continuar.
          </p>
          <p className="mt-8 text-sm text-muted">
            Já tem conta?{" "}
            <a
              href={sistema.entrar}
              target="_blank"
              rel="noopener"
              className="font-semibold text-forest-400 underline decoration-brand/40 underline-offset-4 hover:decoration-forest-400"
            >
              Entrar no sistema
            </a>
          </p>
        </div>

        <FormCadastro />
      </div>
    </section>
  );
}
