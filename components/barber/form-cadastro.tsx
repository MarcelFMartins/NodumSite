"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sistema } from "@/lib/barber";
import { cn } from "@/lib/utils";

/**
 * O formulário do NodumBarber renderizado dentro do próprio site.
 *
 * A tela é nossa; a conta continua nascendo no sistema. O `fetch` vai
 * direto para `sistema.apiSignup` com `credentials: "include"`, e o
 * cookie de sessão que a API devolve é gravado no domínio do sistema
 * — não no nosso. É por isso que o redirecionamento final leva para
 * `sistema.dashboard`: a pessoa já entra logada, sem passar pela tela
 * de login. Esse handshake depende de o back-end responder com CORS
 * liberado para este domínio (ver README, seção NodumBarber).
 */

type Erros = Partial<Record<"shopName" | "ownerName" | "ownerEmail" | "ownerPassword" | "geral", string>>;

const camposIguais = (a: unknown, b: unknown) => a === b;

export function FormCadastro() {
  const idBase = useId();
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPassword, setOwnerPassword] = useState("");
  const [aceite, setAceite] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // campo-armadilha: só robô preenche
  const [enviando, setEnviando] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [sucesso, setSucesso] = useState(false);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!camposIguais(honeypot, "")) return; // silencioso de propósito
    setErros({});

    if (!aceite) {
      setErros({ geral: "É preciso aceitar os termos para criar a conta." });
      return;
    }

    setEnviando(true);
    try {
      const resp = await fetch(sistema.apiSignup, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shopName, ownerName, ownerEmail, ownerPassword, aceite, honeypot }),
      });

      if (resp.ok) {
        setSucesso(true);
        window.location.href = sistema.dashboard;
        return;
      }

      const corpo = await resp.json().catch(() => null);

      if (resp.status === 422 && Array.isArray(corpo?.issues)) {
        const campo: Erros = {};
        for (const issue of corpo.issues as { path: string; message: string }[]) {
          if (issue.path in { shopName: 1, ownerName: 1, ownerEmail: 1, ownerPassword: 1 }) {
            campo[issue.path as keyof Erros] = issue.message;
          }
        }
        setErros(Object.keys(campo).length ? campo : { geral: "Confira os dados e tente de novo." });
      } else if (resp.status === 409) {
        setErros({ ownerEmail: "Já existe uma conta com este e-mail." });
      } else if (resp.status === 429) {
        setErros({ geral: "Muitas tentativas em pouco tempo. Espere alguns minutos e tente de novo." });
      } else {
        setErros({
          geral:
            corpo?.error ??
            "Não deu para criar a conta agora. Tente de novo em instantes ou chame o suporte.",
        });
      }
    } catch {
      // A causa mais comum aqui, fora queda de conexão, é o CORS ainda
      // não liberado no back-end para este domínio — ver README.
      setErros({
        geral:
          "Não conseguimos falar com o sistema agora. Tente de novo em instantes ou chame o suporte.",
      });
    } finally {
      setEnviando(false);
    }
  }

  const campo = (
    nome: keyof Omit<Erros, "geral">,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement>
  ) => {
    const id = `${idBase}-${nome}`;
    const erro = erros[nome];
    return (
      <label htmlFor={id} className="block">
        <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
        <input
          id={id}
          aria-invalid={Boolean(erro)}
          aria-describedby={erro ? `${id}-erro` : undefined}
          className={cn(
            "h-12 w-full rounded-[var(--radius-control)] border bg-ink-950/60 px-4 text-white placeholder:text-neutral-600 transition-all duration-200 focus:bg-ink-950 focus:outline-none",
            erro
              ? "border-red-500/60 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
              : "border-line focus:border-brand focus:shadow-[0_0_0_3px_rgba(29,158,117,0.15)]"
          )}
          {...props}
        />
        {erro && (
          <span id={`${id}-erro`} className="mt-1.5 block text-xs text-red-400">
            {erro}
          </span>
        )}
      </label>
    );
  };

  return (
    <form onSubmit={enviar} noValidate className="card rounded-[var(--radius-panel)] p-6 sm:p-8 md:p-10">
      <div className="grid gap-5">
        {campo("shopName", "Nome da barbearia", {
          value: shopName,
          onChange: (e) => setShopName(e.target.value),
          placeholder: "Barbearia Salles",
          autoComplete: "organization",
          required: true,
        })}
        {campo("ownerName", "Seu nome", {
          value: ownerName,
          onChange: (e) => setOwnerName(e.target.value),
          placeholder: "Como você é conhecido",
          autoComplete: "name",
          required: true,
        })}
        {campo("ownerEmail", "Seu e-mail", {
          type: "email",
          value: ownerEmail,
          onChange: (e) => setOwnerEmail(e.target.value),
          placeholder: "voce@suabarbearia.com.br",
          autoComplete: "email",
          inputMode: "email",
          required: true,
        })}
        {campo("ownerPassword", "Crie uma senha", {
          type: "password",
          value: ownerPassword,
          onChange: (e) => setOwnerPassword(e.target.value),
          placeholder: "Ao menos 6 caracteres",
          autoComplete: "new-password",
          minLength: 6,
          required: true,
        })}
      </div>

      {/* Campo-armadilha: invisível para gente, tentador para robô de
          formulário. Nunca recebe `display:none` — isso os leitores de
          tela detectam e alguns bots contornam; `sr-only` some visualmente
          sem sumir da árvore de acessibilidade... só que aqui a intenção é
          o oposto: ninguém deveria preenchê-lo. `tabIndex={-1}` tira do
          teclado e `aria-hidden` tira do leitor de tela — a pessoa de
          verdade nunca chega a saber que ele existe. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${idBase}-hp`}>Deixe em branco</label>
        <input
          id={`${idBase}-hp`}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <label className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          checked={aceite}
          onChange={(e) => setAceite(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-line-strong bg-ink-950 text-brand accent-[#1d9e75]"
        />
        <span className="text-sm text-body">
          Li e concordo com os{" "}
          <Link href="/legal/termos" target="_blank" className="text-forest-400 underline decoration-brand/40 underline-offset-4 hover:decoration-forest-400">
            Termos de Uso
          </Link>
          , a{" "}
          <Link href="/legal/privacidade" target="_blank" className="text-forest-400 underline decoration-brand/40 underline-offset-4 hover:decoration-forest-400">
            Política de Privacidade
          </Link>{" "}
          e o{" "}
          <Link href="/legal/contrato" target="_blank" className="text-forest-400 underline decoration-brand/40 underline-offset-4 hover:decoration-forest-400">
            Contrato de Assinatura
          </Link>
          .
        </span>
      </label>

      {erros.geral && (
        <p role="alert" className="mt-5 rounded-[var(--radius-control)] border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
          {erros.geral}
        </p>
      )}

      <Button type="submit" size="lg" disabled={enviando || sucesso} className="mt-8 w-full">
        {enviando || sucesso ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {sucesso ? "Entrando na sua conta…" : "Criando sua conta…"}
          </>
        ) : (
          <>
            Criar minha barbearia
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </>
        )}
      </Button>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
        {["14 dias grátis", "sem cartão de crédito", "cancela quando quiser"].map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <Check className="h-3 w-3 text-forest-400" />
            {t}
          </li>
        ))}
      </ul>
    </form>
  );
}
