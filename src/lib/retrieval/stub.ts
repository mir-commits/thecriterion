/**
 * Stub Retrieval Client — V1
 *
 * Returns data from src/lib/data/ (local mock data).
 * Every result is marked isStub: true so the UI can display appropriate caveats.
 *
 * Replace this with a real implementation when the knowledge graph
 * and corpus pipeline are ready. The interface (RetrievalClient) does not change.
 */

import type { RetrievalClient, RetrievedResult, VerseQuery, TafsirQuery } from "./types";
import type { Surah, SurahRef } from "@/lib/types/surah";
import type { Verse, VerseRef } from "@/lib/types/verse";
import type { Theme } from "@/lib/types/theme";
import type { Question } from "@/lib/types/question";
import type { TafsirClaim } from "@/lib/types/tafsir";

import {
  getSurahById,
  getSurahList,
  getVerseById,
  getVersesBySurah,
  getVersesByTheme,
  THEMES,
  getThemeById,
  QUESTIONS,
  getQuestionBySlug,
  VERSES,
} from "@/lib/data";

function wrapStub<T>(data: T): RetrievedResult<T> {
  return {
    data,
    source: "stub",
    retrievedAt: new Date().toISOString(),
    isStub: true,
  };
}

export const stubClient: RetrievalClient = {
  async getSurah(surahId: number): Promise<RetrievedResult<Surah | null>> {
    return wrapStub(getSurahById(surahId) ?? null);
  },

  async listSurahs(): Promise<RetrievedResult<SurahRef[]>> {
    return wrapStub(getSurahList());
  },

  async getVerse(verseId: string): Promise<RetrievedResult<Verse | null>> {
    return wrapStub(getVerseById(verseId) ?? null);
  },

  async listVerses(query: VerseQuery): Promise<RetrievedResult<VerseRef[]>> {
    let verses: Verse[] = [];
    if (query.surahId) {
      verses = getVersesBySurah(query.surahId);
    } else if (query.themeId) {
      verses = getVersesByTheme(query.themeId);
    } else {
      verses = VERSES;
    }
    if (query.limit) {
      verses = verses.slice(0, query.limit);
    }
    const refs: VerseRef[] = verses.map((v) => ({
      verseId: v.verseId,
      surahId: v.surahId,
      surahName: "",       // Surah name lookup would be a graph join in production
      surahNameArabic: "",
      verseNumber: v.verseNumber,
      arabicText: v.arabicText,
      translation: v.translation,
    }));
    return wrapStub(refs);
  },

  async getTheme(themeId: string): Promise<RetrievedResult<Theme | null>> {
    return wrapStub(getThemeById(themeId) ?? null);
  },

  async listThemes(): Promise<RetrievedResult<Theme[]>> {
    return wrapStub(THEMES);
  },

  async getQuestion(slug: string): Promise<RetrievedResult<Question | null>> {
    return wrapStub(getQuestionBySlug(slug) ?? null);
  },

  async listQuestions(): Promise<RetrievedResult<Question[]>> {
    return wrapStub(QUESTIONS);
  },

  async searchVerses(text: string): Promise<RetrievedResult<VerseRef[]>> {
    const lower = text.toLowerCase();
    const results = VERSES.filter(
      (v) =>
        v.translation.toLowerCase().includes(lower) ||
        v.plainExplanation.toLowerCase().includes(lower) ||
        v.verseId.includes(text)
    ).map((v) => ({
      verseId: v.verseId,
      surahId: v.surahId,
      surahName: "",
      surahNameArabic: "",
      verseNumber: v.verseNumber,
      arabicText: v.arabicText,
      translation: v.translation,
    }));
    return wrapStub(results);
  },

  async getTafsirClaims(_query: TafsirQuery): Promise<RetrievedResult<TafsirClaim[]>> {
    // V1: No tafsir claims retrieved.
    // The Citation Verification Gate is not yet implemented.
    // Returning empty array is the correct safe behavior — do not generate claims.
    return wrapStub([]);
  },
};
