---
id: data-insights-data-sufficiency-statistics-0003
section: data-insights
topic: data-sufficiency
subtopic: statistics
type: data-sufficiency
difficulty: medium
tags: [mean, statistics]
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the average (arithmetic mean) of a set of five numbers?

1. The sum of the five numbers is 100.
2. The five numbers are consecutive integers.

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

The mean is (sum) ÷ (count). The count is given as 5, so all we need is the sum.

**Statement (1): the sum is 100.** Then the mean is \(100 \div 5 = 20\), no matter what the
individual numbers are. **Sufficient.**

**Statement (2): the numbers are consecutive integers.** This fixes the *shape* of the set but
not its location. They could be \(1,2,3,4,5\) (mean 3) or \(10,11,12,13,14\) (mean 12). Different
means. **Not sufficient.**

Since (1) alone works and (2) alone does not, the answer is **(A)**.

**Note:** you don't need the actual numbers to get a mean — the sum and the count are enough.
Statement (2) is a tempting distractor because "consecutive" feels like a strong constraint, but
it never tells you *which* consecutive integers.

## Hints

- Mean = sum ÷ count, and the count (5) is already known. What single fact would finish it?
- "Consecutive integers" constrains the pattern but not the starting value — test two different runs to see if the mean is forced.
