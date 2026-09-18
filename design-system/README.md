A Profecia é uma companheira de fé que vive dentro do WhatsApp: ela ouve, responde com a Palavra, ora com você e escreve uma música para você. A interface é um céu de manhã com um sol dourado: fundos azul-claros, cartões brancos, um único dourado quente para tudo que convida ao toque. Nada grita. A voz é íntima, em segunda pessoa, português do Brasil.

## Fundamentos de conteúdo

- Escreva em português do Brasil, segunda pessoa informal (`você`, `te`), nunca `senhor(a)`. As frases são curtas e terminam em ponto final, inclusive os títulos: "Sua fé, todo dia, que te ouve e responde."
- Os títulos combinam uma linha reta com uma frase em itálico dourado (`hero-em`, peso 300, `gold-hex`): "Sua fé merece *um espaço só seu,* fundamentado na Palavra de Deus." Uma frase em itálico por título, nunca o título inteiro.
- Os rótulos de seção são substantivos curtos em caixa alta num SectionLabel: "COMO USAR", "PLANOS", "ELES APROVAM". O H2 abaixo deles é uma frase só, muitas vezes quebrada por `<br>` na pausa natural.
- Acolha, nunca pressione. As notas de preço dizem "A partir de R$ 9,90 por mês · cancele quando quiser"; a linha de confiança é "Pagamento seguro · Acesso liberado na hora, direto no seu WhatsApp". Use o ponto mediano `·` como separador.
- Os CTAs são desejos em primeira pessoa, não ordens: "Quero fortalecer minha fé", "Sim, minha fé merece esse espaço", "Começar minha jornada". Os botões de plano são "Assinar Anual" e assim por diante.
- Os números seguem o formato brasileiro: `R$ 9,90`, `12x de R$ 9,90`, `+12 mil`. As estatísticas contam a partir do zero ao entrar na tela.
- Emoji só como ícone de funcionalidade no tile `gold-wash` de 44px (🙏 🎙️ 📸 📖 📚 🎵 🌅 🧘 📿 🧠 🔥 💬) e dentro das bolhas do chat, como voz da própria pessoa. Nunca em títulos ou botões.
- As falas de exemplo do chat são em minúsculas e humanas ("tô tendo um dia difícil hoje 🥲"); as respostas da Profecia são calorosas, em frases completas, e terminam com uma pergunta ou uma oferta ("Quer que eu ore com você por isso?").

## Cor

- Toda seção plana assenta em `page-bg`; os cartões são `surface` com borda de 1px `border` e um dos raios abaixo. A temperatura alterna por seção: `surface-tint` (sobre), `warm-page` (depoimentos), `page-bg` com um radial `sky-features` (funcionalidades), `page-bg` com radiais `gold-pricing-glow` e `sky-bg-top` (planos).
- O céu é um gradiente, nunca um azul chapado: 180deg `sky-top` → `sky-mid` 35% → `sky-low` 65% → `sky-base`, com um radial `sun-glow` no canto superior direito e um radial `sky-wash` no inferior esquerdo. O CTA final o repete mais curto (`sky-mid` → `sky-cta-end`).
- Dourado é o único acento. Preenchimentos usam o gradiente 180deg `gold` → `gold-deep` com `shadow-gold`; texto e traços usam `gold` (rótulos, estatísticas, estrelas, checks) ou `gold-hex` (ênfase em itálico, o símbolo em SVG). Os tons vão de `gold-wash` → `gold-wash-strong` → `gold-ghost` conforme o elemento cresce e fica mais silencioso.
- Texto: `ink` para tudo que precisa ser lido, `ink-soft` para parágrafos e links, `ink-mute` só para legendas. `ink-mute` sobre branco é 3,9:1 e `gold` sobre branco é 2,5:1; os dois saem assim do site, então não coloque texto essencial em nenhum deles em tamanhos pequenos.
- Rótulo branco sobre o gradiente dourado fica em cerca de 2,9:1 como está no site (3,3:1 sobre `gold-deep`). Mantenha os rótulos de botão em 15px ou mais, peso 600, e nunca mais claro que `gold-deep` sob texto branco.
- Verde é do WhatsApp, não nosso: `wa-user-bubble` / `wa-user-ink` nas bolhas enviadas, `online` / `online-text` na linha de presença, `save-bg` / `save-text` nas pílulas de economia. Vermelho (`danger`, `danger-text`) só aparece num campo de telefone inválido.
- O rodapé inverte: `footer-bg` com links em `footer-text`, tagline em `footer-muted`, rótulos em `footer-label` e divisórias em `footer-rule`. O wordmark e o símbolo ficam brancos ali.
- Não existe tema escuro na fonte; o rodapé é a única superfície escura.
- A intro tem um fundo quente próprio: um radial `paper` → `paper-mid` 60% → `paper-edge` com grão de papel, e a explosão final em `gates-core` / `gates-ray`. É a única superfície creme do site; use para momentos de marca (o símbolo animado, um cartão de abertura), nunca para superfícies de leitura.

