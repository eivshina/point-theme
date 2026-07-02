# Katya Ivshina — Brand System (Y2K / Indie Sleaze)

> Master brand prompt for the **after-dark, Y2K alter-ego**. Read this in full before building any
> carousel, slide, sticker, flyer, or cover graphic in this style. It is the same person and the same
> brain as the collegiate film system (`brand-system.md`) — same wit, same math-girl punchlines — but
> the visual world is **direct-flash digicam, glitter, grain, and tabloid collage**. Grounded in the
> mood boards in `assets/`: the "Glitter, Chaos, Repeat" newsprint collage, low-rise denim, tartan
> over baggy jeans, layered gold chains, leopard fur, red leather, fishnets, blown-out flash party
> photos, and bleach-blonde-with-dark-roots.
>
> **Which system to use:** soft, warm, golden-hour, library, cherry heels → use `brand-system.md`.
> Loud, night, flash, glitter, plaid, "why are you like this" energy → use **this** file.
> Never blend the two in a single carousel. Pick a lane per post.

---

## Element 01 — Colour system

Two bases, on purpose. **Newsprint** (light, tabloid/zine) is the default for readable carousels;
**Flashout** (dark, night-with-flash) is the party mode. One signature spice runs through both:
**Gloss** (lip-gloss magenta). Reference colours **by name**, not hex.

### Light base — "Newsprint"

| Name         | Hex       | Role                                                                       |
|--------------|-----------|----------------------------------------------------------------------------|
| **Newsprint**| `#EAE3D2` | Primary light background. Aged tabloid paper. The default for ~70% of slides. |
| **Pulp**     | `#DCD2BC` | Secondary light background. Cards, clippings, alternating panels.          |
| **Ink**      | `#141013` | Primary text on light. Warm near-black, never pure `#000`.                 |
| **Static**   | `#5C5650` | Muted text, captions, datestamps, labels on light. (TV-static gray.)       |
| **Tape**     | `#CFC6B2` | Hairlines, torn-edge shadows, card outlines (1px). Not a meaning carrier.  |

### Dark base — "Flashout"

| Name         | Hex       | Role                                                                       |
|--------------|-----------|----------------------------------------------------------------------------|
| **Flashout** | `#0F0D10` | Primary dark background. Night, near-black with a violet bruise.           |
| **Smoke**    | `#1C181F` | Secondary dark surface. Cards/panels on dark.                              |
| **Bleach**   | `#F4F0F2` | Primary text on dark. Blown-flash off-white (bleach-blonde white).         |
| **Ash**      | `#A8A2AA` | Muted text, captions, datestamps on dark.                                  |

### Accents (Y2K signatures)

| Name         | Hex       | Pulled from            | Role                                                            |
|--------------|-----------|------------------------|-----------------------------------------------------------------|
| **Gloss**    | `#E5147E` | the pink tee / lip gloss | **Signature spice.** Magenta. Headlines, stickers, one loud hit. |
| **Tartan**   | `#B11E2F` | the plaid / red leather / beret | Deep red. Emphasis, stamps, "EXCLUSIVE" tags. Works as text on light. |
| **Acid**     | `#E3C200` | the leopard fur / yellow cap | Bright gold-yellow. Glitter highlights, stars. Text on **dark** only. |
| **Denim**    | `#3B5C86` | the low-rise jeans     | Faded blue. Cool counter-accent, links, tags. Works as text on light.   |
| **Chrome**   | `#C7C9CE` | the glitter / metallics | Silver. Use as a **gradient**, never flat. Decorative metal only, never text. |

**Rules**
- **Clash on purpose, but cap it.** Max **two** accents per slide, and they should fight a little
  (Gloss + Acid, Tartan + Denim). One of them is always the loud lead; the other is a supporting hit.
- Gloss is the through-line. If a slide needs one accent, make it Gloss.
- **Chrome is always a gradient** (silver `#EDEFF2` → `#9DA1AA` → `#EDEFF2`), used on type fills,
  stickers, and rules — never as a flat block, never as body text.
