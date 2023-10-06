---
title: "Data Types in Solidity"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Boolean

A boolean value can be either true or false. In Solidity, the boolean type is called bool and can be used to represent the result of a comparison or logical operation. For example, the following code snippet shows how to declare a boolean variable and assign it a value:

```solidity
bool myBool = true;
```

## Integer

Signed and unsigned integers of various sizes. Keywords uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits) and int8 to int256. uint and int are aliases for uint256 and int256, respectively.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Test {
    uint256 myUint = 1;
    int256 myInt = -1;
    uint8 myUint8 = 255;
}
```

## Address

An address is a 20-byte value that represents an account on the Ethereum network. It can be used to send and receive Ether (ETH), the native cryptocurrency of the Ethereum network. The address type is denoted by the keyword address and can be used to declare variables that store addresses. For example, the following code snippet shows how to declare an address variable and assign it a value:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Test {
    address myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
}
```

address payable is a special type of address that can be used to send and receive Ether. It is denoted by the keyword address payable and can be used to declare variables that store addresses. For example, the following code snippet shows how to declare an address payable variable and assign it a value:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Test {
    address payable public x = payable(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
    address public myAddress = address(this);

    function transferIfBalanceSufficient() public {
        if (x.balance >= 10 && myAddress.balance >= 10) {
            x.transfer(10);
        }
    }
}
```

## Bytes

String literals are written with either double or single-quotes ("foo" or 'bar'), and they can also be split into multiple consecutive parts ("foo" "bar" is equivalent to "foobar") which can be helpful when dealing with long strings. They do not imply trailing zeroes as in C; "foo" represents three bytes, not four. As with integer literals, their type can vary, but they are implicitly convertible to bytes1, …, bytes32, if they fit, to bytes and to string. For example, with bytes32 samevar = "stringliteral" the string literal is interpreted in its raw byte form when assigned to a bytes32 type.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Test {
    string a = unicode"Hello 😃";
    bytes9 b = "fioheoigf";
}
```

## Structs

Struct types are used to represent a record. Suppose you want to keep track of your books in a library. You might want to track the following attributes about each book − Title, Author, Subject, Book ID

To define a Struct, you must use the struct keyword. The struct keyword defines a new data type, with more than one member. The format of the struct statement is as follows −

struct struct_name { 
   type1 type_name_1;
   type2 type_name_2;
   type3 type_name_3;
}

Example - 

```solidity
pragma solidity ^0.5.0;

contract test {
   struct Book { 
      string title;
      string author;
      uint book_id;
   }
   Book book;

   function setBook() public {
      book = Book('Learn Java', 'TP', 1);
   }
   function getBookId() public view returns (uint) {
      return book.book_id;
   }
}
```

## Arrays

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. To declare an array of fixed size in Solidity, the programmer specifies the type of the elements and the number of elements required by an array as follows −

```solidity
type[] arrayName;
```

This is called a single-dimension array. The arraySize must be an integer constant greater than zero and type can be any valid Solidity data type. For example, to declare a 10-element array called balance of type uint.


#### Initialization of Arrays

```solidity
uint[5] memory myArray = [1,2,3,4,5];
```

#### Accessing Array Elements

```solidity
uint[5] memory myArray = [1,2,3,4,5];
myArray[0] = 10;
```

#### Dynamic Arrays

```solidity
unit size = 2;
uint[] memory myArray = new uint[](size);
```

#### Member Functions of Arrays

- push() - Adds an element at the end of the array
- pop() - Removes an element from the end of the array
- length - Returns the number of elements in the array

#### Slicing Arrays

```solidity
uint[5] memory myArray = [1,2,3,4,5];
uint[] memory sliced = myArray[1:3];
```

## Mappings
Mapping is a reference type as arrays and structs. Following is the syntax to declare a mapping type.

mapping(_KeyType => _ValueType) where
- _KeyType − can be any built-in types plus bytes and string. No reference type or complex objects are allowed.
- _ValueType − can be any type.

Example - 

```solidity
pragma solidity ^0.5.0;

contract LedgerBalance {
   mapping(address => uint) public balances;

   function updateBalance(uint newBalance) public {
      balances[msg.sender] = newBalance;
   }
}
contract Updater {
   function updateBalance() public returns (uint) {
      LedgerBalance ledgerBalance = new LedgerBalance();
      ledgerBalance.updateBalance(10);
      return ledgerBalance.balances(address(this));
   }
}
```

### Difference between Array and Mapping
| Array | Mapping |
| --- | --- |
| Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. | Mapping is a reference type as arrays and structs. |
| Arrays are always of fixed length. | Mappings are of dynamic length. |
| Arrays are always of same data type. | Mappings can be of different data types. |
| Arrays are stored in contiguous memory locations. | Mappings are stored in hash tables. |
| Arrays are passed by value. | Mappings are passed by reference. |
| Arrays are not iterable. | Mappings are iterable. |

