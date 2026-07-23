---
id: quant-counting-probability-combinatorics-0022
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, combinations, at-least, complement]
choices:
  A: "40"
  B: "121"
  C: "126"
  D: "131"
  E: "224"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A committee of 4 is to be formed from 5 men and 4 women, and it must include at least 1 woman. How
many different committees are possible?

## Explanation

"At least 1 woman" is cleanest by the **complement**: count all committees, then subtract the ones
with **no** women.

- Total committees of 4 from 9 people: \(C(9,4) = \dfrac{9 \times 8 \times 7 \times 6}{4!} = 126\).
- Committees with no women (all 4 from the 5 men): \(C(5,4) = 5\).

\[126 - 5 = 121\]

**Traps:**
- **C (126)** ignores the "at least 1 woman" requirement — that's the unrestricted total.
- **D (131)** *adds* the all-men committees instead of subtracting them \((126 + 5)\).
- **E (224)** is the classic over-count \(C(4,1)\times C(8,3) = 4 \times 56\): "pick 1 woman, then
  any 3 more" counts committees with multiple women several times.
- **A (40)** counts only committees with *exactly* one woman \(\left(C(4,1)\times C(5,3) = 4\times
  10\right)\), missing those with 2, 3, or 4 women.

## Hints

- For "at least one," subtract the complement — total committees minus committees with no women.
- Avoid "pick one required item, then fill the rest freely" — it double-counts.
