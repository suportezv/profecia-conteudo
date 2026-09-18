# Profecia Conteúdo Studio: FRAMEWORK

Estúdio de edição e agendamento para as redes do **Profecia** (`profec.ia.br`). Infraestrutura e craft herdados dos estúdios irmãos; posicionamento próprio, ainda em definição.

> **Fonte deste documento**: o site `profec.ia.br`, lido em 18/set/2026 (copy, FAQ, planos, paleta e fontes extraídos do código da página). O que está marcado **A CONFIRMAR** não está no site e precisa da equipe. Não inferir além disso, não herdar posicionamento da Profissio.ai nem dos outros estúdios.

## Persona e voz do perfil

- **Produto**: companheiro de fé cristã por WhatsApp. Promessa do site: *"Sua fé, todo dia, que te ouve e responde."* Subtítulo: *"Um espaço só seu para fortalecer a fé, com orações, reflexões e músicas criadas especialmente para o seu momento. Sem julgamento. Sem pressão. Disponível 24h no WhatsApp."*
- **Quem é a Profecia**: feminino ("ela ouve, responde e ora com você"). Na FAQ o site assume que é IA "treinada com base na Bíblia e nos ensinamentos cristãos", "presença real na sua vida espiritual", e que **não substitui a igreja nem o pastor**. Nunca sugerir o contrário.
- **Público**: pessoa cristã que "quis orar mas não soube por onde começar", "precisou de uma palavra de conforto e não tinha com quem falar", "carregou uma dúvida de fé que não conseguiu contar para ninguém", "viveu na correria e deixou a espiritualidade para depois", "sentiu falta de Deus, mas não soube como voltar" (as cinco dores literais da seção "Talvez você se reconheça"). Depoimentos mostram: mãe com três filhos que manda áudio dirigindo, quem tinha vergonha de perguntar "coisas básicas" na igreja, quem escreveu "não tô aguentando" às 2h da manhã.
- **Tom**: acolhedor, íntimo, segunda pessoa ("você"), frases curtas, zero jargão de tecnologia. O site nunca diz "chatbot", "agente" ou "automação"; diz "presença", "caminhar com você", "espaço só seu". A resposta-modelo da Profecia no site: *"Estou aqui com você. Quer que eu ore com você por isso, ou prefere começar conversando sobre o que está pesando?"*. Sem sermão: "Ela não me deu sermão, me deu o Salmo 34 e ficou ali comigo."
- **Vocabulário do site**: fé, Palavra de Deus, oração, devocional, caminhada/jornada, presença, acolhimento, "do seu jeito, no seu tempo". Emojis aparecem nas conversas simuladas (🥲, 👆🏻), com parcimônia.
- **CTAs literais do site**: "Começar minha jornada", "Quero fortalecer minha fé", "Sim, minha fé merece esse espaço", "Escolher meu plano", "Siga pra receber um lembrete diário de fé" (Instagram). Preço de ancoragem: "A partir de R$ 9,90 por mês · cancele quando quiser". Assinatura do rodapé: "Feito com fé." **A CONFIRMAR**: qual CTA e qual destino (site, checkout ou WhatsApp) valem para as redes.
- **Redes** (do Metricool, 18/set/2026): Instagram `@meuprofecia` (10,7 mil seguidores, já posta ~2 Reels/dia), Facebook (306 seguidores), TikTok `@meuprofeciaoficial` (zerado). **Quem fala nas redes** (a própria Profecia em primeira pessoa ou a marca em terceira): **A CONFIRMAR**, e ler o feed atual antes de propor.
- **Pronúncia da marca em TTS**: **A CONFIRMAR** (hipótese: "profecia" em português).

## Identidade visual (padrão: Profecia Design System)

**A fonte de verdade é o Design System** (`https://claude.ai/artifact/Vg5ZfCmtRDAnWQsRiqafXv`, espelho em `design-system/`). O resumo abaixo existe para leitura rápida; em caso de dúvida, vale o token de lá.

