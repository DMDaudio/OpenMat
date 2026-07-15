---
id: quant-number-properties-remainders-0020
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, sum, combining]
choices:
  A: "0"
  B: "2"
  C: "4"
  D: "6"
  E: "8"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(x\) is divided by 12, the remainder is 5, and when the positive
integer \(y\) is divided by 12, the remainder is 11. What is the remainder when \(x + y\) is
divided by 12?

## Explanation

Remainders add, so start by adding the two remainders, then reduce modulo 12:

\[(x + y) \bmod 12 = (5 + 11) \bmod 12 = 16 \bmod 12.\]

Since \(16 = 12 + 4\), the remainder is **4**.

Concretely, take \(x = 5\) and \(y = 11\): \(x + y = 16 = 12 \times 1 + 4\) — remainder 4. Any
other valid choice gives the same result, e.g. \(x = 17,\ y = 23\): \(x + y = 40 = 12 \times 3 +
4\).

**The trap:** answer **E (8)** treats 16 as if it were the remainder and subtracts 8 from 16 by
mistake; answer that leaves **16** un-reduced isn't even offered because a remainder must be less
than 12. Always reduce the sum of remainders one more time.

## Hints

- Add the two remainders first: \(5 + 11\).
- The result exceeds 12, so it is not yet a legal remainder — reduce modulo 12 again.
