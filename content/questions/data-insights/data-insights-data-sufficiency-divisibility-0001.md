---
id: data-insights-data-sufficiency-divisibility-0001
section: data-insights
topic: data-sufficiency
subtopic: divisibility
type: data-sufficiency
difficulty: easy
tags: [divisibility, number-properties]
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Is the positive integer \(n\) divisible by 6?

1. \(n\) is divisible by 3.
2. \(n\) is divisible by 4.

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

A number is divisible by 6 exactly when it is divisible by **both 2 and 3**.

**Statement (1): \(n\) is divisible by 3.** This tells us nothing about divisibility by 2.
\(n = 9\) (not divisible by 6) and \(n = 12\) (divisible by 6) both satisfy it. **Not sufficient.**

**Statement (2): \(n\) is divisible by 4.** Then \(n\) is divisible by 2, but we know nothing about
3. \(n = 4\) (not divisible by 6) and \(n = 12\) (divisible by 6) both satisfy it. **Not sufficient.**

**Together:** \(n\) is divisible by 3 (from 1) and by 4, hence by 2 (from 2). Divisible by both 2
and 3 means divisible by 6. Every such \(n\) is a multiple of 12, and every multiple of 12 is
divisible by 6. **Sufficient.**

Neither statement alone works, but the two together do → **(C)**.

**Watch out:** you don't need statement (2) to give divisibility by 4 specifically — divisibility
by 2 would have been enough. The extra strength (4 instead of 2) is a distractor; it doesn't
change that you need *both* statements.

## Hints

- Rewrite the target: "divisible by 6" means divisible by which prime factors?
- Each statement supplies one of the two things you need. Ask whether either supplies *both*.
