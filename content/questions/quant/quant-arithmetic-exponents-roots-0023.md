---
id: quant-arithmetic-exponents-roots-0023
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [roots, radicals, adding-radicals]
choices:
  A: '\(\sqrt{68}\)'
  B: '\(15\sqrt{2}\)'
  C: '\(8\sqrt{2}\)'
  D: "8"
  E: '\(2\sqrt{2}\)'
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is \(\sqrt{50} + \sqrt{18}\) in simplest form?

## Explanation

You cannot add radicals until each one is simplified to the **same radical part**. Pull out the
perfect-square factors:

\[\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}, \qquad \sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt{2}\]

Both are multiples of \(\sqrt{2}\), so add the coefficients:

\[5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}\]

**The trap:** choice **A (\(\sqrt{68}\))** adds the numbers *under* the radical (\(50 + 18\)) — but
\(\sqrt{a} + \sqrt{b} \neq \sqrt{a+b}\). Choice **B (\(15\sqrt{2}\))** multiplies the coefficients
(\(5 \times 3\)) instead of adding them; **D (8)** drops the \(\sqrt{2}\) altogether; and **E
(\(2\sqrt{2}\))** subtracts the coefficients. Add coefficients only when the radical parts already
match.

## Hints

- Simplify each square root first — what perfect squares divide 50 and 18?
- Once both terms are multiples of \(\sqrt{2}\), add their coefficients (don't touch the \(\sqrt{2}\)).
