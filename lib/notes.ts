import { openDatabaseSync, type SQLiteDatabase } from "expo-sqlite";

/**
 * Writable data layer for user-recorded sermon notes.
 *
 * This is a SEPARATE database from the bundled read-only AKJV Bible
 * (assets/AKJV.db, see lib/bible.ts). It is created on the device the first
 * time it is opened and stores whatever the user records.
 *
 * Schema:
 *   notes(id INTEGER PK, preacher TEXT, date TEXT, message TEXT, created_at INTEGER)
 */

export type Note = {
  id: number;
  preacher: string;
  date: string;
  message: string;
  created_at: number;
};

export type NoteInput = {
  preacher: string;
  date: string;
  message: string;
};

let db: SQLiteDatabase | null = null;

/** Lazily open the notes DB and ensure the schema exists (runs once). */
function getDb(): SQLiteDatabase {
  if (db) return db;
  db = openDatabaseSync("myble-notes.db");
  db.execSync(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY NOT NULL,
      preacher TEXT NOT NULL,
      date TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );
  `);
  return db;
}

/** All notes, newest first. */
export function getNotes(): Note[] {
  return getDb().getAllSync<Note>(
    "SELECT * FROM notes ORDER BY created_at DESC",
  );
}

/** A single note by id, or null if it no longer exists. */
export function getNote(id: number): Note | null {
  return getDb().getFirstSync<Note>("SELECT * FROM notes WHERE id = ?", id);
}

/** Insert a new note and return its generated id. */
export function addNote(input: NoteInput): number {
  const result = getDb().runSync(
    "INSERT INTO notes (preacher, date, message, created_at) VALUES (?, ?, ?, ?)",
    input.preacher.trim(),
    input.date.trim(),
    input.message.trim(),
    Date.now(),
  );
  return result.lastInsertRowId;
}

/** Overwrite an existing note's fields. */
export function updateNote(id: number, input: NoteInput): void {
  getDb().runSync(
    "UPDATE notes SET preacher = ?, date = ?, message = ? WHERE id = ?",
    input.preacher.trim(),
    input.date.trim(),
    input.message.trim(),
    id,
  );
}

/** Delete a note. */
export function deleteNote(id: number): void {
  getDb().runSync("DELETE FROM notes WHERE id = ?", id);
}
