import { HeroBi } from "@/components/bi/hero";
import { PorqueBi } from "@/components/bi/porque";
import { PainelBi } from "@/components/bi/painel";
import { PorDentroBi } from "@/components/bi/pordentro";
import { DadosBi } from "@/components/bi/dados";
import { AcessosBi } from "@/components/bi/acessos";
import { FaqBi } from "@/components/bi/faq";
import { FechamentoBi } from "@/components/bi/fechamento";

export default function NodumBiPage() {
  return (
    <>
      <HeroBi />
      <PorqueBi />
      <PainelBi />
      <PorDentroBi />
      <DadosBi />
      <AcessosBi />
      <FaqBi />
      <FechamentoBi />
    </>
  );
}
