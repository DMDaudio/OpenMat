---
id: quant-counting-probability-combinatorics-0019
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, combinations, committee, order-does-not-matter]
choices:
  A: "21"
  B: "24"
  C: "56"
  D: "168"
  E: "336"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A committee of 3 people is to be selected from a group of 8 people. How many different committees
are possible?

## Explanation

A committee is a **selection where order does not matter** — the committee {A, B, C} is the same as
{C, B, A}. That's a **combination**:

\[C(8,3) = \frac{8 \times 7 \times 6}{3!} = \frac{336}{6} = 56\]

**The traps:**

- **E (336)** computes \(8 \times 7 \times 6\), a *permutation* — it counts every ordering of the same
  three people as different. Since order doesn't matter for a committee, you must divide by the
  \(3! = 6\) ways to arrange each trio.
- **D (168)** starts from the 336 orderings but divides by 2 instead of by \(3! = 6\). Three chosen
  people can be arranged in 6 ways, not 2.
- **A (21)** adds \(8 + 7 + 6\); **B (24)** multiplies \(8 \times 3\). Neither reflects choosing 3
  distinct members from the group.

Only **C (56)** correctly divides out the ordering.

## Hints

- Does rearranging the same three people give a *different* committee? If no, it's a combination, not a permutation.
- Take the ordered count \(8 \times 7 \times 6\) and divide by \(3!\) to remove the duplicate arrangements.
