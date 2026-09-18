Profecia is a faith companion that lives inside WhatsApp: it listens, answers with Scripture, prays with you and writes you a song. The interface is a morning sky with a gold sun: pale blue grounds, white cards, one warm gold for everything that invites a touch. Nothing shouts. The voice is intimate, second person, Brazilian Portuguese.

## Content fundamentals

- Write in Brazilian Portuguese, informal second person (`você`, `te`), never `senhor(a)`. Sentences are short and end on a full stop, including headlines: "Sua fé, todo dia, que te ouve e responde."
- Headlines pair a plain line with one italic phrase in gold (`hero-em`, weight 300, `gold-hex`): "Sua fé merece *um espaço só seu,* fundamentado na Palavra de Deus." One italic phrase per heading, never a whole one.
- Section eyebrows are short uppercase nouns in a SectionLabel: "COMO USAR", "PLANOS", "ELES APROVAM". The H2 under them is one sentence, often broken by `<br>` at the natural pause.
- Reassure, never pressure. Price notes read "A partir de R$ 9,90 por mês · cancele quando quiser"; the trust line is "Pagamento seguro · Acesso liberado na hora, direto no seu WhatsApp". Use the middle dot `·` as the separator.
- CTAs are first-person wishes, not commands: "Quero fortalecer minha fé", "Sim, minha fé merece esse espaço", "Começar minha jornada". Plan buttons are "Assinar Anual" and so on.
- Numbers use the Brazilian format: `R$ 9,90`, `12x de R$ 9,90`, `+12 mil`. Stats count up from 0 on entering view.
- Emoji are allowed only as feature icons in the 44px `gold-wash` tile (🙏 🎙️ 📸 📖 📚 🎵 🌅 🧘 📿 🧠 🔥 💬) and inside chat bubbles as the user's own voice. Never in headlines or buttons.
- Sample chat lines are lowercase and human ("tô tendo um dia difícil hoje 🥲"); Profecia's replies are warm, full sentences, and end with a question or an offer ("Quer que eu ore com você por isso?").

## Color

- Ground every plain section on `page-bg`; cards are `surface` with a 1px `border` and one of the radii below. Alternate warmth by section: `surface-tint` (about), `warm-page` (testimonials), `page-bg` with a `sky-features` radial (features), `page-bg` with `gold-pricing-glow` and `sky-bg-top` radials (pricing).
- The sky is a gradient, never a flat blue: 180deg `sky-top` → `sky-mid` 35% → `sky-low` 65% → `sky-base`, with a `sun-glow` radial top-right and a `sky-wash` radial bottom-left. The final CTA repeats it shorter (`sky-mid` → `sky-cta-end`).
- Gold is the only accent. Fills use the gradient 180deg `gold` → `gold-deep` with `shadow-gold`; text and strokes use `gold` (labels, stats, stars, checks) or `gold-hex` (italic emphasis, the SVG mark). Tints go `gold-wash` → `gold-wash-strong` → `gold-ghost` as the element gets bigger and quieter.
- Text: `ink` for anything that must be read, `ink-soft` for paragraphs and links, `ink-mute` for captions only. `ink-mute` on white is 3.9:1 and `gold` on white is 2.5:1; both ship that way, so do not put essential copy in either at small sizes.
- White label on the gold gradient is about 2.9:1 as shipped (3.3:1 on `gold-deep`). Keep button labels at 15px+ weight 600 and never lighter than `gold-deep` under white text.
- Green is WhatsApp's, not ours: `wa-user-bubble` / `wa-user-ink` for outgoing bubbles, `online` / `online-text` for the presence line, `save-bg` / `save-text` for savings pills. Red (`danger`, `danger-text`) appears only on an invalid phone input.
- The footer inverts: `footer-bg` with `footer-text` links, `footer-muted` tagline, `footer-label` labels and `footer-rule` dividers. The wordmark and mark go white there.
- No dark theme exists in the source; the footer is the only dark surface.
- The intro overlay has its own warm ground: a radial `paper` → `paper-mid` 60% → `paper-edge` with paper grain, and the closing burst in `gates-core` / `gates-ray`. It is the only creamy surface on the site; use it for brand moments (the animated mark, an opening card), never for reading surfaces.

## Type

