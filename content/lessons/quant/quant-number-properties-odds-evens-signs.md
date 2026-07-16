---
id: quant-number-properties-odds-evens-signs
section: quant
topic: number-properties
subtopic: odds-evens-signs
title: "Odds, Evens & Sign Rules"
tags: [parity, odd-even, signs, positive-negative]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Parity (odd vs. even) and sign (positive vs. negative) questions look like arithmetic but are
really about **rules that always hold**. When a question asks what *must* be true, you're testing
a rule — not plugging in one lucky number. Knowing the handful of rules below lets you answer
instantly, and testing values lets you kill "must be true" traps.

## Core concepts

**Parity of sums and differences.** Same parity → even; different parity → odd.
\[\text{even} \pm \text{even} = \text{even}, \quad \text{odd} \pm \text{odd} = \text{even}, \quad \text{even} \pm \text{odd} = \text{odd}\]

**Parity of products.** A product is **even if *any* factor is even**; it is odd only when **every**
factor is odd.
\[\text{even} \times \text{anything} = \text{even}, \quad \text{odd} \times \text{odd} = \text{odd}\]

**A power keeps the base's parity.** \(n^k\) is odd exactly when \(n\) is odd. So \(n^2\) and \(n\)
always share parity — useful for "must be even" questions.

**Consecutive integers.** Any two consecutive integers have opposite parity, so their **product is
always even**: \(n(n+1)\) is even for every integer \(n\).

**Sign rules for products.** A product is positive when the number of negative factors is **even**,
negative when it's **odd**. For two numbers: \(xy > 0\) means *same sign*; \(xy < 0\) means *opposite
signs*.

## Worked examples

**Must-be-even.** Is \(n^2 + n\) always even? Factor: \(n^2 + n = n(n+1)\), a product of consecutive
integers — always even. Yes.

**Reading two conditions together.** If \(xy > 0\) and \(x + y < 0\): same sign (from \(xy>0\)) plus a
negative sum forces **both** \(x\) and \(y\) negative. So \(x < 0\) must be true.

## Common traps

- **Assuming "integer" without being told.** Sign/parity rules apply to integers. If a variable
  could be a fraction, "odd/even" doesn't apply.
- **Zero is even, and zero is neither positive nor negative.** Watch for it in "must be true" and
  "could be" questions.
- **Confirming with one value instead of the rule.** For *must be true*, a single example can only
  *disprove* a choice, never prove it. Find a counterexample to eliminate.

## Key takeaways

- Product is even if any factor is even; odd only if all factors are odd.
- \(n\) and \(n^2\) share parity; \(n(n+1)\) is always even.
- \(xy > 0\) → same sign; \(xy < 0\) → opposite signs; count negatives to get a product's sign.
- For "must be true," attack each choice with a counterexample; anything that survives is forced.
