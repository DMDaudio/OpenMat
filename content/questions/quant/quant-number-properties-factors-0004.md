---
id: quant-number-properties-factors-0004
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: hard
tags: [prime-factorization, perfect-squares, divisor-count]
choices:
  A: "6"
  B: "8"
  C: "9"
  D: "12"
  E: "18"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(n = 2^4 \times 3^3 \times 5^2\), how many of the positive divisors of \(n\) are perfect
squares?

## Explanation

A divisor of \(n\) is formed by choosing an exponent for each prime, from \(0\) up to the exponent
in \(n\):

\[d = 2^a \times 3^b \times 5^c, \quad 0 \le a \le 4,\; 0 \le b \le 3,\; 0 \le c \le 2\]

That divisor is a **perfect square** exactly when every exponent is **even** (a perfect square has
even powers of all its primes). Count the even choices for each:

- \(a \in \{0, 2, 4\}\) — **3** options
- \(b \in \{0, 2\}\) — **2** options
- \(c \in \{0, 2\}\) — **2** options

Since the choices are independent, multiply:

\[3 \times 2 \times 2 = 12\]

So **12** of the divisors of \(n\) are perfect squares.

## Hints

- A perfect square has an even exponent on every prime in its factorization.
- For each prime, count only the even exponents available (including 0), then multiply the counts.
