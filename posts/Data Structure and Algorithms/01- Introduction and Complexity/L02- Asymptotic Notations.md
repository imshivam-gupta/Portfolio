---
title: "Asymptotic Notations"
subtitle: "Introduction and Complexity"
date: "2023-10-03"
---

The word Asymptotic means approaching a value or curve arbitrarily closely (i.e., as some sort of limit is taken). Asymptotic notations are used to write fastest and slowest possible running time for an algorithm. These are also referred to as 'best case' and 'worst case' scenarios respectively. In asymptotic notations, we derive the complexity concerning the size of the input. (Example in terms of n). The three asymptotic notations are:

## Big oh Notation



Big-oh is the formal method of expressing the upper bound of an algorithm's running time. It is the measure of the longest amount of time. The function f (n) = O (g (n)) [read as "f of n is big-oh of g of n"] if and only if exist positive constant c and such that

> **f(n) ⩽ k.g (n)f(n)⩽k.g(n) for n>n<sub>0</sub> in all case**

Hence, function g (n) is an upper bound for function f (n), as g (n) grows faster than f (n)

<img
    src="https://static.javatpoint.com/tutorial/daa/images/daa-asymptotic-analysis-of-algorithm.png"
    alt=""
    style="width: 350px; height: 250px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/>

## Omega () Notation


The function f (n) = Ω (g (n)) [read as "f of n is omega of g of n"] if and only if there exists positive constant c and n0 such that

> **F (n) ≥ k*g(n) for all n, n≥ n<sub>0</sub>**

Hence, function g (n) is an upper bound for function f (n), as g (n) grows faster than f (n)

<img
    src="https://static.javatpoint.com/tutorial/daa/images/daa-asymptotic-analysis-of-algorithm2.png"
    alt=""
    style="width: 350px; height: 250px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/>



## Theta (θ) Notation



The function f (n) = θ (g (n)) [read as "f is the theta of g of n"] if and only if there exists positive constant k1, k2 and k0 such that

> **k<sub>1</sub> * g (n) ≤ f(n)≤ k<sub>2</sub> g(n) for all n, n≥ n<sub>0</sub>**

Hence, function g (n) is an upper bound for function f (n), as g (n) grows faster than f (n)

<img
    src="https://static.javatpoint.com/tutorial/daa/images/daa-asymptotic-analysis-of-algorithm3.png"
    alt=""
    style="width: 350px; height: 250px; margin-left: 0; margin-right: 0px; margin-bottom: 0px; margin-top: 20px"
/>


&nbsp;

![Order of Growth](https://media.geeksforgeeks.org/wp-content/cdn-uploads/mypic.png)