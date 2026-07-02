# Katya Ivshina — Brand System

> Master brand prompt. Read this in full before building any carousel, slide, graphic, or
> long-form post. Everything below is grounded in the real @katya.ivshina account
> (80.6K followers, 174 posts): warm film photography, collegiate settings, red-orange hair,
> cream slip dresses, the signature cherry-red patent heels, and a witty, candid,
> smart-girl-who-doesn't-take-herself-too-seriously voice.

---

## Element 01 — Colour system

A warm, near-monochrome paper base lifted by one unmistakable signature: cherry-red
(the patent heels). Backgrounds are always light and warm. Reference colours **by name**, not hex.

| Name        | Hex       | Role                                                                 |
|-------------|-----------|----------------------------------------------------------------------|
| **Paper**   | `#F5F2EC` | Primary background. The default for ~90% of slides.                   |
| **Linen**   | `#EBE5D9` | Secondary background. Cards, alternating slides, callout panels.     |
| **Ink**     | `#1F1B16` | Primary text. Warm near-black, never pure `#000`.                    |
| **Stone**   | `#6A6357` | Muted text, labels, step numbers, captions. (Darkened for AA — see below.) |
| **Border**  | `#DBD3C5` | Decorative hairlines, dividers, card outlines (1px). Not a meaning carrier. |
| **Cherry**  | `#B5302A` | Signature accent. The red heels. Darkest accent. Emphasis, one element/slide. |
| **Clay**    | `#9B7B57` | Warm secondary accent. Mid value. Underlines, soft highlights. Large text only. |
| **Amber**   | `#D89B4A` | Special accent — golden-hour glow. Lightest accent. Decorative only, never text. |

**Rules**
- Cherry is a spice, not a base. One cherry element per slide, maximum.
- Never put body text on Cherry, Clay, or Amber — only short labels or single words.
- Dark slides are the rare exception (see hook slides below), never the default.
- Amber and Clay should never appear on the same slide as a large block of Cherry; pick one warm accent per slide.

### Accessibility / Colorblind-safe

The three warm accents (Cherry, Clay, Amber) all collapse toward similar muddy
yellow-browns under red-green colour vision deficiency (protanopia/deuteranopia), so they are
separated by **lightness/value**, not hue alone, and colour is never the sole carrier of meaning.

**Grayscale (CVD) value ladder.** The accents are ordered by WCAG relative luminance so they stay
distinguishable when hue is removed — a reliable proxy for protan/deutan/tritan distinguishability:

| Pair                | Luminance contrast | Distinguishable in grayscale? |
|---------------------|--------------------|-------------------------------|
| Cherry → Clay       | 1.57 : 1           | Yes (Cherry is clearly darker) |
| Clay → Amber        | 1.63 : 1           | Yes (Amber is clearly lighter) |
| Cherry → Amber      | 2.55 : 1           | Yes (strong separation)        |

Order, darkest to lightest: **Cherry** (deep red) → **Clay** (mid brown) → **Amber** (light gold).
Under deuteranopia Cherry reads as dark brown, Clay as tan, Amber as pale gold; under tritanopia the
hues shift but the same light-to-dark ordering holds, so any two are still told apart by value.

**WCAG AA contrast (text vs background), measured:**

| Foreground | Background | Ratio    | Verdict                                  |
|------------|------------|----------|------------------------------------------|
| Ink        | Paper      | 15.1 : 1 | ✅ AAA (all text sizes)                   |
| Ink        | Linen      | 13.4 : 1 | ✅ AAA                                    |
| Stone      | Paper      | 5.3 : 1  | ✅ AA body                                |
| Stone      | Linen      | 4.7 : 1  | ✅ AA body                                |
| Cherry     | Paper      | 5.5 : 1  | ✅ AA body                                |
| Paper      | Cherry     | 6.1 : 1  | ✅ AA body (white-on-Cherry for buttons)  |
| Clay       | Paper      | 3.5 : 1  | ✅ AA large text only (≥24px / ≥18.66px bold) |
| Amber      | Paper      | 2.2 : 1  | ❌ never use as text — decorative glow only |

