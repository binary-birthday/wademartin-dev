// The fixed list of tags (SPEC.md 5.3). To add a tag, add it here.
export const TAGS = ["devops", "dx", "webdev", "ai", "agents", "spec-driven"] as const;

export type Tag = (typeof TAGS)[number];
