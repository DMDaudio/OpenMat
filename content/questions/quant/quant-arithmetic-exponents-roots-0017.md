---
id: quant-arithmetic-exponents-roots-0017
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: easy
tags: [exponents, powers-of-two, substitution]
choices:
  A: "35"
  B: "64"
  C: "128"
  D: "256"
  E: "512"
answer: D
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(2^x = 32\), what is the value of \(2^{x+3}\)?

## Explanation

You don't even need to solve for \(x\). Use the product rule to split the exponent:
\[2^{x+3} = 2^x \cdot 2^3.\]

You're told \(2^x = 32\), and \(2^3 = 8\), so
\[2^{x+3} = 32 \cdot 8 = 256.\]

(If you prefer to find \(x\): \(2^x = 32 = 2^5\), so \(x = 5\), and \(2^{5+3} = 2^8 = 256\).)
**Correct: (D).**

**The trap:** choice **(A) 35** comes from adding \(32 + 3\) — treating the exponent's "+3" as
if it were added to the value. Exponents add when powers of the same base are *multiplied*, so
the "+3" multiplies by \(2^3 = 8\).

## Hints

- \(2^{x+3}\) can be rewritten as \(2^x \cdot 2^3\) — and you already know \(2^x\).
- "+3" in the exponent is not "+3" in the value; it means one more factor of \(2^3\).
