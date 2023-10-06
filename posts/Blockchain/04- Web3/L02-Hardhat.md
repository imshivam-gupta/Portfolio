---
title: "Understanding Hardhat"
subtitle: "This post is about understanding hardhat"
date: "2023-09-26"
---


Hardhat provides a streamlined and modern development environment out of the box. It includes built-in tasks for compiling contracts, running tests, and deploying contracts to various Ethereum networks. Setting up a development environment with Hardhat is typically faster and more straightforward.
- Run Solidity locally -Easily deploy your contracts, run tests and debug Solidity code without dealing with live environments. Hardhat Network is a local Ethereum network designed for development.
- Debugging-first - Hardhat is the best choice for Solidity debugging. You get Solidity stack traces, console.log and explicit error messages when transactions fail

Hardhat comes built-in with Hardhat Network, a local Ethereum network node designed for development. It allows you to deploy your contracts, run your tests and debug your code, all within the confines of your local machine.


## Setting up Environment

Most Ethereum libraries and tools are written in JavaScript, and so is Hardhat. 

- Install Node.js and npm
- Open a terminal and run npm install --save-dev hardhat
- In the same terminal run npx hardhat
- Choose Create an simple project using JavaScript

We can use variety of options in hardhat -
- npx hardhat compile: Compiles the entire project, building all artifacts.


In scripts folder we see deploy.js file which is used to deploy contracts to the network. We can modify this file to deploy our contracts to the network. We have used ethers.js library to interact with the network and created a similar script. Now let's modify the deploy.js file to deploy our contract to the network.

![Alt text](image-3.png)

![Alt text](image-4.png)

- artifacts folder and understanidng folder structure
- adding custim ontracts
- compiling contracts
- customising scripts
- netwoks in hardhat- defaukt is hardhat

![Alt text](image-5.png)

- plugins like etherscan adding using hardhar and modifying config file

![Alt text](image-6.png)


-- adding hardhat taks

- hardhat console



