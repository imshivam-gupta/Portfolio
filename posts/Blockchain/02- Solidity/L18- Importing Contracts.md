---
title: "Ethereum Virtual Machine"
subtitle: "Overview of Ethereum Virtual Machine"
date: "2023-09-26"
---
# Importing Contracts into other Contracts

In Ethereum and Solidity, a contract can interact with other contracts deployed on the blockchain. To do this, we need to import the contract's ABI (Application Binary Interface) and address into your contract. Here's an explanation of how this works:

**Contract Address:** Every smart contract deployed on the Ethereum blockchain has a unique address. This address is used to identify and interact with the contract. It can ve thought of as the contract's location on the blockchain. When you want to interact with another contract, you need to know its address so that you can send transactions to it.

**Contract ABI:** The ABI is a JSON representation of a contract's interface. It defines the functions and their inputs and outputs that the contract exposes. It's like a blueprint that tells your contract how to interact with another contract. Solidity uses the ABI to encode function calls and decode their results when communicating with other contracts.

```solidity
// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.7;

import "./SimpleStorage.sol"; 

contract StorageFactory {
  
    SimpleStorage[] public simpleStorageArray;
  
    function createSimpleStorageContract() public {
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }
  
    function sfStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        // Address 
        // ABI 
        // SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).store(_simpleStorageNumber);
        simpleStorageArray[_simpleStorageIndex].store(_simpleStorageNumber);
    }
  
    function sfGet(uint256 _simpleStorageIndex) public view returns (uint256) {
        // return SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).retrieve();
        return simpleStorageArray[_simpleStorageIndex].retrieve();
    }
}
```

## Inheritance and Overriding

It is a way of extending the functionality of a program, used to separate the code, reduces the dependency, and increases the re-usability of the existing code. Solidity supports inheritance between smart contracts, where multiple contracts can be inherited into a single contract. The contract from which other contracts inherit features is known as a base contract, while the contract which inherits the features is called a derived contract. To create a derived (or inheriting) contract, simply use the is keyword. Simply, they are referred to as parent-child contracts. The scope of inheritance in Solidity is limited to public and internal modifiers only.

- A derived contract can access all non-private members including state variables and internal methods. But using this is not allowed.
- Function overriding is allowed provided function signature remains the same. In case of the difference of output parameters, the compilation will fail.
- We can call a super contract’s function using a super keyword or using a super contract name.
- In the case of multiple inheritances, function calls using super gives preference to most derived contracts.

### Types of Inheritance

There are four types of inheritance in Solidity:

**Single Inheritance:** In Single or single level inheritance the functions and variables of one base contract are inherited to only one derived contract.

Example: In the below example, the contract parent is inherited by the contract child, to demonstrate Single Inheritance.

```solidity
// Solidity program to
// demonstrate
// Single Inheritance
pragma solidity >=0.4.22 <0.6.0;

// Defining contract
contract parent{

	// Declaring internal
	// state variable
	uint internal sum;

	// Defining external function
	// to set value of internal
	// state variable sum
	function setValue() external {
		uint a = 10;
		uint b = 20;
		sum = a + b;
	}
}

// Defining child contract
contract child is parent{

	// Defining external function
	// to return value of
	// internal state variable sum
	function getValue(
	) external view returns(uint) {
		return sum;
	}
}

contract caller {

	child cc = new child();
	// setValue and getValue functions
	function testInheritance(
	) public returns (uint) {
		cc.setValue();
		return cc.getValue();
	}
}
```

**Multi-level Inheritance:** It is very similar to single inheritance, but the difference is that it has levels of the relationship between the parent and the child. The child contract derived from a parent also acts as a parent for the contract which is derived from it.

**Hierarchical Inheritance:** In this type of inheritance, more than one contract is inherited from a single contract.

**Multiple Inheritance:** In this type of inheritance, more than one contract is inherited from more than one contract.

## Function Overriding in Solidity

Solidity lets developers change how a function in the parent contract is implemented in the derived class. This is known as  function overriding.

The function in the parent contract needs to be declared with the keyword **virtual** to indicate that it can be overridden in the deriving contract.

In addition, the overriding function needs to have the keyword  **override** . It is possible that you may want your overriding function to be overridden by another function. This is acceptable and can be achieved by using the **virtual** keyword as before. Here is an example demonstrating function overriding in Solidity:

Example:

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract SimpleStorage {

    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }
    
    function retrieve() public view returns (uint256){
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}


contract ExtraStorage is SimpleStorage {
    function store(uint256 _favoriteNumber) public override {
        favoriteNumber = _favoriteNumber + 5;
    }
}
```