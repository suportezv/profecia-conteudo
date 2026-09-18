# Profecia Conteúdo Studio (memória persistente do projeto)

Este repositório é o **Profecia Conteúdo Studio**: edição e agendamento de conteúdo para as redes do **Profecia** (`https://profec.ia.br/`). Estúdio irmão do `profissioai-conteudo`, `eita-conteudo`, `ana-conteudo` e `normalyze.conteudo`; infraestrutura idêntica, posicionamento próprio do Profecia.

**Antes de editar qualquer vídeo ou escrever qualquer caption, leia `FRAMEWORK.md`.**

> **O que é o Profecia** (lido do site `profec.ia.br` em 18/set/2026, fonte primária): um **companheiro de fé cristã por WhatsApp**, produto B2C, "Powered by Profissio.ai". Título do site: *"Profecia: Sua fé, todo dia, que te ouve e responde"*. A pessoa manda texto, áudio ou foto e a Profecia (feminino, "ela") responde com orações, reflexões, versículos, explicação da Bíblia e **músicas personalizadas**, 24h, "fundamentada na Palavra de Deus", "sem julgamento, sem pressão". Não substitui igreja nem pastor (FAQ literal). Planos oficiais (jul/2026): **Anual 12x R$ 9,90** (R$ 118,80), Trimestral 3x R$ 19,90, Mensal R$ 29,90; checkout em `checkout.profec.ia.br`; WhatsApp de entrada `+55 11 5192-1507`. A leitura anterior (ago/2026, "segmento Agente IA" na Documentação de CS da Profissio) descrevia só a tecnologia; o posicionamento público é o acima. Detalhes de persona, pilares e paleta estão no `FRAMEWORK.md`.

## PENDENTES de marca (o que ainda bloqueia texto público)

- **Confirmação da equipe**: o `FRAMEWORK.md` foi preenchido só com o que o site diz. Persona do perfil (quem fala nas redes: a própria Profecia em primeira pessoa ou a marca em terceira?) e CTA oficial das redes (link do site, do checkout ou o WhatsApp?) precisam de confirmação. Os handles vieram do Metricool: Instagram `@meuprofecia`, TikTok `@meuprofeciaoficial`. O perfil do Instagram já posta ~2 Reels por dia: **ler o feed atual (prints do usuário) antes de propor gramática nova**, para não colidir com o que já existe.
- **Pronúncia da marca em TTS**: hipótese "profecia" como a palavra em português; confirmar antes da primeira locução (regra aprendida: a Profissio.ai se fala "profício ei ái").
- **Voz ElevenLabs**: o produto é feminino e acolhedor; voice_id próprio ou o `LetL52AJ3xLLkD3x88iE` da Profissio.ai? Confirmar.
- **Ativos de marca**: o logo (pomba dourada sobre cruz, círculo) está em `assets/marca/logo-profecia.png`, baixado do site. Arquivos das fontes Fraunces e Manrope e outros ativos: pasta no Drive, se existir.
- **Identidade visual**: **definida pelo site**, registrada em `remotion/src/marca.ts` (tokens convertidos de oklch) e no `FRAMEWORK.md`. Não herdar nada da Profissio.ai.

## Regras que valem em qualquer resposta pública (herdadas do grupo, confirmadas pelo usuário)

- Nunca usar travessão em texto público: reescrever a frase.
- Palavrão em vídeo **bipa**, não corta.
- Loudness final: **-14 LUFS**.

## Working dirs

