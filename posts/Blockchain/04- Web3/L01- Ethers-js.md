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


## Getting ABI and Bytecode

### Setting up solcjs compiler

Solidity Compiler (solc): The Solidity compiler, often referred to as solc, is a well-known tool in Ethereum development. It is used to compile Solidity smart contracts into bytecode that can be deployed on the Ethereum blockchain. We can use the solc command-line tool or integrate it into your development environment to compile your contracts.

1. We setup a npm project using the following command:

```bash
npm init -y
```

2. We install solc using the following command:

```bash
npm install solc@0.8.7-fixed
```

3. We run the following command to get the abi and bytecode: Here we use Simple Storage contract as an example.

```solidity
// I'm a comment!
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

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
```

Now we compile the contract using the following command:


```bash
npx solcjs --bin --abi --include-path node_modules/ --base-path . SimpleStorage.sol
```

Here the code means:
- npx solcsjs: This is the command to run the solcjs compiler.
- --bin: This is the flag to tell the compiler to output the bytecode.
- --abi: This is the flag to tell the compiler to output the abi.
- --include-path node_modules/: This is the flag to tell the compiler to include the node_modules folder.
- --base-path .: This is the flag to tell the compiler to include the current directory.
- SimpleStorage.sol: This is the name of the file to compile.


### Ganache and Networks

Ganache is a personal blockchain for rapid Ethereum and Filecoin distributed application development. We can use Ganache across the entire development cycle; enabling us to develop, deploy, and test your dApps in a safe and deterministic environment.

Ganache comes in two flavors: a UI and CLI. Ganache UI is a desktop application supporting Ethereum and Filecoin technology. Our more robust command-line tool, ganache, is available for Ethereum development. It offers:

- console.log in Solidity
- Zero-config Mainnet and testnet forking
- Fork any Ethereum network without waiting to sync
- Ethereum JSON-RPC support
- Snapshot/revert state
- Mine blocks instantly, on demand, or at an interval
- Fast-forward time
- Impersonate any account (no private keys required!)
- Listens for JSON-RPC 2.0 requests over HTTP/WebSockets
- Programmatic use in Node.js
- Pending Transactions

Steps to setup Ganache:

1. Install Ganache: We can download Ganache from the official website: https://www.trufflesuite.com/ganache. There are both desktop and command-line versions available for different platforms. Choose the one that suits your preferences.
2. Start Ganache: Once Ganache is installed, start the application. It will create a local blockchain with a set of predefined accounts and private keys. We can use these accounts for testing your smart contracts without spending real Ether.
3. Configure Networks: In Ethereum development, we often need to connect to different networks, such as the mainnet, testnets (like Ropsten, Rinkeby, or Kovan), and your local Ganache blockchain. Here's how to configure networks in your development environment:

**Local Ganache Network - RPC URL:**  Ganache will provide an RPC URL, usually http://127.0.0.1:7545 or http://localhost:7545. We can use this URL to connect your development tools (e.g., Truffle, Hardhat, web3.js) to your local Ganache network.

**Network ID:** Ganache assigns a network ID to your local blockchain. By default, it's often set to 5777, but this can vary. We may need to check the Ganache interface for the current network ID.


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

In ethers.js, a "provider" is an object that connects your application to an Ethereum node, enabling communication with the Ethereum blockchain. It abstracts the details of interacting with the node's JSON-RPC API, making it easier for developers to query blockchain data, send transactions, and interact with smart contracts. Ethers.js supports various types of providers, including JSON-RPC providers, such as JsonRpcProvider, that allow us to specify an RPC URL to connect to a remote Ethereum node.

##### JsonRpcProvider: 

JsonRpcProvider is a specific type of provider in ethers.js that connects to an Ethereum node using the JSON-RPC protocol. To create a JsonRpcProvider, us typically provide it with the RPC URL of the Ethereum node us want to connect to.

##### RPC URL: 

In ethers.js, an "RPC URL" is the URL of an Ethereum node's JSON-RPC API that us want to connect to using a provider like JsonRpcProvider. It specifies the location of the Ethereum node's API endpoint, allowing ethers.js to send requests to the node. An example of an RPC URL is the one provided by Infura for the Ethereum mainnet: 'https://mainnet.infura.io/v3/YOUR_API_KEY'.

##### Wallet Class: 

The ethers.Wallet constructor can take the following parameters:
- **privateKey (string | Uint8Array | Promise&lt;string&gt;):** This is the private key associated with the Ethereum wallet. It can be provided as a hexadecimal string, a Uint8Array containing the key bytes, or a Promise resolving to a private key string. If us want to create a wallet with a specific private key, us provide it here.
- **ethers.Signer (optional):** An optional ethers.Signer object can be passed as the second parameter. This parameter is typically used when us want to extend the capabilities of a wallet, such as creating a multisignature wallet or using a hardware wallet as the signer. It's an advanced feature and is not required for basic wallet creation.
- **Provider (optional):** We can also provide an ethers.Provider as the third parameter if us want the wallet to be associated with a specific Ethereum network or node. This allows the wallet to query blockchain data and estimate gas costs. If omitted, the wallet will use the default ethers.js JSON-RPC provider.


