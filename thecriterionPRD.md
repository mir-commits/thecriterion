# V1 PRD — Quranic Understanding Platform

## Product overview

This product is a Quran-first website and mobile app that helps people understand the Quran in two complementary ways: verse by verse reading and question-based exploration. The product is designed to give users a detailed understanding of Quranic passages while also helping them ask real-life questions and receive answers anchored in Quranic teaching with visible evidence, context, and intellectual honesty.[cite:1]

The attached framework establishes the core trust model for the product: it is an auditable interpretation-evaluation system, not a theological authority engine. It explicitly separates textual truth, interpretive truth, and theological truth, and it is designed to rank evidence, document disagreement, and expose uncertainty rather than hide it.[cite:1]

The V1 product should translate that framework into a calm, modern, consumer-friendly experience for thoughtful users who want both spiritual guidance and serious Quran study.[cite:1][cite:2][cite:3]

## Product vision

Create the most trusted digital environment for understanding the Quran by making Quranic teaching searchable, readable, explainable, and navigable without collapsing nuance into shallow AI answers. The product should feel like a sanctuary for attention: calm, clear, intellectually serious, and emotionally welcoming.[cite:1][cite:2][cite:3]

## Product thesis

Most Quran apps let users read, search by keyword, or listen. Most AI products let users ask questions but often answer with hidden reasoning, uncertain sourcing, or overconfident synthesis. This product should combine the best of both: a premium reading and listening experience plus a question-answering system that keeps users anchored in the Quran, its internal structure, and evidence-ranked interpretive tradition.[cite:1][cite:2][cite:3]

## Value proposition

For thoughtful Muslims, students, seekers, and educators who want more than translation snippets or generic religious AI, this product provides verse-by-verse Quran understanding and question-based guidance anchored in Quranic teaching, with transparent evidence, scholarly context, and clear limits.[cite:1]

### Core promise

- Understand a verse deeply, not just read it.[cite:1]
- Ask a real question and see an answer anchored in Quranic teaching.[cite:1]
- See what is textually strong, what depends on tradition, and what is genuinely debated.[cite:1]
- Move naturally between reading, listening, themes, and questions without losing context.[cite:1]

## Target users

### Primary users

- Everyday Muslims seeking guidance, reflection, and deeper understanding.[cite:1]
- Educated Muslims who want more rigor than a standard reading app provides.[cite:1]
- Younger adults who prefer asking natural-language questions rather than searching only by keyword.[cite:1]
- Teachers, halaqa leaders, and students who want structured verse context and theme mapping.[cite:1]

### Secondary users

- Curious non-Muslims looking for Quran-grounded answers presented with transparency.[cite:1]
- Advanced students who want access to interpretive layers, cross-references, and evidence visibility.[cite:1]

## Problem statement

Current Quran products usually serve one of three partial needs: reading, listening, or reference lookup. They rarely help users move from a life question to a Quran-anchored answer and then back into verse context. They also rarely make interpretive confidence, source hierarchy, disagreement, and methodological limits legible to normal users.[cite:1]

As a result, users face a tradeoff between accessibility and rigor. Reading apps are easy to use but often shallow. Scholarly tools are rich but inaccessible. AI tools feel convenient but can blur the line between retrieval, synthesis, and invention. The framework behind this product exists precisely to avoid that failure by enforcing source traceability, retrieve-don't-generate discipline, and clear separation between text-internal and tradition-dependent claims.[cite:1]

## Product principles

### Quran first

The Quran should remain visually and structurally central in every experience. The framework's visual architecture explicitly treats Quranic structure as the primary layer and scholarly material as a secondary, toggleable annotation layer.[cite:1]

### Transparent guidance

The product should answer clearly, but it must also show why an answer is being given, what evidence supports it, and where the evidence becomes weaker or contested.[cite:1]

### No false certainty

The product must never imply that it can declare the one true meaning intended by God. The framework explicitly treats theological truth as out of scope and positions the system as an auditable evidence-ranking environment.[cite:1]

### One knowledge system, two on-ramps

Users should be able to enter through verse-by-verse reading or question asking, but both paths must converge into one connected understanding journey. The UI should continuously connect verses, themes, and user questions so understanding deepens rather than fragments.[cite:1]

### Calm over clever

The interface should feel like study in sanctuary: calm, spacious, and focused. Clean and clutter-free reading experiences are repeatedly praised in leading scripture-reading products, and distraction-free study is a strong user expectation in this category.[cite:2][cite:3]

### Progressive depth

