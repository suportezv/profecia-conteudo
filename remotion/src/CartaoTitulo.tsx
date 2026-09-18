import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Ceu } from "./Ceu";
import { marca } from "./marca";

export type PropsCartao = {
  titulo: string;
  /**
   * Trecho do titulo (uma palavra ou uma frase curta) que vira o italico
   * dourado do hero: Fraunces 300 italico em gold-hex. Uma frase por titulo,
   * nunca o titulo inteiro (regra do Design System, estilo `hero-em`).
   */
  destaque?: string;
  rodape?: string;
};

const limpa = (s: string) => s.replace(/[.,!?;:]/g, "").toLowerCase();

/** Indices das palavras do titulo cobertas pela frase de destaque. */
function indicesDestaque(palavras: string[], destaque?: string): Set<number> {
  const out = new Set<number>();
  if (!destaque) return out;
  const alvo = destaque.split(" ").map(limpa).filter(Boolean);
  if (!alvo.length) return out;
  for (let i = 0; i + alvo.length <= palavras.length; i++) {
    if (alvo.every((a, k) => limpa(palavras[i + k]) === a)) {
      for (let k = 0; k < alvo.length; k++) out.add(i + k);
      break;
    }
  }
  return out;
}

/**
 * Cartao de titulo na gramatica do site: ceu com sol, uma frase curta em
 * Fraunces 400 (nunca bold), tracking -0.025em, uma frase em italico 300
 * dourado, revelacao palavra a palavra. Rodape em Manrope, ink-soft.
 */
export const CartaoTitulo: React.FC<PropsCartao> = ({ titulo, destaque, rodape }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const palavras = titulo.split(" ");
  const emDestaque = indicesDestaque(palavras, destaque);

  return (
    <AbsoluteFill>
      <Ceu />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: "0 9%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.26em",
            fontFamily: marca.fonteSerif,
            fontSize: 78,
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            textAlign: "center",
            color: marca.ink,
          }}
        >
          {palavras.map((p, i) => {
            // cada palavra entra um pouco depois da anterior
            const entrada = spring({ frame: frame - 6 - i * 4, fps, config: { damping: 200 } });
            const italico = emDestaque.has(i);
            return (
              <span
                key={i}
                style={{
                  color: italico ? marca.goldHex : marca.ink,
                  fontWeight: italico ? 300 : 400,
                  fontStyle: italico ? "italic" : "normal",
                  opacity: entrada,
                  transform: `translateY(${interpolate(entrada, [0, 1], [14, 0])}px)`,
                  display: "inline-block",
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        {rodape ? (
          <div
            style={{
              marginTop: 34,
              fontFamily: marca.fonteSans,
              fontSize: 24,
              fontWeight: 500,
              color: marca.inkSoft,
              // o rodape so aparece depois que o titulo assentou
              opacity: interpolate(
                frame,
                [durationInFrames - fps * 2.2, durationInFrames - fps * 1.6],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
              ),
            }}
          >
            {rodape}
          </div>
        ) : null}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
