---
title: "Logistic Regression"
subtitle: "What will this cover"
date: "2020-12-27"
---

Logistic Regression gives the probability of an event occurring, given historical data to train-test the model. It is a supervised machine learning algorithm for classification tasks. Given historical data {X,y}, where X is the set of features and y is the target variable, LR learns the probability of y=1, given X.


<gradientblock>
Probability of y=1 given X: P(y=1|X) = 1/(1+e<sup>-(w<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>+...+w<sub>n</sub>x<sub>n</sub>)</sup>)
</gradientblock>


### Logistic Regression vs Linear Regression

| Linear Regression | Logistic Regression |
| --- | --- |
| Linear regression is used to predict the continuous dependent variable using a given set of independent variables. | Logistic regression is used to predict the categorical dependent variable using a given set of independent variables. |
| Linear regression is used for solving Regression problem. | It is used for solving classification problems. |
| In this we predict the value of continuous variables | In this we predict values of categorical varibles |
| In this we find best fit line. | In this we find S-Curve. |
| Least square estimation method is used for estimation of accuracy. | Maximum likelihood estimation method is used for Estimation of accuracy. |
| The output must be continuous value,such as price,age,etc. | Output is must be categorical value such as 0 or 1, Yes or no, etc. |
| It required linear relationship between dependent and independent variables. | It not required linear relationship. |
| There may be collinearity between the independent variables. | There should not be collinearity between independent varible. |

#### Terminology

- Independent variables: The input characteristics or predictor factors applied to the dependent variable’s predictions.
- Dependent variable: The target variable in a logistic regression model, which we are trying to predict.
- Logistic function: The formula used to represent how the independent and dependent variables relate to one another. The logistic function transforms the input variables into a probability value between 0 and 1, which represents the likelihood of the dependent variable being 1 or 0.
- Odds: It is the ratio of something occurring to something not occurring. it is different from probability as the probability is the ratio of something occurring to everything that could possibly occur.
- Log-odds: The log-odds, also known as the logit function, is the natural logarithm of the odds. In logistic regression, the log odds of the dependent variable are modeled as a linear combination of the independent variables and the intercept.
- Coefficient: The logistic regression model’s estimated parameters, show how the independent and dependent variables relate to one another.
- Intercept: A constant term in the logistic regression model, which represents the log odds when all independent variables are equal to zero.
- Maximum likelihood estimation: The method used to estimate the coefficients of the logistic regression model, which maximizes the likelihood of observing the data given the model.


#### Sigmoid Function

z is the linear combination of the weights and the independent variables:

<gradientblock>
z = W.X + b

Sigmoid Function: σ(z) = 1/(1+e<sup>-z</sup>)
</gradientblock>

<img src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*OUOB_YF41M-O4GgZH_F2rw.png" style="width: 400px; height: 300px;" alt="Sigmoid Function"/>

#### Odds and Log-Odds

The odds in favor of an event is the ratio of the probability that the event will occur to the probability that the event will not occur. Odds are defined as the ratio of the probability of success and the probability of failure.

p = probability of success = P(y=1|X)

<gradientblock>

odds ->  z = p/(1-p) = P(y=1|X)/P(y=0|X) 
<br />
logit -> log(z) = log(p/(1-p)) = log(P(y=1|X)/P(y=0|X)) = W.X + b = log(P(y=1|X)) - log(P(y=0|X))
</gradientblock>


#### Likelihood of a match

Likelihood of a match is the probability of observing the data given the model. The goal of logistic regression is to maximize the likelihood of observing the data given the model. The likelihood of observing the data given the model is the product of the probabilities of each data point. The likelihood of observing the data given the model is the product of the probabilities of each data point.

L(b,w) = ∏<sub>i=1..n</sub> p<sub>1</sub> <sup>y<sub>i</sub></sup> (1-p<sub>1</sub>) <sup>1-y<sub>i</sub></sup>

Log-likelihood is the log of the likelihood function.

log(L(b,w)) = ∑<sub>i=1..n</sub> y<sub>i</sub> log(p<sub>1</sub>) + (1-y<sub>i</sub>) log(1-p<sub>1</sub>)


#### Training the model

For training data, we want to maximize the log-likelihood. To maximize the log-likelihood, we need to find the values of the weights that maximize the log-likelihood. We can find the values of the weights that maximize the log-likelihood by using gradient ascent. Gradient ascent and Gradient descent are iterative optimization algorithms that are used to find the maximum or minimum of a function.





#### Regularization in Logistic Regression

Overfitting the training data is a problem that can arise in Logistic Regression, especially when data has very high dimensions and is sparse. One approach to reducing overfitting is regularization, in which we create a modified “penalized log likelihood function,” which penalizes large values of w.

w = argmax<sub>w</sub> ∑<sub>i</sub>(ln P(y<sub>i</sub>|x<sub>i</sub>,w) - λ/2||w||<sup>2</sup>)