## Tipografia

- Duas famílias hospedadas do Google Fonts: **Fraunces** (opsz 9..144, pesos 300, 400, 500, 600) para todo título, numeral e o wordmark; **Manrope** (400, 500, 600, 700) para todo o resto. `ui-monospace` só para handles de redes sociais (`handle`). Carregue com o link do site: `family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700`.
- Os títulos são leves: `hero` e `h2` em peso 400 com tracking negativo (-0.02 a -0.025em) e entrelinha apertada (1.05 a 1.12); a frase em itálico desce para 300. Títulos de cartão (`h3-step`, `h3-card`, `faq-q`) vão a 500. Nada em Fraunces é bold.
- Fraunces também carrega os números: `price` (48px, 500), `stat` (40px, 500, tabular), `numeral-ghost` (110px, 300 itálico, `gold-ghost`), `pain-number`, `avatar-initials`.
- Os corpos em Manrope avançam de meio em meio pixel: 17 / 15.5 / 15 / 14.5 / 14 / 13.5 / 13 / 12.5 / 11.5. Entrelinha 1.5 a 1.6. Rótulos são 600 a 700 com tracking largo (0.08 a 0.18em) e caixa alta; botões são 600 com 0.01em.
- Todo tamanho tem um valor mobile 2 a 4px menor (registrado no uso de cada estilo); os títulos de desktop usam `clamp()`. Use `text-wrap: balance` em títulos e `pretty` em parágrafos.

## Espaçamento e layout

- Mobile primeiro em `phone-width` (390px); o layout de desktop começa em `breakpoint-desktop` (900px) e nunca muda a renderização mobile, só acrescenta grades.
- Ritmo de seção: `section-y` (110px) em cima e embaixo no desktop, `section-y-mobile` (60px) no mobile; margens laterais de no mínimo `space-10` (`max(40px, 6vw)`) no desktop, `space-5-5` ou `space-6` no mobile. O conteúdo fica centrado em `container-section` (1180px); planos e FAQ em `container-narrow`.
- Dentro de uma seção: SectionLabel, `space-3-5` (14px), H2, e então a grade a `space-12` a `space-14` no desktop / `space-6` a `space-7` no mobile. As grades são de 3 colunas (dores, passos, depoimentos, planos), 4 (funcionalidades), 2 (FAQ), 3 iguais (estatísticas); no mobile empilham em 1 (funcionalidades 2, depoimentos viram uma fileira com rolagem e snap a 82% de largura).
- Padding de cartão: `space-5-5` × `space-5-5` (22px) nos cartões de dor, 32/28/36 nos de passo, 22 nos de funcionalidade, 26/24 nos depoimentos, 34/28/28 nos planos, 22/26 nos itens de FAQ. Reduza mais ou menos pela metade no mobile (ver o uso de cada token).
- O rodapé é `position: sticky; bottom: 0` sob as seções (`z-footer`, `z-sections`), então a página parece se descolar dele.

## Forma, bordas e sombras

