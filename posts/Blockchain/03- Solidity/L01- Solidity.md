---
title: "Solidity"
subtitle: "What will this cover"
date: "2020-12-27"
---



Solidity is a high-level programming language specifically designed for writing smart contracts on blockchain platforms, with Ethereum being one of the most prominent platforms that utilize Solidity. 

## Key characteristics of Solidity:

- **Smart Contract Development:** Solidity is primarily used for creating smart contracts that can be deployed on blockchain networks, allowing developers to define the rules and logic of decentralized applications (DApps).
- **Ethereum Compatibility:** Solidity is most commonly associated with Ethereum, but it has also been adapted for other blockchain platforms. Ethereum's native cryptocurrency, Ether (ETH), is used to pay for transaction fees and smart contract execution in the Ethereum network, making it a popular choice for DApp development.
- **Security and Trust:** Solidity is designed with security in mind and includes features and best practices to help developers write secure smart contracts. However, the complexity of smart contracts and the immutability of the blockchain make it crucial for developers to be diligent in their coding practices.
- **Turing Complete:** Solidity is a Turing-complete language, meaning it can handle complex computational tasks and logic, making it suitable for a wide range of applications beyond simple transactions.

## Writing a Smart Contract in Solidity

The following is a simple example of a smart contract written in Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract DataTypes{
    // boolean, uint,int, address, bytes, string, mapping, struct, enum, array
    bool myBool = true;
    uint256 myUint = 1;
    string myString = "Hello World!";
    uint8 myUint8 = 255;
    address myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    bytes32 myBytes32 = "Hello World!";
}
```

##### License Identifier

// SPDX-License-Identifier: MIT

This line is a comment that specifies the license under which the smart contract is released. SPDX-License-Identifier is a standard identifier used in Solidity source code to specify the license that applies to the code. In this case, it indicates that the code is released under the MIT License.

The MIT License is a permissive open-source license that allows users to use, modify, and distribute the code for both commercial and non-commercial purposes, as long as they include the original copyright notice and disclaimers in their derivative works.


##### Solidity Version Pragma

pragma solidity ^0.8.8;

This line is a Solidity version pragma. It specifies the minimum and maximum version of the Solidity compiler that is compatible with the contract. Let's break down the components of this pragma:

pragma solidity: This part indicates that you're specifying the Solidity version for the contract.
^0.8.8: This specifies a version range. In this case, it means that the contract can be compiled with any Solidity compiler version starting from 0.8.8 up to, but not including, the next major version. This allows developers to use compiler versions that are backward-compatible with 0.8.8 but potentially not forward-compatible with future major releases.