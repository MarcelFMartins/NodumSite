/**
 * Conteúdo da landing page do NodumBarber.
 *
 * A fonte desta copy é a Memória Descritiva do sistema (27/08/2026) —
 * não a página de vendas antiga, que ficou para trás em várias frentes:
 * papel de Gerente, importação de clientes por planilha, cliente fixo
 * recorrente, plano combo, comissão por produto, pagamento dividido e
 * aviso de agendamento em aberto são todos posteriores a ela.
 *
 * Regra que vale aqui e no site: nada que o produto não faça hoje entra
 * como se já fizesse. O que está em validação está marcado como tal.
 */

import { site } from "./content";

/* ------------------------------------------------------------------ */
/* Integração com o sistema em produção                                */
/* ------------------------------------------------------------------ */

/**
 * Único lugar do projeto que sabe o endereço do sistema. Quando o
 * NodumBarber ganhar o domínio definitivo, troque esta linha: botões,
 * âncoras legais e rodapé acompanham sozinhos.
 *
 * Migrou da VPS antiga (agenda.vogelassessoriacontabil.com) para
 * barber.nodumsolucoes.com — backend novo, grava direto no Supabase e
 * libera CORS para https://nodumsolucoes.com. Login, cadastro e
 * dashboard têm que apontar todos para o MESMO domínio: o cookie de
 * sessão que `POST ${APP}/api/signup` devolve só é enviado de volta em
 * chamadas para esse domínio — redirecionar para o domínio antigo
 * depois do cadastro (como acontecia antes desta migração) manda a
 * pessoa para uma página sem sessão nenhuma.
 */
const APP = "https://barber.nodumsolucoes.com";
/* O mesmo WhatsApp da Nodum (lib/content.ts → site.whatsapp): é o número
   que o próprio sistema divulga como suporte, na aba Atualizações. Esta
   constante já foi um número à parte — ficou de fora da troca geral de
   número e mandava o cliente para o contato errado. */
const WHATSAPP = site.whatsapp;

const zap = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

