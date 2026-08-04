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

Most GMAT Focus exponent questions reward you for **rewriting everything in the same base** and
then just tracking the exponents. Almost nothing here needs a calculator — the whole game is a
handful of rules applied cleanly and, above all, **not confusing multiplication of bases with
addition of exponents**.

## Core concepts

**The power rules.** For any nonzero base \(a\):

\[a^m \cdot a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{mn}\]

Read them carefully: you **add** exponents when you *multiply* like bases, and you **multiply**
exponents when you *raise a power to a power*. Mixing these two up is the single most common
exponent error on the test.

**Zero and negative exponents.**

\[a^0 = 1 \ (a \neq 0), \qquad a^{-n} = \frac{1}{a^n}\]

A negative exponent means "reciprocal," not "negative number": \(2^{-3} = \tfrac{1}{8}\), not \(-8\).

**Fractional exponents are roots.**

\[a^{1/n} = \sqrt[n]{a}, \qquad a^{m/n} = \left(\sqrt[n]{a}\right)^{m} = \sqrt[n]{a^{m}}\]

So \(27^{2/3} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9\). Take the root first when it keeps the numbers
small.

**Roots simplify by pulling out perfect squares.** \(\sqrt{ab} = \sqrt{a}\,\sqrt{b}\), so

\[\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}\]

You can only **add or subtract** radicals when the part under the root matches:
\(5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}\). You may **never** merge \(\sqrt{a} + \sqrt{b}\) into
\(\sqrt{a+b}\).

**Factoring out a common power** cracks the hardest questions. Terms like \(2^n + 2^n\) are not a
new base — they collapse:

\[2^n + 2^n = 2 \cdot 2^n = 2^{n+1}, \qquad 3^{k+1} - 3^{k} = 3^{k}(3 - 1) = 2\cdot 3^{k}\]

## Worked examples

**Same-base equation.** Solve \(2^{x+1} = 8^{x-1}\). Rewrite \(8 = 2^3\), so the right side is
\(2^{3(x-1)} = 2^{3x-3}\). Same base ⟹ equal exponents: \(x + 1 = 3x - 3\), giving \(2x = 4\) and
\(x = 2\).

**Collapse a sum of equal powers.** If \(2^n + 2^n + 2^n + 2^n = 2^{12}\), the left side is
\(4 \cdot 2^n = 2^2 \cdot 2^n = 2^{n+2}\). So \(n + 2 = 12\) and \(n = 10\).

**Ratio of powers.** With \(x = 3^{20}\) and \(y = 3^{18}\), \(\dfrac{x}{y} = 3^{20-18} = 3^2 = 9\).

## Common traps

- **Multiplying exponents when you should add them** (and vice versa). \(2^5 \cdot 2^3 = 2^8\), not
  \(2^{15}\).
- **Reading a negative exponent as a negative number.** \(3^{-2} = \tfrac{1}{9}\), and \(3^0 = 1\)
  (not \(0\)).
- **Merging unlike radicals.** \(\sqrt{50} + \sqrt{18} \neq \sqrt{68}\); simplify each first, then add.
- **Treating a sum of powers as a new base.** \(2^n + 2^n\) is \(2^{n+1}\), not \(4^n\) or \(2^{2n}\).

## Key takeaways

- Get everything into a **common base**, then just manipulate exponents.
- Multiply like bases → **add** exponents; raise a power to a power → **multiply** exponents.
- \(a^0 = 1\), \(a^{-n} = 1/a^n\), and \(a^{m/n} = \sqrt[n]{a^m}\).
- Simplify radicals by pulling out perfect squares; only combine radicals with the same radicand.
- Sums of equal powers **factor**: \(k\) copies of \(a^n\) is \(k \cdot a^n\).
