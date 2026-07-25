---
id: quant-counting-probability-combinatorics-0019
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, permutations, order-matters]
choices:
  A: "24"
  B: "56"
  C: "336"
  D: "512"
  E: "40320"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A club has 8 members. It must select a president, a vice-president, and a treasurer, and no member
may hold more than one of these positions. In how many different ways can the three positions be
filled?

## Explanation

The three positions are **distinct roles**, so order matters — being president is different from
being treasurer. Fill the roles one at a time: 8 people can be president, then 7 remain for
vice-president, then 6 for treasurer:

\[8 \times 7 \times 6 = 336\]

This is the permutation \({}_8P_3 = \dfrac{8!}{5!} = 336\).

**The trap:** answer **B (56)** is \(\binom{8}{3}\), the number of ways to choose an *unordered*
group of 3 — but that ignores which of the three named jobs each person gets. Because the roles are
distinct, each group of 3 can be arranged in \(3! = 6\) ways, and \(56 \times 6 = 336\). **D (512)**
is \(8^3\), which would allow the same person to hold several positions (repetition), forbidden
here. **E (40320)** is \(8!\), arranging all 8 members. **A (24)** is \(8 \times 3\), a
multiplication that has no counting meaning.

## Hints

- The three positions are different jobs — does swapping two people's jobs create a new outcome?
- When order matters, use \({}_nP_k = n(n-1)\cdots\); with no repeats allowed, the pool shrinks by
  one at each step.
