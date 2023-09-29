---
title: "Understanding Ethers.js"
subtitle: "This post is about understanding ethers.js"
date: "2023-09-26"
---

# Setting up Local Development Environment

- Install Node.js
- Install Visual Studio Code
- Install Git
- Install MetaMask
- Install Ganache


## Setting up solidity compiler

Solidity Compiler (solc): The Solidity compiler, often referred to as solc, is a well-known tool in Ethereum development. It is used to compile Solidity smart contracts into bytecode that can be deployed on the Ethereum blockchain. You can use the solc command-line tool or integrate it into your development environment to compile your contracts.

Truffle Suite: Truffle is a popular development framework for Ethereum that provides a suite of tools, including a development environment, testing framework, and asset pipeline. Truffle uses the Solidity compiler (solc) under the hood to compile contracts and offers features for managing contract artifacts and migrations.

First install solcjs using npm:

```bash
npm install -g solc
```

Then run the following command to compile the contract:

```bash
solcjs --bin --include-path node_modules/ --base-path . MainContract.sol
```

Now after this we can convert the sol file to abi and bytecode using solcjs



## Ganache and Networks

Setting up Ganache and configuring networks, including an RPC (Remote Procedure Call) URL, is a common task in Ethereum development for creating a local development environment. Ganache is a popular tool for creating a local blockchain for testing and development purposes.

1. Install Ganache:
You can download Ganache from the official website: https://www.trufflesuite.com/ganache. There are both desktop and command-line versions available for different platforms. Choose the one that suits your preferences.
2. Start Ganache:
Once Ganache is installed, start the application. It will create a local blockchain with a set of predefined accounts and private keys. You can use these accounts for testing your smart contracts without spending real Ether.
3. Configure Networks:
In Ethereum development, you often need to connect to different networks, such as the mainnet, testnets (like Ropsten, Rinkeby, or Kovan), and your local Ganache blockchain. Here's how to configure networks in your development environment:

**Local Ganache Network - RPC URL:**  Ganache will provide an RPC URL, usually http://127.0.0.1:7545 or http://localhost:7545. You can use this URL to connect your development tools (e.g., Truffle, Hardhat, web3.js) to your local Ganache network.

**Network ID:** Ganache assigns a network ID to your local blockchain. By default, it's often set to 5777, but this can vary. You may need to check the Ganache interface for the current network ID.


## Understanding Ethers.js

Web3.js is one of the earliest and most widely used JavaScript libraries for Ethereum development. It serves as a bridge between decentralized applications (DApps) and the Ethereum blockchain. Ethers.js is a popular JavaScript library for interacting with the Ethereum blockchain. It provides a set of powerful and developer-friendly tools and APIs for Ethereum development. Ethers.js is a complete rewrite of Web3.js, and it's designed to be more modular and easier to use.

| Feature | 	ethers.js |	web3.js |
| --- | --- | --- |
| Development Philosophy | 	Focused on simplicity, type safety, and usability	| Older library with a broader range of features| 
| Promises vs. Callbacks | 	Uses Promises extensively for asynchronous operations	| Historically used callbacks, supports Promises| 
| Smart Contract Interaction | 	High-level, type-safe API for smart contract interaction| 	Provides functions for contract deployment and interaction| 
| Transaction Management | 	Simplified transaction handling with built-in gas estimation	| Supports transaction creation and gas estimation| 
| Account Management| 	Provides tools for working with Ethereum wallets and keys	| Offers account management, including private key handling| 
| Blockchain Data Access| 	Access to blockchain data, including balances, transactions, and contract state	| Allows querying blockchain data, transaction history, and events| 
| Etherscan Integration	| Built-in support for Etherscan integration for block explorers| 	Supports Etherscan and other external services| 
| ENS (Ethereum Name Service)	| Provides ENS integration for working with human-readable Ethereum addresses	| ENS support for human-readable addresses| 
| Event Handling| 	Offers event listeners for monitoring smart contract events	| Provides event handling capabilities for DApp development| 
| Network Management	| Supports connections to different Ethereum networks	| Allows connecting to various Ethereum networks and custom providers| 
| Development | Community	Growing community with an active development team| 	Mature and well-established library with a large user base| 
| Documentation| 	Well-documented with detailed guides and examples| 	Extensive documentation and tutorials available| 
| Popularity	| Increasing in popularity among Ethereum developers| 	Historically widely used and widely recognized| 
| Usage in New Projects	| Preferred by developers who value type safety and simplicity	| Often used in existing projects and legacy codebases| 


### Terms in ethers.js

**Provider:** 

In ethers.js, a "provider" is an object that connects your application to an Ethereum node, enabling communication with the Ethereum blockchain. It abstracts the details of interacting with the node's JSON-RPC API, making it easier for developers to query blockchain data, send transactions, and interact with smart contracts. Ethers.js supports various types of providers, including JSON-RPC providers, such as JsonRpcProvider, that allow you to specify an RPC URL to connect to a remote Ethereum node.

##### JsonRpcProvider: 

