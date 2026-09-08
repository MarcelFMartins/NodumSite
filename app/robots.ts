import type { MetadataRoute } from "next";

/**
 * robots.txt gerado pelo Next (convenção de arquivo, sem precisar de um
 * public/robots.txt estático). Libera tudo para todo crawler — inclusive
 * os de IA (GPTBot, PerplexityBot, ClaudeBot, etc., que já respeitam o
 * robots.txt padrão) — e aponta o sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://nodumsolucoes.com/sitemap.xml",
  };
}
