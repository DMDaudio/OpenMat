---
id: quant-number-properties-remainders-0018
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: easy
tags: [remainders, possible-values]
choices:
  A: "20"
  B: "22"
  C: "23"
  D: "24"
  E: "25"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When a positive integer \(n\) is divided by 6, the remainder is 5. Which of the following could
be the value of \(n\)?

## Explanation

By the division identity, \(n = 6q + 5\) for some non-negative integer \(q\), so the possible
values are \(5, 11, 17, 23, 29, \dots\) — each is 5 more than a multiple of 6. Equivalently,
\(n\) leaves remainder 5, so \(n - 5\) must be divisible by 6.

Test each choice by dividing by 6:

- \(20 = 6 \times 3 + 2\) — remainder 2.
- \(22 = 6 \times 3 + 4\) — remainder 4.
- \(23 = 6 \times 3 + 5\) — **remainder 5.** ✓
- \(24 = 6 \times 4 + 0\) — remainder 0.
- \(25 = 6 \times 4 + 1\) — remainder 1.

Only **23** works.

**The trap:** a number ending in 5 (25) *feels* like it should leave remainder 5, but remainder
depends on division by 6, not on the last digit. Check \(n - 5\) for divisibility by 6 instead:
\(23 - 5 = 18 = 6 \times 3\). ✓

## Hints

- Every valid \(n\) has the form \(6q + 5\); equivalently \(n - 5\) is a multiple of 6.
- Subtract 5 from each choice and ask whether the result is divisible by 6.