**Usage rules**
- **Colour is paired, never alone.** Every colour cue is reinforced by text, shape, icon, weight,
  or position (e.g. links are underlined *and* Clay; an "important" tag has a label *and* a Cherry
  dot; chart series get direct labels, not just a legend swatch).
- **Stone** was darkened from `#8C8478` to `#6A6357` so muted/label text clears AA body (4.5:1) on
  both Paper and Linen.
- **Clay** is for underlines and large headings/numbers, not body-size links. When Clay marks a
  link, keep the underline so the link survives without colour.
- **Amber** never carries text or thin lines; it is a soft golden-hour wash only.
- Cherry and Stone sit at nearly the same luminance, so a red-green viewer cannot reliably separate
  Cherry *text* from Stone *text* by colour. Distinguish them by role and typographic hierarchy
  (size/weight/position), never by hue alone.
- One warm accent per slide (see Rules above) — this also means a CVD viewer is never asked to
  tell Cherry, Clay, and Amber apart simultaneously.

---

## Element 02 — Typography pairing

A warm serif for headings, a clean grotesque for body — already the house pairing on the site.

- **Heading — `Fraunces`** (Google Fonts). Soft, optical, slightly literary. Use light weights
  (200–300) at large sizes; italics for the emphasised word.
- **Body — `Inter`** (Google Fonts). Neutral, legible, modern. Weights 300–500.

```
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,200..400&family=Inter:wght@300;400;500&display=swap');
```

**Size scale (1080×1350 carousel slide)**

| Token         | Font / weight        | Size      | Use                                       |
|---------------|----------------------|-----------|-------------------------------------------|
| Display       | Fraunces 200, italic accent | 88–120px | Cover slide hook, big numbers.      |
| Heading       | Fraunces 300         | 52–68px   | Slide titles.                             |
| Subhead       | Inter 400            | 30–34px   | Supporting line under a heading.          |
| Body          | Inter 400            | 26–30px   | Paragraph copy. Keep to ~3 short lines.   |
| Label / step  | Inter 500, tracked   | 16–18px   | `ELEMENT 01`, `STEP 02`, kickers. Uppercase, `letter-spacing: 0.12em`. |

**Rules**
- One heading typeface, one body typeface. Never introduce a third.
- Headings use tight tracking (`-0.02em`); labels use wide tracking (`+0.12em`), uppercase, Stone.
- Italicise the *one* word that carries the emotion, the way the site sets `Ivshina`.

---

## Element 03 — Aesthetic direction

**Warm 35mm film, golden-hour, collegiate-editorial.** Pinterest-soft but smart — the visual
world of someone who reads in a library and shoots on a Fujifilm.

- **Light:** natural, directional, warm. Long golden-hour shadows. Never flat studio flash.
- **Setting:** classical/collegiate architecture — columns, brick, arched doors, ivy, manicured
  gardens, libraries — mixed with candid life (the Tube, the beach, a city street).
- **Texture:** subtle film grain over everything (see Element 06). Tactile, not flat.
- **Shape:** generous margins, restrained rounded corners (8–12px on cards), lots of Paper
  breathing room. Editorial, not busy.
- **Motifs to lean on:** the cherry-red patent heels, cream/white slip dresses, black leather
  coats, the diploma, red-orange hair against warm stone.
- **Composition:** asymmetric, one strong focal point, type set generously into negative space.

**Avoid:** dark backgrounds as default, neon, hard drop shadows, stock-photo gloss, clip-art
icons, heavy gradients, cluttered grids, cool/blue colour casts.

---

## Element 04 — Tone & content rules

Voice: **witty, candid, a little self-deprecating, quietly brilliant.** STEM meets creative.
She is the friend who got into Harvard and will still tell you the embarrassing part. Empowering
for students, immigrants, and women in STEM — without ever being a motivational poster.

