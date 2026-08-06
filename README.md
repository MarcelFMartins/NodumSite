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
  layout.tsx         fontes, metadata/SEO, header e footer
  page.tsx           ordem das seções
components/
  brand/logo.tsx     wordmark "nod" + "um" e o símbolo de dois nós
  ui/motion.tsx      Reveal, Stagger, SplitText, CountUp, SpotlightCard, Marquee
  ui/button.tsx      botão da marca (hover que preenche de baixo, press 0.98)
  sections/          uma seção por arquivo
lib/
  content.ts         TODO o texto do site — copy editável sem tocar em componente
public/
  brand/             logos exportados do design system
  img/barbearia/     telas reais do Nodum Barbearia
```

Para mudar qualquer texto do site, mexa só em `lib/content.ts`.

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

## Nodum Barbearia

A seção `#produtos` mostra o sistema que já está em operação, com telas reais do
produto. É de propósito curta: o Barbearia tem landing page própria, então aqui
a função é só provar que existe entrega feita e mandar o visitante para lá.
O link fica em `lib/content.ts` → `produto.cta.href`.

## Pendências para o cliente

- `lib/content.ts` → `site`: e-mail, WhatsApp e redes sociais estão com valores
  de exemplo (`contato@nodum.com.br`, `5511999999999`) — substituir pelos reais.
- `produto.cta.href` aponta para `barbearia.nodum.com.br`; ajustar para o domínio
  real da LP do Barbearia.
- O formulário de contato não tem backend: ele monta um e-mail pré-preenchido e
  abre o app de e-mail do visitante. Para receber os leads direto, trocar o
  handler `enviar()` em `components/sections/contato.tsx` por um POST para uma
  API/serviço de formulário.
- Sem foto e sem logo de cliente reais — o design system pede flat, mas se a
  Nodum tiver imagens de operação ou uma parede de logos, dá para incorporar.
