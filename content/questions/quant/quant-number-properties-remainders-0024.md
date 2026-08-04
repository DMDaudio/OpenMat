---
id: quant-number-properties-remainders-0024
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: easy
tags: [remainders, sums]
choices:
  A: "2"
  B: "3"
  C: "5"
  D: "7"
  E: "12"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 9, the remainder is 5. What is the remainder when
\(n + 7\) is divided by 9?

## Explanation

You don't need to know \(n\) itself. Adding 7 to \(n\) adds 7 to the remainder, and then you reduce
mod 9:

\[\text{remainder of } (n+7) = \text{remainder of } (5 + 7) = \text{remainder of } 12 = 12 - 9 = 3.\]

You can confirm with the smallest such \(n\): \(n = 5\) gives \(n + 7 = 12\), and \(12 \div 9\) leaves
remainder **3**.

**Traps:** answer **E (12)** is \(5 + 7\) with the final reduction forgotten. Answer **D (7)** is
just the number being added, as if the original remainder didn't matter. Answer **C (5)** assumes
adding 7 leaves the remainder unchanged. Answer **A (2)** comes from *subtracting* the remainders
(\(7 - 5\)) instead of adding.

## Hints

- You never need the actual value of \(n\) — work with its remainder.
- Add the remainders, then reduce mod 9 one more time.
