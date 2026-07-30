---
id: quant-word-problems-interest-0050
section: quant
topic: word-problems
subtopic: interest
type: problem-solving
difficulty: hard
tags: [interest, compound-interest, semiannual-compounding]
choices:
  A: "$400"
  B: "$800"
  C: "$816"
  D: "$1,600"
  E: "$1,664"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

$10,000 is invested at a nominal annual rate of 8%, compounded semiannually. How much interest does the investment earn in one year?

## Explanation

Semiannual compounding means two periods per year, each at half the annual rate: \(8\% / 2 = 4\%\) per period, for \(2\) periods.

\[A = P\left(1 + \frac{R}{n}\right)^{ny} = 10000(1.04)^2 = 10000 \times 1.0816 = 10816\]

The interest earned is \(10816 - 10000 = 816\).

So the investment earns **$816**. (First half-year: $400 of interest; second half-year: 4% of the new $10,400 balance, or $416.)

**The traps:**
- **B ($800)** ignores compounding and applies a flat 8% for the year (\(10000 \times 0.08\)).
- **A ($400)** counts only one semiannual period (\(10000 \times 0.04\)).
- **D ($1,600)** applies the full 8% to *each* half-year as simple interest (\(10000 \times 0.08 \times 2\)).
- **E ($1,664)** compounds but forgets to halve the rate, using 8% per period: \(10000(1.08)^2 - 10000\).

## Hints

- With semiannual compounding, halve the rate and double the number of periods.
- Two periods at 4% is \(P(1.04)^2\) — then subtract the principal for the interest.
