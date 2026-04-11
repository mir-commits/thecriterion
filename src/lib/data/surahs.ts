/**
 * Surah Mock Data
 *
 * This is V1 stub data. The Quran text itself (Arabic, verse count, surah names)
 * is drawn from well-established Tanzil-derived data and is accurate.
 * Plain descriptions are editorial summaries, not retrieved tafsir claims.
 *
 * The full provenance pipeline (indexing against Tanzil.net XML, OpenITI corpus)
 * is Phase 2 of the framework build plan.
 */

import type { Surah } from "@/lib/types";
import { stubProvenance } from "@/lib/types";

export const SURAHS: Surah[] = [
  {
    surahId: 1,
    nameArabic: "الفاتحة",
    nameTransliterated: "Al-Fatiha",
    nameMeaning: "The Opening",
    revelationType: "makki",
    chronologicalOrder: 5,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 7,
    wordCount: 29,
    letterCount: 139,
    primaryThemeIds: ["prayer", "divine-attributes", "guidance"],
    briefDescription:
      "The Opening is the first chapter of the Quran, recited in every prayer. It establishes the relationship between the human and God — praise, acknowledgment of sovereignty, and request for guidance.",
    structuralNote:
      "A complete prayer in itself; recited in every unit of formal prayer. Al-Suyuti notes it is called 'Umm al-Quran' (Mother of the Quran) for its comprehensive nature.",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 2,
    nameArabic: "البقرة",
    nameTransliterated: "Al-Baqara",
    nameMeaning: "The Cow",
    revelationType: "madani",
    chronologicalOrder: 87,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 286,
    wordCount: 6156,
    letterCount: 25613,
    primaryThemeIds: ["guidance", "faith-disbelief", "legal-rulings", "patience"],
    briefDescription:
      "The longest surah in the Quran. Addresses the Muslim community in Medina on faith, law, history, and the nature of guidance. Contains Ayat al-Kursi (2:255) and the final verses on riba, debt, and supplication.",
    structuralNote:
      "Classical scholars note a ring-composition structure with Ayat al-Kursi at the center (Raymond Farrin analysis). Madani in revelation; comprehensive in scope.",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 3,
    nameArabic: "آل عمران",
    nameTransliterated: "Al Imran",
    nameMeaning: "The Family of Imran",
    revelationType: "madani",
    chronologicalOrder: 89,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 200,
    wordCount: 3504,
    letterCount: 14605,
    primaryThemeIds: ["faith-disbelief", "prophethood", "patience", "divine-attributes"],
    briefDescription:
      "Addresses the Christian delegation from Najran and theological questions about Jesus and Mary. Covers the Battle of Uhud and lessons on steadfastness in adversity.",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 4,
    nameArabic: "النساء",
    nameTransliterated: "An-Nisa",
    nameMeaning: "The Women",
    revelationType: "madani",
    chronologicalOrder: 92,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 176,
    wordCount: 3764,
    letterCount: 16327,
    primaryThemeIds: ["relationships", "justice", "legal-rulings"],
    briefDescription:
      "Detailed legislation on family law, inheritance, treatment of orphans, and marriage. Also addresses hypocrites, the People of the Book, and the ethics of war.",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 5,
    nameArabic: "المائدة",
    nameTransliterated: "Al-Ma'ida",
    nameMeaning: "The Table Spread",
    revelationType: "madani",
    chronologicalOrder: 112,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 120,
    wordCount: 2839,
    letterCount: 12272,
    primaryThemeIds: ["legal-rulings", "guidance-practice", "faith-disbelief"],
    briefDescription:
      "Among the last revealed surahs. Contains the perfection of religion verse (5:3), dietary laws, and extended dialogue with the People of the Book. Includes the prohibition of intoxicants (5:90).",
    structuralNote:
      "Classical consensus that this surah contains no abrogated verses — its rulings are considered final.",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 12,
    nameArabic: "يوسف",
    nameTransliterated: "Yusuf",
    nameMeaning: "Joseph",
    revelationType: "makki",
    chronologicalOrder: 53,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 111,
    wordCount: 1795,
    letterCount: 7491,
    primaryThemeIds: ["prophethood", "patience", "inner-states", "divine-attributes"],
    briefDescription:
      "The complete narrative of the Prophet Yusuf (Joseph), called 'the most beautiful of stories' (12:3). A sustained account of patience through trial, betrayal, and ultimate divine vindication.",
    structuralNote:
      "The only surah that presents a complete sustained narrative from beginning to end. It is thematically unified around the theme of sabr (patience) and tawakkul (trust in God).",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 18,
    nameArabic: "الكهف",
    nameTransliterated: "Al-Kahf",
    nameMeaning: "The Cave",
    revelationType: "makki",
    chronologicalOrder: 69,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 110,
    wordCount: 1583,
    letterCount: 6360,
    primaryThemeIds: ["faith-disbelief", "prophethood", "inner-states", "worldly-affairs"],
    briefDescription:
      "Contains four parables: the People of the Cave, the man with two gardens, Moses and Khidr, and Dhul-Qarnayn. Traditionally recited on Fridays as protection from the trials of the Dajjal.",
    structuralNote:
      "The surah is structured around four narratives that together address the four trials of the final age: trial of faith, wealth, knowledge, and power.",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 36,
    nameArabic: "يس",
    nameTransliterated: "Ya Sin",
    nameMeaning: "Ya Sin",
    revelationType: "makki",
    chronologicalOrder: 41,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 83,
    wordCount: 733,
    letterCount: 2997,
    primaryThemeIds: ["prophethood", "eschatology", "divine-attributes"],
    briefDescription:
      "Called 'the heart of the Quran' in a reported hadith. Addresses the truth of revelation, the story of a town that rejected its messengers, and detailed descriptions of resurrection and the afterlife.",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 55,
    nameArabic: "الرحمن",
    nameTransliterated: "Ar-Rahman",
    nameMeaning: "The Most Gracious",
    revelationType: "madani",
    chronologicalOrder: 97,
    chronologicalOrderSource: "al-Suyuti, al-Itqan (disputed: some classify as Makki)",
    verseCount: 78,
    wordCount: 352,
    letterCount: 1629,
    primaryThemeIds: ["divine-attributes", "eschatology", "gratitude"],
    briefDescription:
      "A rhythmic surah of divine blessings, with the repeated refrain 'Which of your Lord's favors would you deny?' Enumerates signs of divine mercy in creation and describes paradise in vivid detail.",
    structuralNote:
      "The refrain 'Fa-bi-ayyi ala'i Rabbikuma tukadhdhibani' appears 31 times — a rhetorical structure unique in the Quran.",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 56,
    nameArabic: "الواقعة",
    nameTransliterated: "Al-Waqi'a",
    nameMeaning: "The Inevitable Event",
    revelationType: "makki",
    chronologicalOrder: 46,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 96,
    wordCount: 379,
    letterCount: 1716,
    primaryThemeIds: ["eschatology", "gratitude", "divine-attributes"],
    briefDescription:
      "Describes the three groups of people at the Day of Judgment: the foremost, the companions of the right, and the companions of the left. Vividly details the afterlife and the blessings of paradise.",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 67,
    nameArabic: "الملك",
    nameTransliterated: "Al-Mulk",
    nameMeaning: "The Sovereignty",
    revelationType: "makki",
    chronologicalOrder: 77,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 30,
    wordCount: 330,
    letterCount: 1300,
    primaryThemeIds: ["divine-attributes", "eschatology", "gratitude"],
    briefDescription:
      "Opens with the declaration of God's sovereignty over all creation. Traditionally recited before sleeping. Addresses the purpose of death and life, the signs of God in creation, and the consequences of disbelief.",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 112,
    nameArabic: "الإخلاص",
    nameTransliterated: "Al-Ikhlas",
    nameMeaning: "Sincerity",
    revelationType: "makki",
    chronologicalOrder: 22,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 4,
    wordCount: 15,
    letterCount: 47,
    primaryThemeIds: ["divine-attributes", "faith-disbelief"],
    briefDescription:
      "The purest statement of monotheism in the Quran. Four verses that define the nature of God: absolute oneness, self-sufficient, unbegotten and not begotten, without equal.",
    structuralNote:
      "Described in a hadith as equivalent to one-third of the Quran in its thematic weight (Bukhari). Al-Bayhaqi and others discuss the sense: it contains the essence of divine attributes.",
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 113,
    nameArabic: "الفلق",
    nameTransliterated: "Al-Falaq",
    nameMeaning: "The Daybreak",
    revelationType: "makki",
    chronologicalOrder: 20,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 5,
    wordCount: 23,
    letterCount: 69,
    primaryThemeIds: ["divine-attributes", "inner-states"],
    briefDescription:
      "A supplication for refuge in God from external evils: darkness, malicious envy, and harm. Paired with Al-Nas as the Mu'awwidhatayn (the two seeking-refuge surahs).",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
  {
    surahId: 114,
    nameArabic: "الناس",
    nameTransliterated: "An-Nas",
    nameMeaning: "Mankind",
    revelationType: "makki",
    chronologicalOrder: 21,
    chronologicalOrderSource: "al-Suyuti, al-Itqan",
    verseCount: 6,
    wordCount: 20,
    letterCount: 80,
    primaryThemeIds: ["divine-attributes", "inner-states", "faith-disbelief"],
    briefDescription:
      "Seeks refuge from the internal evil of the whisperer — the one who retreats when God is remembered but returns when heedlessness sets in. The Quran closes with this supplication.",
    structuralNote: null,
    provenance: stubProvenance({ tier: 1, confidenceScore: 0.99, isStub: false }),
  },
];

/**
 * Get all surahs as lightweight refs for navigation and lists.
 */
export function getSurahList() {
  return SURAHS.map(({ surahId, nameArabic, nameTransliterated, nameMeaning, revelationType, verseCount }) => ({
    surahId,
    nameArabic,
    nameTransliterated,
    nameMeaning,
    revelationType,
    verseCount,
  }));
}

export function getSurahById(id: number): Surah | undefined {
  return SURAHS.find((s) => s.surahId === id);
}
