# Design System — Qur'anic Truth-Seeking & Interpretation-Evaluation App

**Version 1.0 · Publication Edition**
**Companion document to:** *Qur'anic Truth-Seeking & Interpretation-Evaluation Framework v2.1*
**Status:** Implementation-Ready
**Audience:** Designers, frontend engineers, scholarly reviewers, and AI agents producing UI for this system

---

## Preface

This document specifies the visual and interaction language of an information system for evaluating interpretive claims about the Qur'anic text. It is the design counterpart to the framework specification — where the framework establishes *what* the system measures (lexical fidelity, transmitted support, scholarly precedent, divergence between text and tradition), this document establishes *how* those measurements appear to the people using them.

The design language has three commitments and they appear, in some form, in every section that follows.

**The first is restraint.** A scholarly tool that calls attention to its own surface erodes trust in its substance. Every color, every shadow, every animation in this system has to earn its place by carrying meaning. Decoration without semantic weight is, here, a defect.

**The second is attention discipline.** The interface must give the user's eye somewhere to rest and, when needed, somewhere unmistakable to go. This is achieved by keeping most of the interface in a quiet register of warm neutrals and reserving color, weight, and motion for the moments when the system needs to signal — a divergence warning fires, a citation fails verification, the text itself directs to external clarification. The contrast between quiet and loud is what makes the loud legible.

**The third is warmth.** Research tools tend to feel cold; consumer apps tend to feel insufficiently serious for religious scholarship. The reconciliation is to let warmth live in the *surfaces and typography* — cream paper, ink-warm text, a serif body voice, generous spacing that breathes — while precision lives in the *data treatment* — exact monospace, deterministic color, hairline rules, source attribution on every claim. The two registers coexist by being kept categorically distinct.

The document is intended to be read end-to-end at least once. After that, it functions as a reference. Each section opens with a brief philosophy paragraph before its specifications; readers in a hurry can skim those paragraphs to find what they need, but the paragraphs are where the design language is actually taught. The specifications follow.

---

## Table of Contents

1. **Visual Theme & Atmosphere** — the system's overall mood and signature characteristics
2. **Attention Architecture** — quiet versus loud, focus dissolution, semantic color discipline
3. **Color Palette & Roles** — full day and night palettes with semantic data layer
4. **Typography Rules** — Latin-script voices, scale, hierarchy, opentype features
5. **Bilingual Typography** — Arabic font stack, RTL/LTR mixing, vocalization rendering
6. **Reading Surface Design** — verse reader, content max-widths, focus mode
7. **Layout Principles** — spacing scale, grid, whitespace philosophy, radius scale
8. **Component Stylings** — buttons, cards, scores, tier badges, evidence trails, warnings, graph
9. **Depth & Elevation** — shadows, borders, layering in both day and night modes
10. **Interaction & Motion** — hover, focus, transitions, the restraint discipline
11. **Share Surface Design** — card archetypes, aspect ratios, OG link signatures, bookmarks
12. **Brand Identity & Iconography** — wordmark, colophon device, icon system
13. **Dark Mode** — the night system, consolidated
14. **Responsive Behavior** — breakpoints, collapsing strategy, touch targets
15. **What This System Prohibits** — explicit constraints
16. **Agent Prompt Guide** — operational reference for AI-assisted UI generation

**Appendix A:** Token reference (full color, type, spacing, radius tables)
**Appendix B:** Glossary of design terms used in this document

---

## 1. Visual Theme & Atmosphere

The system is a study in *warm minimalism in service of dense information*. The day palette is built on a warm off-white canvas (`#f2f1ed`) with a deeply warm near-black ink (`#26251d`) — not pure black, not neutral gray, but a near-black with a yellow-brown undertone that evokes ink on aged paper. The night palette inverts this relationship without sterilizing it: a warm charcoal (`#1a1814`) with parchment text (`#e8e6e0`). Both palettes share the same emotional register; they are the same room in different light, not two different rooms.

