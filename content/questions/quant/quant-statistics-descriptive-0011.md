---
id: quant-statistics-descriptive-0011
section: quant
topic: statistics
subtopic: descriptive
type: problem-solving
difficulty: hard
tags: [median, even-count]
choices:
  A: "8"
  B: "10"
  C: "12"
  D: "15"
  E: "17"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The six numbers \(3,\ 5,\ 8,\ 12,\ 15,\ x\) have a median of 10. What is the least possible value
of \(x\)?

## Explanation

With **six** numbers, the median is the average of the **3rd and 4th values** once the list is sorted.
We need that average to equal 10, so the 3rd and 4th values must sum to 20.

Sort the five fixed numbers: \(3, 5, 8, 12, 15\). Now see where \(x\) can land.

- If \(x \ge 12\), the sorted order starts \(3, 5, 8, 12, \dots\), so the 3rd and 4th values are
  \(8\) and \(12\): median \(= \tfrac{8 + 12}{2} = 10\). ✓
- If \(8 < x < 12\), the 3rd and 4th values are \(8\) and \(x\), giving median \(\tfrac{8 + x}{2}\),
  which is **less than** 10.
- If \(x \le 8\), the 3rd and 4th values are \(5\) and \(8\) (or smaller), giving a median of at most
  \(6.5\).

So the median equals 10 exactly when \(x \ge 12\). Checking the boundary \(x = 12\): the set becomes
\(3, 5, 8, 12, 12, 15\), whose middle pair is \(8\) and \(12\) — median \(10\). ✓

The least possible value is **12**.

**The trap:** answer **B (10)** assumes \(x\) *is* the median. But with an even count the median is a
value *between* two data points, and here it happens to require \(x\) to be at least 12, not 10.

## Hints

- With six values the median is the average of the 3rd and 4th numbers in sorted order — so they must add to 20.
- Try placing \(x\) in different positions relative to 8 and 12, and find the smallest \(x\) that pushes the 4th value up to 12.
