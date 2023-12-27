---
title: "Decision Trees"
subtitle: "What will this cover"
date: "2020-12-27"
---

Decision tree learning is a method for approximating discrete-valued target functions, in which the learned function is represented by a decision tree. Decision trees classify instances by sorting them down the tree from the root to some leaf node, which provides the classification of the instance. Each node in the tree specifies a test of some attribute of the instance, and each branch descending from that node corresponds to one of the possible values for this attribute. An instance is classified by starting at the root node of the tree, testing the attribute specified by this node, then moving down the tree branch corresponding to the value of the attribute in the given example. This process is then repeated for the subtree rooted at the new node


<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Y1q49zm6-F7G-SHsMynS7w.png" style="height: 400px;" alt="Data"/>


In general decision trees represent disjunctions of conjunctions of literals. The disjunction of conjunctions is represented by the tree itself, while the conjunctions themselves are represented by paths from the root to a leaf. Each path represents a conjunction of literals that leads to a particular classification of the instance. The literals along the path are the tests made at the nodes along the path. 

Above decision tree can be represented as below:

(Outlook = Sunny ^ Humidity = Normal) v (Outlook = Overcast) v (Outlook = Rain ^ Wind = Weak)

## ID3 Algorithm

ID3 (Iterative Dichotomiser 3) is an algorithm invented by Ross Quinlan used to generate a decision tree from a dataset. The ID3 algorithm builds decision trees using a top-down greedy search approach through the space of possible branches with no backtracking. ID3 uses Entropy and Information gain to construct a decision tree.

<algorithm>

- Create a root node for the tree
- If all examples are positive, return the single-node tree Root, with label = +.
- If all examples are negative, return the single-node tree Root, with label = -.
- If number of predicting attributes is empty, then Return the single node tree Root,
with label = most common value of the target attribute in the examples.
- Otherwise Begin
    - A ← The Attribute that best classifies examples (best is defined by Information Gain).
    - Decision Tree attribute for Root = A.
    - For each possible value, vi, of A,
        - Add a new tree branch below Root, corresponding to the test A = vi.
        - Let Examples(vi) be the subset of examples that have the value vi for A
        - If Examples(vi) is empty
            - Then below this new branch add a leaf node with label = most common target value in the examples
        - Else below this new branch add the subtree ID3 (Examples(vi), Target_Attribute, Attributes – {A})
- End
- Return Root

</algorithm>


### Getting the best attribute


**Information gain:**  Information gain measures how well a given attribute separates the training examples according to their target classification. ID3 uses this information gain measure to select among the candidate attributes at each step while growing the tree. 

**Entropy:** Information gain is based on the concept of entropy, which is a measure of the amount of uncertainty in the data. Given a collection S, containing positive and negative examples of some target concept, the entropy of S relative to this boolean classification is:

Entropy(S) = -p<sub>+</sub>log<sub>2</sub>p<sub>+</sub> - p<sub>-</sub>log<sub>2</sub>p<sub>-</sub>

where p<sub>+</sub> is the proportion of positive examples in S and p<sub>-</sub> is the proportion of negative examples in S. In all calculations involving entropy we define 0 log 0 to
be 0. The entropy is 0 when all examples in S belong to the same class, and the entropy is 1 when the collection contains an equal number of positive and negative examples. The entropy is maximal when the collection contains an equal number of positive and negative examples. 


More generally, if the target attribute can take on c different values, then the entropy of S relative to this c-wise classification is defined a

Entropy(S) = -p<sub>1</sub>log<sub>2</sub>p<sub>1</sub> - p<sub>2</sub>log<sub>2</sub>p<sub>2</sub> - ... - p<sub>c</sub>log<sub>2</sub>p<sub>c</sub>

where p<sub>i</sub> is the proportion of examples in S belonging to class i. The entropy is 0 when all examples in S belong to the same class, and the entropy is maximal when the collection contains an equal number of examples from each class.

Information gain, is simply the expected reduction in entropy caused by partitioning the examples according to this attribute. . More precisely, the information gain, Gain(S, A) of an attribute A, relative to a collection of examples S, is defined as:

Gain(S, A) = Entropy(S) - ∑<sub>v</sub> |S<sub>v</sub>|/|S| * Entropy(S<sub>v</sub>)