- Two hosted faces from Google Fonts: **Fraunces** (opsz 9..144, weights 300, 400, 500, 600) for every heading, numeral and the wordmark; **Manrope** (400, 500, 600, 700) for everything else. `ui-monospace` only for social handles (`handle`). Load them with the site's link: `family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700`.
- Headings are light: `hero` and `h2` at weight 400 with negative tracking (-0.02 to -0.025em) and tight leading (1.05–1.12); the italic phrase drops to 300. Card titles (`h3-step`, `h3-card`, `faq-q`) go to 500. Nothing in Fraunces is bold.
- Fraunces also carries numbers: `price` (48px, 500), `stat` (40px, 500, tabular), `numeral-ghost` (110px, 300 italic, `gold-ghost`), `pain-number`, `avatar-initials`.
- Manrope body sizes step by half pixels: 17 / 15.5 / 15 / 14.5 / 14 / 13.5 / 13 / 12.5 / 11.5. Line-height 1.5–1.6. Labels are 600–700 with wide tracking (0.08–0.18em) and uppercase; buttons are 600 with 0.01em.
- Every size has a mobile value 2–4px smaller (recorded in each style's usage); the desktop headings use `clamp()`. Use `text-wrap: balance` on headings and `pretty` on paragraphs.

## Spacing and layout

- Mobile first at `phone-width` (390px); the desktop layout starts at `breakpoint-desktop` (900px) and never changes the mobile rendering, only adds grids.
- Section rhythm: `section-y` (110px) top and bottom on desktop, `section-y-mobile` (60px) on mobile; gutters `space-10` minimum (`max(40px, 6vw)`) on desktop, `space-5-5` or `space-6` on mobile. Content is centered in `container-section` (1180px), pricing and FAQ in `container-narrow`.
- Inside a section: SectionLabel, `space-3-5` (14px), H2, then the grid at `space-12`–`space-14` on desktop / `space-6`–`space-7` on mobile. Grids are 3 columns (pain, steps, testimonials, plans), 4 (features), 2 (FAQ), 3 equal (stats); mobile stacks to 1 (features 2, testimonials a snap-scrolling row at 82% width).
- Card padding: `space-5-5` × `space-5-5` (22px) on pain cards, 32/28/36 on step cards, 22 on feature cards, 26/24 on testimonials, 34/28/28 on plan cards, 22/26 on FAQ items. Halve roughly for mobile (see each token's usage).
- The footer is `position: sticky; bottom: 0` under the sections (`z-footer`, `z-sections`) so the page appears to lift off it.

## Shape, borders, shadows

- Corners are large and round: cards `radius-18` to `radius-24`, chat card and menus `radius-20`, inputs `radius-14`. Anything clickable that is not a card is a pill (`radius-pill`). Chat bubbles are `radius-16` with one `radius-4` tail corner (bottom-right for the user, bottom-left for Profecia).
- Cards are separated by a 1px `border`, not by shadow. Shadows are reserved for things that float: the chat card (`shadow-chat`), gold buttons (`shadow-gold`), the featured plan (`shadow-plan-featured`), the mobile menu glass (`shadow-menu`), the modal (`shadow-modal`). Stat cards get only a 1px lip (`shadow-card`).
- The featured plan is the one card with a 2px `gold` border and a floating gradient badge; every other plan keeps the 1px `border`.
- Glass is used twice: the hero mark disc (white radial 85%→30%, 6px blur, `shadow-hero-mark`) and the mobile menu (sky gradient at 85–92% alpha, 24px blur, saturate 1.4).
- Focus: the source sets `outline: none` on the phone input and relies on the border change; nothing else defines a focus ring. Consumers should add a visible ring (2px `gold-deep`, 3.3:1 on white) rather than inherit this gap.

## Motion

- Everything breathes slowly. Sun halo 6s and core 4.5s `ease-in-out` scale 1→1.06; rays rotate 90s linear; clouds drift one tile width in 60–90s linear, seamless by rendering two tiles.
- The gold CTA pulses forever: `goldPulse` 2.6s `ease-in-out` between `shadow-gold` and a wider glow; on desktop hover it lifts `translateY(-1px)` in 180ms.
- Chat bubbles pop in with `waBubbleIn` (opacity 0→1, translateY 8px→0, scale 0.94→1) over 240–360ms with the spring `cubic-bezier(0.2, 0.9, 0.3, 1.05)`; the same curve opens the mobile menu (280ms, items staggered 35ms from 80ms) and the modal (260ms). Typing dots bounce 1100ms staggered 180ms.
- The voice message invites the tap: a 1.5px `gold-hex` ring pulses out over 2.2s and the play button rings out 10px over 1.6s until first play.
- Section labels have a faint `label-trace` line travelling the pill's perimeter over 11s. Hover on nav links transitions background and color in 180ms. FAQ plus rotates 45deg in 200ms.
- The brand animation is the mobile intro overlay in `intro.jsx` (desktop skips it): a gold line-drawn dove flies across creamy paper, lands, and the mark and wordmark compose around it. Stroke `gold-hex`, width 1.8 in flight easing to 1.6 perched, on a 100-unit box; flight size 80px, landed mark 62px at the hero mark's position. Exact timeline, in ms from start:
  - 0–700 paper fades up (`paper` radial + grain); the gold glow under the mark rises from 3500 over 1500ms.
  - 500–2400 pass one: enters off-screen right (118%) and crosses to the left (-18%) along the upper third (y 22% with a 4.5% sine bob, 1.6 cycles), ease-in-out; wings flap every 95ms; fades in over the first 8% and out over the last 8%.
  - 2200–3700 pass two: re-enters from lower-left (-12%, 72%) in a rising arc toward center (x ease-out cubic, y power 2.2); flap slows 105→160ms.
  - 3500–4600 landing: settles at center with a 2% dip, size 80→62, wings fold (ease-in cubic), flap 160→320ms.
  - 4200–5000 the circle draws on clockwise from the top (radius 42, dash offset eased out), fading in over 500ms.
  - 4700–5200 the cross materializes under the dove (opacity linear).
  - 5100–5600 the wordmark fades up 8% below the mark: Fraunces 500, 22px, 0.01em, `gold-hex` with a faint gold text shadow; rises 8px.
  - 5900–6800 the gates: a `gates-core` burst scales 0.4→2.2 with sixteen alternating rays (18/10 half-width, 460/360 long) rotating 6deg, screen blend; the dove fades to 5%.
  - 6100–6800 the overlay crossfades out while the page fades in; the wordmark travels to the header wordmark's position, 22→18px, and its color mixes `gold-hex` → `ink` in oklch. Done at 6900.
  - Easings: ease-in-out quad for passes and gates, ease-out cubic for arcs and the circle, ease-in cubic for folding. Reuse this choreography for any animated mark; do not add wing detail, motion blur or a second bird.

## Iconography

- No icon set. Interface glyphs are tiny inline SVGs on a 24-unit grid with `stroke: currentColor`, width 2, round caps: arrow-right (CTAs, 14–16px), plus (FAQ, 10–12px), close (modal, 14px), check (chips, 13px at stroke 3 in `gold`), play/pause (voice, 14px filled). The star is filled `gold` at 16px. Copies with fixed inks are in `assets/Icons`.
- Feature icons are emoji on a `gold-wash` tile (`radius-14`, 44px; `radius-10`, 32px mobile). Do not replace them with line icons.
- Decorative art is drawn in code, not imported: clouds are five white ellipses in a 120×40 SVG at 55–85% opacity; the sun is CSS radials; rays are twelve polygons.

## Logo

- The mark is a dove perched on a cross inside a broken circle. The raster `logo-profecia.png` (gold) is the brand asset for the header (32px), hero disc (68px), final CTA (64px) and favicon; `logo-profecia-white.png` goes on gold (chat avatar, 34px) and on `footer-bg` (48px).
- The SVG mark traced in `logo.jsx` (`profecia-mark.svg`) is for color-flexible uses: the intro animation, watermarks at 7% opacity, and any single-ink rendering. Default stroke `gold-hex`, width 1.6 on a 100-unit box.
- The wordmark is the word "Profecia" in Fraunces 400 (`wordmark`), tracked 0.005em; beside the mark in the header it is 500 (`nav-wordmark`). Stack mark over wordmark centered with a gap of 0.18 × mark size; never letter-space, outline or recolor the mark outside gold, white or ink.

## Components

- The site ships as page sections (HeroSky, SocialProof, Pain, About, HowItWorks, Features, Testimonials, InstagramFeed, Pricing, FAQ, FinalCTA, Footer) built from a few primitives: GoldCTA, GhostCTA, SectionLabel, H2, P, ChatPreview (VoiceMessage, TypingIndicator, CreatingSongIndicator), CountUp, PhoneModal, Cloud/CloudLayer and the logo parts.
- The component cards here are those primitives and each card pattern from the sections, hand-written as static HTML from `lp-sections.jsx` with the exact values. There is no bundle: the source is JSX compiled by Babel in the browser and was not built.
- `GhostCTA` is defined in the source but not placed on the page (build v=20260828b): its card exists for completeness and its label is illustrative, not site copy. Every other label in the cards is quoted from the page.
- Not carried over: the animated sky (sun, rays, cloud drift), the intro overlay, the UGC video carousel, the Instagram feed (needs the `/api/instagram` fetch) and the audio waveform decoding. The page section props (`accent`, `isDesktop`) are documented in each README.
