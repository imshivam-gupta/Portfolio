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


| Problem | Link | Difficulty |
|---|---|---|
| Matrix Chain Multiplication | [Link](https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1) | Medium |
| Burst Balloons | [Link](https://leetcode.com/problems/burst-balloons/) | Hard |
| Minimum Score Triangulation of Polygon | [Link](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/) | Medium |
| Boolean Parenthesization | [Link](https://www.interviewbit.com/problems/evaluate-expression-to-true/) | Medium |
| Optimal Binary Search Tree | [Link](https://www.codingninjas.com/studio/problems/optimal-bst_1062671) | Medium |
| Palindrome Partitioning II | [Link](https://leetcode.com/problems/palindrome-partitioning-ii/) | Hard |



#### Other Problems

| Problem | Link | Difficulty |
|---|---|---|
| Minimum Rod Cutting Cost | [Link](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) | Medium |
| Sequence of Rod Cutting | [Link](https://www.interviewbit.com/problems/rod-cutting/) | Medium |
| Valid Permutations for DI Sequence | [Link](https://leetcode.com/problems/valid-permutations-for-di-sequence/) | Hard |
| Minimum Cost to Merge Stones | [Link](https://leetcode.com/problems/minimum-cost-to-merge-stones/) | Hard |
| Allocate Mailboxes | [Link](https://leetcode.com/problems/allocate-mailboxes/) | Hard |
| Stone Game 5 | [Link](https://leetcode.com/problems/stone-game-v/) | Hard |
| Guess Number Higher or Lower II | [Link](https://leetcode.com/problems/guess-number-higher-or-lower-ii/) | Medium |
| Arithmetic Slices | [Link](https://leetcode.com/problems/arithmetic-slices/) | Medium |
| Predict the Winner | [Link](https://leetcode.com/problems/predict-the-winner/) | Medium |
| Palindromic Substrings | [Link](https://leetcode.com/problems/palindromic-substrings/) | Medium |
| Stone Game | [Link](https://leetcode.com/problems/stone-game/) | Medium |
| Last Stone Weight II | [Link](https://leetcode.com/problems/last-stone-weight-ii/) | Medium |
| Minimum Cost Tree From Leaf Values | [Link](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) | Medium |
| Stone Game 7 | [Link](https://leetcode.com/problems/stone-game-vii/) | Medium |

<!-- - [Sequence of Rod Cutting](https://www.interviewbit.com/problems/rod-cutting/) !!!!!
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
- [Stone Game 7](https://leetcode.com/problems/stone-game-vii/) !!!!! -->


#### Partiton DP with Grouping

| Problem | Link | Difficulty |
|---|---|---|
| Remove Boxes | [Link](https://leetcode.com/problems/remove-boxes/) | Hard |
| Strange Printer | [Link](https://leetcode.com/problems/strange-printer/) | Hard |

<!-- - [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
- [Strange Printer](https://leetcode.com/problems/strange-printer/) -->

