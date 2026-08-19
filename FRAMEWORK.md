# Profecia Conteúdo Studio: FRAMEWORK

Estúdio de edição e agendamento para as redes da **Profecia** (`profec.ia.br`, Instagram `@meuprofecia`). Infraestrutura e craft herdados dos estúdios irmãos; posicionamento próprio, lido na fonte em 19/ago/2026.

## Persona e voz do perfil

- **Produto**: a Profecia, companheira de fé cristã por IA no WhatsApp, 24h, sem cadastro. Tagline: "Sua fé, todo dia, que te ouve e responde." Ecossistema Profissio.
- **Quem fala**: a própria Profecia, no feminino, primeira pessoa quando conversa ("Estou aqui com você"). Tom acolhedor, calmo, sem julgamento e sem pressão; frases curtas; sempre fundamentada na Palavra de Deus. Público: cristãos brasileiros na correria, que sentem culpa por adiar a espiritualidade.
- **Limites de posicionamento**: não substitui igreja nem pastor; conversas são privadas; nunca apresentar a Profecia como se falasse por Deus. Citar versículos reais com referência (padrão da LP: "O Senhor está comigo, não temerei", Salmo 34 etc.).
- **CTA oficial**: "Começar agora" + "Conversa direto no WhatsApp · sem cadastro". Link oficial no CLAUDE.md.
- **Pronúncia da marca**: hipótese forte "profecia" (palavra em português); CONFIRMAR com o usuário antes da primeira locução e validar por STT. Referência oficial de voz: `assets/referencia/profecia-prayer.mp3` e `profecia-song.mp3`.

### REGRAS INEGOCIÁVEIS (herdadas do grupo)

1. **Nunca usar travessão em texto público.** Reescrever a frase.
2. **Palavrão bipa, não corta.**
3. **Loudness final: -14 LUFS.**

## Pilares de conteúdo (derivados da LP; validar prioridades com a equipe)

Método do grupo: dores/soluções literais da fonte, features (1) diferenciadas, (2) legíveis em 3s, (3) nativamente visuais. Da LP da Profecia, as candidatas mais fortes:

1. **Música personalizada** (a mais diferenciada e nativamente sonora: pedido no chat → "criando música personalizada…" → áudio no WhatsApp).
2. **Oração em áudio para o seu momento** (voice message do WhatsApp como device visual).
3. **Devocional diário no seu horário** (hábito, despertador espiritual).
4. **Fotografou um versículo, ela entende e explica** (foto → explicação, muito visual).
5. **Memória** ("na quinta ela perguntou como tinha sido a cirurgia da minha mãe").
6. **Desafio de 7 dias** (ritual de constância).

Dores da LP para hooks: não saber orar, não ter com quem falar às 2h da manhã, vergonha de perguntar o "básico" da Bíblia, correria que adia a fé.

## Assinaturas de motion (herdadas: craft do grupo, validado contra 4 vídeos reais do @elevenlabsio)

- Peça contínua sem cortes; estados se transformam; cada estado segura 2 a 3s.
- Tipografia contida, sentence case, revelação palavra a palavra; sem display caps em motion.
- UI real do produto como card flutuante; cursor navega; transições por escala.
- Grafo de nós para critérios/canais; CTA discreto digitado com cursor.
- Trilha via **Eleven Music** (não sound-generation), comedida, com ducking pelo VO; SFX da biblioteca `assets/sfx`. Para a Profecia a trilha tende a louvor suave/acústico; a referência de clima é `assets/referencia/profecia-song.mp3`.
- **Fundo e paleta**: céu diurno da marca (gradiente `oklch(0.93-0.99 0.01-0.05 215-235)` com glow dourado), ou papel-creme com grão da intro oficial. Accent **dourado `#C99A40`**; texto ink `oklch(0.28 0.03 250)`. Fraunces nos títulos (itálico dourado para a palavra de ênfase), Manrope no resto. Nuvens, sol com raios e o chat do WhatsApp como device narrativo são os motivos oficiais. Logo em `assets/brand/`; animação de marca de referência no `intro.jsx` do site.
- Área segura 9:16: 220px topo, 420px base. Duração alvo 20 a 60s.

## Fórmula da caption

Estrutura validada no grupo, adaptada à Profecia: abertura acolhedora ou de dor reconhecível (o padrão "Apresentando..." de anúncio de feature soa frio demais para fé; preferir a linguagem da LP: "um espaço só seu", "sem julgamento, sem pressão"), 1 a 2 parágrafos de valor concreto na voz acolhedora, CTA oficial "Começar agora" com menção ao WhatsApp e ao @meuprofecia, sem travessão. Versículo citado sempre com referência.

## Fluxo por vídeo

1. Briefing + fontes (pilar, mensagem central, duração, data)
2. Roteiro em cenas (BRIEFING.md + CENAS.md com prompts autocontidos para o Claude Design)
3. Usuário executa no Claude Design e devolve o pacote (.dc.html + jsx)
4. Render determinístico (pipeline documentado no repo irmão, `projects/01-funil-automatico/POS.md`)
5. Locução (voice_id PENDENTE; casar com `assets/referencia/profecia-prayer.mp3`; validar pronúncia por STT) + SFX da biblioteca + trilha Eleven Music
6. Mix com ducking, master **-14 LUFS**
7. **Preview na conversa para aprovação**
8. Caption
9. Agendamento no Metricool como rascunho (marca do Profecia, blog_id PENDENTE; mídia via commit temporário público)
10. Registrar aprendizados no POS.md do projeto e atualizar o CLAUDE.md
