# Content Schema

Every piece of OpenMat content is **one Markdown file** with a **YAML front-matter block**
(the structured metadata) followed by a **Markdown body** (the human-readable content).

This keeps content easy to review in a pull request (readable diffs, no database) while still
being machine-readable enough to power search, filtering, difficulty bands, and a study site.

Front-matter is validated against the JSON Schemas in [`content/schema/`](content/schema/):

- Questions → [`content/schema/question.schema.json`](content/schema/question.schema.json)
- Lessons → [`content/schema/lesson.schema.json`](content/schema/lesson.schema.json)

---

## Questions

```markdown
---
id: quant-algebra-linear-equations-0001
section: quant
topic: algebra
subtopic: linear-equations
type: problem-solving
difficulty: medium
tags: [linear-equations, word-problem]
choices:
  A: "12"
  B: "15"
  C: "18"
  D: "21"
  E: "24"
answer: B
author: your-github-handle
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

<the question stem / prompt goes here, in Markdown>

## Explanation

<the full worked solution, written for someone who got it wrong>

## Hints

- <hint 1 — a nudge, not the answer>
- <hint 2 — narrows it further>
```

### Question field reference

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `id` | yes | string | Unique. Must equal the filename without `.md`. Format: `<section>-<topic>-<subtopic>-NNNN`. |
| `section` | yes | enum | `quant` \| `verbal` \| `data-insights`. |
| `topic` | yes | string | A topic slug from [`curriculum.md`](curriculum.md). |
| `subtopic` | yes | string | A subtopic slug from [`curriculum.md`](curriculum.md). |
| `type` | yes | enum | Question format — see the table below. Must be valid for the section. |
| `difficulty` | yes | enum | `easy` \| `medium` \| `hard`. See CONTRIBUTING for the bands. |
| `tags` | no | string[] | Freeform extra tags for search. Lowercase kebab-case. |
| `choices` | yes* | map | Letter → answer text (`A`–`E`). *Not required for `data-sufficiency` if you use the standard DS choices (see below), but including them is fine.* |
| `answer` | yes | string | The correct choice letter (e.g. `B`). For multi-part types, see below. |
| `author` | yes | string | Your GitHub handle. |
| `reviewers` | yes | string[] | GitHub handles of people who verified it. Empty until reviewed. |
| `status` | yes | enum | `draft` \| `in-review` \| `verified`. See the workflow in CONTRIBUTING. |
| `original` | yes | boolean | Must be `true` — affirms the content is original work. |
| `license` | yes | const | Must be `CC-BY-SA-4.0`. |

### Valid `type` values per section

| Section | Allowed `type` values |
|---------|----------------------|
| `quant` | `problem-solving` |
| `verbal` | `critical-reasoning`, `reading-comprehension` |
| `data-insights` | `data-sufficiency`, `multi-source-reasoning`, `table-analysis`, `graphics-interpretation`, `two-part-analysis` |

### Data Sufficiency answers

For `type: data-sufficiency`, use the standard five DS choices. You may omit `choices` and just
set `answer` to one of `A`–`E`, where:

- **A** — statement (1) alone is sufficient, but (2) alone is not.
- **B** — statement (2) alone is sufficient, but (1) alone is not.
- **C** — both statements together are sufficient, but neither alone is.
- **D** — each statement alone is sufficient.
- **E** — the statements together are still not sufficient.

Put statement (1) and statement (2) in the `## Question` body.

### Multi-part answers (two-part, table analysis, etc.)

For types with more than one selectable answer (e.g. `two-part-analysis`, `table-analysis`),
set `answer` to a compact string describing each part, and lay the options out clearly in the
body. Example: `answer: "Part1=C; Part2=A"` or `answer: "Row1=Yes; Row2=No; Row3=Yes"`.
Keep the body unambiguous about what each part refers to.

---

## Lessons

```markdown
---
id: quant-algebra-linear-equations
section: quant
topic: algebra
subtopic: linear-equations
title: "Linear Equations"
tags: [algebra, equations]
author: your-github-handle
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview
## Core concepts
## Worked examples
## Common traps
## Key takeaways
```

### Lesson field reference

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `id` | yes | string | Unique. Equals the filename without `.md`. Format: `<section>-<topic>-<subtopic>`. |
| `section` | yes | enum | `quant` \| `verbal` \| `data-insights`. |
| `topic` | yes | string | Topic slug from [`curriculum.md`](curriculum.md). |
| `subtopic` | yes | string | Subtopic slug from [`curriculum.md`](curriculum.md). |
| `title` | yes | string | Human-readable lesson title. |
| `tags` | no | string[] | Freeform search tags. |
| `author` | yes | string | Your GitHub handle. |
| `reviewers` | yes | string[] | GitHub handles who reviewed it. |
| `status` | yes | enum | `draft` \| `in-review` \| `verified`. |
| `original` | yes | boolean | Must be `true`. |
| `license` | yes | const | Must be `CC-BY-SA-4.0`. |

The body sections above are a recommended structure, not a hard requirement — but every lesson
should at minimum explain the concept and show at least one worked example.

---

## Writing math and formatting

Bodies are standard Markdown (paragraphs, `**bold**`, `-` lists). Two conventions:

- **Math uses LaTeX with `\( \)` (inline) and `\[ \]` (display) delimiters** — rendered by KaTeX
  on the study site. Example: `the equation \(x + 2y = 47\)` or a display block
  `\[y = 17\]`. **Do not** use `$...$` for math.
- **Currency is just a literal dollar sign** — write `$47`, `$2 tokens`. Because math uses
  `\( \)` / `\[ \]`, dollar signs never get mistaken for math, so no escaping is needed.

## Validating locally

Front-matter must conform to the JSON Schemas in [`content/schema/`](content/schema/). A
CI check and a lightweight validator script are planned; until then, reviewers check the
fields by hand against this document.
