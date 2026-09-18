import React from "react";
import { Composition, Still } from "remotion";
import { CartaoTitulo } from "./CartaoTitulo";
import { PostInstagram } from "./PostInstagram";
import { POSTS } from "./posts";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="CartaoTituloVertical"
      component={CartaoTitulo}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        titulo: "Sua fé, todo dia, que te ouve e responde.",
        destaque: "que te ouve",
        rodape: "profec.ia.br",
      }}
    />
    <Composition
      id="CartaoTituloQuadrado"
      component={CartaoTitulo}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1080}
      defaultProps={{
        titulo: "Sua fé, todo dia, que te ouve e responde.",
        destaque: "que te ouve",
        rodape: "profec.ia.br",
      }}
    />
    {POSTS.map((p) => (
      <Still key={p.id} id={p.id} component={PostInstagram} width={1080} height={1350} defaultProps={p.props} />
    ))}
  </>
);
