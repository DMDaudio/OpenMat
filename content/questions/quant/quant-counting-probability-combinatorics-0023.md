---
id: quant-counting-probability-combinatorics-0023
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, circular-arrangements]
choices:
  A: "6"
  B: "36"
  C: "60"
  D: "120"
  E: "720"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Six friends are to be seated around a circular table with six chairs. Two seatings are considered
the same if one can be obtained from the other by rotating everyone around the table. How many
distinct seatings are possible?

## Explanation

Around a circle there is no fixed "first" seat, so the \(6!\) arrangements you would count for a
straight row overcount by a factor of 6 — every seating looks identical to the 5 other seatings you
get by rotating everyone one chair over. The clean way to handle this is to **fix one person's
seat** as a reference point and arrange the remaining 5 people relative to that person:

\[(6-1)! = 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120\]

**The trap:** answer **E (720)** is \(6!\), the count for a *row* of labeled seats — it treats each
of the 6 rotations of the same circular seating as different. **C (60)** takes the row count and
further divides by 2 (\(6!/(6 \cdot 2)\)), correcting for reflections as well — appropriate for a
flippable object like a bracelet, but the problem only calls rotations equivalent, not mirror
images. **B (36)** is \(6^2\) and **A (6)** just counts the people, neither of which is an
arrangement count.

## Hints

- On a circle there is no fixed starting seat, so rotating everyone gives the same seating.
- Anchor one person's chair and arrange the other \(n-1\) around them: \((n-1)!\).
