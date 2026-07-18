---
id: quant-word-problems-mixtures
section: quant
topic: word-problems
subtopic: mixtures
title: "Mixtures & Solutions"
tags: [mixtures, concentration, alligation, weighted-average]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Mixture problems ask what happens to a concentration when you combine solutions, add a pure
ingredient, dilute with water, or swap part of a batch. They look varied, but almost all of them
yield to a single habit: **track the amount of the pure component, not the percentage.**

## Core concepts

**The one equation that matters.**

\[\text{amount of component} = \text{concentration} \times \text{total volume}\]

Percentages don't add; **amounts do.** When you mix solutions, the total amount of the component
is conserved — sum the amounts, then divide by the new total volume to get the new concentration.

**Special ingredients.**

- **Pure component** (e.g. pure acid, pure antifreeze) is at concentration \(100\% = 1\).
- **Water** contributes volume but \(0\) of the component — it dilutes.

**Alligation (a shortcut for two-solution blends).** To hit a target concentration \(m\) by mixing
a weaker solution \(a\) with a stronger one \(b\), the quantities are in the ratio

\[\frac{\text{amount of } a}{\text{amount of } b} = \frac{b - m}{m - a}\]

The mean sits *closer* to whichever solution you use more of — this is just the weighted-average
idea read backwards.

## Worked examples

**Combining two solutions.** Mix 30 L of 10% saline with 20 L of 35% saline.
Amounts of salt: \(0.10\times 30 = 3\) L and \(0.35\times 20 = 7\) L, so \(10\) L of salt in
\(50\) L total:

\[\frac{10}{50} = 20\%.\]

Note it is **not** the plain average \(\tfrac{10+35}{2}=22.5\%\) — there's more of the weaker
solution, so the result is pulled toward 10%.

**Adding a pure ingredient.** You have 50 L of 12% acid and want 20% acid. Add \(x\) L of pure
acid. The acid amount becomes \(0.12\times 50 + x = 6 + x\); the volume becomes \(50 + x\):

\[\frac{6 + x}{50 + x} = 0.20 \implies 6 + x = 10 + 0.2x \implies 0.8x = 4 \implies x = 5.\]

## Common traps

- **Averaging the percentages.** \(\tfrac{a+b}{2}\) is right only when the two volumes are equal.
  Otherwise weight by volume — or just add the amounts.
- **Forgetting the volume also changes.** When you add acid or water, both the numerator *and*
  the denominator move. Don't hold the total fixed unless the problem says you removed the same
  amount you added.
- **"Replace" problems.** Draining \(x\) liters of a solution removes \(x\) liters *of the
  component's current concentration*, not \(x\) liters of pure component. Compute what's left,
  then add the replacement.

## Key takeaways

- Convert every percentage to an **amount** (\(\text{concentration}\times\text{volume}\)) and add
  those; amounts are conserved, percentages are not.
- Water is 0%, pure ingredient is 100% — plug those in like any other solution.
- For a two-way blend to a target, alligation gives the mixing ratio directly: distances from
  the mean, cross-assigned.
