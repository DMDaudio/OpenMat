---
id: quant-counting-probability-combinatorics-0037
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: hard
tags: [combinatorics, permutations, arrangements, restrictions, block-method]
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

Five students are to be arranged in a row for a photograph. Two of them, Priya and Quinn, insist on
standing next to each other. In how many different arrangements can the five students stand?

## Explanation

Use the **block method** for "must be together." Glue Priya and Quinn into a single unit. That
leaves 4 items to arrange in the row — the block plus the other 3 students:

\[4! = 24 \text{ ways to order the units.}\]

Within the block, Priya and Quinn can stand in 2 orders (Priya–Quinn or Quinn–Priya), so multiply:

\[4! \times 2! = 24 \times 2 = 48\]

**The trap:** answer **C (72)** is the count for the *opposite* condition — arrangements where the
two are **not** adjacent: \(5! - 48 = 120 - 48 = 72\). If you solve for the wrong condition (or
subtract when you should not), you land on 72. Answer **A (24)** forgets the internal \(2!\) for the
block's two orders, and **D (120)** is \(5!\), ignoring the restriction entirely. Answer
**E (240)** is \(5! \times 2\), which double-applies the arrangement.

## Hints

- Treat the two who must be adjacent as one combined block, then count the arrangements of the blocks.
- Don't forget the two people inside the block can switch places.
