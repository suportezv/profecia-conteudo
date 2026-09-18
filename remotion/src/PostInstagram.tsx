import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { Ceu } from "./Ceu";
import { marca } from "./marca";

/**
 * Post estatico 4:5 (1080x1350) na gramatica do Design System: SectionLabel
 * em cima, titulo em Fraunces 400 com uma frase em italico 300 dourado
 * (hero-em), um cartao de chat do WhatsApp como device narrativo e a
 * assinatura (simbolo + wordmark) embaixo. Todo texto vem do site ou do
 * FRAMEWORK.md; nada de travessao.
 */
export type Bolha =
  | { de: "pessoa"; texto: string }
  | { de: "profecia"; texto: string }
  | { de: "profecia"; voz: { duracao: string } }
  | { de: "profecia"; musica: true };

export type PropsPost = {
  rotulo: string;
  titulo: string;
  destaque: string;
  bolhas: Bolha[];
  rodape?: string;
};

const limpa = (s: string) => s.replace(/[.,!?;:]/g, "").toLowerCase();

function partesTitulo(titulo: string, destaque: string) {
  const palavras = titulo.split(" ");
  const alvo = destaque.split(" ").map(limpa).filter(Boolean);
  let ini = -1;
  for (let i = 0; i + alvo.length <= palavras.length; i++) {
    if (alvo.every((a, k) => limpa(palavras[i + k]) === a)) {
      ini = i;
      break;
    }
  }
  if (ini < 0) return { antes: titulo, em: "", depois: "" };
  return {
    antes: palavras.slice(0, ini).join(" "),
    em: palavras.slice(ini, ini + alvo.length).join(" "),
    depois: palavras.slice(ini + alvo.length).join(" "),
  };
}

const Rotulo: React.FC<{ texto: string }> = ({ texto }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 24px",
      borderRadius: 999,
      background: "oklch(0.97 0.02 240)",
      border: "2px solid oklch(0.88 0.04 240)",
      color: marca.gold,
      fontFamily: marca.fonteSans,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    }}
  >
    <span style={{ width: 10, height: 10, borderRadius: 999, background: marca.gold }} />
    {texto}
  </div>
);

const Avatar: React.FC = () => (
  <div
    style={{
      width: 72,
      height: 72,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${marca.goldHex}, ${marca.goldDeep})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Img src={staticFile("logo-profecia.png")} style={{ width: 68, height: 68, filter: "brightness(0) invert(1)" }} />
  </div>
);

const Ondas: React.FC = () => {
  const barras = Array.from({ length: 38 }, (_, i) => {
    const v = 0.35 + 0.55 * Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.31));
    return { h: Math.max(4, Math.round(v * 40)), tocada: i / 37 <= 0.3 };
  });
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 44, flex: 1 }}>
      {barras.map((b, i) => (
        <span
          key={i}
          style={{
            width: 4,
            height: b.h,
            borderRadius: 999,
            background: b.tocada ? marca.goldHex : "oklch(0.85 0.01 240)",
          }}
        />
      ))}
    </div>
  );
};

const Chat: React.FC<{ bolhas: Bolha[] }> = ({ bolhas }) => (
  <div
    style={{
      width: "100%",
      background: "oklch(0.97 0.005 80)",
      border: "2px solid oklch(0.92 0.01 80)",
      borderRadius: 40,
      padding: 28,
      boxShadow: "0 30px 60px -30px rgba(20,30,60,0.28)",
      fontFamily: marca.fonteSans,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "8px 8px 24px",
        borderBottom: "2px solid oklch(0.92 0.01 80)",
        marginBottom: 24,
      }}
    >
      <Avatar />
      <div>
        <div style={{ fontSize: 26, fontWeight: 600, color: marca.ink }}>Profecia</div>
        <div style={{ fontSize: 22, color: "oklch(0.55 0.1 145)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "oklch(0.65 0.15 145)" }} />
          online · respondendo agora
        </div>
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {bolhas.map((b, i) => {
        const pessoa = b.de === "pessoa";
        const base: React.CSSProperties = {
          alignSelf: pessoa ? "flex-end" : "flex-start",
          maxWidth: pessoa ? "78%" : "82%",
          padding: pessoa ? "16px 24px" : "20px 24px",
          borderRadius: pessoa ? "32px 32px 8px 32px" : "32px 32px 32px 8px",
          background: pessoa ? "oklch(0.92 0.04 145)" : marca.surface,
          color: pessoa ? "oklch(0.25 0.04 150)" : marca.ink,
          fontSize: 27,
          lineHeight: pessoa ? 1.4 : 1.5,
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        };
        if ("voz" in b) {
          return (
            <div key={i} style={{ ...base, minWidth: "82%", display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 999,
                  background: marca.goldHex,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 4 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <Ondas />
                <div style={{ display: "flex", gap: 14, fontSize: 20 }}>
                  <span style={{ color: marca.inkMute }}>{b.voz.duracao}</span>
                  <span style={{ color: marca.goldHex, fontWeight: 600 }}>▶ Toque para ouvir</span>
                </div>
              </div>
            </div>
          );
        }
        if ("musica" in b) {
          return (
            <div key={i} style={{ ...base, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ color: marca.goldHex, fontSize: 30 }}>♪</span>
              <span style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 30 }}>
                {[14, 26, 18, 30].map((h, k) => (
                  <span key={k} style={{ width: 6, height: h, borderRadius: 999, background: marca.goldHex }} />
                ))}
              </span>
              <span style={{ fontStyle: "italic", color: "oklch(0.5 0.02 240)", fontSize: 24 }}>criando música personalizada…</span>
            </div>
          );
        }
        return (
          <div key={i} style={base}>
            {b.texto}
          </div>
        );
      })}
    </div>
  </div>
);

export const PostInstagram: React.FC<PropsPost> = ({ rotulo, titulo, destaque, bolhas, rodape = "profec.ia.br" }) => {
  const { antes, em, depois } = partesTitulo(titulo, destaque);
  return (
    <AbsoluteFill>
      <Ceu />
      <AbsoluteFill style={{ padding: "84px 84px 72px", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34, width: "100%" }}>
          <Rotulo texto={rotulo} />
          <h1
            style={{
              margin: 0,
              fontFamily: marca.fonteSerif,
              fontWeight: 400,
              fontSize: 82,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: marca.ink,
              textAlign: "center",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            {antes}{antes ? " " : ""}
            {em ? (
              <em style={{ fontStyle: "italic", fontWeight: 300, color: marca.goldHex }}>{em}</em>
            ) : null}
            {depois ? " " : ""}{depois}
          </h1>
        </div>

        <Chat bolhas={bolhas} />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Img src={staticFile("logo-profecia.png")} style={{ width: 56, height: 56 }} />
          <span style={{ fontFamily: marca.fonteSerif, fontWeight: 500, fontSize: 38, color: marca.ink, letterSpacing: "0.005em" }}>
            Profecia
          </span>
          <span style={{ fontFamily: marca.fonteSans, fontSize: 24, color: marca.inkMute, marginLeft: 10 }}>{rodape}</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
