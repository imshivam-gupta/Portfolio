---
title: "Hypothesis"
subtitle: "What will this cover"
date: "2020-12-27"
---


The hypothesis is the assumed relationship between response y and one or more regressors X ={x<sub>1</sub>,...,x<sub>m</sub>}, m≥1, is described by the following:

<br />
Consider i=1..n instances of data: yi = f(X<sub>i</sub>) = w<sub>0</sub>+ ∑<sub>j=1..m</sub> w<sub>j</sub> x<sup>k</sup><sub>i,j</sub>  + € <sub>i</sub>

<br />

- In Linear Regression, the relationship is linear in weights, {w<sub>0</sub>,w<sub>1</sub>,...,w<sub>m</sub>}. Wo is called bias, and the remaining weights are called Regression Coeffients - w<sub>i</sub> quantifies the strength of the relationship between y and regressor x<sub>j</sub>.
- The Hypothesis space is an infinite set of all possible representations of the hypothesis, given training data D={X,y}.
- To search through the hypothesis space, LR adjusts w<sub>0</sub> and the weight of each regressor, to achieve minimum prediction error. This is an optimization process.
- The search process finds the best hypothesis h(X) = y, that matches the mapping c(X) = y, in the training data.


