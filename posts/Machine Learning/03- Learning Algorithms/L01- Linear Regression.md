---
title: "Linear Regression"
subtitle: "What will this cover"
date: "2020-12-27"
---

Linear Regression (LR) is a supervised machine learning algorithm for regression tasks. 
- There are one or more independent variables called Regressors, Explanatory Variables or Attributes: X={x1 , x2 ...}
- The response variable y, is a continuous-valued random
variable
- The distribution of y is dependent on the Regressors


Types of Linear Regression
- Simple LR: One regressor with degree 1
- Multiple LR: Multiple regressors all of degree 1
- Polynomial simple/multiple Linear Regression: Regressors can have degree > 1 ( x<sup>2</sup>, x<sup>3</sup> , x<sub>1</sub><sub>2</sub>…..)
- Multivariate simple/multiple Linear Regression: More than one response variables that are coordinated 


##### Simple Linear Regression

y = w<sub>0</sub> + w<sub>1</sub>x<sub>1</sub> + €

- y is the response variable
- x<sub>1</sub> is the regressor
- w<sub>0</sub> is the intercept
- w<sub>1</sub> is the slope

##### Multiple Linear Regression

y = w<sub>0</sub> + w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> + ... + w<sub>n</sub>x<sub>n</sub> + €

- y is the response variable
- x<sub>1</sub> to x<sub>n</sub> are the regressors
- w<sub>0</sub> is the intercept
- w<sub>1</sub> to w<sub>n</sub> are the slopes

##### Polynomial Linear Regression

y = w<sub>0</sub> + w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>1</sub><sup>2</sup> + w<sub>4</sub>x<sub>1</sub>x<sub>2</sub> ... + w<sub>n</sub>x<sub>1</sub><sup>n</sup> + €

- y is the response variable
- x<sub>1</sub> to x<sub>n</sub> are the regressors
- w<sub>0</sub> is the intercept
- w<sub>1</sub> to w<sub>n</sub> are the slopes


### Model Estimation

- The goal of LR is to estimate the parameters of the model, w<sub>0</sub> and w<sub>1</sub>, such that the error between the predicted value and the actual value is minimized. 
- The learning model is found by tuning the regression coefficients: W={w12,w2...}. 
- The Objective is to Minimize{Loss Function J(W)}.
- This is Ordinary Least Squares (OLS) method.
- Error e<sub>i</sub> = y<sub>i</sub>-ŷ<sub>i</sub>. Loss Function is 1⁄2 of MSE over all n training samples. Hence OF is:

Minimize{J(W)}=Minimize{ (∑<sub>i=1..n</sub> (e<sub>i</sub>)<sup>2</sup>)/(2n) }


### Learning the bias and weights

- Gradient Descent or Delta Learning Rule is used to learn the bias and weights.

#### Learning bias w<sub>0</sub>

- Δw<sub>0</sub> = -η ∂J(W)/∂w<sub>0</sub>
- Solving for ∂J(W)/∂w<sub>0</sub>:

∂J(W)/∂w<sub>0</sub> = ∂(1/2n) ∑<sub>i=1..n</sub> (y<sub>i</sub>-ŷ<sub>i</sub>)<sup>2</sup> / ∂w<sub>0</sub>

∂J(W)/∂w<sub>0</sub> = ∂(1/2n) ∑<sub>i=1..n</sub> (y<sub>i</sub>-(w<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>))<sup>2</sup> / ∂w<sub>0</sub>

∂J(W)/∂w<sub>0</sub> = -1/n ∑<sub>i=1..n</sub> (y<sub>i</sub>-(w<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>))

∂J(W)/∂w<sub>0</sub> = -1/n ∑<sub>i</sub>e<sub>i</sub>

#### Learning weights w<sub>1</sub>

- Δw<sub>1</sub> = -η ∂J(W)/∂w<sub>1</sub>
- Solving for ∂J(W)/∂w<sub>1</sub>:

∂J(W)/∂w<sub>1</sub> = ∂(1/2n) ∑<sub>i=1..n</sub> (y<sub>i</sub>-ŷ<sub>i</sub>)<sup>2</sup> / ∂w<sub>1</sub>

∂J(W)/∂w<sub>1</sub> = ∂(1/2n) ∑<sub>i=1..n</sub> (y<sub>i</sub>-(w<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>))<sup>2</sup> / ∂w<sub>1</sub>

∂J(W)/∂w<sub>1</sub> = -1/n ∑<sub>i=1..n</sub> (y<sub>i</sub>-(w<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>))x<sub>1</sub>

∂J(W)/∂w<sub>1</sub> = -1/n ∑<sub>i</sub>e<sub>i</sub>x<sub>1,i</sub>


### Gradient Descent

- Gradient Descent is an iterative optimization algorithm to find the minimum of a function.
- It is used to learn the bias and weights in LR.
- Types of Gradient Descent:
    - Batch Gradient Descent
    - Stochastic Gradient Descent
    - Mini-Batch Gradient Descent

#### Simple Gradient Descent

- Simple Gradient Descent computes the gradient of the cost function w.r.t. to the parameters θ for the entire training dataset:

Δw<sub>1</sub> = +η/n ∑<sub>i=1..n</sub> e<sub>i</sub>x<sub>i</sub>

Δw<sub>0</sub> = +η/n ∑<sub>i=1..n</sub> e<sub>i</sub>


#### Stochastic Gradient Descent

- Stochastic Gradient Descent computes the gradient of the cost function w.r.t. to the parameters θ for each training example:

Δw<sub>1</sub> = +η e<sub>i</sub>x<sub>i</sub>