where v is the set of all possible values for attribute A, S<sub>v</sub> is the subset of S for which attribute A has value v, and |S| is the number of examples in S. The attribute A with the largest information gain, Gain(S, A), is the one we will use to split the collection S of examples at the current node.


### Example

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Jr1Qf-m1u-vGzDao6_CxqA.png" style="height: 400px;" alt="Data"/>


We have to find the parent node for our decision tree. For that follow the steps:

Find Entropy of each attribute.
- Entropy of the parent node = -9/14 log<sub>2</sub> 9/14 - 5/14 log<sub>2</sub> 5/14 = 0.940
- Entropy of Sunny = -2/5 log<sub>2</sub> 2/5 - 3/5 log<sub>2</sub> 3/5 = 0.971
- Entropy of Overcast = -4/4 log<sub>2</sub> 4/4 - 0/4 log<sub>2</sub> 0/4 = 0
- Entropy of Rain = -3/5 log<sub>2</sub> 3/5 - 2/5 log<sub>2</sub> 2/5 = 0.971


- Let us find Gain(S, Outlook) for the above dataset.

Gain(S,Outlook) = Entropy(S) - ∑<sub>v</sub> |S<sub>v</sub>|/|S| * Entropy(S<sub>v</sub>)

= Entropy(S) - (5/14) * Entropy(S<sub>Sunny</sub>) - (4/14) * Entropy(S<sub>Overcast</sub>) - (5/14) * Entropy(S<sub>Rain</sub>)

= 0.940 - (5/14) * 0.971 - (4/14) * 0 - (5/14) * 0.971

= 0.246


Similarly, we can find Gain(S, Temperature), Gain(S, Humidity) and Gain(S, Wind) as follows:

- Gain(S, Outlook) = 0.246
- Gain(S, Humidity) = 0.151
- Gain(S, Wind) = 0.048
- Gain(S, Temperature) = 0.029


##### ID3 Capabilities and Limitations



Number of Decision Trees with n boolean attributes = Number of boolean functions of n variables = 2<sup>2<sup>n</sup></sup>


1. ID3's hypothesis space of all decision trees is a complete space of finite discrete-valued functions, relative
to the available attributes as every finite discrete-valued function can be represented by some decision tree.
2. ID3 maintains only a single current hypothesis as it searches through the space of decision trees.
3. ID3 in its pure form performs no backtracking in its search. Once it selects an attribute to test at a particular level in the tree, it never backtracks to reconsider this choice.
4. ID3 uses all training examples at each step in the search to make statistically based decisions regarding how to refine its current hypothesis.

### Characteristics of Decision Trees

- Discrete values target function
- Suitable for discrete attribute values though continuous also possible
- Target function is expressed as disjunction of conjunction
- Searches the complete space of finite discrete valued function for correct hypothesis – decision trees
- However, results one single final hypothesis
- Greedy method for search, no backtrack. Solution may be sub-optimal
- Uses all training examples at each step
- Robust but may suffer overfiiting 

#### Split Information

Split Information is a measure of how well a given attribute separates the training examples according to their target classification. This is needed because some features may have a large number of distinct values. For example, if we have a feature that is a person’s name, then the number of distinct values is equal to the number of people in the training set. In this case, the information gain would be large, but the gain may be misleading. Split information is defined as:

SplitInfo(S, A) = -∑<sub>v</sub> |S<sub>v</sub>|/|S| * log<sub>2</sub> |S<sub>v</sub>|/|S|

where v is the set of all possible values for attribute A, S<sub>v</sub> is the subset of S for which attribute A has value v, and |S| is the number of examples in S. The attribute A with the largest information gain ratio, GainRatio(S, A), is the one we will use to split the collection S of examples at the current node.

## CART Algorithm

CART is a predictive algorithm used in Machine learning and it explains how the target variable’s values can be predicted based on other matters. It is a decision tree where each fork is split into a predictor variable and each node has a prediction for the target variable at the end.

In the decision tree, nodes are split into sub-nodes on the basis of a threshold value of an attribute. The root node is taken as the training set and is split into two by considering the best attribute and threshold value. Further, the subsets are also split using the same logic. This continues till the last pure sub-set is found in the tree or the maximum number of leaves possible in that growing tree

