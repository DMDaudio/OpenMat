---
id: quant-counting-probability-combinatorics-0036
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, combinations, complement, at-least]
choices:
  A: "31"
  B: "4"
  C: "18"
  D: "35"
  E: "45"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A 3-person team is to be selected from a pool of 4 men and 3 women. How many different teams
include **at least one woman**?

## Explanation

"At least one" is fastest to count with the **complement**: take every possible team and subtract
the teams that violate the condition (the all-men teams).

\[\underbrace{C(7,3)}_{\text{all teams}} - \underbrace{C(4,3)}_{\text{all men}} = 35 - 4 = 31\]

**The trap:** answer **E (45)** comes from "pick 1 woman, then any 2 of the remaining 6 people":
\(C(3,1)\times C(6,2) = 3 \times 15 = 45\). That double-counts — a team with two women gets counted
once for each woman chosen as "the guaranteed one." Answer **C (18)** counts only *exactly one*
woman, \(C(3,1)\times C(4,2) = 3 \times 6 = 18\), missing the two-woman and three-woman teams.
Answer **D (35)** forgets to remove the all-men teams, and **B (4)** is just the all-men count you
were supposed to subtract.

You can confirm 31 the direct way: exactly 1 woman \(= 18\), exactly 2 \(= C(3,2)C(4,1) = 12\),
exactly 3 \(= C(3,3)C(4,0) = 1\); \(18 + 12 + 1 = 31\).

## Hints

- Counting "at least one" directly is error-prone — try counting the opposite.
- Total teams minus all-men teams leaves exactly the teams with at least one woman.