Three Latin-script typographic voices carry the interface: **CursorGothic** at display sizes for headings and primary numerical readouts (compressed, engineered, unmistakably the system's voice); **jjannon** at body sizes for editorial and explanatory prose (literary, calm, designed for sustained reading); **berkeleyMono** for technical metadata, source identifiers, and verse references (unambiguous, precise, deferential to its content). A fourth voice — **Amiri** — carries vocalized Qur'anic Arabic and is treated with the greatest care of all four, since the primary text is the system's reason for existing.

Semantic color is reserved for information the system needs you to see. The brand accent is a deep teal (`#01696F`) carried over from the framework's Section 5f specification for the knowledge graph's primary layer. This teal does *not* appear ambiently; it is reserved for active states, interactive affordances, and the structural Qur'anic layer of the knowledge graph. The divergence color system (Green / Yellow / Orange / Red / Gray) is its own dedicated palette, used only for scoring outcomes, never for decoration. Tier badges (1–7) and confidence bands (High / Medium-High / Medium / Low-Medium / Low / Uncertain) each have their own restrained color logic. These three semantic palettes — brand accent, divergence, evidential — never mix.

Borders use perceptually uniform `oklab()` color space at low alpha values (0.08, 0.15, 0.4 in the day palette; equivalent perceptual values in the night palette) to produce edges that hold consistent across surfaces of different tones. Shadows are diffuse and atmospheric in day mode (large blur, moderate opacity); in night mode they are largely replaced by inner glows and border emphasis, since dark shadows are nearly invisible on dark backgrounds.

The spacing system is built on an 8px base with sub-8px micro-increments for icon and text alignment, but extends meaningfully *upward* — to 96, 128, 160, and 192px — because the reading surface for primary verse content needs more breathing room than UI chrome typically demands. Content max-widths are content-aware: 45ch for Arabic verse text, 65ch for English translation, 72ch for scholarly prose, full-bleed for tables and graphs.

### Signature Characteristics

The following are the design language's irreducible features. Every screen built in this system should be recognizable by the presence of most of these and the absence of competing patterns.

- Warm cream day background (`#f2f1ed`) and warm charcoal night background (`#1a1814`), never pure white or black for primary surfaces
- Deep teal accent (`#01696F` day, `#4ba5a8` night) used sparingly and only for interactive or structural-Qur'anic meaning
- CursorGothic with size-proportional negative letter-spacing for display type
- jjannon serif with `"cswh"` (contextual swash) for sustained body reading
- berkeleyMono for all source identifiers, verse references (`2:255:4`), tier labels, and provenance metadata
- Amiri or fallback Noto Naskh Arabic for vocalized Qur'anic Arabic with explicit RTL handling
- oklab-space borders at 0.08 / 0.15 / 0.4 alpha for perceptually uniform edges
- Hairline (1px or 0.5px at low oklab alpha) rules in place of heavy dividers
- Three semantic color palettes (brand, divergence, evidential) kept categorically separate
- Generous sub-8px spacing for micro-alignment and 96–192px spacing for reading surfaces
- Restrained motion: 150ms color transitions, no decorative animation, no bouncing or sliding
- Static light-mode rendering for all share-card output regardless of user theme
- Trust signals (review state, source attribution, confidence) treated as design primitives, not afterthoughts

---

## 2. Attention Architecture

This section is new to the design system tradition this document descends from, but it is the most important section in the document. Every other section depends on the principle stated here.

### 2.1 The Quiet/Loud Principle

The interface operates in two registers. The **quiet register** is the default state of the system: warm neutrals, oklab borders at low alpha, monochrome typography, no shadows beyond level-1 borders, no animation. Most of the interface most of the time lives here. The **loud register** is the system's vocabulary for getting attention: the brand teal, the divergence color bands, the tier badges, semantic shadows at level 2 or higher, and the few motion states the system permits. These registers do not blend. A surface is in one register or the other.

The discipline this enforces: **color is never decorative.** If teal appears, it means an interactive affordance, an active state, or a Qur'anic-structural graph node. If a divergence color appears, it means a score outcome. If a tier badge appears, it means an evidential tier. The eye learns these meanings within minutes of using the app and trusts them for the lifetime of the user's relationship with the tool. That trust is the asset; protecting it is why the registers must not bleed into each other.

A practical consequence: marketing-style "accent everywhere" coloring is forbidden. The quiet register carries 80% of pixel area on a typical screen. Designers and AI agents producing UI in this system should treat any addition of color as a positive claim that needs justification.

### 2.2 Focus Dissolution

The second attention pattern is *dissolution*. UI chrome that is not currently relevant should fade toward the background until invoked. This applies to:

- Secondary navigation (visible at low contrast until hovered or focused)
- Metadata footers on claim cards (visible at 55% text opacity until the card is in focus)
- Provenance footers on graph nodes (collapsed by default, expand on click)
- Action buttons on inactive cards (rendered at 40% opacity until the parent card is hovered)
- Toolbars and rails (slide to a thin edge when the reading surface is scrolled past a threshold)

Dissolution is a quiet pattern. Elements should fade *toward* the background, not animate. The transition is 150ms ease, color and opacity only — no transform, no slide, no scale. The user's eye should never be pulled by the dissolution itself; it should simply find that the chrome has receded when attention turns elsewhere.

The opposite operation — *crystallization* — happens on hover or focus and uses the same 150ms transition, restoring full opacity and contrast. Crystallization is not a flourish; it is the chrome confirming "yes, I'm here, you can use me."

### 2.3 Semantic Color Discipline

The system maintains four color palettes, each with a strict purpose:

| Palette | Purpose | Where It Appears |
|---|---|---|
| **Surface** | Ambient warmth, content backgrounds, structural neutrals | Every screen, ambient |
| **Brand (teal)** | Interactive affordances, active states, Qur'anic graph layer | Sparingly, only with semantic justification |
| **Divergence** | Score outcomes (Green/Yellow/Orange/Red/Gray) | Score panels, divergence warnings, NBFI alternatives |
| **Evidential** | Tier badges (1–7), confidence bands, review states | Tier indicators, provenance footers, claim metadata |

These palettes do not mix. A button is teal because it is interactive, never because teal looks nice next to a yellow divergence band. A tier-2 badge is its assigned color because it is tier-2, never tinted to harmonize with surrounding decoration. When a screen has multiple semantic colors visible — which happens whenever a scored claim is on screen — they coexist without harmonization because their meanings are unrelated.

This is unfamiliar to designers trained on consumer-app palette harmony. Sit with it. It is the price of attention discipline.

### 2.4 Attention Hierarchy on a Single Screen

On any screen showing scored content, the eye should travel in this order:

1. **The Qur'anic text itself** — primary, central, generously spaced, typographically authoritative
2. **The user's submitted interpretation or current claim under review** — secondary, clearly distinct from the primary text
3. **The score panel** (TLS, ITS, divergence indicator if triggered) — present, scannable, but recessive until attended to
4. **The evidence trail and provenance** — visible at low contrast, expandable to detail
5. **Navigation, action, and meta-chrome** — dissolved by default

If a divergence warning, TREC flag, or Citation Verification Gate alert is active, that signal interrupts this hierarchy and demands position 2 — directly after the primary text. These interruption signals are the only loud elements the system permits to outrank the user's own claim in visual priority, and they are explicitly designed to do so. Their visual treatment is specified in §8.

---

## 3. Color Palette & Roles

The full token table is in Appendix A. This section explains the *roles* each color plays and the discipline governing their use.

Every color in the system has a `day` value and a `night` value declared at the same level. Components reference tokens, not raw hex values. The two palettes are not inversions of each other; each is independently tuned for legibility and emotional register in its own mode. This is the only honest way to do dark mode at publication grade.

### 3.1 Surface Palette (the quiet register)

The surface palette carries the ambient warmth of the system. It is the background against which all other colors appear and the typographic foundation for all text. In day mode it ranges from cream to warm taupe; in night mode from warm charcoal to nearly-black with a yellow-brown undertone.

| Token | Day Value | Night Value | Role |
|---|---|---|---|
| `surface-canvas` | `#f2f1ed` | `#1a1814` | Page background, primary surface |
| `surface-100` | `#f7f7f4` | `#221f1a` | Lightest elevated surface |
| `surface-200` | `#f2f1ed` | `#1a1814` | Default surface (same as canvas) |
| `surface-300` | `#ebeae5` | `#252220` | Subtle elevation, button defaults |
| `surface-400` | `#e6e5e0` | `#2c2926` | Card backgrounds, secondary surfaces |
| `surface-500` | `#e1e0db` | `#33302d` | Tertiary surfaces, deeper emphasis |
| `ink-primary` | `#26251d` | `#e8e6e0` | Primary text, headings |
| `ink-secondary` | `rgba(38, 37, 30, 0.72)` | `rgba(232, 230, 224, 0.78)` | Body text, secondary headings |
| `ink-muted` | `rgba(38, 37, 30, 0.55)` | `rgba(232, 230, 224, 0.62)` | Captions, metadata, dissolved chrome |
| `ink-faint` | `rgba(38, 37, 30, 0.35)` | `rgba(232, 230, 224, 0.42)` | Disabled state, deeply dissolved chrome |

The surface palette never shifts hue between day and night. Both modes carry the same yellow-brown undertone, which is what gives the system its "same room, different light" quality. A common mistake is to make night mode cooler (bluish charcoal) for "modernity"; this is forbidden in this system. Warmth is a brand commitment.

### 3.2 Brand Palette (teal)

Teal is the system's only brand accent and appears only with semantic meaning. It carries two distinct meanings that share the same color: (a) interactive affordances throughout the UI, and (b) the Qur'anic-structural layer of the knowledge graph (per framework Section 5f). The shared color is intentional: it signals to the user that the Qur'anic layer of the data and the affordances of the application share an identity — the system is *of* the text, not *about* it.

| Token | Day Value | Night Value | Role |
|---|---|---|---|
| `brand-primary` | `#01696F` | `#4ba5a8` | Primary affordance, active link, Qur'anic graph node |
| `brand-hover` | `#015057` | `#5fb5b8` | Hover state for interactive elements |
| `brand-subtle` | `rgba(1, 105, 111, 0.08)` | `rgba(75, 165, 168, 0.12)` | Hover background, active surface tint |
| `brand-border` | `rgba(1, 105, 111, 0.25)` | `rgba(75, 165, 168, 0.30)` | Borders for active/selected states |

The night value of teal is intentionally lighter and slightly desaturated (`#4ba5a8`) because saturated darks recede on dark backgrounds. The day value is deeper and more saturated. Both occupy the same emotional position in their respective palettes.

Teal is **never** used for: decorative emphasis, brand splash, large filled areas, gradients, or any element that does not carry the meaning of "interactive" or "Qur'anic structural." Violating this is the single fastest way to break the system's attention discipline.

### 3.3 Divergence Palette (score outcomes)

The divergence palette carries the framework's TLS/ITS color bands from Section 6b. It is used in three places only: score panels, divergence warnings, and NBFI alternative cards. Each color has a saturated *fill* variant and a low-alpha *tint* variant for backgrounds.

| Band | Day Fill | Day Tint | Night Fill | Night Tint | Meaning |
|---|---|---|---|---|---|
| Green | `#1f8a65` | `rgba(31, 138, 101, 0.10)` | `#5fc4a0` | `rgba(95, 196, 160, 0.14)` | Strong alignment (TLS ≥ 70, ITS ≥ 70) |
| Yellow | `#c08532` | `rgba(192, 133, 50, 0.10)` | `#e2a560` | `rgba(226, 165, 96, 0.14)` | Textually coherent, departs from tradition |
| Orange | `#cf6d2d` | `rgba(207, 109, 45, 0.10)` | `#e89564` | `rgba(232, 149, 100, 0.14)` | Tradition-dependent, text alone insufficient |
| Red | `#cf2d56` | `rgba(207, 45, 86, 0.10)` | `#e96b8a` | `rgba(233, 107, 138, 0.14)` | Unsupported / contradicted by both |
| Gray | `rgba(38, 37, 30, 0.55)` | `rgba(38, 37, 30, 0.06)` | `rgba(232, 230, 224, 0.55)` | `rgba(232, 230, 224, 0.08)` | Genuine interpretive gray zone |

These colors are tuned so that no two bands look similar at a glance, and each band's tint is unmistakably the same hue as its fill at smaller scales. The Red band is intentionally a warm crimson (`#cf2d56`) rather than a clinical red; this preserves the warm character of the system while still functioning as a clear negative signal. Yellow and Orange are deliberately distinct (different hue, not just different saturation) because they carry meaningfully different verdicts.

The night palette is uniformly lighter and slightly desaturated, following the same logic as the brand teal.

### 3.4 Evidential Palette (tiers and confidence)

The seven tiers from framework Section 3 each have a dedicated color, ordered to imply a gradient from Tier 1 (highest evidential strength, deepest brand teal) through Tier 7 (lowest, most attenuated). This palette appears almost exclusively on small *badges* — never on large surfaces. The colors are carefully muted so that a stack of tier badges in a long evidence list reads as a calm gradient rather than a Christmas tree.

| Tier | Day Value | Night Value | Meaning |
|---|---|---|---|
| 1 | `#01696F` | `#4ba5a8` | Qur'an explaining Qur'an |
| 2 | `#0f7a6b` | `#62b69e` | Authenticated Prophetic explanation |
| 3 | `#3a8761` | `#7cc090` | Major Companion tafsīr |
| 4 | `#6b8f4f` | `#9ec585` | Early Successor tafsīr |
| 5 | `#9c7a3a` | `#c5a570` | Classical compiled tafsīr |
| 6 | `#a06340` | `#cf9070` | Classical philology and lexicography |
| 7 | `#8a4a4a` | `#bd7a7a` | Modern scholarly analysis |

Confidence bands use a *separate* visual encoding — not color, but a small horizontal bar at fractional fill — to avoid competing with the tier color. High confidence is a 90–100% filled `ink-secondary` bar; Low confidence is a 20–35% filled bar. This is specified in §8.

### 3.5 Borders

Borders use perceptually uniform oklab color space. Three alpha levels cover the system's needs.

| Token | Day Value | Night Value | Role |
|---|---|---|---|
| `border-subtle` | `oklab(0.263 -0.002 0.012 / 0.08)` | `oklab(0.91 -0.002 0.012 / 0.08)` | Hairline rules, dissolved chrome |
| `border-default` | `oklab(0.263 -0.002 0.012 / 0.15)` | `oklab(0.91 -0.002 0.012 / 0.15)` | Standard card and container borders |
| `border-strong` | `oklab(0.263 -0.002 0.012 / 0.4)` | `oklab(0.91 -0.002 0.012 / 0.4)` | Active states, focused inputs, table rules |

For environments without oklab support, fall back to `rgba(38, 37, 30, alpha)` in day mode and `rgba(232, 230, 224, alpha)` in night mode at the same alpha values. The fallbacks are perceptually close though not identical.

---

## 4. Typography Rules

Typography is the dominant visual element of this system. Color is rationed; spacing is generous; the surface is mostly quiet. What carries the interface is type.

### 4.1 The Three Latin Voices

| Voice | Family | Role |
|---|---|---|
| Display / UI | CursorGothic | All headings, score numerals, button labels, tier badges, micro-labels |
| Body / Editorial | jjannon | Sustained reading, claim text, explanations, plain-language flag content |
| Technical / Mono | berkeleyMono | Verse references (`2:255:4`), source IDs, tier numerals, hashes, code |

Each voice has its own job. CursorGothic is the system's *signature* — compressed, engineered, the thing the eye recognizes from across the room. jjannon is the system's *prose* — calm, literary, the voice of explanation. berkeleyMono is the system's *evidence* — unambiguous, deferential, the voice of attribution.

These voices do not substitute for each other. A heading is never set in jjannon. Body text is never set in CursorGothic. A verse reference is never set in CursorGothic or jjannon. The discipline of voice assignment is what gives the interface its rhythm.

### 4.2 The Type Scale

The scale below is the *screen* scale. The *card* scale (for share output) is specified in §11 and is meaningfully different.

| Role | Voice | Size | Weight | Line Height | Letter Spacing | OpenType |
|---|---|---|---|---|---|---|
| Display Hero | CursorGothic | 72px | 400 | 1.10 | -2.16px | — |
| Display Large | CursorGothic | 56px | 400 | 1.12 | -1.40px | — |
| Section Heading | CursorGothic | 36px | 400 | 1.20 | -0.72px | — |
| Sub-heading | CursorGothic | 26px | 400 | 1.25 | -0.325px | — |
| Title Small | CursorGothic | 22px | 400 | 1.30 | -0.11px | — |
| Score Numeral | CursorGothic | 56px | 400 | 1.00 | -1.40px | tabular-nums |
| Score Numeral Compact | CursorGothic | 32px | 400 | 1.00 | -0.50px | tabular-nums |
| Body Serif Large | jjannon | 19.2px | 400 | 1.55 | normal | "cswh" |
| Body Serif | jjannon | 17.28px | 400 | 1.55 | normal | "cswh" |
| Body Serif Small | jjannon | 15.36px | 400 | 1.50 | normal | "cswh" |
| UI Body | CursorGothic | 16px | 400 | 1.45 | normal | — |
| UI Body Small | CursorGothic | 14px | 400 | 1.40 | 0.06px | — |
| Button Label | CursorGothic | 14px | 500 | 1.00 | normal | — |
| Caption | CursorGothic | 11px | 500 | 1.40 | 0.05px | "ss09" |
| Micro Label (uppercase) | CursorGothic | 10px | 600 | 1.20 | 0.6px | "ss09" |
| Mono Body | berkeleyMono | 13px | 400 | 1.55 | normal | tabular-nums |
| Mono Small | berkeleyMono | 11px | 400 | 1.40 | -0.15px | tabular-nums |
| Tier Badge Numeral | berkeleyMono | 11px | 500 | 1.00 | normal | tabular-nums |

Notable additions to the canonical Cursor scale: a **Score Numeral** role (CursorGothic with `tabular-nums` so digits align in score panels), a **Display Large** between hero and section heading for verse view headers, a **Body Serif Large** for primary explanations, and a **Tier Badge Numeral** for the small `T1`–`T7` indicators.

### 4.3 Letter-Spacing as a Function of Size

CursorGothic's distinctive aggressive negative tracking is *proportional to size* and approaches normal at body sizes. The progression:

- 72px → -2.16px (-3% of em)
- 56px → -1.40px (-2.5% of em)
- 36px → -0.72px (-2% of em)
- 26px → -0.325px (-1.25% of em)
- 22px → -0.11px (-0.5% of em)
- 16px → normal
- 14px → +0.06px (+0.4% of em, slight positive for readability)
- 11px (caption) → +0.05px
- 10px (micro, uppercase) → +0.6px (+6% of em, generous for uppercase legibility)

The pattern: large display sizes compress aggressively for engineered character; mid-sizes approach neutral; small uppercase opens up dramatically for legibility. Designers should never improvise tracking values; pull from this table.

### 4.4 Body Reading

Sustained reading happens in jjannon. The body text is set with `font-feature-settings: "cswh" 1;` to enable contextual swashes — the calligraphic flourishes that give jjannon its literary warmth at body sizes. Line height is 1.55 (slightly more than typical web body) because the explanatory prose in this app is often dense and benefits from the breathing room. Maximum line length for jjannon body is **65ch** for English/Latin text; this is a content-aware max-width specified in §6.

### 4.5 Numerical and Technical Readouts

Score numerals (TLS, ITS, confidence percentages) are set in CursorGothic with `font-feature-settings: "tnum" 1;` for tabular figures, so digits align vertically in score panels. The `Score Numeral` role at 56px is the primary score display; the `Score Numeral Compact` at 32px is for inline or sidebar score displays.

Verse references like `2:255:4` are set in berkeleyMono with `tabular-nums`. Source IDs (`tabari-tafsir-digitized-v2`) are set in `Mono Body`. Tier badges are `T1` through `T7` in `Tier Badge Numeral`. Hadith grades (`ṣaḥīḥ`, `ḥasan`, `ḍaʿīf`) are set in `UI Body Small` with the assigned letter-spacing — they are evaluative labels, not technical identifiers, so they belong in CursorGothic, not mono.

---

## 5. Bilingual Typography

This section is the most consequential addition the design system makes for this app. The Qur'anic text is the reason the system exists; its typographic treatment is the most important typographic decision in the document.

### 5.1 The Arabic Voice

The system uses **Amiri** as its primary Arabic typeface, with a fallback stack to **Noto Naskh Arabic**, then to system Arabic faces. Amiri is a digital revival of the Bulaq Press Naskh — historically authoritative, scholarly in register, broadly available, and exceptionally well-supported for vocalized Qur'anic text including the full range of tashkīl marks.

```css
--font-arabic-primary: "Amiri Quran", "Amiri", "Noto Naskh Arabic",
  "Traditional Arabic", "Arabic Typesetting", serif;
```

`Amiri Quran` is the variant specifically tuned for Qur'anic mushaf rendering (tighter spacing, refined positioning of tashkīl marks, support for the full Qur'anic notation system). When unavailable, `Amiri` falls back gracefully.

