import type { Metadata } from "next";
import { HeaderLegal } from "@/components/legal/casca";

export const metadata: Metadata = {
  title: { default: "Documentos legais", template: "%s | Nodum" },
  robots: { index: true, follow: true },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLegal />
      <main id="conteudo">{children}</main>
    </>
  );
}
