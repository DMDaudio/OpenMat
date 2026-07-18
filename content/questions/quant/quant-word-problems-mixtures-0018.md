---
id: quant-word-problems-mixtures-0018
section: quant
topic: word-problems
subtopic: mixtures
type: problem-solving
difficulty: medium
tags: [mixtures, pure-component, concentration]
choices:
  A: "4"
  B: "5"
  C: "6"
  D: "8"
  E: "10"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A container holds 50 liters of a solution that is 12% acid. How many liters of **pure acid**
must be added so that the resulting solution is 20% acid?

## Explanation

Let \(x\) be the liters of pure acid added. Pure acid counts as 100% acid, so it adds \(x\) liters
of acid *and* \(x\) liters of volume.

- Acid before: \(0.12 \times 50 = 6\) liters. After adding: \(6 + x\).
- Total volume after: \(50 + x\).

Set the new concentration to 20%:

\[\frac{6 + x}{50 + x} = 0.20.\]

Multiply out: \(6 + x = 0.20(50 + x) = 10 + 0.2x\), so \(0.8x = 4\) and \(x = 5\).

Adding **5** liters of pure acid works. Check: acid \(= 11\) liters in \(55\) liters total,
and \(\tfrac{11}{55} = 20\%\). ✓

**The trap:** choice **(A) 4** comes from forgetting that the added acid also increases the total
volume — i.e. solving \(6 + x = 0.20\times 50\). You must let the denominator grow too.

## Hints

- Pure acid raises both the amount of acid *and* the total volume — track both.
- Write \(\frac{6 + x}{50 + x} = 0.20\) and solve for \(x\); don't hold the total at 50.
