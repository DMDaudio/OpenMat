---
id: quant-arithmetic-exponents-roots
section: quant
topic: arithmetic
subtopic: exponents-roots
title: "Exponents and Roots"
tags: [exponents, roots, powers, rules-of-exponents]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Exponent questions on the GMAT rarely test heavy computation. They test whether you can
**rewrite** expressions into a common base and apply a small set of rules cleanly. Get the base
consistent, and most problems collapse in one or two steps.

## Core concepts

For any nonzero base \(a\) and integers \(m, n\):

- **Product rule** — same base, add exponents: \(a^m \cdot a^n = a^{m+n}\).
- **Quotient rule** — same base, subtract exponents: \(\dfrac{a^m}{a^n} = a^{m-n}\).
- **Power of a power** — multiply exponents: \((a^m)^n = a^{mn}\).
- **Zero exponent** — \(a^0 = 1\) for any \(a \neq 0\).
- **Negative exponent** — a reciprocal: \(a^{-n} = \dfrac{1}{a^n}\).
- **Fractional exponent** — a root: \(a^{1/n} = \sqrt[n]{a}\), and \(a^{m/n} = \sqrt[n]{a^m}\).

The single most useful move is **matching bases**. Since \(4 = 2^2\), \(8 = 2^3\), \(9 = 3^2\),
\(27 = 3^3\), you can turn a messy fraction of different bases into one base and just subtract
exponents.

Two rules that do **not** exist (the classic traps):

- \(a^m + a^n \neq a^{m+n}\). Addition of powers is **not** a rule — you must factor instead.
- \((a + b)^2 \neq a^2 + b^2\). Expand it: \((a+b)^2 = a^2 + 2ab + b^2\).

## Worked examples

**Example 1 — match the base.** Simplify \(\dfrac{4^{10}}{2^{15}}\).

Rewrite \(4^{10} = (2^2)^{10} = 2^{20}\). Then \(\dfrac{2^{20}}{2^{15}} = 2^{20-15} = 2^5 = 32\).

**Example 2 — factor a sum of equal powers.** If \(3^n + 3^n + 3^n = 3^7\), find \(n\).

You cannot add the exponents. Instead, three copies of \(3^n\) is \(3 \cdot 3^n = 3^{1+n}\).
So \(3^{n+1} = 3^7\), which gives \(n + 1 = 7\), so \(n = 6\).

**Example 3 — negative and fractional exponents.** Evaluate \(27^{-2/3}\).

Work outward: \(27^{1/3} = 3\), then \(3^2 = 9\), and the negative sign takes the reciprocal:
\(27^{-2/3} = \dfrac{1}{9}\).

## Common traps

- **Adding powers as if it were a rule.** When you see \(2^x + 2^x\), factor: it equals
  \(2 \cdot 2^x = 2^{x+1}\), not \(2^{2x}\) or \(4^x\)... well, \(2^{x+1}\) *is* correct; the
  point is to factor rather than invent an addition rule.
- **Forgetting to convert to a common base** before applying the quotient rule. \(\tfrac{4^{10}}{2^{15}}\)
  is not \(2^{10-15}\) — the numerator's base must become 2 first.
- **Mishandling the negative sign vs. the exponent.** \(-2^4 = -16\) (the exponent binds before
  the sign), but \((-2)^4 = 16\).
- **Answering the wrong quantity.** If they ask for \(2^{x+3}\) and you find \(x\), remember to
  finish the substitution.

## Key takeaways

- Convert everything to a **common base**, then add/subtract/multiply exponents by the rules.
- **Sums of powers are factored, not combined** — there is no addition rule for exponents.
- A fractional exponent is a root; a negative exponent is a reciprocal. Apply them one at a time.
- Memorize small powers of 2 and 3 (\(2^1\ldots2^{10}\), \(3^1\ldots3^4\)) to move quickly.
