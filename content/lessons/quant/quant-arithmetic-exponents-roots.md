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

Exponents and roots show up throughout GMAT Focus Quant — in pure arithmetic, in algebra, and
hidden inside word problems. Almost every mistake comes from misapplying one of a small set of
rules, so the payoff is learning the rules cold and knowing exactly which ones do **not** exist.

## Core concepts

**The exponent rules (same base).**

- Multiply → **add** exponents: \(a^m \cdot a^n = a^{m+n}\).
- Divide → **subtract** exponents: \(\dfrac{a^m}{a^n} = a^{m-n}\).
- Power of a power → **multiply** exponents: \((a^m)^n = a^{mn}\).

Notice multiplying powers *adds* the exponents while a power-of-a-power *multiplies* them. Swapping
those two is the single most common exponent error.

**Zero and negative exponents.**

\[a^0 = 1 \quad (a \neq 0), \qquad a^{-n} = \frac{1}{a^n}\]

A negative exponent means **reciprocal**, not a negative number: \(2^{-2} = \tfrac{1}{4}\), not \(-4\).

**Products and quotients of different bases.** You can only combine bases that are equal. But a
product raised to a power distributes: \((ab)^n = a^n b^n\). That lets you rewrite a mixed base like
\(6^4 = (2\cdot 3)^4 = 2^4 \cdot 3^4\), which is often the key to a cancellation.

**Roots are fractional exponents.**

\[\sqrt[n]{a} = a^{1/n}, \qquad a^{m/n} = \left(a^{1/n}\right)^m = \left(\sqrt[n]{a}\right)^m\]

So \(27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9\). Take the root first (smaller numbers), then the power.

**Simplifying square roots.** Pull out perfect-square factors: \(\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}\).
Radicals **add only when the radical part matches**: \(5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}\), but
\(\sqrt{50} + \sqrt{18}\) must first be simplified to \(5\sqrt{2} + 3\sqrt{2}\) before you can add.

**Solving equations by matching bases.** If \(a^x = a^y\) then \(x = y\). To solve \(2^{x+3} = 8^{x-1}\),
rewrite everything on one base: \(8 = 2^3\), so \(8^{x-1} = 2^{3(x-1)}\), then set the exponents equal.

## Worked examples

**Combine powers.** \(3^4 \cdot 3^2 = 3^{4+2} = 3^6 = 729\). (Not \(3^8\) — you add, not multiply.)

**Fractional exponent.** \(27^{2/3}\): cube root of 27 is 3, then square it → \(9\).

**Matching bases.** \(2^{x+3} = 8^{x-1} \Rightarrow 2^{x+3} = 2^{3(x-1)} = 2^{3x-3}\). Set
\(x + 3 = 3x - 3 \Rightarrow 2x = 6 \Rightarrow x = 3\). Check: \(2^6 = 64 = 8^2\). ✓

## Common traps

- **Multiplying the exponents when you multiply powers.** \(3^4 \cdot 3^2 = 3^6\), not \(3^8\).
- **Reading a negative exponent as a negative number.** \(2^{-2} = \tfrac14\), not \(-4\).
- **Thinking \(a^0 = 0\).** Any nonzero base to the zero power is \(1\).
- **Adding under the radical.** \(\sqrt{50} + \sqrt{18} \neq \sqrt{68}\). Simplify each radical first.
- **Multiplying a base by an exponent.** \(27^{2/3}\) is a root-and-power, not \(27 \cdot \tfrac23 = 18\).
- **Forgetting to distribute a converted exponent.** \(8^{x-1} = 2^{3(x-1)} = 2^{3x-3}\), not \(2^{3x-1}\).

## Key takeaways

- Multiply powers → add exponents; power of a power → multiply exponents. Don't swap them.
- \(a^0 = 1\) and \(a^{-n} = 1/a^n\) (reciprocal, never negative).
- \(a^{m/n} = (\sqrt[n]{a})^m\): take the root first, then the power.
- Simplify radicals by pulling out perfect squares; add radicals only when the radical part matches.
- To solve exponential equations, rewrite both sides on a common base and set the exponents equal.
