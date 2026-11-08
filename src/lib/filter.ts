// Filtering for the home page search box (SPEC.md 6.1). No Astro imports, so
// it runs in the browser and in unit tests.

export interface Filterable {
  title: string;
  summary: string;
  status: string;
  tags: string[];
}

export interface Query {
  statuses: string[];
  tags: string[];
  text: string;
}

export const emptyQuery = (): Query => ({ statuses: [], tags: [], text: "" });

function words(text: string): string[] {
  return text.toLowerCase().split(/\s+/).filter(Boolean);
}

// A note matches if its status is one of the picked statuses (or none are
// picked), it has every picked tag, and every typed word appears in its
// title, summary, tags or status.
export function matches(note: Filterable, query: Query): boolean {
  if (query.statuses.length > 0 && !query.statuses.includes(note.status)) return false;
  if (!query.tags.every((tag) => note.tags.includes(tag))) return false;
  const haystack = [note.title, note.summary, note.status, ...note.tags].join(" ").toLowerCase();
  return words(query.text).every((word) => haystack.includes(word));
}

// How many notes would match if this status or tag were added.
export function countWith(
  notes: Filterable[],
  query: Query,
  add: { kind: "status" | "tag"; value: string },
): number {
  const next: Query = {
    statuses: add.kind === "status" ? [...query.statuses, add.value] : query.statuses,
    tags: add.kind === "tag" ? [...query.tags, add.value] : query.tags,
    text: "",
  };
  return notes.filter((note) => matches(note, next)).length;
}

export function parseQuery(search: string, allowed: { statuses: readonly string[]; tags: readonly string[] }): Query {
  const params = new URLSearchParams(search);
  const unique = (values: string[], ok: readonly string[]) => [...new Set(values)].filter((v) => ok.includes(v));
  return {
    statuses: unique(params.getAll("status"), allowed.statuses),
    tags: unique(params.getAll("tag"), allowed.tags),
    text: params.get("q") ?? "",
  };
}

export function toSearch(query: Query): string {
  const params = new URLSearchParams();
  query.statuses.forEach((s) => params.append("status", s));
  query.tags.forEach((t) => params.append("tag", t));
  if (query.text.trim()) params.set("q", query.text.trim());
  const out = params.toString();
  return out ? `?${out}` : "";
}