## Continue with the code

Now we will write a code to deploy the contract using ethers.js. We will use the following code:

We need to install the following dependencies:

```bash
npm i ethers dotenv fs-extra
```

Code - 


```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    let provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)


    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    const contract = await contractFactory.deploy();
    console.log("Contract is", contract)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```

Output - 

```bash
Contract is BaseContract {
  target: '0xA5682930C5B695A6DE175001d5D90E5e7fE5AE58',
  interface: Interface {
    fragments: [
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment]
    ],
    deploy: ConstructorFragment {
      type: 'constructor',
      inputs: [],
      payable: false,
      gas: null
    },
    fallback: null,
    receive: false
  },
  runner: Wallet {
    provider: JsonRpcProvider {},
    address: '0x68a8Cc255748132B1ebCAefEad44059F6F506681'
  },
  filters: {},
  fallback: null,
  [Symbol(_ethersInternal_contract)]: {}
}
```


##### Encrypting private keys:

Export the private key and RPC URL as environment variables is not a good practice. We can make it more secure by encrypting the private keys. For encrypting the private keys, we can use the following code:

```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
   
    const encryptedJsonKey = await wallet.encrypt(
            process.env.PRIVATE_KEY_PASSWORD,
     )
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

Output - 

```bash
{"address":"68a8cc255748132b1ebcaefead44059f6f506681","id":"5159ff37-106c-4f95-9852-a072798a7325","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"4a344fbad49597456a4ae3d377655b7e"},"ciphertext":"0e99c0349d1ef8654c40a2a8aec56731ce99547cc913e781f27adfade46dae9f","kdf":"scrypt","kdfparams":{"salt":"5089af6aea0e220e6d7511bbf02bb8d5e6742ed75666adedaa6884df86091b91","n":131072,"dklen":32,"p":1,"r":8},"mac":"53631d1afb3e5b654c49bd5c2378ffdde496d5421c953682d312b5a407b1470b"}}
```


Now we can use the following code to decrypt the private key:

```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const encryptedJsonKey = fs.readFileSync("./.encryptedKey.json", "utf8")
    const wallet = new ethers.Wallet.fromEncryptedJsonSync(
        encryptedJsonKey,
        process.env.PRIVATE_KEY_PASSWORD
    )
    wallet = await wallet.connect(provider)
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


### Continue with the code

We can see the deployment receipt using the following code:

```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {

   

    let provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying contract...")
    const contract = await contractFactory.deploy();
    // await contract.waitForDeployment();
    // console.log("Contract deployed to address:", contract.target)

    const transactionResponse = await contract.deploymentTransaction().wait(1);
    console.log(transactionResponse)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```

Now let's try to deploy contract using transaction data only:

```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {

   

    let provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const tx = {
      nonce: 18,
      gasPrice: 200000000000,
      gasLimit: 1000000,
      to: null,
      value: 0,
      data: "0x<abi_code>",
      chainId: 1337,
    }

    const signedTx = await wallet.sendTransaction(tx); // automaticaly signs tx
    await signedTx.wait(1);
    console.log(signedTx)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```

Now let's finalize the code and use the contract functions as well

Final Code -

```javascript
const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {

   

    let provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying contract...")
    const contract = await contractFactory.deploy();


    let currentFavoriteNumber = await contract.retrieve()
    console.log(`Current Favorite Number: ${currentFavoriteNumber.toString()}`) // we used toString() because it returns a BigNumber object

    console.log("Updating favorite number...")
    let transactionResponse = await contract.store("9")
    let transactionReceipt = await transactionResponse.wait(1) // wait for 1 confirmation on the blockchain
    currentFavoriteNumber = await contract.retrieve()
    console.log(`New Favorite Number: ${currentFavoriteNumber.toString()}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
```

Output - 

```bash
Deploying contract...
Current Favorite Number: 0
Updating favorite number...
New Favorite Number: 9
```


## Deploying Contract on Testnet (Rinkeby)

We will use alchemy, we created an account on alchemy and created a project. We will use the following code:
We will get the api http url and replace with rpc url in the code and also our private key.

Output was
```bash
Deploying contract...
Contract deployed to address: 0x4a5751F2ba795bc12626C13083b878b86633372a
Current Favorite Number: 0
Updating favorite number...
New Favorite Number: 9
```