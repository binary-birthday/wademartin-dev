# 0001. Use a minimal, tool-agnostic form of spec-driven development

**Status:** Accepted
**Date:** 2026-11-01

## Context

This repo is a small static site with one maintainer. It publishes notes on
ideas and experiments. The experiments themselves live in other repos.

I want to work spec-first here, but only as much as a project this size needs.
Options considered:

- Long-lived specs only. These drift, and every change means rewriting them.
- Short specs per change only. Nothing records what the site should be now.
- A central standards repo with layers of shared rules. This solves problems
  of coordinating many people and repos, which this project doesn't have.

The process also has to work with any AI tool, or none.

## Decision

- One spec, `SPEC.md`, describes what the site should be now.
- Each PR description, using the template, is the spec for that change.
- ADRs only for big technical decisions.
- One set of rules, `CONTRIBUTING.md`, for people and agents. `AGENTS.md`
  only points to it.
- No tool-specific files are committed. Files like `CLAUDE.md` or `.cursor/`
  can exist locally to point at `AGENTS.md`, and are git-ignored.
- Step-by-step guides go in `skills/` as plain Markdown, and only once a task
  has been done enough times to be worth writing down.
- Check things in CI where possible instead of writing rules about them.

## Consequences

- There's little to maintain and one place to look.
- The history of changes lives in PRs, which ties it to GitHub.
- Revisit this if a second person starts contributing, if these rules get
  copied into another repo (move them to a shared place), or if PR
  descriptions turn out to be too thin as change specs.
