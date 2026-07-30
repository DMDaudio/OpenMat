---
id: quant-word-problems-interest-0051
section: quant
topic: word-problems
subtopic: interest
type: problem-solving
difficulty: hard
tags: [interest, compound-interest, reverse, principal]
choices:
  A: "$7,744"
  B: "$8,000"
  C: "$8,067"
  D: "$8,800"
  E: "$10,648"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A sum of money invested at 10% compounded annually grows to $9,680 after 2 years. What was the amount originally invested?

## Explanation

Compound growth multiplies the principal by \((1+r)^t\), so to recover the principal you *divide* by that factor:

\[P = \frac{A}{(1 + r)^t} = \frac{9680}{(1.10)^2} = \frac{9680}{1.21} = 8000\]

Check: \(8000 \times 1.10 = 8800\), and \(8800 \times 1.10 = 9680\). ✓

So the original investment was **$8,000**.

**The traps:**
- **D ($8,800)** reverses only one of the two years, dividing by 1.10 once.
- **A ($7,744)** takes a flat 20% off the final amount (\(9680 \times 0.8\)) — but subtracting a percentage is not the inverse of compound growth.
- **C ($8,067)** divides by 1.20, treating the growth as simple interest over 2 years.
- **E ($10,648)** grows the amount by another year (\(9680 \times 1.10\)) instead of working backward.

## Hints

- To undo compound growth, divide the final amount by \((1+r)^t\), not subtract a percentage.
- Over 2 years at 10%, the factor is \(1.10^2 = 1.21\).

