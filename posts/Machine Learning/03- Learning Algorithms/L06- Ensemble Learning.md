---
title: "Ensemble Learning"
subtitle: "What will this cover"
date: "2020-12-27"
---

Ensemble learning is a machine learning technique that enhances accuracy and resilience in forecasting by merging predictions from multiple models. It aims to mitigate errors or biases that may exist in individual models by leveraging the collective intelligence of the ensemble. By considering multiple perspectives and utilizing the strengths of different models, ensemble learning improves the overall performance of the learning system. This approach not only enhances accuracy but also provides resilience against uncertainties in the data. By effectively merging predictions from multiple models, ensemble learning has proven to be a powerful tool in various domains, offering more robust and reliable forecasts.

### Simple Ensemble Methods

#### Max Voting

The max voting method is generally used for classification problems. In this technique, multiple models are used to make predictions for each data point. The predictions by each model are considered as a 'vote'. The predictions which we get from the majority of the models are used as the final prediction.

#### Averaging

Similar to the max voting technique, multiple predictions are made for each data point in averaging. In this method, we take an average of predictions from all the models and use it to make the final prediction. Averaging can be used for making predictions in regression problems or while calculating probabilities for classification problems.

#### Weighted Averaging

This is an extension of the averaging method. All models are assigned different weights defining the importance of each model for prediction. For instance, if two of your colleagues are critics, while others have no prior experience in this field, then the answers by these two friends are given more importance as compared to the other people.

### Advanced Ensemble Methods

#### Stacking

Stacking is an ensemble learning technique that uses predictions from multiple models (for example decision tree, knn or svm) to build a new model. This model is used for making predictions on the test set. 

#### Blending

Blending follows the same approach as stacking but uses only a holdout (validation) set from the train set to make predictions. In other words, unlike stacking, the predictions are made on the holdout set only. The holdout set and the predictions are used to build a model which is run on the test set. Here is a detailed explanation of the blending process:

#### Bagging

The idea behind bagging is combining the results of multiple models (for instance, all decision trees) to get a generalized result. There is a high chance that these models will give the same result since they are getting the same input. We solve this problem by bootstrapping.

Bootstrapping is a sampling technique in which we create subsets of observations from the original dataset, with replacement. The size of the subsets is the same as the size of the original set. Bagging (or Bootstrap Aggregating) technique uses these subsets (bags) to get a fair idea of the distribution (complete set). The size of subsets created for bagging may be less than the original set.


<img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2018/05/image20.png" style=" height: 400px;" alt="Bootstrapping"/>


- Multiple subsets are created from the original dataset, selecting observations with replacement.
- A base model (weak model) is created on each of these subsets.
- The models run in parallel and are independent of each other.

<img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/11/image-31.png" style=" height: 300px;" alt="Bagging"/>


#### Boosting

Boosting is a sequential process, where each subsequent model attempts to correct the errors of the previous model. The succeeding models are dependent on the previous model. The boosting technique is used sequentially to reduce the bias of the combined model. The models are not trained independently, but based on the information from the previous model. Steps for performing boosting:

1. A subset is created from the original dataset.
2. Initially, all data points are given equal weights.
3. A base model is created on this subset.
4. This model is used to make predictions on the whole dataset
5. Errors are calculated using the actual values and predicted values.
6. The observations which are incorrectly predicted, are given higher weights. (Here, the three misclassified blue-plus points will be given higher weights)
7. Another model is created and predictions are made on the dataset. (This model tries to correct the errors from the previous model).
8. Similarly, multiple models are created, each correcting the errors of the previous model.
9. The final model (strong learner) is the weighted mean of all the models (weak learners)


### Ensemble Algorithms

Ensemble methods that minimize variance:
- Bagging - Bootstrap Aggregation
- Random Forests

Ensemble methods that minimize bias
- Boosting - ADABOOST
- Ensemble Selection – choice of classifier


### Bagging Bootstrap Aggregation

From original population, create subpopulations {Si} by random sampling with replacement
- Train model using each S’
- Average for regression / Majority vote for classification

Its goal is to reduce variance, not bias

Variance reduces sub-linearly. Bias often increases slightly

Features - 
- Reduces overfitting (variance error reduces)
-  Bias error increases slightly, but variance reduces a lot
- Normally uses one type of classifier
- Decision trees are popular
-  Easy to parallelize
- A large number of simple DT, not pruned


### Random Forests - Forest of Stubs

Random Forest samples data as well as features
- Sample S’
- Train DT - At each node, sample features (sqrt)
- Average regression /vote classifications


Goal is to reduce variance, not bias. It is suited only for decision trees.



### AdaBoost

It stands for Adaptive Boosting. Each time entire data is used to train the model (unlike Bagging /RF). Training happens repeatedly in a sequence (unlike Bagging/RF and akin to cross validation).Results in a long tree (unlike Bagging/RF). Difference is that each data point has a different
weight after each training-testing cycle. They start with equal weights. After training-testing, Misclassified examples are given more weight to increase their learning This ensures that currently misclassified data points have greater probability of getting correctly classified
in future. Another difference is that the output from each training cycle is assigned a weight. Greater the accuracy, more is the weight of output. Final decision, for a given data point, is a weighted combination of the predicted output obtained at each stage 

