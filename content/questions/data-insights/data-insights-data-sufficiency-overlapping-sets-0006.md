---
id: data-insights-data-sufficiency-overlapping-sets-0006
section: data-insights
topic: data-sufficiency
subtopic: overlapping-sets
type: data-sufficiency
difficulty: hard
tags: [overlapping-sets, insufficient]
answer: E
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

At a company of 50 employees, how many own **both** a car and a bicycle?

1. 30 employees own a car.
2. 25 employees own a bicycle.

*(Standard Data Sufficiency answer choices — see the DS section of
[CONTENT_SCHEMA.md](../../../CONTENT_SCHEMA.md).)*

## Explanation

For two overlapping sets: (own at least one) = (car) + (bike) − (both), so

\[\text{both} = \text{car} + \text{bike} - \text{(at least one)}\]

**Statement (1):** only the car count — nothing about bikes or overlap. **Not sufficient.**

**Statement (2):** only the bike count. **Not sufficient.**

**Together:** we know car = 30 and bike = 25, so both \(= 55 - \text{(at least one)}\). But we're
never told how many own *at least one* (equivalently, how many own *neither*). That number can
vary:

- If everyone owns at least one, "at least one" = 50, so both \(= 55 - 50 = 5\).
- If all 25 bike owners also own cars, "at least one" = 30, so both \(= 55 - 30 = 25\).

The overlap could be anywhere from 5 to 25. Not determined. **Answer: (E).**

**The trap:** answer **(C)** is tempting because two numbers "feel" like enough. But two totals
alone can't fix the overlap — you need a third fact (the count owning neither, or the count
owning at least one).

## Hints

- Overlap needs three of these four quantities: set A, set B, "at least one," and "both."
- With only the two set totals, try to push the overlap to its maximum and minimum — if both are possible, the statements are insufficient.
