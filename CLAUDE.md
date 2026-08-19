# Profecia Conteúdo Studio (memória persistente do projeto)

Este repositório é o **Profecia Conteúdo Studio**: edição e agendamento de conteúdo para as redes do **Profecia** (`https://profec.ia.br/`). Estúdio irmão do `profissioai-conteudo`, `eita-conteudo`, `ana-conteudo` e `normalyze.conteudo`; infraestrutura idêntica, posicionamento próprio do Profecia.

**Antes de editar qualquer vídeo ou escrever qualquer caption, leia `FRAMEWORK.md`.**

## O que é a Profecia (lido de `profec.ia.br` em 19/ago/2026, fonte primária)

**A Profecia** (artigo feminino: "a Profecia", "ela") é uma companheira de fé cristã por IA que funciona **direto no WhatsApp**, 24h, sem cadastro e sem app. Produto do ecossistema Profissio ("Powered by Profissio.ai" no rodapé). Tagline oficial: **"Sua fé, todo dia, que te ouve e responde."**

- **Proposta**: um espaço só seu para fortalecer a fé, com orações, reflexões, versículos e músicas criadas para o momento da pessoa. "Sem julgamento. Sem pressão."
- **Público**: cristãos brasileiros na correria do dia a dia; dores oficiais da LP: não saber por onde começar a orar, não ter com quem falar num momento difícil, dúvida de fé guardada, espiritualidade adiada, "sentiu falta de Deus mas não soube como voltar".
- **Funcionalidades** (12, da LP): orações personalizadas, áudios (manda e recebe), fotos/imagens (entende versículo fotografado), passagens bíblicas, explicação da Bíblia, músicas personalizadas, devocionais diários, meditações guiadas, rotinas espirituais, memória ("lembra de você"), desafio de 7 dias, conversas de fé 24h.
- **Posicionamento sensível**: sempre "fundamentada na Palavra de Deus"; **não substitui igreja nem pastor** (FAQ oficial); privacidade das conversas. Nunca prometer que a Profecia "é Deus" ou fala por Deus.
- **CTA oficial**: **"Começar agora"** → WhatsApp `+55 11 5192-1507` (`https://api.whatsapp.com/send?phone=551151921507&text=Oi%2C%20vim%20do%20site%20e%20quero%20conhecer%20a%20Profecia`). Linha de apoio: "Conversa direto no WhatsApp · sem cadastro".
- **Instagram oficial**: **@meuprofecia**. Prova social da LP: +12 mil pessoas, +85 mil orações, +9 mil músicas.

## Identidade visual (extraída do site, `skyPalette` em `lp-sections.jsx`)

Nada de aurora rosa da Profissio.ai. A identidade da Profecia é **céu diurno + dourado**:

- **Accent dourado `#C99A40`** (gradiente de CTA até `oklch(0.65 0.12 70)`); ink `oklch(0.28 0.03 250)`; inkSoft `oklch(0.45 0.02 250)`; fundo de página `oklch(0.985 0.005 240)`; céu `oklch(0.93-0.97 0.02-0.05 215-235)` com glow dourado `oklch(0.96 0.06 85)`; papel-creme da intro `oklch(0.94-0.985 0.02-0.03 75-80)` com grão; rodapé escuro `oklch(0.18 0.02 250)`.
- **Fontes** (Google Fonts): **Fraunces** para títulos (weight 300 a 500, itálico dourado para ênfase, sentence case) e **Manrope** para texto e UI.
- **Logo**: pomba pousada na cruz dentro de círculo, traço dourado. Arquivos em `assets/brand/` (`logo-profecia.png`, `logo-profecia-white.png`); SVG por componente JSX em `logo.jsx` do site (baixável). Animação de marca oficial: pomba voa, pousa, círculo se desenha em sentido horário, cruz se materializa, wordmark surge (ver `intro.jsx` do site, coreografia de ~6.4s, ótima referência de motion).
- **Motivos visuais**: céu com nuvens brancas à deriva, sol com raios girando devagar, luz dourada "portões celestiais", chat do WhatsApp como device narrativo central (as duas demos da LP são conversas).

## PENDENTES de marca

- **Pronúncia em TTS**: hipótese forte "profecia" como a palavra em português (produto de fé, nome-palavra). Confirmar com o usuário antes da primeira locução; validar por STT.
- **Voz ElevenLabs**: a LP tem 2 áudios oficiais da voz da Profecia baixados em `assets/referencia/` (`profecia-prayer.mp3` 89s, oração; `profecia-song.mp3` 120s, louvor). Escolher voice_id que case com essa referência (feminina, acolhedora, BR); confirmar com o usuário.
- **Redes e Metricool**: conectar a marca do Profecia no painel (conta `suporte@profissio.ai`) e registrar aqui o blog_id. Em 19/ago/2026 a conta só tem a Profissio.ai (6736175).
- **Ativos de marca**: pasta no Drive com brutos/fontes/fundos, se existir.

