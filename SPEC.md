# Spec: wademartin.dev

> The single source of truth for what this site should be **right now**.
> Every change that alters behaviour updates this file in the same PR.

**Status:** Draft · items marked _(open)_ are not yet decided.

## 1. Purpose

A portfolio for platform engineering, DevOps, MLOps and agentic,
spec-driven development work.

This repo is the **publishing layer**. Experiments live in their own repos;
this site presents them as case studies and links to the evidence.

## 2. Audience _(open)_

Primary reader: _(open: hiring managers / clients / peers)_.

After 60 seconds a visitor should understand: _(open: one-line positioning)_.

## 3. Pages and acceptance criteria

### 3.1 Home
- States who I am and what I do in one or two sentences.
- Links to featured case studies and contact.

### 3.2 Case studies index
- Lists every published case study with title, one-line summary and tags.

### 3.3 Case study page
- Follows the case-study format in §4.
- Links to the source repo and its key specs/ADRs.

### 3.4 About
- Background, focus areas, current interests.

### 3.5 Contact
- At least one working contact method. No contact form (see §6).

## 4. Case-study format

Every case study has these sections, in this order:

1. **Context:** what I was trying to learn or solve.
2. **Approach:** the method or pattern being tried.
3. **Setup:** repo link, scale, constraints.
4. **What happened:** what worked, what hurt, any metrics.
5. **Trade-offs and verdict:** when I'd use it again, and when I wouldn't.
6. **Links:** repo, key specs and ADRs.

## 5. Quality bar

- Lighthouse ≥ 95 in every category on key pages.
- Accessible to WCAG 2.2 AA.
- No broken internal or external links.
- Every merge to `main` deploys automatically.
- Every PR gets a preview build.

## 6. Non-goals

- No CMS, backend, auth, comments or contact forms.
- No tracking cookies.
- Not a place to run platform/DevOps/SDD experiments; those get their own repos.

## 7. Open questions

- Audience and positioning (§2).
- Stack and hosting: to be decided by ADR.
- Domain.
