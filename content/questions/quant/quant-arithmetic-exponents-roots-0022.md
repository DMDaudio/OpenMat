---
id: quant-arithmetic-exponents-roots-0022
section: quant
topic: arithmetic
subtopic: exponents-roots
type: problem-solving
difficulty: hard
tags: [exponents, common-base, equations]
choices:
  A: "2"
  B: "4"
  C: "5"
  D: "6"
  E: "8"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

If \(3^{\,x+1} = 27^{2}\), what is the value of \(x\)?

## Explanation

The trick is to write both sides with the **same base** — here, base \(3\).

Since \(27 = 3^{3}\), the right side is a power of a power, so **multiply** the exponents:

\[27^{2} = \left(3^{3}\right)^{2} = 3^{3\times 2} = 3^{6}\]

Now both sides are powers of \(3\), so the exponents must be equal:

\[x + 1 = 6 \quad\Longrightarrow\quad x = 5\]

So the answer is **5**.

**The traps:**
- **D (6)** solves \(x + 1 = 6\) correctly but reports the exponent, forgetting to subtract \(1\).
- **B (4)** *adds* the exponents on the right (\(3^{3+2} = 3^{5}\)) instead of multiplying them, giving \(x+1 = 5\).
- **E (8)** reads \(27^{2}\) as a power tower \(3^{(3^{2})} = 3^{9}\), giving \(x+1 = 9\).
- **A (2)** ignores the square entirely, treating the right side as \(27 = 3^{3}\), giving \(x+1 = 3\).

## Hints

- Rewrite \(27\) as a power of \(3\) so both sides share a base, then equate the exponents.
- \(\left(3^{3}\right)^{2}\) means multiply the exponents — it is not \(3^{3+2}\) and not \(3^{3^{2}}\).
