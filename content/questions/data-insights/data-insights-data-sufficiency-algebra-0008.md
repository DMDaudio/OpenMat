---
id: data-insights-data-sufficiency-algebra-0008
section: data-insights
topic: data-sufficiency
subtopic: algebra
type: data-sufficiency
difficulty: medium
tags: [inequalities, signs, powers]
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Is \(x > 0\)?

1. \(x^2 > 0\)
2. \(x^3 > 0\)

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

The question is yes/no: is \(x\) positive?

**Statement (1): \(x^2 > 0\).** Squaring destroys sign information. \(x^2 > 0\) only tells you
\(x \ne 0\); \(x\) could be positive (\(x = 3\)) or negative (\(x = -3\)). So the answer could be
"yes" or "no." **Not sufficient.**

**Statement (2): \(x^3 > 0\).** An odd power keeps the sign of the base: \(x^3\) is positive
exactly when \(x\) is positive, and negative when \(x\) is negative. So \(x^3 > 0\) forces
\(x > 0\) — a definite "yes." **Sufficient.**

Statement (2) alone answers the question and (1) alone does not, so the answer is **(B)**.

**Key idea:** even powers hide sign (both \(+\) and \(-\) give a positive result); odd powers
preserve it. That difference is exactly what separates the two statements here.

## Hints

- A yes/no statement is sufficient only if it forces a single answer. Can \(x^2 > 0\) hold for both a positive and a negative \(x\)?
- Think about what an *odd* power does to the sign of the base versus an *even* power.
