/**
 * Paleta e tokens do Profecia.
 *
 * PENDENTE DE MARCA: a identidade visual do Profecia (paleta, fonte, fundos)
 * ainda nao foi definida. Ver "PENDENTES de marca" no CLAUDE.md. Enquanto isso,
 * os valores abaixo sao um placeholder NEUTRO (grafite/branco), de proposito
 * sem cor de marca: nao herdar a aurora rosa da Profissio.ai nem a paleta de
 * outro estudio. Quando a marca chegar, trocar SO estes hexes e o nome da
 * fonte; Aurora.tsx e CartaoTitulo.tsx leem tudo daqui e nao precisam mudar.
 * As chaves mantem o nome herdado (rosaVivo, ciano...) para o Aurora nao
 * quebrar; renomear junto com a paleta real, se fizer sentido.
 */
export const marca = {
  rosaVivo: "#3A3A3A",
  rosa: "#2C2C2C",
  rosaSuave: "#5A5A5A",
  violeta: "#4A4A4A",
  ciano: "#7A7A7A",
  azulNeon: "#9A9A9A",
  azulProfundo: "#1F1F1F",
  fundoEscuro: "#0B0B0B",
  superficie: "#161616",
  /** Base clara dos fundos aurora (placeholder neutro). */
  auroraBase: "#F4F4F4",
  tinta: "#161616",
  /** Fonte PENDENTE. Sem rede no render, cai para a sans do sistema. */
  fonte: '"Inter Tight", system-ui, -apple-system, sans-serif',
} as const;
