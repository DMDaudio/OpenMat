---
id: quant-number-properties-remainders-0019
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, squares, product]
choices:
  A: "1"
  B: "2"
  C: "4"
  D: "5"
  E: "7"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 9, the remainder is 7. What is the remainder when
\(n^2\) is divided by 9?

## Explanation

Because remainders multiply, the remainder of \(n^2\) modulo 9 depends only on the remainder of
\(n\):

\[n^2 \bmod 9 = (n \bmod 9)^2 \bmod 9 = 7^2 \bmod 9 = 49 \bmod 9.\]

Now \(49 = 9 \times 5 + 4\), so the remainder is **4**.

To see why the quotient doesn't matter, expand \(n = 9q + 7\):

\[n^2 = (9q + 7)^2 = 81q^2 + 126q + 49.\]

Both \(81q^2\) and \(126q = 9(14q)\) are multiples of 9, so only the \(49\) contributes to the
remainder, again giving 4.

**The trap:** answer **E (7)** comes from assuming the remainder is unchanged by squaring. Answer
**A (1)** can come from mishandling \(49 \bmod 9\) (e.g. using \(9 \times 6 = 54\) and getting a
negative). Reduce carefully: the largest multiple of 9 below 49 is 45, leaving 4.

## Hints

- The remainder of \(n^2\) depends only on the remainder of \(n\): compute \(7^2 \bmod 9\).
- Find the largest multiple of 9 that is at most 49, then subtract.
