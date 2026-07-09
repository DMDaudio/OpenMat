---
id: quant-number-properties-factors-multiples-0018
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: hard
tags: [prime-factorization, perfect-square]
choices:
  A: "2"
  B: "5"
  C: "10"
  D: "15"
  E: "90"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the smallest positive integer \(n\) such that \(90n\) is the square of an integer?

## Explanation

A perfect square has **only even exponents** in its prime factorization. Factor 90:

\[90 = 2 \cdot 3^2 \cdot 5\]

The exponent of 3 is already even (2), but the exponents of 2 and 5 are each **odd** (1). To make
every exponent even, \(n\) must supply one more 2 and one more 5:

\[n = 2 \cdot 5 = 10\]

Check: \(90 \cdot 10 = 900 = 2^2 \cdot 3^2 \cdot 5^2 = 30^2\). ✓

Smaller candidates fail because they fix only one offending prime: \(n = 2\) leaves the 5 odd, and
\(n = 5\) leaves the 2 odd. The answer is **10**.

## Hints

- Factor 90 into primes and look at which exponents are odd.
- A perfect square needs every prime exponent to be even — multiply in exactly the primes required
  to fix the odd ones.
