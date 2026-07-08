---
id: quant-statistics-descriptive-0010
section: quant
topic: statistics
subtopic: descriptive
type: problem-solving
difficulty: medium
tags: [mean, median, outliers]
choices:
  A: "6"
  B: "9"
  C: "15"
  D: "24"
  E: "66"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

For the set \(\{4, 7, 9, 10, 90\}\), by how much does the mean exceed the median?

## Explanation

Compute the two measures separately.

**Mean:**

\[\frac{4 + 7 + 9 + 10 + 90}{5} = \frac{120}{5} = 24\]

**Median:** the set is already sorted and has 5 values, so the median is the middle (3rd) value:

\[4,\ 7,\ \underline{9},\ 10,\ 90 \quad\Rightarrow\quad \text{median} = 9\]

The mean exceeds the median by \(24 - 9 = 15\).

The answer is **15**.

**Why they differ:** the outlier \(90\) sits far above the rest. It drags the **mean** upward (it adds
90 to the sum) but has no effect on the **median**, which only cares about the *position* of the middle
value. Whenever a set has a large outlier, expect the mean to sit well above the median.

**The traps:** **D (24)** is the mean itself and **B (9)** is the median itself — both are values you
compute on the way, not the difference the question asks for.

## Hints

- Find the mean and the median as two separate numbers, then subtract.
- The set is already in order — the median of five values is just the middle one.
