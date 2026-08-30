/**
 * Conteúdo da landing da Agenda Interna Nodum.
 *
 * Mesmo padrão do Nodum BI: sem cadastro público nem plano publicado.
 * É sistema multiempresa personalizado — cada empresa que usa (hoje, a
 * própria Nodum e a Vogel Assessoria Contábil) tem os próprios dados
 * isolados dos demais, e recursos podem ser específicos por empresa.
 * Todo CTA chama uma conversa, não "criar conta".
 */

export const agendaInterna = {
  nome: "Agenda Interna",
  nomeCompleto: "Agenda Interna Nodum",
  tagline: "Tarefas e CRM da sua empresa, num sistema só",
};

export function zapAgenda(whatsapp: string) {
  const texto = "Quero conhecer a Agenda Interna Nodum para a minha empresa.";
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const legalAgenda = {
  termos: "/legal/termos",
  privacidade: "/legal/privacidade",
};

export const navAgenda = [
  { label: "Por que existe", href: "#porque" },
  { label: "Tarefas", href: "#tarefas" },
  { label: "CRM", href: "#crm" },
  { label: "Por dentro", href: "#pordentro" },
  { label: "Acessos", href: "#acessos" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroAgenda = {
  eyebrow: "Gestão de tarefas + CRM",
  titulo: ["Tarefas e CRM da sua empresa,", "num sistema só."],
  subtitulo:
    "Gestão de tarefas e relacionamento com clientes num sistema só, multiempresa — cada empresa enxerga só os próprios dados. Já usado pela própria Nodum e pela Vogel Assessoria Contábil, com personalizações específicas quando o time precisa.",
  selos: ["Multiempresa, dados isolados", "Kanban + funil de vendas", "WhatsApp integrado"],
  provas: [
    { valor: "2", rotulo: "sistemas, um só", nota: "tarefas do dia a dia e CRM comercial" },
    { valor: "0", rotulo: "planilha para o funil", nota: "negócio vira tarefa com um clique" },
    { valor: "N", rotulo: "empresas no mesmo sistema", nota: "cada uma só vê os próprios dados" },
    { valor: "24h", rotulo: "checklist e prazo por tarefa", nota: "com recorrência automática" },
  ],
};

/* ------------------------------------------------------------------ */
/* Por que existe                                                      */
/* ------------------------------------------------------------------ */

export const porqueAgenda = {
  eyebrow: "Por que existe",
  titulo: ["O trabalho do dia e o cliente novo", "vivem em lugares separados."],
  intro:
    "Três coisas que acontecem quando a gestão de tarefas e o relacionamento comercial não moram no mesmo lugar.",
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
  ],
};

/* ------------------------------------------------------------------ */
/* Por dentro — telas reais                                            */
/* ------------------------------------------------------------------ */

export const pordentroAgenda = {
  eyebrow: "Por dentro",
  titulo: ["Não é maquete.", "É o sistema em uso todo dia."],
  intro:
    "As telas abaixo são do sistema em operação, hoje usado pela Nodum e pela Vogel Assessoria Contábil. Nomes de pessoas e alguns dados foram ocultados antes da publicação — o resto é real.",
  telas: [
    {
      aba: "Painel",
      src: "/img/agenda/painel.webp",
      titulo: "Indicadores, de cara",
      texto:
        "Tarefas em aberto, atrasadas, vencendo e concluídas, gráficos por status/prioridade/responsável e um resumo do funil — tudo clicável, direto para a lista já filtrada.",
    },
    {
      aba: "Quadro",
      src: "/img/agenda/quadro.webp",
      titulo: "Arrasta e solta entre etapas",
      texto:
        "O quadro kanban do jeito que qualquer time já conhece, com prioridade, prazo e projeto visíveis em cada cartão sem abrir a tarefa.",
    },
    {
      aba: "Tabela",
      src: "/img/agenda/tabela.webp",
      titulo: "A mesma lista, ordenável",
      texto:
        "Responsável, status, prioridade, prazo e checklist numa tabela — para quem prefere ordenar e escanear em vez de arrastar cartão.",
    },
    {
      aba: "Funil",
      src: "/img/agenda/funil.webp",
      titulo: "Negócios em aberto, ganhos e perdidos",
      texto:
        "Valor em jogo por etapa, taxa de conversão e automação de WhatsApp — o funil comercial inteiro numa tela.",
    },
    {
      aba: "Contatos",
      src: "/img/agenda/contatos.webp",
      titulo: "A base de leads e clientes",
      texto: "Cada contato com histórico e os negócios vinculados a ele, buscável por nome, e-mail ou empresa.",
    },
    {
      aba: "Prazos",
      src: "/img/agenda/prazos.webp",
      titulo: "As tarefas mais urgentes, sempre à frente",
      texto:
        "Ordenadas pela proximidade do vencimento — o que está atrasado aparece primeiro, sem precisar caçar em nenhuma outra tela.",
    },
    {
      aba: "Equipe",
      src: "/img/agenda/equipe.webp",
      titulo: "Quem é quem, e a carga de cada um",
      texto: "Tarefas em aberto, atrasadas e concluídas por pessoa — para redistribuir antes que vire atraso.",
    },
    {
      aba: "Clientes/Empresas",
      src: "/img/agenda/clientes-empresas.webp",
      titulo: "Cadastro completo de empresas-clientes",
      texto:
        "CNPJ, sócios, certificado digital, CNAE e mais, preenchido sozinho quando um processo de abertura é concluído — ou importado em massa por planilha. Recurso especial, hoje exclusivo da Vogel.",
    },
  ],
  rodape:
    "Cada empresa que usa o sistema vê apenas os próprios dados — equipe, tarefas, clientes e funil. Personalizações específicas, como o cadastro de Clientes/Empresas acima, existem quando fazem sentido para a operação de uma empresa em particular.",
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
    "Uma conversa para entender como sua empresa organiza tarefas e clientes hoje, e mostrar como ficaria dentro da Agenda Interna Nodum.",
};
