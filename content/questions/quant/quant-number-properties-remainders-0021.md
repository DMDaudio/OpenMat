---
id: quant-number-properties-remainders-0021
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, divisibility]
choices:
  A: "0"
  B: "1"
  C: "2"
  D: "5"
  E: "6"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 7, the remainder is 4. What is the remainder when
\(3n + 2\) is divided by 7?

## Explanation

Write \(n\) in the division form \(n = 7k + 4\), then substitute:

\[3n + 2 = 3(7k + 4) + 2 = 21k + 12 + 2 = 21k + 14 = 7(3k + 2)\]

That is a multiple of 7, so the remainder is **0**.

The \(21k\) term is always divisible by 7, so only the constant part matters:
\(3 \times 4 + 2 = 14\), and \(14\) is itself a multiple of 7 — remainder 0.

Sanity check with the smallest \(n\): \(n = 4 \Rightarrow 3(4) + 2 = 14\), and \(14 \div 7\) leaves 0. ✓

**The trap:** choice **D (5)** comes from forgetting the "\(+2\)" and taking the remainder of
\(3n = 12\) (i.e. \(12 - 7 = 5\)).

## Hints

- Substitute \(n = 7k + 4\) into \(3n + 2\) and simplify.
- The multiple-of-7 terms drop out; only the leftover constant sets the remainder.
