/**
 * Conteúdo da landing do NodumStudio.
 *
 * O NodumStudio é a vertente do NodumBarber para estúdios de beleza:
 * agenda, comissão, planos, estoque e caixa são os mesmos; o que muda é
 * o vocabulário de cada ramo (manicure, cabeleireiro, esteticista...),
 * os serviços de partida e a paleta (rosé + ameixa, no lugar do jade).
 * A fonte da copy é o próprio sistema — README, lib/segmentos.ts e a
 * aba Atualizações (lib/updates/changelog.ts). Nada que ele não faça
 * hoje entra aqui como se fizesse.
 *
 * Sem cadastro público ainda: todo CTA abre uma conversa no WhatsApp.
 */

import { site } from "./content";

const zap = (texto: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

/**
 * Único lugar que sabe o endereço do sistema. O cadastro é uma página
 * local (/nodumstudio/cadastro); só o POST final cruza para o domínio
 * do sistema, que libera CORS com credenciais para
 * https://nodumsolucoes.com (app/api/signup/route.ts do nodum-studio).
 * O cookie de sessão nasce em studio.nodumsolucoes.com — mesmo site
 * registrável que o nosso, então o SameSite=lax dele vale — e o
 * redirecionamento final já cai logado no Início.
 */
const APP = "https://studio.nodumsolucoes.com";

export const sistemaStudio = {
  base: APP,
  entrar: `${APP}/login`,
  cadastro: "/nodumstudio/cadastro",
  apiSignup: `${APP}/api/signup`,
  dashboard: `${APP}/dashboard`,
  /** Contrato de Assinatura do ramo escolhido, publicado pelo sistema. */
  contrato: (slug: string) => `${APP}/contrato/${slug}`,
};

/**
 * Ramos aceitos pelo cadastro — espelho de SEGMENTOS/TERMOS em
 * lib/segmentos.ts do sistema (valor enviado, nome e slug do contrato).
 */
export const ramosCadastro = [
  { valor: "MANICURE", nome: "Manicure e pedicure", slug: "manicure-e-pedicure", exemplo: "Estúdio de Unhas da Bia" },
  { valor: "SALAO", nome: "Salão de beleza", slug: "salao-de-beleza", exemplo: "Salão da Ana" },
  { valor: "SOBRANCELHAS", nome: "Sobrancelhas e cílios", slug: "sobrancelhas-e-cilios", exemplo: "Studio Olhar" },
  { valor: "ESTETICA", nome: "Clínica de estética", slug: "clinica-de-estetica", exemplo: "Clínica Bem Estar" },
  { valor: "DEPILACAO", nome: "Depilação", slug: "depilacao", exemplo: "Espaço Pele Lisa" },
  { valor: "MAQUIAGEM", nome: "Maquiagem e penteado", slug: "maquiagem-e-penteado", exemplo: "Estúdio Make" },
  { valor: "TATUAGEM", nome: "Tatuagem e piercing", slug: "tatuagem-e-piercing", exemplo: "Estúdio Tinta Fina" },
] as const;

export const studio = {
  nome: "NodumStudio",
  tagline: "Agenda e gestão para estúdios de beleza",
  precoBase: "R$ 79,90",
  teste: "14 dias para testar",
  whatsapp: zap("Quero conhecer o NodumStudio para o meu estúdio."),
  whatsappDuvida: zap("Olá! Tenho uma dúvida sobre o NodumStudio."),
};

export const legalStudio = {
  termos: "/legal/termos",
  privacidade: "/legal/privacidade",
};

export const navStudio = [
  { label: "Para quem é", href: "#ramos" },
  { label: "Agenda", href: "#agenda" },
  { label: "Caixa e planos", href: "#caixa" },
  { label: "Financeiro", href: "#financeiro" },
  { label: "Por dentro", href: "#pordentro" },
  { label: "Preço", href: "#preco" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroStudio = {
  eyebrow: "Gestão para estúdios de beleza",
  titulo: ["A agenda cheia,", "o caixa no lugar."],
  subtitulo:
    "Agenda por profissional, link para a cliente marcar sozinha, planos e pacotes com crédito, comissão que fecha sozinha, estoque, venda a prazo e financeiro. O NodumStudio nasceu do NodumBarber e fala a língua do seu estúdio — manicure, salão, sobrancelhas, estética e mais.",
  selos: ["14 dias para testar", "Funciona no celular", "Sem fidelidade"],
  avisos: [
    { titulo: "Novo agendamento online", texto: "Rafaela Duarte · Pé e mão · 09:30" },
    { titulo: "Atendimento concluído", texto: "Camila Ribeiro · R$ 85,00 · PIX" },
    { titulo: "Crédito do plano usado", texto: "Plano Mensal — 4 Manicures · restam 3" },
    { titulo: "Condicional devolvida", texto: "2 peças vendidas, 1 voltou ao estoque" },
  ],
  provas: [
    { valor: "7", rotulo: "ramos da beleza", nota: "cada um com o próprio vocabulário" },
    { valor: "24h", rotulo: "de agenda aberta", nota: "a cliente marca pelo link do estúdio" },
    { valor: "0", rotulo: "planilhas para manter", nota: "comissão e caixa já calculados" },
    { valor: "2×", rotulo: "backup por dia", nota: "cada cópia conferida, todo dia" },
  ],
};

/* ------------------------------------------------------------------ */
/* Ramos                                                               */
/* ------------------------------------------------------------------ */

/** Espelho de lib/segmentos.ts do sistema. */
export const ramosStudio = {
  eyebrow: "Para quem é",
  titulo: ["Um sistema, sete ramos.", "Cada um com as próprias palavras."],
  intro:
    "Na hora do cadastro você escolhe o tipo de negócio. As telas passam a falar “manicure”, “cabeleireiro” ou “esteticista”, o estúdio já nasce com os serviços de partida do ramo, e cada ramo tem o próprio contrato.",
  ramos: [
    { nome: "Manicure e pedicure", quem: "manicures", exemplo: "Pé e mão · 90 min" },
    { nome: "Salão de beleza", quem: "cabeleireiros", exemplo: "Coloração · 120 min" },
    { nome: "Sobrancelhas e cílios", quem: "designers", exemplo: "Extensão de cílios · 120 min" },
    { nome: "Clínica de estética", quem: "esteticistas", exemplo: "Limpeza de pele · 60 min" },
    { nome: "Depilação", quem: "depiladoras", exemplo: "Laser — sessão · 30 min" },
    { nome: "Maquiagem e penteado", quem: "maquiadores", exemplo: "Maquiagem social · 60 min" },
    { nome: "Tatuagem e piercing", quem: "tatuadores", exemplo: "Sessão de tatuagem" },
  ],
};

/* ------------------------------------------------------------------ */
/* Por que existe                                                      */
/* ------------------------------------------------------------------ */

export const porqueStudio = {
  eyebrow: "Por que existe",
  titulo: ["Estúdio cheio não é estúdio organizado.", "O dinheiro escapa nos detalhes."],
  intro: "Três coisas que acontecem em todo estúdio sem sistema — e custam caro no fim do mês.",
  cenas: [
    {
      quando: "Fora do horário",
      titulo: "A cliente quis marcar e ninguém respondeu",
      texto:
        "A mensagem chegou às 22h, ficou sem resposta e ela marcou com outra profissional. Com o link do estúdio, ela escolhe o horário sozinha.",
    },
    {
      quando: "Fim do mês",
      titulo: "A comissão de cada uma não fecha",
      texto:
        "Teve pacote, desconto, venda de produto e pagamento dividido. A conta no caderno nunca bate com a da profissional.",
    },
    {
      quando: "Todo dia",
      titulo: "O esmalte acaba e a venda a prazo some",
      texto:
        "Material de uso, produto vendido e a cliente que ficou de pagar depois — tudo na memória. No fim, ninguém sabe quanto o estúdio tem a receber.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Blocos de recurso (texto + print)                                   */
/* ------------------------------------------------------------------ */

export const blocosStudio = [
  {
    id: "agenda",
    eyebrow: "Agenda e agendamento online",
    titulo: ["Uma coluna por profissional.", "E um link para a cliente marcar sozinha."],
    texto:
      "A grade do dia mostra cada atendimento na altura da duração, com almoço, folga e bloqueios hachurados. Dois clientes nunca caem no mesmo horário. E o link do estúdio — na bio do Instagram ou no status do WhatsApp — deixa a cliente escolher serviço, profissional e horário, sem baixar aplicativo.",
    itens: [
      "Dia, semana e mês, com filtro por profissional",
      "Link próprio do estúdio, sem cadastro prévio da cliente",
      "Pedido online entra como pendente até a equipe confirmar",
      "Cliente fixa: toda semana, quinzenal ou a cada N semanas",
      "Aniversário da cliente avisado na agenda do dia",
      "WhatsApp com texto pronto para confirmar e lembrar",
    ],
    src: "/img/studio/agenda.webp",
    alt: "Agenda do NodumStudio com uma coluna por profissional, almoço hachurado e atendimentos de manicure, pedicure e esmaltação em gel",
    celular: "/img/studio/agendar.webp",
  },
  {
    id: "caixa",
    eyebrow: "Caixa, planos e comissão",
    titulo: ["Fechar o atendimento", "já fecha a conta de todo mundo."],
    texto:
      "Ao concluir, você registra a forma de pagamento — dinheiro, PIX, cartão com bandeira, a prazo, ou dividida entre várias —, adiciona o produto que saiu e o sistema calcula a comissão e baixa o estoque. Planos e pacotes entram no caixa uma vez, na venda; cada atendimento coberto sai por R$ 0 e debita o crédito na hora.",
    itens: [
      "Comissão padrão por profissional e diferente por serviço",
      "Pagamento dividido só fecha se as partes somarem o total",
      "“4 manicures por R$ 120, 30 dias” com extrato de uso",
      "Aviso de quem está prestes a perder crédito",
      "Venda de balcão sem agendamento",
      "Relatórios com filtro e exportação",
    ],
    src: "/img/studio/planos.webp",
    alt: "Tela de Planos do NodumStudio com o Plano Mensal — 4 Manicures de duas clientes e os créditos restantes",
  },
  {
    id: "financeiro",
    eyebrow: "Novo · Financeiro, estoque e condicional",
    titulo: ["O dinheiro do estúdio", "além da cadeira."],
    texto:
      "Venda a prazo vira parcelas no nome da cliente, com baixa total ou parcial. Fornecedor, aluguel e contas entram em A pagar — a entrada de estoque pode virar conta a pagar. O painel mostra o caixa do mês, o que vence e quem está devendo. E a condicional: a cliente leva peças para experimentar, e na volta o que ela ficou vira venda.",
    itens: [
      "Contas a receber e a pagar, parceladas",
      "Caixa do mês e previsão de 30 dias",
      "Produtos com variações (tamanho, cor), cada uma com estoque",
      "Uso interno: esmalte, acetona e algodão com baixa por uso",
      "Condicional que volta ao estoque ou vira venda",
      "Alerta de estoque baixo",
    ],
    src: "/img/studio/financeiro.webp",
    alt: "Painel Financeiro do NodumStudio com caixa do mês, contas a receber e a pagar e o gráfico de entradas dos últimos 30 dias",
  },
];

/* ------------------------------------------------------------------ */
/* Por dentro — telas reais                                            */
/* ------------------------------------------------------------------ */

export const pordentroStudio = {
  eyebrow: "Por dentro",
  titulo: ["Telas reais,", "de um estúdio de demonstração."],
  intro:
    "Nada de mockup: estes são prints do sistema rodando, com um estúdio de manicure de exemplo — três profissionais, agenda do dia, planos vendidos e 45 dias de histórico.",
  telas: [
    {
      aba: "Início",
      src: "/img/studio/dashboard.webp",
      titulo: "O dia e o mês do estúdio numa tela",
      texto:
        "Faturamento de hoje, da semana e do mês, ticket médio, atendimentos por categoria (Mãos e Pés, Sobrancelhas, Estética facial), comissões a pagar e o gráfico dos últimos 30 dias.",
    },
    {
      aba: "Clientes",
      src: "/img/studio/clientes.webp",
      titulo: "A carteira de cada profissional",
      texto:
        "Histórico de visitas, telefone, quanto já gastou e de qual profissional a cliente é. Importa a lista antiga por planilha.",
    },
    {
      aba: "Serviços",
      src: "/img/studio/servicos.webp",
      titulo: "Serviços agrupados por categoria",
      texto:
        "Crie as categorias do seu jeito — Mãos, Pés, Sobrancelhas — com duração e preço. Os planos aparecem junto, com o valor de cada atendimento coberto.",
    },
    {
      aba: "Relatórios",
      src: "/img/studio/relatorios.webp",
      titulo: "Quanto entrou e quanto é de cada uma",
      texto:
        "Atendimentos e vendas por período, profissional, status e serviço, com faturamento, descontos, comissões e gorjetas — e o histórico de uso dos planos.",
    },
    {
      aba: "Projeção",
      src: "/img/studio/projecao.webp",
      titulo: "Onde o mês vai fechar",
      texto:
        "No ritmo dos dias já fechados, o sistema projeta o faturamento do mês — no total e por categoria de serviço.",
    },
    {
      aba: "Estoque",
      src: "/img/studio/estoque.webp",
      titulo: "Produto que sai, produto que entra",
      texto:
        "Entrada e ajuste com histórico de movimentação, alerta de estoque baixo e venda junto com o atendimento.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Preço                                                               */
/* ------------------------------------------------------------------ */

export const precoStudio = {
  eyebrow: "Preço",
  titulo: ["Tudo incluso.", "Você escolhe pelo tamanho da equipe."],
  intro:
    "Valores no PIX, mensal. Pagando trimestral, semestral ou anual há desconto. Sem fidelidade: cancela quando quiser.",
  /** Os planos mudam só o tamanho da equipe (lib/legal/documentos.ts do sistema). */
  planos: [
    { nome: "Essencial", valor: "79,90", equipe: "até 5 profissionais" },
    { nome: "Profissional", valor: "99,90", equipe: "até 10 profissionais", destaque: true },
    { nome: "Premium", valor: "149,90", equipe: "profissionais ilimitadas" },
  ],
  incluso: [
    "Agenda e agendamento online",
    "Comissões, planos e pacotes",
    "Estoque, condicional e venda a prazo",
    "Financeiro, relatórios e projeção",
  ],
  nota: "Todos os recursos em todos os planos — o que muda é o tamanho da equipe.",
};

/* ------------------------------------------------------------------ */
/* FAQ e fechamento                                                    */
/* ------------------------------------------------------------------ */

export const faqStudio = {
  eyebrow: "Perguntas",
  titulo: "O que todo estúdio pergunta antes",
  itens: [
    {
      p: "Qual a diferença para o NodumBarber?",
      r: "A base é a mesma — agenda, comissão, planos, estoque e caixa. O NodumStudio fala a língua da beleza (manicure, cabeleireiro, esteticista), nasce com os serviços do seu ramo e ganhou recursos próprios: categorias de serviço, venda a prazo, condicional, produtos com variação e material de uso interno.",
    },
    {
      p: "Meu estúdio faz unha e sobrancelha. Serve?",
      r: "Serve. O ramo só define o vocabulário e os serviços de partida — depois você cria as categorias e serviços que quiser, como Mãos, Pés, Sobrancelhas e Estética facial no mesmo estúdio.",
    },
    {
      p: "O sistema manda WhatsApp sozinho?",
      r: "Não, e de propósito. Os botões abrem o WhatsApp da cliente com a mensagem pronta (confirmação, lembrete, aniversário) e quem envia é você — zero risco de o número ser bloqueado.",
    },
    {
      p: "Cada profissional vê o caixa do estúdio?",
      r: "Não. A funcionária vê só a própria agenda e a própria comissão. Financeiro, estoque, equipe e relatórios são da dona.",
    },
    {
      p: "Funciona no celular?",
      r: "Sim, é um sistema web: abre no navegador do celular, do tablet ou do computador, sem instalar nada.",
    },
  ],
};

export const fechamentoStudio = {
  eyebrow: "Vamos conversar",
  titulo: ["Seu estúdio merece", "um sistema que fala a sua língua."],
  texto:
    "Conte como o seu estúdio funciona hoje. A gente mostra o NodumStudio rodando com o seu ramo e deixa tudo pronto para você testar.",
};
