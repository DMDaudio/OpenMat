---
id: quant-word-problems-interest-0045
section: quant
topic: word-problems
subtopic: interest
type: problem-solving
difficulty: easy
tags: [interest, simple-interest]
choices:
  A: "$24"
  B: "$120"
  C: "$240"
  D: "$249.60"
  E: "$1,740"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Priya deposits $1,500 in an account paying 8% simple annual interest. How much interest does the deposit earn in 2 years?

## Explanation

Simple interest is a fixed slice of the *original* principal each year:

\[I = P \cdot r \cdot t = 1500 \times 0.08 \times 2 = 240\]

So the deposit earns **$240**.

**The traps:**
- **B ($120)** computes the interest for a single year (\(1500 \times 0.08\)) and forgets to multiply by the 2 years.
- **E ($1,740)** is the final *balance* \(P + I = 1500 + 240\), not the interest the question asked for.
- **D ($249.60)** compounds the interest annually (\(1500 \times 1.08^2 - 1500\)); the account pays simple interest, so nothing compounds.
- **A ($24)** slips the decimal, using \(0.008\) instead of \(0.08\) for the rate.

## Hints

- Simple interest uses the original principal every year: \(I = P \cdot r \cdot t\).
- The question asks for the interest earned, not the total in the account.
