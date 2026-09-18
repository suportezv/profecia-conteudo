import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { marca } from "./marca";

/**
 * Fundo "ceu da manha com sol dourado", como o hero do site e o Design System:
 * gradiente 180deg sky-top -> sky-mid 35% -> sky-low 65% -> sky-base, um
 * radial sun-glow no canto superior direito e um sky-wash no inferior
 * esquerdo. O halo do sol respira devagar (6s, escala 1 -> 1.06), unico
 * movimento: nada de manchas, nada de cor fora do ceu e do dourado.
 */
export const Ceu: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const seg = frame / fps;
  // respiracao do halo: 6s ease-in-out entre 1 e 1.06 (Motion do Design System)
  const halo = 1 + 0.03 * (1 - Math.cos((seg / 6) * Math.PI * 2));

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${marca.skyTop} 0%, ${marca.skyMid} 35%, ${marca.skyLow} 65%, ${marca.skyBase} 100%)`,
      }}
    >
      {/* sky-wash: radial inferior esquerdo a 90% */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 12% 88%, ${marca.skyWash} 0%, transparent 55%)`,
          opacity: 0.9,
        }}
      />
      {/* sun-glow: halo superior direito, respirando */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 82% 12%, ${marca.sunGlow} 0%, transparent 48%)`,
          transform: `scale(${halo})`,
          transformOrigin: "82% 12%",
          opacity: 0.85,
        }}
      />
    </AbsoluteFill>
  );
};