- Estúdio: este repo (symlink `~/profecia-conteudo`). Projetos em `projects/<nome>/`.
- Ferramentas: `video-use` e `hyperframes` em `/workspace/...` (cloud). Ambiente novo: `bash scripts/setup.sh` e `bash scripts/validate.sh`. **Em sessão nova, conferir `ls /workspace` antes de contar com video-use ou hyperframes**; se estiver vazio, rodar o `setup.sh` à mão.
- **Campo de setup script do environment: usar caminho absoluto**, nunca `bash scripts/setup.sh`. O comando de boot roda com o diretório de trabalho no **pai** do repo, então o caminho relativo falha com `No such file or directory` (exit 127) e a sessão nasce sem `/workspace` e sem skills. Versão à prova de diretório, idêntica nos estúdios irmãos:
  ```bash
  for p in ./scripts/setup.sh ./*/scripts/setup.sh; do [ -f "$p" ] && exec bash "$p"; done; p=$(find /home /workspace /repo /app /src -maxdepth 4 -type f -path "*/scripts/setup.sh" 2>/dev/null | head -1); [ -n "$p" ] && exec bash "$p"; echo "setup.sh nao encontrado no repo"; exit 1
  ```

## Cinto de ferramentas (portado do `profissioai-conteudo` em 18/set/2026)

Ferramenta é genérica, marca não é: os scripts abaixo vieram sem edição (zero referências de marca, conferido por varredura). Só `setup.sh`, `validate.sh`, `remotion/src/marca.ts`, `remotion/src/Root.tsx` e `remotion/package.json` carregam nome de estúdio.

| Arquivo | O que faz |
|---|---|
| `scripts/decupar.py` | Decupa vídeo por **âncoras de texto** ("de tal frase até tal frase", `edl.json`) casadas contra transcrição com timestamp por palavra. Junta trechos, gira, aplica LUT, normaliza áudio |
| `scripts/relatorio_decupagem.py` | Retranscreve as peças finais e monta o relatório do que ficou e do que caiu |
| `scripts/gera_lut_slog2.py` | Gera LUT 3D de S-Log2/S-Gamut para Rec.709 com a `colour-science` |
| `scripts/zip_index_remoto.py` | Lista e extrai arquivos de um ZIP gigante no Drive por *range request*, sem baixar o ZIP |
| `scripts/gera_imagem.py` | Gera imagem pela OpenAI ou pelo Gemini, mesma interface; chaves **só** por variável de ambiente (recusa chave por argumento) |
| `scripts/sobe_para_drive.py` | Sobe arquivos para uma pasta do Drive com token de acesso |
| `remotion/` | Composições React (`CartaoTituloVertical`, `CartaoTituloQuadrado`). Paleta e fonte vivem **só** em `src/marca.ts`; rodapé em `src/Root.tsx`. Render usa o `headless_shell` do Playwright (fixado em `remotion.config.ts`) |

`remotion/src/marca.ts` carrega a paleta e as fontes **do site** (oklch convertido para hex); se a marca mudar, trocar só os hexes e a fonte ali.

Chaves que os scripts esperam **nas variáveis de ambiente do environment** (nunca em arquivo do repo, nunca no chat): `ELEVENLABS_API_KEY`, `OPENAI_API_KEY` e `GEMINI_API_KEY`. As três foram cadastradas pelo usuário em 18/set/2026; as duas novas só aparecem em **sessão nova** (conferir com `printenv | grep -c API_KEY`, esperado 3, e com `gera_imagem.py --listar`). Variável cadastrada com sessão aberta só aparece em **sessão nova**; conferir com `printenv | grep -c API_KEY`. Chave válida não significa quota: no Gemini, `429` com `quotaId: ...-FreeTier` quer dizer que o projeto da chave não está no faturamento (ler o campo `details` do erro).

Allowlist conferida em 18/set/2026 (CONNECT pelo proxy): `api.openai.com`, `generativelanguage.googleapis.com`, `api.elevenlabs.io`, `www.googleapis.com`, `drive.google.com`, `drive.usercontent.google.com`, **`profec.ia.br`** e `checkout.profec.ia.br` respondem, todos liberados pelo usuário no mesmo dia. `www.profec.ia.br` não resolve em DNS, o site vive só no apex (não é allowlist).