JsonRpcProvider is a specific type of provider in ethers.js that connects to an Ethereum node using the JSON-RPC protocol. To create a JsonRpcProvider, you typically provide it with the RPC URL of the Ethereum node you want to connect to.

##### RPC URL: 

In ethers.js, an "RPC URL" is the URL of an Ethereum node's JSON-RPC API that you want to connect to using a provider like JsonRpcProvider. It specifies the location of the Ethereum node's API endpoint, allowing ethers.js to send requests to the node. An example of an RPC URL is the one provided by Infura for the Ethereum mainnet: 'https://mainnet.infura.io/v3/YOUR_API_KEY'.

##### Wallet Class: 

The ethers.Wallet constructor can take the following parameters:
- **privateKey (string | Uint8Array | Promise&lt;string&gt;):** This is the private key associated with the Ethereum wallet. It can be provided as a hexadecimal string, a Uint8Array containing the key bytes, or a Promise resolving to a private key string. If you want to create a wallet with a specific private key, you provide it here.
- **ethers.Signer (optional):** An optional ethers.Signer object can be passed as the second parameter. This parameter is typically used when you want to extend the capabilities of a wallet, such as creating a multisignature wallet or using a hardware wallet as the signer. It's an advanced feature and is not required for basic wallet creation.
- **Provider (optional):** You can also provide an ethers.Provider as the third parameter if you want the wallet to be associated with a specific Ethereum network or node. This allows the wallet to query blockchain data and estimate gas costs. If omitted, the wallet will use the default ethers.js JSON-RPC provider.


```javascript
const ethers = require("ethers")
// const solc = require("solc")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    let provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    const contract = await contractFactory.deploy()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```


##### Encrypting private keys:

We can encrypt the private keys using the following code:

```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const encryptedJsonKey = await wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD)
    console.log(encryptedJsonKey)
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```

#### Transaction Response Object

A TransactionResponse includes all properties of a Transaction as well as several properties that are useful once it has been mined.

- **transactionResponse.blockNumber:** This is the block number of the block that the transaction was mined in. If the transaction has not been mined yet, this will be null.
- **transactionResponse.confirmations:** This is the number of confirmations the transaction has received. If the transaction has not been mined yet, this will be 0.
- **transactionResponse.blockHash:** This is the hash of the block that the transaction was mined in. If the transaction has not been mined yet, this will be null.
- **transactionResponse.timestamp:** This is the timestamp of the block that the transaction was mined in. If the transaction has not been mined yet, this will be null.
- **transactionResponse.wait:** Resolves to the TransactionReceipt once the transaction has been included in the chain for confirms blocks. If confirms is 0, and the transaction has not been mined, null is returned. If the transaction execution failed (i.e. the receipt status is 0), a CALL_EXCEPTION error will be rejected.


#### Methods of contract after deployment
- **contract.address:** This is the address of the contract on the blockchain. It's a hexadecimal string.
- **contract.resolvedAddress:** This is a promise that will resolve to the address the Contract object is attached to. If an Address was provided to the constructor, it will be equal to this; if an ENS name was provided, this will be the resolved address.
- **contract.deployTransaction:** This is a TransactionResponse object that represents the transaction that created the contract. It includes all properties of a Transaction as well as several properties that are useful once it has been mined.
- **contract.interface:** This is the Interface object that was used to create the Contract object.
- **contract.provider:** This is the Provider object that was used to create the Contract object.
- **contract.signer:** This is the Signer object that was used to create the Contract object.
- **contract.on(event , listener):** Subscribe to event calling listener when the event occurs.
- **contract.off(event, listener):** Unsubscribe listener to event.



Final Code -

```javascript
const ethers = require("ethers")
// const solc = require("solc")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    let provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    const contract = await contractFactory.deploy()
   
    const deploymentReceipt = await contract.deployTransaction.wait(1)
    console.log(`Contract deployed to ${contract.address}`)
    
    console.log("Here is the transaction:")
    console.log(contract.deployTransaction)
    
    console.log("Here is the receipt:")
    console.log(deploymentReceipt)

    const nonce = await wallet.getTransactionCount()
    tx = {
      nonce: nonce,
      gasPrice: 100000000000,
      gasLimit: 1000000,
      to: null,
      value: 0,
      data: "...data..in..enrypted.form",
      chainId: 1337,
    }
    

    // There is also a v, r, and s component of the transaction that Ethers will handle for us.
    // It's these three components that make up the cryptographic signature.
    // We won't go into this, because it's a lot of math.

    console.log("Let's deploy another! Please wait...")
    let resp = await wallet.signTransaction(tx)
    const sentTxResponse = await wallet.sendTransaction(tx);
    console.log(resp)

    let currentFavoriteNumber = await contract.retrieve()
    console.log(`Current Favorite Number: ${currentFavoriteNumber}`)
    console.log("Updating favorite number...")
    let transactionResponse = await contract.store(7)
    let transactionReceipt = await transactionResponse.wait()
    currentFavoriteNumber = await contract.retrieve()
    console.log(`New Favorite Number: ${currentFavoriteNumber}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```

Solidity Code -

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

pragma solidity ^0.8.0;


contract SimpleStorage {
    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
```



