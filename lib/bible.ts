import type { SQLiteDatabase } from 'expo-sqlite';

/**
 * Data layer for the bundled AKJV Bible database (assets/AKJV.db).
 *
 * Schema:
 *   AKJV_books(id INTEGER PK, name TEXT)
 *   AKJV_verses(id INTEGER PK, book_id INTEGER, chapter INTEGER, verse INTEGER, text TEXT)
 *   translations(translation TEXT PK, title TEXT, license TEXT)
 */

export type Book = {
  id: number;
  name: string;
};

export type Verse = {
  id: number;
  book_id: number;
  chapter: number;
  verse: number;
  text: string;
};

export type SearchResult = Verse & {
  book_name: string;
};

/** The 66-book Protestant canon: books 1–39 are Old Testament, 40–66 are New. */
export type Testament = 'old' | 'new';

/** Highest book id belonging to the Old Testament (Malachi). */
export const LAST_OT_BOOK_ID = 39;

export function testamentOf(bookId: number): Testament {
  return bookId <= LAST_OT_BOOK_ID ? 'old' : 'new';
}

/** All 66 books, in canonical order (id order). */
export function getBooks(db: SQLiteDatabase): Book[] {
  return db.getAllSync<Book>('SELECT id, name FROM AKJV_books ORDER BY id');
}

/** Books for one testament, in canonical order. */
export function getBooksByTestament(db: SQLiteDatabase, testament: Testament): Book[] {
  return testament === 'old'
    ? db.getAllSync<Book>('SELECT id, name FROM AKJV_books WHERE id <= ? ORDER BY id', LAST_OT_BOOK_ID)
    : db.getAllSync<Book>('SELECT id, name FROM AKJV_books WHERE id > ? ORDER BY id', LAST_OT_BOOK_ID);
}

/** How many verses a given chapter has. */
export function getVerseCount(db: SQLiteDatabase, bookId: number, chapter: number): number {
  const row = db.getFirstSync<{ n: number }>(
    'SELECT MAX(verse) AS n FROM AKJV_verses WHERE book_id = ? AND chapter = ?',
    bookId,
    chapter
  );
  return row?.n ?? 0;
}

/** How many chapters a book has. */
export function getChapterCount(db: SQLiteDatabase, bookId: number): number {
  const row = db.getFirstSync<{ n: number }>(
    'SELECT MAX(chapter) AS n FROM AKJV_verses WHERE book_id = ?',
    bookId
  );
  return row?.n ?? 0;
}

/** All verses for a given book + chapter, in verse order. */
export function getChapter(db: SQLiteDatabase, bookId: number, chapter: number): Verse[] {
  return db.getAllSync<Verse>(
    'SELECT id, book_id, chapter, verse, text FROM AKJV_verses WHERE book_id = ? AND chapter = ? ORDER BY verse',
    bookId,
    chapter
  );
}

/** A single verse, e.g. John 3:16. */
export function getVerse(
  db: SQLiteDatabase,
  bookId: number,
  chapter: number,
  verse: number
): Verse | null {
  return db.getFirstSync<Verse>(
    'SELECT id, book_id, chapter, verse, text FROM AKJV_verses WHERE book_id = ? AND chapter = ? AND verse = ?',
    bookId,
    chapter,
    verse
  );
}

/** Full-text-ish search across all verse text. Case-insensitive LIKE match. */
export function searchVerses(db: SQLiteDatabase, query: string, limit = 100): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  return db.getAllSync<SearchResult>(
    `SELECT v.id, v.book_id, v.chapter, v.verse, v.text, b.name AS book_name
       FROM AKJV_verses v
       JOIN AKJV_books b ON b.id = v.book_id
      WHERE v.text LIKE ? COLLATE NOCASE
      ORDER BY v.id
      LIMIT ?`,
    `%${q}%`,
    limit
  );
}