export const sistema = {
  base: APP,
  // O login continua no sistema — é lá que a sessão realmente
  // existe. O cadastro agora é uma página local: o formulário mora
  // aqui, só a chamada final (fetch com credentials) cruza para o
  // domínio do sistema. Ver app/nodumbarber/cadastro/page.tsx.
  entrar: `${APP}/login`,
  cadastro: "/nodumbarber/cadastro",
  /** O endpoint que o formulário local chama de verdade. */
  apiSignup: `${APP}/api/signup`,
  dashboard: `${APP}/dashboard`,
  /* Os três documentos legais foram centralizados no site, em /legal.
     São rotas internas de propósito: quem lê os termos não deve ser
     jogado para outro domínio no meio da decisão de compra. */
  termos: "/legal/termos",
  privacidade: "/legal/privacidade",
  contrato: "/legal/contrato-nodumbarber",
  whatsapp: `https://wa.me/${WHATSAPP}`,
  whatsappTeste: zap("Quero testar o NodumBarber na minha barbearia"),
  whatsappSuporte: zap("Olá! Tenho uma dúvida sobre o NodumBarber."),
  whatsappRede: zap("Tenho mais de uma unidade e quero montar a estrutura no NodumBarber."),
  dominio: APP.replace(/^https?:\/\//, ""),
};

export const barber = {
  nome: "NodumBarber",
  tagline: "O sistema que organiza a sua barbearia",
  precoBase: "R$ 79,90",
  teste: "14 dias grátis",
  /** Data da última leva de novidades publicada em produção. */
  atualizadoEm: "7 de outubro de 2026",
};

export const navBarber = [
  { label: "Agendamento online", href: "#online" },
  { label: "Agenda", href: "#agenda" },
  { label: "Caixa e planos", href: "#caixa" },
  { label: "Recursos", href: "#recursos" },
  { label: "Por dentro", href: "#pordentro" },
  { label: "Preço", href: "#preco" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroBarber = {
  eyebrow: "Sistema de gestão para barbearias",
  titulo: ["Seu cliente marca sozinho.", "Você só corta."],
  subtitulo:
    "Link de agendamento online, agenda em grade, planos com crédito, comissão que fecha sozinha, gorjeta, estoque e relatório em PDF. O NodumBarber trabalha enquanto a barbearia atende — e mostra, no fim do dia, quanto entrou e quanto é de cada um.",
  selos: ["14 dias grátis, sem cartão", "Funciona no celular", "Sem fidelidade"],
  /** Avisos que aparecem no mockup do herói, um depois do outro. */
  avisos: [
    { titulo: "Novo agendamento online", texto: "Lucas Andrade · Corte + Barba · 08:45" },
    { titulo: "Atendimento concluído", texto: "Marcos Vinícius · R$ 55,00 · PIX" },
    { titulo: "Lembrete enviado por e-mail", texto: "Gustavo Rocha · amanhã às 15:00" },
    { titulo: "Crédito do plano usado", texto: "Rafael Duarte · restam 3 cortes" },
  ],
  provas: [
    { valor: "24h", rotulo: "de agenda aberta", nota: "o link de agendamento não fecha à noite" },
    { valor: "0", rotulo: "planilhas para manter", nota: "comissão, gorjeta e desconto já calculados" },
    { valor: "14", rotulo: "dias para decidir", nota: "com a barbearia funcionando de verdade" },
    { valor: "2×", rotulo: "backup por dia", nota: "cada cópia conferida, todo dia" },
  ],
};

/* ------------------------------------------------------------------ */
/* Novidades — o produto não para                                      */
/* ------------------------------------------------------------------ */

/**
 * Resumo das últimas levas publicadas em produção — a fonte é
 * `lib/updates/changelog.ts` do próprio sistema (aba Atualizações), não
 * promessa de roadmap. Quando sair uma leva nova, entra no topo.
 */
export const novidades = {
  eyebrow: "Sempre evoluindo",
  titulo: ["O sistema recebe novidade", "toda semana — sem custo a mais."],
  intro:
    "Tudo que aparece abaixo já está no ar, para todo assinante, em qualquer plano. Sugestão de cliente vira recurso.",
  levas: [
    {
      data: "7 out 2026",
      itens: [
        "Planos com nova lógica de créditos, passo a passo",
        "Concluir com vários serviços e quantidade",
        "Plano acabou? Renovar, trocar ou cobrar avulso",
        "Mais de uma barbearia no mesmo login",
      ],
    },
    {
      data: "6 out 2026",
      itens: [
        "Arraste o cartão para outro horário na agenda",
        "Mudar data e hora sem cancelar",
        "Pagamento trimestral, semestral e anual com desconto",
        "Relatório mostra o que foi remarcado",
      ],
    },
    {
      data: "5 out 2026",
      itens: [
        "Agendamento online com vários serviços e quantidade",
        "Cliente com plano usa os créditos pelo link",
        "Agenda atualiza sozinha quando alguém marca",
        "PDF de Vendas com o fechamento do barbeiro",
      ],
    },
    {
      data: "set 2026",
      itens: [
        "Exportar relatório em PDF",
        "Aviso e lembrete automático por e-mail",
        "Gorjeta e desconto no checkout",
        "Desfazer cancelamento e remarcar falta",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Por que existe                                                      */
/* ------------------------------------------------------------------ */

export const porque = {
  eyebrow: "Por que existe",
  titulo: ["Barbearia não quebra por falta de cliente.", "Quebra por falta de controle."],
  intro:
    "Quatro coisas que acontecem em toda barbearia sem sistema — e que custam dinheiro todo mês.",
  cenas: [
    {
      quando: "22h de domingo",
      titulo: "O cliente quis marcar e ninguém respondeu",
      texto:
        "Mandou mensagem fora do horário, ficou sem resposta e marcou na barbearia da esquina, que tem link de agendamento.",
    },
    {
      quando: "Fim do mês",
      titulo: "A conta da comissão não fecha",
      texto:
        "Teve desconto, gorjeta, pacote de cortes. Você soma na calculadora, o barbeiro soma no papel, e os dois números não batem.",
    },
    {
      quando: "Todo dia",
      titulo: "A pomada sai e ninguém anota",
      texto:
        "O estoque some sem virar venda. No fim do mês você compra de novo sem saber para onde foi o que já tinha.",
    },
    {
      quando: "Ontem",
      titulo: "O atendimento que ninguém fechou",
      texto:
        "Passou do horário, o cliente foi embora e o agendamento ficou em aberto. Não virou receita, não virou falta — sumiu.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Agendamento online                                                  */
/* ------------------------------------------------------------------ */

export const online = {
  eyebrow: "Agendamento online",
  titulo: ["Um link. O cliente escolhe,", "a agenda se preenche."],
  intro:
    "Cada barbearia ganha o próprio link para colocar na bio do Instagram, no status do WhatsApp ou num QR code no espelho. Sem aplicativo para baixar, sem senha, sem cadastro antes.",
  passos: [
    {
      n: "1",
      titulo: "Já é cliente ou é a primeira vez?",
      texto:
        "Pelo WhatsApp o sistema reconhece quem já é da casa e preenche nome e e-mail sozinho. Cliente novo vira cadastro no momento do agendamento.",
      src: "/img/barber/v3/agendar-topo.webp",
    },
    {
      n: "2",
      titulo: "Escolhe os serviços — e a quantidade",
      texto:
        "Corte + barba no mesmo horário, ou três cortes para o pai e os dois filhos. O total e o tempo aparecem antes de confirmar.",
      src: "/img/barber/v3/agendar-servicos.webp",
    },
    {
      n: "3",
      titulo: "Profissional, dia e um horário que cabe",
      texto:
        "Só aparecem horários em que a duração somada dos serviços cabe de verdade — respeitando expediente, almoço, folga e quem já está marcado.",
      src: "/img/barber/v3/agendar-horario.webp",
    },
  ],
  extras: [
    {
      titulo: "Chega na hora, sem F5",
      texto:
        "O pedido aparece na Agenda e no Início em poucos segundos, com o aviso “Novo agendamento online” e o botão para confirmar.",
    },
    {
      titulo: "E-mail automático",
      texto:
        "Confirmado, cancelado, concluído ou remarcado: o cliente recebe o aviso sozinho. E um lembrete 24h e 2h antes do horário.",
    },
    {
      titulo: "Plano pelo link",
      texto:
        "Cliente com plano ativo escolhe usar os créditos. Plano acabou? A página avisa e oferece renovar ali mesmo.",
    },
    {
      titulo: "Você decide",
      texto:
        "Chave liga/desliga, e todo pedido entra como pendente até alguém da equipe confirmar. Nada é marcado à sua revelia.",
    },
  ],
  cta: "Quero meu link de agendamento",
};

/* ------------------------------------------------------------------ */
/* Agenda — o encaixe                                                  */
/* ------------------------------------------------------------------ */

export const agenda = {
  eyebrow: "Agenda",
  titulo: ["Ele já sabe onde o próximo cliente", "cabe."],
  texto:
    "Você tem o Caio marcado às 15:00, corte de 45 minutos. Chega outro cliente querendo o mesmo corte. Em quais horários dá para encaixar?",
  detalhe:
    "Não é só “antes das 15:00”. Começar às 14:45 terminaria 15:30 — o Caio chegaria e ficaria meia hora esperando. Já 14:15 termina em cima da hora: você entrega um e recebe o outro.",
  fecho:
    "É essa conta, com todos os serviços e durações diferentes, que o sistema faz antes de te mostrar a lista. Toque num horário para ver o encaixe.",
  cta: "Quero isso na minha barbearia",
  demo: {
    servico: "Corte masculino · 45 min",
    duracao: 45,
    ocupado: { inicio: "15:00", fim: "15:45", cliente: "Caio Ribeiro" },
    abre: "13:30",
    fecha: "17:00",
  },
  extras: [
    "Arraste o cartão para outro horário — verde se cabe, vermelho se não",
    "Mudar data e hora sem cancelar: cliente, serviços e valor continuam",
    "Grade no intervalo que você define (15 ou 30 minutos)",
    "Cliente fixo toda semana, quinzenal ou a cada 3, 4, 5, 6 ou 8 semanas",
    "Não compareceu? Remarca ali mesmo ou só registra a falta",
    "Folga, almoço e dias bloqueados respeitados — almoço pode ser desligado",
  ],
};

/* ------------------------------------------------------------------ */
/* Caixa e planos                                                      */
/* ------------------------------------------------------------------ */

export const caixa = {
  eyebrow: "Caixa e planos",
  titulo: ["Fechar a conta leva", "dez segundos."],
  intro:
    "“Concluir atendimento” junta tudo que acontece na cadeira: os serviços que foram feitos, o produto que saiu, o desconto, a gorjeta e a forma de pagamento — dividida, se o cliente quiser. A comissão já sai certa, sobre o valor que de fato entrou.",
  src: "/img/barber/v3/concluir.webp",
  pontos: [
    {
      titulo: "Vários serviços, com quantidade",
      texto: "1 corte + 1 barba, ou 2 cortes. O que foi feito de verdade é o que vai para agenda e relatório.",
    },
    {
      titulo: "Desconto e gorjeta",
      texto: "Percentual ou valor em reais. Gorjeta vai inteira para o barbeiro e fica fora do faturamento.",
    },
    {
      titulo: "Comissão no valor final",
      texto: "Com desconto, a comissão é calculada sobre o que o cliente pagou — sem o dono pagar a diferença.",
    },
    {
      titulo: "Produto e estoque na mesma tela",
      texto: "Vendeu a pomada junto com o corte? Entra na conta, baixa do estoque e comissiona o produto.",
    },
  ],
  plano: {
    titulo: "Planos que se pagam sozinhos",
    texto:
      "Venda pacotes de corte ou combos (4 cortes + 2 barbas). A cada visita o sistema pergunta se usa o crédito — sai por R$ 0,00, com pagamento “Crédito do plano” automático. Quando acaba, oferece renovar, trocar de plano ou cobrar avulso.",
    demo: { nome: "Plano Mensal — 4 Cortes", total: 4, valor: "R$ 160,00" },
    itens: [
      "Comissão do barbeiro paga na venda do pacote — nunca duas vezes",
      "Cliente fixo com plano: as próximas 8 datas ficam reservadas",
      "Histórico de cada plano: saldo, validade e cada uso",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Dinheiro — a calculadora                                            */
/* ------------------------------------------------------------------ */

export const dinheiro = {
  eyebrow: "Comissões e caixa",
  titulo: ["Quanto a sua barbearia", "movimenta por mês?"],
  texto:
    "Mexa nos controles com os números da sua realidade. É exatamente essa conta que o sistema faz sozinho, todo dia, por barbeiro e por serviço.",
  nota: "Estimativa com 26 dias de funcionamento no mês. A parte da casa é antes de aluguel, produtos e impostos.",
};

/* ------------------------------------------------------------------ */
/* Recursos                                                            */
/* ------------------------------------------------------------------ */

export const recursos = {
  eyebrow: "O que tem dentro",
  titulo: ["Feito para o dia a dia de uma barbearia.", "Não para um escritório."],
  intro: "Cada tela existe porque resolve alguma coisa que acontece com o cliente na cadeira.",
  grupos: [
    {
      nome: "Agenda e clientes",
      itens: [
        {
          titulo: "Agendamento online",
          texto:
            "Link próprio da barbearia, com vários serviços, quantidade e uso de plano. Cada pedido entra como pendente para a equipe confirmar.",
        },
        {
          titulo: "Agenda em grade",
          texto:
            "Uma coluna por barbeiro, dia, semana e mês. Arraste para remarcar, e a tela se atualiza sozinha quando alguém marca.",
        },
        {
          titulo: "Carteira por barbeiro",
          texto:
            "O cliente é de quem atende. Histórico completo, telefone, observações e quanto já gastou na casa — ou compartilhado com a casa toda.",
        },
        {
          titulo: "Cliente fixo",
          texto:
            "Toda semana, quinzenal ou a cada 3 a 8 semanas, sempre no mesmo dia. Dá para trocar o dia de uma vez só ou da série inteira.",
        },
        {
          titulo: "Importar por planilha",
          texto:
            "Sobe a lista de clientes em .csv, .xlsx ou .xls — o resumo diz quantos entraram, quantos já existiam e por quê.",
        },
        {
          titulo: "Aviso por e-mail",
          texto:
            "Confirmação, cancelamento, conclusão, remarcação e lembretes 24h e 2h antes — com o nome da sua barbearia, sozinho.",
        },
      ],
    },
    {
      nome: "Dinheiro",
      itens: [
        {
          titulo: "Comissão automática",
          texto:
            "Percentual por barbeiro e por serviço, sobre o valor final com desconto. A conta sai pronta no relatório.",
        },
        {
          titulo: "Gorjeta e desconto",
          texto:
            "Percentual ou valor fixo, no atendimento e na venda de balcão. Gorjeta separada no relatório, inteira para o barbeiro.",
        },
        {
          titulo: "Planos com crédito",
          texto:
            "Pacote ou combo com saldo por serviço. Uso pelo balcão ou pelo link, renovação com um toque quando acaba.",
        },
        {
          titulo: "Pagamento dividido",
          texto:
            "Dinheiro, PIX, cartão e outros — na mesma conta, em partes. A soma tem que fechar, e o sistema confere.",
        },
        {
          titulo: "Estoque que baixa sozinho",
          texto:
            "Vendeu no atendimento ou no balcão, saiu do estoque e gerou comissão do produto. O que passou do mínimo aparece marcado.",
        },
        {
          titulo: "Projeção do mês",
          texto:
            "Com o ritmo dos dias já realizados, o sistema projeta onde o faturamento deve terminar. Dá tempo de reagir antes do dia 30.",
        },
      ],
    },
    {
      nome: "Controle",
      itens: [
        {
          titulo: "Relatório em PDF",
          texto:
            "Bonito, separado por comissão, serviço, plano e produto, com o fechamento do barbeiro na primeira página. Abre em qualquer celular.",
        },
        {
          titulo: "Relatório por papel",
          texto:
            "O dono vê a casa toda; o barbeiro vê só o “Meu Relatório”, com o próprio faturamento e o valor a receber.",
        },
        {
          titulo: "Agendamento em aberto",
          texto:
            "Passou do horário e ninguém concluiu? O sistema avisa em toda tela e oferece resolver ali mesmo.",
        },
        {
          titulo: "Várias barbearias, um login",
          texto:
            "Tem duas unidades? Um seletor no topo troca de barbearia. Equipe, caixa e clientes continuam separados.",
        },
        {
          titulo: "Desfazer sem chamar ninguém",
          texto:
            "Cancelou por engano? Desfaz. Lançou errado? Corrige pelo sistema, sem mexer em banco de dados.",
        },
        {
          titulo: "Backup 2× por dia",
          texto:
            "Cópia automática de manhã e à noite, conferida uma a uma. Se alguma falhar, o suporte é avisado no mesmo dia.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Por dentro — telas reais                                            */
/* ------------------------------------------------------------------ */

export const pordentro = {
  eyebrow: "Por dentro",
  titulo: ["Não é maquete.", "É o sistema rodando."],
  intro:
    "As telas abaixo são fotos do NodumBarber em funcionamento hoje, com uma barbearia de demonstração. É exatamente o que você vê ao entrar.",
  telas: [
    {
      aba: "Início",
      src: "/img/barber/v3/dashboard.webp",
      titulo: "O dono abre e vê o dia inteiro",
      texto:
        "Faturamento de hoje, da semana e do mês, cortes, barbas, ticket médio, planos vendidos e comissão a pagar. Agendamento em aberto aparece no topo para resolver na hora.",
    },
    {
      aba: "Agenda",
      src: "/img/barber/v3/agenda.webp",
      titulo: "Uma coluna por barbeiro, o dia inteiro na tela",
      texto:
        "Almoço e folga bloqueados, linha do horário atual e cartões que você arrasta para remarcar. Quando um cliente marca pelo link, a grade se atualiza sozinha.",
    },
    {
      aba: "Agendamento Online",
      src: "/img/barber/v3/agendamento-online.webp",
      titulo: "O link da barbearia e quem marcou por ele",
      texto:
        "Liga e desliga com uma chave, copia o link e vê os pedidos pendentes — cada um com o selo de que veio pela internet.",
    },
    {
      aba: "Relatórios",
      src: "/img/barber/v3/relatorios.webp",
      titulo: "Faturamento, desconto, comissão, gorjeta, a receber",
      texto:
        "Cada número com uma frase dizendo o que entra nele. Por serviço, por produto e por plano, com total no fim de toda tabela — e exportação em PDF ou Excel.",
    },
    {
      aba: "Planos",
      src: "/img/barber/v3/planos.webp",
      titulo: "Quem comprou plano e quanto ainda tem",
      texto:
        "Saldo por serviço, validade e o extrato de cada uso. O sistema avisa quando acaba e não deixa vender um plano em cima de outro ativo.",
    },
    {
      aba: "Projeção",
      src: "/img/barber/v3/projecao.webp",
      titulo: "O mês fechado antes de fechar",
      texto:
        "Média de corte e barba por dia, receita por tipo de serviço e o acumulado real contra a projeção no gráfico.",
    },
    {
      aba: "Assinatura",
      src: "/img/barber/v3/assinatura.webp",
      titulo: "Você paga como preferir",
      texto:
        "PIX sem taxa ou cartão com renovação automática, por mês, trimestre, semestre ou ano — quanto mais longo, maior o desconto.",
    },
  ],
  rodape:
    "Os nomes e valores acima são de uma barbearia de demonstração. Ao criar a sua conta, o sistema começa com a sua barbearia e os seus dados.",
};

/* ------------------------------------------------------------------ */
/* Níveis de acesso                                                    */
/* ------------------------------------------------------------------ */

export const acessos = {
  eyebrow: "Níveis de acesso",
  titulo: ["Cada pessoa com a sua chave.", "Cada uma vê só o que é dela."],
  intro: "Escolha um perfil para ver o que a pessoa enxerga ao entrar no sistema.",
  perfis: [
    {
      aba: "Dono",
      titulo: "Enxerga a casa inteira",
      pode: [
        "Agenda de todos os barbeiros",
        "Define a comissão de cada um, por serviço e por produto",
        "Cadastra serviços, produtos, planos e preços",
        "Relatórios de faturamento, comissões e gorjetas",
        "Liga o agendamento online e confirma os pedidos",
        "Cadastra, promove e desativa a equipe",
        "Gerencia a própria assinatura do sistema",
      ],
      naoPode: [],
    },
    {
      aba: "Gerente",
      titulo: "Toca a operação, sem ver o cofre",
      pode: [
        "Tudo que o dono faz na operação do dia a dia",
        "Agenda, clientes, serviços e produtos",
        "Fecha atendimento e venda de balcão",
        "Controla o estoque",
      ],
      naoPode: ["Não vê os relatórios financeiros da casa", "Não mexe na assinatura do sistema"],
      nota: "Para quem toca a barbearia quando o dono não está.",
    },
    {
      aba: "Barbeiro",
      titulo: "Enxerga o próprio trabalho",
      pode: [
        "A própria agenda do dia e da semana",
        "Os próprios clientes e o histórico deles",
        "“Meu Relatório”: faturamento, comissão e gorjetas dele",
        "Fecha o atendimento e registra o pagamento",
      ],
      naoPode: ["Não vê a agenda dos colegas", "Não vê o faturamento da casa"],
    },
    {
      aba: "Várias unidades",
      titulo: "Um login, várias barbearias",
      pode: [
        "Seletor no topo para trocar de barbearia",
        "“Adicionar barbearia” direto pelo sistema",
        "Equipe, clientes, estoque e caixa separados em cada uma",
        "Assinatura por barbearia — a nova começa com o teste grátis",
      ],
      naoPode: [],
      nota: "Tem filial em outra cidade? Ela vira mais uma barbearia no mesmo login.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Segurança e dados                                                   */
/* ------------------------------------------------------------------ */

export const seguranca = {
  eyebrow: "Segurança e dados",
  titulo: ["O que a gente faz", "para você dormir tranquilo."],
  itens: [
    {
      titulo: "Cada barbearia isolada",
      texto:
        "Sua barbearia enxerga apenas os próprios dados, sem exceção e sem configuração da sua parte — mesmo com várias no mesmo login.",
    },
    {
      titulo: "Backup conferido, 2× por dia",
      texto:
        "Cópia automática de manhã e à noite. Cada cópia é verificada — se alguma falhar, o suporte é avisado no mesmo dia.",
    },
    {
      titulo: "Senha individual",
      texto:
        "Cada pessoa entra com a própria senha, com recuperação por e-mail. Ninguém precisa emprestar login para trabalhar.",
    },
    {
      titulo: "Login protegido",
      texto:
        "Proteção contra tentativa em série e força bruta, e verificação real do e-mail no cadastro.",
    },
    {
      titulo: "Aceite registrado",
      texto:
        "Termos de uso, política de privacidade e contrato de assinatura ficam gravados com data no momento do cadastro.",
    },
    {
      titulo: "Seus dados saem com você",
      texto:
        "Relatórios exportam em PDF e Excel a qualquer momento. Nada fica preso aqui dentro se um dia você quiser sair.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Preço                                                               */
/* ------------------------------------------------------------------ */

/**
 * Mesma regra de `lib/billing/ciclos.ts` do sistema: o PIX é o preço-base;
 * o cartão é base ÷ 0,95 arredondado para cima terminando em ",90";
 * pagar vários meses de uma vez dá desconto sobre o mensal do mesmo meio.
 */
export const preco = {
  eyebrow: "Preço",
  titulo: ["Um plano para o tamanho", "da sua equipe."],
  intro:
    "Sem taxa por agendamento e sem recurso trancado atrás de plano — a única diferença entre os três é até quantos barbeiros a barbearia tem.",
  taxaCartao: 0.05,
  ciclos: [
    { id: "MENSAL", label: "Mensal", meses: 1, desconto: 0 },
    { id: "TRIMESTRAL", label: "Trimestral", meses: 3, desconto: 0.05 },
    { id: "SEMESTRAL", label: "Semestral", meses: 6, desconto: 0.08 },
    { id: "ANUAL", label: "Anual", meses: 12, desconto: 0.12 },
  ],
  planos: [
    {
      nome: "Essencial",
      pixCentavos: 7990,
      limite: "até 5 barbeiros",
      destaque: false,
      itens: [
        "Todos os recursos, sem exceção",
        "Agendamento online incluído",
        "Clientes e agendamentos ilimitados",
        "Suporte por WhatsApp e e-mail",
      ],
      cta: "Testar 14 dias grátis",
    },
    {
      nome: "Profissional",
      pixCentavos: 9990,
      limite: "até 10 barbeiros",
      destaque: true,
      itens: [
        "Todos os recursos, sem exceção",
        "Agendamento online incluído",
        "Clientes e agendamentos ilimitados",
        "Suporte por WhatsApp e e-mail, sem fila",
      ],
      cta: "Criar minha barbearia",
    },
    {
      nome: "Premium",
      pixCentavos: 14990,
      limite: "barbeiros ilimitados",
      destaque: false,
      itens: [
        "Todos os recursos, sem exceção",
        "Agendamento online incluído",
        "Clientes e agendamentos ilimitados",
        "Suporte por WhatsApp e e-mail",
      ],
      cta: "Testar 14 dias grátis",
    },
  ],
  rodape:
    "Todo plano sai com 14 dias grátis, atualizações incluídas e sem fidelidade. Dá para trocar de plano dentro do sistema a qualquer momento, com um clique e sem perder histórico. Se tentar contratar o 6º barbeiro ainda no Essencial, o próprio sistema avisa e sugere a troca.",
  pagamento:
    "No PIX você paga o período de uma vez, sem taxa. No cartão a renovação é automática ao fim de cada período e o valor inclui a taxa da operadora. O NodumBarber não processa o pagamento dos seus clientes — eles continuam pagando na barbearia como já pagam hoje.",
};

/* ------------------------------------------------------------------ */
/* Suporte                                                             */
/* ------------------------------------------------------------------ */

export const suporte = {
  eyebrow: "Suporte",
  titulo: ["Você não vai ficar", "sozinho com o sistema."],
  intro:
    "Trocar o caderno por um sistema dá um friozinho na barriga. Por isso o acompanhamento vem junto, sem custo extra e sem plano premium.",
  itens: [
    {
      titulo: "WhatsApp e e-mail",
      texto: "Dois canais, sem robô e sem número de protocolo. Você manda a dúvida e alguém responde.",
    },
    {
      titulo: "Configuração inicial junto",
      texto:
        "Serviços, preços, horários, equipe e o link de agendamento. Se quiser, o suporte deixa tudo montado antes de você começar.",
    },
    {
      titulo: "Sua lista de clientes",
      texto:
        "Importa sozinho pela planilha, em .csv ou Excel. Se preferir, manda para o suporte que a gente sobe para você.",
    },
    {
      titulo: "Correção sem perder dado",
      texto:
        "Lançou errado, cobrou o valor trocado, apagou sem querer? Dá para desfazer sem mexer no banco.",
    },
    {
      titulo: "Novidades toda semana",
      texto:
        "O sistema recebe atualização sem você fazer nada e sem cobrança nova. Tudo aparece explicado na aba Atualizações.",
    },
    {
      titulo: "Registro aberto",
      texto:
        "Tudo que é construído ou corrigido no sistema entra numa memória descritiva, com data. Você pode pedir o documento quando quiser.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = {
  eyebrow: "Dúvidas",
  titulo: "O que perguntam antes de começar",
  itens: [
    {
      p: "Meu cliente consegue marcar sozinho?",
      r: "Consegue. Você liga o agendamento online e ganha um link da sua barbearia para pôr no Instagram ou no WhatsApp. O cliente escolhe serviços, profissional e horário pelo navegador — sem baixar aplicativo e sem senha. Todo pedido entra como pendente até alguém da equipe confirmar, e ele recebe o aviso por e-mail.",
    },
    {
      p: "O sistema processa o pagamento dos meus clientes?",
      r: "Não. Seu cliente continua pagando na barbearia do jeito que já paga — dinheiro, PIX ou cartão na máquina da loja. O sistema registra a forma (e aceita dividir entre mais de uma), mas não movimenta esse dinheiro. O Mercado Pago aparece só para você pagar a mensalidade do sistema.",
    },
    {
      p: "Preciso de computador?",
      r: "Não. Funciona no navegador do celular, do tablet e do computador. A maioria dos barbeiros usa direto do celular, no intervalo entre um cliente e outro — e o relatório sai em PDF, que abre em qualquer celular.",
    },
    {
      p: "E se eu já tiver os clientes anotados?",
      r: "Se estiverem numa planilha, você mesmo importa em .csv, .xlsx ou .xls e sobe todo mundo de uma vez. Se estiverem só no caderno, cadastre conforme eles aparecem — e quem marcar pelo link já entra cadastrado sozinho.",
    },
    {
      p: "Dei desconto. Como fica a comissão?",
      r: "Fica sobre o valor que o cliente pagou de fato, não sobre o preço cheio — o dono não paga comissão de um dinheiro que não entrou. A gorjeta vai inteira para o barbeiro e aparece separada no relatório.",
    },
    {
      p: "Vendo pacote de cortes. O sistema controla?",
      r: "Controla. O plano tem saldo por serviço que desconta a cada atendimento, sai por R$ 0,00 como “Crédito do plano” e, quando acaba, o sistema oferece renovar, trocar de plano ou cobrar avulso. A comissão do pacote é paga na venda, nunca duas vezes.",
    },
    {
      p: "O barbeiro consegue ver quanto a barbearia fatura?",
      r: "Não. Ele vê a própria agenda, os próprios clientes e o “Meu Relatório”, com o que ele produziu e tem a receber. O faturamento da casa fica com o dono. Para alguém tocar a operação sem ver o financeiro, existe o nível de gerente.",
    },
    {
      p: "Tenho duas unidades. Funciona?",
      r: "Funciona, com um login só. No topo do sistema tem um seletor para trocar de barbearia e a opção “Adicionar barbearia”. Cada uma tem equipe, clientes, estoque, caixa e assinatura próprios.",
    },
    {
      p: "Dá para pagar o ano de uma vez?",
      r: "Dá. Mensal, trimestral (5% de desconto), semestral (8%) ou anual (12%). No PIX não tem taxa; no cartão a renovação é automática. E você troca de plano quando quiser, sem perder histórico.",
    },
    {
      p: "Meus dados ficam seguros?",
      r: "Cada barbearia enxerga apenas os próprios dados e cada pessoa entra com senha individual. O sistema faz cópia de segurança duas vezes por dia e confere cada cópia — se alguma falhar, o suporte é avisado no mesmo dia.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Fechamento                                                          */
/* ------------------------------------------------------------------ */

export const fechamentoBarber = {
  eyebrow: "Comece hoje",
  titulo: ["Duas semanas para ver", "a diferença no fim do dia."],
  texto:
    "Cria a conta, ajusta seus horários, liga o link de agendamento e já marca o primeiro cliente. Os serviços vêm prontos para você editar. Se não servir, é só não continuar — e nada é cobrado.",
};
