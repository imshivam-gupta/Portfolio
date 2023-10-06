---
title: "Finding Time Complexity of Algorithms"
subtitle: "Introduction and Complexity"
date: "2023-10-03"
---

<!-- ## Iterative Algorithm Complexity -->

# Recursive Algorithm Complexity


A recurrence is an equation or inequality that describes a function in terms of its values on smaller inputs. To solve a Recurrence Relation means to obtain a function defined on the natural numbers that satisfy the recurrence. There are 4 methods to solve the recurrence relation:
- Substitution Method
- Recursion Tree Method
- Master Method


## Substitution Method

It means to expand the recurrence and express it as a summation of terms of n and initial condition. 

Example: Consider the recurrence relation T(n) = 2T(n-1) + n, T(1) = 1

```md
T (n) = 2T (n-1)
      = 2[2T (n-2)] = 2^2T (n-2)
      = 4[2T (n-3)] = 2^3T (n-3)
      = 8[2T (n-4)] = 2^4T (n-4)   (Eq.1)

Repeat the procedure for i times

T (n) = 2^i T(n-i)
Put n-i=1 or i= n-1 in    (Eq.1)
T (n) = 2^n-1 T (1)
      = 2^n-1 .1    {T (1) =1 .....given}
      = 2^n-1 
```


## Recursion Tree Method

A recursion tree is a graphical representation that illustrates the execution flow of a recursive function. It provides a visual breakdown of recursive calls, showcasing the progression of the algorithm as it branches out and eventually reaches a base case. The tree structure helps in analyzing the time complexity and understanding the recursive process involved.
The base case serves as the termination condition for a recursive function. It defines the point at which the recursion stops and the function starts returning values. In a recursion tree, the nodes representing the base case are usually depicted as leaf nodes, as they do not result in further recursive calls. Steps to Solve Recurrence Relations Using Recursion Tree Method with example - **T(n) = 2T(n/2) + c**

#### Step-01:
Draw a recursion tree based on the given recurrence relation.


<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210608083944/img-300x172.PNG"
    alt=""
    style="width: 350px; height: 250px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/>

#### Step-02: 
Calculate the work done or cost at each level and count total no of levels in recursion tree 

<img
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210608091942/img1-300x141.PNG"
    alt=""
    style="width: 350px; height: 250px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/>


##### Step-03:
Count the total number of levels 

Choose the longest path from root node to leaf node: n/2<sup>0</sup> → n/2<sup>1</sup> → n/2<sup>2</sup> → ……… → n/2<sup>k</sup>

Size of problem at last level = n/2<sup>k</sup>

At last level, size of problem becomes 1

n/2<sup>k</sup> = 1
k = log<sub>2</sub>n

Therefore, total number of levels = k + 1 = log<sub>2</sub>n + 1

##### Step-04:

Count total number of nodes in the last level and calculate cost of last level

Number of nodes in last level = 2<sup>log<sub>2</sub>n</sup> = n

Cost of last level = n*T(1) = nc

##### Step-05:

Sum up the cost all the levels in recursive tree  


T(n) = c + 2c + 4c + 8c + ……… + nc

T(n) = c(1 + 2 + 4 + 8 + ……… + log<sub>2</sub>n) + Θ(n)

T(n) = c(n) + Θ(n)

#### Final Answer: 

T(n) = Θ(n)

&nbsp;

## Master Method

The Master Method is used for solving the following types of recurrence 

<img
    src="https://www.gatevidyalay.com/wp-content/uploads/2018/06/Master-Theorem.png"
    alt=""
    style="width: 450px; height: 200px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/>

Here, a >= 1, b > 1, k >= 0 and p is a real number.

##### Case 1:

If a&gt;b<sup>k</sup>, then T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)

##### Case 2:

If a=b<sup>k</sup> and

- If p > -1, then T(n) = Θ(n<sup>log<sub>b</sub>a</sup>log<sup>p+1</sup>n)
- If p = -1, then T(n) = Θ(n<sup>log<sub>b</sub>a</sup>log<sup>2</sup>n)
- If p < -1, then T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)

##### Case 3:

If a<b<sup>k</sup> and

- If p >= 0, then T(n) = Θ(n<sup>k</sup>log<sup>p</sup>n)
- If p < 0, then T(n) = Θ(n<sup>k</sup>)