## Regras que valem em qualquer resposta pública (herdadas do grupo, confirmadas pelo usuário)

- Nunca usar travessão em texto público: reescrever a frase.
- Palavrão em vídeo **bipa**, não corta.
- Loudness final: **-14 LUFS**.

## Working dirs

- Estúdio: este repo (symlink `~/profecia-conteudo`). Projetos em `projects/<nome>/`.
- Ferramentas: `video-use` e `hyperframes` em `/workspace/...` (cloud). Ambiente novo: `bash scripts/setup.sh` e `bash scripts/validate.sh`.

## IDs e contas

- **Metricool**: marca do Profecia **PENDENTE conectar** (conta `suporte@profissio.ai`, a mesma da marca Profissio.ai/blog_id 6736175).
- **ElevenLabs**: mesma chave do grupo (`ELEVENLABS_API_KEY` no environment). Escopos: TTS, STT, sound_generation, voices_read e **music** (Eleven Music, `POST /v1/music`, até 600s; usar para trilhas; sound-generation fica para SFX).
- **Biblioteca de SFX**: copiar `assets/sfx/` do repo `profissioai-conteudo` (13+ sons de UI validados, custo zero). São brand-neutral; a trilha musical deve ser própria por peça.
- **Kairogen**: conta `suporte@profissio.ai`, FREE, 0 créditos (B-roll por IA indisponível).
- **Drive (brutos)**: pasta do Profecia **PENDENTE**.
- **Site**: `profec.ia.br` (React SPA via Babel standalone; conteúdo em `lp-sections.jsx`, `app.jsx`, `intro.jsx`, `logo.jsx`, versionados por query `?v=`). UGCs de depoimento em `videos/{karine,tomaz,anapaula,cleicimara}.mp4` no site. GTM `GTM-TJGNMGGL`.

## Gotchas essenciais (herdados e validados nos estúdios irmãos)

Ver o `CLAUDE.md` do `suportezv/profissioai-conteudo`, seções "Rede do environment" e "Gotchas essenciais": é o repositório de referência técnica do grupo. Resumo do que mais custa tempo:

- Environment com network Custom: `pypi`/`npm` vêm em `no_proxy` e falham com 403 mesmo na allowlist; rotear pelo agent proxy (o `setup.sh` já faz). `apt` bloqueado: ffmpeg estático via GitHub Releases (o `setup.sh` já faz). Allowlist não cobre subdomínio: usar `*.dominio.com`. WebFetch tem rota própria bloqueada: usar `curl`.
- Instagram exige login mesmo com domínio liberado; feed de referência via prints/gravação do usuário.
- Metricool MCP: sem delete (cancelar = update draft:true); **update devolve id novo**; mídia por URL pública via commit temporário no repo público (por isso este repo deve ser público), remover o arquivo após agendar.
- Conector Metricool pode estar desabilitado na conversa: agendar via sessão filha no environment **Default** (sem setup script); follow-up na mesma sessão via `create_trigger` com `persistent_session_id` + `fire_trigger`.
- Render de composição do Claude Design: ver `projects/01-funil-automatico/POS.md` do repo irmão (Playwright + seek determinístico, vendorizar React/Babel do npm, fontes @fontsource, viewport 1080x1964, crop 1080:1920).
- TTS: validar pronúncia por STT antes de mixar; frases curtas de fecho com `previous_text`; "com a Agente" soa como "com a gente", evitar a sequência.
- Legendas SEMPRE por último no filter chain; proxy SDR para brutos HLG de iPhone; zoompan para zoom animado.

## Histórico de decisões

- **18/ago/2026**: estúdio criado por réplica do `profissioai-conteudo` a pedido do usuário. Infra e gotchas herdados; marca 100% PENDENTE até a leitura de `profec.ia.br` e as definições da equipe.
- **19/ago/2026**: infra validada (setup, validate, rede, conectores Drive/Metricool/Kairogen, escopos ElevenLabs incluindo music). Usuário liberou `profec.ia.br`; site lido na fonte e marca documentada aqui e no `FRAMEWORK.md`. Logo e áudios oficiais de referência baixados para `assets/`. Sondagem barata de escopos ElevenLabs: POST com payload vazio devolve 422 quando o escopo existe e 401 `missing_permissions` quando falta, sem gastar créditos.
