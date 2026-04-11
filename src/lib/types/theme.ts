/**
 * Theme Types
 *
 * Implements the Theme node schema from theframework-v2.pdf Section 5a.11.
 * Themes are the connective tissue between Read mode and Ask mode.
 *
 * From CLAUDE.md: "Theme mode must support: clustered themes such as mercy,
 * justice, repentance, family, wealth, patience, hypocrisy, leadership,
 * links to verses and interpretive summaries, movement back into Ask and Read."
 */

import type { VerseRef } from "./verse";

/**
 * Theme cluster — top-level grouping of related themes.
 */
export type ThemeCluster =
  | "divine-attributes"    // God's names and attributes: mercy, power, knowledge
  | "human-condition"      // Human nature, weakness, accountability
  | "guidance-practice"    // Prayer, fasting, moral conduct, charity
  | "relationships"        // Family, marriage, community, justice
  | "inner-states"         // Patience, gratitude, grief, fear, hope
  | "faith-disbelief"      // Iman, kufr, hypocrisy, doubt
  | "prophethood"          // Messengers, revelation, mission
  | "eschatology"          // Death, resurrection, judgment, paradise, hellfire
  | "worldly-affairs"      // Wealth, leadership, governance, work
  | "quran-itself";        // The Quran's nature, preservation, its own claims

/**
 * A Theme node — connecting verses to life questions.
 */
export interface Theme {
  themeId: string;           // slug, e.g., "patience"
  nameArabic: string;        // e.g., "الصبر"
  nameEnglish: string;       // e.g., "Patience"
  cluster: ThemeCluster;

  // Thesis — a one-sentence distillation of what the Quran says on this theme
  thesis: string;

  // Longer description for the theme page
  description: string;

  // Verse list — displayed on theme page
  // V1: manually curated. Full graph query deferred.
  primaryVerses: VerseRef[];

  // Related themes
  relatedThemeIds: string[];

  // Questions this theme connects to
  relatedQuestionSlugs: string[];

  // How classical tafsir addresses this theme
  // V1: stub text, not retrieved from indexed corpus
  classicalTreatmentNote: string | null;
  classicalTreatmentIsStub: boolean;

  // Optional audio reflection (V1: null, audio content pipeline deferred)
  audioReflectionUrl: string | null;

  // Display: icon or visual identifier
  emoji: string | null;       // Simple emoji as visual shorthand (not decorative gimmick)
}
