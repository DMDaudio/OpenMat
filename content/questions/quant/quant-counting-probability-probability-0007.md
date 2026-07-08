---
id: quant-counting-probability-probability-0007
section: quant
topic: counting-probability
subtopic: probability
type: problem-solving
difficulty: hard
tags: [probability, without-replacement, dependent-events]
choices:
  A: "3/10"
  B: "9/25"
  C: "2/5"
  D: "1/2"
  E: "3/5"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A bag contains 3 red marbles and 2 blue marbles. Two marbles are drawn at random, one after
the other, **without replacement**. What is the probability that both marbles are red?

## Explanation

For "both" events happening in sequence, multiply the probability of the first by the
probability of the second *given the first has happened*.

- First marble red: \(\tfrac{3}{5}\) (3 red out of 5 total).
- Second marble red, given one red is already gone: now 2 red out of 4 remaining, \(\tfrac{2}{4} = \tfrac{1}{2}\).

\[P(\text{both red}) = \frac{3}{5} \times \frac{1}{2} = \frac{3}{10}\]

**The trap:** answer **B (9/25)** treats the draws as *with replacement* \(\left(\tfrac{3}{5}\times\tfrac{3}{5}\right)\).
Without replacement, the totals shrink between draws, so the second fraction has denominator 4,
not 5.

## Hints

- "Without replacement" means the second draw's totals change — the pool shrinks by one.
- Multiply P(first red) by P(second red given the first was red).
