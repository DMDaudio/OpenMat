---
id: quant-arithmetic-exponents-roots
section: quant
topic: arithmetic
subtopic: exponents-roots
title: "Exponents & Roots"
tags: [exponents, roots, radicals, powers]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Exponents and roots show up all over GMAT Focus Quant — inside number-properties questions, in
disguised equations, and as the fast way to compare very large or very small quantities. Almost
everything reduces to a short list of rules plus one habit: **rewrite every base as a power of the
same prime before you do anything else.**

## Core concepts

**The exponent rules.** For any nonzero base and integer (or rational) exponents:

- Product: \(a^m \cdot a^n = a^{m+n}\) — same base, *add* exponents.
- Quotient: \(\dfrac{a^m}{a^n} = a^{m-n}\) — same base, *subtract* exponents.
- Power of a power: \((a^m)^n = a^{mn}\) — *multiply* exponents.
- Distributes over products: \((ab)^n = a^n b^n\).

**Zero and negative exponents.**

\[a^0 = 1 \quad (a \ne 0), \qquad a^{-n} = \frac{1}{a^n}\]

A negative exponent means "reciprocal," not "negative number." So \(2^{-2} = \tfrac14\), which is
positive.

**Roots are fractional exponents.** This is the single most useful bridge:

\[\sqrt[n]{a} = a^{1/n}, \qquad a^{m/n} = \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}\]

So \(27^{2/3} = \left(27^{1/3}\right)^2 = 3^2 = 9\). Take the root first (smaller numbers), then the power.

**Simplifying radicals.** Pull perfect-square factors out from under a square root, and combine only
*like* radicals:

\[\sqrt{ab} = \sqrt{a}\,\sqrt{b}, \qquad \sqrt{50} = \sqrt{25\cdot 2} = 5\sqrt{2}\]

You can add \(5\sqrt2 + 3\sqrt2 = 8\sqrt2\), but you **cannot** turn \(\sqrt2 + \sqrt2\) into
\(\sqrt4\).

**Same-base strategy for equations.** When an equation has different bases that are all powers of one
prime, rewrite them and set the exponents equal:

\[4^{x+1} = 8^{x-1} \;\Rightarrow\; 2^{2(x+1)} = 2^{3(x-1)} \;\Rightarrow\; 2x+2 = 3x-3 \;\Rightarrow\; x = 5\]

## Worked examples

**Combine rules.** Simplify \((x^2)^3 \cdot x^4\). Power of a power gives \(x^{6}\); then the product
rule adds exponents: \(x^{6} \cdot x^{4} = x^{10}\).

**Fractional exponent.** Evaluate \(27^{2/3}\). Cube root of 27 is 3; square it: \(3^2 = 9\).

**Radicals.** Simplify \(\sqrt{50} + \sqrt{18} = 5\sqrt2 + 3\sqrt2 = 8\sqrt2\).

## Common traps

- **Multiplying exponents when you should add.** \(2^5 \cdot 2^3 = 2^{8}\), not \(2^{15}\). You only
  multiply exponents for a *power of a power*, \((2^5)^3 = 2^{15}\).
- **Negative exponent → negative number.** \(3^{-1} = \tfrac13\), a positive fraction, not \(-3\).
- **Adding under the radical.** \(\sqrt{a} + \sqrt{b} \ne \sqrt{a+b}\). \(\sqrt{9} + \sqrt{16} = 3+4 = 7\), not \(\sqrt{25} = 5\).
- **Combining unlike bases.** \(2^3 \cdot 3^3\) is \((2\cdot3)^3 = 6^3\), but \(2^3 \cdot 3^2\) cannot be merged into one base.

## Key takeaways

- Same base: add exponents to multiply, subtract to divide, multiply to raise a power to a power.
- \(a^0 = 1\) and \(a^{-n} = 1/a^n\); negative exponents give positive reciprocals.
- Roots are fractional exponents: \(a^{m/n} = \sqrt[n]{a^m}\) — take the root first, then the power.
- To solve exponential equations, rewrite every base as the same prime and equate the exponents.
