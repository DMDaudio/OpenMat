---
id: quant-statistics-descriptive-0012
section: quant
topic: statistics
subtopic: descriptive
type: problem-solving
difficulty: medium
tags: [mean, sum, average-change]
choices:
  A: "25"
  B: "28"
  C: "31"
  D: "43"
  E: "47"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The average (arithmetic mean) of a set of 6 numbers is 22. When a seventh number is added to the set,
the average becomes 25. What is the seventh number?

## Explanation

Averages are easiest to handle through **totals**, using sum \(=\) mean \(\times\) count.

- Sum of the original 6 numbers: \(22 \times 6 = 132\).
- Sum of all 7 numbers: \(25 \times 7 = 175\).

The seventh number is the difference between the two sums:

\[175 - 132 = 43\]

The answer is **43**.

**Sanity check:** the new number must be large enough not only to sit above the old average of 22 but
to pull the average of *all seven* values up by 3. Raising 7 numbers' average by 3 requires
\(7 \times 3 = 21\) extra points beyond the new average, so \(25 + 21 = 46\)… let's confirm directly:
adding 43 raises the sum by \(43\), and \(132 + 43 = 175 = 25 \times 7\). ✓

**The traps:** **A (25)** is just the new average, and **B (28)** is the tempting "\(25 + 3\)" guess.
Both underestimate how far above the average a single new value must be to move the mean of the whole
set.

## Hints

- Convert both averages into sums: sum = mean × count, for 6 numbers and then for 7.
- The seventh number is simply (new sum) − (old sum).
