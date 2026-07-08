---
id: quant-statistics-descriptive
section: quant
topic: statistics
subtopic: descriptive
title: "Descriptive Statistics: Center & Spread"
tags: [statistics, mean, median, mode, range, standard-deviation, weighted-average]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Descriptive statistics on GMAT Focus Quant is almost entirely about two ideas: where a data set is
**centered** (mean, median, mode) and how **spread out** it is (range, standard deviation). The
arithmetic is light — the exam tests whether you understand what each measure does, especially how
outliers and transformations affect them. Master a handful of moves and this topic becomes free points.

## Core concepts

**Mean (arithmetic average).**

\[\text{mean} = \frac{\text{sum of values}}{\text{count}}\]

The single most useful rearrangement is **sum = mean × count**. Most "average" problems are really
about the *sum*: find it, adjust it, and divide again.

**Weighted average.** When groups have different sizes, you cannot just average the group averages —
weight each by its count:

\[\text{overall mean} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}\]

The result always lands *between* the two group averages, pulled toward the larger group.

**Median.** The middle value once the data is sorted.

- **Odd count:** the single middle value.
- **Even count:** the average of the two middle values.

Always sort first. The median ignores *how far away* extreme values are — only their position matters.

**Mode.** The value that appears most often. A set can have no mode, one mode, or several.

**Range.** \(\text{range} = \text{max} - \text{min}\). A crude measure of spread that depends on only
two numbers.

**Standard deviation (SD).** Measures the *typical distance of values from the mean*. You will almost
never compute it by hand on the GMAT; you reason about it:

- SD is **0** only when every value is identical.
- SD depends on **spread from the mean, not on the size of the numbers**. \(\{1,2,3\}\) and
  \(\{101,102,103\}\) have the *same* SD.
- **Adding a constant** to every value shifts the set but leaves the spread — and therefore the SD —
  **unchanged**.
- **Multiplying** every value by \(k\) multiplies the SD by \(|k|\).

## Worked examples

**Sum trick.** The average of 6 numbers is 22. A seventh number is added and the average becomes 25.
The seventh number? Old sum \(= 22 \times 6 = 132\); new sum \(= 25 \times 7 = 175\); the added number
is \(175 - 132 = 43\). (Notice it is far above 25 — it had to *pull the average up* across all seven
values.)

**Outlier: mean vs. median.** For \(\{4, 7, 9, 10, 90\}\), the mean is \(120/5 = 24\) but the median is
\(9\). The lone large value \(90\) drags the mean far above the median while leaving the median
untouched. When a distribution has a long tail, mean \(\ne\) median.

**Spread, not magnitude.** Which has the larger SD, \(\{2,4,6,8,10\}\) or \(\{102,104,106,108,110\}\)?
Neither — they are identical shapes shifted by 100, so the SD is the same. Bigger numbers do not mean
bigger spread.

## Common traps

- **Averaging averages.** With unequal group sizes, the simple average of two means is wrong — you must
  weight by count.
- **Forgetting to sort before taking the median.** The median is positional; unsorted data gives a
  meaningless "middle."
- **Assuming mean = median.** True only for symmetric data. Any outlier or skew separates them, and the
  mean moves toward the tail.
- **Thinking "big numbers ⇒ big standard deviation."** SD measures distance from the mean, not the
  numbers' magnitude. Adding a constant changes the mean but never the SD.

## Key takeaways

- Turn average problems into **sum** problems: sum = mean × count.
- Weighted averages weight by group size and always fall between the group means.
- Sort first, then take the median; the median ignores how extreme the outliers are, but the mean does not.
- Standard deviation is about spread from the mean: it is 0 only for identical values, unchanged by
  adding a constant, and independent of how large the numbers themselves are.