Hosts que o cinto exige na allowlist do environment (literal por subdomínio, `*.dominio.com` para site inteiro): `api.elevenlabs.io`, `api.openai.com`, `generativelanguage.googleapis.com`, `www.googleapis.com`, `drive.google.com`, `drive.usercontent.google.com`, `pypi.org`, `files.pythonhosted.org`, `registry.npmjs.org`, `api.github.com` + GitHub Releases. `raw.githubusercontent.com` não precisa. Diagnóstico: `curl -sv https://host/ 2>&1 | grep CONNECT`; `403` no CONNECT é allowlist, qualquer outra resposta é chave, quota ou rota.

## IDs e contas

- **Metricool**: marca **"Profec.ia", blog_id `7027080`** (conta `suporte@profissio.ai`, a mesma da marca Profissio.ai/blog_id 6736175; timezone `America/Sao_Paulo`). Conectada em 18/set/2026 e **verificada por dados** no mesmo dia: Instagram `@meuprofecia` (10,7 mil seguidores, ~2 Reels/dia), Facebook página `991021544103898` (306 seguidores, ~4 posts/dia), TikTok `@meuprofeciaoficial` (responde, mas zerado: 0 seguidores, 0 vídeos no dia da conexão; conferir se a conta tem conteúdo). Sem YouTube nesta marca. Nenhum post agendado em 18/set.
- **ElevenLabs**: mesma chave do grupo (`ELEVENLABS_API_KEY` no environment). Escopos: TTS, STT, sound_generation, voices_read e **music** (Eleven Music, `POST /v1/music`, até 600s; usar para trilhas; sound-generation fica para SFX).
- **Biblioteca de SFX**: copiar `assets/sfx/` do repo `profissioai-conteudo` (13+ sons de UI validados, custo zero). São brand-neutral; a trilha musical deve ser própria por peça.
- **Kairogen**: conta `suporte@profissio.ai`, FREE, 0 créditos (B-roll por IA indisponível).
- **Drive (brutos)**: pasta do Profecia **PENDENTE**.

## Gotchas essenciais (herdados e validados nos estúdios irmãos)

Ver o `CLAUDE.md` do `suportezv/profissioai-conteudo`, seções "Rede do environment" e "Gotchas essenciais": é o repositório de referência técnica do grupo. Resumo do que mais custa tempo:

