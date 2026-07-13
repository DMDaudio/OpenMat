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

Many GMAT Focus Quant questions never ask you to compute a value — they ask what **must** be
true about whether a number is odd or even, or positive or negative. These **parity** and **sign**
questions look abstract, but they collapse to a handful of fixed rules. Once you know the rules you
can answer in seconds, and when you don't, you can always fall back on **plugging in small numbers**.

## Core concepts

**Parity of sums and differences.** Addition and subtraction have the *same* parity behavior:

\[\text{even} \pm \text{even} = \text{even}, \quad \text{odd} \pm \text{odd} = \text{even}, \quad \text{even} \pm \text{odd} = \text{odd}\]

The takeaway: \(a + b\) and \(a - b\) always have the **same** parity. A sum (or difference) is odd
**only** when exactly one of the two numbers is odd.

**Parity of products.** A product is even if **any** factor is even; it is odd **only** when **every**
factor is odd:

\[\text{even} \times \text{anything} = \text{even}, \qquad \text{odd} \times \text{odd} = \text{odd}\]

**Two consecutive integers.** \(k\) and \(k+1\) are always one odd and one even, so their product
\(k(k+1)\) is **always even**. This is why expressions like \(k^2 + k = k(k+1)\) are guaranteed even.

**Signs of products and quotients.** For multiplication and division, only the *count* of negative
factors matters:

- An **even** number of negative factors → **positive** result.
- An **odd** number of negative factors → **negative** result.

So a product of three numbers is negative exactly when one or three of them are negative — never
when exactly two are.

**Zero is even, and it has no sign.** \(0\) is an even integer. It is neither positive nor negative,
and any product containing a \(0\) is \(0\) — a case that quietly breaks "must be positive/negative"
claims, so watch for whether the problem says the numbers are *nonzero*.

## Worked examples

**Parity of an expression.** Is \(3p + 5q\) odd or even? The coefficients don't change parity:
\(3p\) has the parity of \(p\), and \(5q\) has the parity of \(q\). So \(3p + 5q\) has the parity of
\(p + q\) — it's even exactly when \(p\) and \(q\) share the same parity.

**Sign of a quotient.** If \(a < 0\), \(b > 0\), \(c < 0\), then \(\dfrac{ab}{c}\) has two negative
inputs (\(a\) and \(c\)) — an even count — so the result is **positive**.

## Common traps

- **Assuming subtraction behaves differently from addition.** \(x - y\) has the *same* parity as
  \(x + y\). If \(x + y\) is odd, so is \(x - y\).
- **Forgetting the odd-count rule for signs.** "Exactly two negatives" gives a **positive** product,
  not a negative one.
- **Ignoring zero.** If the problem doesn't say "nonzero," a variable could be \(0\) — which is even
  and sign-less, and often kills a "must be positive" answer.
- **Testing only one case.** When you plug in numbers to eliminate a "must be true" choice, try both
  parities and both signs; one clean counterexample is enough to reject a choice.

## Key takeaways

- \(a + b\) and \(a - b\) always share parity; a sum/difference is odd only when exactly one term is odd.
- A product is odd only if every factor is odd; a single even factor makes it even.
- Consecutive integers \(k(k+1)\) are always even.
- Sign of a product/quotient depends only on the parity of the *count* of negatives: even count → positive, odd count → negative.
- Zero is even and sign-less — check whether variables are allowed to be zero.