- Os cantos são grandes e redondos: cartões de `radius-18` a `radius-24`, cartão de chat e menus `radius-20`, campos `radius-14`. Tudo que é clicável e não é cartão é uma pílula (`radius-pill`). As bolhas de chat são `radius-16` com um canto `radius-4` de cauda (inferior direito para a pessoa, inferior esquerdo para a Profecia).
- Os cartões se separam por uma borda de 1px `border`, não por sombra. As sombras ficam reservadas ao que flutua: o cartão de chat (`shadow-chat`), os botões dourados (`shadow-gold`), o plano em destaque (`shadow-plan-featured`), o vidro do menu mobile (`shadow-menu`), o modal (`shadow-modal`). Os cartões de estatística ganham só um filete de 1px (`shadow-card`).
- O plano em destaque é o único cartão com borda de 2px `gold` e um selo flutuante em gradiente; todos os outros planos ficam com a borda de 1px `border`.
- Vidro é usado duas vezes: o disco do símbolo no hero (radial branco 85%→30%, blur de 6px, `shadow-hero-mark`) e o menu mobile (gradiente do céu a 85 a 92% de alfa, blur de 24px, saturate 1.4).
- Foco: a fonte define `outline: none` no campo de telefone e confia na mudança de borda; nada mais define anel de foco. Quem consome deve acrescentar um anel visível (2px `gold-deep`, 3,3:1 sobre branco) em vez de herdar essa lacuna.

## Motion

- Tudo respira devagar. Halo do sol 6s e núcleo 4,5s `ease-in-out` com escala 1→1.06; os raios giram em 90s linear; as nuvens derivam a largura de um tile em 60 a 90s linear, sem emenda, renderizando dois tiles.
- O CTA dourado pulsa para sempre: `goldPulse` 2,6s `ease-in-out` entre `shadow-gold` e um brilho mais largo; no hover de desktop sobe `translateY(-1px)` em 180ms.
- As bolhas de chat entram com `waBubbleIn` (opacidade 0→1, translateY 8px→0, escala 0.94→1) em 240 a 360ms com a mola `cubic-bezier(0.2, 0.9, 0.3, 1.05)`; a mesma curva abre o menu mobile (280ms, itens escalonados a 35ms a partir de 80ms) e o modal (260ms). Os pontos de digitação quicam em 1100ms, escalonados a 180ms.
- A mensagem de voz convida ao toque: um anel de 1,5px `gold-hex` pulsa para fora em 2,2s e o botão de play emite um anel de 10px em 1,6s até o primeiro play.
- Os rótulos de seção têm uma linha tênue `label-trace` percorrendo o perímetro da pílula em 11s. O hover nos links de navegação transiciona fundo e cor em 180ms. O mais do FAQ gira 45 graus em 200ms.
- A animação de marca é a intro mobile em `intro.jsx` (o desktop pula): uma pomba dourada em traço voa sobre papel creme, pousa, e o símbolo e o wordmark se compõem ao redor dela. Traço `gold-hex`, espessura 1.8 em voo indo a 1.6 pousada, numa caixa de 100 unidades; tamanho de voo 80px, símbolo pousado 62px na posição do símbolo do hero. Linha do tempo exata, em ms a partir do início:
  - 0 a 700: o papel sobe (`paper` radial + grão); o brilho dourado sob o símbolo sobe a partir de 3500 ao longo de 1500ms.
  - 500 a 2400, primeira passagem: entra fora da tela à direita (118%) e cruza para a esquerda (-18%) pelo terço superior (y 22% com um balanço senoidal de 4,5%, 1,6 ciclos), ease-in-out; as asas batem a cada 95ms; surge nos primeiros 8% e some nos últimos 8%.
  - 2200 a 3700, segunda passagem: reentra do canto inferior esquerdo (-12%, 72%) num arco ascendente rumo ao centro (x ease-out cúbico, y potência 2.2); o bater desacelera de 105 para 160ms.
  - 3500 a 4600, pouso: assenta no centro com um mergulho de 2%, tamanho 80→62, as asas se fecham (ease-in cúbico), bater de 160 para 320ms.
  - 4200 a 5000: o círculo se desenha em sentido horário a partir do topo (raio 42, dash offset com ease-out), surgindo ao longo de 500ms.
  - 4700 a 5200: a cruz se materializa sob a pomba (opacidade linear).
  - 5100 a 5600: o wordmark sobe 8% abaixo do símbolo: Fraunces 500, 22px, 0.01em, `gold-hex` com uma sombra de texto dourada tênue; sobe 8px.
  - 5900 a 6800, os portões: uma explosão `gates-core` escala 0.4→2.2 com dezesseis raios alternados (meia largura 18/10, comprimento 460/360) girando 6 graus, blend screen; a pomba esmaece a 5%.
  - 6100 a 6800: a intro faz crossfade de saída enquanto a página surge; o wordmark viaja até a posição do wordmark do cabeçalho, de 22 para 18px, e a cor mistura `gold-hex` → `ink` em oklch. Termina em 6900.
  - Curvas: ease-in-out quadrático nas passagens e nos portões, ease-out cúbico nos arcos e no círculo, ease-in cúbico no fechar das asas. Reaproveite essa coreografia para qualquer símbolo animado; não acrescente detalhe de asa, motion blur nem uma segunda pomba.

