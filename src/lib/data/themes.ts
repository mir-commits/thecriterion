/**
 * Theme Mock Data
 *
 * Themes are the connective tissue between Read mode and Ask mode.
 * These are V1 editorial curations — not computed from the knowledge graph.
 * Classical treatment notes are explicitly flagged as stubs.
 */

import type { Theme } from "@/lib/types";

export const THEMES: Theme[] = [
  {
    themeId: "patience",
    nameArabic: "الصبر",
    nameEnglish: "Patience",
    cluster: "inner-states",
    thesis:
      "The Quran presents sabr (patient endurance) not as passive resignation but as active, principled perseverance — one of the most frequently commanded inner states, directly linked to divine companionship.",
    description:
      "Sabr appears in the Quran over 90 times in various forms. It encompasses enduring hardship, restraining oneself from wrongdoing, and persisting in obedience. The Quran consistently connects sabr to God's direct support: 'Allah is with the patient.'",
    primaryVerses: [
      { verseId: "2:153", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 153, arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", translation: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient." },
      { verseId: "2:45", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 45, arabicText: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", translation: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive." },
      { verseId: "94:5", surahId: 94, surahName: "Al-Inshirah", surahNameArabic: "الشرح", verseNumber: 5, arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "For indeed, with hardship [will be] ease." },
      { verseId: "3:139", surahId: 3, surahName: "Al Imran", surahNameArabic: "آل عمران", verseNumber: 139, arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا", translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers." },
    ],
    relatedThemeIds: ["inner-states", "gratitude", "prayer"],
    relatedQuestionSlugs: ["how-to-deal-with-hardship", "what-does-quran-say-about-anxiety", "how-to-find-hope"],
    classicalTreatmentNote:
      "Ibn Qayyim al-Jawziyya's Uddat al-Sabirin wa Dhakhirat al-Shakirin (Patience and Gratitude) is the classical treatment most often cited for this theme. However, this note has not been retrieved from an indexed source.",
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "🌱",
  },
  {
    themeId: "divine-attributes",
    nameArabic: "أسماء الله وصفاته",
    nameEnglish: "Names and Attributes of God",
    cluster: "divine-attributes",
    thesis:
      "The Quran's descriptions of God are the most sustained theological argument in the text — establishing divine uniqueness, mercy, knowledge, and sovereignty as the foundation from which all guidance flows.",
    description:
      "The Quran uses over 99 names and descriptions for God, woven throughout the text. Understanding these names is not decorative — they define the character of the One being worshipped and the basis for all trust, petition, and hope.",
    primaryVerses: [
      { verseId: "2:255", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 255, arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", translation: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence." },
      { verseId: "1:1", surahId: 1, surahName: "Al-Fatiha", surahNameArabic: "الفاتحة", verseNumber: 1, arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
    ],
    relatedThemeIds: ["prayer", "faith-disbelief", "gratitude"],
    relatedQuestionSlugs: ["what-is-ayat-al-kursi", "does-god-know-everything", "what-does-bismillah-mean"],
    classicalTreatmentNote: null,
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "✦",
  },
  {
    themeId: "guidance",
    nameArabic: "الهداية",
    nameEnglish: "Guidance",
    cluster: "human-condition",
    thesis:
      "The Quran presents hidayah (guidance) as both a divine gift and a responsive process — God guides those who seek, turn, and persist, while guidance itself is described as the Quran's primary purpose.",
    description:
      "Hidayah in the Quran is multilayered: general guidance given to all creation, prophetic guidance through revelation, and specific guidance given to believers who respond to the general call. The relationship between human seeking and divine granting is a recurring theme.",
    primaryVerses: [
      { verseId: "1:6", surahId: 1, surahName: "Al-Fatiha", surahNameArabic: "الفاتحة", verseNumber: 6, arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translation: "Guide us to the straight path —" },
      { verseId: "2:2", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 2, arabicText: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ", translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah." },
    ],
    relatedThemeIds: ["prayer", "faith-disbelief", "inner-states"],
    relatedQuestionSlugs: ["how-do-i-find-guidance", "what-is-the-straight-path", "how-to-start-reading-quran"],
    classicalTreatmentNote: null,
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "◇",
  },
  {
    themeId: "prayer",
    nameArabic: "الصلاة والدعاء",
    nameEnglish: "Prayer and Supplication",
    cluster: "guidance-practice",
    thesis:
      "The Quran treats prayer (salah) and supplication (du'a) as two forms of the same essential orientation: the human turning toward God. Both are described as means of help, not merely obligation.",
    description:
      "Prayer in the Quran is not merely a ritual obligation but a recurring source of strength ('seek help through patience and prayer'). Supplication is presented as direct access: 'Call upon Me; I will respond to you' (40:60).",
    primaryVerses: [
      { verseId: "1:5", surahId: 1, surahName: "Al-Fatiha", surahNameArabic: "الفاتحة", verseNumber: 5, arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "It is You we worship and You we ask for help." },
      { verseId: "2:153", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 153, arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", translation: "Seek help through patience and prayer." },
    ],
    relatedThemeIds: ["guidance-practice", "inner-states", "divine-attributes"],
    relatedQuestionSlugs: ["what-is-worship", "how-to-ask-god-for-help", "how-to-find-peace"],
    classicalTreatmentNote: null,
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "◯",
  },
  {
    themeId: "gratitude",
    nameArabic: "الشكر",
    nameEnglish: "Gratitude",
    cluster: "inner-states",
    thesis:
      "The Quran connects shukr (gratitude) directly to divine increase: 'If you are grateful, I will certainly give you more.' Gratitude is presented as both a response to blessing and a condition for continued receiving.",
    description:
      "Gratitude in the Quran is not a feeling but an orientation — recognizing that blessings come from God and responding with acknowledgment and use. The opposite (kufran — ingratitude) carries theological weight as a kind of spiritual blindness.",
    primaryVerses: [
      { verseId: "1:2", surahId: 1, surahName: "Al-Fatiha", surahNameArabic: "الفاتحة", verseNumber: 2, arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "All praise is due to Allah, Lord of the worlds." },
    ],
    relatedThemeIds: ["inner-states", "divine-attributes"],
    relatedQuestionSlugs: ["how-to-find-gratitude"],
    classicalTreatmentNote: null,
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "✧",
  },
  {
    themeId: "forgiveness",
    nameArabic: "المغفرة والتوبة",
    nameEnglish: "Forgiveness and Repentance",
    cluster: "inner-states",
    thesis:
      "The Quran presents tawbah (repentance/return) as a divine offer that remains open: God is al-Tawwab (the Ever-Accepting of Repentance), a name that implies ongoing receptivity rather than one-time allowance.",
    description:
      "Forgiveness in the Quran is an attribute of God, not a conditional reward. The Quran repeatedly invites return and repentance, closing doors only for those who refuse to the last moment. The believer's relationship with divine forgiveness is meant to generate hope, not presumption.",
    primaryVerses: [
      { verseId: "2:286", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 286, arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translation: "Allah does not burden a soul beyond that it can bear." },
    ],
    relatedThemeIds: ["inner-states", "divine-attributes", "faith-disbelief"],
    relatedQuestionSlugs: ["how-does-quran-address-guilt", "what-does-quran-say-about-forgiveness"],
    classicalTreatmentNote: null,
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "○",
  },
  {
    themeId: "hardship",
    nameArabic: "الابتلاء والشدة",
    nameEnglish: "Hardship and Trial",
    cluster: "inner-states",
    thesis:
      "The Quran addresses suffering directly and honestly — it does not promise an easy life, but promises that hardship is accompanied by ease, and that God is with those who endure.",
    description:
      "Trial (ibtila) in the Quran serves multiple purposes: it tests and purifies faith, elevates rank, and reveals the reality of one's relationship with God. The Quran never minimizes real suffering — it addresses it with directness, companionship, and hope.",
    primaryVerses: [
      { verseId: "94:5", surahId: 94, surahName: "Al-Inshirah", surahNameArabic: "الشرح", verseNumber: 5, arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "For indeed, with hardship [will be] ease." },
      { verseId: "2:153", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 153, arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", translation: "O you who have believed, seek help through patience and prayer." },
      { verseId: "2:286", surahId: 2, surahName: "Al-Baqara", surahNameArabic: "البقرة", verseNumber: 286, arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translation: "Allah does not burden a soul beyond that it can bear." },
      { verseId: "3:139", surahId: 3, surahName: "Al Imran", surahNameArabic: "آل عمران", verseNumber: 139, arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا", translation: "So do not weaken and do not grieve." },
    ],
    relatedThemeIds: ["patience", "inner-states", "divine-attributes"],
    relatedQuestionSlugs: ["how-to-deal-with-hardship", "what-does-quran-say-about-anxiety", "does-god-give-more-than-you-can-handle"],
    classicalTreatmentNote: null,
    classicalTreatmentIsStub: true,
    audioReflectionUrl: null,
    emoji: "◈",
  },
];

export function getThemeById(themeId: string): Theme | undefined {
  return THEMES.find((t) => t.themeId === themeId);
}

export function getThemesByCluster(cluster: Theme["cluster"]): Theme[] {
  return THEMES.filter((t) => t.cluster === cluster);
}
