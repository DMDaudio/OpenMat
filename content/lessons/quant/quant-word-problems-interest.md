---
id: quant-word-problems-interest
section: quant
topic: word-problems
subtopic: interest
title: "Simple and Compound Interest"
tags: [interest, simple-interest, compound-interest, growth, percents]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Interest problems ask what a sum of money becomes after it earns a percentage return over time.
There are only two engines you need: **simple interest**, where the interest is a fixed slice of
the original principal every period, and **compound interest**, where each period's interest is
itself added to the balance and earns interest afterward. Almost every GMAT interest question is a
matter of picking the right engine and being careful about what the question asks for — the
**interest earned** or the **final balance**. Confusing those two is the single most common mistake.

## Core concepts

**Notation.** Let \(P\) be the principal (the starting amount), \(r\) the interest rate per period
written as a decimal, and \(t\) the number of periods.

**Simple interest** pays \(r\) of the *original* principal each period. The interest is

\[I = P \cdot r \cdot t\]

and the final balance (or "amount") is \(A = P + I = P(1 + rt)\). Because only the principal ever
earns, simple interest grows in a straight line.

**Compound interest** adds each period's interest to the balance before the next period, so the
balance grows geometrically:

\[A = P(1 + r)^{t}\]

The **interest earned** is \(A - P = P\big[(1 + r)^{t} - 1\big]\). Notice \(A\) is the *balance*,
not the interest — subtract \(P\) whenever the question asks how much was *earned*.

**Compounding more than once a year.** If a stated annual rate \(R\) is compounded \(n\) times per
year for \(y\) years, split the rate and multiply the periods:

\[A = P\left(1 + \frac{R}{n}\right)^{n y}\]

So 8% compounded semiannually for one year is two periods at 4%: \(P(1.04)^2\), **not** \(P(1.08)\).

**Simple vs. compound over exactly 2 years — a shortcut.** For the same \(P\) and \(r\), compound
interest beats simple interest after 2 years by exactly

\[P r^{2}\]

(the interest that the first year's interest earns in the second year). It's a fast way to compute
the gap without expanding both formulas.

## Worked examples

**Simple interest.** $2,000 at 5% simple annual interest for 3 years earns
\(I = 2000 \times 0.05 \times 3 = 300\), for a balance of \(2000 + 300 = 2300\).

**Compound interest.** $5,000 at 10% compounded annually for 2 years grows to
\(5000(1.1)^2 = 5000 \times 1.21 = 6050\). The interest *earned* is \(6050 - 5000 = 1050\) — more
than the \(1000\) simple interest would give, because the first year's $500 itself earns 10%.

**The 2-year gap.** With \(P = 4000\) and \(r = 0.10\), the difference between compound and simple
interest over 2 years is \(P r^2 = 4000 \times 0.01 = 40\). Check: compound earns
\(4000(1.21) - 4000 = 840\); simple earns \(4000 \times 0.1 \times 2 = 800\); the gap is \(40\). ✓

## Common traps

- **Balance vs. interest earned.** \(P(1+r)^t\) and \(P(1+rt)\) are *balances*. If the question
  asks for interest, subtract the principal. Reading "how much interest" and answering with the
  total is the classic trap.
- **Compounding periods.** A rate compounded semiannually or quarterly must be divided by the
  number of periods per year, and the exponent multiplied by it. Applying the full annual rate each
  sub-period massively overstates the result.
- **Simple where compound is meant (and vice versa).** Over one period they agree; after that they
  diverge, and the difference is exactly what many questions test.
- **Decimal slips.** 6% is \(0.06\), not \(0.6\) or \(0.006\). A misplaced decimal changes the
  answer by a factor of ten.
- **Reversing growth by subtraction.** To find the principal behind a compounded balance you must
  *divide* by \((1+r)^t\); taking a flat percentage off the final amount is not the inverse.

## Key takeaways

- Simple interest: \(I = Prt\), balance \(= P(1 + rt)\) — linear, only the principal earns.
- Compound interest: balance \(= P(1+r)^t\), interest earned \(= P[(1+r)^t - 1]\) — geometric.
- Sub-annual compounding: rate \(\to R/n\), periods \(\to ny\).
- The 2-year compound-minus-simple gap is \(P r^2\).
- Always confirm whether the question wants the **interest** or the **final balance**.
