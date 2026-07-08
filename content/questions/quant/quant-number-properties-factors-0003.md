---
id: quant-number-properties-factors-0003
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: medium
tags: [divisors, prime-factorization]
choices:
  A: "6"
  B: "8"
  C: "10"
  D: "12"
  E: "14"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

How many positive divisors does 72 have?

## Explanation

Listing all divisors by hand is slow and error-prone. Use the **prime factorization**.

\[72 = 8 \times 9 = 2^3 \times 3^2\]

For a number written as \(p^a \times q^b \times \dots\), the number of positive divisors is
\((a+1)(b+1)\dots\) — because each divisor independently uses the prime \(p\) to a power from
\(0\) to \(a\), and \(q\) to a power from \(0\) to \(b\), and so on.

Here that gives:

\[(3+1)(2+1) = 4 \times 3 = 12\]

So 72 has **12** positive divisors. (Check by listing: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72 — twelve of them.)

## Hints

- Don't list divisors — factor the number into primes first.
- If \(N = p^a q^b\), the divisor count is \((a+1)(b+1)\). Remember the "+1" accounts for using the prime zero times.
