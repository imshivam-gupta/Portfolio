---
title: "Bayesian Classification"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Basic Probability Theory

- Conditional Probability: P(A|B)  = P(A and B)/P(B)
- Rule of Union: P(A or B) = P(A) + P(B) - P(A and B)
- Rule of Intersection for Dependent Events: P(A and B) = P(A|B)P(B) = P(B|A)P(A)
- Rule of Intersection for Independent Events: P(A and B) = P(A)P(B)
- Total Probability Rule: P(A) = P(A|B)P(B) + P(A|B')P(B')
- Bayes Rule: P(A|B) = P(B|A)P(A)/P(B)

## Probabilistic Classification in Bayesian Learning

#### Prior Probability

Prior probavility P(h): These are overall probabilities of possible outcomes / hypothesis in nature:

- P(Cancer) = .008 
- P(Not Cancer) = 0.992


#### Likelihood Probability

Likelihood P(e|h): These are conditional probabilities of evidences (Data) given an outcome / hypothesis exists:

- P(Lab test is +|Cancer)= 0.98
- P(Lab test is +|Not Cancer) = 0.03
- P(Lab test is –ve|Cancer)= 0.02
- P(Lab test is –ve |Not Cancer)= 0.97


#### Posterior Probability

Posterior probability P(h|e): These are conditional probabilities of outcomes / hypothesis given the evidence (Data): Likehood * Prior / Evidence


## Bayesian Learning

It predicts the probability of each hypothesis given some evidence D:

- P(h|D) = P(D|h)P(h)/P(D)

Prediction is made by selecting the hypothesis with the highest posterior probability. If all hypotheses are equally likely, then the hypothesis with the maximum likelihood is selected.

This is called Maximum A Posteriori (MAP) hypothesis:

## Naive Bayes Classifier

Naive Bayes is a probabilistic classifier that uses Bayes’ theorem to predict the category of a sample (like a piece of news or a customer review). It is based on the assumption that the features in a dataset are mutually independent. In simple terms, a Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature.

Naive Bayes Assumption: The features are independent of each other. This assumption is called class conditional independence.


## Naive Bayes Classifier Example

Suppose we have weather data with counts and probabilities of different weather conditions and we want to predict the weather condition for a given day. We can use the Naive Bayes classifier to predict the weather condition for a given day.

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*4ZABXlcCvuGSfSBX" style="width: 500px; height: 400px;" alt="Data"/>

We have X<sub>test</sub> = (Sunny, Mild, Normal, False) and we want to predict the weather condition for this day. We can use the Naive Bayes classifier to predict the weather condition for this day.

<img src="https://miro.medium.com/v2/resize:fit:750/format:webp/0*HXTlp4Y1_gabqSFB" style="width: 500px; height: 400px;" alt="Data Analaysis" />

We find out the respective probabilities using the Naive Bayes Algorithm:

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wvK4dtozigx2oau4FIp67Q.png" style="" alt="Probability Yes" />

<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*MPM9u4Oa5e1hPVBRKsnsgQ.png" style="" alt="Probability Yes" />

<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*lX8BrpwJQBubooYCGmaBPg.png" style="" alt="Probability No"/>

<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*nw-kQ2VIghVWHzhdG6YSNQ.png" style="" alt="Probability No"/>

We predict the Play as Yes.


## Handling Continuous Features

One way is to discretize the continuous features. Other way is that we can use the Gaussian Naive Bayes algorithm to handle continuous features. The Gaussian Naive Bayes algorithm assumes that the continuous values associated with each class are distributed according to a Gaussian distribution.


Gaussian Distrbution Formula: 

y = 1/(σ * sqrt(2 * π)) * exp(-0.5 * (x-μ / σ)²)

where σ is the standard deviation of the feature, and μ is the mean feature value for the samples belonging to the same class.

μ = 1/n * sum(x)

σ = sqrt(1/(n-1) * sum((x - μ)²))


## Comparison of Naive Bayes with Decision Trees

| Decision Trees | Naive Bayes |
| --- | --- |
| Greedy heuristic | Statistical |
| Discriminative model, cant generate data | Generative model (calculates prob dist and can generate data) and need Bayes theorem to calculate a-posteriors |
| Automatic feature prioritization | Manual feature selection |
| Overfitting - Need pruning / stop growth | No Need for pruning or post training tuning |
| Support at leaves | Probabilities show confidence level |
| No issue with disappearance of values | Can suffer vanishing probs of likelihoods - smoothing |
| No assumption of independence of features | NB assumption is there |
| Discretization of continuous values needed | Prob distribution can take care of real values |
| Good with lots of data | Good with low amounts of data |


## Bayesian Network

A simple, graphical notation (directed acyclic graph) for:
- Showing conditional independence
- Calculating full joint distributions

It is a causal structure.

#### Example


Harry installed a new burglar alarm at his home to detect burglary. The alarm reliably responds at detecting a burglary but also responds for minor earthquakes. Harry has two neighbors David and Sophia, who have taken a responsibility to inform Harry at work when they hear the alarm. David always calls Harry when he hears the alarm, but sometimes he got confused with the phone ringing and calls at that time too. On the other hand, Sophia likes to listen to high music, so sometimes she misses to hear the alarm. Here we would like to compute the probability of Burglary Alarm.

**Problem:** Calculate the probability that alarm has sounded, but there is neither a burglary, nor an earthquake occurred, and David and Sophia both called the Harry.

**Solution:** 
- The Bayesian network for the above problem is given below. The network structure is showing that burglary and earthquake is the parent node of the alarm and directly affecting the probability of alarm's going off, but David and Sophia's calls depend on alarm probability.
- The network is representing that our assumptions do not directly perceive the burglary and also do not notice the minor earthquake, and they also not confer before calling.
- The conditional distributions for each node are given as conditional probabilities table or CPT.
- Each row in the CPT must be sum to 1 because all the entries in the table represent an exhaustive set of cases for the variable.
- In CPT, a boolean variable with k boolean parents contains 2K probabilities. Hence, if there are two parents, then CPT will contain 4 probability values

List of all events occurring in this network:

- Burglary (B)
- Earthquake(E)
- Alarm(A)
- David Calls(D)
- Sophia calls(S)

We can write the events of problem statement in the form of probability: P[D, S, A, B, E], can rewrite the above probability statement using joint probability distribution:

P[D, S, A, B, E]= P[D | S, A, B, E]. P[S, A, B, E]

= P[D | S, A, B, E]. P[S | A, B, E]. P[A, B, E]

= P [D| A]. P [ S| A, B, E]. P[ A, B, E]

= P[D | A]. P[ S | A]. P[A| B, E]. P[B, E]

= P[D | A ]. P[S | A]. P[A| B, E]. P[B |E]. P[E]


<div class="bg-white text-dark">
    <img src="https://static.javatpoint.com/tutorial/ai/images/bayesian2.png" style="" alt="Baysian Network"/>
</div>

