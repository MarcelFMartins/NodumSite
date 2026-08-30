/**
 * Conteúdo da landing do Nodum Business Intelligence.
 *
 * Mesma regra dos outros produtos: nada de string solta em componente.
 * O produto é um painel interno — não tem cadastro público nem plano
 * publicado, então esta página não vende assinatura, vende a
 * demonstração. O CTA de toda a página é "agendar uma demonstração",
 * não "criar conta".
 */

export const bi = {
  nome: "Nodum BI",
  nomeCompleto: "Nodum Business Intelligence",
  tagline: "Todas as DREs dos seus clientes, num painel só",
};

/**
 * O BI não tem cadastro público — é um painel implantado por
 * escritório, não uma assinatura self-service. Todo CTA da página
 * chama uma conversa, via o WhatsApp da própria Nodum (o mesmo do
 * site institucional, em lib/content.ts).
 */
export function zapBi(whatsapp: string) {
  const texto = "Quero conhecer o Nodum BI para o meu escritório de contabilidade.";
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const navBi = [
  { label: "O problema", href: "#problema" },
  { label: "O painel", href: "#painel" },
  { label: "Por dentro", href: "#pordentro" },
  { label: "Acessos", href: "#acessos" },
  { label: "Como entra o dado", href: "#dados" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const heroBi = {
  eyebrow: "Business Intelligence para contabilidade",
  titulo: ["Todas as DREs dos seus clientes,", "num painel só."],
  subtitulo:
    "Consolida a Demonstração de Resultado de várias empresas num só lugar — pensado para quem acompanha muitos clientes ao mesmo tempo. Chega de abrir arquivo por arquivo para saber quanto cresceu ou caiu cada indicador.",
  selos: ["Importa Excel e PDF do Domínio", "Comparação automática de período", "Acesso segmentado por cliente"],
  provas: [
    { valor: "5", rotulo: "indicadores principais", nota: "com variação % automática" },
    { valor: "1", rotulo: "clique para trocar período", nota: "trimestre, semestre, ano ou intervalo" },
    { valor: "0", rotulo: "planilha para recalcular", nota: "a comparação já vem pronta" },
    { valor: "N", rotulo: "empresas ao mesmo tempo", nota: "consolidado e por empresa" },
  ],
};

/* ------------------------------------------------------------------ */
/* Por que existe                                                      */
/* ------------------------------------------------------------------ */

export const porqueBi = {
  eyebrow: "Por que existe",
  titulo: ["A DRE de cada cliente já existe.", "O trabalho é juntar todas."],
  intro:
    "Três coisas que acontecem toda vez que se acompanha DRE de várias empresas em planilha e PDF separados.",
  cenas: [
    {
      quando: "Fechamento do mês",
      titulo: "Um arquivo por empresa, um por vez",
      texto:
        "Abrir a planilha do cliente A, depois a do B, depois o PDF do Domínio do C — e montar na cabeça o que mudou de um mês para o outro.",
    },
    {
      quando: "Reunião com o cliente",
      titulo: "A comparação nasce de novo toda vez",
      texto:
        "Quanto cresceu a receita nesse trimestre contra o mesmo trimestre do ano passado? Alguém recalcula na hora, ou não leva o número.",
    },
    {
      quando: "Visão de carteira",
      titulo: "Ninguém vê os clientes lado a lado",
      texto:
        "Sem um total consolidado, é difícil dizer qual empresa pesa mais no resultado da carteira ou se todas melhoraram junto.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* O painel — a demonstração central                                   */
/* ------------------------------------------------------------------ */

export const painelBi = {
  eyebrow: "O painel",
  titulo: ["Escolhe o período,", "o painel refaz a conta."],
  texto:
    "Trimestre, semestre, ano ou um intervalo de meses escolhido à mão — qualquer recorte é analisável na hora. O painel compara sozinho com o mesmo período do ano anterior ou com o período imediatamente anterior, sem precisar montar nada de novo.",
  periodos: ["1º Trimestre", "2º Trimestre", "3º Trimestre", "4º Trimestre", "1º Semestre", "2º Semestre", "Anual", "Personalizado"],
  comparacoes: ["Mesmo período, ano anterior", "Período anterior imediato"],
  // "direcao" é para onde o número foi de verdade (a seta); "tom" é se
  // essa direção é boa ou ruim NESTE indicador (a cor). Uma DRE onde
  // CMV caiu é boa notícia mesmo com a seta apontando para baixo — por
  // isso as duas coisas são campos separados, e não uma coisa só.
  kpis: [
    { rotulo: "Receita Bruta", valor: "R$ 703.817,22", variacao: "10,48%", direcao: "baixa", tom: "ruim", nota: "vs. R$ 786.208,55 no período anterior" },
    { rotulo: "Lucro Líquido", valor: "R$ 341.351,36", variacao: "10,48%", direcao: "baixa", tom: "ruim", nota: "vs. R$ 381.311,12 no período anterior" },
    { rotulo: "Margem Líquida", valor: "48,50%", variacao: "+0,00 p.p.", direcao: "estavel", tom: "neutro", nota: "vs. 48,50% no período anterior" },
    { rotulo: "CMV", valor: "R$ 225.221,51", variacao: "10,48%", direcao: "baixa", tom: "bom", nota: "vs. R$ 251.586,74 no período anterior" },
    { rotulo: "Despesas Operacionais", valor: "R$ 77.419,89", variacao: "10,48%", direcao: "baixa", tom: "bom", nota: "vs. R$ 86.482,96 no período anterior" },
  ],
};

/* ------------------------------------------------------------------ */
/* Por dentro — telas reais                                            */
/* ------------------------------------------------------------------ */

export const pordentroBi = {
  eyebrow: "Por dentro",
  titulo: ["Não é maquete.", "É o painel rodando."],
  intro:
    "As telas abaixo são do Nodum BI em funcionamento, com uma carteira de demonstração (três empresas fictícias). É exatamente o que aparece ao entrar.",
  telas: [
    {
      aba: "Indicadores",
      src: "/img/bi/kpis.webp",
      titulo: "Os cinco números que abrem a conversa",
      texto:
        "Receita Bruta, Lucro Líquido, Margem Líquida, CMV e Despesas Operacionais — cada um com a variação em relação ao período de comparação escolhido, sem precisar abrir nada.",
    },
    {
      aba: "Evolução mensal",
      src: "/img/bi/evolucao.webp",
      titulo: "Receita e lucro, mês a mês",
      texto:
        "Os valores reais lançados no período, em gráfico de área — para ver de longe onde a curva mudou de direção antes de entrar no detalhe.",
    },
    {
      aba: "Fluxo do resultado",
      src: "/img/bi/waterfall.webp",
      titulo: "Como a Receita Bruta vira Lucro Líquido",
      texto:
        "Um gráfico de cascata mostra o caminho: deduções, CMV, despesas administrativas e operacionais — cada barra é o que sai ou o que sobra até o resultado final.",
    },
    {
      aba: "Custos e despesas",
      src: "/img/bi/custos.webp",
      titulo: "Para onde vai o dinheiro que sai",
      texto:
        "Cada categoria de custo — CMV, despesas administrativas, impostos — com a fatia que representa do total gasto e, ao lado, quanto pesa sobre a receita.",
    },
    {
      aba: "Comparativo",
      src: "/img/bi/comparativo.webp",
      titulo: "Categoria por categoria, período contra período",
      texto:
        "Cada linha de custo comparada lado a lado com o mesmo período anterior — para ver não só se o total mudou, mas onde exatamente.",
    },
    {
      aba: "Margens",
      src: "/img/bi/margens.webp",
      titulo: "Margem bruta, operacional e líquida, mês a mês",
      texto: "A evolução das três margens no mesmo gráfico — o que revela se a empresa está ficando mais eficiente ou só vendendo mais.",
    },
    {
      aba: "Velocímetros",
      src: "/img/bi/gauges.webp",
      titulo: "Três números, de relance",
      texto:
        "Margem líquida, % de CMV e % de despesas sobre a receita, num mostrador visual — o tipo de número que se olha em dois segundos antes de uma reunião.",
    },
    {
      aba: "Comparação de períodos",
      src: "/img/bi/periodos.webp",
      titulo: "A DRE inteira, período contra período",
      texto:
        "Cada linha da demonstração com a análise vertical (o quanto representa da receita) e a variação percentual contra o período de comparação — pronta para exportar ou apresentar.",
    },
    {
      aba: "Detalhamento",
      src: "/img/bi/detalhamento.webp",
      titulo: "Cada empresa, com o seu peso no total",
      texto:
        "Quando mais de uma empresa está selecionada, uma linha por empresa mostra o quanto ela representa do consolidado — com totalizador ao final.",
    },
  ],
  rodape:
    "As empresas acima são de demonstração. Ao configurar sua conta, o painel passa a mostrar a carteira real, com os dados que você importar.",
};

/* ------------------------------------------------------------------ */
/* Como entra o dado                                                   */
/* ------------------------------------------------------------------ */

export const dadosBi = {
  eyebrow: "Como entra o dado",
  titulo: ["A planilha ou o PDF que você já tem —", "sem digitar de novo."],
  intro:
    "Nada de sistema novo para o cliente aprender. O que já existe é o que entra.",
  passos: [
    {
      numero: "01",
      titulo: "Envie a DRE mensal",
      texto:
        "Upload direto pelo navegador, em .xlsx (planilha) ou .pdf exportado do sistema Domínio. Um arquivo por empresa, por mês.",
    },
    {
      numero: "02",
      titulo: "O painel organiza sozinho",
      texto:
        "Os valores entram na linha do tempo da empresa e ficam disponíveis para qualquer recorte de período, na hora — sem digitar nada de novo.",
    },
    {
      numero: "03",
      titulo: "Cadastre empresas e usuários pela tela",
      texto:
        "Nada de terminal ou pedido ao suporte: criar uma empresa nova ou dar acesso a alguém é uma tela dentro do próprio painel.",
    },
  ],
  cobertura:
    "Uma tela própria mostra a cobertura dos dados — quais meses de quais empresas já foram enviados e onde ainda falta um arquivo, antes que isso apareça como buraco num gráfico.",
};

/* ------------------------------------------------------------------ */
/* Níveis de acesso                                                    */
/* ------------------------------------------------------------------ */

export const acessosBi = {
  eyebrow: "Acessos",
  titulo: ["Você vê a carteira inteira.", "Cada cliente vê só o dele."],
  intro: "Escolha um perfil para ver o que a pessoa enxerga ao entrar no painel.",
  perfis: [
    {
      aba: "Escritório",
      titulo: "Enxerga todas as empresas da carteira",
      pode: [
        "Seleciona uma, várias ou todas as empresas ao mesmo tempo",
        "Consolidado e detalhamento por empresa, lado a lado",
        "Cadastra empresas e usuários pela própria tela",
        "Envia a DRE mensal de qualquer empresa",
        "Acompanha a cobertura dos dados enviados",
      ],
      naoPode: [],
    },
    {
      aba: "Cliente",
      titulo: "Enxerga só a própria empresa",
      pode: [
        "Todos os indicadores e gráficos, com os próprios dados",
        "Comparação de período dos próprios números",
        "Acesso opcional — o escritório decide quem recebe login",
      ],
      naoPode: ["Não vê dados de nenhuma outra empresa da carteira", "Não cadastra empresa nem usuário"],
      nota: "Dar acesso ao cliente é decisão do escritório, empresa por empresa.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqBi = {
  eyebrow: "Dúvidas",
  titulo: "O que perguntam antes de começar",
  itens: [
    {
      p: "Preciso lançar os dados de novo, num sistema separado?",
      r: "Não. Você sobe a DRE mensal que já sai da sua rotina — planilha Excel ou o PDF que o sistema Domínio exporta. O painel lê esse arquivo; não existe um lançamento paralelo para manter.",
    },
    {
      p: "Meu cliente precisa aprender a usar mais um sistema?",
      r: "Só se você quiser dar acesso a ele. O uso do dia a dia é seu — o cliente, quando tem login, só olha os próprios números; não precisa importar nada nem configurar período.",
    },
    {
      p: "Dá para comparar uma empresa com o ano passado dela mesma?",
      r: "Sim, e é o comparativo padrão: mesmo período, ano anterior. Também dá para comparar com o período imediatamente anterior — por exemplo, este trimestre contra o trimestre passado.",
    },
    {
      p: "E se eu quiser ver várias empresas juntas, e não uma de cada vez?",
      r: "O painel foi pensado para isso: seleciona quantas empresas quiser e vê o consolidado, com o detalhamento de cada uma e o percentual de participação no total logo abaixo.",
    },
    {
      p: "Consigo controlar quem vê o quê?",
      r: "Sim. O escritório e o gestor veem a carteira inteira. Cada cliente, se receber acesso, só vê os próprios dados — nunca os de outra empresa.",
    },
    {
      p: "Preciso pedir para alguém cadastrar uma empresa nova?",
      r: "Não. Cadastro de empresa e de usuário é feito pela própria interface, sem mexer em terminal nem depender do suporte.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Fechamento                                                          */
/* ------------------------------------------------------------------ */

export const fechamentoBi = {
  eyebrow: "Ver funcionando",
  titulo: ["Mostramos o painel", "com os seus números."],
  texto:
    "Uma demonstração de 30 minutos, com a DRE de um cliente seu de verdade, para você ver o painel montado com dados que reconhece — não com a empresa fictícia.",
};
