---
id: quant-algebra-sequences-functions-0055
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: medium
tags: [functions, function-notation, composition]
choices:
  A: "5"
  B: "7"
  C: "10"
  D: "11"
  E: "13"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The function \(f\) is defined by \(f(x) = 2x - 3\). What is the value of \(f(f(4))\)?

## Explanation

A composition like \(f(f(4))\) is evaluated **inside-out**: compute the inner function first, then feed
that result back into \(f\).

**Inner:** \(f(4) = 2\cdot 4 - 3 = 8 - 3 = 5.\)

**Outer:** \(f(5) = 2\cdot 5 - 3 = 10 - 3 = 7.\)

So \(f(f(4)) = 7\).

Two things to keep straight: don't stop after the inner step (that gives 5, not the final answer), and
don't drop the \(-3\) — it applies **every** time you use the rule.

## Hints

- \(f(f(4))\) means: find \(f(4)\) first, then apply \(f\) to that answer.
- Substitute into \(2x - 3\) each time; the \(-3\) doesn't disappear on the second application.