- **Acid never carries text on a light base** (too bright). It is text only on Flashout/Smoke, or a
  glitter/star decoration on light.
- Dark slides are **allowed and encouraged** here (this is the only system where that is true).

### Accessibility / Colorblind-safe

Loud does not mean illegible. Colour is **never the sole carrier of meaning** — every cue is paired
with text, weight, shape, a sticker, or position. Accents are separated by **lightness/value**, not
hue alone, so they survive red-green and blue-yellow colour-vision deficiency and pure grayscale.

**WCAG AA contrast (text vs background), measured:**

| Foreground | Background | Ratio    | Verdict                                         |
|------------|------------|----------|-------------------------------------------------|
| Ink        | Newsprint  | 14.7 : 1 | ✅ AAA (all text sizes)                          |
| Ink        | Pulp       | 12.6 : 1 | ✅ AAA                                           |
| Static     | Newsprint  | 5.6 : 1  | ✅ AA body                                       |
| Tartan     | Newsprint  | 5.3 : 1  | ✅ AA body                                       |
| Denim      | Newsprint  | 5.3 : 1  | ✅ AA body                                       |
| Gloss      | Newsprint  | 3.5 : 1  | ⚠️ AA **large text only** (≥24px / ≥18.66px bold) |
| Acid       | Newsprint  | 1.4 : 1  | ❌ never text on light — glitter/decoration only  |
| Bleach     | Flashout   | 17.2 : 1 | ✅ AAA                                           |
| Ash        | Flashout   | 7.6 : 1  | ✅ AA body                                       |
| Acid       | Flashout   | 11.0 : 1 | ✅ AA body (gold text on night)                  |
| Gloss      | Flashout   | 4.4 : 1  | ⚠️ AA **large text only**; use Bleach for body on dark |

**Value ladder (grayscale / CVD).** Darkest → lightest: **Tartan ≈ Denim** → **Gloss** → **Acid**.
- **Tartan and Denim sit at the same luminance.** Red-green viewers still tell them apart by the
  blue-yellow axis, but in pure grayscale they merge. So **never** use Tartan vs Denim as the *only*
  difference between two things — pair each with a label, shape, or position.
- Body copy is always Ink (on light) or Bleach (on dark). Accents are for headlines, stickers,
  short labels, and decoration — not paragraphs.

---

## Element 02 — Typography pairing

Two core faces, plus one **restricted sticker face**. Discipline is what keeps the chaos from
becoming noise: clean type carrying messy imagery.

- **Heading / Masthead — `Playfair Display`** (Google Fonts). High-contrast Didone, the tabloid
  nameplate look from the "Glitter, Chaos, Repeat" collage. Use for big headlines and the masthead;
  italics for the one emotional word.
- **Body & labels — `Inter`** (Google Fonts). Plain modern grotesque — the indie-sleaze "just use
  Helvetica" instinct, made legible. Weights 300–600. Also carries tracked uppercase kickers.
- **Sticker face (restricted) — `Anton`** (Google Fonts). Ultra-bold condensed. Used **only** inside
  sticker/stamp graphics (`SPOTTED`, `EXCLUSIVE`, datestamps, price tags), rotated and small.
  **Never** running text, never a paragraph, never a slide title on its own.

```
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500..900;1,500..900&family=Inter:wght@300;400;500;600&family=Anton&display=swap');
```

**Size scale (1080×1350 carousel slide)**

| Token         | Font / weight                  | Size      | Use                                          |
|---------------|--------------------------------|-----------|----------------------------------------------|
| Masthead      | Playfair Display 800, italic accent | 96–132px | Cover nameplate / big tabloid headline.    |
| Heading       | Playfair Display 600           | 56–72px   | Slide titles.                                |
| Subhead       | Inter 500                      | 30–34px   | Supporting line under a heading.             |
| Body          | Inter 400                      | 26–30px   | Paragraph copy. Keep to ~3 short lines.      |
| Label / kicker| Inter 600, tracked, uppercase  | 16–18px   | `№01`, `WHY Y2K REFUSES TO DIE`. `letter-spacing: 0.14em`. |
| Sticker       | Anton, uppercase               | 18–40px   | Stamps/tags only, rotated −8° to +8°.        |

