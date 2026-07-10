---
id: quant-number-properties-remainders-0017
section: quant
topic: number-properties
subtopic: remainders
type: problem-solving
difficulty: medium
tags: [remainders, modular-arithmetic]
choices:
  A: "0"
  B: "1"
  C: "3"
  D: "5"
  E: "6"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

When the positive integer \(n\) is divided by 7, the remainder is 4. What is the remainder when
\(2n + 5\) is divided by 7?

## Explanation

You do not need to know \(n\) — only its remainder. Write \(n\) in the standard division form:

\[n = 7k + 4\]

for some non-negative integer \(k\). Substitute into \(2n + 5\):

\[2n + 5 = 2(7k + 4) + 5 = 14k + 8 + 5 = 14k + 13.\]

Now peel off the multiples of 7: \(14k\) is divisible by 7, and \(13 = 7 + 6\), so

\[14k + 13 = 7(2k + 1) + 6.\]

The remainder is **6**.

Faster still: replace \(n\) by its remainder from the start. \(2(4) + 5 = 13\), and
\(13 \bmod 7 = 6\). Reducing to the remainder before *and* after the arithmetic gives the same
answer with smaller numbers.

The trap answer is choosing 13 (or reducing incorrectly) — remember the remainder must be less
than the divisor 7, so you have to take one more step to get 6.

## Hints

- Write \(n = 7k + 4\) and substitute; the value of \(k\) will drop out.
- Once you reach \(14k + 13\), the remainder is whatever is left after removing all multiples of 7.
