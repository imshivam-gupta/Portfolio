---
title: "Ethereum Virtual Machine"
subtitle: "Overview of Ethereum Virtual Machine"
date: "2023-09-26"
---

# Funding Smart Contracts

- need to convert eth to usd using decentralized oracle because blockchian are deterministic and can't access outside data. 
- Blockchain Oracle is any device that interacts with Often world to provide external data or computation to smart contracts 
- Centralized poracle is again point of failure so we use chainlink that is decrentralized oracle netwrok
- we can't make API calls using solidity. A trick to solve the problem is 'Orcalize'.
- Chainlink keepers
- You can use Chainlink as your Oracle. As many have mentioned, you will need an oracle to get your API call. Something that is important to note, your contract is actually asking an oracle to make your API call for you, and not making the API call itself. This is because the blockchain is deterministic.


- need of marking payable if we want to transfer funds
- for condirtion to happen we need to use require
- we can use msg.sender to get the address of the person who is calling the function
- we can use msg.value to get the value of the ether sent to the function
- we can use address(this).balance to get the balance of the smart contract
- we can use transfer to send ether to an address
- we can use address payable to convert an address to a payable address

- what is abi and how to get abi for chainlink contract from interface to abi
- what is aggregator v3 interface
- what parameters are required to get price from chainlink
- use of version in aggregator v3 interface
- duirect import from github to ignore making abi or adding interface 

- fetching selected parameter from function return
- ether to gwei and wei conversion
- working of conversion from chainlink price to multiplu with 1e10 and then multiplly it with eth amount and divide by 1e18 to get the amount in wei

- array of address of funders who sent money
- using library for conversion  and makinf our price conversion Library

- USING safeMath library to avoid overflow and underflow
- why safeMath is not used in solidity 0.8.0
- cyclicity followd in addition for eg bignumber+=1 when number is 255 give 0
- cyclicity followd in subtraction for eg bignumber-=1 when number is 0 give 255
- in solidity 0.8.0 overflow and underflow are not possible
- in solidity 0.8.0 we can use unchecked to avoid overflow and underflow

- withdraw function to withdraw money from smart contract
- msg.sender.transfer() to transfer money from smart contract to msg.sender
- but we use payable address to transfer money from smart contract to msg.sender
- transfer vs send vs call (solidity by example)

- to spcify owner of smart contract we can use constructor and msg.sender