Δw<sub>0</sub> = +η e<sub>i</sub>


#### Mini-Batch Gradient Descent

- Mini-Batch Gradient Descent computes the gradient of the cost function w.r.t. to the parameters θ for a subset of the training data. It use m &lt;&lt; n, where m is the batch size.

Δw<sub>1</sub> = +η/m ∑<sub>i=1..m</sub> e<sub>i</sub>x<sub>i</sub>

Δw<sub>0</sub> = +η/m ∑<sub>i=1..m</sub> e<sub>i</sub>



### Coefficient of Determination


<gradientblock>
R<sup>2</sup> = 1 - (SS<sub>res</sub>/SS<sub>tot</sub>)

R<sup>2</sup> = 1 - proportion of variance unexplained by the model

R<sup>2</sup> = SS<sub>res</sub>/SS<sub>tot</sub>
</gradientblock>

- Coefficient of Determination is a measure of how well the regression model fits the data.
- It is the ratio of the explained variation to the total variation.
- It is also called R<sup>2</sup> score.
- Total variation in actual reponse: SS<sub>tot</sub> = ∑<sub>i=1..n</sub> (y<sub>i</sub>-y<sub>mean</sub>)<sup>2</sup>
- Residual variation in actual response: SS<sub>res</sub> = ∑<sub>i=1..n</sub> (y<sub>i</sub>-ŷ<sub>i</sub>)<sup>2</sup>
- Variance in response given by the model: SS<sub>reg</sub> = ∑<sub>i=1..n</sub> (ŷ<sub>i</sub>-y<sub>mean</sub>)<sup>2</sup>

Issues with R<sup>2</sup>:


- It is biased: By adding many regressors, and by increasing training time, we get apparently better R2
- May add insignificant predictors
- May start modelling noise
- Model overfits, and hence will be unable to generalize

#### Adjusted R<sup>2</sup>

- Adjusted R<sup>2</sup> is a modified version of R<sup>2</sup> that adjusts for the number of predictors in a regression model.

<gradientblock>
R̄<sup>2</sup> = 1-MSE<sub>res</sub>/MSE<sub>tot</sub>

R̄<sup>2</sup> = 1 - (SS<sub>res</sub>/SS<sub>tot</sub>)*(n-1)/(n-p-1)

R̄<sup>2</sup> = 1 - (1-R<sup>2</sup>)*(n-1)/(n-p-1)
</gradientblock>

- MSE<sub>res</sub> = ∑<sub>i=1..n</sub> (y<sub>i</sub>-ŷ<sub>i</sub>)<sup>2</sup> / (n-p-1)
- MSE<sub>tot</sub> = ∑<sub>i=1..n</sub> (y<sub>i</sub>-y<sub>mean</sub>)<sup>2</sup> / (n-1)
- MSE<sub>reg</sub> = ∑<sub>i=1..n</sub> (ŷ<sub>i</sub>-y<sub>mean</sub>)<sup>2</sup> / (p-1)

Here, p is the number of regressors and n is the number of training samples.

#### R<sup>2</sup> vs Adjusted R<sup>2</sup>

| R<sup>2</sup> | Adjusted R<sup>2</sup> |
| --- | --- |
| R2 Always increases as more regressors are added. | R̄2 increases ONLY if an added regressor is significant. | 
| R2 is biased estimate | R̄2 is unbiased estimate |
| R2 Does not penalize non-significant terms | R̄2 penalizes non-significant variables |
| R2 Is always positive | R̄2 can be negative, is always less than R2|
| R2 is not suitable for statistical test of significance of weights | R̄2 is suitable for statistical test of significance of weights |



### Regularization

- Regularization is a technique used to reduce the complexity of the model.

##### Regularization with Validation

- Make a hierarchy of regressors (X) in terms of their relative importance.
- Add Regressors, one/few at a time, in order of importance.
- Generate an optimized model for each set of regressors using cross validation, and monitor R̄2
- The point at which R̄2 reaches a maximum gives the ideal combination of regressors.

##### Regularization with Modified Loss Functions
 
- Augment Ordinary Least Squares with regularization term:
    -  LASSO Regression  L1 Regularization
    -  Ridge Regression  L2 Regularization
    -  Elastic Net Regularization

##### LASSO Regression

- LASSO stands for Least Absolute Shrinkage and Selection Operator.
- Regularization term is the sum of the absolute values of the weights.
- LASSO Regression minimizes the following cost function:
- L1 penalizes regressors by shrinking their weights
- Regressors that contribute little to error reduction are more penalized
- λ is the weighting factor for regularization to tune overfit ↔ underfit
- L1 can lead to some zero coefficients. especially if λ is large
- L1 not only reduces overfitting but also helps eliminate insignificant features
- LASSO selects only significant regressors

##### Ridge Regression

- Ridge Regression minimizes the following cost function:
- Regularization term is the sum of the squared values of the weights.
- L2 penalizes regressors by shrinking their weights
- L2 leads to near zero coefficients.
- L2 handles multiple correlated regressors better

##### Elastic Net Regularization

- It is a combination of L1 and L2 regularization.
- Elastic Net Regularization minimizes the following cost function:
- Regularization term is a combination of the sum of the absolute values of the weights and the sum of the squared values of the weights.
- Each of L1 and L2 have their own weighting factor λ<sub>1</sub> and λ<sub>2</sub> to tune overfit ↔ underfit
- λ<sub>1</sub> and λ<sub>2</sub> allow:
    - A balance of attribute elimination ability and handling multiple correlated regressors
    - A proper tuning of overfitted model (both 0) to underfitted model (both large)