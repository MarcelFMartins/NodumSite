import { HeroBarber } from "@/components/barber/hero";
import { Porque } from "@/components/barber/porque";
import { AgendaDemo } from "@/components/barber/agenda-demo";
import { Calculadora } from "@/components/barber/calculadora";
import { Recursos } from "@/components/barber/recursos";
import { PorDentro } from "@/components/barber/pordentro";
import { Validacao } from "@/components/barber/validacao";
import { Acessos } from "@/components/barber/acessos";
import { Seguranca } from "@/components/barber/seguranca";
import { Preco } from "@/components/barber/preco";
import { Suporte } from "@/components/barber/suporte";
import { Faq } from "@/components/barber/faq";
import { FechamentoBarber } from "@/components/barber/fechamento";

/**
 * A ordem segue a conversa que o dono de barbearia tem na cabeça:
 * o que é → por que dói → como resolve (agenda) → quanto isso vale
 * (calculadora) → o que tem dentro → prova (telas reais) → o que ainda
 * vem → quem vê o quê → é seguro? → quanto custa → e depois? → dúvidas.
 */
export default function NodumBarberPage() {
  return (
    <>
      <HeroBarber />
      <Porque />
      <AgendaDemo />
      <Calculadora />
      <Recursos />
      <PorDentro />
      <Validacao />
      <Acessos />
      <Seguranca />
      <Preco />
      <Suporte />
      <Faq />
      <FechamentoBarber />
    </>
  );
}
