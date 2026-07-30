---
id: quant-word-problems-interest-0047
section: quant
topic: word-problems
subtopic: interest
type: problem-solving
difficulty: medium
tags: [interest, compound-interest]
choices:
  A: "$500"
  B: "$1,000"
  C: "$1,050"
  D: "$1,500"
  E: "$6,050"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

$5,000 is invested at 10% compounded annually. How much interest does the investment earn over 2 years?

## Explanation

Compound interest adds each year's interest to the balance before the next year. The balance after 2 years is

\[A = P(1 + r)^{t} = 5000(1.10)^2 = 5000 \times 1.21 = 6050\]

The interest *earned* is the balance minus the principal:

\[A - P = 6050 - 5000 = 1050\]

So the investment earns **$1,050**. (The first year earns $500; the second year earns 10% of the new $5,500 balance, or $550.)

**The traps:**
- **B ($1,000)** uses simple interest, \(5000 \times 0.10 \times 2\), ignoring that the first year's interest also earns interest.
- **E ($6,050)** is the final *balance*, not the interest earned — the $5,000 principal must be subtracted.
- **A ($500)** counts only the first year's interest.
- **D ($1,500)** applies simple interest over 3 years instead of 2.

## Hints

- Compound balance is \(P(1+r)^t\); the interest earned is that balance minus \(P\).
- Over the second year, the interest is charged on the *new* balance, not the original principal.
