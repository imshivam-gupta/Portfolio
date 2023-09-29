---
title: "Funding Smart Contracts"
subtitle: "This post is about funding smart contracts and using chainlink to get price of ether"
date: "2023-09-26"
---

# Funding Smart Contracts

### Need of Decentralized Oracle
In the world of blockchain and smart contracts, we often need access to data that exists outside the blockchain, such as the current exchange rate for converting cryptocurrencies like Ethereum (ETH) to traditional currencies like US dollars (USD). However, blockchains are deterministic, meaning they can't access external data on their own. To solve this problem, decentralized oracles come into play.

> A blockchain oracle is a mechanism or device that interacts with the external world to provide data or perform computations for smart contracts on the blockchain. These oracles act as bridges between the blockchain and real-world data, making it possible for smart contracts to use information from the outside world.

Centralized oracles are single points of failure and potential vulnerabilities in a blockchain system. If a centralized oracle fails or is compromised, it can negatively impact the smart contracts relying on it. Chainlink is a decentralized oracle network designed to address this issue. It uses a network of nodes to provide data and services, making it more reliable and resistant to failures.

### Chainlink Automation (Formerly Chainlink Keepers)

Chainlink Automation enables conditional execution of our smart contracts functions through a hyper-reliable and decentralized automation platform that uses the same external network of node operators that secures billions in value. Building on Chainlink Automation will help us get to market faster so you don't have to deal with the setup cost, ongoing maintenance, and risks associated with a centralized automation stack. 

