import { HeroStudio } from "@/components/studio/hero";
import { RamosStudio } from "@/components/studio/ramos";
import { PorqueStudio } from "@/components/studio/porque";
import { BlocosStudio } from "@/components/studio/blocos";
import { PorDentroStudio } from "@/components/studio/pordentro";
import { PrecoStudio } from "@/components/studio/preco";
import { FaqStudio } from "@/components/studio/faq";
import { FechamentoStudio } from "@/components/studio/fechamento";

export default function NodumStudioPage() {
  return (
    <>
      <HeroStudio />
      <RamosStudio />
      <PorqueStudio />
      <BlocosStudio />
      <PorDentroStudio />
      <PrecoStudio />
      <FaqStudio />
      <FechamentoStudio />
    </>
  );
}
