---
title: "Partition DP"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Approach: We should always visualise this in form of table and then try to fill the table's upper half in a bottom up manner. For example for Matrix Chain Multiplication, we can visualise the table as follows:

| SI-EI | A | B | C | D |
|-------|---|---|---|---|
| **A**     |  |   |   |   |
| **B**     | 0 | |   |   |
| **C**     | 0 | 0 | |   |
| **D**     | 0 | 0 | 0 |  |

In above table first row will represent start index is from matrix A
- Cell 0,0 is multiplication of A and A
- Cell 0,1 is multiplication of A to B
- Cell 0,2 is multiplication of A to C
- Cell 0,3 is multiplication of A to D
- Cell 1,1 is multiplication of B to B
- Cell 1,2 is multiplication of B to C

and so on.


## Problems based on Partition DP Pattern

#### Important Problems For Understanding


- [Matrix Chain Multiplication](https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1)
- [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)
- [Boolean Parenthesization](https://www.interviewbit.com/problems/evaluate-expression-to-true/)
- [Optimal Binary Search Tree](https://www.codingninjas.com/studio/problems/optimal-bst_1062671)
- [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)

#### Other Problems

- [Minimum Rod Cutting Cost](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
- [Sequence of Rod Cutting](https://www.interviewbit.com/problems/rod-cutting/) !!!!!
- [Valid Permutations for DI Sequence](https://leetcode.com/problems/valid-permutations-for-di-sequence/) !!!!!
- [Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
- [Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes/)
- [Stone Game 5](https://leetcode.com/problems/stone-game-v/)
- [Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
- [Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/) **Important**
- [Predict the Winner](https://leetcode.com/problems/predict-the-winner/) !!!!!
- [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
- [Stone Game](https://leetcode.com/problems/stone-game/) !!!!!!
- [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/) !!!!!
- [Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) !!!!!
- [Stone Game 7](https://leetcode.com/problems/stone-game-vii/) !!!!!


#### Partiton DP with Grouping

- [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
- [Strange Printer](https://leetcode.com/problems/strange-printer/)

