# Nodum Soluções Integradas — site institucional

Site da Nodum (consultoria de gestão + tecnologia para PMEs), construído do zero
sobre o **Nodum Design System**.

## Stack

- **Next.js 15** (App Router, React 19) — página estática, `First Load JS` ~173 kB
- **Tailwind CSS v4** — tokens da marca declarados em `@theme` (`app/globals.css`)
- **framer-motion** — as primitivas de movimento
- **next/font** — Poppins / Manrope / JetBrains Mono auto-hospedadas

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start
```

## Estrutura

```
app/
  globals.css        tokens do design system (cores, tipografia, raios, sombras)
  layout.tsx         fontes, metadata/SEO, casca comum às duas páginas
  (site)/            o site institucional  →  /
  nodumbarber/       a landing do produto  →  /nodumbarber
components/
  brand/logo.tsx     wordmark "nod" + "um" e o símbolo de dois nós
  ui/fx.tsx          Reveal, Stagger, SplitText, TiltCard, Magnetic, Marquee…
  ui/node-field.tsx  a rede de nós em canvas
  ui/button.tsx      botão da marca (hover que preenche de baixo, press 0.98)
  sections/          seções do site institucional
  barber/            seções da landing do NodumBarber
lib/
  content.ts         TODO o texto do site institucional
  barber.ts          TODA a copy da landing + os destinos do sistema
  hooks.ts           media queries (useToque, useTelaPequena)
public/
  brand/             logos exportados do design system
  img/barbearia/     telas usadas na vitrine do site
  img/barber/        telas reais usadas na landing do produto
```

Para mudar texto, mexa só em `lib/content.ts` (site) ou `lib/barber.ts`
(landing do produto). Nenhum componente carrega string.

## Relação com o design system

O guia da Nodum descreve um sistema **flat**: superfícies claras, sem gradiente,
movimento mínimo. Este site roda numa direção mais tecnológica, a pedido do
cliente. O que foi mantido e o que mudou, de forma explícita:

**Mantido**
- **Cores**: só carvão (`ink`), jade/floresta/menta e neutros verdadeiros.
  Nenhum outro matiz entrou.
- **Tipografia**: Poppins nos títulos, Manrope no corpo, JetBrains Mono nos
  números e nos rótulos sobrescritos (`.eyebrow`).
- **Sem ícones pictóricos** como sistema: a numeração faz esse papel, e o check
  (Lucide) segue sendo o único glifo — exatamente como a marca usa.
- **Voz**: PT-BR direto, sem jargão. Todo número cita a fonte (SEBRAE).
- **Press** em `scale(0.98)`, como o guia pede.

**Mudado (a pedido)**
- O terreno agora é o painel carvão em toda a página, não só na abertura e no
  fechamento. O jade virou **luz** (brilhos, bordas acesas, halos).
- Movimento deixou de ser só funcional: há rede de nós animada, parallax,
  inclinação 3D nos cartões, texto embaralhado e trilhos de progresso.

`prefers-reduced-motion` continua desligando **tudo** — inclusive o canvas.

## Efeitos e onde eles vivem

`components/ui/node-field.tsx` — a rede de nós em canvas. É o efeito de fundo
principal e não é decoração vazia: *nodum* significa nó, e a marca vende
conexão. Os pontos flutuam, ligam-se quando ficam perto e acendem ao redor do
cursor. Densidade proporcional à área com teto de nós, animação congelada
quando a seção sai da tela ou a aba perde o foco.

`components/ui/fx.tsx` — o resto:

| Efeito | Onde aparece |
| --- | --- |
| `TiltCard` | inclinação 3D + brilho seguindo o cursor, em todos os cartões |
| `Magnetic` | botões que perseguem o cursor de leve |
| `SplitText` | títulos subindo palavra por palavra |
| `ScrambleText` | os rótulos sobrescritos "decodificam" ao entrar na tela |
| `CountUp` + anel SVG | as estatísticas do SEBRAE |
| `Parallax` / `ScrollProgress` | trilho de leitura e deslocamentos por scroll |
| `GlowCursor` | halo jade no cursor (só em ponteiro fino) |
| `Aurora` / `Marquee` / `.rule` | luz de fundo, faixas correndo, réguas com pulso |

Padrões inspirados em [reactbits.dev](https://reactbits.dev),
[21st.dev](https://21st.dev) e [uiverse.io](https://uiverse.io), todos
**reimplementados do zero** com os tokens da Nodum — nenhuma dependência de UI
de terceiros além do `lucide-react`.

## O que muda no celular

O desktop é o que sempre foi. O mobile roda a mesma página com os efeitos
caros desligados — a decisão é sempre a mesma: se o efeito existe para
responder ao cursor, num aparelho de toque ele só cobra bateria.

`lib/hooks.ts` expõe `useToque()` e `useTelaPequena()` (media queries via
`useSyncExternalStore`, com snapshot `false` no servidor — o HTML entregue
continua sendo o mesmo).

| No toque | Vira |
| --- | --- |
| `TiltCard` | cartão chapado, sem wrapper 3D nem springs |
| `Magnetic` | `div` comum |
| `GlowCursor` | não monta (já era assim) |
| `Aurora` | manchas menores e **paradas** |
| `NodeField` | teto de 26 nós, DPR 1,5, sem interação e sem o `hypot` por nó dentro do laço O(n²) |
| cartões de prova do herói | sem o `float-slow` em loop |
| segunda faixa do marquee | escondida |

A rede de nós também só liga o primeiro quadro no `requestIdleCallback`:
o LCP do celular é o título do herói e não tem por que esperar um canvas
decorativo terminar de desenhar.

No layout: alvos de toque de 44px nas abas do produto, CTAs do herói em
largura cheia, respiros e paddings menores abaixo de `sm`, `autoComplete`
e `inputMode` no formulário (o teclado já abre certo), e a malha de fundo
em 44px para não virar quatro colunas gordas numa tela de 390px.

Zoom travado (`maximum-scale=1`, `user-scalable=no` + `touch-action` sem
pinça) e `overscroll-behavior-y: none` com `color-scheme: dark` — é o que
tira a faixa cinza do navegador quando se puxa a página para baixo.

> O zoom travado é uma escolha do cliente, não um padrão: usuários com
> baixa visão perdem a pinça para ampliar. Para reverter, apague
> `maximumScale`/`userScalable` de `app/layout.tsx` e o `touch-action` do
> `body` em `app/globals.css`.

## NodumBarber — a landing do produto

A landing do NodumBarber mora **dentro deste projeto**, em `/nodumbarber`. Era
uma página separada em `agenda.vogelassessoriacontabil.com`; agora as duas
coisas dividem o mesmo design system, o mesmo build e o mesmo domínio.

```
app/
  (site)/          o site institucional (header + footer da Nodum)
  nodumbarber/     a landing do produto (header + footer próprios)