The first layer should be readable by general users. Deeper layers such as morphology, lexical range, cross-verse links, and interpretive disagreement should be available on demand rather than forced on everyone at once.[cite:1]

## V1 goals

### User goals

- Read any verse in a calm, beautiful environment.
- Understand what a verse is saying in plain language.
- Ask a real-life question and receive a Quran-anchored answer.
- See the verses, themes, and reasoning path behind the answer.
- Listen to recitation and explanatory audio where available.
- Move from question to verse context and from verse context to relevant life questions.[cite:1][cite:2]

### Business and product goals

- Establish trust through transparency and restraint.[cite:1]
- Differentiate from standard Quran readers and generic AI assistants.[cite:1]
- Validate that users use both on-ramps and move between them.[cite:1]
- Build a foundation for a more advanced evidence and scholar layer in later versions.[cite:1]

## Non-goals for V1

- Issuing fatwas or legal rulings.[cite:1]
- Claiming theological certainty or divine authorization.[cite:1]
- Building a full expert graph exploration product for mainstream users.[cite:1]
- Supporting every school-specific debate in consumer-facing detail.[cite:1]
- Exposing the full internal scoring framework to all users by default.[cite:1]

## Core user journeys

### Journey 1: verse-first

1. User opens the app and enters Read mode.
2. User reads a verse or passage with Arabic, translation, and a concise explanation.
3. User optionally taps into word study, linked verses, or listen mode.
4. User sees a bridge module such as “Questions this verse speaks to” or “Where this meets life.”
5. User taps a question and moves into Ask mode preloaded with that topic.
6. User receives a Quran-anchored answer and can continue into related verses and themes.[cite:1]

### Journey 2: question-first

1. User enters Ask mode and submits a question.
2. User receives a short direct answer anchored in the Quran.
3. User sees supporting verses, theme clusters, and explanation notes.
4. User sees a bridge module such as “Read the passage behind this answer.”
5. User enters verse-by-verse context and continues studying from the relevant passage.[cite:1]

### Journey 3: audio-first

1. User opens Listen mode for a verse, surah, or topic.
2. User hears recitation with synchronized verse highlighting.
3. User optionally hears translation or a short anchored explanation.
4. User taps from audio playback into verse study or related questions.[cite:2][cite:1]

## Functional scope

## Read mode

Read mode is the core scripture experience. It should feel premium, spacious, and calm while remaining highly legible across age groups.[cite:2][cite:3]

### Required functionality

- Browse Quran by surah, juz', and verse.[cite:1]
- Display Arabic text with strong readability and RTL integrity.[cite:1]
- Display at least one primary English translation with translator attribution.[cite:1]
- Verse-by-verse navigation.
- Passage mode for reading surrounding verses.
- Save, highlight, and note-taking for personal study.
- Audio playback at surah or verse level.
- Verse-level share and copy actions.
- Adjustable text size and reading density.
- Light mode and dark mode.

### Verse page modules

- Arabic text
- Translation
- Short plain-language explanation
- Related verses / “Quran explains Quran” links where available.[cite:1]
- Themes present in the verse.[cite:1]
- Questions this verse speaks to.[cite:1]
- Listen controls
- Study deeper CTA

## Ask mode

Ask mode is the second main on-ramp. It should allow natural-language questions and return grounded, restrained, and navigable answers.[cite:1]

### Required functionality

- Natural-language question input.
- Suggested prompt chips for common topics such as patience, money, forgiveness, grief, justice, marriage, leadership, repentance, and anxiety.
- Direct answer summary in plain language.
- Supporting verses displayed clearly.
- Explanation of why those verses were selected.
- Theme tags.
- Confidence / limits language in plain English.[cite:1]
- CTA to read the surrounding passage.
- CTA to study verse by verse.
- CTA to listen to the relevant verses.

### Answer card structure

- Direct answer
- Key verses
- Why these verses
- Interpretive note
- Confidence and limits
- Related themes
- Study the passage

## Connected guidance layer

This is a defining V1 feature. The app should continuously connect readers across entry points so that reading mode and ask mode are never isolated experiences.[cite:1]

### Required behavior

- Every verse page must show relevant questions, themes, or life concerns tied to that verse.[cite:1]
- Every answer page must show the verses and surrounding passages users should study next.[cite:1]
- Every theme page must bridge both directions: verse clusters and common questions.[cite:1]
- Users must be able to move between verse, theme, and question in one or two taps.

### Example bridge modules

- Questions this verse speaks to
- Where this meets life
- Read the passage behind this answer
- Elsewhere the Quran develops this idea
- Related questions people ask

