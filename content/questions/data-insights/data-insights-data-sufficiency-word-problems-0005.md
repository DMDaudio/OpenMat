---
id: data-insights-data-sufficiency-word-problems-0005
section: data-insights
topic: data-sufficiency
subtopic: word-problems
type: data-sufficiency
difficulty: hard
tags: [systems, integer-constraints]
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A stationery store sells pens for $2 each and notebooks for $5 each. Yesterday it sold some of
each. How many pens did it sell?

1. The store's total revenue from these sales was $56.
2. The store sold 19 items in total.

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

Let \(p\) = pens sold and \(n\) = notebooks sold (both non-negative integers).

**Statement (1): \(2p + 5n = 56\).** Many integer solutions: \((p,n) = (28,0), (23,2), (18,4), \dots, (3,10)\).
\(p\) is not determined. **Not sufficient.**

**Statement (2): \(p + n = 19\).** One equation, two unknowns — many solutions. **Not sufficient.**

**Together:** solve the system. From (2), \(p = 19 - n\). Substitute into (1):

\[2(19 - n) + 5n = 56 \implies 38 + 3n = 56 \implies 3n = 18 \implies n = 6,\ p = 13\]

A unique, valid solution (13 pens, 6 notebooks). **Answer: (C).**

**Note:** even though statement (1) alone has integer solutions, it has *many* of them, so it
isn't sufficient by itself. Only the second equation forces a single answer.

## Hints

- Translate each statement into an equation in \(p\) and \(n\); a single equation in two unknowns rarely pins down one variable.
- With both equations you have a solvable 2×2 system — check that the solution is a valid (non-negative integer) count.
