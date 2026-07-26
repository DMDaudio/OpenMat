---
id: quant-counting-probability-combinatorics-0031
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: easy
tags: [combinatorics, combinations, committee]
choices:
  A: "21"
  B: "24"
  C: "56"
  D: "336"
  E: "512"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A book club will choose a 3-person panel from its 8 members. In how many different ways can the
panel be chosen?

## Explanation

A panel is an **unordered** selection — being picked "first" versus "third" makes no difference,
so this is a combination:

\[C(8,3) = \frac{8 \cdot 7 \cdot 6}{3!} = \frac{336}{6} = 56\]

**The trap:** answer **D (336)** is \(P(8,3) = 8\cdot7\cdot6\), the *ordered* count. That treats
"Ann, then Bob, then Cara" as different from "Cara, then Bob, then Ann," but a panel is the same
group either way — so you must divide by \(3! = 6\). Answer **B (24)** comes from \(8 \times 3\)
and **A (21)** from \(8 + 7 + 6\); neither reflects how counting works. Answer **E (512)** is
\(8^3\), which would allow the same person to be picked three times.

## Hints

- Does the order in which the three people are chosen change who is on the panel?
- If order does not matter, use \(C(n,k) = \dfrac{n!}{k!\,(n-k)!}\).
