---
id: quant-number-properties-factors-multiples
section: quant
topic: number-properties
subtopic: factors-multiples
title: "Factors, Multiples & Prime Factorization"
tags: [number-properties, factors, multiples, primes, gcd, lcm]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Almost every "clever" number-properties problem on the GMAT Focus Quant section becomes routine
once you write the number as a product of primes. **Prime factorization** is the master key:
counting divisors, finding a GCD or LCM, testing divisibility, and spotting perfect squares all
fall out of it directly. This lesson builds that one skill and shows the handful of formulas it
unlocks.

## Core concepts

**Factors vs. multiples.** A **factor** (divisor) of \(N\) divides \(N\) with no remainder; a
**multiple** of \(N\) is \(N\) times an integer. So the factors of 12 are \(\{1,2,3,4,6,12\}\),
while its multiples are \(12, 24, 36, \dots\) — a finite list versus an infinite one.

**Prime factorization.** Every integer greater than 1 factors uniquely into primes:

\[72 = 2^3 \times 3^2, \qquad 360 = 2^3 \times 3^2 \times 5\]

**Counting divisors.** If \(N = p^a \times q^b \times \dots\), the number of positive divisors is

\[(a+1)(b+1)\dots\]

because each divisor picks an exponent for \(p\) from \(0\) to \(a\), independently for \(q\), and
so on. For \(72 = 2^3 \times 3^2\): \((3+1)(2+1) = 12\) divisors.

**GCD and LCM from primes.** Line up the shared primes:

- **GCD** — take the **lowest** power of each prime the numbers share.
- **LCM** — take the **highest** power of every prime that appears.

For \(12 = 2^2 \times 3\) and \(18 = 2 \times 3^2\): \(\gcd = 2^1 \times 3^1 = 6\) and
\(\operatorname{lcm} = 2^2 \times 3^2 = 36\).

**The product identity.** For any two positive integers,

\[\gcd(a,b) \times \operatorname{lcm}(a,b) = a \times b\]

This turns many two-number problems into one line of arithmetic.

## Worked examples

**Example 1 — counting perfect-square divisors.** How many divisors of \(N = 2^4 \times 3^2\)
are perfect squares? A divisor is a perfect square exactly when every prime exponent is **even**.
For \(2^4\) the choices are \(0, 2, 4\) (three options); for \(3^2\) they are \(0, 2\) (two
options). That gives \(3 \times 2 = 6\) perfect-square divisors.

**Example 2 — the product identity.** Two positive integers have product 216 and GCD 6. Their
LCM is \(216 / 6 = 36\). No listing required.

## Common traps

- **1 is not prime.** It has exactly one divisor. The smallest prime is 2 (the only even prime).
- **Forgetting the "+1" in the divisor count.** The exponent can be \(0\) (the prime used zero
  times), so a prime raised to \(a\) contributes \(a+1\) choices, not \(a\).
- **Swapping GCD and LCM.** GCD uses the *lowest* shared powers and is at most the smaller number;
  LCM uses the *highest* powers and is at least the larger number.
- **The product identity is for two numbers only.** \(\gcd \times \operatorname{lcm} = a \times b\)
  does not extend to three or more integers.

## Key takeaways

- Factor into primes first — divisor counts, GCD, LCM, and divisibility all follow mechanically.
- Divisor count of \(p^a q^b \dots\) is \((a+1)(b+1)\dots\); perfect-square divisors need all
  exponents even.
- GCD = lowest shared prime powers; LCM = highest prime powers overall.
- For two numbers, \(\gcd \times \operatorname{lcm} = \) their product.
