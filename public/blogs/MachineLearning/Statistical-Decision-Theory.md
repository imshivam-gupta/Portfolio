# Statistical Decision Theory

In machine learning, one of the fundamental tasks is regression, where we aim to predict a continuous output variable based on one or more input features. This type of problem can be described using the following elements:

## 1. **Input (Feature Vector)**

- $X \in \mathbb{R}^p$: This represents the input to the model. The notation $ \mathbb{R}^p $ means that $ X $ is a vector with $ p $ real-valued components. These components are the features of the data, which could represent various measurable quantities depending on the problem at hand.

For example:
- In a housing price prediction task, $X$ might represent the features of a house such as its size, number of rooms, and age.
- In a health-related prediction task, $X$ could represent a person’s age, weight, and blood pressure.

### Example of $ X $:

$$
X = (x_1, x_2, \dots, x_p)
$$

Where each $ x_i \in \mathbb{R} $.

## 2. **Output (Target Variable)**

- **$ Y \in \mathbb{R} $**: This is the target or dependent variable that we are trying to predict. It is a continuous value, meaning it can take any real number. For instance, in the housing price prediction task, $ Y $ might represent the price of the house, which is a real-valued number.

### Example of $ Y $:
- $ Y $ could represent a house price (e.g., $ Y = 250,000 $).

## 3. **Probability Distribution $ P(X, Y) $**

- **$ P(X, Y) $** refers to the joint probability distribution over the input-output pair $ (X, Y) $. This distribution encapsulates how the input features $ X $ and the output $ Y $ are related probabilistically.

For example, given a set of input features $ X = (x_1, x_2, \dots, x_p) $, the joint probability distribution tells us how likely it is to observe a particular output $ Y $ for those input values.

In machine learning, we are often interested in learning the conditional probability $ P(Y \mid X) $, which describes the likelihood of the output $ Y $ given the input $ X $.

## 4. **Objective: Find the Function $ f(X) $**

The goal in regression is to find a function $ f(X) $ that maps the input space $ \mathbb{R}^p $ to the output space $ \mathbb{R} $. Specifically, we want to find a function $ f $ such that for any given input $ X $, the output $ f(X) $ is a good approximation of the target value $ Y $.

### Examples of Functions $ f(X) $:

- **Linear Regression**: In the simplest case, the function $ f(X) $ might be linear:

$$
f(X) = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p
$$

Here, the coefficients $ \beta_i $ are learned from the data during training.

- **Polynomial Regression**: A more complex form might use polynomial terms to model more intricate relationships between input and output.

- **Other Models**: More sophisticated models could include decision trees, support vector machines, or neural networks, which allow us to capture more complex relationships between the input features and the output.

### Learning the Function $ f(X) $

To find the function $ f(X) $, we typically have a dataset consisting of multiple input-output pairs $ (X, Y) $. We use these data points to train the model, adjusting the parameters of $ f $ so that the predictions $ f(X) $ are as close as possible to the actual outputs $ Y $.

In terms of probability, we can think of this as learning the conditional probability distribution $ P(Y \mid X) $, where the model estimates the probability of $ Y $ for any given $ X $.

So we are going to predict: $
\hat{Y} = f(X) = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p
$ or compactly as $ \hat{Y} = f(X) = \beta_0 + \sum_{i=1}^{p} \beta_i X_i $.

In this equation if we set $X_0 = 1$ then we can write it as: $ \hat{Y} = f(X) = \sum_{i=0}^{p} \beta_i X_i $.

Another classifer is nearest neighbor classifier where equation is: $ \hat{Y} = f(X) = \frac{1}{k} \sum_{x_i \in \mathbb{W}(x)} Y_i $ where $ Y_i $ is the output of the $ i^{th} $ nearest neighbor. This is k nearest neighbor classifier.

## 5. **Loss Function**

To train the model, we need to define a loss function that quantifies the error between the predicted output $ f(X) $ and the true output $ Y $. The loss function measures how well the model is performing and provides a signal for the learning algorithm to adjust the parameters of the model. $ L(Y, \hat{Y}) $ is the loss function.

One of the popular loss functions is the Squared Error Loss:

