---
id: quant-word-problems-work-rate-0005
section: quant
topic: word-problems
subtopic: work-rate
type: problem-solving
difficulty: medium
tags: [work-rate, combined-rates]
choices:
  A: "2 hours"
  B: "2 hours 24 minutes"
  C: "2 hours 30 minutes"
  D: "5 hours"
  E: "10 hours"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Machine A can fill a production order in 4 hours, and Machine B can fill the same order in 6
hours. Working together at their constant rates, how long will they take to fill one order?

## Explanation

Add **rates**, never times. Each machine's rate is the fraction of the order it completes per
hour:

- Machine A: \(\tfrac{1}{4}\) order per hour
- Machine B: \(\tfrac{1}{6}\) order per hour

Combined rate:

\[\frac{1}{4} + \frac{1}{6} = \frac{3}{12} + \frac{2}{12} = \frac{5}{12} \text{ order per hour}\]

Time is the reciprocal of the rate (for one whole order):

\[t = \frac{1}{5/12} = \frac{12}{5} = 2.4 \text{ hours} = 2\text{ hours }24\text{ minutes}\]

**The trap:** answer **D (5 hours)** comes from averaging the two times \((4+6)/2\), and **A (2
hours)** from wrongly adding rates as if both took the shorter time. Together they must be
faster than the faster machine alone (under 4 hours), which rules out C, D, and E immediately.

## Hints

- Convert each machine to a rate (order per hour) and add the rates.
- The combined time is the reciprocal of the combined rate — and must be less than the faster machine's solo time.
