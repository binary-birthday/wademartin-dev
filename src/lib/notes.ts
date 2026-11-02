import { getCollection, type CollectionEntry } from "astro:content";
import { checkSupersededBy } from "./checks";

export type Note = CollectionEntry<"notes">;

// All notes, newest first. Fails the build if a note's superseded_by names a
// note that doesn't exist, because Astro's reference() doesn't check this.
export async function getNotes(): Promise<Note[]> {
  const notes = await getCollection("notes");
  checkSupersededBy(notes);
  return notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function noteUrl(id: string): string {
  return `/notes/${id}/`;
}

export function tagUrl(tag: string): string {
  return `/tags/${tag}/`;
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