For interface chrome that contains short Arabic strings (button labels, navigation, metadata) — *not* primary verse text — the system uses **Noto Naskh Arabic** for its higher legibility at small sizes:

```css
--font-arabic-ui: "Noto Naskh Arabic", "Amiri", system-ui, serif;
```

The two stacks coexist: primary verse text always uses `--font-arabic-primary`; everything else Arabic uses `--font-arabic-ui`.

### 5.2 The Bilingual Scale

Arabic and Latin scripts have meaningfully different optical sizes at the same px value. Arabic at 16px reads smaller than Latin at 16px because of the script's lower x-height and the visual density of vocalization marks. The scale below maps content roles to *paired* sizes — a translation set in jjannon at 17.28px pairs with Arabic at 22px, not 17.28px.

| Role | Arabic Size | Arabic Voice | Latin Size | Latin Voice | Line Height (AR / LA) |
|---|---|---|---|---|---|
| Verse Display (Reading Mode) | 36px | Amiri Quran | — | — | 2.00 / — |
| Verse Display (Default) | 28px | Amiri Quran | 19.2px | jjannon | 1.95 / 1.55 |
| Verse Inline Reference | 22px | Amiri Quran | 17.28px | jjannon | 1.85 / 1.55 |
| Arabic Body (Tafsīr Quote) | 19.2px | Amiri | 17.28px | jjannon | 1.85 / 1.55 |
| Arabic UI (Labels, Nav) | 16px | Noto Naskh | 14px | CursorGothic | 1.55 / 1.40 |
| Arabic Caption | 13px | Noto Naskh | 11px | CursorGothic | 1.50 / 1.40 |

Arabic line height is consistently higher than the Latin pair because tashkīl marks above and below the baseline need vertical clearance. Insufficient line height causes vocalization marks to collide with descenders and ascenders of adjacent lines — an embarrassing failure mode for a Qur'anic application.

### 5.3 Vocalization Rendering

Vocalized Qur'anic Arabic carries marks above and below the baseline:

- **Fatḥa**, **ḍamma**, **shadda**, **sukūn** (above)
- **Kasra** (below)
- **Tanwīn** in three forms (above, above-double, below)
- Quranic-specific marks: *small mīm* (waqf), *small ṣād*, *small lām*, *small qāf*, etc.

These marks are part of the text, not decoration. The system renders all of them at full fidelity in primary verse contexts. In UI chrome contexts (a verse reference in a metadata footer, for instance) the system may render *unvocalized* Arabic to reduce visual noise — but this is a deliberate decision specified per component, not a default.

A reading-mode toggle (specified in §6) lets users switch between **fully vocalized**, **partially vocalized** (essential marks only), and **unvocalized** rendering. The default is fully vocalized for verse display; partially vocalized for inline references; unvocalized for chrome.

### 5.4 RTL/LTR Mixing

Mixed-direction content is endemic in this app. A claim card might contain: an Arabic verse fragment (RTL), an English translation (LTR), an Arabic word being analyzed (RTL, with vocalization), its English gloss (LTR), and a citation `2:255:4` (LTR-numeric).

The system handles this with three rules:

**Rule 1 — Container direction matches dominant content.** A claim card whose primary content is English explanatory prose has `dir="ltr"`. A claim card whose primary content is Arabic tafsīr quotation has `dir="rtl"`.

**Rule 2 — Inline mixed content uses Unicode bidi marks, not CSS.** Inline Arabic words within English paragraphs use the appropriate bidi isolation (`<bdi>` or Unicode `U+2068`/`U+2069` isolates) so that surrounding punctuation doesn't migrate. Verse references like `2:255:4` are explicitly LTR-numeric and force their direction with `<span dir="ltr">` wrappers when embedded in RTL paragraphs.

**Rule 3 — Spacing around inline mixed content is symmetric.** A 0.4em horizontal pad on either side of inline Arabic within Latin text (and vice versa) prevents the visual smashing that happens when scripts of different optical density abut directly.

### 5.5 The Arabic Type Reading Surface

When the system displays a verse for sustained reading (Reading Mode, §6), the typographic treatment is unusually generous: 36px Amiri Quran, 2.00 line height, max-width of 45ch, vertical margin of 96px above and below the verse block. This is the typographic moment the entire interface defers to. Every other element on the screen — score panels, evidence trails, navigation — is dissolved or rendered at low contrast so the verse is unmistakably the optical center.

A note on the 45ch max-width for Arabic: `ch` is measured against the `0` glyph of the active font, which for Amiri produces a comfortable 8–10 word line. Arabic readers are accustomed to longer line lengths than English readers (mushaf pages routinely run 12–15 words per line), but at the display sizes specified for Reading Mode, 45ch produces the most generous reading rhythm without the line becoming visually unwieldy.

---

## 6. Reading Surface Design

The reading surface — the part of the application where the user reads a verse, its translation, and the evidence and interpretations attached to it — is the most important screen in the system. The design language for this surface is governed by a single principle: **the primary text must be unmistakably the optical center.** Everything else defers.

### 6.1 The Reading Hierarchy

A verse-detail screen is composed of four bands, top to bottom:

1. **Verse Identification** (small, recessive) — surah name, verse reference (`2:30`), period (Madanī), structural position. Set in `UI Body Small` and `Mono Small`. Centered or left-aligned on a single line. This band exists purely for orientation and dissolves visually once the user begins reading.

2. **Primary Verse Display** (large, central, generous) — the Arabic verse at `Verse Display (Default)` or `Verse Display (Reading Mode)`, followed by the English translation in `Body Serif Large`. The Arabic and English are stacked, both centered within their content max-widths (45ch and 65ch respectively). 96–128px of vertical space surrounds this block on top and bottom.

3. **Score & Divergence Panel** (compact, recessive until attended to) — TLS, ITS, divergence indicator, confidence band. Specified in §8.5. This panel is *peripheral* — it sits in a right rail on desktop, collapses to a footer band on mobile. It does not interrupt the verse-text reading flow.

4. **Evidence and Alternatives** (collapsible, default-collapsed for primary view, default-expanded for analytical view) — evidence trail by tier, NBFI alternatives, scholarly precedent table. Specified in §8.6 through §8.9.

The user can toggle between **Reading Mode** (bands 3 and 4 dissolved entirely; only verse + identification visible) and **Analytical Mode** (all four bands present and functional). Reading Mode is the system's gift to the user who simply wants to read the text.

### 6.2 Content-Aware Max-Widths

The system enforces different maximum line lengths by content type. This is unusual and deliberate.

| Content Type | Max Width | Rationale |
|---|---|---|
| Arabic verse text | 45ch | Generous for Amiri Quran at display sizes |
| English/Latin translation | 65ch | Standard reading optimum for prose |
| Scholarly prose (jjannon body) | 72ch | Slightly wider; tafsīr explanations benefit |
| Plain-language flag content | 60ch | Tighter for scannability |
| Evidence tables | 100ch or full | Tabular content can run wider |
| Knowledge graph and visualizations | full-bleed | Visualizations need horizontal space |

These max-widths are absolute — the design does not allow text to flow to the edge of a wide viewport. On a 1920px monitor, the reading surface is effectively a 720–960px column centered horizontally. The space on either side is *intentional negative space*, not wasted area. It is the visual equivalent of the framed page in a printed book.

### 6.3 Reading Mode

Reading Mode is invoked by a single toggle in the verse-detail header. When active:

- Bands 3 and 4 fade to zero opacity over 200ms
- Side rails dissolve to the page edge
- Top navigation collapses to a thin (40px) bar with only the Reading Mode toggle and the share button visible
- The verse identification band (1) remains, dimmed
- The primary verse display (2) recenters vertically in the viewport
- Vocalization rendering goes to fully vocalized regardless of the user's chrome setting

Reading Mode is exited by clicking the toggle or pressing Escape. The transition back is the same 200ms fade in reverse. There is no animation on the verse text itself during the mode change — only the surrounding chrome animates.

This mode is the design's bow to the recognition that sometimes a person opens this app to *read*, not to analyze. The design must serve that case fully.

### 6.4 Vertical Rhythm

The reading surface uses an extended spacing scale specifically for vertical rhythm around primary content:

| Token | Value | Use |
|---|---|---|
| `space-reading-tight` | 64px | Between verse identification (band 1) and verse display (band 2) |
| `space-reading-default` | 96px | Above and below the primary verse block in Analytical Mode |
| `space-reading-generous` | 128px | Above and below the primary verse block in Reading Mode |
| `space-reading-section` | 160px | Between major analytical sections (evidence, alternatives) |
| `space-reading-page` | 192px | Top and bottom of the entire reading surface |

These values are larger than typical UI spacing because the reading surface is a *focus surface*, not a chrome surface. Using normal 24px or 32px gaps here would visually pack the screen and undermine the focus discipline.

---

## 7. Layout Principles

### 7.1 The Spacing System

The system is built on an 8px base with two extensions: a **fine scale** below 8px for icon and text micro-alignment, and a **reading scale** above 64px for content focus surfaces.

**Fine scale (sub-8px):** 1.5, 2, 2.5, 3, 4, 5, 6 — used for icon-text alignment, badge internal padding, fine border offsets

**Standard scale:** 8, 12, 16, 20, 24, 32, 40, 48, 56, 64 — UI chrome, components, section spacing

**Reading scale:** 64, 96, 128, 160, 192 — vertical rhythm around primary content (see §6.4)

The standard scale is *additive*, not multiplicative. The system does not use a 1.25× or 1.5× modular scale; it uses a curated set of spacing values chosen for legibility. This is a deliberate departure from many modern design systems and is correct here because the spacing decisions in this app are mostly opinionated rather than rule-derived.

### 7.2 Grid and Container

