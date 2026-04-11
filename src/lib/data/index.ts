/**
 * Data layer barrel export.
 *
 * ALL functions in this module return stub data in V1.
 * The retrieval layer (src/lib/retrieval/) is the extension point
 * for wiring real graph queries, RAG, and indexed corpus lookup.
 */

export { SURAHS, getSurahById, getSurahList } from "./surahs";
export { VERSES, getVerseById, getVersesBySurah, getVersesByTheme } from "./verses";
export { THEMES, getThemeById, getThemesByCluster } from "./themes";
export { QUESTIONS, PROMPT_CHIPS, getQuestionBySlug, getQuestionsByTheme } from "./questions";
