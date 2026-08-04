---
id: quant-word-problems-mixtures-0043
section: quant
topic: word-problems
subtopic: mixtures
type: problem-solving
difficulty: hard
tags: [mixtures, replacement, successive-dilution]
choices:
  A: "3"
  B: "6"
  C: "6.75"
  D: "7.5"
  E: "9"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A 12-liter tank is full of pure acid. 3 liters are drained off and replaced with water; the tank is
stirred, then 3 liters of the mixture are drained off and replaced with water again. How many liters
of pure acid remain in the tank?

## Explanation

Each step removes the same **fraction** of whatever acid is present, then tops up with water. Draining
3 of 12 liters removes \(\tfrac{3}{12} = \tfrac14\) of the contents, leaving \(\tfrac34\) of the acid.
Because the tank is refilled to 12 liters each time, the *second* draining also removes \(\tfrac14\)
of the acid then present.

So the acid is multiplied by \(\tfrac34\) twice:

\[12 \times \left(\frac{3}{4}\right)^2 = 12 \times \frac{9}{16} = \frac{108}{16} = 6.75 \text{ liters}\]

So **6.75 liters** of pure acid remain.

**The traps:**
- **E (9)** stops after the first replacement (\(12 \times \tfrac34 = 9\)).
- **D (7.5)** subtracts the fractions instead of multiplying: \(12\left(1 - \tfrac14 - \tfrac14\right) = 12 \times \tfrac12\).
- **B (6)** subtracts 3 liters of acid twice (\(12 - 3 - 3\)), as if each draining removed pure acid.
- **A (3)** is the amount of water added, not the acid remaining.

## Hints

- After the first swap the liquid is a mixture, so the second draining removes acid *and* water — think in fractions, not fixed liters.
- Each replacement multiplies the remaining acid by \(\tfrac34\); apply it twice.
