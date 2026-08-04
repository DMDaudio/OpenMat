---
id: quant-word-problems-translation-0072
section: quant
topic: word-problems
subtopic: translation
type: problem-solving
difficulty: hard
tags: [translation, systems, less-than, setup]
choices:
  A: "23"
  B: "57"
  C: "61"
  D: "65"
  E: "69"
answer: C
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

The sum of two numbers is 84. The larger number is 8 less than 3 times the smaller number. What is
the larger number?

## Explanation

Two relationships, so express both numbers with one variable. Let \(s\) be the smaller number and
\(L\) the larger.

The phrase "8 less than 3 times the smaller number" must be read right-to-left: take \(3s\), then
subtract 8. So:

\[L = 3s - 8\]

"The sum of the two numbers is 84" gives \(s + L = 84\). Substitute:

\[s + (3s - 8) = 84\]
\[4s - 8 = 84 \quad\Rightarrow\quad 4s = 92 \quad\Rightarrow\quad s = 23\]

Then the larger number is:

\[L = 3(23) - 8 = 69 - 8 = 61\]

(Check: \(23 + 61 = 84\), and \(61\) is \(8\) less than \(3 \times 23 = 69\). ✓)

The answer is **61**.

**The traps:**
- **A (23)** is the *smaller* number, \(s\). The question asks for the larger.
- **E (69)** is \(3s\) — forgetting to subtract the 8 at the end.
- **D (65)** reverses the sign, reading "8 *more* than 3 times the smaller" as \(L = 3s + 8\), which
  gives \(s = 19\) and \(L = 65\). "Less than" subtracts.
- **B (57)** mis-groups the phrase as \(3(s - 8)\) instead of \(3s - 8\), giving \(s = 27\) and
  \(L = 57\). The "3 times" multiplies only the smaller number, not the whole "\(s - 8\)."

## Hints

- Let \(s\) be the smaller number. "8 less than 3 times \(s\)" is \(3s - 8\) (subtract *after*
  multiplying) — not \(8 - 3s\) and not \(3(s - 8)\).
- Substitute into \(s + L = 84\), solve for \(s\), then compute the *larger* value \(L\).
