import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { noteSchema } from "./schema";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  // superseded_by must name a note that exists.
  schema: noteSchema.extend({
    superseded_by: reference("notes").optional(),
  }),
});

export const collections = { notes };
