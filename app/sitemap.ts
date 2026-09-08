import type { MetadataRoute } from "next";
import { documentos } from "@/lib/legal";

/**
 * sitemap.xml gerado pelo Next a partir das rotas reais do site — a
 * fonte dos slugs legais é `lib/legal.ts` → `documentos`, então um novo
 * contrato de produto entra aqui sozinho, sem precisar lembrar de editar
 * este arquivo também.
 */
const BASE_URL = "https://nodumsolucoes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const paginas: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: agora, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/nodumbarber`, lastModified: agora, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/nodumbarber/cadastro`, lastModified: agora, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/nodumbi`, lastModified: agora, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/agendainterna`, lastModified: agora, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/legal`, lastModified: agora, changeFrequency: "monthly", priority: 0.4 },
  ];

  const legais: MetadataRoute.Sitemap = documentos.map((d) => ({
    url: `${BASE_URL}/legal/${d.slug}`,
    lastModified: agora,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...paginas, ...legais];
}
