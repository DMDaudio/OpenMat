---
id: quant-statistics-descriptive-0009
section: quant
topic: statistics
subtopic: descriptive
type: problem-solving
difficulty: medium
tags: [weighted-average, mean]
choices:
  A: "84"
  B: "85"
  C: "86"
  D: "87"
  E: "88"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

In a class, 10 students scored an average (arithmetic mean) of 80 on a test, and the other 15
students scored an average of 90. What is the average score of all 25 students?

## Explanation

You cannot simply average 80 and 90 — the two groups are different sizes, so the overall mean must be
a **weighted average**. Work with total points, not averages.

- The 10 students contribute \(10 \times 80 = 800\) points.
- The 15 students contribute \(15 \times 90 = 1350\) points.
- Total points \(= 800 + 1350 = 2150\), spread over \(25\) students.

\[\text{average} = \frac{2150}{25} = 86\]

The answer is **86**.

**The trap:** answer **B (85)** is the simple average \(\tfrac{80 + 90}{2}\), which ignores that the
larger group (15 students) scored higher. A weighted average is always pulled toward the bigger group,
so it lands *above* the midpoint — closer to 90 than to 80.

## Hints

- Don't average the two averages — the groups aren't the same size.
- Convert each group's average into a total number of points, add the totals, then divide by the total number of students.