![Visualization of Chainlink Automation](https://docs.chain.link/images/contract-devs/automation/automation_intro.gif)

##### Select a trigger
Chainlink Automation will reliably execute smart contract functions using a variety of triggers.

- **Time-based trigger:** Use a time-based trigger to execute your function according to a time schedule. This feature is also called the Job Scheduler and it is a throwback to the Ethereum Alarm Clock. Time-based trigger contracts do not need to be compatible with the AutomationCompatibleInterface contract.
- **Custom logic trigger:** Use a custom logic trigger to provide custom solidity logic that Automation Nodes evaluate (off-chain) to determine when to execute your function on-chain. Your contract must meet the requirements to be compatible with the AutomationCompatibleInterface contract. Custom logic examples include checking the balance on a contract, only executing limit orders when their levels are met, any one of our coded examples, and many more.

### API Calls in Solidity

Solidity is the programming language used for writing smart contracts on the Ethereum blockchain. Solidity contracts are deterministic, meaning they can't directly make API calls to external sources. To work around this limitation, developers have used services like 'Oraclize' (now rebranded as 'Provable') to act as intermediaries. These services allow smart contracts to request data from external APIs by triggering the service to make the API call and provide the result back to the contract.

When you use Chainlink as your oracle, your smart contract doesn't directly make API calls to external services. Instead, your smart contract sends a request to Chainlink, specifying the data it needs and the conditions under which it should be retrieved. Chainlink nodes then take on the responsibility of making the actual API call and providing the response back to your smart contract. This approach is necessary because smart contracts on the blockchain can't directly access the internet or external data sources due to their deterministic nature.

### How to use Chainlink in Solidity

##### What is ABI and how to get ABI for Chainlink contract from interface to ABI

ABI stands for Application Binary Interface. In the context of Ethereum and smart contracts, the ABI is a standardized way to encode and decode data that is sent to and received from smart contracts on the Ethereum blockchain. It defines how functions in a smart contract are called and what data types they expect and return. The ABI is crucial for enabling communication between Ethereum smart contracts and external applications, including user interfaces. We can simply use the interface of the contract to get the ABI of the contract. For chainlink we can get the ABI from the interface of the contract which is available on github.

```solidity
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
```


##### What is Aggregator V3 Interface

The AggregatorV3Interface is an interface contract provided by Chainlink for interacting with Chainlink Price Feeds. It defines the standard functions that can be used to retrieve price data from Chainlink's decentralized oracle network. The primary function provided by this interface is getLatestRoundData, which is used to fetch the latest price data, including the price, timestamp, and other relevant information.

**Versioning:** AggregatorV3Interface is a versioned interface, meaning that it can be updated in the future to add new functions or change the behavior of existing functions. The current version of the interface is 0.6.0. The version number is included in the name of the interface contract, so the current version is AggregatorV3InterfaceV6. The version number is also included in the name of the interface file, so the current version is AggregatorV3InterfaceV6.sol.


### Making a Price Converter Library

We will make a library to convert price from one unit to another. For example from usd to eth or eth to usd. We will use chainlink to get the price of ether in usd and then we will use this price to convert ether to usd or usd to ether.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    // We could make this public, but then we'd have to deploy it
    function getPrice() internal view returns (uint256,uint 256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        return uint256(answer * 10000000000,answer);
    }

    function getConversionRate(uint256 ethAmount) internal view returns (uint256){
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;
        return ethAmountInUsd;
    }
}
```


> Doubt still remains that why we are multiplying the price with 1e10 and then dividing it by 1e18. 


## Making Contracts Payable


All the remaining section can be explained with the help of example given below:


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

error NotOwner();

contract FundMe {
    using PriceConverter for uint256;

    mapping(address => uint256) public addressToAmountFunded;
    address[] public funders;

    // Could we make this constant?  /* hint: no! We should make it immutable! */
    address public /* immutable */ i_owner;
    uint256 public constant MINIMUM_USD = 50 * 10 ** 18;
    
    constructor() {
        i_owner = msg.sender;
    }

    function fund() public payable {
        require(msg.value.getConversionRate() >= MINIMUM_USD, "You need to spend more ETH!");
        // require(PriceConverter.getConversionRate(msg.value) >= MINIMUM_USD, "You need to spend more ETH!");
        addressToAmountFunded[msg.sender] += msg.value;
        funders.push(msg.sender);
    }
    
    function getVersion() public view returns (uint256){
        // ETH/USD price feed address of Sepolia Network.
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return priceFeed.version();
    }
    
    modifier onlyOwner {
        // require(msg.sender == owner);
        if (msg.sender != i_owner) revert NotOwner();
        _;
    }
    
    function withdraw() public onlyOwner {
        for (uint256 funderIndex=0; funderIndex < funders.length; funderIndex++){
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);

        // // transfer
        // payable(msg.sender).transfer(address(this).balance);
        // // send
        // bool sendSuccess = payable(msg.sender).send(address(this).balance);
        // require(sendSuccess, "Send failed");
        // call
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");

        require(callSuccess, "Call failed");
    }
   
    fallback() external payable {
        fund();
    }

    receive() external payable {
        fund();
    }

}
```


### payable:

In Solidity, the payable modifier is used to indicate that a function can receive Ether (ETH) transfers. If we want a function in your smart contract to be able to receive Ether from other accounts, we must mark that function as payable. Hence we need to mark the fund function as payable because we want to receive ether from other accounts.

### require:

In Solidity, the require statement is a control structure used for adding conditions that must be satisfied for a function to execute successfully. If the condition specified in the require statement evaluates to false during the execution of the function, the function execution is immediately halted, and any state changes made before the require statement are rolled back. In other words, require is a way to enforce certain conditions or constraints in your smart contracts, and it helps prevent invalid or unintended actions.

Syntax-

```solidity
require(condition, "Error message if condition is false");
```

### msg:

Msg is a global variable in Solidity which handles everything related to the blockchain in the properties that it holds. Right from the gas fees to the amount of ether required to call any function in the smart contract, all of these values are stored inside the msg global variable and can be accessed by using the dot(.) operator. For example, 'msg. sender' is always the account address from where the function call came from which requires the sender to send some ether to successfully call the function and execute it.

