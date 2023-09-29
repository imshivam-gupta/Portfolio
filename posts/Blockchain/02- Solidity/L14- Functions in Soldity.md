---
title: "Introduction to Data Structures and Algorithms"
subtitle: "What will this cover"
date: "2020-12-27"
---

# Functions

Functions are the executable units of code. Functions are usually defined inside a contract, but they can also be defined outside of contracts. Example - 

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.1 <0.9.0;

contract SimpleAuction {
    function bid() public payable { // Function
        // ...
    }
}

// Helper function defined outside of a contract
function helper(uint x) pure returns (uint) {
    return x * 2;
}
```

## Function Definition
Before we use a function, we need to define it. The most common way to define a function in Solidity is by using the function keyword, followed by a unique function name, a list of parameters (that might be empty), and a statement block surrounded by curly braces.

Syntax
The basic syntax is shown here.

```solidity
function function-name(parameter-list) scope returns() {
   //statements
}
```

Example
Try the following example. It defines a function called getResult that takes no parameters −

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public view returns(uint){
      uint a = 1; // local variable
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```

## Function Call
To invoke a function somewhere later in the Contract, we simply need to write the name of that function as shown in the following code.

```solidity
pragma solidity ^0.5.0;

contract SolidityTest {   
   constructor() public{       
   }

   function getResult() public view returns(string memory){
      uint a = 1; 
      uint b = 2;
      uint result = a + b;
      return integerToString(result); 
   }

   function integerToString(uint _i) internal pure returns (string memory) {
      
      if (_i == 0) {
         return "0";
      }

      uint j = _i;
      uint len;
      
      while (j != 0) {
         len++;
         j /= 10;
      }
      bytes memory bstr = new bytes(len);
      uint k = len - 1;
      
      while (_i != 0) {
         bstr[k--] = byte(uint8(48 + _i % 10));
         _i /= 10;
      }
      return string(bstr);//access local variable
   }
}
```

## Function Parameters

There is a facility to pass different parameters while calling a function. These passed parameters can be captured inside the function and any manipulation can be done over those parameters. A function can take multiple parameters separated by comma as shown in previous example.


## return Statement

A Solidity function can have an optional return statement. This is required if we want to return a value from a function. This statement should be the last statement in a function. As in above example, we are using uint2str function to return a string. In Solidity, a function can return multiple values as well.

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public view returns(uint product, uint sum){
      uint a = 1; // local variable
      uint b = 2;
      product = a * b;
      sum = a + b;
  
      //alternative return statement to return 
      //multiple values
      //return(a*b, a+b);
   }
}
```

## Function Modifiers

Solidity provides a way to validate inputs before executing a function. This can be done by using function modifiers. Modifiers are code that can be run before and / or after a function call. Modifiers can be used to -

- Restrict access
- Validate inputs
- Guard against reentrancy hack

Example

```solidity
pragma solidity ^0.5.0;

contract Owner {
   address owner;
   constructor() public {
      owner = msg.sender;
   }
   modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
   modifier costs(uint price) {
      if (msg.value >= price) {
         _;
      }
   }
}

contract Register is Owner {
   mapping (address => bool) registeredAddresses;
   uint price;
   constructor(uint initialPrice) public { price = initialPrice; }
   
   function register() public payable costs(price) {
      registeredAddresses[msg.sender] = true;
   }

   function changePrice(uint _price) public onlyOwner {
      price = _price;
   }
}
```

## View Functions

View functions are used to read data from the blockchain. They do not modify the state of the blockchain. They do not cost any gas to execute. They are free to execute. They are also called as constant functions. Getter method are by default view functions. The following statements if present in the function are considered modifying the state and compiler will throw warning in such cases.

- Modifying state variables.
- Emitting events.
- Creating other contracts.
- Using selfdestruct.
- Sending Ether via calls.
- Calling any function which is not marked view or pure.
- Using low-level calls.
- Using inline assembly containing certain opcodes.

Example

```solidity
pragma solidity ^0.5.0;

contract Test {
   function getResult() public view returns(uint){
      uint a = 1; // local variable
      uint b = 2;
      uint result = a + b;
      return result; 
   }
}
```


## Pure Functions

Pure functions ensure that they not read or modify the state. A function can be declared as pure. The following statements if present in the function are considered reading the state and compiler will throw warning in such cases - 
- Reading state variables.
- Accessing address(this).balance or (address).balance.
- Accessing any of the special variable of block, tx, msg (msg.sig and msg.data can be read).
- Calling any function not marked pure.
- Using inline assembly that contains certain opcodes.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Test {
    int a = 3;
    int b= 5;

    function getSum() public pure returns(int){
        return 2;
    }
}
```


## Function Visibility

Solidity knows two kinds of function calls: external ones that do create an actual EVM message call and internal ones that do not. Furthermore, internal functions can be made inaccessible to derived contracts. This gives rise to four types of visibility for functions.

1. external - External functions are part of the contract interface, which means they can be called from other contracts and via transactions. An external function f cannot be called internally (i.e. f() does not work, but this.f() works).
2. public - Public functions are part of the contract interface and can be either called internally or via message calls.
3. internal - Internal functions can only be accessed from within the current contract or contracts deriving from it. They cannot be accessed externally. Since they are not exposed to the outside through the contract’s ABI, they can take parameters of internal types like mappings or storage references.
4. private - Private functions are only visible for the contract they are defined in and not in derived contracts.