## Theme mode

Theme mode organizes the Quran around recurring ideas without detaching them from verse context. The framework supports this through explicit Theme nodes and verse-theme relationships.[cite:1]

### Required functionality

- Browse curated themes.
- Theme overview page with concise thesis.
- Grouped verses by theme.
- Links to related questions.
- Links to related passages.
- Optional short audio reflection for selected themes.

## Study mode

Study mode introduces deeper analysis without overwhelming general users. This is where the product begins to expose the framework's sophistication in a consumer-safe format.[cite:1]

### Required functionality

- Word-by-word breakdown for selected verses.
- Root and lemma display where available.[cite:1]
- Morphology preview for tapped or hovered words.[cite:1]
- Cross-verse links such as parallels, specifications, and contextualizing verses.[cite:1]
- High-level interpretive notes.
- “Where scholars differ” module when disagreement is meaningful.[cite:1]
- Simple evidence labels such as Quran-internal, transmitted support, later scholarly interpretation.[cite:1]

### Out of scope for V1 default UI

- Full graph exploration.
- Full scholar-by-scholar comparison view.
- Raw scoring breakdowns across all five dimensions.
- Advanced qira'at analysis except where surfaced in simplified form.[cite:1]

## Audio functionality

Audio should be treated as a core learning modality, not an accessory. Verse-by-verse highlighting and recitation control are already proven useful in scripture apps like Ayah, and a calm listening layer supports the product's sanctuary positioning.[cite:2]

### Required functionality

- Verse-by-verse recitation playback.[cite:2]
- Synchronized verse highlighting during playback.[cite:2]
- Repeat one verse or loop a small passage.[cite:2]
- Optional translation audio for selected content.
- Optional short spoken explanation for selected verses or question answers.
- Background audio continuity within the app.

## Search and discovery

### Required functionality

- Search by surah, verse number, keyword, and natural-language question.
- Suggested searches and themes.
- Recent items and saved items.
- Discover surface on home screen with themes, ongoing reading, and recent questions.

## Personalization

### Required functionality

- Save verses
- Save questions
- Save notes
- Resume reading and listening
- Recently viewed verses, answers, and themes

### Deferred functionality

- Deep personalization of doctrinal preferences
- Community features
- Social study circles

## Trust and safety

The trust model must be visible in both product behavior and interface language. The framework states that no claim should enter the graph without source identity and tier assignment, and it enforces retrieve-don't-generate for scholar-proxy claims.[cite:1]

### Required policies and UX behaviors

- Do not present answers as fatwas.[cite:1]
- Do not imply divine certainty.[cite:1]
- Clearly label when an answer is based mainly on Quran-internal evidence versus broader tradition.[cite:1]
- Clearly indicate when interpretation is disputed or low confidence.[cite:1]
- Use plain language to explain what confidence means and does not mean.[cite:1]
- Keep scholar and source provenance available behind expandable panels.[cite:1]
- Avoid overstating modern or speculative interpretations as core teaching.[cite:1]

## Information architecture

### Primary navigation

- Home
- Read
- Ask
- Themes
- Listen
- Saved

### Home screen blocks

- Continue reading
- Ask a question
- Featured themes
- Listen now
- Saved and recent activity

## Design vision

The product should feel like studying in sanctuary without becoming visually literal or historically themed. The emotional quality should come from visual calm, warm restraint, editorial typography, and guided navigation rather than ornate decoration.[cite:1][cite:2][cite:3]

## Design principles

### Calm intellectual ambiance

The interface should create a sense of stillness and receptivity. Clean, clutter-free scripture interfaces are praised by users because they make reading and reflection easier.[cite:2][cite:3]

### Modern but timeless

The product should feel premium and contemporary for users aged 25 to 40 while remaining highly legible and comfortable for users 40 and older. That means avoiding trend-heavy UI and instead using refined typography, generous spacing, and familiar interaction patterns.[cite:2][cite:3]

### Quran visually central

Arabic text and passage context should remain the visual anchor of the experience. The framework explicitly defines Quranic structure as the primary visual layer and tradition-linked material as a secondary muted layer.[cite:1]

### Progressive revelation of depth

Do not show all interpretive machinery at once. Start with what the verse says in accessible language, then allow users to go deeper into linked verses, themes, lexical detail, and interpretive context.[cite:1]

### Connect the dots

Every major screen should help users move between verse, question, and theme. The product should continuously reveal how a verse answers a life question and how a question maps back into verses and passages.[cite:1]

