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

## Aderência ao design system

O que foi seguido à risca (fonte: `Nodum_Design_System/`):

- **Cores**: só carvão (`ink`), verde jade/floresta e neutros verdadeiros. Nenhum
  outro matiz, nenhum gradiente de fundo, nenhuma textura ou foto decorativa.
- **Superfícies**: no máximo dois tratamentos — branco/canvas, ou painel escuro
  cheio. O carvão é reservado para abertura (hero) e fechamento (contato).
- **Tipografia**: Poppins nos títulos, Manrope no corpo, JetBrains Mono nos
  números e nos rótulos sobrescritos (`.eyebrow`).
- **Sem ícones pictóricos** como sistema: a numeração `01/02/03` faz esse papel,
  como nos decks. O check (Lucide) é o único glifo, exatamente como a marca usa.
- **Movimento**: funcional, 150ms, press com `scale(0.98)`. Nada de parallax ou
  blur. `prefers-reduced-motion` desliga tudo.
- **Voz**: PT-BR direto, sem jargão. Todo número cita a fonte (SEBRAE).

## Componentes de interação

Padrões inspirados em [reactbits.dev](https://reactbits.dev) (SplitText, CountUp,
SpotlightCard), [21st.dev](https://21st.dev) (composição das seções) e
[uiverse.io](https://uiverse.io) (botão com preenchimento deslizante), todos
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
