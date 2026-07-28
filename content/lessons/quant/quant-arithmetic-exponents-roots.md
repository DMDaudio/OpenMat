---
id: quant-arithmetic-exponents-roots
section: quant
topic: arithmetic
subtopic: exponents-roots
title: "Exponents & Roots"
tags: [exponents, roots, radicals, powers, laws-of-exponents]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Exponents and roots show up all over GMAT Focus Quant — in number properties, algebra, and word
problems — and almost every mistake comes from misapplying one of a small set of rules. Learn the
laws cold, know that a root is just a fractional exponent, and practice the two power moves the
exam loves: **factoring out a common power** and **rewriting both sides with the same base**.

## Core concepts

**The laws of exponents (same base).**

- Multiply → **add** exponents: \(a^m \cdot a^n = a^{m+n}\).
- Divide → **subtract** exponents: \(\dfrac{a^m}{a^n} = a^{m-n}\).
- Power of a power → **multiply** exponents: \((a^m)^n = a^{mn}\).
- Power of a product → distribute: \((ab)^n = a^n b^n\).

The single most common error is mixing these up — adding when you should multiply, or vice versa.
Multiplying like bases adds exponents; raising a power to a power multiplies them.

**Zero and negative exponents.**

\[a^0 = 1 \quad (a \neq 0), \qquad a^{-n} = \frac{1}{a^n}\]

A negative exponent means **reciprocal**, not a negative number. \(2^{-3} = \tfrac18\), which is
positive. For a fraction, \(\left(\tfrac{a}{b}\right)^{-n} = \left(\tfrac{b}{a}\right)^{n}\) — flip,
then apply the positive power.

**Fractional exponents are roots.**

\[a^{1/n} = \sqrt[n]{a}, \qquad a^{m/n} = \left(\sqrt[n]{a}\right)^{m} = \sqrt[n]{a^m}\]

So \(27^{2/3}\) means "cube root, then square": \((\sqrt[3]{27})^2 = 3^2 = 9\). Take the root of the
**base**; the numerator of the fraction is the power.

**Simplifying radicals.** Pull out perfect-square factors: \(\sqrt{ab} = \sqrt{a}\,\sqrt{b}\). Find
the largest perfect square that divides the number and take its square root out front:

\[\sqrt{50} = \sqrt{25 \cdot 2} = \sqrt{25}\,\sqrt{2} = 5\sqrt{2}\]

The number you pull out is the **square root** of the perfect square (5, not 25), and the factor
you leave inside must have no perfect-square factors left.

## Worked examples

**Same base, solve for the exponent.** Solve \(4^{x+1} = 8^{x-1}\). Rewrite both sides with base 2:
\(4 = 2^2\) and \(8 = 2^3\), so \(2^{2(x+1)} = 2^{3(x-1)}\). With equal bases the exponents must be
equal: \(2(x+1) = 3(x-1)\Rightarrow 2x + 2 = 3x - 3 \Rightarrow x = 5\). Check: \(4^6 = 8^4 = 4096\).

**Factor out the common power.** Simplify \(\dfrac{3^{12} - 3^{10}}{3^{10}}\). You cannot subtract
\(3^{12} - 3^{10}\) directly, but you can factor the smaller power out of the numerator:
\(3^{12} - 3^{10} = 3^{10}(3^{2} - 1) = 3^{10}\cdot 8\). Then
\(\dfrac{3^{10}\cdot 8}{3^{10}} = 8\).

## Common traps

- **Adding vs. multiplying exponents.** \(2^3 \cdot 2^4 = 2^7\) (add), but \((2^3)^4 = 2^{12}\)
  (multiply). Know which rule you're using.
- **Negative exponent ≠ negative number.** \(3^{-2} = \tfrac19\), not \(-9\). It flips to a
  reciprocal.
- **Fractional exponent applied to the wrong part.** In \(27^{2/3}\), the 3 is a cube *root* of 27
  and the 2 is a *power* — it is not \(27 \times \tfrac23 = 18\).
- **Leaving the perfect square inside — or pulling the whole thing out.** \(\sqrt{50} = 5\sqrt2\):
  you pull out \(\sqrt{25} = 5\), not 25, and 2 has no square factor left to remove.
- **Combining a sum or difference of powers by "canceling."** In \(\tfrac{3^{12}-3^{10}}{3^{10}}\)
  you must factor first; you cannot cancel one term of a difference.

## Key takeaways

- Same base: multiply → add exponents, divide → subtract, power of a power → multiply.
- \(a^0 = 1\); a negative exponent is a reciprocal; a fractional exponent is a root.
- Simplify radicals by pulling out the square root of the largest perfect-square factor.
- To solve \(a^{f(x)} = b^{g(x)}\), rewrite both sides as the same base and set the exponents equal.
- Sums and differences of powers get simplified by **factoring out the common power**, not canceling.
