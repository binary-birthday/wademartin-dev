# 0001. Adopt minimal, tool-agnostic SDD

**Status:** Accepted
**Date:** 2026-11-01

## Context

This repo is a portfolio: a small, single-maintainer static site whose job is
to publish case studies. Experiments with SDD, platform engineering and DevOps
approaches will live in separate repos.

We want spec-driven development here, but only as much as the scale justifies.
Considered:

- **Long-lived specs only.** Specs drift, and every change becomes a rewrite.
- **Change-scoped specs only.** No record of the current intended state.
- **Central standards repo / layered standards.** Solves coordination problems
  a one-person, one-repo project doesn't have.

We also want the process to work with any AI tool, or none.

## Decision

- One living spec, `SPEC.md`, describes the site as it should be now.
- The PR description, via a template, is the change-scoped spec.
- ADRs only for decisions between real alternatives.
- One working agreement, `CONTRIBUTING.md`, for humans and agents alike.
  `AGENTS.md` only points to it.
- No tool-specific files are committed. Local shims (e.g. `CLAUDE.md`,
  `.cursor/`) point to `AGENTS.md` and are git-ignored.
- Reusable procedures go in `skills/` as plain Markdown, added only when a task
  has been repeated enough to be worth writing down.
- Enforce in CI where possible rather than in prose.

## Consequences

- Little to maintain; one place to check what the site should be.
- Change history lives in PRs, so it is tied to GitHub as a platform.
- Revisit if: a second contributor joins, standards are copied into a second
  repo (extract them), or PR-based change specs prove too thin.
