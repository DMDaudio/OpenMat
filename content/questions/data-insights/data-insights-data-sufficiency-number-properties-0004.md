---
id: data-insights-data-sufficiency-number-properties-0004
section: data-insights
topic: data-sufficiency
subtopic: number-properties
type: data-sufficiency
difficulty: medium
tags: [parity, even-odd]
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n\) is an integer, is \(n\) even?

1. \(n^2\) is even.
2. \(3n\) is even.

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

**Statement (1): \(n^2\) is even.** An odd integer squared is always odd (odd × odd = odd). So if
\(n^2\) is even, \(n\) cannot be odd — \(n\) must be even. **Sufficient.**

**Statement (2): \(3n\) is even.** Since 3 is odd, the parity of \(3n\) matches the parity of
\(n\) (odd × odd = odd; odd × even = even). For \(3n\) to be even, \(n\) itself must be even.
**Sufficient.**

Each statement alone answers the question ("yes, \(n\) is even"), so the answer is **(D)**.

**Key parity facts:** squaring preserves parity, and multiplying by an odd number preserves
parity. Both statements exploit this, which is why each is independently sufficient.

## Hints

- Recall that odd² is odd and even² is even — so \(n^2\)'s parity tells you \(n\)'s parity.
- Multiplying by the odd number 3 doesn't change whether a number is even or odd.