Maximum content width is **1280px** for the outer container; primary reading column is **720px** (centered) on desktop. The right rail (score panel, evidence trail) is **320px** when present. On viewports below 1100px, the right rail collapses below the reading column.

The system does not use a 12-column grid. Layouts are built around content max-widths and the 8px spacing system, with column counts varying by section (the verse-detail page is 1+1, the evidence list is single-column, the knowledge graph is full-bleed). This is intentional — a strict 12-column grid would impose a marketing-page rhythm that does not serve information density.

### 7.3 Whitespace Philosophy

Whitespace in this system is *active*. It is not the leftover space between elements; it is a designed surface that carries the warmth of the cream (or charcoal) palette and gives the eye somewhere to rest.

Three rules govern it:

**More space around primary content than feels comfortable.** If a verse block looks slightly empty, it is correctly spaced. If it looks balanced with surrounding chrome, it is under-spaced.

**Section variation through tone, not lines.** Where many design systems separate sections with horizontal rules, this system uses subtle surface tone shifts (`surface-200` → `surface-100` → `surface-300`) and vertical spacing. Hairline rules are used only when a logical separator is essential and a tone shift would be inappropriate (e.g., between rows in a dense evidence table).

**No decorative whitespace.** Every space has a purpose: separation, focus, hierarchy, or rhythm. Random padding "for breathing room" without semantic purpose is forbidden.

### 7.4 Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `radius-micro` | 1.5px | Inline badges, fine details |
| `radius-small` | 3px | Inline tags, code spans |
| `radius-default` | 6px | Cards, compact buttons, inputs |
| `radius-comfortable` | 8px | Primary buttons, standard cards |
| `radius-featured` | 12px | Featured cards, hero containers |
| `radius-pill` | 9999px | Pill buttons, tier badges, filter chips |

The system uses smaller radii overall than the parent Cursor system (which defaults to 8px for primary buttons). This is because information-dense interfaces benefit from sharper corners — they read as more precise, less consumer-app. Pills are reserved for badges and filters; primary buttons use `radius-comfortable`.

---

## 8. Component Stylings

This section specifies the components specific to this application. Generic components (text inputs, dropdowns, modals) follow the standard patterns of the parent design language and are not re-specified here unless they have application-specific behavior.

### 8.1 Buttons

Three button styles. No more.

**Primary (Brand Action).** `surface-300` background in default state; `brand-subtle` on hover; `brand-primary` text on hover. Used for the primary action on a screen. There is at most one primary button visible at any time.

**Secondary (Neutral Action).** `surface-300` background; `ink-secondary` text; hover deepens to `surface-400` and crystallizes text to `ink-primary`. Used for any non-primary action.

**Ghost (Tertiary).** Transparent background; `ink-muted` text; hover reveals `surface-300` background and `ink-secondary` text. Used for dismiss buttons, "show more," and tertiary affordances.

Padding: `10px 16px` for default, `8px 12px` for compact. Radius: `radius-comfortable` (8px). Font: `Button Label` (CursorGothic 14px / 500 / no tracking).

**No filled-teal buttons.** The brand teal is reserved for affordance signaling, not for filled button surfaces. A teal background on a button reads as a marketing CTA and breaks attention discipline.

### 8.2 Tier Badges

Tier badges are the most-used component in the system. Every claim, every piece of evidence, every quote carries one. Their visual treatment must be unmistakable, scannable, and quiet.

Specification:

- Pill shape (`radius-pill`)
- Padding: `2px 8px`
- Height: 20px fixed
- Background: tier-color tint (10% alpha of the tier fill in day; 14% in night)
- Border: `1px solid` at tier-color at 25% alpha
- Text: tier numeral in `Tier Badge Numeral` (berkeleyMono 11px / 500), color: tier fill at full saturation
- Format: `T1` through `T7`, prefixed with the letter `T`
- Optional micro-label after the numeral (e.g., `T1 · Qurʾān`) in `Caption` style

Example (day mode, Tier 2):
- Background: `rgba(15, 122, 107, 0.10)`
- Border: `rgba(15, 122, 107, 0.25)`
- Text: `#0f7a6b`
- Content: `T2`

The badge appears inline with whatever it qualifies. In an evidence list, it precedes the source name. In a claim card metadata footer, it appears alongside the tier description.

### 8.3 Confidence Bars

Confidence is rendered as a small horizontal bar, not a color. This is to avoid competing with the tier color on the same evidence row.

Specification:

- Width: 48px
- Height: 4px
- Background (track): `border-default`
- Fill: `ink-secondary` at the appropriate fraction (0.0–1.0)
- Border-radius: 2px
- Optional label below the bar in `Mono Small`: `0.85`

