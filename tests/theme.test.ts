import { describe, expect, it } from "vitest";
import { contrastRatio } from "../src/lib/contrast";
import { shapePairs, textPairs } from "../src/theme";

describe("theme contrast", () => {
  it.each(textPairs)("%s meets WCAG AA (4.5:1)", (_name, fg, bg) => {
    expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(4.5);
  });
});

describe("shape contrast", () => {
  it.each(shapePairs)("%s stands out from the page (3:1)", (_name, fill, bg) => {
    expect(contrastRatio(fill, bg)).toBeGreaterThanOrEqual(3);
  });
});

describe("contrastRatio", () => {
  it("gives 21:1 for black on white", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
  });
});
