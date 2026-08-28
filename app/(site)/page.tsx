import { Hero } from "@/components/sections/hero";
import { Problema } from "@/components/sections/problema";
import { Solucao } from "@/components/sections/solucao";
import { Servicos } from "@/components/sections/servicos";
import { Produtos } from "@/components/sections/produtos";
import { Processo } from "@/components/sections/processo";
import { Sobre } from "@/components/sections/sobre";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <Solucao />
      <Servicos />
      <Produtos />
      <Processo />
      <Sobre />
      <Contato />
    </>
  );
}