components/barber/ uma seção por arquivo
lib/barber.ts      TODA a copy da landing + os destinos do sistema
public/img/barber/ telas reais do NodumBarber
```

O grupo `(site)` existe só para separar as duas cascas: quem chega em
`/nodumbarber` por anúncio precisa ver o produto, não o menu da consultoria.
O vínculo com a Nodum fica no lockup da marca e no rodapé.

### Integração com o sistema

O endereço do sistema está declarado **uma única vez**, no topo de
`lib/barber.ts`:

```ts
const APP = "https://agenda.vogelassessoriacontabil.com";
```

Trocar essa linha reaponta tudo que ainda é externo. O WhatsApp segue a mesma
ideia: o número mora numa constante e as mensagens pré-preenchidas saem de
`zap()`.

| Destino | Onde vive | Onde aparece |
| --- | --- | --- |
| `sistema.cadastro` | **interno** — `/nodumbarber/cadastro` | todos os CTAs primários, os três planos, a barra fixa |
| `sistema.entrar` | externo — `${APP}/login` | header, rodapé, "já tem conta?" |
| `sistema.termos/privacidade` | **interno** — `/legal/termos`, `/legal/privacidade` (gerais) | rodapé da landing e do formulário de cadastro |
| `sistema.contrato` | **interno** — `/legal/contrato-nodumbarber` (específico do produto) | idem |
| `sistema.whatsapp*` | externo | suporte, fechamento, linha do preço |

O login continua no sistema de propósito: é lá que a sessão realmente existe,
e replicar tela de login é superfície de ataque sem ganho nenhum. O
**cadastro** é o único fluxo que passou a ser tratado como transação
completa: o formulário mora no site, mas a conta continua nascendo no banco
do sistema — ver a seção seguinte.

### Cadastro embutido — como funciona e o que falta no back-end

`components/barber/form-cadastro.tsx` é um formulário controlado que faz
`fetch(sistema.apiSignup, { credentials: "include" })` direto para
`POST ${APP}/api/signup`, com os mesmos campos que `signupSchema` exige no
back-end (`shopName`, `ownerName`, `ownerEmail`, `ownerPassword`, `aceite`,
`honeypot`). Em caso de sucesso, o navegador é redirecionado para
`sistema.dashboard` — a pessoa entra na conta sem passar pela tela de login,
porque o cookie de sessão que a API devolve já fica gravado no domínio do
sistema (é para lá que o `fetch` foi).

Isso só funciona quando o navegador aceita mandar e receber cookies numa
chamada entre domínios diferentes — e hoje **o back-end não libera isso**. A
API só lê corpo JSON (nunca formulário nativo, que resolveria sem CORS) e não
declara nenhum cabeçalho `Access-Control-Allow-*`. Testado localmente: o
formulário valida, mostra erro por campo e trata 409/422/429 corretamente,
mas a chamada real cai num erro de rede tratado (mensagem amigável, sem
travar a página) até o CORS ser liberado.

**Não tenho como aplicar essa mudança**: o backend (`prototipo-agenda`) não
está neste repositório nem em nenhum Git que eu tenha acesso — é implantado
por SSH/PM2 direto no servidor, conforme `docs/DEPLOY.md` daquele projeto.
Quem publica o patch abaixo é quem tem acesso à VPS.

O patch é pequeno e cirúrgico: libera CORS **só** na rota de cadastro, com
origem explícita (nunca `*`, porque `credentials: true` exige domínio exato)
e não muda a política de cookies (`SameSite=Lax` continua valendo — o
handshake final é uma navegação normal a `${APP}/dashboard`, mesma origem do
cookie).

```ts
// app/api/signup/route.ts — adicionar no topo do arquivo

