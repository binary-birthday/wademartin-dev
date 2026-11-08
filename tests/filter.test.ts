import { describe, expect, it } from "vitest";
import { countWith, emptyQuery, matches, parseQuery, toSearch, type Filterable } from "../src/lib/filter";

const notes: Filterable[] = [
  { title: "Build once", summary: "Deploy what you tested.", status: "settled", tags: ["devops", "dx"] },
  { title: "Evals in CI", summary: "Fail a PR on a score drop.", status: "exploring", tags: ["ai", "devops"] },
  { title: "Two builds", summary: "An earlier take.", status: "outdated", tags: ["devops"] },
];
const allowed = { statuses: ["exploring", "settled", "outdated"], tags: ["ai", "devops", "dx"] };
const find = (q: Partial<ReturnType<typeof emptyQuery>>) =>
  notes.filter((n) => matches(n, { ...emptyQuery(), ...q })).map((n) => n.title);

describe("matches", () => {
  it("matches everything with an empty query", () => {
    expect(find({})).toHaveLength(3);
  });

  it("matches any of the picked statuses", () => {
    expect(find({ statuses: ["settled", "outdated"] })).toEqual(["Build once", "Two builds"]);
  });

  it("requires all picked tags", () => {
    expect(find({ tags: ["devops", "ai"] })).toEqual(["Evals in CI"]);
  });

  it("matches typed words against title, summary, tags and status", () => {
    expect(find({ text: "deploy" })).toEqual(["Build once"]);
    expect(find({ text: "ai" })).toEqual(["Evals in CI"]);
    expect(find({ text: "outdated" })).toEqual(["Two builds"]);
  });

  it("requires every typed word, in any case", () => {
    expect(find({ text: "BUILD earlier" })).toEqual(["Two builds"]);
  });
});

describe("countWith", () => {
  it("counts notes left if a choice is added", () => {
    const q = { ...emptyQuery(), tags: ["devops"] };
    expect(countWith(notes, q, { kind: "status", value: "exploring" })).toBe(1);
    expect(countWith(notes, q, { kind: "tag", value: "dx" })).toBe(1);
    expect(countWith(notes, q, { kind: "tag", value: "ai" })).toBe(1);
  });
});

describe("URL round trip", () => {
  it("reads and writes status, tag and text", () => {
    const q = { statuses: ["exploring"], tags: ["devops", "ai"], text: "evals" };
    expect(parseQuery(toSearch(q), allowed)).toEqual(q);
  });

  it("drops unknown statuses, unknown tags and duplicates", () => {
    expect(parseQuery("?status=draft&status=settled&tag=mlops&tag=dx&tag=dx", allowed)).toEqual({
      statuses: ["settled"],
      tags: ["dx"],
      text: "",
    });
  });

  it("gives an empty string for an empty query", () => {
    expect(toSearch(emptyQuery())).toBe("");
  });
});
