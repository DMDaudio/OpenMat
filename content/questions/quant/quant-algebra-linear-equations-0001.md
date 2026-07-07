---
id: quant-algebra-linear-equations-0001
section: quant
topic: algebra
subtopic: linear-equations
type: problem-solving
difficulty: medium
tags: [linear-equations, word-problem, systems]
choices:
  A: "9"
  B: "13"
  C: "15"
  D: "17"
  E: "21"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A tip jar contains only $1 tokens and $2 tokens. There are 30 tokens in the jar with a
combined value of $47. How many $2 tokens are in the jar?

## Explanation

Let \(x\) be the number of $1 tokens and \(y\) the number of $2 tokens.

Two facts give two equations:

- Count of tokens: \(x + y = 30\)
- Total value: \(x + 2y = 47\)

Subtract the first equation from the second:

\[(x + 2y) - (x + y) = 47 - 30 \implies y = 17\]

So there are **17** two-dollar tokens (and \(x = 30 - 17 = 13\) one-dollar tokens).

Check: 13($1) + 17($2) = $13 + $34 = $47. ✓

**The trap:** answer choice **B (13)** is the number of $1 tokens — the value you get if you
solve for the wrong variable. Always re-read what the question asks for before selecting.

## Hints

- You have two unknowns and two independent facts (how many tokens, and their total value). Set up two equations.
- Subtracting one equation from the other eliminates \(x\) in a single step — no substitution needed.
