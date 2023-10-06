---
title: "Ethereum Virtual Machine"
subtitle: "Overview of Ethereum Virtual Machine"
date: "2023-09-26"
---

# Ethereum Virtual Machine

The Ethereum Virtual Machine (EVM) is the computation engine for Ethereum that manages the state of the blockchain and enables smart contract functionality. The EVM is contained within the client software (e.g., Geth, Nethermind, and more) that you need in order to run a node on Ethereum. Nodes on Ethereum keep copies of transaction data, which the EVM processes to update the distributed ledger. Generally speaking, nodes on Ethereum natively support the EVM as the client software implements this functionality.

The EVM participates in block creation and transaction execution. In block creation, the EVM sets standards for managing the state from block to block. These states are stored in a Merkle Patricia Trie and hold the ground truth state for Ethereum. In transaction execution, the EVM executes tasks (e.g., function calls to a smart contract) by interpreting the instructions in Opcodes (machine instructions at a low level); however, the data is formatted in bytecode. To get the data into bytecode, you can use a programming language such as Solidity (i.e., the native programming language for smart contracts) to compile and deploy the smart contract using bytecode. Note that when the EVM executes tasks, it is limited to the amount of gas provided by the transaction and the overall limitations of the EVM. Gas is a unit of measure for computing power on Ethereum. Other information about the EVM is provided in ethereum yellow paper.

EVM can acess and store information in these places:

**Stack:** Stack is a non-persistent data maintained by EVM (Ethereum Virtual Machine). EVM uses stack data location to load the variables during execution. Stack location has the limitation up to 1024 levels.



**Memory:** The memory location is temporary data and cheaper than the storage location. It can only be accessible within the function. Usually, Memory data is used to save temporary variables for calculation during function execution. Once the function gets executed, its contents are discarded. You can think of it as a RAM of each individual function. For arrays, structs, and mappings, the data location can be explicitly declared as memory to store them in the memory area of the EVM.

**Storage:** The storage location is permanent data, which means that this data can be accessed into all functions within the contract. To make it more simple, you can think of it as the hard disk data of your computer where all the data gets stored permanently. Similarly, the storage variable is stored in the state of a smart contract and is persistent between function calls. Keep in mind that storage data location is expensive compared to other data locations. 

**Calldata:** Calldata is non-modifiable and non-persistent data location where all the passing values to the function are stored. Also, Calldata is the default location of parameters (not return parameters) of external functions.



