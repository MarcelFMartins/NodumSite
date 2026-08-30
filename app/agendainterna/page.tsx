import { HeroAgenda } from "@/components/agenda/hero";
import { PorqueAgenda } from "@/components/agenda/porque";
import { TarefasAgenda } from "@/components/agenda/tarefas";
import { CrmAgenda } from "@/components/agenda/crm";
import { PorDentroAgenda } from "@/components/agenda/pordentro";
import { AcessosAgenda } from "@/components/agenda/acessos";
import { FaqAgenda } from "@/components/agenda/faq";
import { FechamentoAgenda } from "@/components/agenda/fechamento";

export default function AgendaInternaPage() {
  return (
    <>
      <HeroAgenda />
      <PorqueAgenda />
      <TarefasAgenda />
      <CrmAgenda />
      <PorDentroAgenda />
      <AcessosAgenda />
      <FaqAgenda />
      <FechamentoAgenda />
    </>
  );
}
