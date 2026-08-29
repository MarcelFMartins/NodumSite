import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentoLegal } from "@/components/legal/documento";
import { FooterLegal } from "@/components/legal/casca";
import { documentos, porSlug } from "@/lib/legal";

export function generateStaticParams() {
  return documentos.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = porSlug(slug);
  if (!doc) return {};

  return {
    title: `${doc.titulo} — ${doc.aplica}`,
    description: doc.resumo,
    alternates: { canonical: `/legal/${doc.slug}` },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      title: `${doc.titulo} — ${doc.aplica}`,
      description: doc.subtitulo,
    },
  };
}

export default async function DocumentoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = porSlug(slug);
  if (!doc) notFound();

  return (
    <>
      <DocumentoLegal doc={doc} />
      <FooterLegal atual={doc.slug} />
    </>
  );
}
