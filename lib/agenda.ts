/**
 * Conteúdo da landing do Nodum Tarefas.
 *
 * Mesmo padrão do Nodum BI: sem cadastro público nem plano publicado.
 * É sistema multiempresa personalizado — cada empresa que usa (hoje, a
 * própria Nodum e a Vogel Assessoria Contábil) tem os próprios dados
 * isolados dos demais, e recursos podem ser específicos por empresa.
 * Todo CTA chama uma conversa, não "criar conta".
 */

export const agendaInterna = {
  nome: "Nodum Tarefas",
  nomeCompleto: "Nodum Tarefas",
  tagline: "Tarefas, CRM e financeiro da sua empresa, num sistema só",
};

export function zapAgenda(whatsapp: string) {
  const texto = "Quero conhecer o Nodum Tarefas para a minha empresa.";
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const legalAgenda = {
  termos: "/legal/termos",
  privacidade: "/legal/privacidade",
  contrato: "/legal/contrato-agendainterna",
};

export const navAgenda = [
  { label: "Por que existe", href: "#porque" },
  { label: "Tarefas", href: "#tarefas" },
  { label: "CRM", href: "#crm" },
  { label: "Financeiro", href: "#financeiro" },
  { label: "Por dentro", href: "#pordentro" },
  { label: "Acessos", href: "#acessos" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroAgenda = {
  eyebrow: "Tarefas + CRM + Financeiro",
  titulo: ["O trabalho, os clientes e o caixa", "da empresa — numa tela só."],
  subtitulo:
    "Quadro de tarefas com prazo e checklist, funil de vendas com WhatsApp, e agora contas a pagar e a receber com painel financeiro e saldo previsto. Multiempresa — cada empresa enxerga só os próprios dados. Já usado todo dia pela própria Nodum e pela Vogel Assessoria Contábil.",
  selos: ["Multiempresa, dados isolados", "Alertas com som de prazo e atraso", "Backup 2× por dia"],
  avisos: [
    { titulo: "Conta vence hoje", texto: "Energia elétrica · R$ 412,35" },
    { titulo: "Tarefa atrasada", texto: "Atualizar planilha de preços · Rafael" },
    { titulo: "Negócio ganho", texto: "Implantação — Bom Trigo · R$ 12.000" },
    { titulo: "Recebimento confirmado", texto: "Consultoria — Ramos Moda · R$ 1.900" },
  ],
  provas: [
    { valor: "3", rotulo: "sistemas, um só", nota: "tarefas, CRM comercial e financeiro" },
    { valor: "0", rotulo: "planilha para o caixa", nota: "saldo previsto calculado sozinho" },
    { valor: "N", rotulo: "empresas no mesmo sistema", nota: "cada uma só vê os próprios dados" },
    { valor: "15s", rotulo: "para a tela se atualizar", nota: "o que o colega muda aparece sozinho" },
  ],
};

/* ------------------------------------------------------------------ */
/* Por que existe                                                      */
/* ------------------------------------------------------------------ */

export const porqueAgenda = {
  eyebrow: "Por que existe",
  titulo: ["O trabalho do dia e o cliente novo", "vivem em lugares separados."],
  intro:
    "Quatro coisas que acontecem quando o trabalho, o comercial e o dinheiro da empresa não moram no mesmo lugar.",
  cenas: [
    {
      quando: "Toda segunda",
      titulo: "Ninguém sabe o que está atrasado de verdade",
      texto:
        "A tarefa existe numa lista, no chat, na cabeça de alguém. Quando o prazo passa, ninguém percebe até o cliente perguntar.",
    },
    {
      quando: "No meio da venda",
      titulo: "O negócio fechou e a execução começa do zero",
      texto:
        "O funil vive numa ferramenta, o trabalho em outra. Alguém precisa copiar tudo de novo para transformar o negócio ganho em tarefa.",
    },
    {
      quando: "Dia 10",
      titulo: "A conta venceu e ninguém lembrou",
      texto:
        "O boleto estava no e-mail, a fatura do cartão em outro app, o recebível na cabeça de alguém. Juros pagos e dinheiro a receber esquecido.",
    },
    {
      quando: "Com mais de uma empresa",
      titulo: "Cada operação tem sua própria bagunça",
      texto:
        "Sem separação de verdade entre empresas, ou se mistura tudo numa planilha só, ou se paga por um sistema inteiro para cada operação.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Tarefas                                                             */
/* ------------------------------------------------------------------ */

export const tarefasAgenda = {
  eyebrow: "Tarefas",
  titulo: ["Quadro, tabela ou gráfico —", "o mesmo trabalho, três jeitos de ver."],
  texto:
    "Arraste entre etapas no quadro kanban, ordene tudo numa tabela, ou veja o panorama nos gráficos por status, prioridade e responsável. Filtros combináveis por responsável, status, prioridade, período e recorrência — nas três visões.",
  itens: [
    "Projetos com progresso e etapas do quadro personalizáveis por empresa",
    "Prioridade, prazo e checklist em cada tarefa",
    "Anexos e vínculos entre tarefas relacionadas",
    "Recorrência automática — diária, semanal ou mensal",
    "Aviso de tarefa atrasada, vencendo ou concluída",
    "Carga de trabalho de cada pessoa, visível no Painel e na Equipe",
    "Alerta com som e cartão flutuante no horário da tarefa",
    "Tela se atualiza sozinha quando um colega cria ou mexe numa tarefa",
  ],
  telas: [
    { aba: "Quadro", src: "/img/agenda/v3/quadro.webp" },
    { aba: "Tabela", src: "/img/agenda/v3/tarefas.webp" },
    { aba: "Gráficos", src: "/img/agenda/v3/graficos.webp" },
  ],
};

/* ------------------------------------------------------------------ */
/* CRM                                                                 */
/* ------------------------------------------------------------------ */

export const crmAgenda = {
  eyebrow: "CRM",
  titulo: ["O funil de vendas", "com ponte direta para o trabalho."],
  texto:
    "Contatos, negócios, atividades e automações — inclusive de WhatsApp — num funil com etapas configuráveis. Quando o negócio fecha, uma ponte direta cria a tarefa de execução: a venda não se perde na passagem para o time.",
  itens: [
    "Etapas do funil configuráveis por empresa",
    "Contatos com histórico e negócios vinculados",
    "Automações de atividade, inclusive por WhatsApp",
    "Cria tarefa direto a partir de um negócio ganho",
    "Taxa de conversão e valor em jogo por etapa, à vista",
  ],
  src: "/img/agenda/v3/funil.webp",
};

/* ------------------------------------------------------------------ */
/* Financeiro                                                          */
/* ------------------------------------------------------------------ */

export const financeiroAgenda = {
  eyebrow: "Novo · Financeiro",
  titulo: ["O dinheiro da empresa", "no mesmo lugar que o trabalho."],
  texto:
    "Contas a pagar e a receber, cartão de crédito com fatura que soma sozinha e um painel que mostra o saldo disponível, o que vence nos próximos dias e o saldo previsto. Conta atrasada aparece no Painel, com alerta, até alguém resolver.",
  numeros: [
    { rotulo: "A pagar", valor: 4760.35, cor: "text-[#e5484d]" },
    { rotulo: "A receber", valor: 7700, cor: "text-forest-400" },
    { rotulo: "Saldo previsto", valor: 8649.75, cor: "text-white" },
  ],
  telas: [
    {
      aba: "Painel financeiro",
      src: "/img/agenda/v3/financeiro.webp",
      texto:
        "Saldo disponível, contas a pagar e a receber, saldo previsto, atrasados e liquidez — com filtro de período e gráficos por status.",
    },
    {
      aba: "Contas a pagar",
      src: "/img/agenda/v3/contas-pagar.webp",
      texto:
        "Boleto, PIX ou cartão. Conta recorrente (aluguel, internet, sistema) gera a próxima sozinha quando a atual é paga.",
    },
  ],
  itens: [
    "Contas a pagar e a receber com recorrência",
    "Cartão de crédito: data de fechamento decide em qual fatura cai",
    "Compra recorrente no cartão renova a cada fatura paga",
    "Anexo do boleto ou comprovante, aberto sem baixar",
    "Cores por significado: vermelho a pagar, verde a receber, azul saldo",
    "Fluxo por semana e próximos vencimentos no Painel",
  ],
};

/* ------------------------------------------------------------------ */
/* Por dentro — telas reais                                            */
/* ------------------------------------------------------------------ */

export const pordentroAgenda = {
  eyebrow: "Por dentro",
  titulo: ["Não é maquete.", "É o sistema em uso todo dia."],
  intro:
    "As telas abaixo são do sistema como ele está hoje, com uma empresa de demonstração (a Prisma Consultoria, fictícia) — nenhum dado de cliente real aparece aqui.",
  telas: [
    {
      aba: "Painel",
      src: "/img/agenda/v3/painel.webp",
      titulo: "Tudo que importa hoje, de cara",
      texto:
        "Saudação com o resumo do dia, contas em atraso, tarefas em aberto, atrasadas e vencendo, gráficos clicáveis, prioridades da semana, financeiro dos próximos 30 dias e o funil — numa página.",
    },
    {
      aba: "Quadro",
      src: "/img/agenda/v3/quadro.webp",
      titulo: "Arrasta e solta entre etapas",
      texto:
        "O quadro kanban do jeito que qualquer time já conhece, com prioridade, prazo, checklist e responsáveis visíveis em cada cartão.",
    },
    {
      aba: "Tabela",
      src: "/img/agenda/v3/tarefas.webp",
      titulo: "A mesma lista, ordenável e filtrável",
      texto:
        "Responsável, status, prioridade, prazo e checklist numa tabela, com filtros combináveis por pessoa, projeto, status, prioridade, recorrência e período.",
    },
    {
      aba: "Prazos",
      src: "/img/agenda/v3/prazos.webp",
      titulo: "As tarefas mais urgentes, sempre à frente",
      texto:
        "Atrasadas, hoje, próximos 7 dias e depois — o que está atrasado aparece primeiro, sem caçar em nenhuma outra tela.",
    },
    {
      aba: "Funil",
      src: "/img/agenda/v3/funil.webp",
      titulo: "Negócios em aberto, ganhos e perdidos",
      texto:
        "Valor em jogo por etapa, taxa de conversão e automações de WhatsApp — o funil comercial inteiro numa tela.",
    },
    {
      aba: "Financeiro",
      src: "/img/agenda/v3/financeiro.webp",
      titulo: "Saldo previsto sem planilha",
      texto:
        "Contas a pagar e a receber consolidadas, com o que está atrasado no topo e a liquidez dos próximos 7 dias.",
    },
    {
      aba: "Equipe",
      src: "/img/agenda/v3/equipe.webp",
      titulo: "Quem é quem, e a carga de cada um",
      texto: "Tarefas em aberto, atrasadas e concluídas por pessoa — para redistribuir antes que vire atraso.",
    },
  ],
  rodape:
    "Cada empresa que usa o sistema vê apenas os próprios dados — equipe, tarefas, clientes, funil e financeiro. Personalizações específicas, como o cadastro de Clientes/Empresas (hoje exclusivo da Vogel), existem quando fazem sentido para a operação de uma empresa em particular.",
};

/* ------------------------------------------------------------------ */
/* Acessos                                                              */
/* ------------------------------------------------------------------ */

export const acessosAgenda = {
  eyebrow: "Acessos",
  titulo: ["Multiempresa de verdade:", "uma não vê a outra."],
  intro:
    "Várias empresas usam o mesmo sistema — cada uma com equipe, tarefas, clientes e funil isolados dos demais. Todo mundo, em qualquer empresa, tem acesso à própria conta em Configurações: foto, dados pessoais e segurança de senha.",
  perfis: [
    {
      aba: "Administração",
      titulo: "Enxerga a operação da própria empresa",
      pode: [
        "Todas as tarefas, projetos e o funil da empresa",
        "Cadastra e remove pessoas da equipe",
        "Configura etapas do quadro e do funil",
        "Ativa recursos específicos da empresa, como Clientes/Empresas",
      ],
      naoPode: ["Não vê dados de outra empresa no mesmo sistema"],
    },
    {
      aba: "Equipe",
      titulo: "Enxerga o que precisa para trabalhar",
      pode: [
        "As próprias tarefas e as do time, conforme o que for compartilhado",
        "O funil e os contatos da empresa",
        "Configurações da própria conta — foto, dados, senha",
      ],
      naoPode: ["Não vê dados de outra empresa cadastrada no sistema"],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqAgenda = {
  eyebrow: "Dúvidas",
  titulo: "O que perguntam antes de começar",
  itens: [
    {
      p: "Minha empresa e outra empresa podem usar o mesmo sistema sem uma ver a outra?",
      r: "Sim — é assim que o sistema já roda hoje, com a Nodum e a Vogel Assessoria Contábil na mesma base, cada uma vendo só os próprios dados.",
    },
    {
      p: "Dá para personalizar para a minha operação?",
      r: "Depende do que for. Etapas do quadro e do funil já são configuráveis por empresa, direto na tela. Recursos maiores, como o cadastro de Clientes/Empresas (hoje exclusivo da Vogel), nascem sob medida quando fazem sentido para uma operação específica.",
    },
    {
      p: "O CRM conversa com as tarefas, ou são coisas separadas?",
      r: "Conversam. Um negócio ganho no funil vira tarefa de execução com um clique — não precisa recadastrar nada para o time começar a trabalhar.",
    },
    {
      p: "Consigo mandar mensagem pelo WhatsApp de dentro do sistema?",
      r: "Sim. A conexão é por QR code, e as conversas — com histórico e mensagens agendadas — ficam dentro do sistema, tanto no CRM quanto nas automações do funil.",
    },
    {
      p: "O financeiro substitui o meu sistema contábil?",
      r: "Não é a ideia. Ele organiza o dia a dia do caixa — o que pagar, o que receber, quanto sobra — no mesmo lugar das tarefas e dos clientes. A contabilidade continua com o seu contador.",
    },
    {
      p: "Dá para controlar a fatura do cartão da empresa?",
      r: "Dá. O cartão é cadastrado com data de fechamento e vencimento; cada compra cai na fatura certa pela data, e compra recorrente (uma assinatura, por exemplo) renova sozinha a cada fatura paga.",
    },
    {
      p: "Isso é um produto pronto ou sob medida?",
      r: "As duas coisas. Tarefas, quadro, funil e contatos são a base que qualquer empresa usa. Além disso, o sistema aceita personalização por empresa quando a operação pede algo específico.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Fechamento                                                          */
/* ------------------------------------------------------------------ */

export const fechamentoAgenda = {
  eyebrow: "Ver funcionando",
  titulo: ["Mostramos o sistema", "com o seu fluxo de trabalho."],
  texto:
    "Uma conversa para entender como sua empresa organiza tarefas, clientes e contas hoje, e mostrar como ficaria dentro do Nodum Tarefas.",
};
