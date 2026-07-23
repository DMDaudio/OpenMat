---
id: quant-counting-probability-combinatorics-0021
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, permutations, restrictions]
choices:
  A: "120"
  B: "240"
  C: "360"
  D: "480"
  E: "720"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Six friends are to be seated in a row of 6 chairs. If two particular friends insist on sitting
next to each other, how many seating arrangements are possible?

## Explanation

Use the "glue" method for a must-be-together restriction. Treat the two friends as a single block,
so you're now arranging **5 units** (the block plus the other 4 people):

\[5! = 120 \text{ ways to arrange the units}\]

The two friends inside the block can also swap seats, which is \(2! = 2\) arrangements:

\[120 \times 2 = 240\]

**Traps:**
- **E (720)** is \(6!\) — ignoring the restriction entirely.
- **A (120)** is \(5!\) — gluing the pair but forgetting they can be ordered two ways inside the
  block.
- **C (360)** halves \(6!\) \((720/2)\), a common but incorrect fix.
- **D (480)** doubles the correct count, applying the internal \(\times 2\) one time too many.

## Hints

- "Must sit together" → glue the pair into one block and arrange the resulting units.
- Don't forget the pair can be ordered two ways inside their block.