**How copy should feel**
- Hooks are conversational and lowercase, built like her real captions:
  *"this is the most expensive thing i'm wearing today"*, *"studying until he texts me back:"*,
  *"the PhD dropout glow-up effect is real"*, *"pov: you sneak into MIT's sailing class"*.
- Lead with the relatable or the surprising; let the credentials land as the twist, not the boast.
- Translate any technical idea into plain language and a real-life stakes. Smart, never academic.
- Warm and direct. Short sentences. One idea per slide.

**Hard rules**
- **Never use em dashes (—).** Use a period, a comma, or a line break instead.
- Never lecture, never use corporate or "thought-leader" voice, never humble-brag earnestly.
- No jargon without an immediate plain-English translation.
- No hashtag walls inside slides; no dark default backgrounds; no exclamation-point spam.
- Credentials (Princeton, Harvard, Apple ML, NSF) appear as casual fact or punchline, never a résumé.
- Last slide is the only place the full brand/handle/logo appears (see Element 05).

**Content pillars** (from her story highlights): `dance` · `photoshoots` · `SF / tech` ·
`girl talk` · `q&a: harvard` · `not a dj` · `unicycle`. Most carousels ladder up to one of these.

---

## Element 05 — Brand identity

- **Name:** Katya Ivshina
- **Handle:** `@katya.ivshina` (Instagram + Threads)
- **Link:** `hoo.be/katya.ivshina`
- **Pronouns:** she/her/hers
- **One-line:** *Mathematician & Storyteller*
- **Long descriptor:** Princeton & Harvard math · Apple ML · turning a decade of science into
  dance, photography, film, and modeling.
- **Tagline options (derive from "mathematician & storyteller"):**
  - *Mathematician & storyteller.*
  - *Proof by storytelling.*
  - *From the lab to the lens.*

**Logo treatment**
- Wordmark: `Katya Ivshina` set in **Fraunces 300**, with `Ivshina` in italic — matching the site's
  hero. No icon or monogram required.
- **Appears on the last slide only.** Bottom-left or centered, small, in Ink on Paper, with the
  handle `@katya.ivshina` in the Label style (Inter 500, tracked, Stone) directly beneath.
- Never stretch, recolour to Cherry, add effects, or place the wordmark over a busy photo.

---

## Element 06 — Background texture

Warm paper grain generated inline with SVG `feTurbulence` — no external files. Layer it at low
opacity over the Paper/Linen background so slides feel tactile, like printed matter.

```html
<svg class="grain" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
  <filter id="paperGrain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise"/>
    <feColorMatrix in="noise" type="saturate" values="0"/>
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.06"/>  <!-- grain strength: 0.04–0.08 -->
    </feComponentTransfer>
  </filter>
  <rect width="100%" height="100%" filter="url(#paperGrain)"/>
</svg>
```

```css
.grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: multiply;   /* sits into the Paper, doesn't lighten it */
  opacity: 0.5;
  z-index: 1;
}
```

**Rules**
- Grain is a whisper: `feFuncA` slope `0.04–0.08`. If you can read it as texture, it's too strong.
- Use `baseFrequency` around `0.85–0.95` for fine paper; lower (`0.5`) for a softer, larger grain.
- Keep all content above the grain layer (`z-index` ≥ 2).
- Optional: a faint Amber radial glow in one corner to mimic golden-hour falloff, under the grain.

---

## Slide recipe (quick reference)

1. **Background:** Paper (or Linen for variety) + grain overlay.
2. **Kicker:** Label style, uppercase, Stone, top-left (`STEP 01`, pillar name, etc.).
3. **Heading:** Fraunces, Ink, italicise the emotional word.
4. **Body:** Inter, max ~3 short lines, generous margins.
5. **Accent:** at most one Cherry element (a word, an underline, a small shape).
6. **Cover hook:** conversational, lowercase, relatable; credential as the twist.
7. **Last slide only:** Fraunces wordmark + `@katya.ivshina`.
8. **Never:** em dashes, dark default backgrounds, third typeface, more than one warm accent per slide.
