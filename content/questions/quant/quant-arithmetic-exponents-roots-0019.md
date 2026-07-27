---
id: quant-arithmetic-exponents-roots-0019
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [roots, radicals, simplifying]
choices:
  A: "8√2"
  B: "15√2"
  C: "14√2"
  D: "2√17"
  E: "34√2"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is \(\sqrt{50} + \sqrt{18}\) in simplest form?

## Explanation

You can only add square roots once they share the same radical, so simplify each one first by
pulling out perfect-square factors.

\[\sqrt{50} = \sqrt{25\cdot 2} = 5\sqrt{2} \qquad \sqrt{18} = \sqrt{9\cdot 2} = 3\sqrt{2}\]

Now both terms are multiples of \(\sqrt{2}\), so add the coefficients:

\[5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}\]

So the answer is **8√2**.

**The traps:**
- **D (2√17)** comes from adding *under* the root: \(\sqrt{50+18} = \sqrt{68} = 2\sqrt{17}\). But \(\sqrt{a}+\sqrt{b}\neq\sqrt{a+b}\).
- **B (15√2)** comes from *multiplying* the coefficients (\(5\times 3\)) instead of adding them.
- **C (14√2)** comes from simplifying \(\sqrt{18}\) wrongly as \(9\sqrt{2}\) (dividing the radicand by 2), giving \(5\sqrt{2}+9\sqrt{2}\).
- **E (34√2)** comes from mis-extracting both roots by dividing the radicand by 2: \(25\sqrt{2}+9\sqrt{2}\).

## Hints

- Factor each radicand into a perfect square times what's left, e.g. \(50 = 25\times 2\).
- Roots add like "like terms": only combine them when the part under the radical matches.
