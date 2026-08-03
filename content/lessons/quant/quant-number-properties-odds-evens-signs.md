---
id: quant-number-properties-odds-evens-signs
section: quant
topic: number-properties
subtopic: odds-evens-signs
title: "Odds, Evens & Signs"
tags: [parity, odd-even, signs, number-properties]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Parity (whether a number is odd or even) and sign rules are the quiet workhorses of GMAT Focus
number-properties questions. On their own they look trivial, but the exam hides them inside
"must be true," "could be true," and Data-Insights logic problems where you never learn the actual
numbers. Knowing the rules cold lets you answer those without any arithmetic at all.

## Core concepts

**Parity under addition and subtraction.** The result is even exactly when the two numbers share
the same parity:

- even ± even = **even**
- odd ± odd = **even**
- even ± odd = **odd**

A useful shortcut: adding or subtracting an **even** number never changes parity; adding or
subtracting an **odd** number always flips it.

**Parity under multiplication.** A product is even as soon as **one** factor is even:

- even × (anything) = **even**
- odd × odd = **odd**

So a product of integers is odd only if *every* factor is odd.

**Sums of several odd numbers.** Adding \(k\) odd numbers gives an **odd** total when \(k\) is odd,
and an **even** total when \(k\) is even. (Each odd number flips the parity once.) Even numbers in
the sum never affect the parity.

**Consecutive integers.** Among any two consecutive integers \(n\) and \(n+1\), exactly one is
even, so the product \(n(n+1)\) is **always even**. This is why expressions like \(n^2 + n\) are
guaranteed even.

**Sign rules for products.** The sign of a product depends only on **how many negative factors**
there are:

- an **even** number of negative factors → the product is **positive**
- an **odd** number of negative factors → the product is **negative**
- any factor of \(0\) → the product is \(0\)

**Sign logic with two variables.** Two facts appear constantly:

- \(xy > 0\) means \(x\) and \(y\) have the **same sign** (both positive or both negative).
- \(xy < 0\) means they have **opposite signs**.

Combine that with a fact about \(x + y\): if \(xy > 0\) and \(x + y < 0\), the shared sign must be
negative, so **both are negative**.

## Worked examples

**"Must be odd."** If \(n\) is even, is \(n + 1\) odd? Adding the odd number \(1\) flips even to
odd, so yes — always. By contrast \(2n\), \(3n\), \(n^2\), and \(n + 2\) are all still even.

**Counting signs.** Evaluate \((-3)(-4)(-2)\). The magnitude is \(3 \cdot 4 \cdot 2 = 24\); there
are three negative factors, an odd count, so the product is negative: \(-24\).

**Parity from a product.** If \(mn\) is odd, what do you know? A product is odd only when every
factor is odd, so both \(m\) and \(n\) are odd — and therefore \(m + n\) is even.

## Common traps

- **Confusing "adds up" with "multiplies."** Four copies of an odd number add to an even total
  (even count of odds), even though each is odd.
- **Losing track of signs.** With three negative factors the product is negative, not positive —
  count the negatives, don't just take the magnitude.
- **Assuming \(n^2\) is even.** \(n^2\) has the same parity as \(n\); it is odd whenever \(n\) is
  odd.
- **Forgetting zero.** "\(xy > 0\)" excludes \(x = 0\) or \(y = 0\); "same sign" quietly rules zero
  out.

## Key takeaways

- Add/subtract: same parity → even, different parity → odd. Adding an even number never changes
  parity.
- A product is even if any factor is even; odd only if every factor is odd.
- Product sign: even number of negatives → positive, odd number → negative, any zero → zero.
- \(n(n+1)\) is always even — consecutive integers guarantee an even factor.
- \(xy > 0\) means same sign; pair it with the sign of \(x + y\) to pin down both.
