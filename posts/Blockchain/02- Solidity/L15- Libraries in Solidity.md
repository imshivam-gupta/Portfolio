---
title: "Libraries in Solidity"
subtitle: "This post is about libraries in solidity"
date: "2023-09-26"
---


# Libraries in Solidity

Libraries in solidity are similar to contracts that contain reusable codes. A library has functions that can be called by other contracts. Deploying a common code by creating a library reduces the gas cost. Functions of the library can be called directly when they do not modify the state variables i.e. only pure and view functions can be called from outside of the library. It cannot be destroyed because it is assumed as stateless. The library does not have state variables, it cannot inherit any element and cannot be inherited.

## Creating a Library
A library contract is defined by using the library keyword instead of a general contract. Libraries do not have any storage thus it cannot hold state variables, fallback or payable functions also cannot be created inside the library as it cannot store ethers. Libraries are not for changing the state of the contract, it can only be used for performing basic operations based on inputs and outputs. However it can implement some data types like struct and enums which are user-defined, and constant variables that are stored in a stack of Ethereum, not in storage. 

Example - 

```solidity
pragma solidity ^0.5.0;

// Library Definition
library libraryExample {
    
    // Defining structure
    struct Constants {

        // Declaring variables
        uint Pi;             
        uint EulerNb;        
        uint PythagoraConst; 
        uint TheodorusConst; 
    }
    
}
```

## Importing a Library

A library can be defined on the same contract as well as it can be imported from outside by using the import statements. A single file can contain multiple libraries that can be specified using curly braces in the import statement separated by a comma.

Syntax:

```solidity
import libraryName from “./library-file.sol”;
```

## Using a library

A library can be accessed within the smart contract by using 'for' keyword. 

Syntax:

```solidity
<libraryName> for <dataType>    
```

The above statement can be used to attach library functions to any type. libraryName is the name of the desired library to import, dataType is the variable type for which we want to access the library. All members of the library can also be used by the wildcard operator(*).

Example:

```solidity
pragma solidity ^0.5.0;

// Defining Library
library LibExample {

    // Function to power of 
    // an unsigned integer
    function pow(
      uint a, uint b) public view returns (
      uint, address) {
        return (a ** b, address(this));
    }
}

// Defining calling contract
contract LibraryExample {

    using LibExample for uint;
    address owner = address(this);
    
    // Calling function pow to 
    // calculate power 
    function getPow(uint num1, uint num2) public view returns (uint, address) {
        return num1.pow(num2);
    }
}
```

## SafeMath Library

SafeMath is a library in Solidity, the programming language used for writing smart contracts on the Ethereum blockchain. It was designed to prevent integer overflow and underflow vulnerabilities, which can lead to unexpected behavior and security vulnerabilities in smart contracts.

**Integer Overflow and Underflow:**
Integer overflow occurs when the result of an arithmetic operation exceeds the maximum representable value for a given data type. Conversely, integer underflow occurs when the result falls below the minimum representable value. In both cases, the arithmetic operation produces an unexpected and potentially harmful result. In the context of Ethereum smart contracts, integer overflow and underflow vulnerabilities can lead to situations where an attacker can manipulate the contract's state or steal funds by exploiting these unexpected results.

**Purpose of SafeMath:**
SafeMath provides a set of mathematical operations (addition, subtraction, multiplication, and division) with overflow and underflow checks. When you use SafeMath functions, they check whether an overflow or underflow would occur before executing the operation. If an overflow or underflow is detected, the function will revert the transaction, preventing the contract from reaching an invalid state.

```solidity
pragma solidity ^0.8.0;

library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }
}
```

In this example, the add function checks whether the result of adding a and b exceeds a, and if so, it reverts the transaction.

## Deprecation of SafeMath:
SafeMath was widely used in early Ethereum smart contract development to prevent integer overflow and underflow issues. However, it has been deprecated in newer versions of Solidity, specifically starting with Solidity 0.8.0. The main reasons for deprecation include:

- **Built-in Checks:** Solidity introduced built-in overflow and underflow checks in version 0.8.0. This means that the compiler now automatically checks for potential arithmetic issues in your code and reverts transactions if problems are detected. With these built-in checks, the need for external libraries like SafeMath is reduced.
- **Gas Efficiency:** SafeMath functions can be gas-intensive, especially in cases where multiple arithmetic operations are performed in a single transaction. By using built-in checks, Solidity can optimize gas usage.
- **Code Clarity:** Removing the need for SafeMath simplifies the code and reduces the chances of errors related to the incorrect use of the library or functions.

While SafeMath is no longer necessary in newer versions of Solidity, developers should still be cautious when working with arithmetic operations in smart contracts. It's essential to understand how integer overflow and underflow vulnerabilities can impact contract security and to use appropriate checks and safeguards when dealing with numerical calculations.




