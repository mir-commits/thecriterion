# CLAUDE.md

## Project Identity

This repository is for building a Quran-first web and mobile product that helps people:
- understand the Quran verse by verse,
- ask life questions and receive Quran-anchored guidance,
- move seamlessly between verses, themes, questions, and evidence.

This is **not** a generic Islamic chatbot and **not** a fatwa engine. The product is a guided Quranic understanding system built on an auditable evidence-ranking framework.[cite:1]

## Core Mission

Build a product that helps users understand:
1. what the Quran says,
2. how the Quran explains itself,
3. where the scholarly tradition supports, expands, or disputes an interpretation,
4. how confident the system is and why.

The system must never collapse these categories into a single false sense of certainty.[cite:1]

---

## Non-Negotiables

These rules override convenience, speed, and stylistic preference.

### 1) Quran first
- The user should encounter the Quranic text first, not front-loaded commentary.
- In interpretation flows, prioritize Quran-explains-Quran relationships before later interpretive layers.[cite:1]
- The default answer architecture should begin with text-internal support where possible, then show tradition-dependent support as a second layer.[cite:1]
- Ask mode must privilege Quranic anchors before presenting later scholarly synthesis.

### 2) No false certainty
- Never present a probabilistic interpretation as divinely certain.
- Never imply that a high-confidence score means “this is what God intended.” The framework explicitly excludes theological truth claims from system authority.[cite:1]
- Use language like: “well-supported,” “dominant classical view,” “textually plausible,” “contested,” “multiple legitimate readings,” or “tradition-dependent.”[cite:1]
- When evidence is mixed, show the ambiguity.
- When multiple interpretations are well-supported, do not force a single winner.[cite:1]

### 3) Connected guidance layer
- The app must not separate “search/ask” from “read/study” into disconnected experiences.
- Every answer in Ask mode should connect users back to verses, themes, and evidence.
- Every verse page should connect users outward to real-life questions, themes, and related interpretive paths.
- The product should feel like one knowledge system with two on-ramps: **Read** and **Ask**.

### 4) Calm sanctuary UI
- The interface should feel calm, spacious, contemplative, and trustworthy.
- Avoid high-stimulation “AI app” aesthetics: neon gradients, glowing blobs, loud dashboards, over-animation, gamified spirituality, or anything that feels spiritually unserious.
- Design tone: dignified, quiet, high-clarity, humane, and deeply readable.
- Favor visual stillness, restrained color, strong typography, generous whitespace, and gentle transitions.
- Reading should feel sacred-adjacent, not entertainment-oriented.

### 5) Evidence visibility
- Every substantive answer should make its basis inspectable.
- Users should be able to see:
  - relevant verses,
  - whether support is text-internal or tradition-dependent,
  - major interpretive alternatives,
  - confidence or ambiguity markers,
  - source provenance where applicable.[cite:1]
- Do not hide reasoning behind a polished answer layer.
- “Why this answer?” must always be accessible.

### 6) No fatwa behavior
- The system must not issue fatwas or legal rulings.
- The framework explicitly says the system cannot issue fatwas, replace a qualified mujtahid or mufassir, or serve as an authoritative religious reference for personal practice.[cite:1]
- Avoid imperative legal phrasing such as “You must do X” or “Islam requires you to do Y” unless clearly quoted and attributed in context.
- If a user asks for personal legal/religious rulings, the system should:
  - summarize relevant Quranic material,
  - note when legal derivation depends on scholarship beyond the Quran alone,
  - encourage consultation with a qualified scholar or local authority when appropriate.

### 7) Ask mode must route back to verses
- Every Ask-mode response must include direct verse grounding.
- Users must be able to open the verse context behind an answer with one tap/click.
- The answer should not terminate at a summary paragraph; it should open a study path.

### 8) Verse mode must route to questions
- Every verse page should expose related questions people actually ask.
- Verse exploration should not feel static or purely academic.
- Users should be able to move from a verse into themes, personal questions, and related guidance pathways.

---

## Product Principles

### Quran-first, not commentary-first
The system should privilege the Quranic text and internal cross-reference network before surfacing later commentary. This follows the framework’s evidence hierarchy in which Quran-explains-Quran is the highest tier and Pass 1 evaluates what the text establishes on its own.[cite:1]

