/**
 * Os três documentos legais do NodumBarber, centralizados.
 *
 * O texto aqui é reprodução fiel do que está publicado e vigente — é
 * documento vinculante, não copy de marketing. Ao alterar qualquer
 * cláusula, suba a `versao` e a `vigencia` do documento correspondente
 * e comunique os assinantes, como os próprios termos exigem (30 dias
 * de antecedência para alteração relevante).
 */

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
 * contato formal do contrato. Está num só lugar de propósito: trocar
 * aqui atualiza os três documentos de uma vez.
 */
export const contatoLegal = "martinsmarcel544@gmail.com";

/* ------------------------------------------------------------------ */
/* Estrutura                                                           */
/* ------------------------------------------------------------------ */

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "defs"; itens: { termo: string; texto: string }[] };

export type Secao = { n: string; titulo: string; blocos: Bloco[] };

export type Documento = {
  slug: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  versao: string;
  vigencia: string;
  aplica: string;
  secoes: Secao[];
};

/* ------------------------------------------------------------------ */
/* Termos de Uso                                                       */
/* ------------------------------------------------------------------ */

const termos: Documento = {
  slug: "termos",
  titulo: "Termos de Uso",
  subtitulo: "Regras de uso do NodumBarber",
  resumo:
    "O que você pode fazer no sistema, o que nós garantimos e o que acontece quando alguma das partes não cumpre o combinado.",
  versao: "1.2",
  vigencia: "03 de agosto de 2026",
  aplica: "NodumBarber",
  secoes: [
    {
      n: "1",
      titulo: "Quem é quem neste documento",
      blocos: [
        {
          tipo: "p",
          texto: `“Nós”, “Nodum Soluções Integradas” ou “contratada” é ${empresa.razao}, inscrita no CNPJ ${empresa.cnpj}, com sede em ${empresa.endereco}.`,
        },
        {
          tipo: "p",
          texto:
            "“Você”, “assinante” ou “contratante” é a pessoa física ou jurídica que cria uma conta no NodumBarber e é responsável pelo estabelecimento cadastrado.",
        },
        {
          tipo: "p",
          texto:
            "“NodumBarber” é o sistema de gestão oferecido por nós na modalidade de software como serviço, acessado pela internet, sem instalação no computador do assinante.",
        },
      ],
    },
    {
      n: "2",
      titulo: "O que o sistema faz",
      blocos: [
        {
          tipo: "p",
          texto:
            "O NodumBarber organiza a operação de um estabelecimento de serviços com hora marcada. As funções disponíveis hoje são:",
        },
        {
          tipo: "lista",
          itens: [
            "Agenda com controle de conflito de horário e cálculo de encaixe por duração de serviço.",
            "Cadastro de clientes, serviços, produtos e equipe.",
            "Registro de atendimentos, vendas de balcão e formas de pagamento.",
            "Cálculo de comissão por profissional e por serviço.",
            "Controle de estoque com aviso de quantidade mínima.",
            "Relatórios de faturamento, comissões e atendimentos, com exportação em CSV.",
            "Níveis de acesso distintos para dono e profissionais.",
          ],
        },
      ],
    },
    {
      n: "3",
      titulo: "Cadastro e responsabilidade pela conta",
      blocos: [
        {
          tipo: "p",
          texto:
            "Para usar o sistema você cria uma conta informando nome, e-mail, nome do estabelecimento e uma senha. Você declara que os dados informados são verdadeiros e se compromete a mantê-los atualizados.",
        },
        {
          tipo: "p",
          texto:
            "A senha é pessoal e intransferível. Tudo o que for feito na sua conta é considerado feito por você — inclusive por funcionários a quem você deu acesso. Cabe a você criar, revisar e remover os acessos da sua equipe dentro do sistema.",
        },
        {
          tipo: "p",
          texto:
            "Se você suspeitar que alguém acessou sua conta sem autorização, troque a senha imediatamente e avise o suporte. Trocar a senha encerra as sessões abertas em outros aparelhos.",
        },
      ],
    },
    {
      n: "4",
      titulo: "Período de teste",
      blocos: [
        {
          tipo: "p",
          texto:
            "Toda conta nova começa com 14 dias de uso gratuito, sem necessidade de cartão de crédito e sem cobrança automática ao final.",
        },
        {
          tipo: "p",
          texto:
            "Durante o teste o sistema é completo — nenhuma função fica bloqueada. Ao fim do período, o acesso é suspenso até que a assinatura seja ativada. Os dados cadastrados no teste continuam guardados e voltam ao lugar assim que o pagamento for confirmado.",
        },
      ],
    },
    {
      n: "5",
      titulo: "O que você não pode fazer",
      blocos: [
        { tipo: "p", texto: "Ao usar o sistema, você concorda em não:" },
        {
          tipo: "lista",
          itens: [
            "Compartilhar sua conta com outro estabelecimento. Cada assinatura vale para um estabelecimento; profissionais adicionais dentro do mesmo estabelecimento são ilimitados e não têm custo extra.",
            "Tentar acessar dados de outro assinante, contornar os níveis de acesso ou explorar falhas do sistema em vez de comunicá-las.",
            "Usar o sistema para armazenar conteúdo ilícito, ou para enviar mensagens não solicitadas a pessoas que não são clientes do seu estabelecimento.",
            "Automatizar acessos, extrair dados em massa ou revender o acesso ao sistema sem autorização por escrito.",
          ],
        },
      ],
    },
    {
      n: "6",
      titulo: "Disponibilidade e manutenção",
      blocos: [
        {
          tipo: "p",
          texto:
            "Trabalhamos para manter o sistema disponível 24 horas por dia, mas não prometemos disponibilidade ininterrupta. Podem ocorrer interrupções por manutenção programada, falha de infraestrutura, de conexão ou de serviços de terceiros dos quais dependemos.",
        },
        {
          tipo: "p",
          texto:
            "Manutenções programadas que exijam indisponibilidade serão comunicadas com antecedência sempre que possível, e feitas preferencialmente em horários de menor movimento.",
        },
        {
          tipo: "p",
          texto:
            "Cópias de segurança do banco de dados são feitas automaticamente duas vezes por dia. As cópias diárias são mantidas por 14 dias e as semanais por 12 semanas. O backup é medida de recuperação de falhas nossa — ele não substitui a exportação dos seus dados, que você pode fazer a qualquer momento pelos relatórios.",
        },
      ],
    },
    {
      n: "7",
      titulo: "Envio de mensagens a clientes",
      blocos: [
        {
          tipo: "p",
          texto:
            "O sistema monta textos de confirmação e lembrete e abre o WhatsApp com a mensagem pronta. Quem envia é você: nenhuma mensagem sai automaticamente do sistema.",
        },
        {
          tipo: "p",
          texto:
            "A responsabilidade pelo conteúdo enviado e pelo consentimento do destinatário é sua, na condição de controlador dos dados dos seus clientes.",
        },
      ],
    },
    {
      n: "8",
      titulo: "Propriedade",
      blocos: [
        {
          tipo: "p",
          texto:
            "O sistema, o código, a marca Nodum Soluções Integradas, o nome NodumBarber e os elementos visuais são nossos. A assinatura dá a você o direito de usar o sistema enquanto estiver em dia, e nada além disso.",
        },
        {
          tipo: "p",
          texto:
            "Os dados que você cadastra são seus. Não os vendemos, não os usamos para publicidade e não os compartilhamos com outros assinantes.",
        },
      ],
    },
    {
      n: "9",
      titulo: "Limite de responsabilidade",
      blocos: [
        {
          tipo: "p",
          texto:
            "O sistema é uma ferramenta de apoio à gestão. As decisões do seu negócio, os valores cobrados dos seus clientes, o pagamento das comissões e o cumprimento das suas obrigações fiscais e trabalhistas são de sua responsabilidade.",
        },
        {
          tipo: "p",
          texto:
            "Nossa responsabilidade em qualquer hipótese fica limitada ao valor pago por você nos 12 meses anteriores ao evento. Não respondemos por lucros cessantes, perda de oportunidade ou danos indiretos.",
        },
        {
          tipo: "p",
          texto:
            "Nada nesta cláusula afasta os direitos que a lei garante a você como consumidor, quando aplicável.",
        },
      ],
    },
    {
      n: "10",
      titulo: "Alterações destes termos",
      blocos: [
        {
          tipo: "p",
          texto:
            "Podemos alterar estes termos para acompanhar mudanças no sistema ou na lei. Alterações relevantes serão comunicadas por e-mail e dentro do sistema com pelo menos 30 dias de antecedência.",
        },
        {
          tipo: "p",
          texto:
            "Se você não concordar com a nova versão, pode cancelar a assinatura antes de ela entrar em vigor, sem multa, e continuar usando o sistema até o fim do período já pago.",
        },
      ],
    },
    {
      n: "11",
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
/* Política de Privacidade                                             */
/* ------------------------------------------------------------------ */

const privacidade: Documento = {
  slug: "privacidade",
  titulo: "Política de Privacidade",
  subtitulo: "Como tratamos dados pessoais, conforme a LGPD",
  resumo:
    "Quais dados o sistema guarda, por que guarda, por quanto tempo, com quem compartilha e como você e os seus clientes exercem os direitos previstos na Lei 13.709/2018.",
  versao: "1.2",
  vigencia: "03 de agosto de 2026",
  aplica: "NodumBarber",
  secoes: [
    {
      n: "1",
      titulo: "Os dois papéis, que não se confundem",
      blocos: [
        {
          tipo: "p",
          texto:
            "Esta é a parte que mais gera confusão, então vem primeiro. Há dois conjuntos de dados aqui, com responsáveis diferentes:",
        },
        {
          tipo: "defs",
          itens: [
            {
              termo: "Dados da sua conta",
              texto:
                "(seu nome, seu e-mail, o nome do estabelecimento, o histórico de pagamento da assinatura). Aqui nós somos o controlador: decidimos por que e como tratar esses dados.",
            },
            {
              termo: "Dados dos seus clientes",
              texto:
                "(nome, telefone, agendamentos, observações). Aqui você é o controlador e nós somos apenas o operador: tratamos esses dados seguindo as suas instruções, para prestar o serviço, e não os usamos para nenhuma finalidade própria.",
            },
          ],
        },
      ],
    },
    {
      n: "2",
      titulo: "Que dados o sistema guarda",
      blocos: [
        { tipo: "p", texto: "Da sua conta e do seu estabelecimento:" },
        {
          tipo: "lista",
          itens: [
            "Nome, e-mail e senha (armazenada apenas como resumo criptográfico — nós não conseguimos ler sua senha).",
            "Nome do estabelecimento, horários de funcionamento e configurações.",
            "Histórico da assinatura: datas, valores, forma de pagamento e situação.",
            "Registros técnicos de acesso, necessários para segurança e para o cumprimento do art. 15 do Marco Civil da Internet.",
          ],
        },
      ],
    },
    {
      n: "3",
      titulo: "Dados dos clientes do seu estabelecimento",
      blocos: [
        {
          tipo: "p",
          texto:
            "Sobre as pessoas que você atende, o sistema guarda o que você cadastrar: nome, telefone, WhatsApp, observações que você escrever, e o histórico de agendamentos, serviços realizados e pagamentos.",
        },
        {
          tipo: "p",
          texto:
            "O sistema não pede nem armazena dados sensíveis — saúde, biometria, origem racial, opinião política ou religiosa. O campo de observações é livre: use-o para preferência de corte e histórico de atendimento, não para informação de saúde. Se você optar por registrar dado sensível ali, a responsabilidade por essa escolha e pelas exigências legais que ela cria é sua.",
        },
        {
          tipo: "p",
          texto: "Também não pedimos CPF, endereço nem dados de cartão dos seus clientes.",
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
              texto: "para dar acesso ao sistema, processar a assinatura e prestar suporte.",
            },
            {
              termo: "Cumprimento de obrigação legal",
              texto:
                "para emitir documentos fiscais e guardar registros de acesso pelo prazo exigido em lei.",
            },
            {
              termo: "Legítimo interesse",
              texto:
                "para segurança, prevenção a fraude e melhoria do sistema, sempre com os dados no menor grau de identificação possível.",
            },
            {
              termo: "Instruções do controlador",
              texto:
                "no caso dos dados dos seus clientes, em que atuamos como operador a seu comando.",
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
              termo: "Mercado Pago",
              texto:
                "processa os pagamentos da assinatura. Os dados de cartão são digitados diretamente no ambiente deles; o sistema nunca recebe nem armazena número de cartão.",
            },
            {
              termo: "Provedor de hospedagem e de e-mail",
              texto: "mantêm o servidor e enviam os avisos de cobrança e de recuperação de senha.",
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
            "Os dados ficam em servidor localizado no Brasil. As cópias de segurança são feitas duas vezes por dia e mantidas por até 14 dias (diárias) e 12 semanas (semanais).",
        },
        {
          tipo: "p",
          texto:
            "Enquanto a assinatura estiver ativa, os dados permanecem disponíveis. Se a assinatura for cancelada ou bloqueada por falta de pagamento, os dados não são apagados: ficam guardados e voltam ao lugar quando a assinatura for reativada.",
        },
        {
          tipo: "p",
          texto:
            "O apagamento definitivo ocorre quando você pedir, ou após 12 meses do cancelamento — o que vier primeiro. Registros exigidos por lei (fiscais e de acesso) são mantidos pelo prazo legal mesmo após o apagamento do restante.",
        },
      ],
    },
    {
      n: "7",
      titulo: "Segurança",
      blocos: [
        { tipo: "p", texto: "As medidas técnicas que estão em uso hoje:" },
        {
          tipo: "lista",
          itens: [
            "Conexão criptografada (HTTPS) em todo o acesso ao sistema.",
            "Senhas guardadas apenas como resumo criptográfico com bcrypt — não são reversíveis.",
            "Sessões com token de curta duração e renovação rotativa, com detecção de reuso: um token roubado e reutilizado derruba a sessão inteira.",
            "Separação estrita entre estabelecimentos: cada consulta ao banco é limitada ao estabelecimento do usuário autenticado.",
            "Níveis de acesso: o profissional vê a própria agenda e a própria comissão, não o caixa nem os ganhos dos colegas.",
            "Cópias de segurança automáticas, verificadas após cada execução, com aviso por e-mail em caso de falha.",
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
      titulo: "Direitos dos clientes do seu estabelecimento",
      blocos: [
        {
          tipo: "p",
          texto:
            "Se um cliente seu pedir acesso, correção ou exclusão dos dados dele, quem responde é você, como controlador. O sistema permite atender esses pedidos diretamente: você pode editar ou excluir o cadastro pela tela de Clientes, e exportar o histórico pelos relatórios.",
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
/* Contrato de Assinatura                                              */
/* ------------------------------------------------------------------ */

const contrato: Documento = {
  slug: "contrato",
  titulo: "Contrato de Assinatura",
  subtitulo: "Condições comerciais da mensalidade",
  resumo:
    "Quanto custa, quando vence, o que acontece se atrasar, como cancelar e o que acontece com os seus dados depois.",
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
            "Este contrato passa a valer no momento em que o contratante conclui o cadastro no NodumBarber e declara aceite, ou no primeiro pagamento — o que ocorrer primeiro.",
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
      n: "10",
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
      n: "11",
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
      n: "12",
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

export const documentos: Documento[] = [termos, privacidade, contrato];

export const porSlug = (slug: string) => documentos.find((d) => d.slug === slug);

export const legalHub = {
  eyebrow: "Documentos",
  titulo: ["Termos, privacidade", "e contrato."],
  intro:
    "Os três documentos que regem o uso dos produtos Nodum, num lugar só. São escritos para serem lidos: sem letra miúda, sem cláusula escondida e sem jargão que só advogado entende.",
};