- Environment com network Custom: `pypi`/`npm` vêm em `no_proxy` e falham com 403 mesmo na allowlist; rotear pelo agent proxy (o `setup.sh` já faz). `apt` bloqueado: ffmpeg estático via GitHub Releases (o `setup.sh` já faz). Allowlist não cobre subdomínio: usar `*.dominio.com`. WebFetch tem rota própria bloqueada: usar `curl`.
- Instagram exige login mesmo com domínio liberado; feed de referência via prints/gravação do usuário.
- Metricool MCP: sem delete (cancelar = update draft:true); **update devolve id novo**; mídia por URL pública via commit temporário no repo público (por isso este repo deve ser público), remover o arquivo após agendar.
- Conector Metricool pode estar desabilitado na conversa: agendar via sessão filha no environment **Default** (sem setup script); follow-up na mesma sessão via `create_trigger` com `persistent_session_id` + `fire_trigger`.
- Render de composição do Claude Design: ver `projects/01-funil-automatico/POS.md` do repo irmão (Playwright + seek determinístico, vendorizar React/Babel do npm, fontes @fontsource, viewport 1080x1964, crop 1080:1920).
- TTS: validar pronúncia por STT antes de mixar; frases curtas de fecho com `previous_text`; "com a Agente" soa como "com a gente", evitar a sequência.
- Legendas SEMPRE por último no filter chain; proxy SDR para brutos HLG de iPhone; zoompan para zoom animado.
- **Brutos de Sony em S-Log2 (A7 III): converter, não "filtrar".** O XML lateral do clipe (`C00xxM01.XML`) declara `CaptureGammaEquation`/`CaptureColorPrimaries`; quando diz `s-log2`/`s-gamut`, gerar a LUT com `scripts/gera_lut_slog2.py` (exposição −0,5 stop e joelho em 0,65, senão o branco estoura) e conferir que o ffmpeg aplica a `lut3d` em RGB, não em YUV (`-v verbose`). Saída com `out_range=tv` e `-color_range tv`.
- **Câmera pode gravar na vertical sem gravar a flag de rotação.** O arquivo vem 3840x2160 deitado e o ffprobe não mostra rotação; só olhando um frame se descobre. Corrigir com `transpose=1` antes de escalar. Checar um frame de qualquer lote novo antes de planejar o corte.
- **Decupagem por âncora de texto, não por timecode.** `scripts/decupar.py` recebe um `edl.json` onde cada trecho é "de tal frase até tal frase" e resolve os tempos contra a transcrição do Scribe. Revisar um corte vira editar uma frase; o campo `apos` empurra o cursor quando a mesma frase aparece antes.
- **Remotion renderiza com o `headless_shell`, não com o Chromium do Playwright.** O `chromium-1194` removeu o headless antigo e o launch morre com "Old Headless mode has been removed". Binário certo: `/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell`, fixado em `remotion/remotion.config.ts`. Baixar o browser próprio do Remotion está fora da allowlist. Licença do Remotion não é MIT (grátis até 3 funcionários; acima, Company License): confirmar enquadramento antes de produção. Sem rede de fontes no render: fonte de marca vira asset local.
- **Processo em background com `nohup`/`setsid` é recolhido quando a tool call retorna.** Usar `run_in_background: true` da ferramenta Bash, que o harness rastreia. Em lote longo, `flock` evita dois loops escrevendo o mesmo arquivo.
- **Ler o índice de um ZIP gigante no Drive sem baixar o arquivo.** `drive.usercontent.google.com` aceita `Range`: pegar os últimos ~64 KB, achar o EOCD (e o ZIP64 em arquivo >4 GB), listar o central directory e extrair cada entrada `stored` por outro `Range`. Script: `scripts/zip_index_remoto.py`.
- **Metricool, rascunho com data vencida não publica e não avisa.** Post `draft:true` com data passada continua no calendário e em `getScheduledPosts` como se agendado, mas nunca dispara. Quem agenda tira do rascunho na mesma sessão e confirma com `getScheduledPosts`; data no passado exige data nova.
- **Patch `video-use-is-portrait-source` aposentado (18/set/2026).** O upstream do video-use passou a ler o `rotation` do side data. O `validate.sh` testa **comportamento** (retrato, paisagem e paisagem com matriz de rotação 90) em vez de procurar patch no código.

## Histórico de decisões

- **18/ago/2026**: estúdio criado por réplica do `profissioai-conteudo` a pedido do usuário. Infra e gotchas herdados; marca 100% PENDENTE até a leitura de `profec.ia.br` e as definições da equipe.
- **18/set/2026**: site `profec.ia.br` lido pela primeira vez (usuário liberou o domínio). O Profecia é um companheiro de fé cristã por WhatsApp, B2C, e não um "agente de IA" no sentido B2B dos outros clientes: `CLAUDE.md`, `FRAMEWORK.md` e `remotion/src/marca.ts` reescritos com o que o site diz, sem inferência. Chaves OpenAI/Gemini cadastradas pelo usuário; visíveis só em sessão nova.
- **18/set/2026**: cinto de ferramentas portado do `profissioai-conteudo` seguindo o `PORTAR.md` de lá (6 scripts genéricos, `setup.sh`/`validate.sh` com 5 linhas de marca trocadas, `remotion/` com paleta placeholder neutra, `patches/` aposentado). No mesmo dia o site foi lido e a paleta real substituiu o placeholder (item acima).
