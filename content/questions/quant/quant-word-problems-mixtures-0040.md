---
id: quant-word-problems-mixtures-0040
section: quant
topic: word-problems
subtopic: mixtures
type: problem-solving
difficulty: medium
tags: [mixtures, weighted-average, concentration]
choices:
  A: "48%"
  B: "50%"
  C: "55%"
  D: "60%"
  E: "110%"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

20 liters of a 30% acid solution is mixed with 30 liters of an 80% acid solution. What is the acid
concentration of the resulting mixture?

## Explanation

Add up the actual **amount of acid**, then divide by the **total volume** — never average the
percents directly.

Acid from each solution:

\[0.30 \times 20 = 6 \text{ L} \qquad 0.80 \times 30 = 24 \text{ L}\]

Total acid \(= 6 + 24 = 30\) L in a total volume of \(20 + 30 = 50\) L:

\[\frac{30}{50} = 60\%\]

So the mixture is **60%** acid. (It's above the halfway point because there's more of the strong
solution.)

**The traps:**
- **C (55%)** is the unweighted average \(\tfrac{30 + 80}{2}\) — wrong because the volumes differ.
- **E (110%)** adds the two percentages, which can't exceed 100%.
- **B (50%)** swaps the volumes and concentrations (\(0.30 \times 30 + 0.80 \times 20 = 25\), then \(\tfrac{25}{50}\)).
- **A (48%)** counts only the strong solution's acid (\(\tfrac{24}{50}\)), forgetting the 6 L from the weak one.

## Hints

- Compute the liters of acid in each solution separately, then add.
- Concentration = total acid ÷ total volume; weight by the amounts, don't average the percents.