const ORIGENS_PERMITIDAS = [
  "https://nodum-site.vercel.app",
  // troque/adicione aqui quando o domínio definitivo do site existir
];

function corsHeaders(origin: string | null) {
  if (!origin || !ORIGENS_PERMITIDAS.includes(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// responde o preflight que o navegador manda antes do POST com JSON
export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}
```

E, no `export const POST = withErrorHandler(...)` existente, acrescentar os
mesmos `corsHeaders(request.headers.get("origin"))` em toda resposta —
sucesso e erro. O jeito mais simples é envolver o retorno de `json()` (ou o
helper que a rota já usa) somando esses cabeçalhos, sem tocar na lógica de
negócio.

Enquanto o patch não for aplicado, `sistema.cadastro` continua funcionando
como formulário (a UI está pronta e publicada), só a chamada final falha com
uma mensagem de erro tratada — nada quebra, ninguém vê tela em branco nem
stack trace.

### A copy veio da Memória Descritiva

O texto **não** foi copiado da página de vendas antiga: ela ficou para trás em
várias frentes. A fonte é a Memória Descritiva do sistema (27/08/2026), que
trouxe papel de Gerente, importação de clientes por planilha, cliente fixo
recorrente, plano combo com saldo por serviço, comissão por produto, pagamento
dividido entre formas e aviso de agendamento em aberto — nada disso existia na
LP anterior, que ainda falava em "três chaves" e em pedir a lista de clientes
para o suporte.

Duas telas estão prontas mas **ainda em homologação** (Projeção e desconto no
checkout). Em vez de escondê-las ou vendê-las como se já estivessem no ar, elas
ganharam a seção "Em validação", com selo próprio. O print da Projeção teve o
aviso interno de ambiente removido antes de virar `webp`; o mockup 3D dessa
mesma tela ficou de fora porque o aviso aparecia em perspectiva e o retoque
apareceria. Quando as duas subirem para produção, apague a seção `Validacao` e
mova as telas para `pordentro`.

## Nodum Barbearia — vitrine no site

## Documentos legais: gerais vs. contrato por produto

`lib/legal.ts` tem dois níveis, e a distinção é o ponto principal da
estrutura:

- **Termos de Uso** e **Política de Privacidade** são **gerais** — regem a
  relação com a Nodum e valem para qualquer produto (`grupo: "geral"`). Não
  citam preço nem prazo de teste de nenhum produto específico.
- **Cada produto tem o próprio contrato**, com `grupo` igual ao slug do
  produto (`"nodumbarber"`, `"nodumbi"`). É lá que moram preço, forma de
  pagamento, régua de bloqueio, backup — o que é comercial e específico.

Rotas: `/legal/termos`, `/legal/privacidade`, `/legal/contrato-nodumbarber`,
`/legal/contrato-nodumbi`. O slug antigo `/legal/contrato` não existe mais —
virou `contrato-nodumbarber` porque, com dois produtos, "o contrato" deixou
de fazer sentido sem dizer de qual.

`components/legal/casca.tsx` usa o campo `grupo` para decidir o que cada
página cross-linka no rodapé: nos dois documentos gerais (e no índice
`/legal`), aparecem todos os outros — contratos inclusive. Já a partir do
contrato de um produto, só os dois documentos gerais aparecem: o contrato do
outro produto não tem nada a ver com quem está lendo o do NodumBarber, por
exemplo.

### O contrato do Nodum BI não inventa preço

O BI não é vendido em prateleira — é implantado por proposta comercial, sem
plano publicado (ver a seção do BI, abaixo). Um contrato no molde do
NodumBarber, com um preço fixo inventado, seria a única coisa pior do que não
ter contrato nenhum: uma cláusula falsa que ninguém assinou de verdade.

Por isso `contratoNodumBi` tem a mesma armação jurídica de um contrato B2B
comum (partes, objeto, dados, confidencialidade, propriedade, limite de
responsabilidade, foro) mas deixa os números comerciais — valor, forma de
pagamento, quantidade de empresas incluídas, prazo — para a proposta
comercial assinada com cada contratante, que o próprio texto declara integrar
o contrato. Isso é honesto com o modelo de venda real, não uma lacuna.

### Fidelidade do que já existia

Nada do texto vigente do NodumBarber mudou de conteúdo ao ser dividido em
"geral" + "contrato do produto" — só de lugar. Conferi de novo, frase a
frase, o contrato reorganizado contra o texto publicado original: zero
divergência. A cláusula de backup (2×/dia, 14 dias, 12 semanas), por
exemplo, saiu da seção 6 dos Termos antigos e virou uma seção própria no
contrato — o texto é o mesmo, só o documento que a hospeda mudou.

## Nodum BI — segundo produto na vitrine

Landing própria em `/nodumbi`, no mesmo padrão do NodumBarber: casca própria
(`components/bi/header.tsx`, `footer.tsx`), copy centralizada em `lib/bi.ts`,
telas reais em `public/img/bi`.

Diferença estrutural importante: o Nodum BI **não tem cadastro público nem
plano publicado** — é implantado por escritório, não vendido por assinatura
self-service. Por isso todo CTA da página chama uma conversa (`zapBi()`, no
WhatsApp da própria Nodum, o mesmo de `lib/content.ts` → `site.whatsapp`), não
"criar conta". Não existe `sistema.entrar` nem `sistema.cadastro` aqui.

Na época em que esta seção foi escrita pela primeira vez, o rodapé do BI não
linkava para `/legal`: os três documentos de então eram escopados
explicitamente ao NodumBarber. Isso mudou — ver "Documentos legais: gerais
vs. contrato por produto", acima. Hoje o BI linka os dois documentos gerais
(Termos, Privacidade) e o próprio Contrato de Prestação de Serviço, em
`/legal/contrato-nodumbi`.

Os `kpis` da seção "O painel" (`lib/bi.ts` → `painelBi.kpis`) guardam
`direcao` (a seta, de onde o número realmente foi) e `tom` (a cor, se essa
direção é boa ou ruim) como campos separados — os cinco indicadores da
captura de tela **caíram todos**, mas CMV caindo é boa notícia (verde) e
Receita caindo é má notícia (vermelho), com a mesma seta para baixo nos
dois. Conflacionar as duas coisas num campo só (como uma primeira versão
fez) dava seta para cima num número que na tela real aponta para baixo.

### Vitrine do site: cuidado com `object-cover`

`components/sections/produtos.tsx` usa `object-cover` nas capturas — correto
para as telas do NodumBarber, que já nascem perto de 16:10. As telas do BI
têm proporções bem mais variadas (o carrossel de KPIs é ~6,6:1, a evolução
mensal ~2,9:1); usar essas na vitrine faz o corte agressivo do `object-cover`
ampliar um ícone isolado em vez de mostrar o gráfico. Por isso
`produtosVitrine[1].telas` usa só as quatro imagens do BI que já são
~16:10 (`waterfall`, `custos`, `comparativo`, `margens`) — as demais (KPIs,
evolução, velocímetros, comparação de períodos, detalhamento) aparecem só na
landing própria, em `/nodumbi`, que usa `object-contain` e não corre esse
risco com nenhuma proporção.

## Pendências para o cliente

- `lib/content.ts` → `site`: e-mail, WhatsApp e redes sociais estão com valores
  de exemplo (`contato@nodum.com.br`, `5511999999999`) — substituir pelos reais.
- `lib/barber.ts` → `APP` aponta para `agenda.vogelassessoriacontabil.com`, o
  domínio provisório do sistema. Trocar quando o definitivo subir.
- O cadastro embutido em `/nodumbarber/cadastro` depende do patch de CORS
  acima. Sem ele, o formulário mostra erro de rede em vez de criar a conta.
- O formulário de contato não tem backend: ele monta um e-mail pré-preenchido e
  abre o app de e-mail do visitante. Para receber os leads direto, trocar o
  handler `enviar()` em `components/sections/contato.tsx` por um POST para uma
  API/serviço de formulário.
- Sem foto e sem logo de cliente reais — o design system pede flat, mas se a
  Nodum tiver imagens de operação ou uma parede de logos, dá para incorporar.
