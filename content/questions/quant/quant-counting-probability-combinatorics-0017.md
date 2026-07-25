---
id: quant-counting-probability-combinatorics-0017
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, fundamental-counting-principle]
choices:
  A: "8"
  B: "10"
  C: "11"
  D: "20"
  E: "40"
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A café's lunch special lets a customer choose exactly one of 5 main dishes, one of 4 side dishes,
and one of 2 drinks. How many different lunch specials can be assembled?

## Explanation

The three choices are made independently, one after another, so by the **fundamental counting
principle** you multiply the number of options at each stage:

\[5 \times 4 \times 2 = 40\]

Every one of the 5 mains can pair with every one of the 4 sides, and each of those 20 pairings can
pair with either of the 2 drinks — \(20 \times 2 = 40\).

**The trap:** answer **C (11)** comes from *adding* \(5 + 4 + 2\), which counts how many individual
menu items exist, not how many complete specials can be built. Independent stages multiply; they
never add. The other wrong answers each drop a stage: **D (20)** is \(5 \times 4\) (forgetting the
drink), **B (10)** is \(5 \times 2\) (forgetting the side), and **A (8)** is \(4 \times 2\)
(forgetting the main).

## Hints

- Picking a main, then a side, then a drink is a sequence of independent choices.
- For independent stages, multiply the counts — don't add them.