- **'msg. sender':** It is always the address of the account from where the function call came from.
- **'msg. gas':** Every function call which contains any amount of ether to be sent or deposited in a smart contract requires some gas to call the function successfully, this gas acts as an incentive for the miners. Msg. gas returns the available remaining value of the gas to call the function.
- **'msg. value':** The amount of Ether/Wei deposited or withdrawn by the msg. sender.
- **'msg. sig':** Returns the first 4 bytes of the call data of any function which helps to identify the function which is being called.

### address(this):

In Solidity, the address(this) expression is used to get the address of the smart contract that is currently executing. The address(this) expression is useful for getting the address of the smart contract that is currently executing. We can use this address to check the balance of the smart contract or send Ether to the smart contract. For making payable address we can use address payable(this). We can use .transfer(..) and .send(..) on address payable, but not on address.

### transfer vs send vs call:


**Using the transfer function:** 

The transfer function is the simplest and safest method to transfer Ether in Solidity. The transfer function sends the specified amount of Ether to the recipient’s address. If the transfer fails (e.g., due to out-of-gas conditions or revert in the recipient’s contract), an exception is thrown, and the entire transaction is reverted. It provides basic security by reverting the transfer if something goes wrong. Syntax: recipient.transfer(amount);

**Using the send function:** 

The send function is similar to transfer but with some differences. It is a lower-level method that returns a boolean value indicating the success or failure of the transfer. If the transfer fails, it returns, allowing you to handle potential failure scenarios explicitly. It’s essential to check the return value and handle any errors appropriately.
Syntax: bool success = recipient.send(amount);

**Using the call function:** 

The call function provides the most flexibility and control when transferring Ether. It allows you to specify additional parameters and invoke functions in the recipient’s contract. When using call for Ether transfer, the recipient’s contract must implement a fallback function to receive the Ether. The fallback function is executed when a contract receives Ether without any specific function call. It’s important to handle the return value properly and include appropriate error-checking mechanisms. Gas optimization: Gas is the unit of computational effort required to execute operations on the Ethereum network. To optimize gas usage, consider using the transfer function instead of send when transferring Ether, as it consumes all available gas and reverts in case of failure.

Syntax: 

```solidity
(bool sent,memory data) = recipient.call.value(amount)("");
```

### fallback and receive:

**fallback():**

This function is called for all messages sent to this contract, except plain Ether transfers (there is no other function except the receive function). Any call with non-empty calldata to this contract will execute

**Properties of a fallback function:**

- Declare with fallback() and have no arguments.
- If it is not marked payable, the contract will throw an exception if it receives plain ether without data.
- Can not return anything.
- Can be defined once per contract.
- It is also executed if the caller meant to call a function that is not available or receive() does not exist or msg.data is not empty.
- It is mandatory to mark it external.
- It is limited to 2300 gas when called by another function by using transfer() or send() method . It is so for as to make this function call as cheap as possible.


**receive():**

The receive() method is used as a fallback function if Ether are sent to the contract and no calldata are provided (no function is specified). It can take any value. If the receive() function doesn’t exist, the fallback() method is used. A contract can have at most one receive() function. 

### Additional Points:

- For specifying owner of the smart contract we can use the following code. we can set the owner in constructor as shown in the example.
- We can use the modifier onlyOwner to make sure that only the owner of the smart contract can call the withdraw function.
- We can use the modifier payable to make sure that the function can receive ether.
- We can use the modifier view to make sure that the function can only view the data and cannot modify it.
- We can use the modifier pure to make sure that the function can only view the data and cannot modify it and also cannot access the state variables.
- We can use the modifier external to make sure that the function can only be called from outside the smart contract.
- We can use the modifier internal to make sure that the function can only be called from inside the smart contract.
- We can use the modifier public to make sure that the function can be called from both inside and outside the smart contract.
- We can use the modifier private to make sure that the function can only be called from inside the smart contract.
- We can use the modifier constant to make sure that the function can only view the data and cannot modify it and also cannot access the state variables.


