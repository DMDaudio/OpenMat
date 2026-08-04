---
id: quant-word-problems-mixtures
section: quant
topic: word-problems
subtopic: mixtures
title: "Mixtures"
tags: [mixtures, concentration, alligation, weighted-average]
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Overview

Mixture problems ask you to combine things of different "strengths" — salt in water, alcohol in a
solution, cheap coffee with expensive coffee — and reason about the result. Almost every one of
them yields to a single idea: **track the pure quantity of the thing you care about, not the
percentages.** Percentages don't add; amounts do.

## Core concepts

**Concentration is a part-over-whole.** For a solution,

\[\text{concentration} = \frac{\text{amount of substance}}{\text{total amount}}\]

So 40 liters of a 15% salt solution contains \(0.15 \times 40 = 6\) liters of salt. When you mix or
dilute, the **amount of substance** is what you carry from line to line.

**Mixing is a weighted average.** Combine \(a\) units at concentration \(p\) with \(b\) units at
concentration \(q\). Add the *amounts*, then divide by the *total*:

\[\text{result} = \frac{p\,a + q\,b}{a + b}\]

The answer always lands **between** \(p\) and \(q\), pulled toward whichever quantity is larger.
A simple average \(\tfrac{p+q}{2}\) is only right when \(a = b\).

**Diluting or concentrating.** Adding pure water adds to the total but **not** to the substance.
Adding the pure substance adds to both. Set up an equation on the quantity that stays fixed:

> Add \(w\) liters of water to 10 liters of 40% salt to reach 25%. The salt is fixed at
> \(0.40 \times 10 = 4\) liters, so \(\dfrac{4}{10 + w} = 0.25 \Rightarrow 10 + w = 16 \Rightarrow w = 6\).

**Alligation (a shortcut).** The ratio of the two quantities in a mix is the *inverse* of their
distances from the blend value:

\[\frac{a}{b} = \frac{q - m}{m - p}\]

where \(m\) is the mixture's concentration. It's the weighted average solved for the ratio — handy
when a question asks "in what ratio?"

## Worked examples

**Weighted average.** Mix 20 L of 30% acid with 30 L of 80% acid. Acid \(= 0.30(20) + 0.80(30) =
6 + 24 = 30\) L in \(50\) L total, so \(\tfrac{30}{50} = 60\%\). (Note it's above the simple average
of 55%, because more of the stronger solution is present.)

**Alligation.** In what ratio should $8/kg and $12/kg coffee be mixed to sell at $9/kg?
\(\dfrac{\text{amt of \$8}}{\text{amt of \$12}} = \dfrac{12 - 9}{9 - 8} = \dfrac{3}{1}\) — three parts
cheap to one part expensive.

## Common traps

- **Averaging the percentages.** \(\tfrac{30\% + 80\%}{2} = 55\%\) is wrong unless the volumes are
  equal. Weight by the amounts.
- **Adding water to the substance too.** Diluting with water raises the total but leaves the amount
  of substance unchanged — that fixed amount is your equation.
- **Answering the wrong part.** If you solve for one component, re-read to check whether the
  question wanted that one or the other (or the total).
- **Inverting the alligation ratio.** The ratio of amounts is inverse to the distances — the
  quantity *farther* from the blend value is the *smaller* share.

## Key takeaways

- Track the **amount** of the substance (part = concentration × total), not the percentages.
- A mixture is a weighted average; the result sits between the inputs, nearer the larger quantity.
- Dilution/concentration: write an equation on the quantity that stays fixed.
- Alligation gives the ratio directly: distances from the blend value, inverted.
