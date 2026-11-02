import { describe, expect, it } from "vitest";
import { noteSchema } from "../src/schema";

const valid = {
  title: "A note",
  date: "2026-11-01",
  summary: "One sentence.",
  status: "exploring",
  tags: ["devops"],
};

describe("note schema", () => {
  it("accepts a note with the required fields", () => {
    expect(noteSchema.safeParse(valid).success).toBe(true);
  });

  it("accepts the optional fields", () => {
    const note = {
      ...valid,
      status: "outdated",
      updated: "2026-11-02",
      superseded_by: "newer-note",
      links: ["https://github.com/example/repo"],
    };
    expect(noteSchema.safeParse(note).success).toBe(true);
  });

  it.each(["title", "date", "summary", "status", "tags"])("rejects a note missing %s", (field) => {
    const note: Record<string, unknown> = { ...valid };
    delete note[field];
    expect(noteSchema.safeParse(note).success).toBe(false);
  });

  it("rejects a tag that isn't in the fixed list", () => {
    expect(noteSchema.safeParse({ ...valid, tags: ["mlops"] }).success).toBe(false);
  });

  it("rejects an empty tag list", () => {
    expect(noteSchema.safeParse({ ...valid, tags: [] }).success).toBe(false);
  });

  it("rejects an unknown status", () => {
    expect(noteSchema.safeParse({ ...valid, status: "draft" }).success).toBe(false);
  });

  it("rejects unknown fields", () => {
    expect(noteSchema.safeParse({ ...valid, sumary: "typo" }).success).toBe(false);
  });

  it("rejects links that aren't URLs", () => {
    expect(noteSchema.safeParse({ ...valid, links: ["not a url"] }).success).toBe(false);
  });
});