### Transparent uncertainty
Ambiguity is not a bug. Classical scholarship preserves multiple valid meanings in many places, and the system should surface this rather than flatten it into a single answer.[cite:1]

### Retrieve, don’t generate
Any factual claim about what a scholar, tafsir work, hadith collection, lexicon, qira’at source, or legal source says must be retrieved from indexed sources, never guessed from model memory. The framework names this the Retrieve-Don’t-Generate principle.[cite:1]

### Auditable source chain
No sourced religious claim should enter production UX without traceable provenance, source IDs, and tier assignment. The framework requires provenance metadata and a citation verification gate before high-confidence use.[cite:1]

### Distinguish textual from theological authority
The product may help users understand evidence-ranked interpretations, but it must never present itself as determining ultimate divine intent or binding religious truth.[cite:1]

### Educational over performative
The system should teach, illuminate, and guide. It should not mimic the behavior of a charismatic answer machine.

### Reverence without opacity
The UX should be respectful and spiritually serious without becoming obscure, intimidating, or clerical.

---

## Required Answer Behavior

When generating any user-facing Quranic answer, default to this structure:

1. **Direct response**
   - A clear, concise answer in plain language.
   - Must avoid overclaiming.

2. **Quranic anchors**
   - Cite the most relevant verses first.
   - Prefer explicit verse links over abstract thematic summaries.

3. **How the Quran explains this elsewhere**
   - Show cross-verse reinforcement, refinement, or tension when applicable.[cite:1]

4. **Interpretive note**
   - Briefly explain whether the answer is straightforward, debated, tradition-dependent, or textually open.

5. **Confidence / ambiguity signal**
   - Example labels: Clear in the text, Well-supported, Interpreted with disagreement, Tradition-dependent, Ambiguous.

6. **Open the study path**
   - Offer routes to verse pages, theme pages, and related questions.

Do **not** produce a single block of polished prose with hidden reasoning.

---

## Prohibited Behaviors

Claude must not:
- act as a mufti,
- imply divine certainty,
- invent citations,
- paraphrase scholarship as fact without source retrieval,
- flatten scholarly disagreement,
- present modern speculative readings as if they carry classical weight,
- hide whether a claim depends on Quran alone or later scholarship,
- produce generic “Islamic inspiration” copy detached from verses,
- optimize purely for engagement at the expense of clarity or reverence.[cite:1]

---

## Source and Retrieval Rules

### Retrieve-Don’t-Generate rule
For any external-source claim, retrieval is mandatory. This includes:
- tafsir attributions,
- hadith text or grading,
- lexical definitions,
- qira’at variants,
- asbab al-nuzul,
- scholarly positions,
- legal rulings.[cite:1]

### Never rely on parametric memory for:
- “al-Tabari says…”
- “Ibn Kathir says…”
- “Lane defines…”
- “The Prophet explained this verse as…”
- “There is consensus that…”
- “This qira’a changes the meaning…”

If the source is not retrieved, do not state it as fact.[cite:1]

### Provenance requirements
Any stored interpretation object should carry at minimum:
- source ID,
- source type,
- evidentiary tier,
- confidence score,
- confidence rationale,
- reviewer/human-verification status,
- dispute flag where relevant.[cite:1]

### Hallucination defense
Treat plausible scholarly attribution as a critical failure mode. The framework identifies fabricated but realistic source attribution as one of the highest-risk hallucination classes.[cite:1]

---

## UX and Interface Guidance

### Desired emotional tone
- contemplative
- lucid
- humane
- trustworthy
- dignified
- peaceful
- intellectually honest

### Avoid
- “AI assistant” visual tropes,
- futuristic dark neon interfaces,
- productivity-dashboard aesthetics,
- spiritual gimmicks,
- cluttered citations everywhere on first view,
- excessive badges, scores, and labels that overshadow the Quranic text.

### Favor
- readable Arabic and translation typography,
- elegant spacing,
- layered disclosure,
- clear hierarchy between text, explanation, and evidence,
- minimal but thoughtful motion,
- one primary action per screen,
- interfaces that reduce cognitive noise.

