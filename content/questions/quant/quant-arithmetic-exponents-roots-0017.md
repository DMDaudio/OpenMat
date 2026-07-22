---
id: quant-arithmetic-exponents-roots-0017
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: easy
tags: [exponents, power-rules]
choices:
  A: "4"
  B: "8"
  C: "16"
  D: "64"
  E: "512"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

What is the value of \(\dfrac{2^{5} \cdot 2^{3}}{2^{6}}\)?

## Explanation

Keep everything in base 2 and just track exponents. When you multiply like bases you **add**
exponents; when you divide, you **subtract**:

\[\frac{2^{5} \cdot 2^{3}}{2^{6}} = 2^{\,5 + 3 - 6} = 2^{2} = 4\]

**The trap:** answer **E (512)** comes from *multiplying* the exponents in the numerator
(\(5 \times 3 = 15\), then \(15 - 6 = 9\), giving \(2^{9} = 512\)). You add exponents when the bases
are multiplied, not multiply them. Answer **D (64)** is \(2^{6}\), what you get if you drop one of
the numerator terms.

## Hints

- Rewrite the whole expression as a single power of 2.
- Multiply like bases → add exponents; divide → subtract exponents.
