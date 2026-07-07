---
id: quant-algebra-linear-equations
section: quant
topic: algebra
subtopic: linear-equations
title: "Linear Equations & Systems"
tags: [algebra, equations, systems, substitution, elimination]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

A **linear equation** relates unknowns raised only to the first power — no squares, roots, or
products of variables. On the GMAT Focus Quant section, linear equations show up directly
("solve for $x$") and, more often, hidden inside word problems. The core skills are (1)
isolating a variable and (2) solving a **system** of two equations in two unknowns.

## Core concepts

**Solving a single linear equation.** Do the same operation to both sides until the variable is
alone:

$$3x + 7 = 22 \implies 3x = 15 \implies x = 5$$

**Systems of two equations.** When you have two unknowns, you need two independent equations.
Two standard methods:

- **Substitution** — solve one equation for a variable, plug it into the other.
- **Elimination** — add or subtract the equations to cancel one variable.

Elimination is usually faster when a variable already has matching (or easily matched)
coefficients.

## Worked examples

**Example 1 — elimination.**

$$\begin{cases} x + y = 30 \\ x + 2y = 47 \end{cases}$$

Subtract the first from the second: $y = 17$. Then $x = 13$. Done in one clean step because $x$
had the same coefficient in both.

**Example 2 — substitution.**

$$\begin{cases} y = 2x - 1 \\ 3x + y = 24 \end{cases}$$

Substitute the first into the second: $3x + (2x - 1) = 24 \implies 5x = 25 \implies x = 5$, so
$y = 9$.

## Common traps

- **Answering for the wrong variable.** Word problems often solve most naturally for one unknown
  but *ask* for the other. Circle what the question wants before you start.
- **"Not enough equations."** Two unknowns need two *independent* equations. Two equations that
  are secretly the same equation (e.g. $2x + 2y = 60$ and $x + y = 30$) give infinitely many
  solutions, not a unique one — this idea is tested heavily in Data Sufficiency.
- **Sign errors during elimination.** Subtracting an equation means subtracting *every* term,
  including the right-hand side.

## Key takeaways

- One linear equation, one unknown: isolate the variable.
- Two unknowns: get two independent equations, then eliminate or substitute.
- In word problems, translate each fact into an equation, then re-read to see which unknown is
  actually being asked for.
