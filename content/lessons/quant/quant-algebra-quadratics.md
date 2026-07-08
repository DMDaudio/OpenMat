---
id: quant-algebra-quadratics
section: quant
topic: algebra
subtopic: quadratics
title: "Quadratic Equations & Factoring"
tags: [quadratics, factoring, roots]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

A quadratic equation has the form \(ax^2 + bx + c = 0\). On GMAT Focus Quant, most quadratics are
built to **factor cleanly**, so factoring — not the quadratic formula — is usually the fast route.

## Core concepts

**Factoring \(x^2 + bx + c\).** Find two numbers that **multiply to \(c\)** and **add to \(b\)**.
Then \(x^2 + bx + c = (x + p)(x + q)\), and the solutions make each factor zero.

Example: \(x^2 - 5x + 6\). Two numbers multiplying to \(+6\) and adding to \(-5\) are \(-2\) and
\(-3\), so \((x-2)(x-3) = 0\) and \(x = 2\) or \(x = 3\).

**Sum and product shortcut.** For \(x^2 + bx + c = 0\):

\[\text{sum of roots} = -b, \qquad \text{product of roots} = c\]

This lets you answer "sum/product of solutions" questions without fully solving.

**Special products** worth recognizing instantly:

\[a^2 - b^2 = (a-b)(a+b), \quad (a+b)^2 = a^2 + 2ab + b^2, \quad (a-b)^2 = a^2 - 2ab + b^2\]

**The quadratic formula** (fallback when factoring is ugly):

\[x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\]

## Worked examples

**Factor and solve.** \(x^2 + 2x - 15 = 0 \Rightarrow (x+5)(x-3) = 0 \Rightarrow x = -5 \text{ or } 3\).

**Difference of squares.** \(x^2 - 49 = 0 \Rightarrow (x-7)(x+7) = 0 \Rightarrow x = \pm 7\).

## Common traps

- **Confusing sum and product of roots.** Sum is \(-b\), product is \(c\). Read which the question wants.
- **Dropping a solution.** A quadratic usually has *two* roots — check whether the question wants both, their sum, or only positive values.
- **Sign errors in factoring.** Verify by expanding your factors back out.

## Key takeaways

- Factor into \((x + p)(x + q)\) where \(pq = c\) and \(p + q = b\); each factor set to zero gives a root.
- Sum of roots \(= -b\), product \(= c\) — a fast shortcut.
- Recognize the difference of squares and perfect-square forms on sight.