## Iconografia

- Não há conjunto de ícones. Os glifos de interface são SVGs inline minúsculos numa grade de 24 unidades com `stroke: currentColor`, espessura 2, pontas redondas: arrow-right (CTAs, 14 a 16px), plus (FAQ, 10 a 12px), close (modal, 14px), check (chips, 13px com espessura 3 em `gold`), play/pause (voz, 14px preenchidos). A estrela é preenchida em `gold` a 16px. Cópias com tinta fixa estão em `assets/Icons`.
- Os ícones de funcionalidade são emoji num tile `gold-wash` (`radius-14`, 44px; `radius-10`, 32px no mobile). Não os substitua por ícones de linha.
- A arte decorativa é desenhada em código, não importada: as nuvens são cinco elipses brancas num SVG de 120×40 a 55 a 85% de opacidade; o sol são radiais CSS; os raios são doze polígonos.

## Logo

- O símbolo é uma pomba pousada numa cruz dentro de um círculo aberto. O raster `logo-profecia.png` (dourado) é o ativo de marca para o cabeçalho (32px), o disco do hero (68px), o CTA final (64px) e o favicon; `logo-profecia-white.png` vai sobre dourado (avatar do chat, 34px) e sobre `footer-bg` (48px).
- O símbolo em SVG traçado em `logo.jsx` (`profecia-mark.svg`) é para usos com cor flexível: a animação da intro, marcas d'água a 7% de opacidade e qualquer renderização em tinta única. Traço padrão `gold-hex`, espessura 1.6 numa caixa de 100 unidades.
- O wordmark é a palavra "Profecia" em Fraunces 400 (`wordmark`), tracking 0.005em; ao lado do símbolo no cabeçalho é 500 (`nav-wordmark`). Empilhe o símbolo sobre o wordmark, centrados, com um vão de 0,18 × o tamanho do símbolo; nunca espace as letras, contorne ou recolora o símbolo fora de dourado, branco ou tinta.

## Componentes

- O site é entregue como seções de página (HeroSky, SocialProof, Pain, About, HowItWorks, Features, Testimonials, InstagramFeed, Pricing, FAQ, FinalCTA, Footer) construídas a partir de poucos primitivos: GoldCTA, GhostCTA, SectionLabel, H2, P, ChatPreview (VoiceMessage, TypingIndicator, CreatingSongIndicator), CountUp, PhoneModal, Cloud/CloudLayer e as partes do logo.
- Os cards de componente aqui são esses primitivos e cada padrão de cartão das seções, escritos à mão como HTML estático a partir de `lp-sections.jsx` com os valores exatos. Não há bundle: a fonte é JSX compilado pelo Babel no navegador e não foi construída.
- `GhostCTA` está definido na fonte mas não é colocado na página (build v=20260828b): seu card existe por completude e o rótulo dele é ilustrativo, não é texto do site. Todo outro rótulo nos cards é citado da página.
- Não vieram: o céu animado (sol, raios, deriva das nuvens), a intro, o carrossel de vídeos UGC, o feed do Instagram (precisa do fetch `/api/instagram`) e a decodificação da forma de onda do áudio. As props das seções de página (`accent`, `isDesktop`) estão documentadas em cada README.
