// Checks that can't be expressed in the note schema. Kept free of Astro
// imports so they can be unit tested.

export function checkSupersededBy(notes: { id: string; data: { superseded_by?: { id: string } } }[]): void {
  const ids = new Set(notes.map((note) => note.id));
  for (const note of notes) {
    const target = note.data.superseded_by?.id;
    if (target !== undefined && !ids.has(target)) {
      throw new Error(`Note "${note.id}" has superseded_by "${target}", but no note with that name exists.`);
    }
  }
}