The CART algorithm works via the following process:
- The best split point of each input is obtained. 
- Based on the best split points of each input in Step 1, the new “best” split point is identified. 
- Split the chosen input according to the “best” split point. 
- Continue splitting until a stopping rule is satisfied or no further desirable splitting is available

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20220831135057/CARTClassificationAndRegressionTree.jpg" style="height: 400px;" alt="CART"/>

CART algorithm uses Gini Impurity to split the dataset into a decision tree .It does that by searching for the best homogeneity for the sub nodes, with the help of the Gini index criterion.

#### Gini Impurity

The Gini index is a metric for the classification tasks in CART. It stores the sum of squared probabilities of each class. It computes the degree of probability of a specific variable that is wrongly being classified when chosen randomly and a variation of the Gini coefficient. It works on categorical variables, provides outcomes either “successful” or “failure” and hence conducts binary splitting only.

The degree of the  Gini index varies from 0 to 1,
- Where 0 depicts that all the elements are allied to a certain class, or only one class exists there.
- The Gini index of value 1 signifies that all the elements are randomly distributed across various classes, and
- A value of 0.5 denotes the elements are uniformly distributed into some classes.

Mathematically, we can write Gini Impurity as follows: 

Gini Impurity = 1 - ∑<sub>i</sub> p<sub>i</sub><sup>2</sup>

where p<sub>i</sub> is the probability of an object being classified to a particular class.


## Decision Tree Pruning Methods

Pruning is a technique that removes the parts of the Decision Tree which prevent it from growing to its full depth. The parts that it removes from the tree are the parts that do not provide the power to classify instances. A Decision tree that is trained to its full depth will highly likely lead to overfitting the training data - therefore Pruning is important. There are two types of pruning: 
- Pre-pruning : Grow until Information Gain becomes insignificant w.r.t a preset threshold
- Post pruning : Prune fully grown tree using training or validation
dataset

##### Pre-pruning

- The pre-pruning technique of Decision Trees is tuning the hyperparameters prior to the training pipeline. It involves the heuristic known as ‘early stopping’ which stops the growth of the decision tree - preventing it from reaching its full depth. 
- It stops the tree-building process to avoid producing leaves with small samples. During each stage of the splitting of the tree, the cross-validation error will be monitored. If the value of the error does not decrease anymore - then we stop the growth of the decision tree. 
- The hyperparameters that can be tuned for early stopping and preventing overfitting are: max_depth, min_samples_leaf, and min_samples_split  

##### Post-pruning

- Post-pruning does the opposite of pre-pruning and allows the Decision Tree model to grow to its full depth. Once the model grows to its full depth, tree branches are removed to prevent the model from overfitting. 
- The algorithm will continue to partition data into smaller subsets until the final subsets produced are similar in terms of the outcome variable. The final subset of the tree will consist of only a few data points allowing the tree to have learned the data to the T. However, when a new data point is introduced that differs from the learned data - it may not get predicted well. 
- The hyperparameter that can be tuned for post-pruning and preventing overfitting is: ccp_alpha. ccp stands for Cost Complexity Pruning and can be used as another option to control the size of a tree. A higher value of ccp_alpha will lead to an increase in the number of nodes pruned.

##### Reduced Error Pruning with Validation Set

- Classify examples in validation set – some might be errors
- For each node:
    - Sum the errors over entire subtree
    - Calculate error on same example if converted to a leaf with majority class label
- Prune node with highest reduction in error
- Repeat until error no longer reduced

##### Cost-Complexity Pruning with Training data

- On training examples, initial tree has no errors, but replacing subtrees with leaves increases errors
- "cost-complexity" : To reduce the complexity of the model, what cost wa incurred?
- For each candidate node for removal
    - Calculate number of errors without pruning and if node collapsed to leaf
    - Calculate for entire training dataset S:

Err(prune (T,t),S)-Err(T,S) / |Leaves(T)|-|Leaves (prune (T,t))|

Choose t which minimizes the above ratio of
cost incurred: complexity reduced

##### Rule Post-Pruning

- Convert tree to rules (one for each path from root to a leaf)
- For each antecedent in a rule, remove it if error rate on validation set
does not decrease
- Sort final rule set by accuracy
