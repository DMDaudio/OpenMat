---
id: quant-number-properties-remainders-0021
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, scaling]
choices:
  A: "1"
  B: "2"
  C: "4"
  D: "5"
  E: "6"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 7, the remainder is 4. What is the remainder when
\(3n\) is divided by 7?

## Explanation

To find the remainder of a product, you can reduce each part to its remainder first. Here \(n\)
leaves remainder 4, so \(3n\) leaves the same remainder as \(3 \times 4 = 12\).

But a remainder must be **less than the divisor**, and \(12 > 7\), so reduce once more:

\[12 = 7 \cdot 1 + 5 \quad\Rightarrow\quad 12 \equiv 5 \pmod 7.\]

So the remainder is **5**.

Confirm with a concrete value: the smallest such \(n\) is 4, and \(3 \cdot 4 = 12\), which divided by
7 leaves remainder 5. (Any valid \(n\), like 11 or 18, gives the same result.) A common slip is to
answer 4 — the *original* remainder — but multiplying by 3 changes it.

## Hints

- You don't need to know \(n\); reduce \(3 \times (\text{remainder})\) modulo 7.
- If your intermediate result is 7 or more, subtract 7 until it drops below 7.
