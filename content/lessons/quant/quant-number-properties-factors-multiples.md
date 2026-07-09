---
id: quant-number-properties-factors-multiples
section: quant
topic: number-properties
subtopic: factors-multiples
title: "Factors, Multiples, Primes & Divisibility"
tags: [factors, multiples, primes, gcd, lcm, divisibility]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Almost every Number Properties question rests on one skill: **breaking an integer into its
prime factors**. Once you have the prime factorization, divisor counts, greatest common divisors,
least common multiples, and divisibility all follow mechanically. Get comfortable factoring fast
and this whole topic gets easier.

## Core concepts

**Prime factorization.** Every integer greater than 1 is a unique product of primes. Split the
number into any two factors and keep splitting until everything is prime.

\[360 = 36 \times 10 = (2^2 \cdot 3^2)(2 \cdot 5) = 2^3 \cdot 3^2 \cdot 5\]

**Counting divisors.** If \(N = p^a \cdot q^b \cdot r^c \dots\), the number of positive divisors is

\[(a+1)(b+1)(c+1)\dots\]

The "+1" is there because each divisor can use prime \(p\) to a power from \(0\) up to \(a\).
For \(360 = 2^3 \cdot 3^2 \cdot 5^1\): \((3+1)(2+1)(1+1) = 24\) divisors.

**GCD (greatest common divisor).** Take each prime the two numbers **share**, using the **lower**
exponent. **LCM (least common multiple).** Take **every** prime that appears in either number,
using the **higher** exponent.

\[12 = 2^2 \cdot 3, \quad 18 = 2 \cdot 3^2 \;\Rightarrow\; \gcd = 2^1 \cdot 3^1 = 6, \quad \operatorname{lcm} = 2^2 \cdot 3^2 = 36\]

A useful identity for any two positive integers: \(\gcd(a,b) \times \operatorname{lcm}(a,b) = a \times b\).

**Perfect squares** have only **even** exponents in their prime factorization (e.g.
\(900 = 2^2 \cdot 3^2 \cdot 5^2\)). To turn a number into a perfect square, supply whatever primes
are needed to make every exponent even.

**Quick divisibility rules.** Divisible by 3 if the digit sum is divisible by 3; by 9 if the digit
sum is divisible by 9; by 4 if the last two digits form a multiple of 4; by 6 if it passes the 2
**and** 3 tests.

## Worked examples

**LCM in disguise.** Two signals flash every 12 and 18 seconds and just flashed together. When do
they next coincide? That is \(\operatorname{lcm}(12,18) = 36\) seconds — *not* their product.

**Smallest multiplier for a perfect square.** What is the smallest \(n\) making \(90n\) a perfect
square? \(90 = 2 \cdot 3^2 \cdot 5\). The 2 and the 5 have odd exponents, so \(n = 2 \cdot 5 = 10\)
and \(90 \cdot 10 = 900 = 30^2\).

## Common traps

- **Confusing GCD with LCM.** GCD is the *small* shared part (lower exponents); LCM is the *big*
  covering number (higher exponents). "How often do things line up again?" is almost always LCM.
- **Multiplying instead of taking the LCM.** \(12 \times 18 = 216\) is a common multiple, but not
  the *least* one.
- **Forgetting 1 and the number itself** when counting divisors — the \((a+1)(b+1)\) formula
  already includes them.

## Key takeaways

- Factor into primes first; divisor count, GCD, and LCM all read straight off the exponents.
- Divisor count \(= (a+1)(b+1)\dots\); GCD uses shared primes at the lower power; LCM uses all
  primes at the higher power.
- \(\gcd \times \operatorname{lcm} = a \times b\), and perfect squares have all-even exponents.
