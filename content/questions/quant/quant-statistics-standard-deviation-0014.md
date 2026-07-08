---
id: quant-statistics-standard-deviation-0014
section: quant
topic: statistics
subtopic: standard-deviation
type: problem-solving
difficulty: easy
tags: [standard-deviation, transformation, conceptual]
choices:
  A: "6"
  B: "10"
  C: "16"
  D: "60"
  E: "Cannot be determined from the information given"
answer: A
author: openmat
reviewers: []
status: in-review
original: true
license: CC-BY-SA-4.0
---

## Question

A set of numbers has a standard deviation of 6. If 10 is added to every number in the set, what is the
standard deviation of the resulting set?

## Explanation

Standard deviation measures how far the values are spread from their **mean**. Adding the same
constant to every value shifts the entire set — and its mean — by that constant, so every value stays
exactly as far from the (also-shifted) mean as before. The spread is unchanged.

Concretely, if a value was \(d\) above the old mean, it is still \(d\) above the new mean after adding
10 to everything. All the distances from the mean are identical, so the standard deviation is
unchanged:

\[\text{new standard deviation} = 6\]

The answer is **6**.

**The trap:** answer **C (16)** adds 10 to the standard deviation, and **B (10)** confuses the shift
amount with the spread. Adding a constant moves the data but does not stretch or compress it. (Contrast
this with *multiplying* every value by 10, which **would** multiply the standard deviation by 10.)

## Hints

- Standard deviation is about distance from the mean. What happens to those distances when you slide every value up by the same amount?
- Adding a constant relocates the whole set; only stretching or shrinking it (multiplying) changes the spread.
