---
id: quant-statistics-standard-deviation-0013
section: quant
topic: statistics
subtopic: standard-deviation
type: problem-solving
difficulty: hard
tags: [standard-deviation, spread, conceptual]
choices:
  A: "{2, 4, 6, 8, 10}"
  B: "{102, 104, 106, 108, 110}"
  C: "{6, 6, 6, 6, 6}"
  D: "{1, 5, 6, 7, 11}"
  E: "{5, 6, 6, 6, 7}"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Each set below contains five numbers. Which set has the **greatest** standard deviation?

- **A.** \(\{2, 4, 6, 8, 10\}\)
- **B.** \(\{102, 104, 106, 108, 110\}\)
- **C.** \(\{6, 6, 6, 6, 6\}\)
- **D.** \(\{1, 5, 6, 7, 11\}\)
- **E.** \(\{5, 6, 6, 6, 7\}\)

## Explanation

Standard deviation measures how far the values sit from their **mean** — not how large the numbers
are. Every set here has mean 6 except where noted, so compare the spreads directly. (You don't need
the actual SD; the sum of squared distances from the mean orders them correctly.)

- **A** — mean 6, distances \(-4, -2, 0, 2, 4\); squared: \(16+4+0+4+16 = 40\).
- **B** — mean 106, distances \(-4, -2, 0, 2, 4\); squared: \(40\). *Identical spread to A — just shifted up by 100.*
- **C** — all values equal, so every distance is 0. Standard deviation \(= 0\), the smallest possible.
- **D** — mean 6, distances \(-5, -1, 0, 1, 5\); squared: \(25+1+0+1+25 = 52\).
- **E** — mean 6, distances \(-1, 0, 0, 0, 1\); squared: \(2\).

Set **D** has the largest total squared distance (52), so it has the **greatest** standard deviation.

**The trap:** answer **B** contains by far the largest *numbers*, which tempts you to pick it. But
adding 100 to every value in A just slides the whole set up the number line without changing how spread
out it is — A and B have the **same** standard deviation. Magnitude is not spread.

## Hints

- Standard deviation depends only on how far values are from their own mean, not on the size of the numbers — so a set of large numbers can have a small SD.
- Each set's mean is easy to spot; compare the sums of squared distances from the mean rather than computing the actual standard deviations.
