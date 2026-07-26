---
id: quant-counting-probability-combinatorics-0034
section: quant
topic: counting-probability
subtopic: combinatorics
type: problem-solving
difficulty: medium
tags: [combinatorics, arrangements, identical-items, permutations]
choices:
  A: "120"
  B: "60"
  C: "30"
  D: "20"
  E: "10"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

How many distinct arrangements can be made using all the letters of the word **LEVEL**?

## Explanation

LEVEL has 5 letters, but they are not all distinct: **L** appears twice, **E** appears twice, and
**V** appears once. When items repeat, divide \(n!\) by the factorial of each repeat count so that
swapping identical letters is not counted as a new arrangement:

\[\frac{5!}{2!\,\cdot\,2!\,\cdot\,1!} = \frac{120}{2 \cdot 2} = \frac{120}{4} = 30\]

**The trap:** answer **A (120)** is \(5!\), which counts the two L's (and the two E's) as though
they were distinguishable — but "L\(_1\)EVEL\(_2\)" looks identical to "L\(_2\)EVEL\(_1\)," so those
duplicates must be divided out. Answer **B (60)** is \(\tfrac{5!}{2!}\), correcting for only *one*
of the two repeated letters. Answers **D** and **E** under-count further.

## Hints

- Count how many times each letter appears: which letters repeat?
- Divide \(5!\) by the factorial of *each* repeated letter's count.
