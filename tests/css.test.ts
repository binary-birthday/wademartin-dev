import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// Text may only use colours whose pairs are checked in tests/theme.test.ts.
// Border and background colours (--rule, --surface, --bg, --highlight) are
// not readable as text.
const TEXT_COLOURS = ["--text", "--muted", "--link", "--accent", "--on-fill", "inherit"];

describe("stylesheet", () => {
  const css = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");
  const uses = [...css.matchAll(/(?<![-\w])color:\s*([^;]+);/g)].map((m) => m[1].trim());

  it("finds colour rules to check", () => {
    expect(uses.length).toBeGreaterThan(10);
  });

  it.each(uses)("text colour %s is a checked text colour", (value) => {
    const name = value.match(/var\((--[\w-]+)\)/)?.[1] ?? value;
    expect(TEXT_COLOURS).toContain(name);
  });
});
