/**
 * Documentos legais da Nodum, centralizados.
 *
 * Dois níveis, de propósito:
 *  - Termos de Uso e Política de Privacidade são GERAIS — regem a
 *    relação com a Nodum e valem para qualquer produto (NodumBarber,
 *    Nodum BI, e os que vierem depois). Não repetem preço nem prazo de
 *    teste de nenhum produto específico.
 *  - Cada produto tem o PRÓPRIO contrato, com as condições comerciais
 *    daquele produto. O NodumBarber vende por assinatura self-service
 *    (por isso o contrato tem preço, vencimento, régua de bloqueio). O
 *    Nodum BI é implantado por proposta comercial — o contrato existe,
 *    mas os números (valor, prazo, quantidade de empresas incluídas)
 *    vêm da proposta assinada com o escritório, não de uma tabela
 *    pública, porque essa tabela não existe.
 *
 * O texto é reprodução fiel do que está publicado e vigente para o
 * NodumBarber — é documento vinculante, não copy de marketing. Ao
 * alterar qualquer cláusula, suba a `versao` e a `vigencia` do
 * documento correspondente e comunique os assinantes, como os próprios
 * termos exigem (30 dias de antecedência para alteração relevante).
 */

import { site } from "./content";

/* ------------------------------------------------------------------ */
/* Dados da empresa e contato                                          */
/* ------------------------------------------------------------------ */

export const empresa = {
  razao: "Nodum Soluções Integradas LTDA",
  cnpj: "67.249.538/0001-05",
  endereco: "Rua Olavo Ribas, 278 - Centro, Matos Costa/SC, CEP 89.420-000",
  comarca: "Matos Costa/SC",
};

/**
 * Endereço usado como canal do encarregado de dados (LGPD) e como
 * contato formal dos contratos. Está num só lugar de propósito: trocar
 * aqui atualiza todos os documentos de uma vez.
 */
export const contatoLegal = "contato@nodumsolucoes.com";

/* ------------------------------------------------------------------ */
/* Estrutura                                                           */
/* ------------------------------------------------------------------ */

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "defs"; itens: { termo: string; texto: string }[] };

export type Secao = { n: string; titulo: string; blocos: Bloco[] };

/** "geral" rege todos os produtos; os demais são o contrato daquele produto só. */
export type GrupoDocumento = "geral" | "nodumbarber" | "nodumbi" | "agendainterna";

/**
 * Chamada para ação de um contrato vendido sob proposta (BI e Agenda
 * Interna): não tem preço fixo para "aceitar" — o próximo passo real é
 * pedir a proposta. Fica de fora do corpo do documento de propósito: é
 * texto comercial, não cláusula, e a página é quem decide onde mostrar.
 */
export type CtaDocumento = { titulo: string; texto: string; label: string; href: string };

export type Documento = {
  slug: string;
  grupo: GrupoDocumento;
  titulo: string;
  subtitulo: string;
  resumo: string;
  versao: string;
  vigencia: string;
  aplica: string;
  secoes: Secao[];
  cta?: CtaDocumento;
};

/* ------------------------------------------------------------------ */
/* Termos de Uso — geral, todos os produtos                            */
/* ------------------------------------------------------------------ */

