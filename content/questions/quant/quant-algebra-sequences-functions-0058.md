---
id: quant-algebra-sequences-functions-0058
section: quant
topic: algebra
subtopic: sequences-functions
type: problem-solving
difficulty: hard
tags: [geometric-sequence, threshold, exponents]
choices:
  A: "405"
  B: "729"
  C: "1215"
  D: "2025"
  E: "3645"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A geometric sequence has first term 5 and common ratio 3. What is the value of the first term in the
sequence that is greater than 1000?

## Explanation

The terms are \(a_n = 5 \cdot 3^{\,n-1}\). Because each term triples, they climb quickly — just list
them until one clears 1000:

\[5,\; 15,\; 45,\; 135,\; 405,\; 1215,\; \dots\]

The 5th term is \(5 \cdot 3^4 = 405\), which is still below 1000. The 6th term is

\[a_6 = 5 \cdot 3^{5} = 5 \cdot 243 = 1215,\]

which is the first term to exceed 1000. So the answer is **1215**.

Common misses: stopping at the last term *below* the threshold (405), overshooting to the next term
(3645), or dropping the leading factor of 5 and using a bare power of 3 (\(3^6 = 729\)).

## Hints

- List the terms — tripling each time, they pass 1000 fast, so you only need a few.
- Find the last term below 1000, then take one more step (×3) and check that it's the first one over.
