---
id: quant-counting-probability-combinatorics-0020
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, combinations, order-does-not-matter]
choices:
  A: "35"
  B: "70"
  C: "105"
  D: "210"
  E: "343"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

From a group of 7 people, how many different 3-person committees can be formed? (All committee
members serve in the same capacity — no titles or ranking.)

## Explanation

A committee is an **unordered** group: choosing Ann, Ben, then Cara gives the same committee as
choosing Cara, Ben, then Ann. So this is a combination:

\[\binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = \frac{210}{6} = 35\]

**The trap:** answer **D (210)** is \(7 \times 6 \times 5 = {}_7P_3\) — it counts the *ordered*
selections, treating each rearrangement of the same three people as different. Since order does not
matter, you must divide by \(3! = 6\) to collapse those duplicates. **B (70)** divides by 3 instead
of \(3!\), and **C (105)** divides by 2 instead of \(3!\) — both are the "remembered to divide, but
by the wrong number" error. **E (343)** is \(7^3\), which allows repeats and order, neither of which
applies.

## Hints

- Does reordering the same three people create a different committee?
- A combination is the ordered count divided by \(k!\) — for a group of 3, divide by \(3! = 6\), not
  by 3.
