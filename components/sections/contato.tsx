"use client";

import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { contato, site } from "@/lib/content";

const campos = [
  { name: "nome", label: "Seu nome", type: "text", placeholder: "Como podemos te chamar" },
  { name: "empresa", label: "Empresa", type: "text", placeholder: "Nome do negócio" },
  { name: "email", label: "E-mail", type: "email", placeholder: "voce@empresa.com.br" },
  { name: "telefone", label: "Telefone", type: "tel", placeholder: "(11) 99999-9999" },
] as const;

const estiloCampo =
  "h-11 w-full rounded-[var(--radius-control)] border border-white/15 bg-ink-800 px-4 text-white placeholder:text-neutral-500 transition-colors duration-150 focus:border-forest-400 focus:outline-none";

export function Contato() {
  const [dados, setDados] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  // Sem backend: o formulário monta um e-mail pré-preenchido e entrega
  // para o cliente de e-mail do visitante. Nada é enviado por aqui — o
  // dia que existir uma API, é só trocar este handler.
  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const assunto = `Contato pelo site — ${dados.empresa || dados.nome}`;
    const corpo = [
      `Nome: ${dados.nome}`,
      `Empresa: ${dados.empresa}`,
      `E-mail: ${dados.email}`,
      `Telefone: ${dados.telefone}`,
      "",
      dados.mensagem,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;
  }

  return (
    // Painel de fechamento em ink — o espelho do hero, como nos decks.
    <section id="contato" className="bg-ink-900 py-20 text-white md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-forest-400">{contato.eyebrow}</p>
          <h2 className="mt-4 text-display-md text-white md:text-display-lg">{contato.titulo}</h2>
          <p className="mt-5 max-w-md text-lg text-neutral-300">{contato.texto}</p>

          <div className="mt-10 space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-[var(--radius-control)] border border-white/12 px-5 py-4 transition-colors duration-150 hover:border-forest-400"
            >
              <Mail className="h-5 w-5 text-forest-400" />
              <span className="font-medium">{site.email}</span>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[var(--radius-control)] border border-white/12 px-5 py-4 transition-colors duration-150 hover:border-forest-400"
            >
              <MessageCircle className="h-5 w-5 text-forest-400" />
              <span className="font-medium">Falar no WhatsApp</span>
            </a>
          </div>

          <p className="mt-10 font-display text-lg text-forest-400">{site.fechamento}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={enviar}
            className="rounded-[var(--radius-panel)] border border-white/10 bg-ink-800/60 p-7 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {campos.map((campo) => (
                <label key={campo.name} className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">
                    {campo.label}
                  </span>
                  <input
                    type={campo.type}
                    name={campo.name}
                    required={campo.name === "nome" || campo.name === "email"}
                    placeholder={campo.placeholder}
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
                className={`${estiloCampo} h-auto resize-none py-3`}
              />
            </label>

            <Button type="submit" size="lg" className="mt-7 w-full">
              Enviar mensagem
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-neutral-500">
              Abre o seu app de e-mail com a mensagem pronta. Respondemos em até 1 dia útil.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
