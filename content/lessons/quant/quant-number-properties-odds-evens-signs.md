---
id: quant-number-properties-odds-evens-signs
section: quant
topic: number-properties
subtopic: odds-evens-signs
title: "Odds, Evens & Sign Rules"
tags: [parity, odd, even, signs, positive, negative]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Many "which of the following **must** be true?" questions never require you to find a value — only
to track **parity** (odd/even) and **sign** (positive/negative). Memorize a handful of rules and
these become fast, reliable points.

## Core concepts

**Parity of sums.** odd \(+\) odd \(=\) even; even \(+\) even \(=\) even; odd \(+\) even \(=\) odd.
A sum is **odd exactly when an odd number of its terms are odd.**

**Parity of products.** A product is **odd only if every factor is odd.** If even one factor is
even, the product is even. So \(xy\) odd \(\Rightarrow\) both \(x\) and \(y\) are odd.

**Consecutive integers.** Among any two consecutive integers, exactly one is even, so their product
is always even. Among any three consecutive integers, the product is divisible by \(3! = 6\).

**Sign rules for products.** A product is **negative when it has an odd number of negative
factors**, and **positive when it has an even number** (zero counts as even). So \(xyz < 0\) means
one or three of the factors are negative.

**A "must be true" strategy.** When a question asks what *must* be true, try to build a
counterexample. If you can find even one case where a choice fails, eliminate it. What survives
every test is the answer.

## Worked examples

**Product forces parity.** If \(xy\) is odd, both \(x\) and \(y\) are odd, so \(x + y\) is even and
\(x^2 + y^2 = \text{odd} + \text{odd}\) is even. Any choice claiming \(x+y\) is odd is out.

**Chaining signs.** If \(xyz < 0\) and \(xy > 0\): \(xy > 0\) means \(x\) and \(y\) share a sign, so
their product is positive; for the triple product to be negative, \(z\) must be **negative**. Note
you still can't pin down the signs of \(x\) and \(y\) individually.

## Common traps

- **Assuming "integer" means positive.** Integers include 0 and negatives. Test a negative and 0
  against every "must be true" choice.
- **Forgetting 0.** Zero is even, is neither positive nor negative, and makes any product it
  touches equal 0.
- **Reading "could be true" as "must be true."** One counterexample kills a *must*-be-true choice,
  even if it's true most of the time.

## Key takeaways

- Product is odd only if **all** factors are odd; a sum is odd only with an **odd count** of odd terms.
- Product sign flips with each negative factor: odd number of negatives → negative.
- For "must be true," hunt for a counterexample — and always test negatives and 0.
