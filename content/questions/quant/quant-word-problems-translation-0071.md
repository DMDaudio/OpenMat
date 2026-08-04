---
id: quant-word-problems-translation-0071
section: quant
topic: word-problems
subtopic: translation
type: problem-solving
difficulty: hard
tags: [translation, fractions, before-after, setup]
choices:
  A: "24"
  B: "36"
  C: "40"
  D: "60"
  E: "72"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Two-fifths of the marbles in a bag are blue. If 12 more blue marbles were added to the bag, then
blue marbles would make up one-half of all the marbles in the bag. How many marbles are in the bag
originally?

## Explanation

The key is that adding blue marbles raises **both** the blue count and the total. Let \(t\) be the
original total number of marbles. Then the original number of blue marbles is \(\tfrac{2}{5}t\).

After adding 12 blue marbles:

- new blue count \(= \tfrac{2}{5}t + 12\)
- new total \(= t + 12\)

"Blue would make up one-half of all the marbles" translates to:

\[\frac{2}{5}t + 12 = \frac{1}{2}\,(t + 12)\]

Clear the fractions by multiplying every term by 10:

\[4t + 120 = 5(t + 12) = 5t + 60\]
\[120 - 60 = 5t - 4t \quad\Rightarrow\quad t = 60\]

So the bag originally holds **60** marbles.
(Check: originally \(\tfrac{2}{5}(60) = 24\) blue out of 60. Add 12 blue: \(36\) blue out of
\(72\), and \(36/72 = \tfrac{1}{2}\). ✓)

**The traps:**
- **A (24)** is the original number of *blue* marbles, \(\tfrac{2}{5}t\), not the total.
- **E (72)** is the *new* total after adding 12 — a "which total?" mix-up.
- **B (36)** is the new blue count after adding 12.
- **C (40)** results from adding 12 only to the blue side while forgetting to add it to the total,
  i.e. solving \(\tfrac{2}{5}t + 12 = \tfrac{1}{2}t\).

## Hints

- Let \(t\) be the original total; blue \(= \tfrac{2}{5}t\). Adding 12 blue marbles changes *both*
  the numerator and the denominator.
- Set \(\tfrac{2}{5}t + 12 = \tfrac{1}{2}(t + 12)\), then clear fractions by multiplying through by
  10.
