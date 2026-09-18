/**
 * Tokens do Profecia, espelhando o Profecia Design System
 * (https://claude.ai/artifact/Vg5ZfCmtRDAnWQsRiqafXv), que por sua vez foi
 * extraido do site profec.ia.br (build v=20260828b). Os nomes abaixo sao os
 * nomes dos tokens do Design System em camelCase; os valores sao os literais
 * de la (oklch, que o headless_shell do Chromium renderiza nativamente).
 *
 * Regra do estudio: paleta e tipografia NAO se decidem aqui. Mudou no Design
 * System, muda aqui; nunca o contrario. Espelho versionado em design-system/.
 */
export const marca = {
  // Dourado: o unico acento
  gold: "oklch(0.72 0.11 75)",
  goldDeep: "oklch(0.65 0.12 70)",
  goldSoft: "oklch(0.85 0.07 80)",
  /** ACCENT literal do site: traco do simbolo, italico do hero. */
  goldHex: "#C99A40",
  goldWash: "oklch(0.97 0.025 80)",
  goldGhost: "oklch(0.94 0.04 80)",
  // Ceu do hero (gradiente 180deg: top 0%, mid 35%, low 65%, base 100%)
  skyTop: "oklch(0.93 0.05 230)",
  skyMid: "oklch(0.95 0.035 225)",
  skyLow: "oklch(0.97 0.025 215)",
  skyBase: "oklch(0.99 0.01 220)",
  skyWash: "oklch(0.95 0.04 240)",
  sun: "oklch(0.99 0.1 85)",
  sunGlow: "oklch(0.97 0.08 80)",
  // Papel-creme da intro (animacao de marca)
  paper: "oklch(0.985 0.022 80)",
  paperMid: "oklch(0.965 0.028 78)",
  paperEdge: "oklch(0.94 0.03 75)",
  // Tinta e superficies
  ink: "oklch(0.28 0.03 250)",
  inkSoft: "oklch(0.45 0.02 250)",
  inkMute: "oklch(0.6 0.015 250)",
  pageBg: "oklch(0.985 0.005 240)",
  surface: "#ffffff",
  border: "oklch(0.93 0.01 240)",
  footerBg: "oklch(0.18 0.02 250)",
  /**
   * Fraunces (titulos, numerais, wordmark; pesos 300 a 600, nunca bold) e
   * Manrope (todo o resto). Sao Google Fonts; fonts.gstatic.com esta fora da
   * allowlist do environment, entao o render cai para a serifa/sans do sistema
   * ate os arquivos entrarem em assets/fonts/ (PENDENTE).
   */
  fonteSerif: '"Fraunces", Georgia, serif',
  fonteSans: '"Manrope", system-ui, sans-serif',
} as const;
