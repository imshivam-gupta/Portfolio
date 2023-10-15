---
title: "Introduction to Data Structures and Algorithms"
subtitle: "What will this cover"
date: "2020-12-27"
---


## Topics to be searched

- eip
- erc (bep,pep)
we can import openzeppinl code and inherit that contract

[Link](https://eips.ethereum.org/EIPS/eip-20)


Rest everything is same as previous contract

# Fungible Tokens

Fungible tokens are a type of cryptocurrency or digital asset that is interchangeable with other tokens of the same type and value. In other words, each unit of a fungible token is identical in value and can be exchanged on a one-to-one basis with any other unit of the same token without any differences or distinctions. This interchangeability is a fundamental characteristic of fungible tokens and is similar to how physical currencies like dollars or euros work.

## Characteristics of Fungible Tokens

1. **Interchangeability:** Fungible tokens are interchangeable with other tokens of the same type and value. For example, one unit of a fungible token can be exchanged for another unit of the same token without any differences or distinctions.
2. **Divisibility:** Fungible tokens are divisible into smaller units. For example, one unit of a fungible token can be divided into 100 smaller units, and each smaller unit is still interchangeable with other units of the same token.
3. **Indestructibility:** Fungible tokens are indestructible. For example, one unit of a fungible token cannot be destroyed or damaged in any way that would make it non-interchangeable with other units of the same token.
4. **Uniformity:** Fungible tokens are uniform in value. For example, one unit of a fungible token is always worth the same as any other unit of the same token.

## Examples of Fungible Tokens

1. **Cryptocurrencies:** Cryptocurrencies like Bitcoin (BTC) and Ether (ETH) are fungible tokens. Each unit of BTC or ETH is interchangeable with any other unit of the same token.
2. **Stablecoins:** Stablecoins like Tether (USDT) and USD Coin (USDC) are fungible tokens. Each unit of USDT or USDC is interchangeable with any other unit of the same token.
3. **Security Tokens:** Security tokens like Polymath (POLY) and Swarm (SWM) are fungible tokens. Each unit of POLY or SWM is interchangeable with any other unit of the same token.

## Tokens on Ethereum

Ethereum is a blockchain platform that enables the creation of fungible and non-fungible tokens. The Ethereum blockchain is a decentralized, open-source network that allows developers to build and deploy smart contracts and decentralized applications (dApps). Ethereum is the most popular platform for creating tokens, with thousands of tokens built on top of the Ethereum blockchain. These tokens can represent a wide range of assets, including cryptocurrencies, stablecoins, security tokens, and non-fungible tokens (NFTs).

### ERC-20 Tokens

The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) as another Token. For example, an ERC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens. 

### Functionalities of ERC-20 Tokens
- Transfer Tokens from one account to another.
- Get the current Token balance of an account.
- Get the total supply of the Token available on the network.
- Approve and transferFrom allows a Token holder to delegate the transfer of Tokens to another account.


### Methods of ERC-20 Tokens
```solidity
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```

### Events of ERC-20 Tokens
```solidity
event Transfer(address indexed _from, address indexed _to, uint256 _value)
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```


### Example of ERC-20 Token Contract
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name = "Solidity by Example";
    string public symbol = "SOLBYEX";
    uint8 public decimals = 18;

    function transfer(address recipient, uint amount) external returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool) {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}
```

### ERC-20 using OpenZeppelin

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }
}
```

