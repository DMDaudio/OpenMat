---
id: quant-arithmetic-exponents-roots-0018
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: medium
tags: [exponents, factoring, same-base]
choices:
  A: "5"
  B: "6"
  C: "7"
  D: "8"
  E: "21"
answer: B
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(3^n + 3^n + 3^n = 3^7\), what is the value of \(n\)?

## Explanation

There is no rule that lets you add exponents when powers are *added*, so don't touch the 7 yet.
Instead, notice the left side is three identical copies of \(3^n\):
\[3^n + 3^n + 3^n = 3 \cdot 3^n.\]

Now use the product rule, since \(3 = 3^1\):
\[3 \cdot 3^n = 3^{1} \cdot 3^{n} = 3^{\,n+1}.\]

So the equation becomes \(3^{\,n+1} = 3^7\). Same base means equal exponents:
\[n + 1 = 7 \implies n = 6.\]
**Correct: (B).**

Why the others fail:

- **(C) 7** treats \(3^n + 3^n + 3^n\) as if it were just \(3^n\), ignoring the coefficient of 3.
- **(E) 21** comes from multiplying the "3 copies" into the exponent (\(3 \times 7\)) — combining
  the count of terms with the exponent, which no rule permits.
- **(A) 5** and **(D) 8** are off-by-one slips on \(n + 1 = 7\).

## Hints

- You can't add the exponents. Factor the left side: how many copies of \(3^n\) are there?
- Three copies of \(3^n\) is \(3 \cdot 3^n\), and \(3 = 3^1\).
