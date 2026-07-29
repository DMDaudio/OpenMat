---
id: quant-word-problems-mixtures-0044
section: quant
topic: word-problems
subtopic: mixtures
type: problem-solving
difficulty: hard
tags: [mixtures, weighted-average, solving]
choices:
  A: "4"
  B: "5"
  C: "10"
  D: "25"
  E: "80"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A chemist has a 60% alcohol solution and a 10% alcohol solution. How many liters of the 60% solution
must be mixed with 20 liters of the 10% solution to produce a 20% alcohol solution?

## Explanation

Let \(x\) be the liters of 60% solution added. Track the actual alcohol on each side. The alcohol
before mixing must equal the alcohol after:

\[0.60x + 0.10(20) = 0.20(x + 20)\]
\[0.60x + 2 = 0.20x + 4\]
\[0.40x = 2 \;\Rightarrow\; x = 5\]

So you need **5 liters** of the 60% solution.

Check: alcohol \(= 0.60(5) + 0.10(20) = 3 + 2 = 5\) L in \(5 + 20 = 25\) L, and \(\tfrac{5}{25} = 20\%\). ✓

**The traps:**
- **E (80)** inverts the alligation ratio. The correct ratio of 60% to 10% solution is
  \((20-10):(60-20) = 10:40 = 1:4\); flipping it to 4:1 gives \(4 \times 20 = 80\).
- **A (4)** uses the ratio's "1 part" as if it were already the number of liters.
- **D (25)** is the *total* volume of the final mixture, not the amount added.
- **C (10)** guesses half of the 20 liters.

## Hints

- Write "alcohol in = alcohol out": \(0.60x + 0.10(20) = 0.20(x + 20)\).
- Or use alligation: the amounts are in the ratio \((20-10):(60-20)\), with the 10% solution being the larger share.
