import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getNotes, noteUrl } from "../lib/notes";

export async function GET(context: APIContext) {
  const notes = await getNotes();
  return rss({
    title: "wademartin.dev",
    description: "Notes on DevOps, developer experience, web development, AI apps, agents and spec-driven development.",
    site: context.site!,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.date,
      link: noteUrl(note.id),
    })),
  });
}
