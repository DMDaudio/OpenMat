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

Exponents and roots show up all over GMAT Focus Quant — inside number-property questions, in
compound-growth word problems, and as fast-simplification steps. Almost every trap here comes
from mixing up **adding**, **multiplying**, and **not touching** an exponent. Learn the handful of
rules below cold and most "scary-looking" powers collapse to a small integer.

## Core concepts

**The exponent laws (same base).** These are the whole game. For any nonzero base \(a\):

\[a^{m}\cdot a^{n} = a^{m+n} \qquad \frac{a^{m}}{a^{n}} = a^{m-n} \qquad \left(a^{m}\right)^{n} = a^{mn}\]

Read them out loud: **multiply → add exponents**, **divide → subtract exponents**, **power of a
power → multiply exponents**. The last one is the single most common slip: \(\left(a^{m}\right)^{n}\)
is \(a^{mn}\), *not* \(a^{m+n}\).

**Zero and negative exponents.** These are definitions, not something to "compute":

\[a^{0} = 1 \ (a\neq 0) \qquad a^{-n} = \frac{1}{a^{n}}\]

A negative exponent means **reciprocal**, never a negative number. So \(2^{-2} = \tfrac{1}{4}\),
not \(-4\).

**Roots are fractional exponents.** A root is just an exponent with a fraction:

\[\sqrt[n]{a} = a^{1/n} \qquad a^{m/n} = \left(\sqrt[n]{a}\right)^{m} = \sqrt[n]{a^{m}}\]

So \(27^{2/3} = \left(\sqrt[3]{27}\right)^{2} = 3^{2} = 9\). Take the root **first** (numbers stay
small), then apply the power.

**Simplifying square roots.** Pull out perfect-square factors:

\[\sqrt{50} = \sqrt{25\cdot 2} = 5\sqrt{2}\]

You can only **add or subtract** roots that already have the same radical: \(5\sqrt{2}+3\sqrt{2} =
8\sqrt{2}\). But \(\sqrt{a}+\sqrt{b} \neq \sqrt{a+b}\) — you cannot add under the root.
Multiplication and division *do* combine: \(\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}\) and
\(\dfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\tfrac{a}{b}}\).

**Solving exponential equations.** Rewrite both sides with the **same base**, then set the
exponents equal. If \(9^{x} = 3^{x+4}\), write \(9 = 3^{2}\) so the left side is \(3^{2x}\); then
\(2x = x+4\), giving \(x = 4\).

## Worked examples

**Combining laws.** \(\dfrac{5^{6}}{5^{2}\cdot 5} = \dfrac{5^{6}}{5^{3}} = 5^{6-3} = 5^{3} = 125.\)
Note the lone \(5\) is \(5^{1}\) — don't forget to count it.

**Fractional exponent.** \(27^{2/3}\): cube-root first, \(\sqrt[3]{27} = 3\), then square,
\(3^{2} = 9\). Doing it the other way (\(27^{2} = 729\), then \(\sqrt[3]{729} = 9\)) gives the same
answer but with uglier numbers.

**Factoring out a power.** \(2^{x+2} + 2^{x} = 2^{x}\left(2^{2}+1\right) = 5\cdot 2^{x}\). If that
equals \(40\), then \(2^{x} = 8\), so \(x = 3\). When you see a **sum** of powers, factor out the
smallest one — you cannot add the exponents of a sum.

## Common traps

- **Power of a power vs. product.** \(\left(a^{2}\right)^{3} = a^{6}\), but \(a^{2}\cdot a^{3} = a^{5}\). Multiply vs. add.
- **Negative exponent ≠ negative number.** \(3^{-1} = \tfrac{1}{3}\), a positive fraction.
- **\(a^{0} = 1\), not \(0\).** Any nonzero base to the zero power is 1.
- **Adding under a root.** \(\sqrt{9+16} = \sqrt{25} = 5\), which is *not* \(\sqrt{9}+\sqrt{16} = 3+4 = 7\).
- **Base times exponent.** \(2^{5}\) is \(32\), not \(2\times 5 = 10\).
- **Power towers.** \(27^{2}\) means \(27\) squared \(\big(=3^{6}\big)\); it is not \(3^{(3^{2})} = 3^{9}\).

## Key takeaways

- Same base: multiply → add exponents, divide → subtract, power of a power → multiply.
- \(a^{0}=1\); \(a^{-n}=\tfrac{1}{a^{n}}\) (reciprocal, never negative).
- Roots are fractional exponents; take the root first to keep numbers small.
- You can add/subtract roots only when the radical matches; you can never add under the root.
- Solve exponential equations by rewriting to a common base and equating exponents.