**Rules**
- Two core typefaces only; Anton is a graphic element, not a third text face.
- Masthead tracking is tight (`-0.02em`); kickers are wide (`+0.14em`), uppercase, Static/Ash.
- Italicise the *one* word that carries the emotion (mirrors `Ivshina` on the site).
- Headlines may be set in Chrome gradient or Gloss; body never is.

---

## Element 03 — Aesthetic direction

**Direct-flash digicam, glitter, grain, tabloid collage.** The visual world of a 2 a.m. point-and-shoot
and a zine made on a photocopier — maximal, tactile, a little broken on purpose.

- **Light:** hard, frontal **on-camera flash**. Blown highlights, deep falloff, sharp shadows,
  overexposed skin, occasional red-eye. The opposite of golden hour. Night and interiors.
- **Photo treatment:** heavy digicam grain/noise, slight motion blur, a corner **datestamp**
  (`09 21 2025`), washed contrast, flash vignette.
- **Layout:** **collage / cut-out / scrapbook / tabloid.** Torn-paper edges, halftone dots,
  photocopy texture, tape, staples, overlapping clippings, hand-circled details, rotated stickers.
  Intentional slight misalignment — off-grid, not sloppy.
- **Y2K motifs to lean on:** chrome/metallics, glitter, butterflies, stars, hearts, sparkles,
  rhinestones, layered gold chains, tartan/plaid, leopard, fishnets, baby tees, low-rise, trucker
  caps, burned CDs, flip phones, bleach-blonde-with-dark-roots.
- **Composition:** maximalist but anchored by one loud focal element; clean Inter type set into the
  noise so it stays readable.

**Avoid:** clean minimalism, all-pastel softness, soft golden-hour film blur (that is the *other*
brand), corporate gloss, perfectly aligned grids, flat shadowless material design, stock-photo polish,
clip-art icons.

---

## Element 04 — Tone & content rules

Voice: **loud, ironic, chaotic-good — the party girl who also reads the theory.** Tabloid-headline
energy with a self-aware wink. Same brain as the collegiate brand (Princeton/Harvard math, Apple ML),
just yelling it across a flash-lit room. Empowering for students, immigrants, and women in STEM, told
like gossip, never like a TED talk.

**How copy should feel**
- **Two registers, stacked:** ALL-CAPS tabloid headline + lowercase candid caption.
  *"WHY Y2K REFUSES TO DIE"* over *"and why i can't stop dressing like it's 2003"*.
- Tabloid framing is welcome: `EXCLUSIVE`, `SPOTTED`, `SCANDAL`, `№01`, `PART ONE OF ∞`.
- Lead with the relatable or the chaotic; let the credentials land as the twist, not the boast.
- Translate any technical idea into plain language with real stakes. Smart, never academic.
- Short. Punchy. One idea per slide.

**Hard rules**
- **Never use em dashes (—).** Use a period, a comma, or a line break. (House rule, both systems.)
- Dark backgrounds are allowed here. Glitter and grain are allowed. Exclamation points are allowed
  **in headlines** — not spammed across body copy.
- Credentials (Princeton, Harvard, Apple ML, NSF) appear as casual fact or punchline, never a résumé.
- No jargon without an immediate plain-English translation.
- No hashtag walls inside slides.
- Last slide is the only place the full brand/handle/logo appears (see Element 05).

**Content pillars** (same person, louder framing): `nights out` · `y2k & fashion` · `dance` ·
`photoshoots` · `girl talk` · `q&a: harvard` · `not a dj`. Most carousels ladder up to one of these.

---

## Element 05 — Brand identity

