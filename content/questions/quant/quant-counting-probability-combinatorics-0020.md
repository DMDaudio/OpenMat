---
id: quant-counting-probability-combinatorics-0020
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, permutations, identical-items]
choices:
  A: "10"
  B: "20"
  C: "30"
  D: "60"
  E: "120"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

How many distinct arrangements can be made of the letters in the word LEVEL?

## Explanation

LEVEL has 5 letters, but they are not all distinct: **L** appears twice, **E** appears twice, and
**V** once. When items repeat, divide \(n!\) by the factorial of each repeat count:

\[\frac{5!}{2!\,2!} = \frac{120}{2 \times 2} = \frac{120}{4} = 30\]

The two L's are interchangeable (swapping them gives the same word), and likewise the two E's, so
each distinct arrangement was counted \(2! \times 2! = 4\) times in the raw \(5!\).

**Traps:**
- **E (120)** is \(5!\) — treating all five letters as distinct.
- **D (60)** divides by only one \(2!\) \((120/2)\), correcting for the L's but not the E's (or vice
  versa).
- **A (10)** over-divides, e.g. by an extra factor.
- **B (20)** divides by \(3!\) \((120/6)\), as if three letters repeated.

## Hints

- Repeated, interchangeable letters mean the plain \(5!\) over-counts.
- Divide \(5!\) by \(2!\) for the two L's **and** another \(2!\) for the two E's.
