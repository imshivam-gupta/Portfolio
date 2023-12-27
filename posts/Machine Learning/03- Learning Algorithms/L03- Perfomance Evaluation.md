---
title: "Perfomance Evaluation"
subtitle: "What will this cover"
date: "2020-12-27"
---

### Confusion Matrix

A confusion matrix is a table that is used to describe the performance of a classification model on a set of test data for which the true values are known. It is a class-wise distribution of the predictive performance of a classification model—that is, the confusion matrix is an organized way of mapping the predictions to the original classes to which the data belong.

#### Confusion Matrix for Binary Classification

Terminology:

- True Positive (TP): The number of positive samples that are correctly classified as positive.
- True Negative (TN): The number of negative samples that are correctly classified as negative.
- False Positive (FP): The number of negative samples that are incorrectly classified as positive.
- False Negative (FN): The number of positive samples that are incorrectly classified as negative.


#### Micro-Averaging vs Macro-Averaging

##### Micro-Averaging

Micro average is concerned with the study of individual classes. For example, a firm’s micro average examines personal goods’ price and market structure.

Micro Averaged Recall = (∑TP<sub>i</sub>)/(∑TP<sub>i</sub>+∑FN<sub>i</sub>)

Micro Averaged Precision = (∑TP<sub>i</sub>)/(∑TP<sub>i</sub>+∑FP<sub>i</sub>)

##### Macro-Averaging

Macro average is concerned with aggregations or totals. We study economy-wide phenomena such as unemployment, price levels of economic growth, and gross domestic product or GDP using macro average.


Macro Averaged Recall = (∑Recall<sub>i</sub>)/n

Macro Averaged Precision = (∑Precision<sub>i</sub>)/n

Macro Averaged F1 Score = Harmonic Mean of Macro Averaged Recall and Macro Averaged Precision


The difference between macro and micro averaging is that macro averaging gives equal weight to each category while micro averaging gives equal weight to each sample. If we have the same number of samples for each class, both macro and micro will provide the same score.

In the context of an imbalanced dataset where equal importance is attributed to all classes, opting for the macro average stands as a sound choice since it treats each class with equal significance. For instance, in our scenario involving the classification of airplanes, boats, and cars, employing the macro-F1 score would be appropriate. In the case of a balanced dataset where a straightforward metric for overall performance, regardless of the class, is sought, accuracy becomes valuable—it essentially aligns with our micro F1 score.

### Example

Suppose we have a binary class imbalanced dataset consisting of 60 samples in the positive class and 40 samples in the negative class of the test set, which we use to evaluate a machine learning model.

<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b91ad565f3b141540cd86_32323.png" style="width: 400px; height: 300px;" alt="Confusion Matrix"/>

Parameters:

- Accuracy: The proportion of the total number of predictions that were correct. Formually, Accuracy = (TP+TN)/(TP+TN+FP+FN)
- Precision: The proportion of positive predictions that were actually correct. Formually, Precision = TP/(TP+FP)
- Recall: The proportion of actual positives that were correctly classified. Formually, Recall = TP/(TP+FN). It is also called Sensitivity or True Positive Rate (TPR) or Hit Rate.
- Specificity: The proportion of actual negatives that were correctly classified. Formually, Specificity = TN/(TN+FP). It is also called True Negative Rate (TNR).
- F1 Score: The harmonic mean of precision and recall. Formually, F1 Score = 2*(Precision * Recall)/(Precision + Recall). It is also called Balanced F-Score or F-Measure. It gives a good overall balance between precision and recall.


#### Confusion Matrix for Multi-Class Classification

Suppose we have the test set (consisting of 191 total samples) of a dataset with the following distribution:

<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b91d4cedc39ec19d919ca_metrics_1.png" style="width: 400px; height: 300px;" alt="Dataset"/>

Confusion Matrix:

<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b91f973e0938d507a8fa7_Multi-Class%20Dataset_Confusion%20Matrix.png" style="width: 400px; height: 300px;" alt="Confusion Matrix"/>

For Class 1: We create 2*2 matrix for Class 1, and calculate TP, TN, FP, FN for Class 1.

<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b922c51929627b244cdbd_121.png" style="width: 400px; height: 300px;" alt="Class 1"/>

For Class 2: We create 2*2 matrix for Class 2, and calculate TP, TN, FP, FN for Class 2.

<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b924a73e09302a87a91ed_One-Vs-all%20matrix%20(for%20class-2).png" style="width: 400px; height: 300px;" alt="Class 2"/>

Now we can calculate the metrics for each class:

<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b927dc38dd10169c49786_class-wise-metrics.png" style="width: 400px; height: 300px;" alt="Metrics"/>


######  Micro-Averaging Example
The micro-averaged f1-score is a global metric that is calculated by considering the net TP, i.e., the sum of the class-wise TP (from the respective one-vs-all matrices), net FP, and net FN. These are obtained to be the following:

Net TP = 52+28+25+40 = 145
Net FP = (3+7+2)+(2+2+0)+(5+2+12)+(1+1+9) = 46
Net FN = (2+5+1)+(3+2+1)+(7+2+9)+(2+0+12) = 46

Note that for every confusion matrix, the net FP and net FN will have the same value. Thus, the micro precision and micro recall can be calculated as:

Micro Precision = Net TP/(Net TP+Net FP) = 145/(145+46) = 75.92%
Micro Recall = Net TP/(Net TP+Net FN) = 75.92%
- Thus, Micro F-1 = Harmonic Mean of Micro Precision and Micro Recall = 75.92%.



###### Macro-Averaging Example 
The macro-averaged scores are calculated for each class individually, and then the unweighted mean of the measures is calculated to calculate the net global score. For the example we have been using, the scores are obtained as the following:


<img src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/636b927dc38dd10169c49786_class-wise-metrics.png" style="width: 400px; height: 300px;" alt="Metrics"/>