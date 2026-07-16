---
id: quant-number-properties-factors-multiples
section: quant
topic: number-properties
subtopic: factors-multiples
title: "Factors, Multiples, GCF & LCM"
tags: [factors, multiples, gcf, lcm, prime-factorization]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Almost every number-properties question rests on one idea: **prime factorization**. Once you can
break an integer into its primes, counting its divisors, finding a greatest common factor (GCF),
or a least common multiple (LCM) all become mechanical. GMAT Focus rewards doing this quickly
instead of listing factors by hand.

## Core concepts

**Prime factorization.** Every integer greater than 1 is a unique product of primes. Write it in
exponent form: \(72 = 2^3 \times 3^2\), \(90 = 2 \times 3^2 \times 5\).

**Counting divisors.** If \(N = p^a \times q^b \times \dots\), the number of positive divisors is
\[(a+1)(b+1)\dots\]
Each prime can appear in a divisor to a power from \(0\) up to its exponent — that's the "+1".

**Greatest common factor (GCF).** For each prime the two numbers share, take the **lower** power.
\[18 = 2 \cdot 3^2, \quad 30 = 2 \cdot 3 \cdot 5 \;\Rightarrow\; \text{GCF} = 2 \cdot 3 = 6\]

**Least common multiple (LCM).** For every prime that appears in either number, take the **higher**
power.
\[\text{LCM}(18, 30) = 2 \cdot 3^2 \cdot 5 = 90\]

**The key identity.** For any two positive integers,
\[\text{GCF}(a,b) \times \text{LCM}(a,b) = a \times b\]
This lets you find one quantity when you know the other three.

## Worked examples

**Divisor count.** \(200 = 2^3 \cdot 5^2\), so it has \((3+1)(2+1) = 12\) positive divisors.

**When do events coincide?** Two lights blink every 6 and every 8 seconds. They next blink
together after \(\text{LCM}(6,8)\) seconds. \(6 = 2 \cdot 3\), \(8 = 2^3\), so LCM \(= 2^3 \cdot 3 = 24\)
seconds. LCM answers "when do repeating cycles line up again."

## Common traps

- **Swapping GCF and LCM rules.** GCF takes the *lower* power of *shared* primes; LCM takes the
  *higher* power of *all* primes. Mixing them up is the most common mistake.
- **Forgetting 1 and the number itself are divisors.** The \((a+1)(b+1)\) formula already counts them.
- **Using the product \(a \times b\) when the LCM is what's asked** (e.g. "when do the cycles meet?").
  The product is a common multiple, but rarely the *least* one.

## Key takeaways

- Factor into primes first — then divisor count, GCF, and LCM all follow mechanically.
- GCF = lowest powers of shared primes; LCM = highest powers of all primes.
- \(\text{GCF} \times \text{LCM} = a \times b\) — memorize it; it turns many problems into one division.
- LCM answers "when do repeating cycles coincide"; GCF answers "largest equal groups."
