---
id: quant-word-problems-interest-0049
section: quant
topic: word-problems
subtopic: interest
type: problem-solving
difficulty: medium
tags: [interest, compound-interest, simple-interest, comparison]
choices:
  A: "$4"
  B: "$40"
  C: "$80"
  D: "$400"
  E: "$840"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

$4,000 is invested for 2 years at 10% per year. How much more interest does the money earn if the interest is compounded annually rather than paid as simple interest?

## Explanation

Compute both and subtract.

Simple interest: \(I = 4000 \times 0.10 \times 2 = 800\).

Compound interest: \(A = 4000(1.10)^2 = 4000 \times 1.21 = 4840\), so the interest is \(4840 - 4000 = 840\).

The difference is \(840 - 800 = 40\).

A faster route: over exactly 2 years the compound-minus-simple gap is \(P r^2 = 4000 \times (0.10)^2 = 4000 \times 0.01 = 40\) — the interest that the first year's $400 earns in the second year.

So compounding earns **$40** more.

**The traps:**
- **E ($840)** is the total compound interest, not the *difference* from simple interest.
- **D ($400)** is one year's interest (\(4000 \times 0.10\)), a common stand-in for the gap.
- **C ($80)** doubles the correct gap, as if the $40 recurred in both years.
- **A ($4)** slips a decimal, using \(r^2 = 0.001\) in the shortcut.

## Hints

- Find the simple interest and the compound interest separately, then subtract.
- Over 2 years the gap equals \(P r^2\) — the interest earned on the first year's interest.
