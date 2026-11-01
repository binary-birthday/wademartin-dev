import { z } from "astro/zod";
import { TAGS } from "./tags";

// Allowed note statuses (SPEC.md 5.2).
export const STATUSES = ["exploring", "settled", "outdated"] as const;

// Frontmatter for a note (SPEC.md 5.1). Unknown fields are rejected so a
// typo in a field name fails the build instead of being ignored.
export const noteSchema = z.strictObject({
  title: z.string().min(1),
  date: z.coerce.date(),
  summary: z.string().min(1),
  status: z.enum(STATUSES),
  tags: z.array(z.enum(TAGS)).min(1),
  updated: z.coerce.date().optional(),
  superseded_by: z.string().optional(),
  links: z.array(z.url()).optional(),
});
