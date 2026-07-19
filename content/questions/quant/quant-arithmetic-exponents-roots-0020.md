---
id: quant-arithmetic-exponents-roots-0020
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, adding-powers, factoring]
choices:
  A: "2^{11}"
  B: "2^{12}"
  C: "2^{22}"
  D: "4^{11}"
  E: "4^{22}"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

Which of the following is equal to \(2^{11} + 2^{11}\)?

## Explanation

You are **adding** two equal quantities, so the result is twice one of them:

\[2^{11} + 2^{11} = 2 \times 2^{11}\]

Now \(2 = 2^1\), and multiplying like bases means adding exponents:

\[2^{1} \times 2^{11} = 2^{1+11} = 2^{12}\]

**The trap:** answer **C (\(2^{22}\))** comes from adding the exponents (\(11 + 11\)) as if the two
terms were multiplied. They are added, so the powers double — increasing the exponent by exactly 1.
Choice **D (\(4^{11}\))** looks tempting but \(4^{11} = 2^{22}\), the same wrong value.

## Hints

- Adding two equal terms means multiplying one of them by 2.
- Write the leading 2 as \(2^1\), then combine like bases.
