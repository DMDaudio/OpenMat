# Contributing to OpenMat

Thank you for helping build free GMAT prep. This guide covers **what** to contribute,
the **rules** every contribution must follow, the **format**, and the **review workflow**.

If anything here is unclear, open an issue — improving these docs is a valid contribution too.

---

## Ways to contribute (from highest impact to lowest lift)

1. **Write original questions** with complete worked explanations.
2. **Write concept lessons** for topics in [`curriculum.md`](curriculum.md).
3. **Review `in-review` questions** — verify the answer, check the explanation, sanity-check
   the difficulty tag, then approve or request changes.
4. **Report bad content** — a wrong answer, a broken explanation, a mistagged topic. Open an
   issue using the "Report a content error" template.
5. **Fix typos, tighten explanations, improve the taxonomy or tooling.**

You do **not** need to be a 750-scorer to help. Reviewing and error-reporting are how the bank
stays trustworthy.

---

## The two hard rules

### 1. Original work only — never copy real GMAT questions

GMAT questions are copyrighted by GMAC. **Do not** copy, paraphrase, or lightly reword
questions from the Official Guide, mba.com, GMAT Club, or any prep company. Every question
here must be **written from scratch**.

Being "inspired by" a concept is fine (that's just the topic). Reproducing a specific
question's numbers, setup, or answer choices is not. When in doubt, write a genuinely new
scenario with your own numbers.

By contributing you confirm the content is your own original work.

### 2. Correctness is non-negotiable

A question with a wrong answer, or a lesson with a false claim, is worse than nothing —
it actively harms a studier. Before you submit:

- **Solve your own question fresh**, ideally a day later, and confirm the answer.
- **Make sure exactly one answer choice is correct** and the distractors reflect *plausible
  mistakes* (a good distractor is the answer you'd get from a specific common error).
- **Write the explanation for someone who got it wrong** — show the reasoning, name the trap.

---

## Content format

All content is **Markdown with YAML front-matter**. The front-matter is the structured,
machine-readable metadata; the Markdown body is the human-readable stem and explanation.

The exact fields and rules are in **[CONTENT_SCHEMA.md](CONTENT_SCHEMA.md)** and are validated
against the JSON Schemas in [`content/schema/`](content/schema/).

The fastest way to start: **copy an existing example and edit it.**

- Questions: see [`content/questions/`](content/questions/) (there's one example per section).
- Lessons: see [`content/lessons/`](content/lessons/).

### File naming & location

```
content/questions/<section>/<section>-<topic>-<subtopic>-NNNN.md
content/lessons/<section>/<topic>-<subtopic>.md
```

- `<section>` is `quant`, `verbal`, or `data-insights`.
- `<topic>` / `<subtopic>` must be slugs that exist in [`curriculum.md`](curriculum.md).
- `NNNN` is a zero-padded sequence number, **unique within the subtopic** — pick the next unused
  number *for that exact subtopic*. A brand-new subtopic starts at `0001`; a subtopic that already
  has `...-0001` and `...-0002` continues at `0003`.

Example: `content/questions/quant/quant-algebra-linear-equations-0001.md`

> **Why per-subtopic and not per-section?** Contributors (and automated runs) work on separate
> branches that haven't merged yet. A single section-wide counter makes every open branch grab the
> same "next" number, so two PRs collide the moment they touch the same section. Numbering *within
> the subtopic* means two PRs only ever collide if they target the **same subtopic** — which the
> coordination rules below already tell you to avoid. Existing files are already unique within their
> subtopic, so nothing needs renaming.

---

## The review workflow

Every question carries a `status` field that moves through three states:

| Status | Meaning |
|--------|---------|
| `draft` | Just written by the author; not yet checked by anyone else. |
| `in-review` | The author believes it's ready; awaiting a second person to verify. |
| `verified` | A **different** contributor has independently solved it, confirmed the answer, and checked the explanation. |

**A contributor may not move their own question to `verified`.** Verification always requires a
second pair of eyes — that's the whole quality mechanism.

### As an author

1. Fork the repo (or create a branch).
2. Add your file(s), copying an example and following [CONTENT_SCHEMA.md](CONTENT_SCHEMA.md).
3. Set `status: in-review` when you believe it's ready (or `draft` if you want early feedback).
4. Open a pull request using the PR template. Fill in the checklist.

### As a reviewer

1. Find a PR (or a `status: in-review` file) to review.
2. **Solve the question yourself without reading the answer first.** Do you get the keyed answer?
3. Check: Is exactly one choice correct? Are distractors plausible? Is the explanation right and
   clear? Is the topic/subtopic/difficulty tag accurate?
4. If good, approve and (in the PR) bump `status: verified` and add yourself to `reviewers`.
   If not, request changes with specifics.

---

## Difficulty tags

Use the studier's-eye estimate, not your own:

- `easy` — a well-prepared studier gets this reliably; ~sub-600 band.
- `medium` — trips people who are rushing or shaky on the concept; ~600–700 band.
- `hard` — has a real trap, multi-step reasoning, or a subtle distractor; ~700+ band.

If unsure, tag `medium` and note your uncertainty in the PR — reviewers can adjust.

---

## Automated & daily-run contributions

Some content is added by automated "daily run" agents. Because every run works on its **own
branch** and those branches are **not merged between runs**, a run that only looks at `main` is
blind to what other in-flight runs have already produced — which historically led to several PRs
re-seeding the same subtopic and colliding on sequence numbers. If you run one of these agents (or
review their output), follow this protocol so parallel work doesn't duplicate:

1. **Check what's already in flight, not just `main`.** Before choosing a subtopic, list the
   repository's **open pull requests** and read their titles/branches. Treat any subtopic that an
   open PR already covers as *taken* — do not seed it again. (`main` alone is not the current state
   of the world; most content lives in unmerged branches.)
2. **One subtopic per run, and prefer genuine gaps.** Pick a subtopic that is uncovered on `main`
   **and** not claimed by any open PR. Run `node scripts/coverage.mjs` to see per-subtopic counts
   and gaps on the current checkout, then cross-check against open PRs for the in-flight ones.
3. **Number within the subtopic.** Follow the [file-naming rule](#file-naming--location):
   `NNNN` is the next unused number *for that subtopic*. Since rule 2 keeps runs on distinct
   subtopics, per-subtopic numbering makes filename collisions between branches impossible without
   having to inspect other branches' numbers.
4. **Keep each run on its own branch and its own PR.** Don't stack a new run's content onto another
   run's branch, and don't reuse a merged PR — start fresh from the latest default branch.
5. **Stop at "open PR."** Opening the draft PR is the end of a run's job. Don't re-seed a subtopic
   that any open PR (including your own from a previous run) already handles.

Reviewers/maintainers: merging or closing the open backlog promptly is what makes rules 1–2
reliable — the longer PRs sit unmerged, the more the "check open PRs" step has to compensate for.

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). Be kind; assume good
faith; critique the content, not the contributor.

## Questions?

Open an issue. Thanks for making GMAT prep free. 🎓
