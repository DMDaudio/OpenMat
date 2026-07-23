---
id: quant-counting-probability-combinatorics-0023
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, permutations, restrictions, gap-method]
choices:
  A: "720"
  B: "2400"
  C: "4320"
  D: "14400"
  E: "40320"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Five boys and three girls are to stand in a single row. In how many arrangements will no two girls
stand next to each other? (All eight people are distinct.)

## Explanation

Use the **gap method** for a "no two together" restriction. First seat the unrestricted people —
the 5 boys — in a row:

\[5! = 120 \text{ ways}\]

Five boys create **6 gaps** (one before each boy, between each pair, and one after the last):

\[\_\,B\,\_\,B\,\_\,B\,\_\,B\,\_\,B\,\_\]

To keep the girls apart, place each of the 3 distinct girls in a **different** gap. Choosing 3 of
the 6 gaps *with order* (the girls are distinct) is a permutation:

\[P(6,3) = 6 \times 5 \times 4 = 120\]

Multiply the independent stages:

\[5! \times P(6,3) = 120 \times 120 = 14{,}400\]

**Traps:**
- **E (40320)** is \(8!\) — every arrangement, ignoring the restriction.
- **C (4320)** is \(6! \times 3!\) — the count for all three girls standing *together* (a block),
  the opposite restriction.
- **B (2400)** uses \(5! \times C(6,3) = 120 \times 20\), forgetting the girls are distinct, so the
  gap choice should be a permutation, not a combination.
- **A (720)** is \(5! \times 3!\) — arranging the two groups internally but never interleaving them.

## Hints

- "No two together" → seat the others first, then drop the restricted people into the gaps between
  them.
- Five boys leave 6 gaps; the 3 girls are distinct, so choosing gaps for them is a permutation.
