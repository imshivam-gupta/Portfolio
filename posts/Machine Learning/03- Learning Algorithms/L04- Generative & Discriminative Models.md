---
title: "Generative and Discriminative Models"
subtitle: "What will this cover"
date: "2020-12-27"
---

Discriminative model makes predictions on unseen data based on conditional probability and can be used either for classification or regression problem statements. On the contrary, a generative model focuses on the distribution of a dataset to return a probability for a given example.


## Example

Suppose we are working on a classification problem where our task is to decide if an email is spam or not spam based on the words present in a particular email. To solve this problem, we have a joint model over. 

- Labels: Y=y, and
- Features: X={x1, x2, …xn}

Therefore, the joint distribution of the model can be represented as p(Y,X) = P(y,x1,x2…xn). Now, our goal is to estimate the probability of spam email i.e., P(Y=1|X). Both generative and discriminative models can solve this problem but in different ways.


#### Generative Model Approach

In the case of generative models, to find the conditional probability P(Y|X), they estimate the priorprobability P(Y) and likelihood probability P(X|Y) with the help of the training data and use the Bayes Theorem to calculate the posterior probability P(Y |X):

P(Y|X) = P(X|Y)P(Y) / P(X)

#### Discriminative Model Approach

In the case of discriminative models, to find the probability, they directly assume some functional form for P(Y|X) andthen estimate the parameters of P(Y|X) with the help of the training data.


### Discriminative Model 

The discriminative model refers to a class of models used in Statistical Classification, mainly used for supervised machine learning. These types of models are also known as conditional models since they learn the boundaries between classes or labels in a dataset.

Discriminative models focus on modeling the decision boundary between classes in a classification problem. The goal is to learn a function that maps inputs to binary outputs, indicating the class label of the input. Maximum likelihood estimation is often used to estimate the parameters of the discriminative model, such as the coefficients of a logistic regression model or the weights of a neural network.

Discriminative models (just as in the literal meaning) separate classes instead of modeling the conditional probability and don’t make any assumptions about the data points. But these models are not capable of generating new data points. Therefore, the ultimate objective of discriminative models is to separate one class from another.

If we have some outliers present in the dataset, discriminative models work better compared to generative models i.e., discriminative models are more robust to outliers. However, one major drawback of these models is the misclassification problem, i.e., wrongly classifying a data point.

Examples of Discriminative Models
- ‌Logistic regression
- Support vector machines(SVMs)
- ‌Traditional neural networks
- ‌Nearest neighbor
- Conditional Random Fields (CRFs)
- Decision Trees and Random Forest


### Generative Model

Generative models are machine learning models that learn to generate new data samples similar to the training data they were trained on. They capture the underlying distribution of the data and can produce novel instances. Generative models find applications in image synthesis, data augmentation, and generating realistic content like images, music, and text.

Generative models are considered a class of statistical models that can generate new data instances. These models are used in unsupervised machine learning as a means to perform tasks such as:
- Probability and Likelihood estimation,
- Modeling data points
- To describe the phenomenon in data,
- To distinguish between classes based on these probabilities.


Since these models often rely on the Bayes theorem to find the joint probability, generative models can tackle a more complex task than analogous discriminative models.

So, the Generative approach focuses on the distribution of individual classes in a dataset, and the learning algorithms tend to model the underlying patterns or distribution of the data points (e.g., gaussian). These models use the concept of joint probability and create instances where a given feature (x) or input and the desired output or label (y) exist simultaneously.

These models use probability estimates and likelihood to model data points and differentiate between different class labels present in a dataset. Unlike discriminative models, these models can also generate new data points.

However, they also have a major drawback – If there is a presence of outliers in the dataset, then it affects these types of models to a significant extent.

Examples of Generative Models
- ‌Naïve Bayes
- Bayesian networks
- Markov random fields
- ‌Hidden Markov Models (HMMs)
- Latent Dirichlet Allocation (LDA)
- Generative Adversarial Networks (GANs)
- Autoregressive Model


### Difference between Generative and Discriminative Models

| Aspect	| Generative Models| 	Discriminative Models| 
| --- | --- | --- |
| Purpose	| Model data distribution	| Model conditional probability of labels given data| 
| Use Cases	| Data generation, denoising, unsupervised learning	| Classification, supervised learning tasks
| Common Examples| 	Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs)	| Logistic Regression, Support Vector Machines, Deep Neural Networks| 
| Training Focus| 	Maximize likelihood of observed data, Capture data structure| 	Learn decision boundary, Differentiate between classes| 
| Example Task| 	Image generation, Inpainting (e.g., GANs, VAEs)	| Text classification, Object detection (e.g., Deep Neural Networks)| 