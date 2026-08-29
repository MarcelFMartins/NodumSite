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

/* ------------------------------------------------------------------ */
/* Integração com o sistema em produção                                */
/* ------------------------------------------------------------------ */

/**
 * Único lugar do projeto que sabe o endereço do sistema. Quando o
 * NodumBarber ganhar o domínio definitivo, troque esta linha: botões,
 * âncoras legais e rodapé acompanham sozinhos.
 */
const APP = "https://agenda.vogelassessoriacontabil.com";
const WHATSAPP = "5549998097267";

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
  contrato: "/legal/contrato",
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
};

export const navBarber = [
  { label: "Por que existe", href: "#porque" },
  { label: "Agenda", href: "#agenda" },
  { label: "Comissões", href: "#dinheiro" },
  { label: "Recursos", href: "#recursos" },
  { label: "Por dentro", href: "#pordentro" },
  { label: "Acessos", href: "#acessos" },
  { label: "Preço", href: "#preco" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroBarber = {
  eyebrow: "Sistema de gestão para barbearias",
  titulo: ["Sua barbearia inteira", "numa tela só."],
  subtitulo:
    "Agenda em grade, carteira de clientes, comissão por barbeiro, planos com crédito, estoque e caixa. O NodumBarber substitui o caderno, a planilha e os bilhetes no espelho — e mostra, no fim do dia, exatamente quanto entrou e quanto é de cada um.",
  selos: ["Funciona no celular", "Backup 2× por dia", "Sem fidelidade"],
  provas: [
    { valor: "2", rotulo: "cortes por mês", nota: "é o que a mensalidade custa no Essencial" },
    { valor: "0", rotulo: "planilhas para manter", nota: "a comissão do mês fica pronta sozinha" },
    { valor: "14", rotulo: "dias para decidir", nota: "com a barbearia funcionando de verdade" },
    { valor: "4", rotulo: "níveis de acesso", nota: "cada pessoa vê só o que é dela" },
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
      quando: "Segunda-feira",
      titulo: "Dois clientes no mesmo horário",
      texto:
        "Um marcou pelo WhatsApp, outro no caderno. Alguém espera 40 minutos ou vai embora — e não volta.",
    },
    {
      quando: "Fim do mês",
      titulo: "A conta da comissão não fecha",
      texto:
        "Você soma na calculadora, o barbeiro soma no papel, e os dois números não batem. Todo mês a mesma conversa.",
    },
    {
      quando: "Todo dia",
      titulo: "A cerveja sai e ninguém anota",
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
    "Uma coluna por barbeiro, com folga, almoço e ausência bloqueados",
    "Cabeçalho e coluna de horas fixos — a grade rola sem perder a referência",
    "Linha do horário atual acompanhando o dia",
    "Cliente fixo: repete toda semana ou a cada 15 dias, sozinho",
    "Aniversariante do dia aparece na agenda",
    "Atendimento esquecido pode ser lançado com data passada",
  ],
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
          titulo: "Agenda em grade",
          texto:
            "Uma coluna por barbeiro, no formato que barbearia usa. Dia, semana e mês, com folga e almoço respeitados.",
        },
        {
          titulo: "Carteira por barbeiro",
          texto:
            "O cliente é de quem atende. Histórico completo, telefone, observações e quanto já gastou na casa.",
        },
        {
          titulo: "Cliente compartilhado e avulso",
          texto:
            "Quem é da casa toda, qualquer barbeiro agenda. Quem passa e não volta entra como avulso, sem sujar a carteira.",
        },
        {
          titulo: "Cliente fixo",
          texto:
            "Agendamento que se repete toda semana ou a cada 15 dias. Você marca uma vez e o horário fica reservado.",
        },
        {
          titulo: "Importar por planilha",
          texto:
            "Sobe a lista de clientes em .csv, .xlsx ou .xls. Não precisa digitar nome por nome nem pedir para o suporte.",
        },
        {
          titulo: "Aviso de aniversário",
          texto:
            "O aniversariante aparece na agenda do dia e na visão do mês. Um bom motivo para chamar no WhatsApp.",
        },
      ],
    },
    {
      nome: "Dinheiro",
      itens: [
        {
          titulo: "Comissão automática",
          texto:
            "Percentual por barbeiro e por serviço. Cortes valem uma coisa, barba outra — e a conta sai pronta no relatório.",
        },
        {
          titulo: "Comissão de produto",
          texto:
            "O produto vendido tem o próprio percentual, separado do serviço. Vender pomada passa a valer a pena para o barbeiro.",
        },
        {
          titulo: "Planos com crédito",
          texto:
            "Pacote de cortes com saldo que desconta a cada atendimento. Plano combo guarda saldo separado para cada serviço.",
        },
        {
          titulo: "Pagamento dividido",
          texto:
            "Dinheiro, PIX, débito, crédito e outros — na mesma conta, em partes. A soma tem que fechar, e o sistema confere.",
        },
        {
          titulo: "Venda de balcão",
          texto:
            "Produto vendido sem atendimento também entra no caixa, baixa do estoque e gera comissão.",
        },
        {
          titulo: "Estoque que baixa sozinho",
          texto:
            "Vendeu no atendimento ou no balcão, saiu do estoque. O que passou do mínimo aparece marcado.",
        },
      ],
    },
    {
      nome: "Controle",
      itens: [
        {
          titulo: "Agendamento em aberto",
          texto:
            "Passou do horário e ninguém concluiu? O sistema avisa em toda tela e oferece resolver ali mesmo: atendeu, não veio ou cancelou.",
        },
        {
          titulo: "Relatórios de verdade",
          texto:
            "Data, cliente, serviço, barbeiro, forma de pagamento, valor e comissão — linha por linha, com filtro por período e exportação em CSV.",
        },
        {
          titulo: "Quatro níveis de acesso",
          texto:
            "Dono, gerente, barbeiro e o suporte da Nodum. Cada um enxerga e edita só o que faz sentido para o papel.",
        },
        {
          titulo: "Correção sem mexer no banco",
          texto:
            "Cobrou errado, lançou trocado, apagou sem querer? Dá para desfazer pelo sistema, sem chamar ninguém no banco de dados.",
        },
        {
          titulo: "WhatsApp com um toque",
          texto:
            "Botão que abre a conversa com a mensagem pronta: confirmação, lembrete, cancelamento. Você lê antes de enviar.",
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
    "As telas abaixo são fotos do NodumBarber em funcionamento, com uma barbearia de demonstração. É exatamente o que você vê ao entrar.",
  telas: [
    {
      aba: "Início",
      src: "/img/barber/dashboard.webp",
      titulo: "O dono abre e vê o dia inteiro",
      texto:
        "Quanto entrou hoje, na semana e no mês, quantos cortes e barbas, ticket médio, comissão a pagar, qual barbeiro produziu mais e por qual forma de pagamento o dinheiro entrou. Sem abrir planilha nenhuma.",
    },
    {
      aba: "Agenda",
      src: "/img/barber/agenda.webp",
      titulo: "Uma coluna por barbeiro, o dia inteiro na tela",
      texto:
        "Folga, almoço e ausência aparecem bloqueados. Horário livre é livre de verdade — ninguém marca por cima de nada, e a grade rola de lado sem perder o cabeçalho.",
    },
    {
      aba: "Clientes",
      src: "/img/barber/clientes.webp",
      titulo: "A carteira é de quem atende",
      texto:
        "Cada cliente com o barbeiro dono da relação, telefone, número de visitas e histórico completo. Quem é da casa toda aparece marcado como compartilhado.",
    },
    {
      aba: "Serviços",
      src: "/img/barber/servicos.webp",
      titulo: "Preço, duração e comissão em cada serviço",
      texto:
        "Você define quanto dura, quanto custa e como a comissão é cobrada. É essa duração que a agenda usa para calcular o encaixe do próximo cliente.",
    },
    {
      aba: "Planos",
      src: "/img/barber/planos.webp",
      titulo: "Pacote de cortes com saldo controlado",
      texto:
        "Quem comprou plano e quantos cortes ainda tem para usar. O sistema desconta a cada atendimento, avisa quando acaba e não deixa vender um plano em cima de outro ativo.",
    },
    {
      aba: "Relatórios",
      src: "/img/barber/relatorios.webp",
      titulo: "Todo atendimento fica registrado",
      texto:
        "Atendimentos e vendas de balcão na mesma lista, com filtro por período, por barbeiro e por status. Exporta em CSV quando o contador pedir.",
    },
  ],
  rodape:
    "Os nomes e valores acima são de uma barbearia de demonstração. Ao criar a sua conta, o sistema começa com a sua barbearia e os seus dados.",
};

/* ------------------------------------------------------------------ */
/* Em validação                                                        */
/* ------------------------------------------------------------------ */

export const validacao = {
  eyebrow: "Em validação",
  titulo: ["O que está no forno", "agora."],
  intro:
    "Duas telas prontas e em teste no ambiente de homologação, antes de entrar em produção. Ficam disponíveis para todos os planos assim que passarem — sem cobrança nova.",
  itens: [
    {
      aba: "Projeção",
      src: "/img/barber/projecao.webp",
      titulo: "O mês fechado antes de fechar",
      texto:
        "Com o ritmo dos dias já realizados, o sistema projeta onde o faturamento deve terminar. Média de corte e de barba por dia, receita por tipo de serviço, planos e produtos, com o acumulado real contra a projeção no gráfico. Dá tempo de reagir antes do dia 30.",
    },
    {
      aba: "Desconto no checkout",
      src: "/img/barber/checkout.webp",
      titulo: "Desconto sem bagunçar a comissão",
      texto:
        "Uma chave em “Concluir atendimento” e em “Venda de balcão”: desligada, nada muda; ligada, você escolhe percentual ou valor em reais. O total sai já descontado e o pagamento continua podendo ser dividido — e a comissão do barbeiro segue sobre o preço cheio.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Níveis de acesso                                                    */
/* ------------------------------------------------------------------ */

export const acessos = {
  eyebrow: "Níveis de acesso",
  titulo: ["Quatro chaves diferentes", "para a mesma porta."],
  intro: "Escolha um perfil para ver o que a pessoa enxerga ao entrar no sistema.",
  perfis: [
    {
      aba: "Dono",
      titulo: "Enxerga a casa inteira",
      pode: [
        "Agenda de todos os barbeiros",
        "Define a comissão de cada um, por serviço e por produto",
        "Cadastra serviços, produtos, planos e preços",
        "Relatórios de faturamento e comissões",
        "Controla estoque e vendas de balcão",
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
      naoPode: ["Não vê os relatórios financeiros", "Não mexe na assinatura do sistema"],
      nota: "Para quem toca a barbearia quando o dono não está.",
    },
    {
      aba: "Barbeiro",
      titulo: "Enxerga o próprio trabalho",
      pode: [
        "A própria agenda do dia e da semana",
        "Os próprios clientes e o histórico deles",
        "A própria comissão do mês",
        "Fecha o atendimento e registra o pagamento",
      ],
      naoPode: ["Não vê a agenda dos colegas", "Não vê o faturamento da casa"],
    },
    {
      aba: "Rede",
      titulo: "Várias unidades, dados separados",
      pode: [
        "Cada barbearia com seus próprios barbeiros, clientes e relatórios",
        "Nenhuma unidade enxerga os dados da outra",
        "Suporte da Nodum entra na unidade quando você pede",
        "Correção de lançamento errado sem mexer no banco",
      ],
      naoPode: [],
      nota: "Tem filial ou franquia? Fale com o suporte para montar a estrutura do jeito certo.",
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
        "O sistema é multi-inquilino: sua barbearia enxerga apenas os próprios dados, sem exceção e sem configuração da sua parte.",
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
        "Relatórios exportam em CSV a qualquer momento. Nada fica preso aqui dentro se um dia você quiser sair.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Preço                                                               */
/* ------------------------------------------------------------------ */

export const preco = {
  eyebrow: "Preço",
  titulo: ["Um plano para o tamanho", "da sua equipe."],
  intro:
    "Sem taxa por agendamento e sem recurso trancado atrás de plano — a única diferença entre os três é até quantos barbeiros a barbearia tem.",
  planos: [
    {
      nome: "Essencial",
      valor: "79",
      centavos: ",90",
      limite: "até 5 barbeiros",
      destaque: false,
      itens: [
        "Todos os recursos, sem exceção",
        "Clientes e agendamentos ilimitados",
        "Backup automático 2× por dia",
        "Suporte por WhatsApp e e-mail",
      ],
      cta: "Testar 14 dias grátis",
    },
    {
      nome: "Profissional",
      valor: "99",
      centavos: ",90",
      limite: "até 10 barbeiros",
      destaque: true,
      itens: [
        "Todos os recursos, sem exceção",
        "Clientes e agendamentos ilimitados",
        "Backup automático 2× por dia",
        "Suporte por WhatsApp e e-mail, sem fila",
      ],
      cta: "Criar minha barbearia",
    },
    {
      nome: "Premium",
      valor: "149",
      centavos: ",90",
      limite: "barbeiros ilimitados",
      destaque: false,
      itens: [
        "Todos os recursos, sem exceção",
        "Clientes e agendamentos ilimitados",
        "Backup automático 2× por dia",
        "Suporte por WhatsApp e e-mail",
      ],
      cta: "Testar 14 dias grátis",
    },
  ],
  rodape:
    "Todo plano sai com 14 dias grátis, atualizações incluídas e sem fidelidade. Comece por qualquer um: dá para trocar de plano dentro do sistema a qualquer momento, com um clique e sem perder histórico. Se tentar contratar o 6º barbeiro ainda no Essencial, o próprio sistema avisa e sugere a troca.",
  pagamento:
    "A mensalidade é paga por você, dono, dentro do sistema, via Mercado Pago. O NodumBarber não processa o pagamento dos seus clientes — eles continuam pagando na barbearia como já pagam hoje.",
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
        "Serviços, preços, horários e equipe. Se quiser, o suporte deixa tudo montado antes de você começar.",
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
      titulo: "Melhorias contínuas",
      texto:
        "O sistema recebe atualização sem você fazer nada e sem cobrança nova. Sugestão de cliente vira recurso.",
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
      p: "Meu cliente vai precisar baixar alguma coisa?",
      r: "Não. O NodumBarber é para uso interno da barbearia — quem marca é você ou o barbeiro. O cliente continua chamando no WhatsApp ou aparecendo na loja, como já faz hoje.",
    },
    {
      p: "O sistema processa o pagamento dos meus clientes?",
      r: "Não. Seu cliente continua pagando na barbearia do jeito que já paga — dinheiro, PIX, débito ou crédito na máquina da loja. O sistema registra qual foi a forma (e aceita dividir entre mais de uma), mas não movimenta esse dinheiro. O Mercado Pago aparece uma única vez dentro do NodumBarber: para você pagar a mensalidade do sistema.",
    },
    {
      p: "Preciso de computador?",
      r: "Não. Funciona no navegador do celular, do tablet e do computador. A maioria dos barbeiros usa direto do celular, no intervalo entre um cliente e outro.",
    },
    {
      p: "E se eu já tiver os clientes anotados?",
      r: "Se estiverem numa planilha, você mesmo importa em .csv, .xlsx ou .xls e sobe todo mundo de uma vez. Se estiverem só na cabeça e no caderno, cadastre conforme eles aparecem — em duas semanas a carteira se monta sozinha.",
    },
    {
      p: "O barbeiro consegue ver quanto a barbearia fatura?",
      r: "Não. Ele vê a própria agenda, os próprios clientes e a própria comissão. O faturamento da casa e a agenda dos colegas ficam com o dono. Se você precisa de alguém tocando a operação sem acesso ao financeiro, existe o nível de gerente.",
    },
    {
      p: "Dá para deixar um horário fixo para o cliente da semana?",
      r: "Dá. O cliente fixo repete toda semana ou a cada 15 dias sozinho, sem você remarcar. É o caso do cliente que corta sempre na sexta às 18:00.",
    },
    {
      p: "Vendo pacote de cortes. O sistema controla?",
      r: "Controla. O plano tem saldo de crédito que desconta a cada atendimento, avisa quando está no fim e não deixa vender outro por cima de um ativo. O plano combo guarda saldo separado para cada serviço — quatro cortes e duas barbas, por exemplo, contados um a um.",
    },
    {
      p: "Meus dados ficam seguros?",
      r: "Cada barbearia enxerga apenas os próprios dados e cada pessoa entra com senha individual. O sistema faz cópia de segurança duas vezes por dia e confere cada cópia — se alguma falhar, o suporte é avisado no mesmo dia.",
    },
    {
      p: "Contratei o Essencial e cresci. Preciso recadastrar tudo?",
      r: "Não. Na tela de Assinatura você troca de plano com um clique — dados, agenda e histórico continuam exatamente onde estavam. Se tentar contratar o 6º barbeiro ainda no Essencial, o sistema avisa e sugere a troca na hora.",
    },
    {
      p: "Tenho duas unidades. Funciona?",
      r: "Funciona. Cada unidade tem os próprios barbeiros, clientes e relatórios, completamente separados. Fale com o suporte para montar a estrutura do jeito certo.",
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
    "Cria a conta, ajusta seus horários e já marca o primeiro cliente. Os serviços vêm prontos para você editar. Se não servir, é só não continuar — e nada é cobrado.",
};
