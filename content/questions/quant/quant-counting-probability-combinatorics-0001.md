---
id: quant-counting-probability-combinatorics-0001
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, counting-principle]
choices:
  A: "8"
  B: "9"
  C: "12"
  D: "24"
  E: "48"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A café builds a sandwich by choosing exactly one of 4 breads, one of 3 cheeses, and one of 2
spreads. How many distinct sandwiches can be made?

## Explanation

The three choices are made **together** (one bread *and* one cheese *and* one spread), so by the
fundamental counting principle you **multiply**:

\[4 \times 3 \times 2 = 24\]

**Traps:**
- **B (9)** *adds* the options \((4 + 3 + 2)\) — addition is for mutually exclusive cases ("or"),
  not for independent successive choices ("and").
- **C (12)** multiplies only bread and cheese \((4 \times 3)\), forgetting the spread.
- **A (8)** multiplies only bread and spread \((4 \times 2)\), forgetting the cheese.
- **E (48)** double-counts the spread \((4 \times 3 \times 2 \times 2)\).

## Hints

- Each independent choice made together multiplies the count — decide multiply vs. add first.
- Include every stage: bread × cheese × spread.
