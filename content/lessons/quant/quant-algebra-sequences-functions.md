---
id: quant-algebra-sequences-functions
section: quant
topic: algebra
subtopic: sequences-functions
title: "Sequences & Functions"
tags: [sequences, arithmetic-sequence, geometric-sequence, recursion, functions, function-notation]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Two closely related ideas show up together on GMAT Focus Quant: **sequences** (ordered lists of
numbers built by a rule) and **functions** (a rule that turns an input into an output). Both reward
the same discipline — read the rule exactly, mind the indexing, and don't do more arithmetic than the
question needs. The traps are almost always **off-by-one** errors and **misreading the rule**, not
hard computation.

## Core concepts

**Arithmetic sequences** add a fixed **common difference** \(d\) each step. If the first term is
\(a_1\), the \(n\)th term is

\[a_n = a_1 + (n-1)\,d.\]

The multiplier is \((n-1)\), **not** \(n\): you take \(d\) one fewer time than the term number,
because the first term takes zero steps. To **sum** the first \(n\) terms, average the first and last
term and multiply by how many there are:

\[S_n = \frac{n(a_1 + a_n)}{2}.\]

**Geometric sequences** multiply by a fixed **common ratio** \(r\) each step:

\[a_n = a_1 \, r^{\,n-1}.\]

Again the exponent is \(n-1\), not \(n\). Terms grow (or shrink) by a constant *factor*, so they
change far faster than an arithmetic sequence's constant *steps*.

**Recursive sequences** define each term from the previous one, e.g. \(a_{n+1} = 2a_n - 1\) with a
given starting value. There is no shortcut unless you spot a pattern — just apply the rule one step at
a time, and **stop at the right term** (writing out \(a_1, a_2, a_3, \dots\) with labels prevents the
usual off-by-one slip).

**Functions** are rules written as \(f(x)\). To evaluate \(f(\text{something})\), substitute that
"something" for **every** \(x\) in the definition. For a **composition** \(f(f(x))\), work
**inside-out**: compute the inner \(f\) first, then feed its result back into \(f\).

## Worked examples

**Arithmetic term.** First term \(a_1 = 7\), common difference \(d = 4\). The 20th term is
\(a_{20} = 7 + (20-1)\cdot 4 = 7 + 76 = 83\) — not \(7 + 20\cdot 4 = 87\). The \((n-1)\) is the whole
game.

**Geometric term.** First term \(3\), ratio \(2\). The 6th term is \(3\cdot 2^{6-1} = 3\cdot 32 = 96\),
not \(3\cdot 2^6 = 192\).

**Recursion.** With \(a_1 = 2\) and \(a_{n+1} = 2a_n - 1\): \(a_2 = 3,\; a_3 = 5,\; a_4 = 9,\;
a_5 = 17\). Label each step so you hand back \(a_5\), not \(a_4\) or \(a_6\).

**Composition.** If \(f(x) = 2x - 3\), then \(f(f(4))\): first \(f(4) = 2\cdot 4 - 3 = 5\), then
\(f(5) = 2\cdot 5 - 3 = 7\). Inner first, then outer — and don't drop the \(-3\) either time.

## Common traps

- **Off-by-one in the term formula.** Using \(a_1 + n\,d\) or \(a_1 r^{\,n}\) instead of the
  \((n-1)\) version overshoots by exactly one step. This is the single most common error here.
- **Forgetting the first term.** Computing \((n-1)d\) or \(r^{\,n-1}\) but not adding/multiplying the
  first term.
- **Dropping ÷2 in the arithmetic sum,** or using the wrong count of terms (the number of terms from
  \(a\) to \(b\) with step \(d\) is \(\frac{b-a}{d} + 1\), not \(\frac{b-a}{d}\)).
- **Answering the wrong quantity.** A problem that gives two terms and asks for the *first term* is
  easy to finish by reporting \(d\) instead. Reread what's being asked.
- **Composition outside-in or stopping early.** \(f(f(x))\) is not \(f(x)\), and it is not
  \([f(x)]^2\); evaluate the inner function first, then the outer.

## Key takeaways

- Arithmetic: \(a_n = a_1 + (n-1)d\); sum \(= \dfrac{n(a_1+a_n)}{2}\).
- Geometric: \(a_n = a_1 r^{\,n-1}\); terms change by a constant factor, so they move fast.
- Recursive sequences: apply the rule step by step and **stop at the right index** — label your terms.
- Functions: substitute for every \(x\); compose **inside-out** and keep the constant term.
- Nearly every miss here is an **off-by-one** or a **misread rule**, not hard arithmetic — slow down on
  the indexing.