- **Gramática**: "céu azul suave com brilho de sol dourado" (comentário literal do código), cartões brancos, muito respiro. Dourado é o **único** acento: CTA, logo, palavra de destaque. Nada de rosa, roxo ou neon.
- **Paleta** (tokens do Design System, em oklch; `remotion/src/marca.ts` espelha): `gold` oklch(0.72 0.11 75) e `gold-deep` oklch(0.65 0.12 70) no gradiente do CTA; `gold-hex` #C99A40 no símbolo e no itálico; céu `sky-top` oklch(0.93 0.05 230) → `sky-mid` → `sky-low` → `sky-base` oklch(0.99 0.01 220) com `sun-glow` oklch(0.97 0.08 80); tinta `ink` oklch(0.28 0.03 250), `ink-soft`, `ink-mute`; página `page-bg` oklch(0.985 0.005 240); rodapé `footer-bg` oklch(0.18 0.02 250); papel-creme da intro `paper` oklch(0.985 0.022 80).
- **Tipografia**: **Fraunces** (serifa óptica, pesos 300 a 600) nos títulos, **Manrope** (400 a 700) no corpo. Ambas Google Fonts; embutir como asset local para render sem rede.
- **Logo**: pomba dourada pousada sobre uma cruz, dentro de um círculo em linha fina (`assets/marca/logo-profecia.png`, 512px, do site).
- **Motion do site**: pulso dourado suave no CTA (2,6s), halo do sol respirando (6s), nuvens à deriva (60 a 90s), bolhas do chat entrando com mola (`cubic-bezier(0.2, 0.9, 0.3, 1.05)`). Ritmo lento e calmo, nada de glitch ou corte seco.
- **Animação de marca** (intro do site, 6,9s): pomba dourada em traço voa da direita para a esquerda sobre papel-creme, volta por baixo, pousa no centro; o círculo se desenha em sentido horário, a cruz surge, o wordmark sobe em Fraunces e viaja para o cabeçalho mudando de dourado para tinta; explosão de luz dourada no fim. Timeline exata (ms) na seção Motion do Design System. É a abertura ou o fecho natural de qualquer Reel institucional.

### REGRAS INEGOCIÁVEIS (herdadas do grupo)

1. **Nunca usar travessão em texto público.** Reescrever a frase.
2. **Palavrão bipa, não corta.**
3. **Loudness final: -14 LUFS.**

## Pilares de conteúdo

Derivados das 12 funcionalidades literais do site, filtrando pelas que são (1) diferenciadas, (2) legíveis em 3 segundos, (3) nativamente visuais no WhatsApp:

1. **Ouve e responde em áudio**: "Manda e recebe áudios. Não precisa digitar." Nativamente visual (bolha de áudio, forma de onda). Depoimento âncora: mãe de três que manda áudio dirigindo.
2. **Música feita para o seu momento**: "Escolha o estilo e receba uma música única, letra e melodia." O diferencial mais forte e o mais emocional (depoimento do luto do pai). Visual: "criando música personalizada…" da conversa simulada.
3. **Lembra de você**: "guarda o que você compartilha e retoma de onde vocês pararam" (depoimento: perguntou da cirurgia da mãe três dias depois).
4. **Foto de versículo, cartão de oração**: "Manda pra Profecia, ela entende." Visual imediato (foto → resposta).
5. **Devocional diário no seu horário e Desafio de 7 dias**: constância sem culpa ("todo dia no mesmo horário, sem culpa, sem cobrança, só presença").
6. **Explicação da Bíblia sem vergonha de perguntar**: "é anônimo, sem julgamento".

Prova social do site: **+12 mil** pessoas que já conversaram, **+85 mil** orações criadas, **+9 mil** músicas personalizadas (`CountUp` com prefixo `+` e sufixo ` mil`, confirmado no código). Depoimentos com nome e @ (Juliana Prado, Marcos Vinícius, Patrícia Gomes, Rafael Lima, Karine Souza, Tiago Mendes, Ana Paula Santos, Cleicimara Alves): usar só com autorização, são pessoas.

