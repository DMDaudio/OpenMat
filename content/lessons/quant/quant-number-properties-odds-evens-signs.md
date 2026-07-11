---
id: quant-number-properties-odds-evens-signs
section: quant
topic: number-properties
subtopic: odds-evens-signs
title: "Odds, Evens & Signs"
tags: [parity, odd-even, signs, positive-negative]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Many GMAT Focus Quant questions never ask you to compute a value — they ask what *must* be true
about whether an expression is odd or even, or positive or negative. These are **parity** and
**sign** questions. You almost never need the actual numbers; you only need to track two-state
information (odd/even, +/−) through the arithmetic. Learn the rules and you can answer in seconds.

## Core concepts

**Parity rules (odd/even).** An even number is a multiple of 2; an odd number is not. The only
rules you need:

- **Addition/subtraction:** the result is odd exactly when you combine one odd and one even.
  even ± even = even, odd ± odd = even, even ± odd = **odd**.
- **Multiplication:** a product is even if *any* factor is even. It is odd only when *every*
  factor is odd. So \(\text{even} \times \text{anything} = \text{even}\).

A useful consequence: \(n(n+1)\), the product of two **consecutive** integers, is always even —
one of any two consecutive integers is even. Likewise \(n^2\) has the same parity as \(n\).

**Sign rules (positive/negative).** For a product or quotient, only the *count of negative
factors* matters:

- An **even** number of negative factors → the result is **positive**.
- An **odd** number of negative factors → the result is **negative**.

Zero is neither positive nor negative, and any product containing a zero factor is zero. Watch
for it — "\(xy > 0\)" quietly tells you neither \(x\) nor \(y\) is 0, while "\(xy \ge 0\)" does not.

**Recovering one sign from a product.** If you know the sign of a whole product and the signs of
all but one factor, you can solve for the last one. If \(abc > 0\) and \(bc < 0\), then
\(a = \dfrac{abc}{bc} = \dfrac{(+)}{(-)} < 0\).

## Worked examples

**Parity of an expression.** Is \(n^2 + n + 1\) odd or even for every integer \(n\)?
\(n^2 + n = n(n+1)\) is a product of consecutive integers, so it is always even. Adding 1 makes
the whole expression **always odd** — no need to test cases.

**Signs from constraints.** If \(x < 0\) and \(xy^2 z > 0\), what is the sign of \(z\)?
Since \(y^2 \ge 0\) and the product is nonzero, \(y^2 > 0\) (positive). The product's sign is
\((\text{sign of } x)(\text{sign of } y^2)(\text{sign of } z) = (-)(+)(\text{sign of } z) > 0\),
so \(z\) must be **negative**.

## Common traps

- **Assuming a variable is an integer.** Parity rules apply only to integers. If a problem
  doesn't say "integer," \(x\) could be \(2.5\) and "odd/even" is meaningless.
- **Forgetting even × odd = even.** A product is even as soon as *one* factor is even; you do not
  need both.
- **Losing zero.** \(x^2 \ge 0\), not \(> 0\), unless you know \(x \ne 0\). A stray zero flips a
  "must be positive" into "could be zero."
- **Squares don't erase parity.** \(n^2\) is odd when \(n\) is odd. Squaring changes the sign
  situation (never negative) but not the parity.

## Key takeaways

- Sum/difference is odd only when mixing one odd and one even; a product is even whenever any
  factor is even.
- \(n(n+1)\) is always even; \(n^2\) has the same parity as \(n\).
- For products/quotients, count the negatives: even count → positive, odd count → negative.
- Track only the two-state information (odd/even, +/−); you rarely need the actual values.
