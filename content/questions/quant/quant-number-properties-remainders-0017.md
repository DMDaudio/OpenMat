---
id: quant-number-properties-remainders-0017
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: easy
tags: [remainders, sum]
choices:
  A: "0"
  B: "1"
  C: "2"
  D: "3"
  E: "6"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 5, the remainder is 3. What is the remainder when
\(n + 3\) is divided by 5?

## Explanation

Write \(n\) using the division identity: \(n = 5q + 3\) for some non-negative integer \(q\). Then

\[n + 3 = 5q + 6 = 5q + 5 + 1 = 5(q + 1) + 1.\]

The part \(5(q + 1)\) is a multiple of 5, so the remainder is **1**.

A quick check with a concrete value: take \(n = 8\) (which leaves remainder 3 on division by 5).
Then \(n + 3 = 11\), and \(11 = 5 \times 2 + 1\) — remainder 1.

**The trap:** answer **E (6)** comes from adding the remainders \(3 + 3 = 6\) and stopping. But 6
is larger than the divisor 5, so it is not a legal remainder — reduce once more: \(6 = 5 + 1\),
giving 1. Answer **D (3)** comes from assuming adding 3 leaves the remainder unchanged.

## Hints

- Write \(n\) as \(5q + 3\) and substitute into \(n + 3\).
- A remainder must be less than the divisor — if you get 6, reduce it modulo 5 again.
