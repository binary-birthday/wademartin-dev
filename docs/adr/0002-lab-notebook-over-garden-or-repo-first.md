# 0002. Lab notebook over garden or repo-first

**Status:** Accepted
**Date:** 2026-11-01

## Context

The site is a place to try out ideas and document them, mainly so they can be
shared with teammates by link. Readers are developers. Maintenance time is
very limited. Experiments live in separate repos.

Options considered:

- **Lab notebook:** dated notes with a status, mostly written once.
  Lowest upkeep; but knowledge spreads across notes and old thinking lingers.
- **Knowledge base (garden):** topic pages kept current. A shared link gives
  the current answer, but it only works with regular upkeep, and stale pages
  look authoritative.
- **Repo-first:** writing lives in experiment repos; the site is a thin
  index. No duplication, but repo docs explain how to run code, not what was
  learned, and the reading experience suffers.

## Decision

A lab notebook, with one idea borrowed from each alternative:

- From repo-first: notes summarise and link to repos; they never duplicate
  repo docs.
- From the garden: a note may be updated (with a visible `updated` date) or
  marked `outdated` and pointed at its replacement. Optional, never required.

One content type, the note, with a status of `exploring`, `settled` or
`outdated`, and tags from a fixed list.

## Consequences

- Publishing is cheap and needs no follow-up.
- Readers always see how mature and how current a note is.
- Finding the latest thinking on a topic relies on tags and `superseded_by`.
- Revisit if keeping topic summaries current becomes worth the time.
