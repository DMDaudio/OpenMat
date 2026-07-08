---
id: data-insights-data-sufficiency-algebra-0002
section: data-insights
topic: data-sufficiency
subtopic: algebra
type: data-sufficiency
difficulty: medium
tags: [linear-systems, algebra]
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(x\)?

1. \(3x - y = 7\)
2. \(x + y = 5\)

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

**Statement (1): \(3x - y = 7\).** One equation, two unknowns — infinitely many \((x, y)\) pairs.
\(x\) is not pinned down. **Not sufficient.**

**Statement (2): \(x + y = 5\).** Again one equation in two unknowns. **Not sufficient.**

**Together:** two independent linear equations in two unknowns. Add them to eliminate \(y\):

\[(3x - y) + (x + y) = 7 + 5 \implies 4x = 12 \implies x = 3\]

A unique value, so the two statements together are sufficient. **Answer: (C).**

**Watch out:** don't fall for the "each alone" trap. A single linear equation with two variables
never fixes one variable's value on its own.

## Hints

- One linear equation in two unknowns can't determine a single variable — you need a second, independent equation.
- Check whether the two equations are independent (not multiples of each other); if so, together they solve the system.
