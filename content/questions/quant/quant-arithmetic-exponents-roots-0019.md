---
id: quant-arithmetic-exponents-roots-0019
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, power-of-a-power, product-rule, variables]
choices:
  A: "x^{9}"
  B: "x^{10}"
  C: "x^{12}"
  D: "x^{14}"
  E: "x^{24}"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

For \(x \neq 0\), which of the following is equal to \(\left(x^{2}\right)^{3} \cdot x^{4}\)?

## Explanation

Apply the rules in order. First, **power of a power** — multiply the exponents:

\[\left(x^{2}\right)^{3} = x^{2\cdot 3} = x^{6}\]

Then the **product rule** — same base, add the exponents:

\[x^{6} \cdot x^{4} = x^{6+4} = x^{10}\]

The answer is **\(x^{10}\)**.

**The traps:** choice **E** (\(x^{24}\)) multiplies all three exponents (\(2\cdot 3\cdot 4\)) as if
everything were a power of a power. Choice **A** (\(x^{9}\)) adds \(2+3+4\), mixing up which
operation adds and which multiplies. Multiply for a power raised to a power; add when multiplying
like bases.

## Hints

- Do the inner operation first: \((x^2)^3\) is a power raised to a power.
- Once you have a single power of \(x\) times another, add those two exponents.