$$
L(Y, \hat{Y}) = (Y - \hat{Y})^2
$$

Perfomance Measure that we are interested in is the expected prediction error which is the expected value of the loss function: $ EPE = E[L(Y, \hat{Y})] = E[(Y - \hat{Y})^2] $.

$$ EPE = E[(Y - \hat{Y})^2] = E[(Y - f(X))^2] $$

$$ EPE = \int (y - f(x))^2 P(x, y) dx dy $$

$$ EPE = E_x E_{Y \mid X}[(Y - f(X))^2 \mid X = x] $$

Above equation says that we know the value of $ X $ and we want to predict the value of $ Y $ given $ X $. We have to find $ f(X) $ such that the expected value of the loss function is minimized.

$$ 
f(x) = argmin_c E_{Y \mid X}[(Y - c)^2 \mid X = x] 
$$

In above equation, $ c $ is a constant and we have to find the value of $ c $ such that the expected value of the loss function is minimized. We dont care how complex the function is, we just want to minimize the expected value of the loss function. Quantity that will minimize the squared is the average of the conditional distribution of $ Y $ given $ X $.

$$
f(x) = E[Y \mid X = x]
$$

This is called conditional expectation of $ Y $ given $ X $ or the regression function.

We know we can't find the exact value of $ f(x) $ but we can estimate it using the training data.

$$
\hat{f}(x) = \frac{1}{N} \sum_{i=1}^{N} {Y_i \mid X_i = x}
$$

but this is not so good since there may be very few data points for a particular value of $ x $. So we can take the average of the $ Y $ values of the nearest neighbors of $ x $.

$$
\hat{f}(x) = \frac{1}{k} \sum_{x_i \in \mathbb{W}(x)} Y_i
$$

where $ \mathbb{W}(x) $ is the neighborhood of $ x $. This is called k-nearest neighbor regression. So we are conditioning over a region of the input space. We also have a inductive bias here that output of the function over this region is constant. 

As number of neighbors ($ k $) increases, the estimate becomes more stable. As $ N $ and $ k $ become infinitely large, $ k/N \rightarrow 0 $ and $ k/N \rightarrow 0 $, the estimate becomes the conditional expectation.

$$
\hat{f}(x) = E[Y \mid X = x]
$$

## 6. **Bias-Variance Tradeoff**

In machine learning, we often talk about the bias-variance tradeoff, which is a key concept in understanding the generalization performance of a model. The bias-variance tradeoff refers to the balance between the bias of the model and its variance. 

Bias refers to the error introduced by approximating a real-world problem, which may be complex, by a simple model. High bias can cause an algorithm to miss the relevant relations between features and target outputs (underfitting). 

Let's represent the true function $ f(X) $ in vector form as $ f(X) = X^T \beta $.  Now overall error is $ EPE = E[(Y - f(X))^2] = E[(Y - X^T \beta)^2] $.

For minimizing the error we differentiate the error with respect to $ \beta $ and set it to zero. Let's find the value of $ \beta $ that minimizes the error ( $ \hat{\beta} $ ) :

$$
\hat{\beta} = (X^T X)^{-1} X^T Y
$$

This equation is called the normal equation. This is the best linear unbiased estimator of $ \beta $.

Let's derive the normal equation:

The error is given as $ EPE = E[(Y - X^T \beta)^2] $. To minimize the error, we focus on the empirical risk (sample version) rather than the expected value, since we work with observed data. The empirical error is:

$$
Error = ( Y - X\beta )^T ( Y - X\beta )
$$

Here 
- $ Y $ is an $ N \times 1 $ vector,
- $ X $ is an $ N \times p $ matrix,
- $ \beta $ is a $ p \times 1 $ vector.

Let's expand the quadratic form:

$$
Error = Y^T Y - 2 Y^T X \beta + \beta^T X^T X \beta
$$

This is the scalar value ( a single number representing the error ). To minimize the error, we differentiate the error with respect to $ \beta $ and set it to zero.

$$
\frac{\partial Error}{\partial \beta} = -2 X^T Y + 2 X^T X \beta = 0
$$

$$
X^T Y = X^T X \beta
$$

$$
\beta = (X^T X)^{-1} X^T Y
$$

