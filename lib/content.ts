/**
 * Todo o conteúdo editorial do site em um só lugar.
 * A voz segue o design system: direta, humana, sem jargão corporativo.
 * Todo número carrega fonte — nunca um dado solto.
 */

export const site = {
  nome: "Nodum Soluções Integradas",
  tagline: "Conexões que transformam negócios.",
  fechamento: "Conectados para crescer.",
  email: "contato@nodum.com.br",
  whatsapp: "5511999999999",
  linkedin: "https://www.linkedin.com/company/nodum",
  instagram: "https://www.instagram.com/nodum",
};

export const nav = [
  { label: "O problema", href: "#problema" },
  { label: "Como ajudamos", href: "#solucao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Gestão + Tecnologia",
  titulo: ["Conexões que", "transformam negócios."],
  subtitulo:
    "A Nodum une consultoria de gestão pé no chão com tecnologia sob medida para pequenas e médias empresas. Não vendemos software sem suporte, nem consultoria sem ferramenta.",
  ctaPrimario: { label: "Vamos conversar?", href: "#contato" },
  ctaSecundario: { label: "Ver o que já entregamos", href: "#produtos" },
  provas: [
    { valor: "5–200", rotulo: "colaboradores", nota: "porte que atendemos" },
    { valor: "PT-BR", rotulo: "sem jargão", nota: "o idioma do empreendedor" },
    { valor: "Sob medida", rotulo: "tecnologia", nota: "nada de pacote fechado" },
  ],
};

export const problema = {
  eyebrow: "Diagnóstico",
  titulo: "A realidade das PMEs brasileiras",
  intro:
    "A maioria das empresas não quebra por falta de esforço. Quebra por falta de gestão — e por trabalhar no escuro, sem dado nenhum na mão.",
  stats: [
    {
      valor: "83%",
      descricao: "das empresas fecham as portas antes de completar 5 anos",
      fonte: "SEBRAE",
    },
    {
      valor: "72%",
      descricao: "operam sem nenhum sistema de gestão — tudo em papel e planilha",
      fonte: "SEBRAE",
    },
    {
      valor: "6,5M+",
      descricao: "de PMEs no Brasil convivendo com esse mesmo cenário",
      fonte: "SEBRAE",
    },
  ],
  dores: [
    {
      numero: "01",
      titulo: "Decisão no achismo",
      texto:
        "Sem número confiável, toda escolha vira aposta. O dono sente que o negócio cresceu, mas não sabe dizer se deu lucro.",
    },
    {
      numero: "02",
      titulo: "Processo que só existe na cabeça de alguém",
      texto:
        "Quando o processo não está escrito nem sistematizado, ele some junto com quem sai da empresa.",
    },
    {
      numero: "03",
      titulo: "Software comprado e abandonado",
      texto:
        "Sistema caro, genérico, sem ninguém para ensinar a usar. Três meses depois a equipe voltou para a planilha.",
    },
    {
      numero: "04",
      titulo: "Consultoria que virou PDF",
      texto:
        "Relatório bonito, diagnóstico correto — e nenhuma ferramenta para colocar a recomendação de pé no dia a dia.",
    },
  ],
};

export const solucao = {
  eyebrow: "Nossa solução",
  titulo: "Gestão e tecnologia andam juntas. Sempre.",
  intro:
    "As duas metades resolvem o mesmo problema. Separadas, nenhuma das duas entrega resultado — por isso a Nodum vende as duas juntas, com acompanhamento de longo prazo.",
  pilares: [
    {
      numero: "01",
      titulo: "Diagnóstico honesto",
      texto:
        "Entramos na operação, ouvimos a equipe e mapeamos onde o dinheiro e o tempo estão vazando. Sem relatório genérico.",
      itens: ["Mapeamento de processos", "Análise financeira", "Escuta da equipe"],
    },
    {
      numero: "02",
      titulo: "Consultoria de gestão",
      texto:
        "Organizamos processos, indicadores e rotina de decisão. Ficamos junto até virar hábito da casa.",
      itens: ["Redesenho de processos", "Indicadores e metas", "Rotina de gestão"],
    },
    {
      numero: "03",
      titulo: "Tecnologia sob medida",
      texto:
        "Construímos o sistema que a sua operação precisa — nem mais, nem menos — e treinamos quem vai usar.",
      itens: ["Sistemas web", "Automação", "Integrações e dados"],
    },
    {
      numero: "04",
      titulo: "Acompanhamento contínuo",
      texto:
        "Não sumimos depois da entrega. Evoluímos a ferramenta e a gestão junto com o crescimento do negócio.",
      itens: ["Suporte direto", "Evolução do sistema", "Revisão de indicadores"],
    },
  ],
};

export const servicos = [
  {
    titulo: "Consultoria em gestão",
    texto:
      "Diagnóstico, redesenho de processos, estrutura de custos e rotina de indicadores para o dono voltar a enxergar o próprio negócio.",
    entregas: ["Diagnóstico 360º", "Mapa de processos", "Painel de indicadores"],
  },
  {
    titulo: "Sistemas sob medida",
    texto:
      "Aplicações web feitas para a sua operação real: agenda, estoque, vendas, financeiro, relatórios — o que fizer sentido, no seu fluxo.",
    entregas: ["Web app responsivo", "Multiusuário e permissões", "Relatórios gerenciais"],
  },
  {
    titulo: "Automação de rotinas",
    texto:
      "Tudo que hoje é copiado de uma planilha para outra vira processo automático — menos retrabalho, menos erro humano.",
    entregas: ["Integrações", "Rotinas automáticas", "Alertas e avisos"],
  },
  {
    titulo: "Dados e relatórios",
    texto:
      "Seus números organizados e atualizados, no formato que a decisão exige — não no formato que o sistema conseguiu exportar.",
    entregas: ["Painéis gerenciais", "Fechamento mensal", "Leitura dos números"],
  },
  {
    titulo: "Implantação e treinamento",
    texto:
      "Sistema só serve se a equipe usa. Treinamos time por time e acompanhamos os primeiros ciclos de uso.",
    entregas: ["Treinamento por função", "Material de apoio", "Acompanhamento inicial"],
  },
  {
    titulo: "Parceria contínua",
    texto:
      "Um time à disposição para evoluir ferramenta e gestão conforme o negócio muda. Sem começar do zero a cada ano.",
    entregas: ["Suporte direto", "Evolução contínua", "Revisões periódicas"],
  },
];

export const produto = {
  eyebrow: "Já está de pé",
  titulo: "NodumBarber",
  chamada:
    "Sistema completo de gestão para barbearias — já em operação, com site e planos próprios.",
  texto:
    "Agenda, clientes, equipe, estoque, vendas, cobranças e relatórios em um só lugar. É o exemplo prático do que a gente faz: nasceu de um problema real de operação e virou produto.",
  destaques: [
    "Agenda e horários",
    "Clientes e histórico",
    "Estoque e vendas",
    "Financeiro e cobranças",
    "Relatórios gerenciais",
    "Multiunidade",
  ],
  cta: { label: "Conhecer o NodumBarber", href: "/nodumbarber" },
  // Mesmas telas de /img/barber que alimentam a landing do produto —
  // uma única fonte de imagem para as duas vitrines, sem duplicar
  // arquivo nem correr o risco de uma ficar desatualizada em relação
  // à outra.
  telas: [
    { src: "/img/barber/dashboard.webp", legenda: "Painel do dono" },
    { src: "/img/barber/agenda.webp", legenda: "Agenda" },
    { src: "/img/barber/clientes.webp", legenda: "Clientes" },
    { src: "/img/barber/relatorios.webp", legenda: "Relatórios" },
  ],
};

export const processo = {
  eyebrow: "Como funciona",
  titulo: "Do primeiro café ao sistema rodando",
  etapas: [
    {
      numero: "01",
      titulo: "Conversa inicial",
      texto: "Uma conversa sem compromisso para entender o negócio e o que está travando.",
      prazo: "1 semana",
    },
    {
      numero: "02",
      titulo: "Diagnóstico",
      texto: "Imersão na operação e devolutiva com o que encontramos — inclusive o que dói ouvir.",
      prazo: "2 a 4 semanas",
    },
    {
      numero: "03",
      titulo: "Proposta",
      texto: "Escopo, prazo e investimento claros. Você sabe o que vai receber antes de assinar.",
      prazo: "1 semana",
    },
    {
      numero: "04",
      titulo: "Execução",
      texto: "Consultoria e desenvolvimento acontecendo juntos, com entregas parciais desde o início.",
      prazo: "conforme escopo",
    },
    {
      numero: "05",
      titulo: "Acompanhamento",
      texto: "Ferramenta evoluindo e gestão sendo revisada junto com o crescimento da empresa.",
      prazo: "contínuo",
    },
  ],
};

export const valores = {
  eyebrow: "Quem somos",
  missao:
    "Levar gestão profissional e tecnologia acessível para pequenas e médias empresas brasileiras.",
  visao:
    "Ser a parceira de confiança das PMEs que decidiram crescer com método, e não no improviso.",
  lista: [
    {
      titulo: "Sem jargão corporativo",
      texto: "Falamos o idioma do empreendedor. Se precisa de tradução, está mal explicado.",
    },
    {
      titulo: "Nada de meia solução",
      texto:
        "Não vendemos software sem suporte, nem consultoria sem ferramenta. As duas coisas, sempre.",
    },
    {
      titulo: "Não sumimos depois da entrega",
      texto: "Parceria de longo prazo. Evoluímos junto com você, não até o fim do contrato.",
    },
    {
      titulo: "Honestidade antes de venda",
      texto: "Se o problema não for nosso para resolver, a gente fala — e indica quem resolve.",
    },
  ],
};

export const publico = {
  eyebrow: "Para quem",
  titulo: "Feito para PMEs de 5 a 200 colaboradores",
  intro:
    "Empresas que já saíram do improviso do começo, mas ainda não têm estrutura de gestão para o próximo tamanho.",
  segmentos: [
    "Comércio e varejo",
    "Serviços e prestadores",
    "Clínicas e consultórios",
    "Barbearias e salões",
    "Indústria leve",
    "Franquias e multiunidade",
  ],
};

export const contato = {
  eyebrow: "Próximo passo",
  titulo: "Vamos conversar?",
  texto:
    "Uma conversa de 30 minutos, sem compromisso, para entender o seu momento e dizer com honestidade se conseguimos ajudar.",
};
