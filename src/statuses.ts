// Allowed note statuses (SPEC.md 5.2). Kept apart from the schema so browser
// code can import it without pulling in Zod.
export const STATUSES = ["exploring", "settled", "outdated"] as const;

export type Status = (typeof STATUSES)[number];
