# Profecia Design System (espelho)

**Fonte viva**: o artifact "Profecia Design System", `https://claude.ai/artifact/Vg5ZfCmtRDAnWQsRiqafXv` (tipo Design System, arquivos em `project/`). É o padrão de marca do estúdio: paleta, tipografia, espaçamento, raios, sombras, motion, logo e 15 componentes, extraídos do código do site `profec.ia.br` (build `v=20260828b`).

Esta pasta é um **espelho** de dois arquivos dele, para sessões sem acesso ao artifact:

- `README.md`: o brand book (regras de uso que nomeiam tokens).
- `tokens.json`: os tokens (89 cores, 44 estilos de texto, espaçamento, raios, sombras, layout, z-index).

Regras:

1. **Mudou no artifact, atualiza o espelho** (`Artifact read` dos dois arquivos e copiar). Nunca editar só aqui.
2. `remotion/src/marca.ts` usa os mesmos nomes de token (camelCase) e os mesmos valores oklch. Se a paleta mudar, mudar lá também.
3. Para ler o sistema por agente: começar pelo `README.md`; a cauda gerada dele no artifact indexa os cards de cada componente e token.

Espelhado em 18/set/2026 (versão com a revisão: cores da intro, timeline da animação de marca, GhostCTA sinalizado como não usado no site).
