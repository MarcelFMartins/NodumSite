import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

/**
 * Casca do site institucional. O NodumBarber vive fora deste grupo
 * porque tem cabeçalho e rodapé próprios — a landing do produto se
 * apresenta como produto, não como uma página a mais do site.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
