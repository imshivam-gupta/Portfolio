---
title: "Artificial Neural Networks"
subtitle: "What will this cover"
date: "2020-12-27"
---


#### Artificial Neural Network
Artificial Neural Network (ANN) is a type of neural network that is based on a Feed-Forward strategy. It is called this because they pass information through the nodes continuously till it reaches the output node. This is also known as the simplest type of neural network. 

Some advantages of ANN :

- Large volumes of data may be utilized to train and generalize artificial neural networks. They may be trained using vast datasets, allowing them to make patterns-based predictions and judgments.
- ANNs may be improved and employed efficiently on hardware accelerators or dedicated AI processors like GPUs and AI accelerators for quick and parallel processing.
- Another advantage of ANN is that they continue to function even in the presence of noise or errors in data. As a result, they are appropriate in scenarios involving noisy, partial, or distorted data.
- They are non-linear in nature as well. It enables them to represent complex data relationships and patterns. They can also be customized to handle various sorts of data and perform various activities.
- They are capable of extracting features from data. It removes the need for manual feature editing. They can also be taught to handle many jobs at once. As a result, they may be utilized in advanced AI applications.

Some disadvantages of ANN :

- Artificial neural networks may grow overly complex due to their architecture and the massive information used to train them. They can memorize the training data. It may result in a poor generalization of new data.
- Artificial neural networks require suitable hardware components like central processors or dedicated AI accelerators, vast storage spaces, and massive random access memory.
- Their working principles and even outcomes can be difficult to grasp because of the complexities of ANNs. Some people may find it difficult to comprehend their decision-making processes.
- No explicit rule determines the structure of ANN. The proper network structure is obtained by trial and error.
- They are also susceptible to adversarial instances or slight changes in input data. These modifications may cause the artificial neural network to make wrong decisions and produce irrelevant results.

####  Biological Neural Network

Biological Neural Network (BNN) is a structure that consists of Synapse, dendrites, cell body, and axon. In this neural network, the processing is carried out by neurons. Dendrites receive signals from other neurons, Soma sums all the incoming signals and axon transmits the signals to other cells. 

Some advantages of BNN :  

- The synapses are the input processing element.
- It is able to process highly complex parallel inputs.

Some disadvantages of BNN :

- There is no controlling mechanism.
- Speed of processing is slow being it is complex.


#### Differences between ANN and BNN :

Neurons: In both BNNs and ANNs, neurons are the basic building blocks that process and transmit information. However, BNN neurons are more complex and diverse than ANNs. In BNNs, neurons have multiple dendrites that receive input from multiple sources, and the axons transmit signals to other neurons, while in ANNs, neurons are simplified and usually only have a single output.

Synapses: In both BNNs and ANNs, synapses are the points of connection between neurons, where information is transmitted. However, in ANNs, the connections between neurons are usually fixed, and the strength of the connections is determined by a set of weights, while in BNNs, the connections between neurons are more flexible, and the strength of the connections can be modified by a variety of factors, including learning and experience.

Neural Pathways: In both BNNs and ANNs, neural pathways are the connections between neurons that allow information to be transmitted throughout the network. However, in BNNs, neural pathways are highly complex and diverse, and the connections between neurons can be modified by experience and learning. In ANNs, neural pathways are usually simpler and predetermined by the architecture of the network.


| Features| 	Artificial Neural Network	| Biological Neural Network| 
| --- | --- | --- |
| Definition| 	It is the mathematical model which is mainly inspired by the biological neuron system in the human brain.| 	It is also composed of several processing pieces known as neurons that are linked together via synapses.| 
| Processing| 	Its processing was sequential and centralized.	| It processes the information in a parallel and distributive manner.| 
| Size| 	It is small in size.	| It is large in size.| 
| Control Mechanism	| Its control unit keeps track of all computer-related operations.	| All processing is managed centrally.| 
| Rate| 	It processes the information at a faster speed.	| It processes the information at a slow speed.| 
| Complexity| 	It cannot perform complex pattern recognition.	| The large quantity and complexity of the connections allow the brain to perform complicated tasks.| 
| Feedback| 	It doesn't provide any feedback.	| It provides feedback.| 
| Fault tolerance	| There is no fault tolerance.	| It has fault tolerance.| 
| Operating Environment| 	Its operating environment is well-defined and well-constrained	| Its operating environment is poorly defined and unconstrained.| 
| Memory| 	Its memory is separate from a processor, localized, and non-content addressable.	| Its memory is integrated into the processor, distributed, and content-addressable.| 
| Reliability	| It is very vulnerable.	| It is robust.| 
| Learning| 	It has very accurate structures and formatted data.| 	They are tolerant to ambiguity.| 
| Response time| 	Its response time is measured in milliseconds.| 	Its response time is measured in nanoseconds.| 


## Perceptron

Perceptron is understood as an Artificial Neuron or neural network unit that helps to detect certain input data computations in business intelligence. It is the simplest type of feedforward neural network, consisting of a single layer of input nodes that are fully connected to a layer of output nodes. It can learn the linearly separable patterns. it uses slightly different types of artificial neurons known as threshold logic units (TLU). 

<img src="https://media.geeksforgeeks.org/wp-content/uploads/nodeNeural.jpg" style="width: 300px; height: 200px;" alt="Single Layer Perceptron" >

**Types of Perceptron:**
- Single-Layer Perceptron: This type of perceptron is limited to learning linearly separable patterns. effective for tasks where the data can be divided into distinct categories through a straight line.
- Multilayer Perceptron: Multilayer perceptrons possess enhanced processing capabilities as they consist of two or more layers, adept at handling more complex patterns and relationships within the data.

**The perceptron consists of 4 parts.**
- Input value or One input layer: The input layer of the perceptron is made of artificial input neurons and takes the initial data into the system for further processing.
- Weights and Bias:
    - Weight: It represents the dimension or strength of the connection between units. If the weight to node 1 to node 2 has a higher quantity, then neuron 1 has a more considerable influence on the neuron.
    - Bias: It is the same as the intercept added in a linear equation. It is an additional parameter which task is to modify the output along with the weighted sum of the input to the other neuron.
- Net sum: It calculates the total sum.
- Activation Function: A neuron can be activated or not, is determined by an activation function. The activation function calculates a weighted sum and further adding bias with it to give the result.

**Working of Perceptron:**

A weight is assigned to each input node of a perceptron, indicating the significance of that input to the output. The perceptron’s output is a weighted sum of the inputs that have been run through an activation function to decide whether or not the perceptron will fire. it computes the weighted sum of its inputs as:

<gradientblock>

z = w1x1 + w1x2 + ... + wnxn = X<sup>T</sup>W

</gradientblock>

The step function compares this weighted sum to the threshold, which outputs 1 if the input is larger than a threshold value and 0 otherwise, is the activation function that perceptrons utilize the most frequently. The most common step function used in perceptron is the Heaviside step function:

h(z) = 1 if z ≥ Threshold, 0 otherwise

A perceptron has a single layer of threshold logic units with each TLU connected to all inputs. 

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230426162726/Perceptron-1.webp" style="width: 600px; height: 300px;" alt="Threshold Logic unit" >


