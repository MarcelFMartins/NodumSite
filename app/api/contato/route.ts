import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contatoLegal } from "@/lib/legal";

/**
 * Recebe o formulário de contato do site institucional e envia por
 * e-mail via Resend — substitui o antigo `mailto:`, que dependia do
 * visitante ter um app de e-mail configurado no aparelho.
 *
 * Exige duas variáveis de ambiente na Vercel:
 * - RESEND_API_KEY: chave da conta Resend.
 * - RESEND_FROM (opcional): remetente verificado no domínio
 *   nodumsolucoes.com (ex.: "Nodum <contato@nodumsolucoes.com>"). Sem
 *   domínio verificado no Resend, o envio falha — nesse caso, defina
 *   RESEND_FROM com o remetente de teste da própria Resend
 *   (onboarding@resend.dev) até o domínio ser verificado.
 */

const CAMPO_MAX = 2000;

type Corpo = {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

function sanitizar(valor: unknown): string {
  if (typeof valor !== "string") return "";
  return valor.slice(0, CAMPO_MAX).trim();
}

function escapeHtml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let corpo: Corpo;
  try {
    corpo = await request.json();
  } catch {
    return NextResponse.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const nome = sanitizar(corpo.nome);
  const empresa = sanitizar(corpo.empresa);
  const email = sanitizar(corpo.email);
  const telefone = sanitizar(corpo.telefone);
  const mensagem = sanitizar(corpo.mensagem);

  if (!nome || !email) {
    return NextResponse.json({ erro: "Nome e e-mail são obrigatórios." }, { status: 400 });
  }
  // Validação simples, só para barrar lixo óbvio — o Resend recusa
  // remetentes malformados de qualquer forma.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ erro: "E-mail inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada — envio de contato abortado.");
    return NextResponse.json(
      { erro: "Envio de e-mail não está configurado no momento." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const remetente = process.env.RESEND_FROM || "Nodum — Site <onboarding@resend.dev>";
  const assunto = `Contato pelo site — ${empresa || nome}`;

  try {
    const { error } = await resend.emails.send({
      from: remetente,
      to: contatoLegal,
      replyTo: email,
      subject: assunto,
      text: [
        `Nome: ${nome}`,
        `Empresa: ${empresa || "—"}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone || "—"}`,
        "",
        mensagem || "—",
      ].join("\n"),
      html: `
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(empresa || "—")}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(telefone || "—")}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(mensagem || "—").replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Falha ao enviar e-mail via Resend:", error);
      return NextResponse.json({ erro: "Não foi possível enviar sua mensagem." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro inesperado ao enviar contato:", err);
    return NextResponse.json({ erro: "Não foi possível enviar sua mensagem." }, { status: 500 });
  }
}
