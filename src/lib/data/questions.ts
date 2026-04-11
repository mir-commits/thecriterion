/**
 * Question and Answer Mock Data
 *
 * V1 STUB DATA — CRITICAL TRUST NOTICE:
 * These answers are editorial compositions that follow the framework's
 * evidence hierarchy and CLAUDE.md's required answer structure.
 *
 * They are NOT retrieved from an indexed tafsir corpus.
 * They are NOT verified by a scholar.
 * They are clearly identified as stubs (provenance.isStub: true).
 *
 * The answer structure faithfully follows CLAUDE.md Section "Required Answer Behavior":
 * 1. Direct response
 * 2. Quranic anchors
 * 3. How the Quran explains this elsewhere
 * 4. Interpretive note
 * 5. Confidence / ambiguity signal
 * 6. Open the study path
 *
 * No tafsir scholar is cited by name in these answers because no retrieval
 * has been performed. When the retrieval corpus is wired, TafsirClaim objects
 * will be populated from indexed sources via the Citation Verification Gate.
 */

import type { Question } from "@/lib/types";
import { stubProvenance, buildConfidenceSignal } from "@/lib/types";

export const QUESTIONS: Question[] = [
  {
    questionSlug: "how-to-deal-with-hardship",
    questionText: "How does the Quran tell us to deal with hardship?",
    shortLabel: "Dealing with hardship",
    category: "inner-life",
    themeIds: ["patience", "hardship", "inner-states"],
    primaryVerseIds: ["2:153", "94:5", "2:286"],
    answer: {
      answerId: "ans-hardship-001",
      questionSlug: "how-to-deal-with-hardship",

      directResponse:
        "The Quran does not promise an easy life. It acknowledges hardship directly, then offers two instruments: patient endurance (sabr) and prayer (salah). It also provides a structural promise — that difficulty and ease exist together, not sequentially. The framework for dealing with hardship in the Quran is oriented around divine companionship: 'Allah is with the patient.'",

      keyVerses: [
        {
          verse: {
            verseId: "2:153",
            surahId: 2,
            surahName: "Al-Baqara",
            surahNameArabic: "البقرة",
            verseNumber: 153,
            arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
            translation: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
          },
          relevanceNote: "This verse directly commands seeking help through two means: patience and prayer. It closes with a promise of divine companionship — 'Allah is with the patient' — which is the Quran's strongest assurance in the face of difficulty.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "This verse states the counsel directly. It is supported by its parallel in 2:45 within the same surah.",
        },
        {
          verse: {
            verseId: "94:5",
            surahId: 94,
            surahName: "Al-Inshirah",
            surahNameArabic: "الشرح",
            verseNumber: 5,
            arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
          },
          relevanceNote: "The word 'with' (maʿa) is significant — ease accompanies hardship, it is not deferred to after it. This verse is repeated in 94:6, and the grammatical structure (definite hardship, indefinite ease) implies multiple eases for each hardship.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "The grammatical observation about definite/indefinite forms is a text-internal analysis. The repeated verse in 94:6 is also Tier 1 evidence.",
        },
        {
          verse: {
            verseId: "2:286",
            surahId: 2,
            surahName: "Al-Baqara",
            surahNameArabic: "البقرة",
            verseNumber: 286,
            arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
            translation: "Allah does not burden a soul beyond that it can bear.",
          },
          relevanceNote: "A structural promise: the difficulty encountered is within the bounds of what you can endure. This is not a minimization of hardship — it is a theological claim about the nature of divine assignment.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "This verse is direct, clear (muhkam), and requires no external tradition to establish its meaning.",
        },
      ],

      quranElsewhereNote:
        "The Quran develops the theme of hardship across multiple surahs. Surah Al-Baqara pairs patience with prayer twice (2:45, 2:153). Surah Al-Inshirah (94) is entirely devoted to the co-existence of ease and difficulty. Surah Al-Duha (93) addresses the experience of divine silence and reassures that abandonment is not what is happening. The pattern across the Quran is consistent: hardship is real, acknowledged, and accompanied by divine support.",

      relatedVerses: [
        {
          verse: {
            verseId: "93:3",
            surahId: 93,
            surahName: "Ad-Duha",
            surahNameArabic: "الضحى",
            verseNumber: 3,
            arabicText: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
            translation: "Your Lord has not taken leave of you, nor has He detested [you].",
          },
          relevanceNote: "Addresses the specific hardship of feeling spiritually distant or abandoned — one of the most distressing forms of difficulty.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Contextual parallel — the theme of divine companionship in difficulty.",
        },
        {
          verse: {
            verseId: "3:139",
            surahId: 3,
            surahName: "Al Imran",
            surahNameArabic: "آل عمران",
            verseNumber: 139,
            arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا",
            translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers.",
          },
          relevanceNote: "Revealed after a real military loss, this verse forbids both physical weakening and grief without denying that the loss was real.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "The historical context (Battle of Uhud) is well-established. The verse's direct address preserves emotional honesty while commanding resilience.",
        },
      ],

      interpretiveNote:
        "The Quranic counsel on hardship is remarkably consistent and direct. The major points (seek patience, seek prayer, hardship and ease coexist, God is with the patient) are stated explicitly in the text and do not require complex interpretive work to establish. The question of how exactly to practice sabr — the degrees of patience, its conditions, and its virtues — is a topic where classical scholarship expands significantly. That expansion is not needed to receive the core Quranic message.",

      evidenceBasis: "quran-internal",

      confidence: buildConfidenceSignal("high", {
        ikhtilafFlag: false,
      }),

      themeIds: ["patience", "hardship", "inner-states"],
      relatedQuestionSlugs: [
        "what-does-quran-say-about-anxiety",
        "how-to-find-hope",
        "does-god-give-more-than-you-can-handle",
      ],

      tafsirClaims: [],  // V1: no tafsir claims retrieved yet

      requiresScholarConsultation: false,
      scholarConsultationNote: null,

      provenance: stubProvenance({
        confidenceRationale: "Core verses are muhkam (clear) and require no external tradition for their primary meaning. The answer does not cite scholars and does not attribute positions to named scholars.",
      }),
    },
  },
  {
    questionSlug: "what-does-quran-say-about-anxiety",
    questionText: "What does the Quran say about anxiety and worry?",
    shortLabel: "Anxiety and worry",
    category: "inner-life",
    themeIds: ["inner-states", "patience", "divine-attributes"],
    primaryVerseIds: ["2:286", "94:5", "93:3"],
    answer: {
      answerId: "ans-anxiety-001",
      questionSlug: "what-does-quran-say-about-anxiety",

      directResponse:
        "The Quran does not use a single word equivalent to 'anxiety' in the modern psychological sense, but it addresses worry, fear, and grief with directness. It offers reassurance not through dismissal but through theological reorientation: the certainty of divine companionship, the promise of ease alongside hardship, and the command to not surrender to weakening or grief.",

      keyVerses: [
        {
          verse: {
            verseId: "2:286",
            surahId: 2,
            surahName: "Al-Baqara",
            surahNameArabic: "البقرة",
            verseNumber: 286,
            arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
            translation: "Allah does not burden a soul beyond that it can bear.",
          },
          relevanceNote: "Addresses the core fear behind anxiety: that the burden is too great. The Quran responds with a structural claim about the nature of divine assignment.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Direct, clear (muhkam) verse. No external tradition needed for its primary meaning.",
        },
        {
          verse: {
            verseId: "93:3",
            surahId: 93,
            surahName: "Ad-Duha",
            surahNameArabic: "الضحى",
            verseNumber: 3,
            arabicText: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
            translation: "Your Lord has not taken leave of you, nor has He detested [you].",
          },
          relevanceNote: "Addresses the anxiety of feeling spiritually isolated or punished — a direct negation of the fear of divine abandonment.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Contextually, this verse addresses a period of revelation silence. Its direct negation of abandonment has broad applicability.",
        },
      ],

      quranElsewhereNote:
        "The Quran speaks of khawf (fear) and ḥuzn (grief) as states that believers experience. It also describes the ideal of those who are free from khawf and ḥuzn: 'Indeed, the allies of Allah — there will be no fear concerning them, nor will they grieve' (10:62). This is not a dismissal of these states but a description of an ultimate destination of peace that faith is oriented toward.",

      relatedVerses: [
        {
          verse: {
            verseId: "94:5",
            surahId: 94,
            surahName: "Al-Inshirah",
            surahNameArabic: "الشرح",
            verseNumber: 5,
            arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
          },
          relevanceNote: "The structural promise that ease and difficulty coexist is a direct counter to the anxious belief that difficulty is permanent.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Text-internal. The repetition in 94:6 reinforces it.",
        },
      ],

      interpretiveNote:
        "The Quran's address of anxiety is real but indirect — it does not name a single clinical state. Classical scholars addressed these emotional states under discussions of khawf, tawakkul (reliance on God), and raja' (hope). The Quranic approach is primarily theological: reorientation toward God as a source of stability. Whether and how this intersects with contemporary understandings of mental health is a question that depends on tradition beyond the Quranic text itself.",

      evidenceBasis: "quran-internal",

      confidence: buildConfidenceSignal("medium-high", {
        ikhtilafFlag: false,
      }),

      themeIds: ["inner-states", "patience"],
      relatedQuestionSlugs: [
        "how-to-deal-with-hardship",
        "how-to-find-peace",
        "does-god-hear-me",
      ],

      tafsirClaims: [],

      requiresScholarConsultation: false,
      scholarConsultationNote: null,

      provenance: stubProvenance({
        confidenceRationale: "Core verses are clear and well-grounded. The note about classical treatments of khawf and raja' is not retrieved — flagged appropriately.",
      }),
    },
  },
  {
    questionSlug: "how-to-find-hope",
    questionText: "Where does the Quran say to look for hope?",
    shortLabel: "Finding hope",
    category: "inner-life",
    themeIds: ["inner-states", "divine-attributes", "patience"],
    primaryVerseIds: ["93:3", "94:5", "2:286"],
    answer: {
      answerId: "ans-hope-001",
      questionSlug: "how-to-find-hope",

      directResponse:
        "The Quran grounds hope in divine character, not circumstances. Hope (raja') in the Quran is oriented toward God's mercy, which the Quran describes as encompassing all things (7:156). The strongest commands against despair are paired with direct assertions about God's nature — not with promises that circumstances will improve immediately.",

      keyVerses: [
        {
          verse: {
            verseId: "93:3",
            surahId: 93,
            surahName: "Ad-Duha",
            surahNameArabic: "الضحى",
            verseNumber: 3,
            arabicText: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
            translation: "Your Lord has not taken leave of you, nor has He detested [you].",
          },
          relevanceNote: "The most direct Quranic address of the experience of hopelessness — the feeling of divine distance. God's answer is not a promise of changed circumstances but a negation of abandonment.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Clear, direct verse. The surrounding surah (93) provides full context.",
        },
      ],

      quranElsewhereNote:
        "The Quran explicitly forbids despair of divine mercy as a theological error, not merely an emotional problem: 'Do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful' (39:53). This is one of the strongest hope-giving statements in the Quran — directed specifically at those who have sinned greatly and may feel beyond rescue.",

      relatedVerses: [
        {
          verse: {
            verseId: "94:5",
            surahId: 94,
            surahName: "Al-Inshirah",
            surahNameArabic: "الشرح",
            verseNumber: 5,
            arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
          },
          relevanceNote: "Hope for change is grounded in the structural promise that ease coexists with hardship — it is not just deferred but already present.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Text-internal structural observation.",
        },
      ],

      interpretiveNote:
        "Raja' (hope) in the Quran is paired with khawf (fear) as a balanced spiritual state. Classical scholarship discusses the relationship between the two extensively — whether one should dominate, under what circumstances, and for whom. This nuance depends on tradition beyond the Quranic text. The core Quranic message, however, is clear: despair of divine mercy is explicitly forbidden.",

      evidenceBasis: "quran-internal",

      confidence: buildConfidenceSignal("high", {
        ikhtilafFlag: false,
      }),

      themeIds: ["inner-states", "divine-attributes"],
      relatedQuestionSlugs: [
        "how-to-deal-with-hardship",
        "what-does-quran-say-about-anxiety",
        "what-does-quran-say-about-forgiveness",
      ],

      tafsirClaims: [],

      requiresScholarConsultation: false,
      scholarConsultationNote: null,

      provenance: stubProvenance({
        confidenceRationale: "The prohibition of despair and the promise of mercy are clear, direct Quranic statements. The discussion of raja'/khawf balance is noted as tradition-dependent and not presented as Quranic fact.",
      }),
    },
  },
  {
    questionSlug: "does-god-give-more-than-you-can-handle",
    questionText: "Does God give you more than you can handle?",
    shortLabel: "More than you can handle?",
    category: "inner-life",
    themeIds: ["hardship", "divine-attributes", "inner-states"],
    primaryVerseIds: ["2:286"],
    answer: {
      answerId: "ans-burden-001",
      questionSlug: "does-god-give-more-than-you-can-handle",

      directResponse:
        "The Quran directly addresses this: 'Allah does not burden a soul beyond that it can bear' (2:286). The statement is clear and unambiguous in its primary meaning. However, it requires careful reading — it refers to divine assignment (taklif), not to every form of suffering that occurs. It is a theological claim about God's nature, not a claim that every hardship felt is bearable in the moment.",

      keyVerses: [
        {
          verse: {
            verseId: "2:286",
            surahId: 2,
            surahName: "Al-Baqara",
            surahNameArabic: "البقرة",
            verseNumber: 286,
            arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
            translation: "Allah does not burden a soul beyond that it can bear.",
          },
          relevanceNote: "The verse uses the word taklif (assignment/obligation) — referring to what God requires of a person, not to every painful experience. This distinction is important for honest reading.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "The word taklif is a specific Quranic term. The grammatical structure is clear. No external tradition is needed for the primary meaning.",
        },
      ],

      quranElsewhereNote:
        "The Quran also acknowledges experiences that feel unbearable. Surah Ad-Duha (93) addresses a period the Prophet found profoundly difficult. The Quran's response is companionship and promise, not denial of the difficulty. The principle in 2:286 should be understood alongside these acknowledgments.",

      relatedVerses: [
        {
          verse: {
            verseId: "94:5",
            surahId: 94,
            surahName: "Al-Inshirah",
            surahNameArabic: "الشرح",
            verseNumber: 5,
            arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
            translation: "For indeed, with hardship [will be] ease.",
          },
          relevanceNote: "Not a denial of hardship but a structural promise about its accompaniment.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "Text-internal.",
        },
      ],

      interpretiveNote:
        "The verse 2:286 is clear (muhkam) in its primary meaning. The nuance of what 'wus'a' (capacity) means exactly, and how to understand suffering that feels beyond capacity, is a question that classical scholars have addressed at length — particularly in relation to mental health, extreme grief, and overwhelming circumstance. This is a tradition-dependent expansion of the primary Quranic message.",

      evidenceBasis: "tradition-enriched",

      confidence: buildConfidenceSignal("medium-high", {
        ikhtilafFlag: false,
        ikhtilafNote: "The primary verse is clear. Nuance about the scope of taklif is tradition-dependent.",
      }),

      themeIds: ["hardship", "divine-attributes"],
      relatedQuestionSlugs: [
        "how-to-deal-with-hardship",
        "what-does-quran-say-about-anxiety",
      ],

      tafsirClaims: [],

      requiresScholarConsultation: false,
      scholarConsultationNote: null,

      provenance: stubProvenance({
        confidenceRationale: "Primary verse is muhkam and clearly supports the main answer. The nuance about taklif vs. all suffering is marked as tradition-dependent and not asserted as Quranic fact.",
      }),
    },
  },
  {
    questionSlug: "what-does-quran-say-about-forgiveness",
    questionText: "What does the Quran say about forgiveness and mercy?",
    shortLabel: "Forgiveness and mercy",
    category: "inner-life",
    themeIds: ["forgiveness", "divine-attributes", "inner-states"],
    primaryVerseIds: ["1:1", "2:286"],
    answer: {
      answerId: "ans-forgiveness-001",
      questionSlug: "what-does-quran-say-about-forgiveness",

      directResponse:
        "The Quran opens with the declaration that God is al-Rahman (the Entirely Merciful) and al-Rahim (the Especially Merciful). These two names frame the entire Quran. Divine mercy in the Quran is not conditional on perfection — it is a fundamental attribute of God that precedes and encompasses all judgment. The Quran explicitly forbids despair of this mercy (39:53).",

      keyVerses: [
        {
          verse: {
            verseId: "1:1",
            surahId: 1,
            surahName: "Al-Fatiha",
            surahNameArabic: "الفاتحة",
            verseNumber: 1,
            arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
            translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
          },
          relevanceNote: "The Quran begins with mercy. Al-Rahman (mercy as essential attribute) and al-Rahim (mercy in active expression) — mercy is not one attribute among many but the context in which all else is read.",
          evidenceLayerLabel: "text-internal",
          evidenceLayerDescription: "This is the opening verse of the Quran. The divine names are text-internal.",
        },
      ],

      quranElsewhereNote:
        "The Quran uses different words for divine forgiveness — ghufran (covering over sin), 'afw (pardon, as if the sin never happened), tawba (return — God accepts the human return). Each carries different nuance. The most expansive statement on forgiveness is in 39:53: 'Do not despair of the mercy of Allah. Indeed, Allah forgives all sins.' The word 'all' (jami') is significant — no category of sin is placed outside this promise.",

      relatedVerses: [],

      interpretiveNote:
        "The relationship between divine mercy and divine justice is one of the most carefully discussed topics in classical Islamic theology. The question of whether certain acts are or are not forgiven, and under what conditions, depends significantly on transmitted tradition and legal-theological scholarship. The Quranic text establishes the overwhelming primacy of mercy; the conditions and qualifications are tradition-dependent.",

      evidenceBasis: "tradition-enriched",

      confidence: buildConfidenceSignal("medium-high", {
        ikhtilafFlag: true,
        ikhtilafNote: "The primacy of divine mercy is clear in the text. The specific conditions and exceptions are tradition-dependent and involve real scholarly disagreement.",
      }),

      themeIds: ["forgiveness", "divine-attributes"],
      relatedQuestionSlugs: [
        "how-to-find-hope",
        "how-to-deal-with-hardship",
      ],

      tafsirClaims: [],

      requiresScholarConsultation: false,
      scholarConsultationNote:
        "For questions about specific acts and their conditions for forgiveness, consult a qualified scholar or local imam who can address your specific situation.",

      provenance: stubProvenance(),
    },
  },
];

export const PROMPT_CHIPS = [
  { label: "Dealing with hardship", questionSlug: "how-to-deal-with-hardship", category: "inner-life" as const },
  { label: "Anxiety and worry", questionSlug: "what-does-quran-say-about-anxiety", category: "inner-life" as const },
  { label: "Finding hope", questionSlug: "how-to-find-hope", category: "inner-life" as const },
  { label: "Forgiveness and mercy", questionSlug: "what-does-quran-say-about-forgiveness", category: "inner-life" as const },
  { label: "More than you can handle?", questionSlug: "does-god-give-more-than-you-can-handle", category: "inner-life" as const },
];

export function getQuestionBySlug(slug: string): Question | undefined {
  return QUESTIONS.find((q) => q.questionSlug === slug);
}

export function getQuestionsByTheme(themeId: string): Question[] {
  return QUESTIONS.filter((q) => q.themeIds.includes(themeId));
}
