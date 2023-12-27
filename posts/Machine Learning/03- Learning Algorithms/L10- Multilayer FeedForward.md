---
title: "Multilayer FeedForward Neural Networks"
subtitle: "What will this cover"
date: "2020-12-27"
---

Multilayer Feed-Forward Neural Network(MFFNN) is an interconnected Artificial Neural Network with multiple layers that has neurons with weights associated with them and they compute the result using activation functions. It is one of the types of Neural Networks in which the flow of the network is from input to output units and it does not have any loops, no feedback, and no signal moves in backward directions that is from output to hidden and input layer.

## Architecture of Multilayer Feed-Forward Neural Network

This Neural Network or Artificial Neural Network has multiple hidden layers that make it a multilayer neural Network and it is feed-forward because it is a network that follows a top-down approach to train the network. In this network there are the following layers:

- Input Layer: It is starting layer of the network that has a weight associated with the signals.
- Hidden Layer: This layer lies after the input layer and contains multiple neurons that perform all computations and pass the result to the output unit.
- Output Layer: It is a layer that contains output units or neurons and receives processed data from the hidden layer, if there are further hidden layers connected to it then it passes the weighted unit to the connected hidden layer for further processing to get the desired result.


## Application of Multilayer Feed-Forward Neural Network:
- Medical field
- Speech regeneration
- Data processing and compression
- Image processing

## Limitations:
This ANN is a basic form of Neural Network that has no cycles and computes only in the forward direction. It has some limitations like sometimes information about the neighborhood is lost and in that case, it becomes difficult to process further all steps are needed to be performed again and it does not support back propagation so the network cannot learn or correct the fault of the previous stage. 

## Backpropagation

Backpropagation is an algorithm that backpropagates the errors from the output nodes to the input nodes. Therefore, it is simply referred to as the backward propagation of errors. It uses in the vast applications of neural networks  like Character recognition, Signature verification, etc.


Backpropagation is a widely used algorithm for training feedforward neural networks. It computes the gradient of the loss function with respect to the network weights. It is very efficient, rather than naively directly computing the gradient concerning each weight. This efficiency makes it possible to use gradient methods to train multi-layer networks and update weights to minimize loss; variants such as gradient descent or stochastic gradient descent are often used.

The backpropagation algorithm works by computing the gradient of the loss function with respect to each weight via the chain rule, computing the gradient layer by layer, and iterating backward from the last layer to avoid redundant computation of intermediate terms in the chain rule.

Features of Backpropagation:
1. it is the gradient descent method as used in the case of simple perceptron network with the differentiable unit.
2. it is different from other networks in respect to the process by which the weights are calculated during the learning period of the network.
3. training is done in the three stages : 
    - the feed-forward of input training pattern
    - the calculation and backpropagation of the error
    - updation of the weight


Backpropagation Algorithm Steps:
1. Inputs X, arrive through the preconnected path.
2. The input is modeled using true weights W. Weights are usually chosen randomly.
3. Calculate the output of each neuron from the input layer to the hidden layer to the output layer.
4. Calculate the error in the outputs: Backpropagation Error= Actual Output – Desired Output
5. From the output layer, go back to the hidden layer to adjust the weights to reduce the error.
6. Repeat the process until the desired output is achieved.


### Advantages:
- It is simple, fast, and easy to program.
- Only numbers of the input are tuned, not any other parameter.
- It is Flexible and efficient.
- No need for users to learn any special functions.

### Disadvantages:
- It is sensitive to noisy data and irregularities. Noisy data can lead to inaccurate results.
- Performance is highly dependent on input data.
- Spending too much time training.
- The matrix-based approach is preferred over a mini-batch.

Parameters :

x = inputs training vector x=(x1,x2,…………xn).
t = target vector t=(t1,t2……………tn).
δk = error at output unit.
δj  = error at hidden layer.
α = learning rate.
V0j = bias of hidden unit j.
Training Algorithm :

Step 1: Initialize weight to small random values.

Step 2: While the stepsstopping condition is to be false do step 3 to 10.

Step 3: For each training pair do step 4 to 9 (Feed-Forward).

Step 4: Each input unit receives the signal unit and transmitsthe signal xi signal to all the units.

Step 5 : Each hidden unit Zj (z=1 to a) sums its weighted input signal to calculate its net input 

                     zinj = v0j + Σxivij     ( i=1 to n)

           Applying activation function zj = f(zinj) and sends this signals to all units in the layer about i.e output units

           For each output l=unit yk = (k=1 to m) sums its weighted input signals.

                     yink = w0k + Σ ziwjk    (j=1 to a)

           and applies its activation function to calculate the output signals.

                     yk = f(yink)

Backpropagation Error :

Step 6: Each output unit yk (k=1 to n)  receives a target pattern corresponding to an input pattern then error is calculated as:

                   δk = ( tk – yk ) + yink 

Step 7: Each hidden unit Zj (j=1 to a) sums its input from all units in the layer above 

                  δinj = Σ δj wjk 

              The error information term is calculated as :

                  δj = δinj + zinj

Updation of weight and bias :

Step 8: Each output unit yk (k=1 to m) updates its bias and weight (j=1 to a). The weight correction term is given by :

                                        Δ wjk = α δk zj

                   and the bias correction term is given by  Δwk = α δk.

                   therefore    wjk(new) = wjk(old) + Δ wjk

                                          w0k(new) = wok(old) + Δ wok

                  for each hidden unit zj (j=1 to a) update its bias and weights (i=0 to n) the weight connection term 

                                 Δ vij = α δj xi

                and the bias connection on term 

                                 Δ v0j = α δj

              Therefore vij(new) = vij(old) +   Δvij

                                   v0j(new) = v0j(old) +  Δv0j

Step 9: Test the stopping condition. The stopping condition can be the minimization of error, number of epochs.

