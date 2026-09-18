/**
 * Paleta e tokens do Profecia, lidos do proprio site (profec.ia.br, 18/set/2026):
 * `skyPalette` e `ACCENT` em lp-sections.jsx/app.jsx, e as fontes do <head>.
 * Os valores oklch do site foram convertidos para hex com a colour-science.
 *
 * Gramatica visual do site: "ceu azul suave com brilho de sol dourado"
 * (comentario literal do codigo), tinta azul-marinho, dourado como unico
 * acento (CTA, logo pomba+cruz), cartoes brancos. Serifa Fraunces nos titulos,
 * Manrope no corpo.
 *
 * As chaves mantem o nome herdado do Remotion do grupo (rosaVivo, ciano...)
 * porque Aurora.tsx e CartaoTitulo.tsx leem por elas; o valor e o do Profecia.
 * Nada aqui vem da Profissio.ai.
 */
export const marca = {
  /** Acento da marca: dourado (ACCENT literal do site). Vai na palavra de destaque. */
  rosaVivo: "#C99A40",
  /** Dourado do skyPalette.gold. */
  rosa: "#CD9A50",
  /** Dourado suave (skyPalette.goldSoft). */
  rosaSuave: "#E6C99A",
  /** Brilho de sol (skyPalette.bgGlow). */
  violeta: "#FFF0C4",
  /** Azul-ceu do topo (skyPalette.bgTop). */
  ciano: "#D2F0FF",
  /** Azul-ceu medio (skyPalette.bgMid). */
  azulNeon: "#E0F6FE",
  /** Tinta azul-marinho (skyPalette.ink). */
  azulProfundo: "#1D2A37",
  /** Fundo escuro do rodape do site. */
  fundoEscuro: "#0C1322",
  superficie: "#1B1B1F",
  /** Fundo de pagina do site (skyPalette.pageBg): base clara dos fundos. */
  auroraBase: "#F7FBFD",
  /** Tinta dos textos (skyPalette.ink). */
  tinta: "#1D2A37",
  /**
   * Titulos em Fraunces (serifa optica), corpo em Manrope; ambas do Google
   * Fonts no site. Sem rede no render, cai para a serifa/sans do sistema:
   * para usar as fontes de verdade, embutir os arquivos como asset local.
   */
  fonte: '"Fraunces", "Manrope", Georgia, system-ui, serif',
} as const;
