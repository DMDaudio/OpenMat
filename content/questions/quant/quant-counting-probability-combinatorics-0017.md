---
id: quant-counting-probability-combinatorics-0017
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, counting-principle, fundamental-counting]
choices:
  A: "8"
  B: "9"
  C: "12"
  D: "14"
  E: "24"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A café builds a sandwich by choosing exactly one bread (3 kinds), one filling (4 kinds), and one
sauce (2 kinds). How many different sandwiches can be made?

## Explanation

The three choices are made in sequence and are independent of one another, so by the **fundamental
counting principle** you **multiply** the number of options at each stage:

\[3 \times 4 \times 2 = 24\]

**The traps:**

- **B (9)** adds the options \((3 + 4 + 2)\) instead of multiplying. You add only when the choices are
  mutually exclusive alternatives; here you make one choice from *each* category, so it's "and," which
  means multiply.
- **C (12)** multiplies bread × filling \((3 \times 4)\) but forgets the sauce entirely.
- **A (8)** multiplies filling × sauce \((4 \times 2)\) and drops the bread.
- **D (14)** multiplies two categories and then *adds* the third \((3 \times 4 + 2)\), mixing the
  operations.

Only **E (24)** multiplies all three.

## Hints

- Each sandwich needs one bread AND one filling AND one sauce — "and" between independent choices means multiply.
- Multiply the count at every stage; don't leave a category out.