### Design hierarchy
On most reading surfaces the visual order should be:
1. Quranic verse text
2. translation
3. plain-language understanding
4. linked related verses/themes/questions
5. evidence and interpretive details one layer deeper

The framework’s visual tiering principle is relevant here: the user should see what the Quran says first, while scholarly alternatives remain easy to open but do not front-run the text.[cite:1]

---

## Information Architecture Rules

The product should be organized around a single connected graph of:
- Surahs
- Verses
- Words / roots
- Themes
- Tafsir claims
- Cross-references
- Questions
- Related guidance paths
- Evidence panels

Every major surface should reinforce this connectedness.

### Read mode
Must support:
- verse-by-verse reading,
- word and root exploration,
- cross-verse links,
- theme links,
- accessible evidence layers.

### Ask mode
Must support:
- natural-language questions,
- Quran-anchored answer generation,
- verse evidence,
- explicit interpretive status,
- drill-down into verse context.

### Theme mode
Must support:
- clustered themes such as mercy, justice, repentance, family, wealth, patience, hypocrisy, leadership,
- links to verses and interpretive summaries,
- movement back into Ask and Read surfaces.

---

## Scoring and Confidence Rules

If implementing scoring or ranking features:
- never equate score with theological truth,
- clearly distinguish text-based support from integrated-tradition support,
- make divergence visible when Pass 1 and Pass 2 materially differ,[cite:1]
- use confidence language humans can understand,
- never expose a raw score without explanation,
- never let scoring become the emotional center of the product.

Scores are explanatory aids, not verdict machines.

---

## Scholar and Governance Sensitivity

Assume this is a high-sensitivity religious domain.

Therefore:
- design for reviewability,
- design for disagreement visibility,
- design for human scholar oversight,
- do not hardcode one sectarian lens as invisible default,
- make school/methodology provenance explicit where relevant,
- ensure the UX never implies the app has replaced scholars.[cite:1]

The framework explicitly calls for governance review, scholar liaison, and protections against sectarian bias, hallucination, and overreach.[cite:1]

---

## Engineering Priorities

When making tradeoffs, prioritize in this order:

1. Do not violate trust.
2. Do not fabricate sourced religious claims.
3. Preserve Quran-first clarity.
4. Preserve calm readability.
5. Preserve inspectable evidence pathways.
6. Preserve connected navigation between Ask, Read, Theme, and Verse surfaces.
7. Only then optimize speed, novelty, or cleverness.

---

## Feature Acceptance Checklist

A feature is not ready unless the answer to all relevant questions is yes:

### Trust
- Does it avoid false certainty?
- Does it avoid fatwa behavior?
- Does it distinguish evidence from assertion?
- Can the user inspect why an answer was given?

### Quran-first behavior
- Does the feature surface the Quranic text before commentary?
- Does it connect answer flows back to verses?
- Does it preserve the distinction between text-internal and tradition-dependent support?

### UX
- Does it feel calm and spiritually serious?
- Is it readable on mobile?
- Is visual hierarchy clear?
- Is there unnecessary stimulation or clutter that should be removed?

### Information architecture
- Does it connect to verse pages, themes, and related questions?
- Does it strengthen the single-system mental model?

### Sourcing
- Are external-source claims retrieved and attributable?
- Is provenance stored?
- Are ambiguous or disputed claims labeled as such?

---

## Default Build Direction

If choices are unspecified, default to:
- mobile-first responsive web app,
- clean React/Next.js style architecture,
- componentized design system,
- strong typography for Arabic + English,
- explicit evidence drawer / “why this answer” panel,
- verse page as core object,
- ask flow that returns verse cards first,
- theme graph as connective tissue,
- progressive disclosure instead of dense up-front detail.

---

## Instruction to Claude When Writing Code

When implementing features in this repo:
- think like a product architect, not just a code generator,
- preserve the spirit of the framework, not just the mechanics,
- prefer explicitness over magic,
- leave clean extension points for scholar review, provenance metadata, and evidence-tiering,
- write code that makes trust and auditability easier later,
- suggest simplifications when a feature risks violating calmness, clarity, or theological restraint.

If a request conflicts with the principles in this file, follow this file and explain the conflict.

