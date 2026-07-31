---
id: quant-counting-probability-combinatorics-0021
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, permutations, arrangements, restriction, block-method]
choices:
  A: "24"
  B: "48"
  C: "72"
  D: "120"
  E: "240"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Five friends are seated in a row of 5 chairs. In how many of the possible seating arrangements
are two particular friends, Ana and Ben, seated next to each other?

## Explanation

Use the **block method**: since Ana and Ben must be adjacent, glue them into a single "super-person."
That leaves **4 units** to arrange in a row:

\[4! = 24 \text{ ways.}\]

But inside the block, Ana and Ben can sit in either order (Ana–Ben or Ben–Ana), which doubles the
count:

\[4! \times 2 = 24 \times 2 = 48\]

**The traps:**

- **A (24)** treats the pair as one block \((4!)\) but forgets that Ana and Ben can swap seats within
  the block — you must multiply by \(2\).
- **D (120)** is \(5!\), the total number of arrangements with **no** restriction.
- **C (72)** is the number of arrangements in which Ana and Ben are **not** together
  \((120 - 48)\) — the complement of what's asked.
- **E (240)** doubles the full \(5!\) \((2 \times 120)\), double-counting rather than restricting.

Only **B (48)** applies the block method correctly.

## Hints

- Force the two friends together by treating them as a single block, then arrange the resulting units.
- Don't forget the two people inside the block can still switch places with each other.
