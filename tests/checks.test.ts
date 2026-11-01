import { describe, expect, it } from "vitest";
import { checkSupersededBy } from "../src/lib/checks";

describe("checkSupersededBy", () => {
  it("passes when superseded_by names an existing note", () => {
    const notes = [
      { id: "old", data: { superseded_by: { id: "new" } } },
      { id: "new", data: {} },
    ];
    expect(() => checkSupersededBy(notes)).not.toThrow();
  });

  it("fails when superseded_by names a note that doesn't exist", () => {
    const notes = [{ id: "old", data: { superseded_by: { id: "missing" } } }];
    expect(() => checkSupersededBy(notes)).toThrow(/missing/);
  });
});
