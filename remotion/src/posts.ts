import type { PropsPost } from "./PostInstagram";

/**
 * Tres exemplos de post estatico para o Instagram (@meuprofecia), 4:5.
 * Copy tirada do site (dores, funcionalidades e falas do chat) e do
 * FRAMEWORK.md. As legendas estao em projects/01-posts-instagram-exemplos/POSTS.md.
 */
export const POSTS: { id: string; props: PropsPost }[] = [
  {
    id: "Post01Dor",
    props: {
      rotulo: "Talvez você se reconheça",
      titulo: "Quis orar mas não soube por onde começar.",
      destaque: "por onde começar",
      bolhas: [
        { de: "pessoa", texto: "tô tendo um dia difícil hoje 🥲" },
        { de: "profecia", texto: "Estou aqui com você. Quer que eu ore com você por isso, ou prefere começar conversando sobre o que está pesando?" },
        { de: "pessoa", texto: "pode orar comigo" },
      ],
    },
  },
  {
    id: "Post02Audio",
    props: {
      rotulo: "Manda e recebe áudios",
      titulo: "Não precisa digitar. Manda um áudio.",
      destaque: "Manda um áudio",
      bolhas: [
        { de: "pessoa", texto: "🎙️ 0:18" },
        { de: "profecia", texto: "Ouvi você. Vou orar por esse momento agora, do jeito que você contou." },
        { de: "profecia", voz: { duracao: "0:42" } },
      ],
    },
  },
  {
    id: "Post03Musica",
    props: {
      rotulo: "Músicas personalizadas",
      titulo: "Uma música só sua, para o seu momento de fé.",
      destaque: "só sua",
      bolhas: [
        { de: "profecia", texto: "Quer que eu faça um louvor para te acalmar?" },
        { de: "pessoa", texto: "Amém, seria ótimo!" },
        { de: "profecia", musica: true },
      ],
    },
  },
];