Confidence bars appear in two contexts: per-claim (showing the framework's CS for that claim) and per-verse (aggregating CS across all claims for the verse). The latter is meaningfully larger (96px wide × 6px tall) and appears in the verse identification band.

### 8.4 Score Panel (TLS / ITS)

The score panel is a major component and deserves careful specification because it is the surface on which the framework's two-pass architecture becomes visible.

The panel is composed of:

**Two large numerals**, side by side, in `Score Numeral` (CursorGothic 56px / `tabular-nums`). The left numeral is TLS, labeled below in `Micro Label` as "TEXTUAL LOGIC." The right numeral is ITS, labeled "INTEGRATED TRADITION." Each numeral is colored by its divergence band fill at the score's threshold (Green / Yellow / Orange / Red / Gray).

**A horizontal scale** beneath each numeral showing where the score sits on a 0–100 axis, with the four band thresholds (30, 45, 70) marked as faint vertical ticks. The user's score is a 6×16px filled rectangle in the divergence-band color.

**The divergence indicator** between or beneath the two numerals: a small arrow showing the magnitude and direction of TLS−ITS, with a label like `+10.5` in `Mono Body`. When |TLS−ITS| ≥ 25, this indicator goes red and is preceded by a divergence warning component (§8.7).

**The confidence bar**, full-width across the bottom of the panel, with the `0.0–1.0` numeral on the right.

The panel uses `surface-100` background in day mode (`#221f1a` in night), `radius-featured` (12px) corners, `border-default` 1px border, and 24px internal padding. It sits in the right rail at 320px wide × ~280px tall.

### 8.5 Divergence Warning

When |TLS−ITS| ≥ 25, the system fires a divergence warning. This is one of the few elements permitted to interrupt the reading hierarchy.

Specification:

- Full-width banner spanning the reading column (720px on desktop)
- Position: directly between the user's submitted interpretation and the score panel
- Background: divergence-band tint at 1.5× normal alpha (so noticeable but not aggressive)
- Border: 1px `border-strong` in the divergence-band fill color, on the *left edge only* (4px left border, no other borders)
- Padding: 16px 20px
- Heading: `Sub-heading` (CursorGothic 26px) labeled by scenario — "Textually coherent, departs from transmitted interpretation" / "Tradition-dependent — text alone insufficient" / etc.
- Body: `Body Serif Small` (jjannon 15.36px) explaining the divergence in 1–3 sentences
- Action: a `Ghost` button labeled "View divergence detail →" which expands the full divergence breakdown inline

The left-only border is a deliberate restraint: a fully bordered banner reads as too aggressive for the system's voice. The left edge alone marks the banner as significant without making it shout.

### 8.6 TREC Flag Callout

The TREC (Text Requests External Clarification) flag from framework Section 6b is a transparency mechanism, not a score override. Its visual treatment reflects this — present, informative, not alarming.

Specification:

- Inline within the score panel, beneath the TLS numeral specifically (not the ITS, since TREC qualifies Pass 1)
- A small horizontal rule (`border-default`, 1px, 24px wide) above the callout
- Icon: a small unfilled circle with an inscribed letter `i`, rendered in `ink-muted`
- Body text: `UI Body Small` (CursorGothic 14px), color `ink-muted`, 1–2 lines explaining the flag — "The Qurʾān itself directs to Prophetic clarification for this verse class (16:44, 59:7, 4:65). Pass 1 is not claiming completeness."

The TREC flag is *quiet*. It does not change the score and should not visually compete with the score numerals. It is the system telling the truth about its own scope.

### 8.7 Citation Verification Gate Status

Every claim card carries a small icon indicating CVG status: **PASS** (verified), **HUMAN_REVIEW** (queued), or **REJECTED** (failed). The icon appears in the card's metadata footer alongside the tier badge and source ID.

| Status | Icon | Color | Description |
|---|---|---|---|
| PASS | filled checkmark in circle | `brand-primary` | All three CVG steps passed |
| HUMAN_REVIEW | unfilled circle with horizontal bar | `ink-muted` | Routed to human review |
| REJECTED | unfilled circle with diagonal slash | divergence Red fill | Failed CVG; should not appear in user-facing output |

REJECTED claims should not normally be visible to end users, but the icon and status are specified for the scholarly review surface where reviewers see CVG outputs directly.

### 8.8 Evidence Trail

The evidence trail is the list of evidence supporting (or contradicting) a given claim, organized by tier. It is the user-facing rendering of the framework's evidence hierarchy.

Specification:

- Vertical list, single column
- Each row is a single evidence item with the following layout:

```
[T2]  ────  ʿabd allāh ibn ʿabbās     0.91  [PASS]
            from al-Ṭabarī, Jāmiʿ al-Bayān, vol. 3 p. 421
            "khalīfatan: one who succeeds others on earth..."  →
```

- Tier badge (left, fixed 32px column)
- Source name (CursorGothic 14px / 500, `ink-primary`)
- Confidence bar with numeral (right-aligned)
- CVG status icon (right-most)
- Source detail line (`Mono Small`, `ink-muted`)
- Quoted text excerpt (`Body Serif Small`, `ink-secondary`, italic for Latin / direct for Arabic)
- Optional `→` affordance to expand the full evidence with provenance footer

Rows are separated by 16px vertical spacing and a single hairline rule (`border-subtle`). Hovering a row crystallizes the metadata (CVG icon and confidence numeral go from `ink-muted` to `ink-primary`) and reveals the `→` expansion affordance.

### 8.9 NBFI Alternative Card

When the user's interpretation scores in the Orange or Red band, the system surfaces the Nearest Better-Framed Interpretation as a card directly beneath the score panel. This is the framework's "upgrade path" affordance.

Specification:

- Card with `surface-100` background in day, `radius-featured` (12px), `border-default`
- Padding: 24px
- Header: `Caption` micro-label "NEAREST BETTER-FRAMED INTERPRETATION · ALT 1" in CursorGothic uppercase
- Score chip in top-right (combined TLS/ITS pill, divergence-band tinted)
- Primary content: the alternative interpretation in `Body Serif Large` (jjannon 19.2px)
- Tier badges and source attribution beneath, in `UI Body Small`
- "How it differs from yours" section: `Body Serif Small` paragraph

Up to three NBFI cards can stack vertically. Each is independently expandable to its full evidence trail.

### 8.10 Knowledge Graph Visualization

The knowledge graph follows framework Section 5f: a primary layer (Qurʾānic-structural) in `brand-primary` teal, and a secondary layer (tradition and scholarly) in `ink-muted` with explicit Layer 2/3 labeling.

Visual specification:

**Primary layer nodes:**
- Surah / Verse / Word / Root: filled circles, sized by node type (Surah 32px, Verse 24px, Word 16px, Root 20px)
- Color: `brand-primary` filled
- Border: 2px `surface-canvas` (so nodes don't touch when adjacent)
- Label: `UI Body Small` (CursorGothic 14px), `ink-primary` for verse references and text, positioned below the node

**Primary layer edges:**
- `WORD_IN_VERSE`, `VERSE_IN_SURAH`: 1.5px solid in `brand-primary` at 40% alpha
- `VERSE_EXPLAINS_VERSE`, `VERSE_REFINES_LIMITS`: 2px solid `brand-primary` with directional arrow
- `WORD_HAS_ROOT`: 1px dashed `brand-primary` at 50% alpha

**Secondary layer nodes:**
- Scholar / Hadith / Tafsir_Claim / Asbāb / Legal_Ruling: hollow circles
- Color: `ink-muted` border, transparent fill
- Border: 1.5px solid `ink-muted`
- Label: `Caption` (CursorGothic 11px), `ink-muted`

**Secondary layer edges:**
- `TAFSIR_CLAIM_CITES_EVIDENCE`, `VERSE_SUPPORTED_BY_HADITH`: 1px solid `ink-muted` at 40% alpha
- `TAFSIR_CLAIM_DISPUTES_CLAIM`: 1px dashed `ink-muted` at 60% alpha

The graph defaults to showing only the primary layer. A toggle in the upper-right corner reveals the secondary layer. When both are visible, the visual hierarchy makes unmistakably clear that Qurʾānic structure is the backbone and the scholarly layer is annotation.

Force-directed layout with d3-force; node clustering uses `forceCluster` with primary-layer nodes as cluster anchors. Pan, zoom, and node-detail-on-click are standard. The graph never auto-animates without user action — this is part of the restraint discipline (§10).

---

## 9. Depth & Elevation

### 9.1 The Two-Mode Shadow System

Day mode uses diffuse atmospheric shadows. Night mode replaces shadows with inner glows and border emphasis, since dark shadows on dark surfaces are nearly invisible.

| Level | Day Treatment | Night Treatment |
|---|---|---|
| 0 — Flat | none | none |
| 1 — Border | `0 0 0 1px border-default` | `0 0 0 1px border-default` |
| 1b — Border Strong | `0 0 0 1px border-strong` | `0 0 0 1px border-strong` |
| 2 — Ambient | `rgba(0,0,0,0.02) 0 0 16px, rgba(0,0,0,0.008) 0 0 8px` | `inset 0 0 0 1px rgba(232,230,224,0.05)` + level 1 border |
| 3 — Card Elevated | `rgba(0,0,0,0.14) 0 28px 70px, rgba(0,0,0,0.1) 0 14px 32px, level 1 border` | `inset 0 1px 0 rgba(232,230,224,0.06)` + level 1b border + `surface-300` background |
| 4 — Modal | day Level 3 + `rgba(0,0,0,0.04) 0 0 0 100vw` overlay | night Level 3 + `rgba(0,0,0,0.4) 0 0 0 100vw` overlay |
| Focus | `rgba(0,0,0,0.08) 0 4px 12px` + `0 0 0 2px brand-subtle` | `0 0 0 2px brand-subtle` only |

The pattern: in day mode, depth is communicated through shadows as in the parent system. In night mode, depth is communicated through *background tone shifts* — an elevated card uses `surface-300` (one step up the night surface scale) plus an inner highlight to suggest a slight upward tilt. This is the design approach of well-tuned dark interfaces (Linear, Things 3) and produces a more refined night experience than mechanically darkening shadow values.

### 9.2 Restraint Discipline for Shadows

Shadows are reserved for: modal dialogs, primary cards on hover, and focused inputs. They are never used for: decorative depth, every card by default, navigation, or buttons. The system's default depth state is Level 1 (border only); shadows escalate only for clear semantic reasons.

---

## 10. Interaction & Motion

### 10.1 The Restraint Discipline

This system permits the following motion:

- **Color transitions** at 150ms ease for hover, focus, and dissolution states
- **Opacity transitions** at 150–200ms ease for crystallization and dissolution
- **Mode transitions** (Reading Mode ↔ Analytical Mode) at 200ms ease
- **Modal enter/exit** at 200ms ease (opacity only, no slide or scale)

It forbids the following motion:

- Bouncing, springing, or elastic easing curves
- Sliding panels, drawers that whoosh in
- Scaling on hover (icons that pop, buttons that grow)
- Decorative animation of any kind (animated illustrations, loading dances, accent flourishes)
- Parallax scrolling
- Auto-advancing carousels
- Animated focus rings
- Any motion on the verse text itself

The discipline is: motion communicates state change, never personality. A 150ms color shift on hover tells the user "this is interactive." A spring-bounce on the same hover tells the user "look at me, I'm playful" — and that violates the system's serious register.

### 10.2 Hover States

Default hover treatment is the 150ms color transition specified per component. Buttons, links, and rows in evidence lists all use this pattern.

A specific change from the parent Cursor system: this design **does not** use the `#cf2d56` warm crimson hover. That value is reserved for the divergence Red band (semantic meaning: "Unsupported / Contradicted"). Using it for hover would create false divergence-warning signals across the interface. Hover instead uses a subtle teal-darken (`brand-hover`) for primary interactive elements and an `ink-primary` crystallization for neutral elements.

### 10.3 Focus States

Focus is communicated via a 2px outline in `brand-subtle` (the low-alpha teal) plus a Level Focus shadow in day mode, or just the outline in night mode. The outline sits 2px outside the element with a 4px border-radius offset. This is more visible than the parent system's shadow-only focus and is correct here because the application has many keyboard-driven flows (scholarly review, evidence navigation) that demand strong focus indication.

### 10.4 Loading States

Loading is communicated by a low-contrast `ink-faint` skeleton in the shape of the eventual content, not by a spinner. Spinners are forbidden — they imply uncertainty about whether the system is working. Skeletons imply "the content is coming, here's its shape." For the verse-detail screen, this means a faint Arabic-text-shaped block, a faint English-translation-shaped block, and faint score panel placeholders, all rendered at `ink-faint` opacity until real content streams in.

The skeleton-to-content transition is a 200ms opacity crossfade. Nothing else animates.

---

## 11. Share Surface Design

This section is the most consequential addition the design system makes for this app's public footprint. The cards specified here become the system's most-seen artifacts — most people who encounter the tool will encounter it first as a shared card in a chat or a social post, never having visited the application itself.

### 11.1 The Share Architecture

The system supports two complementary share mechanisms:

**Static cards** (PNG/JPEG, server-rendered via Satori): generated at the moment of share, exported at the user's chosen aspect ratio, dropped into the share sheet as an image. Universally compatible — works in WhatsApp, Twitter, iMessage, LinkedIn, Slack, email, presentations.

**Deep-link previews** (Open Graph + Twitter Card metadata): every shareable artifact has a permanent URL of the form `app.example.com/share/{archetype}/{slug}/v{version}`, with rigorous OG metadata that auto-expands into rich previews when the URL is pasted into messaging or social platforms. The OG preview image is itself a server-rendered card, generated to the platform's required dimensions.

The two mechanisms share visual DNA: the same typography, the same color logic, the same compositional grammar. A static PNG export and an auto-expanded OG preview should feel unmistakably like artifacts from the same publication. This shared visual signature is what makes the deep-link preview a "clever way to show deep links" — the URL alone, when pasted, becomes a rich card.

### 11.2 Cards Always Render in Light Mode

Regardless of the user's app theme preference, share cards always render in **day mode** (warm cream `#f2f1ed` background with `#26251d` ink). The reasoning: a share card is a public artifact viewed by people who are not signed into the app and have no theme preference relative to it. Warm cream reads as more universally legible across platforms (especially after JPEG compression, which mangles dark-mode saturated colors more aggressively than light-mode neutrals). The user's reading experience can be dark; the shared artifact stays light.

This is a hard rule. It is not user-configurable. Consistency of public footprint is more important than per-user preference for share artifacts.

### 11.3 Card Aspect Ratios

The system templates every card at three aspect ratios:

| Ratio | Dimensions | Primary Use |
|---|---|---|
| 1:1 | 1080×1080 | Instagram, general image share, default |
| 1.91:1 | 1200×630 | Twitter/X, Facebook, LinkedIn, OG preview |
| 9:16 | 1080×1920 | Instagram Stories, Reels, vertical share |

A single card archetype (e.g., "Verse Card") has fixed templates at each ratio. The 9:16 vertical is the most constrained and forces hard prioritization decisions; the 1:1 is the most flexible; the 1.91:1 OG-style requires the most discipline because horizontal text dominates the layout.

### 11.4 Card Archetypes

Five archetypes cover the application's shareable content:

**Archetype 1 — Verse Card.** The verse alone. Arabic at the optical center in Amiri Quran, large; English translation below in jjannon; minimal metadata (verse reference, surah name) at top; small attribution mark at bottom. No score, no interpretation, no evidence — this is the "share the text" case.

**Archetype 2 — Interpretation Card.** A claim about a verse with its TLS/ITS scores. Verse reference at top in `Mono Body`; the Arabic phrase being interpreted in Amiri at medium size; the interpretation text in jjannon; a single divergence-band-colored score chip with both numerals; tier-of-supporting-evidence summary; attribution mark.

**Archetype 3 — Divergence Card.** Specifically for sharing a Structural Divergence Warning. TLS and ITS displayed side by side in large `Score Numeral` style with their respective band colors; the divergence magnitude as a labeled arrow; one-sentence explanation of the scenario in `Body Serif Large`; verse reference; attribution mark. This is the "look at this interesting divergence" case.

**Archetype 4 — Evidence Card.** A single tafsīr quote with full attribution. Tier badge prominent at top-left; quoted Arabic in Amiri (or English translation in jjannon if Latin-only); attribution line with scholar name, work, page; verse reference; attribution mark. This is the "share what classical sources said" case.

**Archetype 5 — Graph Fragment Card.** A small subgraph from the knowledge graph — e.g., the cross-reference structure between `2:30` and `38:26`. Graph at center, primary-layer styled (teal, see §8.10); verse references and brief annotation below; attribution mark. This is the "share the structure" case.

### 11.5 Card Type Scale (Distinct from Screen Scale)

Cards are viewed at thumbnail and full-screen sizes across many devices and platforms. The screen type scale is wrong for cards — too refined, too dependent on optical breathing room that doesn't survive thumbnail compression. Cards use a parallel, *punchier* type scale.

| Role | Voice | Size at 1080px wide | Letter Spacing |
|---|---|---|---|
| Card Hero (Verse) | Amiri Quran | 88px | normal |
| Card Hero (Latin) | CursorGothic | 64px | -1.6px |
| Card Heading | CursorGothic | 36px | -0.72px |
| Card Body | jjannon | 28px | normal |
| Card Caption | CursorGothic | 18px | 0.1px |
| Card Mono | berkeleyMono | 18px | normal |
| Card Attribution | CursorGothic 600 uppercase | 14px | 1.2px |

These sizes scale linearly with the card's pixel dimensions. A 1:1 card at 1080×1080 uses the values above; a 1.91:1 card at 1200×630 uses ~58% of those values; a 9:16 at 1080×1920 uses the same horizontal sizes but with more vertical breathing room.

### 11.6 Attribution Mark

Every card carries a small attribution mark at the bottom (or bottom-right for vertical cards). The mark is composed of:

- A small typographic logotype in CursorGothic 600, e.g., `criterion` (lowercase, tight tracking, signature treatment)
- A separator dot in `ink-muted`
- A short URL in berkeleyMono, e.g., `criterion.app/v/2:30`

Total height of the mark: ~20px at 1080px card width. The mark is in `ink-muted` (55% opacity) — present, identifiable, never intrusive. It is the equivalent of a publisher's colophon: dignified, unmistakable, unobtrusive.

### 11.7 OG Link Preview Specification

When a user pastes a URL like `app.example.com/share/interpretation/abc123` into a chat or social platform, the platform fetches the URL's OG metadata and renders a rich preview. The system serves:

- **`og:image`**: a 1200×630 rendered card matching the archetype of the shared content
- **`og:title`**: the card's primary heading text (`{verse_reference} — {brief_claim_summary}`)
- **`og:description`**: a 1–2 sentence summary including the divergence verdict if applicable
- **`og:type`**: `article`
- **`og:site_name`**: the application's brand name
- **Twitter Card variants**: `twitter:card: summary_large_image`, etc.

The OG image is generated at request time (or cached aggressively) to ensure currency: if a claim's score has been updated since the URL was originally shared, the preview reflects the current state. This is one of the advantages of the deep-link approach over static images.

### 11.8 The Bookmark Surface

Bookmarks are versioned references to specific nodes in the knowledge graph at specific moments. The bookmark surface is a first-class screen in the application, not a peripheral feature.

Each bookmark is rendered as a card in the bookmark list, with:

- A miniature of the bookmarked content (using the share-card archetypes at small scale)
- The timestamp of when bookmarked
- An indicator of *what changed* since the bookmark was made: new evidence added, score updated, scholar review status changed
- Quick actions: open in app, share (which generates a fresh share card), unbookmark

The "what changed" indicator is the design pattern that distinguishes a bookmark in this system from a starred URL. A bookmark is a *tracked claim* — the user has expressed sustained interest, and the system reciprocates by showing them when their bookmarked claim has evolved.

The change indicator uses the `brand-primary` teal as a single small dot in the upper-right of the bookmark card when there is news, and is absent otherwise. Hovering the dot reveals a tooltip describing the change in `Body Serif Small`.

### 11.9 Privacy Considerations in Share Output

When a user shares their *own* submitted interpretation, the share flow must explicitly offer three modes:

- **Share my interpretation** (default for green-band scores) — full claim text + score on the card
- **Share the evidence** (default for orange/red-band scores when the user has not opted into public sharing of their submission) — verse + divergence warning + best alternative, but no display of the user's own claim text
- **Share the verse only** — just the Verse Card archetype

The default behavior protects users who scored Red from inadvertently making their failed interpretation public. The toggle is presented clearly in the share sheet, never buried.

---

## 12. Brand Identity & Iconography

A scholarly tool's authority is communicated, in part, through its mark. A wordmark that reads as a tech product undermines the seriousness of what the tool does; a wordmark that overreaches into religious iconography presumes authority the tool does not claim. The brand identity here threads between those failure modes by treating itself as a *publication mark*, not a product logo — the mark of an instrument of inquiry, set in the visual register of an academic monograph or a serious literary review.

This section specifies the wordmark, its colophon device, the rules for its use, and the icon system that extends the visual language across the application.

### 12.1 The Name

The application is called **Criterion**.

The name is taken from *al-Furqān* (الفرقان), one of the Qur'an's names for itself, meaning "the Criterion" — that which distinguishes truth from falsehood. The name therefore points directly at what the tool does: it does not adjudicate truth, but it provides a structured means of distinguishing well-evidenced from poorly-evidenced interpretive claims, exactly as the framework specifies.

The name's resonance is intended to be available to those who recognize it without being explicit branding copy. The wordmark itself does not gesture at this etymology graphically — there is no Arabic script, no calligraphic flourish, no ornamental device pointing to the source. The name carries its meaning quietly. This restraint is the discipline that makes the resonance dignified rather than presumptuous.

A note on trademark: *The Criterion Collection* is an established cinema brand with strong typographic identity. The wordmark specified in §12.2 is set in CursorGothic at specific tracking and weight values that are visually distinct from their custom serif logotype, but the name itself is a potential conflict that should be cleared by trademark counsel before any public launch. Design cannot resolve trademark questions; this is flagged here so the project does not invest heavily in brand assets that may need to change.

### 12.2 The Wordmark

The wordmark is a typographic mark only — no symbol, no graphic device beyond a single colophon dot. The mark *is* its typography, set with the precision of a publication masthead.

**Specification:**

- **Typeface:** CursorGothic
- **Weight:** 600
- **Letterforms:** lowercase only — `criterion`
- **Tracking:** -0.4% of em (-1.6px at 400px display size; -0.064px at 16px favicon size)
- **Rendering:** baseline-aligned, no italic, no oblique, no decorative variant
- **Colophon device:** a single small period (`.`) following the wordmark, set in the same weight and color, with 0.15em of optical kerning between the final `n` and the period

The lowercase setting is deliberate. Title case (`Criterion`) reads as a corporate brand; ALL CAPS reads as institutional or aggressive; lowercase reads as editorial — a publication's masthead, calm and confident. The colophon period is the single graphic device permitted; it functions as a publisher's mark, marking the end of the name in the way a printed book's title page might end with a small ornament.

The mark, set at display size:

```
criterion.
```

That is the entire identity. There is no alternate version with a symbol, no horizontal lockup variant with tagline, no vertical stack version. The single mark serves all contexts.

**Sizing rules:**

| Context | Size | Tracking | Use |
|---|---|---|---|
| Application header | 22px | -0.088px | Top-left of every screen, ink-primary |
| Share card attribution | 14px | -0.056px | Bottom of every share card, ink-muted |
| OG preview header | 20px | -0.080px | Within rendered card images |
| Print masthead | 32–48px | -0.128 to -0.192px | Academic publications, printed materials |
| Favicon | 16px | -0.064px | Browser tab; rendered as `c.` only at this size (see §12.3) |
| Watermark on PDFs | 11px | -0.044px | Document footers, ink-muted |

**Clear space:** the wordmark requires a minimum clear space equal to the cap height of the lowercase letters on all sides. No other element may intrude into this clear space — no lines, no bordered containers, no other typography. The clear space ensures the mark always reads as a publication signature, never as a label crowded by surrounding chrome.

### 12.3 Reduced Mark for Constrained Contexts

At sizes below 18px (favicon, app icon, very small share-card attribution), the full wordmark loses legibility. The system specifies a single reduced mark for these cases:

```
c.
```

A single lowercase `c` followed by the colophon period, set in CursorGothic 700 (one weight heavier than the full wordmark, to compensate for small-size optical thinning). At 16px favicon size, the `c.` is centered within the icon bounds with 2px of padding on all sides.

This is the only authorized reduction of the wordmark. The system does not produce a stand-alone monogram, a stylized initial, or any geometric mark derived from the `c`. The reduced mark is recognizable as the same mark, just smaller — not a different identity.

### 12.4 Color and Mode Behavior

The wordmark is rendered in **`ink-primary`** in day mode (`#26251d`) and **`ink-primary` night** in night mode (`#e8e6e0`). It is never rendered in `brand-primary` teal — using teal for the wordmark would create false signal that the mark is interactive. The mark is identity, not affordance.

The colophon period is rendered in the same color as the wordmark itself; there is no contrast variation between the two elements.

For monochrome applications (printed materials, single-color stamping on photographic backgrounds, embossing), the mark is rendered at full saturation in whichever ink is available. There is no specific monochrome variant — the mark already *is* monochrome by design.

### 12.5 The Mark in Use

The wordmark appears in five contexts in the application's footprint, each with specific positioning rules.

**Application header.** Top-left of every screen, 22px, with 24px clear space to the left and beneath. It is the first thing the eye lands on when entering the application and serves as the home affordance — clicking it returns to the application's root view.

**Share card attribution.** Bottom of every share card per §11.6, at 14px in `ink-muted`, paired with the URL in berkeleyMono. The attribution mark is the publication signature on a public artifact.

**OG preview header.** Within rendered preview images, top-left at 20px in `ink-muted`. The OG preview is itself a card, and the mark appears in the same role it plays on share cards.

**Print masthead.** When the application's outputs are exported to PDF or appear in printed academic materials, the mark appears at 32–48px at the top of the document, with the document title in jjannon Body Serif beneath. This is the most explicitly publication-style use.

**PDF watermark.** A small repeated watermark on PDF exports, at 11px in `ink-muted`, positioned in the document footer alongside page numbers. The watermark function is provenance: every page of an exported PDF carries the mark of its source.

### 12.6 Forbidden Treatments

The wordmark is set as specified, in the color and size assigned to its context, and in no other way. Specifically forbidden:

- Any setting in a typeface other than CursorGothic
- Any weight other than 600 (or 700 for the reduced `c.` mark)
- Any tracking other than the values in §12.2
- Title case (`Criterion`) or ALL CAPS settings
- Italic, oblique, or any synthesized style variants
- Outlined, stroked, or hollow versions
- Drop shadows, glows, or any depth effects
- Gradient fills or any non-solid coloring
- Rendering in any color other than `ink-primary` (day or night) or, for monochrome contexts, available single ink
- Animated versions (no rotating, fading, drawing-on, or reveal animations on the mark)
- Any pairing with a graphic symbol, icon, or illustrative mark
- Any pairing with Arabic calligraphy, Qur'anic text fragments, or religious iconography
- Any setting that includes a tagline, descriptor, or sub-line within the mark itself
- Any setting that forms part of a sentence (the mark is always set off, never inline with running prose)
- Any embellishment of the colophon period — it remains a simple period, not a star, dot ornament, or decorative glyph

These constraints are absolute. The mark's authority comes from never being treated decoratively. Designers and AI agents producing artifacts in this system should reproduce the mark exactly as specified or not at all.

### 12.7 Icon System Philosophy

Icons in the application carry meaning, never decoration. Every icon must answer two questions: *what does this signify?* and *why is it not text?* When text would do the job, text wins. Icons appear only when (a) space constraints make text impractical, (b) the icon's shape conveys the meaning faster than reading, or (c) the icon functions as a status indicator that benefits from instant visual recognition.

The system recognizes four categories of icon, each with distinct treatment.

**Functional icons** are the small icons in chrome and component interactions: expand/collapse arrows, share buttons, bookmarks, filters, close buttons, navigation chevrons. These are drawn from a single off-the-shelf icon set and used uniformly throughout the application.

**Status icons** carry semantic meaning specific to the framework's data model: CVG verification states, divergence direction, confidence indicators that supplement the confidence bar. These are custom-designed because their meaning is specific to this application.

**Tier badges** are not icons — they are typographic (`T1` through `T7`), per §8.2. This is deliberate; an icon system for evidential tiers would invite over-interpretation of the visual relationships between tiers, when the framework wants the relationships to be understood through reading and reasoning, not through visual pattern matching.

**Wayfinding icons** are the larger icons used in empty states, onboarding moments, and category navigation. These are drawn from the same off-the-shelf set as functional icons but rendered larger (32–48px). The system does not commission custom illustrations or wayfinding marks — restraint extends here.

### 12.8 Functional Icon Set: Phosphor Regular

The system uses **Phosphor Icons** in the **regular** weight as its functional icon foundation. Phosphor's regular weight has a 1.5px stroke that matches the system's hairline character; the geometric construction is clean without being sterile; the set is comprehensive (1,500+ icons, ensuring the project will not run out and resort to mixing icon sets); and the licensing is permissive (MIT).

**Implementation:**

- Use Phosphor's font-loaded variant (`@phosphor-icons/web`) so icons inherit color and sizing from CSS the same way text does
- Default size: 16px (matching `UI Body` line height for inline use) and 20px (for buttons and interactive chrome)
- Default color: `ink-secondary` for chrome icons, `ink-primary` on hover, `brand-primary` when active or selected
- Stroke weight: regular (the icon's intrinsic stroke); never use Phosphor's bold, fill, duotone, or thin variants in this system

**Forbidden:** mixing Phosphor with any other icon set (Heroicons, Feather, Material, Lucide, Iconoir, Bootstrap Icons, Tabler, etc.), even for icons that Phosphor lacks. If a needed icon does not exist in Phosphor, the design must either use text instead, omit the icon, or commission a custom icon drawn to match Phosphor's regular-weight characteristics. The discipline of single-set icon use is what gives the system its visual coherence at the chrome level.

**Specific Phosphor icons used in this system:**

| Function | Phosphor Icon | Size |
|---|---|---|
| Expand row / show more | `caret-down` | 16px |
| Collapse row / show less | `caret-up` | 16px |
| Open in new view | `arrow-up-right` | 16px |
| Share | `share-network` | 20px |
| Bookmark (inactive) | `bookmark-simple` | 20px |
| Bookmark (active) | `bookmark-simple-fill` *(used as the only Phosphor fill exception, marking active state)* | 20px |
| Filter / sort | `funnel-simple` | 20px |
| Close / dismiss | `x` | 16px |
| Reading mode toggle | `book-open` | 20px |
| Settings | `gear-six` | 20px |
| Search | `magnifying-glass` | 20px |
| Information | `info` | 16px |
| External link | `arrow-square-out` | 14px |
| Copy to clipboard | `copy` | 16px |

The bookmark fill variant is the only exception to the "regular weight only" rule, used solely to indicate active bookmark state. All other state changes are communicated through color, not through fill variation.

### 12.9 Custom Status Icons

Four icons in the system are custom-drawn because their meaning is specific to the framework's data model and no off-the-shelf icon expresses that meaning correctly. They are drawn at the same 1.5px stroke weight as Phosphor regular to maintain visual coherence.

**Icon 1 — CVG PASS.** A clean checkmark inscribed within an unfilled circle. Stroke: 1.5px. Diameter of containing circle: 14px. Color: `brand-primary` (teal). Meaning: Citation Verification Gate passed all three steps; the source is authentic, the passage matches, the claim follows from the source.

**Icon 2 — CVG HUMAN_REVIEW.** A horizontal line inscribed within an unfilled circle, the line precisely centered. Stroke: 1.5px. Diameter: 14px. Color: `ink-muted`. Meaning: routed to human review because automated verification reached a confidence threshold below auto-pass. Quiet, non-alarming color — this is a workflow state, not a failure.

**Icon 3 — CVG REJECTED.** A diagonal slash (top-right to bottom-left) inscribed within an unfilled circle. Stroke: 1.5px. Diameter: 14px. Color: divergence Red fill. Meaning: failed verification. Rejected items should not normally appear in user-facing surfaces; this icon is primarily for the scholarly review interface where reviewers triage failures.

**Icon 4 — Divergence Direction.** A short arrow (8px) with a precise 30° head, used in the score panel to indicate TLS−ITS direction. Two variants: arrow pointing up-left for TLS > ITS (the text supports the reading more than tradition does); arrow pointing down-right for ITS > TLS (tradition supports more than text alone). Stroke: 1.5px. Color: divergence-band fill matching the magnitude. This icon supplements the numeric divergence indicator (`+10.5`, `−15.2`), giving the eye a direction without requiring the user to read the sign.

These four icons should be drawn once, exported as SVG, and used as components across the application. They should not be redrawn or stylistically reinterpreted at different sizes — the same SVG scales to all required dimensions.

### 12.10 Wayfinding Icons

Wayfinding icons appear in empty states, onboarding screens, category navigation, and any context where a larger illustrative icon helps the user orient. The system uses Phosphor regular weight at 32px and 48px sizes for these contexts. The system does not commission custom illustration; the discipline is the same single-icon-set discipline as functional icons, just at larger scale.

When a wayfinding icon would benefit from accompanying typography (an empty state with "No bookmarks yet" beneath an icon), the typography uses `UI Body Small` for the primary line and `Caption` for any subordinate text. The icon and text are vertically stacked with 16px between them; the entire arrangement is centered within its container.

Color treatment: wayfinding icons are rendered in `ink-muted` rather than `ink-primary`, because empty states and onboarding moments are quiet by design — a fully saturated icon in this context reads as too aggressive. The eye should land on the icon and immediately read the accompanying text, not be held by the icon itself.

### 12.11 Forbidden Icon Treatments

The icon system maintains a strict discipline. The following are forbidden:

- Mixing Phosphor with any other icon set
- Using Phosphor's bold, fill, duotone, or thin weight variants (with the single exception of `bookmark-simple-fill` for active bookmark state)
- Rendering icons in any color other than `ink-secondary` (chrome default), `ink-primary` (hovered), `brand-primary` (active/selected), `ink-muted` (wayfinding, dissolved chrome), or the assigned semantic color (status icons)
- Animating icons (no rotation on click, no draw-on animations, no spinning loaders disguised as icons)
- Using emoji as substitute icons in chrome
- Using icons larger than 48px in any chrome context (large icons belong only in wayfinding empty states)
- Using filled icons for non-active states
- Adding shadows, glows, or depth effects to icons
- Wrapping icons in colored circles or rounded squares as decorative containers
- Using icons without an accessible label (every icon must have an `aria-label` or accompanying visible text)
- Substituting an icon for a text label that would fit the available space
- Designing custom icons outside the four specified status icons; if a needed icon is not in Phosphor, the design uses text instead

These constraints prevent the most common failure mode in icon systems — visual cacophony from mixed sources, mixed weights, mixed semantic meanings — and preserve the publication character the wordmark establishes.

### 12.12 The App Icon

The application's installable icon (browser favicon, mobile home-screen icon, desktop launcher icon) is rendered as the reduced mark `c.` from §12.3, set in CursorGothic 700, centered within a rounded-square canvas at the platform's required dimensions (typically 32×32px through 1024×1024px).

**Specification:**

- Canvas: rounded square with corner radius equal to 22% of canvas width (the iOS/macOS standard radius)
- Canvas color: `surface-canvas` day (`#f2f1ed`) for light app icons; `ink-primary` day (`#26251d`) for dark app icons
- Mark color: opposite of canvas (cream-on-ink or ink-on-cream)
- Mark size: occupies the central 60% of canvas width, vertically optical-centered (the mark sits slightly above geometric center to compensate for the lowercase descender weight)
- Padding: minimum 20% of canvas width on all sides
- Tracking: -0.5% of em (slightly tighter than the standard wordmark, because the reduced mark benefits from compression)

The app icon does not include any decoration, gradient, or graphic device. It is the reduced wordmark on a single-color ground, treated with the same discipline as the wordmark itself.

The system provides two app icon variants: a **light** version (cream canvas, ink mark) and a **dark** version (ink canvas, cream mark). The user's operating system selects between them based on system theme where supported (iOS 18+, macOS Sonoma+, Android 12+); on platforms without automatic switching, the light variant is the default.

### 12.13 Brand Identity in Academic Publication

When the system's outputs appear in academic publications — journal articles citing the framework, conference papers, peer-reviewed methodology pieces — the wordmark serves as the project's signature in the publication's bibliography and acknowledgments. The standard citation format includes the mark followed by the methodology document version:

```
criterion.  Qur'anic Truth-Seeking & Interpretation-Evaluation Framework v2.1.
            April 2026.  criterion.app/methodology
```

The wordmark in this context is set at 14px, paired with the framework reference in jjannon Body Serif Small, and the URL in berkeleyMono Mono Small. This citation block is the publication-grade equivalent of the share-card attribution mark and serves the same provenance function in academic contexts.

---

## 13. Dark Mode

This section consolidates the dark-mode specifications scattered through §3, §9, and elsewhere into a single reference. It does not duplicate token tables; refer to those sections for token values.

### 12.1 The Night Palette Philosophy

Night mode is not an inversion. It is the same room in different light. The warm yellow-brown undertone of the day palette is preserved: warm charcoal `#1a1814` (not cool blue-black), parchment ink `#e8e6e0` (not pure white), and surface and border tokens that carry the same emotional register as their day counterparts at inverted luminance.

The pragmatic implications:

- The system does not use a `prefers-color-scheme` automatic switch. Theme is a deliberate user choice, persisted in settings.
- Saturated colors (brand teal, divergence bands, tier colors) are tuned independently for night — uniformly lighter, slightly desaturated, calibrated to read with equivalent emphasis to their day counterparts.
- Shadows are largely replaced by background tone shifts and inner highlights (see §9.1).
- Borders are slightly more visible in night mode (alpha values shift up by ~3 percentage points) to compensate for reduced overall contrast.

### 12.2 Restraint in Night Mode

A common failure mode in dark UIs is using darkness as license for neon accents and dramatic glows. This system explicitly forbids that. The night mode is *more* restrained than the day mode, not less. The brand teal at `#4ba5a8` is intentionally less saturated than the day `#01696F`; the divergence colors are uniformly muted; shadows are gone entirely except for modals and focus.

The discipline: if a night-mode screen looks more dramatic than its day-mode equivalent, the night mode is wrong. Drama, on a dark surface, reads as untrustworthy in a scholarly tool.

### 12.3 Cards Override

Per §11.2, share cards always render in day mode regardless of theme. When a night-mode user generates a share card, the card preview shown in the share dialog rendering should explicitly indicate "Cards always render in light mode" so the user understands the design choice and is not confused by the apparent inconsistency.

### 12.4 The Reading Mode in Night

When a night-mode user enters Reading Mode, the system stays in night palette but increases the warmth and vertical breathing room slightly: surface canvas shifts to `#1f1c17` (slightly warmer than the standard night canvas), and `space-reading-generous` increases to 144px from 128px. This is a calibration, not a separate mode — it produces the most comfortable sustained-reading experience in night mode.

---

## 14. Responsive Behavior

### 13.1 Breakpoints

| Name | Width | Key Layout Changes |
|---|---|---|
| Mobile | <600px | Single column, score panel collapses to footer band, no right rail, reading max-width = viewport - 32px |
| Tablet Small | 600–768px | Single column, score panel as a collapsible drawer from the bottom |
| Tablet | 768–1100px | Single column reading area, score panel returns as full-width band beneath verse |
| Desktop Small | 1100–1279px | Reading column + right rail visible together |
| Desktop | ≥1280px | Full layout, content centered within 1280px max width with negative space on either side |

### 13.2 Touch Targets

Buttons and interactive elements maintain a 44×44px minimum touch target on mobile. This is achieved through padding, not through fixed sizing — a 14px text label with appropriate padding produces a 44px hit area. Tier badges are an exception (20px tall by design); they are not interactive on mobile and have a tap-to-expand behavior that uses the surrounding row as the touch target.

### 13.3 The Mobile Reading Surface

On mobile, the reading surface compresses but remains the optical priority. The Arabic verse renders at 28px (down from 36px in Reading Mode), 1.95 line height, with 24px horizontal padding. The English translation at 17.28px sits beneath. Score panel and evidence trail collapse to a horizontal scroll of summary chips at the top of the screen, expandable to full views on tap.

Reading Mode on mobile is even more aggressive: chrome dissolves entirely, only the verse and a small Reading Mode exit button remain. This is the design's commitment to the case where someone pulls out their phone simply to read a verse.

### 13.4 The Mobile Share Flow

The mobile share flow uses the platform's native share sheet. The system pre-generates the static card at the time of share and presents it as the primary share artifact, with the deep-link URL as a secondary option. On platforms where both can be shared together (iOS share sheet with attached image and URL), both are sent.

---

## 15. What This System Prohibits

A publication-grade design system specifies its constraints explicitly. These are the things this system forbids — not as guidance, but as rules.

**Visual prohibitions:**

- No filled-teal buttons (teal is reserved for affordance signaling, not for filled brand surfaces)
- No use of the divergence Red band's `#cf2d56` for hover states or any non-semantic purpose
- No decorative use of any semantic color (brand, divergence, evidential)
- No gradients on primary surfaces (gradients are permitted only in the knowledge graph's edge weighting visualization and nowhere else)
- No drop shadows on every card by default (shadows escalate semantically; default state is Level 1 border only)
- No pure white (`#ffffff`) or pure black (`#000000`) for primary text or surface use
- No emoji in chrome (icons use the system's icon set; emoji is permitted only in user-generated content where the user has typed them)
- No decorative illustrations, mascots, or animated accents
- No background images on primary surfaces; background warmth comes from surface palette only

**Typographic prohibitions:**

- No setting a heading in jjannon or body text in CursorGothic
- No verse reference (`2:255:4`) in any face other than berkeleyMono
- No improvised letter-spacing values (use the table in §4.3)
- No Arabic body text in a sans-serif face (Amiri or Naskh only; no Dubai or Cairo for Qur'anic text)
- No vocalized Qur'anic text below 19.2px (vocalization marks become illegible)
- No mixing of Latin and Arabic in the same heading without explicit bidi handling
- No animation on the verse text itself, ever

**Motion prohibitions:**

- No spring or elastic easing curves
- No slide-in panels, drawers that whoosh
- No scaling, popping, or growing on hover
- No parallax scrolling
- No spinners (use skeletons)
- No animated focus rings
- No auto-advancing carousels or rotating content

**Information prohibitions:**

- No display of CVG-rejected claims to end users
- No display of LLM-generated factual claims that have not passed the Citation Verification Gate
- No score without an accompanying confidence band
- No tier badge without an accompanying source attribution
- No share card without an attribution mark
- No claim card without a CVG status icon
- No concealed disagreement (when scholars disagree, the disagreement is displayed; the system does not flatten ikhtilāf into a single answer)

These prohibitions are the discipline that holds the system's voice steady. Any new component, screen, or feature should be checked against this list before being built.

---

## 16. Agent Prompt Guide

This section is operational. It is intended to be quoted directly when prompting AI agents to produce UI in this system.

### 16.1 Quick Token Reference (Day Mode)

```
Surface canvas:        #f2f1ed
Surface elevated:      #ebeae5
Surface card:          #e6e5e0
Ink primary:           #26251d
Ink secondary:         rgba(38, 37, 30, 0.72)
Ink muted:             rgba(38, 37, 30, 0.55)
Brand primary (teal):  #01696F
Brand hover:           #015057
Border subtle:         rgba(38, 37, 30, 0.08)
Border default:        rgba(38, 37, 30, 0.15)
Border strong:         rgba(38, 37, 30, 0.40)
Divergence Green:      #1f8a65
Divergence Yellow:     #c08532
Divergence Orange:     #cf6d2d
Divergence Red:        #cf2d56
Tier 1:                #01696F
Tier 7:                #8a4a4a
```

### 16.2 Quick Token Reference (Night Mode)

```
Surface canvas:        #1a1814
Surface elevated:      #252220
Surface card:          #2c2926
Ink primary:           #e8e6e0
Ink secondary:         rgba(232, 230, 224, 0.78)
Ink muted:             rgba(232, 230, 224, 0.62)
Brand primary (teal):  #4ba5a8
Brand hover:           #5fb5b8
Border subtle:         rgba(232, 230, 224, 0.08)
Border default:        rgba(232, 230, 224, 0.15)
Border strong:         rgba(232, 230, 224, 0.40)
Divergence Green:      #5fc4a0
Divergence Yellow:     #e2a560
Divergence Orange:     #e89564
Divergence Red:        #e96b8a
Tier 1:                #4ba5a8
Tier 7:                #bd7a7a
```

### 16.3 Component Prompts

**Verse-detail page (Analytical Mode, desktop, day):**

> Build a verse-detail page for Qur'an 2:30. Background: surface canvas (#f2f1ed). Layout: max-width 1280px container; 720px reading column centered with a 320px right rail. Reading column contains: (1) Verse identification band — surah name "al-Baqara" and reference "2:30" in CursorGothic 14px / 500 with `Mono Small` reference, ink-muted color, centered; (2) primary verse display 96px below — Arabic in Amiri Quran 36px, line-height 2.00, max-width 45ch centered, fully vocalized; English translation 32px below in jjannon 19.2px, line-height 1.55, max-width 65ch; (3) submitted interpretation card 96px below — see Interpretation Card spec; (4) Score panel in right rail — see Score Panel spec. No box-shadows on the verse block. 192px top and bottom page padding.

**Score Panel:**

> Build a score panel showing TLS=28 (Red band), ITS=17.5 (Red band). Container: surface-100 (#f7f7f4), 12px radius, 1px border default, 24px padding, 320px wide. Two large numerals side-by-side: "28" (left) and "17.5" (right) in CursorGothic 56px / tabular-nums, each colored with divergence Red fill (#cf2d56). Below each numeral: micro-label "TEXTUAL LOGIC" / "INTEGRATED TRADITION" in CursorGothic 10px / 600 / uppercase / 0.6px tracking / ink-muted. Below the labels: a 0–100 horizontal scale in border-default with the user's score marked as a 6×16px filled rectangle in divergence Red. Beneath the two columns: a divergence indicator showing "−10.5" in berkeleyMono 13px, ink-secondary. Bottom: full-width confidence bar at 0.82, 4px tall, ink-secondary fill on border-default track, with "0.82" numeral in `Mono Small` to the right.

**Tier Badge (T2):**

> Build a Tier 2 badge. Pill shape (9999px radius), height 20px, padding 2px 8px. Background: rgba(15, 122, 107, 0.10). Border: 1px solid rgba(15, 122, 107, 0.25). Text: "T2" in berkeleyMono 11px / 500, color #0f7a6b, tabular-nums.

**Divergence Warning banner:**

> Build a divergence warning banner with the Yellow scenario "Textually coherent but departs from transmitted interpretation". Full-width 720px banner. Background: rgba(192, 133, 50, 0.15) (Yellow tint at 1.5× alpha). Left border: 4px solid #c08532; no other borders. Padding: 16px 20px. Heading "Textually coherent — departs from transmitted interpretation" in CursorGothic 26px / 400 / -0.325px tracking, color ink-primary. Body 8px below: 1–3 sentence explanation in jjannon 15.36px / line-height 1.50, color ink-secondary. Bottom-right: ghost button "View divergence detail →" in CursorGothic 14px / 500.

**NBFI Alternative Card:**

> Build an NBFI alternative card showing a Green-band alternative interpretation scoring 80/74. Card background: surface-100, 12px radius, 1px border default, 24px padding. Top row: micro-label "NEAREST BETTER-FRAMED INTERPRETATION · ALT 1" in CursorGothic 10px / 600 / uppercase / 0.6px tracking / ink-muted; right-aligned: a combined score chip (pill shape, 4px 10px padding, divergence Green tint background, "80 / 74" in berkeleyMono 11px). Body: alternative interpretation text in jjannon 19.2px / line-height 1.55, max 65ch. Beneath body: tier badges (T3, T5) and source attributions in CursorGothic 14px ink-secondary. Bottom: "How it differs from yours:" label in CursorGothic 11px / 500 / uppercase / ink-muted, followed by 2-sentence comparison in jjannon 15.36px / ink-secondary.

**Verse Card (1:1, share):**

> Build a 1080×1080 Verse Card for Qur'an 2:255 in day mode (always day mode for cards). Background: #f2f1ed. Layout: 80px padding all sides. Top: surah identification "AL-BAQARA · 2:255" in CursorGothic 18px / 600 / uppercase / 1.2px tracking / ink-muted. Center: Arabic verse in Amiri Quran 88px, fully vocalized, max-width 45ch, line-height 2.00, color ink-primary, RTL. Below Arabic (64px gap): English translation in jjannon 28px, line-height 1.50, max-width 65ch, ink-secondary. Bottom: attribution mark — "criterion" in CursorGothic 14px / 600 + bullet separator + "criterion.app/v/2:255" in berkeleyMono 14px, all in ink-muted, centered.

### 16.4 Discipline Reminders for Agents

When producing UI in this system, hold these in mind:

- **Color earns its place.** If you're about to add color, ask whether it carries semantic meaning. If not, remove it.
- **Whitespace is active.** If a layout looks "balanced" with surrounding chrome, increase the spacing around primary content until it feels slightly empty.
- **Three voices, three jobs.** CursorGothic for display/UI; jjannon for body/editorial; berkeleyMono for technical metadata. Never substitute.
- **Motion communicates state, not personality.** 150ms color transitions for hover. No bouncing, sliding, scaling.
- **Verse text never animates.** Ever.
- **Cards always render in day mode.** Even when the user is in night mode.
- **Every claim has a tier badge, source attribution, and CVG status icon.** No exceptions.
- **The brand teal is rationed.** A single screen typically has 1–3 teal accents total. If you're using teal in five places, four of them are wrong.
- **Reading max-widths are absolute.** 45ch for Arabic, 65ch for English, 72ch for scholarly prose. The viewport may be 1920px; the reading column is 720px.
- **Reading Mode is sacred.** When a user enters Reading Mode, *everything* dissolves except the verse. Everything.

---

## Appendix A — Token Reference

[Full color, type, spacing, and radius tables; see body of document for canonical values. This appendix collates them for engineering reference. In an implementation, these become CSS custom properties or design tokens in a tokens file.]

## Appendix B — Glossary

**Quiet register** — the system's default visual state: warm neutrals, oklab borders at low alpha, monochrome typography, no shadows beyond Level 1 border, no animation. Most of the interface most of the time lives here.

**Loud register** — the system's vocabulary for getting attention: brand teal, divergence colors, tier badges, semantic shadows at Level 2+, and the few permitted motion states. Reserved for moments when the system needs to signal.

**Crystallization** — the 150ms transition by which UI chrome restores full opacity and contrast on hover or focus. The opposite of dissolution.

**Dissolution** — the 150ms transition by which UI chrome that is not currently relevant fades toward the background until invoked. The opposite of crystallization.

**Attention transfer** — the design discipline of using color, contrast, weight, and motion to direct the user's eye from one element to another at the right moment. The system's primary visual goal.

**Reading Mode** — the focus state in which all interface chrome except the verse identification band dissolves to zero opacity, leaving the primary verse text as the only optical center.

**Analytical Mode** — the default state of the verse-detail screen, with score panel, evidence trail, and alternatives all present and functional.

**Card archetype** — one of the five fixed templates (Verse, Interpretation, Divergence, Evidence, Graph Fragment) used for share cards across the three aspect ratios.

**Tier badge** — the small pill-shaped indicator showing the evidential tier (T1–T7) of a piece of evidence or a claim, per the framework's Section 3 hierarchy.

**Divergence band** — one of the five color outcomes (Green / Yellow / Orange / Red / Gray) used to signal the relationship between TLS and ITS scores, per the framework's Section 6b mapping.

**TREC flag** — the framework's "Text Requests External Clarification" indicator, displayed quietly beneath the TLS numeral in the score panel. A transparency mechanism, not a score override.

**CVG status icon** — the small icon indicating Citation Verification Gate status (PASS, HUMAN_REVIEW, REJECTED) on every claim card.

**Attribution mark** — the dignified colophon-style logotype + URL appearing at the bottom of every share card.

---

*End of document.*

*Document metadata:*
- *Version: 1.0 (Publication Edition)*
- *Companion to: Qur'anic Truth-Seeking & Interpretation-Evaluation Framework v2.1*
- *Sections: 16 + 2 appendices*
- *Status: Implementation-Ready*
- *Intended audience: designers, frontend engineers, scholarly reviewers, AI agents producing UI for this system*