const termos: Documento = {
  slug: "termos",
  grupo: "geral",
  titulo: "Termos de Uso",
  subtitulo: "Regras de uso dos produtos Nodum",
  resumo:
    "O que vale para qualquer produto Nodum que você use: quem é quem, o que esperamos de você, o que garantimos e o que acontece quando alguma das partes não cumpre o combinado. As condições comerciais de cada produto — preço, prazo de teste, forma de cobrança — ficam no contrato daquele produto, não aqui.",
  versao: "2.0",
  vigencia: "30 de agosto de 2026",
  aplica: "Todos os produtos Nodum",
  secoes: [
    {
      n: "1",
      titulo: "Quem é quem neste documento",
      blocos: [
        {
          tipo: "p",
          texto: `“Nós”, “Nodum” ou “contratada” é ${empresa.razao}, inscrita no CNPJ ${empresa.cnpj}, com sede em ${empresa.endereco}.`,
        },
        {
          tipo: "p",
          texto:
            "“Você”, “usuário” ou “contratante” é a pessoa física ou jurídica que cria uma conta em um produto Nodum, ou em nome de quem uma conta é criada — o responsável perante nós pelo uso daquela conta.",
        },
        {
          tipo: "p",
          texto:
            "“Produto” é qualquer sistema oferecido por nós na modalidade de software como serviço, acessado pela internet — hoje, o NodumBarber e o Nodum BI. Cada produto pode ter um contrato próprio, com as condições comerciais específicas dele; este documento é a base comum a todos.",
        },
      ],
    },
    {
      n: "2",
      titulo: "Cadastro e responsabilidade pela conta",
      blocos: [
        {
          tipo: "p",
          texto:
            "Para usar um produto Nodum você (ou alguém em seu nome) cria uma conta com dados de identificação e uma senha. Você declara que os dados informados são verdadeiros e se compromete a mantê-los atualizados.",
        },
        {
          tipo: "p",
          texto:
            "A senha é pessoal e intransferível. Tudo o que for feito na sua conta é considerado feito por você — inclusive por pessoas a quem você deu acesso. Cabe a você criar, revisar e remover os acessos de quem trabalha com você dentro do produto.",
        },
        {
          tipo: "p",
          texto:
            "Se você suspeitar que alguém acessou sua conta sem autorização, troque a senha imediatamente e avise o suporte. Trocar a senha encerra as sessões abertas em outros aparelhos.",
        },
      ],
    },
    {
      n: "3",
      titulo: "O que você não pode fazer",
      blocos: [
        { tipo: "p", texto: "Ao usar qualquer produto Nodum, você concorda em não:" },
        {
          tipo: "lista",
          itens: [
            "Compartilhar sua conta com quem não deveria ter acesso a ela, nem usar uma única contratação para atender mais empresas ou estabelecimentos do que o contrato daquele produto permite.",
            "Tentar acessar dados de outro cliente Nodum, contornar os níveis de acesso de um produto ou explorar falhas de segurança em vez de comunicá-las a nós.",
            "Usar qualquer produto para armazenar conteúdo ilícito, ou para enviar mensagens não solicitadas a terceiros.",
            "Automatizar acessos, extrair dados em massa ou revender o acesso a um produto sem autorização nossa por escrito.",
          ],
        },
      ],
    },
    {
      n: "4",
      titulo: "Disponibilidade e manutenção",
      blocos: [
        {
          tipo: "p",
          texto:
            "Trabalhamos para manter os produtos disponíveis 24 horas por dia, mas não prometemos disponibilidade ininterrupta. Podem ocorrer interrupções por manutenção programada, falha de infraestrutura, de conexão ou de serviços de terceiros dos quais dependemos.",
        },
        {
          tipo: "p",
          texto:
            "Manutenções programadas que exijam indisponibilidade serão comunicadas com antecedência sempre que possível, e feitas preferencialmente em horários de menor movimento.",
        },
        {
          tipo: "p",
          texto:
            "Cada produto mantém rotina própria de cópia de segurança dos dados. A frequência e o prazo de retenção específicos estão descritos no contrato de cada produto — o backup é medida de recuperação de falhas nossa; não substitui a exportação dos seus próprios dados, disponível dentro do produto.",
        },
      ],
    },
    {
      n: "5",
      titulo: "Propriedade",
      blocos: [
        {
          tipo: "p",
          texto:
            "Os produtos, o código, a marca Nodum e os elementos visuais são nossos. A contratação de um produto dá a você o direito de usá-lo enquanto o contrato daquele produto estiver em vigor, e nada além disso.",
        },
        {
          tipo: "p",
          texto:
            "Os dados que você cadastra ou processa através de um produto são seus. Não os vendemos, não os usamos para publicidade e não os compartilhamos com outros clientes.",
        },
      ],
    },
    {
      n: "6",
      titulo: "Limite de responsabilidade",
      blocos: [
        {
          tipo: "p",
          texto:
            "Cada produto é uma ferramenta de apoio à gestão ou à análise. As decisões do seu negócio, os valores cobrados dos seus clientes e o cumprimento das suas obrigações fiscais e trabalhistas são de sua responsabilidade.",
        },
        {
          tipo: "p",
          texto:
            "Nossa responsabilidade em qualquer hipótese, por produto, fica limitada ao valor pago por você nos 12 meses anteriores ao evento, conforme o contrato daquele produto. Não respondemos por lucros cessantes, perda de oportunidade ou danos indiretos.",
        },
        {
          tipo: "p",
          texto:
            "Nada nesta cláusula afasta os direitos que a lei garante a você como consumidor, quando aplicável.",
        },
      ],
    },
    {
      n: "7",
      titulo: "Alterações destes termos",
      blocos: [
        {
          tipo: "p",
          texto:
            "Podemos alterar estes termos para acompanhar mudanças nos produtos ou na lei. Alterações relevantes serão comunicadas por e-mail e dentro do produto com pelo menos 30 dias de antecedência.",
        },
        {
          tipo: "p",
          texto:
            "Se você não concordar com a nova versão, pode cancelar a contratação antes de ela entrar em vigor, sem multa, e continuar usando o produto até o fim do período já pago (quando aplicável ao modelo comercial daquele produto).",
        },
      ],
    },
    {
      n: "8",
      titulo: "Foro",
      blocos: [
        {
          tipo: "p",
          texto: `Fica eleito o foro da comarca de ${empresa.comarca} para resolver questões deste documento, salvo se a lei determinar foro diverso em favor do consumidor.`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Política de Privacidade — geral, todos os produtos                  */
/* ------------------------------------------------------------------ */

const privacidade: Documento = {
  slug: "privacidade",
  grupo: "geral",
  titulo: "Política de Privacidade",
  subtitulo: "Como tratamos dados pessoais, conforme a LGPD",
  resumo:
    "Como a Nodum trata dado pessoal em qualquer um dos seus produtos: por que guarda, por quanto tempo, com quem compartilha e como você exerce os direitos previstos na Lei 13.709/2018.",
  versao: "2.0",
  vigencia: "30 de agosto de 2026",
  aplica: "Todos os produtos Nodum",
  secoes: [
    {
      n: "1",
      titulo: "Os dois papéis, que não se confundem",
      blocos: [
        {
          tipo: "p",
          texto:
            "Esta é a parte que mais gera confusão, então vem primeiro. Em qualquer produto Nodum há dois conjuntos de dados, com responsáveis diferentes:",
        },
        {
          tipo: "defs",
          itens: [
            {
              termo: "Dados da sua conta",
              texto:
                "(seu nome, seu e-mail, o histórico de pagamento da contratação). Aqui nós somos o controlador: decidimos por que e como tratar esses dados.",
            },
            {
              termo: "Dados que você processa através do produto",
              texto:
                "— por exemplo, os dados de clientes de uma barbearia no NodumBarber, ou a DRE de uma empresa da sua carteira no Nodum BI. Aqui você é o controlador e nós somos apenas o operador: tratamos esses dados seguindo as suas instruções, para prestar o serviço, e não os usamos para nenhuma finalidade própria.",
            },
          ],
        },
      ],
    },
    {
      n: "2",
      titulo: "Que dados guardamos da sua conta",
      blocos: [
        {
          tipo: "lista",
          itens: [
            "Nome, e-mail e senha (armazenada apenas como resumo criptográfico — nós não conseguimos ler sua senha).",
            "Dados de identificação do seu negócio (nome do estabelecimento, do escritório, ou equivalente), conforme o produto.",
            "Histórico da contratação: datas, valores, forma de pagamento e situação.",
            "Registros técnicos de acesso, necessários para segurança e para o cumprimento do art. 15 do Marco Civil da Internet.",
          ],
        },
      ],
    },
    {
      n: "3",
      titulo: "Dados que você processa através do produto",
      blocos: [
        {
          tipo: "p",
          texto:
            "O que cada produto guarda aqui depende do que ele faz. No NodumBarber, são os dados dos clientes que você atende (nome, telefone, histórico de agendamentos e pagamentos). No Nodum BI, é a Demonstração de Resultado das empresas da sua carteira, que você mesmo importa.",
        },
        {
          tipo: "p",
          texto:
            "Nenhum produto Nodum pede ou armazena dado sensível — saúde, biometria, origem racial, opinião política ou religiosa — como parte do seu funcionamento normal. Onde existir campo de texto livre (como observações de atendimento), ele não deve ser usado para esse tipo de informação; se você optar por registrar dado sensível ali, a responsabilidade por essa escolha e pelas exigências legais que ela cria é sua.",
        },
      ],
    },
    {
      n: "4",
      titulo: "Por que tratamos cada dado",
      blocos: [
        { tipo: "p", texto: "As bases legais que usamos, conforme o art. 7º da LGPD:" },
        {
          tipo: "defs",
          itens: [
            {
              termo: "Execução de contrato",
              texto: "para dar acesso ao produto, processar a contratação e prestar suporte.",
            },
            {
              termo: "Cumprimento de obrigação legal",
              texto:
                "para emitir documentos fiscais e guardar registros de acesso pelo prazo exigido em lei.",
            },
            {
              termo: "Legítimo interesse",
              texto:
                "para segurança, prevenção a fraude e melhoria dos produtos, sempre com os dados no menor grau de identificação possível.",
            },
            {
              termo: "Instruções do controlador",
              texto:
                "no caso dos dados que você processa através do produto, em que atuamos como operador a seu comando.",
            },
          ],
        },
      ],
    },
    {
      n: "5",
      titulo: "Com quem compartilhamos",
      blocos: [
        {
          tipo: "p",
          texto:
            "Não vendemos dados e não os cedemos para publicidade. Compartilhamos apenas com quem é necessário para o serviço funcionar:",
        },
        {
          tipo: "defs",
          itens: [
            {
              termo: "Processador de pagamentos",
              texto:
                "quando o produto cobra por assinatura, processa o pagamento sem que nós recebamos ou armazenemos número de cartão.",
            },
            {
              termo: "Provedor de hospedagem e de e-mail",
              texto: "mantêm o servidor e enviam os avisos operacionais e de recuperação de senha.",
            },
            {
              termo: "Autoridade pública",
              texto:
                "apenas mediante ordem judicial ou requisição legal, e no limite do que for exigido.",
            },
          ],
        },
      ],
    },
    {
      n: "6",
      titulo: "Onde ficam os dados e por quanto tempo",
      blocos: [
        {
          tipo: "p",
          texto:
            "Os dados ficam em servidor localizado no Brasil, com rotina de cópia de segurança automática — a frequência e a retenção específicas estão no contrato de cada produto.",
        },
        {
          tipo: "p",
          texto:
            "Enquanto a contratação estiver ativa, os dados permanecem disponíveis. Se ela for cancelada ou suspensa por falta de pagamento, os dados não são apagados de imediato: ficam guardados pelo prazo descrito no contrato do produto e voltam ao lugar caso a contratação seja reativada dentro desse prazo.",
        },
        {
          tipo: "p",
          texto:
            "O apagamento definitivo ocorre quando você pedir, ou ao fim do prazo de retenção do contrato do produto — o que vier primeiro. Registros exigidos por lei (fiscais e de acesso) são mantidos pelo prazo legal mesmo após o apagamento do restante.",
        },
      ],
    },
    {
      n: "7",
      titulo: "Segurança",
      blocos: [
        { tipo: "p", texto: "As medidas técnicas que estão em uso em todos os produtos:" },
        {
          tipo: "lista",
          itens: [
            "Conexão criptografada (HTTPS) em todo o acesso.",
            "Senhas guardadas apenas como resumo criptográfico — não são reversíveis.",
            "Separação estrita entre clientes: cada consulta é limitada aos dados da conta autenticada.",
            "Níveis de acesso internos ao produto: quem opera vê o que precisa para o próprio trabalho, não necessariamente tudo.",
            "Cópias de segurança automáticas, com aviso em caso de falha.",
          ],
        },
      ],
    },
    {
      n: "8",
      titulo: "Seus direitos",
      blocos: [
        {
          tipo: "p",
          texto: `A LGPD garante a você o direito de confirmar a existência de tratamento, acessar seus dados, corrigi-los, solicitar anonimização ou eliminação, pedir a portabilidade e revogar consentimento. Para exercer qualquer um deles, escreva para ${contatoLegal}.`,
        },
        {
          tipo: "p",
          texto:
            "Respondemos em até 15 dias. Podemos pedir informação adicional para confirmar sua identidade antes de atender — é proteção sua, não obstáculo.",
        },
      ],
    },
    {
      n: "9",
      titulo: "Direitos de terceiros cujos dados você processa",
      blocos: [
        {
          tipo: "p",
          texto:
            "Se alguém cujo dado você processa através de um produto Nodum (um cliente seu, uma empresa da sua carteira) pedir acesso, correção ou exclusão, quem responde é você, como controlador desse dado. O produto permite atender esses pedidos diretamente pelas telas de cadastro e exportação.",
        },
        {
          tipo: "p",
          texto: "Se o pedido chegar a nós, encaminharemos a você e daremos o apoio técnico necessário.",
        },
      ],
    },
    {
      n: "10",
      titulo: "Incidentes",
      blocos: [
        {
          tipo: "p",
          texto:
            "Se ocorrer incidente de segurança com risco relevante aos titulares, comunicaremos você e a Autoridade Nacional de Proteção de Dados nos prazos da lei, informando o que aconteceu, quais dados foram afetados e quais medidas foram tomadas.",
        },
      ],
    },
    {
      n: "11",
      titulo: "Encarregado de dados",
      blocos: [
        {
          tipo: "p",
          texto: `Contato do encarregado pelo tratamento de dados pessoais: ${contatoLegal}.`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contrato de Assinatura — NodumBarber                                 */
/* ------------------------------------------------------------------ */

const contratoNodumBarber: Documento = {
  slug: "contrato-nodumbarber",
  grupo: "nodumbarber",
  titulo: "Contrato de Assinatura",
  subtitulo: "Condições comerciais do NodumBarber",
  resumo:
    "Quanto custa, quando vence, o que acontece se atrasar, como cancelar e o que acontece com os seus dados depois. Complementa os Termos de Uso e a Política de Privacidade gerais da Nodum, que continuam valendo.",
  versao: "1.2",
  vigencia: "03 de agosto de 2026",
  aplica: "NodumBarber",
  secoes: [
    {
      n: "1",
      titulo: "Partes",
      blocos: [
        {
          tipo: "defs",
          itens: [
            {
              termo: "Contratada",
              texto: `${empresa.razao}, CNPJ ${empresa.cnpj}, com sede em ${empresa.endereco}.`,
            },
            {
              termo: "Contratante",
              texto:
                "a pessoa física ou jurídica identificada no cadastro da conta, responsável pelo estabelecimento nela registrado.",
            },
          ],
        },
        {
          tipo: "p",
          texto:
            "Este contrato passa a valer no momento em que o contratante conclui o cadastro no NodumBarber e declara aceite, ou no primeiro pagamento — o que ocorrer primeiro. Ele é específico do NodumBarber; as regras gerais de conduta, propriedade e privacidade estão nos Termos de Uso e na Política de Privacidade da Nodum.",
        },
      ],
    },
    {
      n: "2",
      titulo: "Objeto",
      blocos: [
        {
          tipo: "p",
          texto:
            "Licença de uso, não exclusiva e intransferível, do sistema NodumBarber, na modalidade de software como serviço, para um (1) estabelecimento, pelo prazo da assinatura.",
        },
        {
          tipo: "p",
          texto:
            "A licença inclui profissionais, clientes, agendamentos e produtos ilimitados dentro desse estabelecimento, sem cobrança por usuário adicional.",
        },
      ],
    },
    {
      n: "3",
      titulo: "Preço e vencimento",
      blocos: [
        { tipo: "p", texto: "A mensalidade é de R$ 80,00 (oitenta reais) por estabelecimento." },
        {
          tipo: "p",
          texto:
            "Antes da primeira cobrança há 14 dias de teste gratuito, sem necessidade de cartão. Nenhuma cobrança é feita automaticamente ao final do teste: a assinatura só começa quando o contratante ativa o pagamento.",
        },
        {
          tipo: "p",
          texto:
            "O vencimento seguinte é sempre um mês após o período já pago. Pagamento antecipado soma dias ao período em vez de substituí-lo; pagamento em atraso conta o novo período a partir da confirmação, sem cobrança retroativa dos dias em que o sistema ficou bloqueado.",
        },
      ],
    },
    {
      n: "4",
      titulo: "Formas de pagamento",
      blocos: [
        {
          tipo: "p",
          texto:
            "O pagamento é processado pelo Mercado Pago, em duas modalidades à escolha do contratante:",
        },
        {
          tipo: "defs",
          itens: [
            {
              termo: "Cartão de crédito com renovação automática",
              texto:
                "a cobrança se repete todo mês sem ação do contratante, e pode ser desligada a qualquer momento pela tela de Assinatura.",
            },
            {
              termo: "PIX avulso",
              texto:
                "o contratante paga mês a mês. O reconhecimento é imediato, mas depende de o contratante lembrar de pagar.",
            },
          ],
        },
      ],
    },
    {
      n: "5",
      titulo: "Valor final e taxas",
      blocos: [
        {
          tipo: "p",
          texto:
            "O valor cobrado do contratante é R$ 80,00 (oitenta reais), sem acréscimo. As tarifas do meio de pagamento são custo da contratada e já estão consideradas no preço — nenhum valor adicional é cobrado do contratante por usar cartão ou PIX.",
        },
      ],
    },
    {
      n: "6",
      titulo: "Atraso, avisos e bloqueio",
      blocos: [
        {
          tipo: "p",
          texto: "O bloqueio nunca é surpresa. A régua é esta, e está implementada no sistema:",
        },
        {
          tipo: "defs",
          itens: [
            {
              termo: "5 dias antes do vencimento",
              texto: "aviso por e-mail de que a cobrança está próxima.",
            },
            {
              termo: "No dia do vencimento",
              texto: "aviso de vencimento, com o prazo de tolerância informado.",
            },
            {
              termo: "Durante os 7 dias seguintes",
              texto:
                "o acesso continua liberado normalmente, com avisos de atraso e um aviso final na véspera do bloqueio.",
            },
            {
              termo: "Após 7 dias de atraso",
              texto:
                "o acesso é suspenso. O contratante ainda entra no sistema, mas só na tela de pagamento.",
            },
          ],
        },
      ],
    },
    {
      n: "7",
      titulo: "Os dados não são apagados no bloqueio",
      blocos: [
        {
          tipo: "p",
          texto:
            "Suspensão de acesso não é exclusão de dados. Agendamentos, clientes, histórico e relatórios continuam guardados durante todo o período de bloqueio e voltam ao lugar assim que o pagamento for confirmado — sem perda e sem necessidade de recadastro.",
        },
        {
          tipo: "p",
          texto:
            "A contratada pode, a seu critério e sem obrigação, liberar manualmente o acesso de um contratante bloqueado, por prazo determinado, quando houver razão que justifique.",
        },
      ],
    },
    {
      n: "8",
      titulo: "Cancelamento",
      blocos: [
        {
          tipo: "p",
          texto:
            "O contratante pode cancelar quando quiser, pela própria tela de Assinatura ou avisando o suporte. Não há fidelidade, prazo mínimo nem multa.",
        },
        {
          tipo: "p",
          texto:
            "O cancelamento encerra as cobranças futuras. O período já pago continua valendo até o fim — não há devolução proporcional de mês em curso, e também não há cobrança de mês seguinte.",
        },
        {
          tipo: "p",
          texto:
            "Antes de cancelar, exporte seus dados pelos relatórios. Após o cancelamento eles ficam guardados por 12 meses, e depois são apagados definitivamente.",
        },
      ],
    },
    {
      n: "9",
      titulo: "Backup",
      blocos: [
        {
          tipo: "p",
          texto:
            "Cópias de segurança do banco de dados são feitas automaticamente duas vezes por dia. As cópias diárias são mantidas por 14 dias e as semanais por 12 semanas.",
        },
      ],
    },
    {
      n: "10",
      titulo: "Direito de arrependimento",
      blocos: [
        {
          tipo: "p",
          texto:
            "Se a contratação for feita fora de estabelecimento comercial e o contratante for consumidor, aplica-se o prazo de 7 dias do art. 49 do Código de Defesa do Consumidor, contado do primeiro pagamento, com devolução integral do valor.",
        },
        {
          tipo: "p",
          texto:
            "Na prática esse prazo raramente é necessário, porque os 14 dias de teste vêm antes de qualquer cobrança.",
        },
      ],
    },
    {
      n: "11",
      titulo: "Reajuste",
      blocos: [
        {
          tipo: "p",
          texto:
            "O valor da mensalidade pode ser reajustado, no mínimo a cada 12 meses, com aviso de pelo menos 30 dias por e-mail e dentro do sistema.",
        },
        {
          tipo: "p",
          texto:
            "Se o contratante não concordar com o novo valor, pode cancelar antes da entrada em vigor, sem multa, mantendo o acesso até o fim do período já pago.",
        },
      ],
    },
    {
      n: "12",
      titulo: "Suspensão por uso indevido",
      blocos: [
        {
          tipo: "p",
          texto:
            "A contratada pode suspender o acesso, mediante aviso, em caso de descumprimento dos Termos de Uso — em especial uso da mesma assinatura por mais de um estabelecimento, tentativa de acessar dados de terceiros ou uso do sistema para finalidade ilícita.",
        },
        {
          tipo: "p",
          texto: "Havendo suspensão por essa razão, não há devolução do valor do período em curso.",
        },
      ],
    },
    {
      n: "13",
      titulo: "Disposições finais",
      blocos: [
        {
          tipo: "p",
          texto:
            "Este contrato é celebrado por prazo indeterminado e se renova automaticamente a cada pagamento.",
        },
        {
          tipo: "p",
          texto: `As comunicações entre as partes são válidas quando enviadas para o e-mail cadastrado na conta e para ${contatoLegal}.`,
        },
        {
          tipo: "p",
          texto: `Fica eleito o foro da comarca de ${empresa.comarca}, salvo se a lei determinar foro diverso em favor do consumidor.`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contrato de Prestação de Serviço — Nodum BI                          */
/* ------------------------------------------------------------------ */

const contratoNodumBi: Documento = {
  slug: "contrato-nodumbi",
  grupo: "nodumbi",
  titulo: "Contrato de Prestação de Serviço",
  subtitulo: "Condições do Nodum BI",
  resumo:
    "O Nodum BI não é vendido em prateleira: cada contratação nasce de uma conversa com o escritório interessado. Este documento traz a estrutura que vale para todo cliente; os números — valor, prazo, quantidade de empresas incluídas — vêm da proposta comercial assinada com cada contratante. Complementa os Termos de Uso e a Política de Privacidade gerais da Nodum.",
  versao: "1.0",
  vigencia: "30 de agosto de 2026",
  aplica: "Nodum BI",
  cta: {
    titulo: "Este contrato é o ponto de partida, não o preço",
    texto:
      "O Nodum BI não tem tabela pública porque cada carteira de clientes pede um número diferente. Fale com a gente para receber uma proposta com o valor certo para o tamanho do seu escritório.",
    label: "Pedir uma proposta",
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      "Quero uma proposta para o Nodum BI."
    )}`,
  },
  secoes: [
    {
      n: "1",
      titulo: "Partes",
      blocos: [
        {
          tipo: "defs",
          itens: [
            {
              termo: "Contratada",
              texto: `${empresa.razao}, CNPJ ${empresa.cnpj}, com sede em ${empresa.endereco}.`,
            },
            {
              termo: "Contratante",
              texto:
                "o escritório de contabilidade, consultoria ou empresa identificado na proposta comercial, responsável pela conta e pelas empresas cuja DRE ele importa no painel.",
            },
          ],
        },
        {
          tipo: "p",
          texto:
            "Este contrato passa a valer na assinatura da proposta comercial que o acompanha, ou no primeiro pagamento — o que ocorrer primeiro. As condições comerciais específicas (valor, forma de pagamento, quantidade de empresas incluídas, prazo de vigência) são as definidas nessa proposta, que integra este contrato para todos os efeitos.",
        },
      ],
    },
    {
      n: "2",
      titulo: "Objeto",
      blocos: [
        {
          tipo: "p",
          texto:
            "Licença de uso, não exclusiva e intransferível, do Nodum BI, na modalidade de software como serviço, para consolidar e comparar a Demonstração de Resultado (DRE) das empresas indicadas pelo contratante, pelo prazo definido na proposta comercial.",
        },
        {
          tipo: "p",
          texto:
            "O número de empresas e de usuários incluídos consta na proposta comercial. Ampliar esse número, quando possível, depende de novo acordo comercial entre as partes.",
        },
      ],
    },
    {
      n: "3",
      titulo: "Dados enviados pelo contratante",
      blocos: [
        {
          tipo: "p",
          texto:
            "O contratante importa a DRE mensal de cada empresa da sua carteira, em planilha ou PDF, por upload direto no painel. Ao fazer isso, o contratante declara ter legitimidade para tratar esses dados — em geral, por já prestar serviço contábil ou de consultoria àquela empresa — e assume a posição de controlador desses dados perante a LGPD.",
        },
        {
          tipo: "p",
          texto:
            "A Nodum atua como operadora desses dados: trata-os apenas para prestar o serviço, seguindo as instruções do contratante, e não os usa para nenhuma finalidade própria — conforme detalhado na Política de Privacidade geral.",
        },
      ],
    },
    {
      n: "4",
      titulo: "Acesso concedido aos clientes do contratante",
      blocos: [
        {
          tipo: "p",
          texto:
            "O contratante pode, a seu critério, conceder a cada empresa da carteira um acesso que mostra somente os próprios dados daquela empresa — nunca os das demais.",
        },
        {
          tipo: "p",
          texto:
            "Conceder, manter ou revogar esse acesso é decisão e responsabilidade do contratante. A Nodum não contata diretamente as empresas da carteira do contratante para fins de contratação ou cobrança.",
        },
      ],
    },
    {
      n: "5",
      titulo: "Pagamento",
      blocos: [
        {
          tipo: "p",
          texto:
            "O valor, a periodicidade e a forma de pagamento são os definidos na proposta comercial. Na ausência de disposição diversa na proposta, o pagamento é mensal e antecipado.",
        },
        {
          tipo: "p",
          texto:
            "Atraso no pagamento pode levar à suspensão do acesso, com aviso prévio por e-mail, nos prazos definidos na proposta comercial ou, na falta destes, em prazo razoável não inferior a 5 dias corridos após o vencimento.",
        },
      ],
    },
    {
      n: "6",
      titulo: "Suspensão não é exclusão de dados",
      blocos: [
        {
          tipo: "p",
          texto:
            "Suspensão de acesso por atraso não apaga os dados importados. Eles continuam guardados durante o período de suspensão e voltam a ficar acessíveis assim que o pagamento for regularizado.",
        },
      ],
    },
    {
      n: "7",
      titulo: "Cancelamento",
      blocos: [
        {
          tipo: "p",
          texto:
            "O prazo e a forma de cancelamento são os definidos na proposta comercial. Na ausência de disposição diversa, qualquer parte pode encerrar a prestação de serviço mediante aviso por escrito com 30 dias de antecedência, sem multa, respeitado o período mínimo eventualmente pactuado.",
        },
        {
          tipo: "p",
          texto:
            "Antes do encerramento, o contratante deve exportar os dados que quiser manter. Após o encerramento, os dados ficam guardados por até 12 meses e depois são apagados definitivamente, salvo pedido de apagamento antecipado pelo contratante.",
        },
      ],
    },
    {
      n: "8",
      titulo: "Confidencialidade",
      blocos: [
        {
          tipo: "p",
          texto:
            "Cada parte se compromete a manter em sigilo as informações confidenciais da outra às quais tiver acesso em razão deste contrato — incluindo os dados financeiros das empresas da carteira do contratante — e a usá-las apenas para os fins deste contrato.",
        },
        {
          tipo: "p",
          texto:
            "Essa obrigação continua valendo depois do fim do contrato, pelo tempo necessário para proteger a natureza confidencial da informação.",
        },
      ],
    },
    {
      n: "9",
      titulo: "Propriedade",
      blocos: [
        {
          tipo: "p",
          texto:
            "O Nodum BI, o código e os elementos visuais são da Nodum. A contratação dá ao contratante o direito de usar o painel enquanto este contrato estiver em vigor, e nada além disso.",
        },
        {
          tipo: "p",
          texto: "Os dados importados pelo contratante continuam sendo do contratante, a qualquer momento.",
        },
      ],
    },
    {
      n: "10",
      titulo: "Limite de responsabilidade",
      blocos: [
        {
          tipo: "p",
          texto:
            "O Nodum BI é uma ferramenta de consolidação e apresentação de dados que o próprio contratante importa. A exatidão da DRE de origem, as decisões tomadas a partir da leitura do painel e o cumprimento das obrigações do contratante perante as empresas de sua carteira são de responsabilidade do contratante.",
        },
        {
          tipo: "p",
          texto:
            "A responsabilidade da Nodum, em qualquer hipótese, fica limitada ao valor pago pelo contratante nos 12 meses anteriores ao evento. Não respondemos por lucros cessantes, perda de oportunidade ou danos indiretos.",
        },
      ],
    },
    {
      n: "11",
      titulo: "Disposições finais",
      blocos: [
        {
          tipo: "p",
          texto: `As comunicações entre as partes são válidas quando enviadas para o e-mail indicado na proposta comercial e para ${contatoLegal}.`,
        },
        {
          tipo: "p",
          texto: `Fica eleito o foro da comarca de ${empresa.comarca}, salvo se a lei determinar foro diverso.`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contrato de Prestação de Serviço — Agenda Interna Nodum              */
/* ------------------------------------------------------------------ */

const contratoAgendaInterna: Documento = {
  slug: "contrato-agendainterna",
  grupo: "agendainterna",
  titulo: "Contrato de Prestação de Serviço",
  subtitulo: "Condições da Agenda Interna Nodum",
  resumo:
    "A Agenda Interna não é vendida em prateleira: é sistema multiempresa personalizado, e cada contratação nasce de uma conversa com a empresa interessada. Este documento traz a estrutura que vale para todo cliente; os números — valor, prazo, quantidade de usuários incluídos — vêm da proposta comercial assinada com cada contratante. Complementa os Termos de Uso e a Política de Privacidade gerais da Nodum.",
  versao: "1.0",
  vigencia: "30 de agosto de 2026",
  aplica: "Agenda Interna Nodum",
  cta: {
    titulo: "Este contrato é o ponto de partida, não o preço",
    texto:
      "A Agenda Interna não tem tabela pública porque cada empresa usa o sistema de um jeito — número de pessoas, personalizações, volume de negócios no funil. Fale com a gente para receber uma proposta com o valor certo para o tamanho da sua operação.",
    label: "Pedir uma proposta",
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      "Quero uma proposta para a Agenda Interna Nodum."
    )}`,
  },
  secoes: [
    {
      n: "1",
      titulo: "Partes",
      blocos: [
        {
          tipo: "defs",
          itens: [
            {
              termo: "Contratada",
              texto: `${empresa.razao}, CNPJ ${empresa.cnpj}, com sede em ${empresa.endereco}.`,
            },
            {
              termo: "Contratante",
              texto:
                "a empresa identificada na proposta comercial, responsável pela conta e pelos dados de tarefas, equipe e CRM nela cadastrados.",
            },
          ],
        },
        {
          tipo: "p",
          texto:
            "Este contrato passa a valer na assinatura da proposta comercial que o acompanha, ou no primeiro pagamento — o que ocorrer primeiro. As condições comerciais específicas (valor, forma de pagamento, quantidade de usuários incluídos, personalizações contratadas, prazo de vigência) são as definidas nessa proposta, que integra este contrato para todos os efeitos.",
        },
      ],
    },
    {
      n: "2",
      titulo: "Objeto",
      blocos: [
        {
          tipo: "p",
          texto:
            "Licença de uso, não exclusiva e intransferível, da Agenda Interna Nodum, na modalidade de software como serviço, para gestão de tarefas e relacionamento com clientes (CRM) da empresa contratante, pelo prazo definido na proposta comercial.",
        },
        {
          tipo: "p",
          texto:
            "O sistema é multiempresa: outras empresas podem usar a mesma instância, cada uma com equipe, tarefas, clientes e funil isolados dos demais. Nenhuma empresa contratante enxerga os dados de outra.",
        },
        {
          tipo: "p",
          texto:
            "O número de pessoas com acesso consta na proposta comercial. Personalizações específicas para a operação do contratante — como um cadastro próprio de clientes, etapas de funil sob medida ou uma integração particular — quando existirem, também constam na proposta e passam a integrar o objeto deste contrato.",
        },
      ],
    },
    {
      n: "3",
      titulo: "Dados cadastrados pelo contratante",
      blocos: [
        {
          tipo: "p",
          texto:
            "O contratante cadastra as próprias tarefas, projetos, equipe e o CRM — contatos, negócios e conversas. Para esses dados, o contratante é o controlador perante a LGPD: decide o que cadastrar, por quanto tempo manter e quem, dentro da própria equipe, tem acesso a cada informação.",
        },
        {
          tipo: "p",
          texto:
            "A Nodum atua como operadora desses dados: trata-os apenas para prestar o serviço, seguindo as instruções do contratante, e não os usa para nenhuma finalidade própria — conforme detalhado na Política de Privacidade geral.",
        },
      ],
    },
    {
      n: "4",
      titulo: "WhatsApp integrado",
      blocos: [
        {
          tipo: "p",
          texto:
            "A conexão de WhatsApp é feita pelo próprio contratante, por QR code, com o número que ele escolher. As conversas e mensagens agendadas ficam guardadas dentro do sistema, como qualquer outro dado cadastrado pelo contratante.",
        },
        {
          tipo: "p",
          texto:
            "A responsabilidade pelo conteúdo enviado e pelo consentimento dos destinatários é do contratante, na condição de controlador desses dados.",
        },
      ],
    },
    {
      n: "5",
      titulo: "Pagamento",
      blocos: [
        {
          tipo: "p",
          texto:
            "O valor, a periodicidade e a forma de pagamento são os definidos na proposta comercial. Na ausência de disposição diversa na proposta, o pagamento é mensal e antecipado.",
        },
        {
          tipo: "p",
          texto:
            "Atraso no pagamento pode levar à suspensão do acesso, com aviso prévio por e-mail, nos prazos definidos na proposta comercial ou, na falta destes, em prazo razoável não inferior a 5 dias corridos após o vencimento.",
        },
      ],
    },
    {
      n: "6",
      titulo: "Suspensão não é exclusão de dados",
      blocos: [
        {
          tipo: "p",
          texto:
            "Suspensão de acesso por atraso não apaga os dados cadastrados. Tarefas, equipe, contatos e conversas continuam guardados durante o período de suspensão e voltam a ficar acessíveis assim que o pagamento for regularizado.",
        },
      ],
    },
    {
      n: "7",
      titulo: "Cancelamento",
      blocos: [
        {
          tipo: "p",
          texto:
            "O prazo e a forma de cancelamento são os definidos na proposta comercial. Na ausência de disposição diversa, qualquer parte pode encerrar a prestação de serviço mediante aviso por escrito com 30 dias de antecedência, sem multa, respeitado o período mínimo eventualmente pactuado.",
        },
        {
          tipo: "p",
          texto:
            "Antes do encerramento, o contratante deve exportar os dados que quiser manter. Após o encerramento, os dados ficam guardados por até 12 meses e depois são apagados definitivamente, salvo pedido de apagamento antecipado pelo contratante.",
        },
      ],
    },
    {
      n: "8",
      titulo: "Confidencialidade",
      blocos: [
        {
          tipo: "p",
          texto:
            "Cada parte se compromete a manter em sigilo as informações confidenciais da outra às quais tiver acesso em razão deste contrato — incluindo os dados de clientes, negócios e equipe do contratante — e a usá-las apenas para os fins deste contrato.",
        },
        {
          tipo: "p",
          texto:
            "Essa obrigação continua valendo depois do fim do contrato, pelo tempo necessário para proteger a natureza confidencial da informação.",
        },
      ],
    },
    {
      n: "9",
      titulo: "Propriedade",
      blocos: [
        {
          tipo: "p",
          texto:
            "A Agenda Interna Nodum, o código e os elementos visuais são da Nodum. A contratação dá ao contratante o direito de usar o sistema enquanto este contrato estiver em vigor, e nada além disso.",
        },
        {
          tipo: "p",
          texto:
            "Os dados cadastrados pelo contratante continuam sendo do contratante, a qualquer momento. Personalizações desenvolvidas especificamente para o contratante e pagas por ele, quando descritas como tal na proposta comercial, seguem as condições de propriedade nela definidas.",
        },
      ],
    },
    {
      n: "10",
      titulo: "Limite de responsabilidade",
      blocos: [
        {
          tipo: "p",
          texto:
            "A Agenda Interna é uma ferramenta de apoio à organização do trabalho e ao relacionamento comercial. As decisões tomadas a partir dela e o cumprimento das obrigações do contratante perante os próprios clientes são de responsabilidade do contratante.",
        },
        {
          tipo: "p",
          texto:
            "A responsabilidade da Nodum, em qualquer hipótese, fica limitada ao valor pago pelo contratante nos 12 meses anteriores ao evento. Não respondemos por lucros cessantes, perda de oportunidade ou danos indiretos.",
        },
      ],
    },
    {
      n: "11",
      titulo: "Disposições finais",
      blocos: [
        {
          tipo: "p",
          texto: `As comunicações entre as partes são válidas quando enviadas para o e-mail indicado na proposta comercial e para ${contatoLegal}.`,
        },
        {
          tipo: "p",
          texto: `Fica eleito o foro da comarca de ${empresa.comarca}, salvo se a lei determinar foro diverso.`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const documentos: Documento[] = [
  termos,
  privacidade,
  contratoNodumBarber,
  contratoNodumBi,
  contratoAgendaInterna,
];

export const porSlug = (slug: string) => documentos.find((d) => d.slug === slug);

export const legalHub = {
  eyebrow: "Documentos",
  titulo: ["Termos, privacidade", "e contratos."],
  intro:
    "Termos de Uso e Política de Privacidade valem para qualquer produto Nodum. Cada produto tem, além disso, o próprio contrato — com as condições comerciais específicas dele. São escritos para serem lidos: sem letra miúda, sem cláusula escondida e sem jargão que só advogado entende.",
};