### Audio as contemplation

Audio should support understanding, not just playback. Recitation, translation audio, and short spoken explanation can create a contemplative learning rhythm when offered intentionally.[cite:2]

### Plain-language confidence

Confidence labels, evidence notes, and disagreement indicators should be understandable to non-specialists and should never feel like abstract machine scores.[cite:1]

## Visual design direction

### Color

Use warm neutral backgrounds, paper-like surfaces, dark ink text, and one restrained teal primary accent. This is directly compatible with the framework's recommended visual palette and produces the right sanctuary-like calm without becoming decorative.[cite:1]

### Typography

- Arabic: highly readable Naskh-style rendering with elegant spacing.[cite:1]
- English body/UI: modern sans serif with warmth and strong legibility.
- Display headings: restrained editorial serif used sparingly.

### Layout

- Reading-first structure
- Spacious verse modules
- Low-noise control bars
- Secondary panels for deeper study
- Strong mobile thumb reach and high readability

## Interaction principles

### Hover and tap behavior

Hover states are useful on desktop only when they deepen understanding, such as previewing word meaning, morphology, root, or linked verse context. Every hover behavior must have a tap equivalent for mobile users.[cite:1]

### Recommended micro-interactions

- Hover or tap on Arabic word for quick lexical/morphology preview.[cite:1]
- Tap theme chip to see verse cluster.
- Tap answer evidence chip to see plain-language explanation of that evidence type.[cite:1]
- Tap “study the passage” to expand surrounding ayat.
- Tap “listen” to move from text to synchronized recitation.

### Interactions to avoid

- Flashy animations
- Gamified score visuals
- Dense dashboard layouts
- Loud warning colors for normal interpretive nuance
- Hover-only critical functionality

## Accessibility requirements

- Strong contrast in both light and dark modes.
- Large default text for Arabic and translation.
- Adjustable text size.
- Touch targets at least 44x44px.
- Clear labels and icon support.
- Minimal reliance on hidden gestures.
- Screen reader-friendly structure and semantic navigation.
- Audio controls with clear state indicators.

## V1 content model

### Core objects

- Surah
- Verse
- Passage
- Theme
- Question
- Answer
- Word
- Root
- Tafsir note
- Audio asset

This reflects the framework's broader knowledge architecture, which includes Verse, Word, Root, Theme, TafsirClaim, Hadith, Qira'a, and other supporting entities, but V1 should expose only the subset needed for a stable consumer experience.[cite:1]

## Data and reasoning model for V1

### User-facing layers

- Quran text layer
- Translation layer
- Plain-language explanation layer
- Quran-internal cross-reference layer.[cite:1]
- Theme layer.[cite:1]
- Limited interpretive note layer.[cite:1]

### Internal system expectations

- Quran-internal evidence should be prioritized in presentation where appropriate.[cite:1]
- Scholar-proxy claims must come from retrieval-backed indexed sources, not free generation.[cite:1]
- Source provenance must be retained even if hidden from default view.[cite:1]

## Success metrics

### Engagement metrics

- Weekly active readers
- Weekly active ask-mode users
- Percent of users who use both Read and Ask within 30 days
- Audio session completion rate
- Verse page to question page transition rate
- Ask answer to passage study transition rate

### Trust and quality metrics

- Percent of answers with visible supporting verses
- Percent of answers with expandable evidence notes
- User-reported trust score
- User-reported clarity score
- Escalation rate on disputed answers
- Hallucination / citation error rate from QA review

### Learning metrics

- Saves per session
- Notes per user
- Theme exploration depth
- Passage continuation rate after question entry

## MVP release criteria

V1 is ready when users can reliably read, ask, listen, and move across those on-ramps inside one coherent product experience. The interface should feel calm and premium, the answer experience should stay visibly anchored in Quranic teaching, and deeper interpretive content should remain available without overwhelming the primary reading flow.[cite:1][cite:2][cite:3]

## Future versions

### Likely V2 additions

- More advanced scholar comparison
- Richer evidence paneling
- Chronology and revelation-sequence views.[cite:1]
- Community study features
- Personalized study plans
- Expanded audio explanation library
- Advanced graph exploration for serious students

## Open product decisions

The following questions remain for product strategy and design refinement:

- Which translation set is included at launch?
- How much of the evidence stack is visible by default versus behind expansion?
- Will explanatory audio be recorded, synthesized, or hybrid?
- Should V1 emphasize consumer guidance or serious study in the onboarding language?
- Should users choose a reading path, a question path, or a blended onboarding at first launch?