- **Name:** Katya Ivshina
- **Handle:** `@katya.ivshina` (Instagram + Threads)
- **Link:** `hoo.be/katya.ivshina`
- **Pronouns:** she/her/hers
- **System name (internal):** *Glitter, Chaos, Repeat* — the Y2K/indie-sleaze mode.
- **One-line:** *Mathematician & Storyteller* (unchanged across systems).
- **Tagline options (this mode):**
  - *Glitter, chaos, repeat.*
  - *Proof by chaos.*
  - *Math after midnight.*

**Logo treatment**
- Wordmark: `Katya Ivshina` set in **Playfair Display 600**, with `Ivshina` in italic — same wordmark
  as the collegiate system, so the person stays recognisable across both worlds.
- **Appears on the last slide only.** In Ink on Newsprint, or Bleach on Flashout, with the handle
  `@katya.ivshina` in the Label style (Inter 600, tracked) directly beneath.
- The wordmark may sit on a small torn-paper or sticker panel, but is **never** distorted, never set
  in Anton, never recoloured to an accent, never placed over a busy photo without its panel.

---

## Element 06 — Background texture

Texture is the whole point here — flat is wrong. Layer these inline with SVG (no external files).
Stack order, back to front: base colour → halftone dots (light mode) → grain → flash vignette →
optional glitter speckle → content.

**1. Digicam grain (stronger than the collegiate whisper):**

```html
<svg class="grain" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
  <filter id="digiGrain">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" result="noise"/>
    <feColorMatrix in="noise" type="saturate" values="0"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.16"/></feComponentTransfer> <!-- 0.12–0.20 -->
  </filter>
  <rect width="100%" height="100%" filter="url(#digiGrain)"/>
</svg>
```

**2. Halftone / newsprint dots (light mode only):**

```html
<svg class="halftone" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true">
  <defs>
    <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1" fill="#141013"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#dots)"/>
</svg>
```

**3. Flash vignette (dark mode): a hot centre falling to black, mimicking on-camera flash.**

```css
.flash {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  background: radial-gradient(120% 90% at 50% 38%, rgba(255,255,255,0.22) 0%, rgba(15,13,16,0) 55%);
}
```

```css
.grain     { position:absolute; inset:0; pointer-events:none; mix-blend-mode:overlay; opacity:0.55; z-index:2; }
.halftone  { position:absolute; inset:0; pointer-events:none; mix-blend-mode:multiply; opacity:0.07; z-index:1; }
```

**Rules**
- Grain here is **felt**, not whispered (`feFuncA` slope `0.12–0.20`). Indie sleaze is noisy.
- Halftone dots stay faint (`opacity 0.05–0.09`) and **light-mode only** — they read as newsprint, not moiré.
- **Glitter** = scattered small Chrome/Acid dots and 4-point sparkles, randomly rotated and sized,
  clustered near the focal point. Decorative only, never over body text.
- Keep all content above the texture stack (`z-index ≥ 3`). Type must clear AA on the **base colour**,
  measured before grain — grain reduces contrast, so leave headroom.

---

## Slide recipe (quick reference)

1. **Pick a base:** Newsprint (readable, default) or Flashout (party). Add grain; add halftone if light, flash vignette if dark.
2. **Kicker:** Label style, uppercase, tracked, top-left (`№01`, `EXCLUSIVE`, pillar name).
3. **Headline:** Playfair Display, ALL-CAPS tabloid energy; italicise the emotional word. May be Chrome or Gloss.
4. **Caption:** lowercase candid line under the headline, Inter, Static/Ash.
5. **Body:** Inter, Ink or Bleach, max ~3 short lines.
6. **Accents:** at most two, clashing on purpose; one loud lead (default Gloss) + one support.
7. **Collage:** torn edges, tape, a rotated Anton sticker, a datestamp in the corner, hand-circled detail.
8. **Last slide only:** Playfair wordmark + `@katya.ivshina` on a small torn-paper/sticker panel.
9. **Never:** em dashes, a third text face, Anton as running text, Acid as text on light, more than two accents, grain so heavy it kills legibility.
