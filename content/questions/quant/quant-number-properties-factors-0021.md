---
id: quant-number-properties-factors-0021
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: hard
tags: [divisors, multiples, prime-factorization]
choices:
  A: "6"
  B: "8"
  C: "10"
  D: "12"
  E: "15"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Let \(n = 2^4 \times 3^2 \times 5\). How many of the positive divisors of \(n\) are multiples of
10?

## Explanation

Every divisor of \(n\) has the form

\[2^a \times 3^b \times 5^c, \qquad 0 \le a \le 4,\ 0 \le b \le 2,\ 0 \le c \le 1.\]

A number is a **multiple of 10** exactly when it is divisible by both 2 and 5 — that is, when
\(a \ge 1\) **and** \(c \ge 1\). Count the allowed choices for each exponent under those constraints:

- \(a \in \{1, 2, 3, 4\}\): **4** choices (excluding \(a = 0\)).
- \(b \in \{0, 1, 2\}\): **3** choices (no restriction — the factor of 3 doesn't affect being a multiple of 10).
- \(c = 1\): **1** choice (must include the single 5).

Multiplying the independent choices:

\[4 \times 3 \times 1 = 12.\]

So **12** of the divisors are multiples of 10.

Common trap: requiring \(c \ge 1\) but forgetting to also force \(a \ge 1\) (giving \(5 \times 3 = 15\)),
or dropping the free factor of 3 entirely (giving \(4 \times 1 = 4\)).

## Hints

- A divisor is a multiple of 10 exactly when it contains at least one 2 **and** at least one 5.
- Count exponent choices separately: force \(a \ge 1\) and \(c \ge 1\), leave \(b\) unrestricted, then multiply.
