import { HeroBarber } from "@/components/barber/hero";
import { Porque } from "@/components/barber/porque";
import { AgendaDemo } from "@/components/barber/agenda-demo";
import { Calculadora } from "@/components/barber/calculadora";
import { Recursos } from "@/components/barber/recursos";
import { PorDentro } from "@/components/barber/pordentro";
import { Novidades } from "@/components/barber/novidades";
import { Online } from "@/components/barber/online";
import { Caixa } from "@/components/barber/caixa";
import { Acessos } from "@/components/barber/acessos";
import { Seguranca } from "@/components/barber/seguranca";
import { Preco } from "@/components/barber/preco";
import { Suporte } from "@/components/barber/suporte";
import { Faq } from "@/components/barber/faq";
import { FechamentoBarber } from "@/components/barber/fechamento";

/**
 * A ordem segue a conversa que o dono de barbearia tem na cabeça:
 * o que é → está vivo (novidades) → por que dói → o cliente marca
 * sozinho (online) → como encaixa (agenda) → fechar a conta e planos
 * (caixa) → quanto isso vale (calculadora) → o que tem dentro → prova
 * (telas reais) → quem vê o quê → é seguro? → quanto custa → e depois?
 */
export default function NodumBarberPage() {
  return (
    <>
      <HeroBarber />
      <Novidades />
      <Porque />
      <Online />
      <AgendaDemo />
      <Caixa />
      <Calculadora />
      <Recursos />
      <PorDentro />
      <Acessos />
      <Seguranca />
      <Preco />
      <Suporte />
      <Faq />
      <FechamentoBarber />
    </>
  );
}
