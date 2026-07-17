---
id: quant-number-properties-factors-multiples-0021
section: quant
topic: number-properties
subtopic: factors-multiples
type: problem-solving
difficulty: hard
tags: [factors-multiples, counting, inclusion-exclusion]
choices:
  A: "30"
  B: "33"
  C: "34"
  D: "50"
  E: "66"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

How many positive integers less than 100 are divisible by neither 2 nor 3?

## Explanation

The integers in play are \(1, 2, \ldots, 99\) — that's 99 numbers. It's easier to **count what to
throw away** (multiples of 2 or 3) and subtract, using inclusion–exclusion.

- Divisible by 2: \(\left\lfloor \tfrac{99}{2} \right\rfloor = 49\).
- Divisible by 3: \(\left\lfloor \tfrac{99}{3} \right\rfloor = 33\).
- Divisible by both 2 and 3 (i.e. by 6): \(\left\lfloor \tfrac{99}{6} \right\rfloor = 16\).

By inclusion–exclusion, the count divisible by 2 **or** 3 is
\[49 + 33 - 16 = 66.\]

So the count divisible by **neither** is
\[99 - 66 = 33.\]
**Correct: (B).**

**Traps:**

- **(E) 66** is the number divisible by 2 or 3 — the complement of what's asked.
- **Forgetting to subtract the overlap (16)** double-counts multiples of 6 and gives \(99 - 82 = 17\),
  or leads to other wrong totals; inclusion–exclusion prevents this.

## Hints

- Count the "bad" numbers (multiples of 2 or 3) and subtract from 99.
- Don't double-count: multiples of 6 are in both the "÷2" and "÷3" groups, so subtract them once.
