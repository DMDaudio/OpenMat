---
id: quant-counting-probability-combinatorics-0022
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, combinations, at-least-one, complementary-counting]
choices:
  A: "15"
  B: "60"
  C: "111"
  D: "126"
  E: "168"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A team of 4 is to be chosen from a group of 6 seniors and 3 juniors (9 people in all). How many
possible teams include **at least one** junior?

## Explanation

"At least one" invites **complementary counting**: count *all* teams, then subtract the teams that
have **no** junior (i.e., all seniors).

- Total teams of 4 from 9: \(C(9,4) = \dfrac{9 \times 8 \times 7 \times 6}{4!} = \dfrac{3024}{24} = 126\).
- Teams with no junior (all 4 from the 6 seniors): \(C(6,4) = C(6,2) = \dfrac{6 \times 5}{2} = 15\).

\[\text{At least one junior} = 126 - 15 = 111\]

**The traps:**

- **D (126)** is the total number of teams — it forgets to remove the all-senior teams.
- **A (15)** is the number of teams with **no** junior — the complement that should be *subtracted*,
  not reported.
- **E (168)** comes from "pick 1 junior to guarantee, then any 3 of the remaining 8":
  \(C(3,1) \times C(8,3) = 3 \times 56 = 168\). This **over-counts** teams that have 2 or 3 juniors,
  because each such team gets counted once for each junior that could have been the "guaranteed" one.
- **B (60)** counts only the teams with **exactly one** junior \((C(3,1) \times C(6,3) = 3 \times 20)\),
  missing teams with 2 or 3 juniors.

Only **C (111)** counts every team with at least one junior exactly once. (Check:
exactly-1 \(=60\), exactly-2 \(= C(3,2)C(6,2) = 3 \times 15 = 45\), exactly-3 \(= C(3,3)C(6,1) = 6\);
\(60 + 45 + 6 = 111\).)

## Hints

- "At least one" is usually fastest as total minus none — count all teams, then subtract the teams with zero juniors.
- The "zero juniors" case means all 4 members come from the 6 seniors.
