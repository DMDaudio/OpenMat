---
id: quant-counting-probability-combinatorics-0035
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, circular-arrangement, permutations]
choices:
  A: "24"
  B: "60"
  C: "360"
  D: "720"
  E: "120"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

In how many distinct ways can 6 people be seated around a circular table, if two seatings are
considered the same when one can be obtained from the other by rotating the whole table?

## Explanation

Around a circle there is no fixed "first" seat: rotating everyone one seat to the left produces the
same arrangement of neighbors. Fix one person's seat as a reference point and arrange the remaining
\(6 - 1 = 5\) people in the other seats:

\[(6-1)! = 5! = 120\]

**The trap:** answer **D (720)** is \(6!\), the count for a *straight row* of 6 seats. In a row all
6 positions are distinct, but a circle's rotations collapse every arrangement into a group of 6
equivalent rotations, so you divide \(6!\) by 6 — equivalently, use \((n-1)!\). Answer **C (360)**
is \(\tfrac{6!}{2}\), an incorrect partial correction.

## Hints

- Around a round table, is there a fixed "first" chair, or do rotations look identical?
- Pin one person down as a reference, then arrange the rest: that gives \((n-1)!\).
