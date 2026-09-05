"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora, Magnetic, Reveal, ScrambleText, SplitText } from "@/components/ui/fx";
import { NodeField } from "@/components/ui/node-field";
import { contato, site } from "@/lib/content";

/* `autoComplete` e `inputMode` são o que faz a diferença no celular: o
   sistema oferece o preenchimento automático e o teclado já abre no
   layout certo (arroba no e-mail, numérico no telefone). */
const campos = [
  {
    name: "nome",
    label: "Seu nome",
    type: "text",
    placeholder: "Como podemos te chamar",
    autoComplete: "name",
  },
  {
    name: "empresa",
    label: "Empresa",
    type: "text",
    placeholder: "Nome do negócio",
    autoComplete: "organization",
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "voce@empresa.com.br",
    autoComplete: "email",
    inputMode: "email",
  },
  {
    name: "telefone",
    label: "Telefone",
    type: "tel",
    placeholder: "(11) 99999-9999",
    autoComplete: "tel",
    inputMode: "tel",
  },
] as const;

const estiloCampo =
  "h-12 w-full rounded-[var(--radius-control)] border border-line bg-ink-950/60 px-4 text-white placeholder:text-neutral-600 transition-all duration-200 focus:border-brand focus:bg-ink-950 focus:shadow-[0_0_0_3px_rgba(29,158,117,0.15)] focus:outline-none";

export function Contato() {
  const [dados, setDados] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [estado, setEstado] = useState<"ocioso" | "enviando" | "enviado" | "erro">("ocioso");
  const [erro, setErro] = useState("");

  // Envia por dentro do site, via Resend (rota /api/contato) — não abre
  // mais o app de e-mail do visitante nem depende dele ter um
  // configurado no aparelho.
  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    setErro("");
    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const corpo = await resposta.json().catch(() => ({}));
      if (!resposta.ok) {
        throw new Error(corpo.erro || "Não foi possível enviar sua mensagem.");
      }
      setEstado("enviado");
      setDados({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
    } catch (err) {
      setEstado("erro");
      setErro(err instanceof Error ? err.message : "Não foi possível enviar sua mensagem.");
    }
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-surface py-20 sm:py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <Aurora />
      <NodeField className="opacity-70" densidade={0.00007} maxNos={70} />

      <div className="shell relative grid gap-12 sm:gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <ScrambleText text={contato.eyebrow} className="eyebrow text-forest-400" />

          <h2 className="mt-5 text-display-md md:text-display-lg">
            <SplitText text="Vamos" animateOnView className="text-white" />{" "}
            <SplitText text="conversar?" animateOnView delay={0.1} className="lit" />
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg text-body">{contato.texto}</p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-[var(--radius-control)] border border-line px-5 py-4 transition-all duration-200 hover:border-brand hover:bg-brand/5"
              >
                <Mail className="h-5 w-5 text-forest-400" />
                <span className="font-medium text-white">{site.email}</span>
                <ArrowRight className="ml-auto h-4 w-4 -translate-x-2 text-forest-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[var(--radius-control)] border border-line px-5 py-4 transition-all duration-200 hover:border-brand hover:bg-brand/5"
              >
                <MessageCircle className="h-5 w-5 text-forest-400" />
                <span className="font-medium text-white">Falar no WhatsApp</span>
                <ArrowRight className="ml-auto h-4 w-4 -translate-x-2 text-forest-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-12 font-display text-xl lit">{site.fechamento}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={enviar} className="card rounded-[var(--radius-panel)] p-6 sm:p-7 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              {campos.map((campo) => (
                <label key={campo.name} className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">{campo.label}</span>
                  <input
                    type={campo.type}
                    name={campo.name}
                    required={campo.name === "nome" || campo.name === "email"}
                    placeholder={campo.placeholder}
                    autoComplete={campo.autoComplete}
                    inputMode={"inputMode" in campo ? campo.inputMode : undefined}
                    value={dados[campo.name]}
                    onChange={(e) => setDados({ ...dados, [campo.name]: e.target.value })}
                    className={estiloCampo}
                  />
                </label>
              ))}
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-white">
                O que está travando hoje?
              </span>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Conte em poucas linhas o momento da empresa."
                value={dados.mensagem}
                onChange={(e) => setDados({ ...dados, mensagem: e.target.value })}
                className={`${estiloCampo} h-auto resize-none py-3.5`}
              />
            </label>

            <Magnetic forca={0.15} className="mt-8 block w-full">
              <Button type="submit" size="lg" className="w-full" disabled={estado === "enviando"}>
                {estado === "enviado" ? (
                  <>
                    Mensagem enviada
                    <Check className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    {estado === "enviando" ? "Enviando…" : "Enviar mensagem"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </>
                )}
              </Button>
            </Magnetic>

            {estado === "erro" ? (
              <p className="mt-4 text-center text-xs text-red-400">
                {erro} Se persistir, escreva direto para{" "}
                <a href={`mailto:${site.email}`} className="underline decoration-red-400/40 underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            ) : estado === "enviado" ? (
              <p className="mt-4 text-center text-xs text-forest-400">
                Recebemos sua mensagem. Respondemos em até 1 dia útil.
              </p>
            ) : (
              <p className="mt-4 text-center text-xs text-muted">
                Enviado direto para a Nodum. Respondemos em até 1 dia útil.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
