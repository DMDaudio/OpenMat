---
id: quant-arithmetic-exponents-roots
section: quant
topic: arithmetic
subtopic: exponents-roots
title: "Exponents & Roots"
tags: [exponents, roots, powers, radicals]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Exponents and roots show up all over GMAT Focus Quant — in number properties, algebra, and word
problems (growth, interest, doubling). Almost every question is solved by applying a small set of
**exponent rules** rather than by grinding out large powers. Learn the rules cold and most of
these problems become one or two lines.

## Core concepts

**The exponent rules.** For any nonzero base and integer exponents:

\[a^m \cdot a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{mn}\]

\[(ab)^n = a^n b^n, \qquad \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}\]

**Zero and negative exponents.**

\[a^0 = 1 \ (a \neq 0), \qquad a^{-n} = \frac{1}{a^n}\]

A negative exponent means "reciprocal," not "negative number": \(2^{-3} = \tfrac{1}{8}\), not \(-8\).

**Common-base is the master move.** To compare or solve, rewrite everything as a power of the same
base. If \(a^x = a^y\) (and \(a \neq 0, \pm 1\)), then \(x = y\). Example: \(4^3 = (2^2)^3 = 2^6\),
so \(4^3\) and \(8^2 = (2^3)^2 = 2^6\) are equal.

**Roots are fractional exponents.**

\[\sqrt{a} = a^{1/2}, \qquad \sqrt[n]{a} = a^{1/n}, \qquad \sqrt[n]{a^m} = a^{m/n}\]

So the exponent rules apply to roots too. Simplify radicals by pulling out perfect-square factors:
\(\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}\).

**Multiply and divide radicals** freely: \(\sqrt{a}\,\sqrt{b} = \sqrt{ab}\) and
\(\dfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\tfrac{a}{b}}\). But **you cannot add** across a root:
\(\sqrt{a+b} \neq \sqrt{a} + \sqrt{b}\).

## Worked examples

**Common base.** Solve \(2^{x} = 32\). Since \(32 = 2^5\), \(x = 5\).

**Combine, don't compute.** \(\dfrac{3^{10}}{3^{7}} = 3^{10-7} = 3^3 = 27\) — never expand \(3^{10}\).

**Factor out the common power.** \(2^{11} + 2^{11} = 2 \cdot 2^{11} = 2^{12}\). Adding equal powers
*doubles*; it does not add the exponents.

**Simplify a radical.** \(\sqrt{50} + \sqrt{18} = 5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}\).

## Common traps

- **Adding exponents when multiplying bases.** \(2^3 \cdot 3^3 \neq 6^6\). Same *exponent*, different
  base: \(2^3 \cdot 3^3 = (2\cdot 3)^3 = 6^3\). Add exponents only for the *same base*.
- **Adding across a root or a sum of powers.** \(\sqrt{9+16} = \sqrt{25} = 5\), not \(3+4=7\).
- **Mishandling negative exponents.** \(a^{-n}\) is a reciprocal, not a negative value.
- **Forgetting \(a^0 = 1\).** Any nonzero base to the zero power is 1, regardless of the base.

## Key takeaways

- Multiply → add exponents; divide → subtract; power of a power → multiply. Same base only.
- Rewrite everything to a **common base** to compare or solve equations with exponents.
- Roots are fractional exponents; simplify by extracting perfect-square factors.
- You can multiply and divide radicals, but you cannot split a root over addition.