## Assinaturas de motion (herdadas: craft do grupo, validado contra 4 vídeos reais do @elevenlabsio)

- Peça contínua sem cortes; estados se transformam; cada estado segura 2 a 3s.
- Tipografia contida, sentence case, revelação palavra a palavra; sem display caps em motion.
- UI real do produto como card flutuante; cursor navega; transições por escala.
- Grafo de nós para critérios/canais; CTA discreto digitado com cursor.
- Trilha via **Eleven Music** (não sound-generation), comedida, com ducking pelo VO; SFX da biblioteca `assets/sfx`.
- **Fundo e paleta**: céu azul suave com brilho dourado e cartões brancos (seção "Identidade visual"); dourado só na palavra de destaque e no CTA. Ritmo mais lento que o dos estúdios B2B: é conforto, não demo de software.
- **UI real do produto** aqui é a **conversa de WhatsApp** (bolhas, áudio, foto), não dashboard.
- Área segura 9:16: 220px topo, 420px base. Duração alvo 20 a 60s.

## Escolha do framework de motion: HyperFrames ou Remotion

O estúdio mantém os dois, e a escolha **não é preferência do momento**: cada peça declara o seu no `BRIEFING.md`, na primeira linha. Sem isso, quem pegar o projeto depois não sabe onde mexer.

**O que decide**: a ponte entre os dois só existe num sentido. Há a skill `remotion-to-hyperframes`; **não existe o inverso**. Então peça feita em HyperFrames é definitiva, e peça feita em Remotion ainda pode migrar. Na dúvida, Remotion é a aposta reversível.

| Use **HyperFrames** quando | Use **Remotion** quando |
|---|---|
| É peça da série recorrente, na gramática já documentada | A peça é exceção, fora do padrão da série |
| Você quer o fluxo pronto: brief, storyboard, registry de ~400 blocos, legendas, áudio, render em nuvem | A composição precisa de lógica de programação, dados ou parametrização |
| O visual pedido já existe no registry (scanlines, glitch, gráfico, janela de terminal) | Você vai gerar **N variações** da mesma peça mudando nome, cupom, idioma ou número |
| Ninguém vai reprocessar a peça em outro framework | Há chance real de a peça mudar de destino depois |

**Padrão declarado: HyperFrames**, herdado do grupo enquanto o Profecia não tem série própria; é o que está integrado ao fluxo e tem as 20 skills. O Remotion entra por decisão consciente. Revisar o padrão quando a primeira série do Profecia existir.

**Custo de manter os dois, para vigiar**: dois `node_modules`, dois caminhos de render e dois lugares onde a paleta pode divergir. Os tokens do Remotion vivem em `remotion/src/marca.ts` (paleta do site): se a paleta mudar, atualizar os dois lados.

## Fórmula da caption

Estrutura do grupo adaptada ao tom do site: abertura pela **dor ou pelo momento** da pessoa (as cinco dores literais), nunca por "Apresentando feature X"; 1 a 2 parágrafos curtos no vocabulário do site (fé, Palavra, presença, caminhada); CTA literal do site; sem travessão; sem jargão de tecnologia. Hipótese derivada do site, **A CONFIRMAR** com a equipe antes da primeira publicação.

## Fluxo por vídeo

1. Briefing + fontes (pilar, mensagem central, duração, data)
2. Roteiro em cenas (BRIEFING.md + CENAS.md com prompts autocontidos para o Claude Design)
3. Usuário executa no Claude Design e devolve o pacote (.dc.html + jsx)
4. Render determinístico (pipeline documentado no repo irmão, `projects/01-funil-automatico/POS.md`)
5. Locução (voz A CONFIRMAR; validar pronúncia por STT) + SFX da biblioteca + trilha Eleven Music
6. Mix com ducking, master **-14 LUFS**
7. **Preview na conversa para aprovação**
8. Caption
9. Agendamento no Metricool como rascunho (marca Profec.ia, blog_id 7027080; mídia via commit temporário público; tirar do rascunho na mesma sessão)
10. Registrar aprendizados no POS.md do projeto e atualizar o CLAUDE.md
