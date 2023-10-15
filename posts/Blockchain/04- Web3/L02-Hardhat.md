---
title: "Understanding Hardhat"
subtitle: "This post is about understanding hardhat"
date: "2023-09-26"
---


Hardhat provides a streamlined and modern development environment out of the box. It includes built-in tasks for compiling contracts, running tests, and deploying contracts to various Ethereum networks. Setting up a development environment with Hardhat is typically faster and more straightforward.
- Run Solidity locally -Easily deploy your contracts, run tests and debug Solidity code without dealing with live environments. Hardhat Network is a local Ethereum network designed for development.
- Debugging-first - Hardhat is the best choice for Solidity debugging. You get Solidity stack traces, console.log and explicit error messages when transactions fail

Hardhat comes built-in with Hardhat Network, a local Ethereum network node designed for development. It allows you to deploy your contracts, run your tests and debug your code, all within the confines of your local machine.


## Setting up Environment

Most Ethereum libraries and tools are written in JavaScript, and so is Hardhat. 

- Install Node.js and npm
- Open a terminal and run npm install --save-dev hardhat
- In the same terminal run npx hardhat
- Choose Create an simple project using JavaScript

We can use variety of options in hardhat -
- npx hardhat compile: Compiles the entire project, building all artifacts.


In scripts folder we see deploy.js file which is used to deploy contracts to the network. We can modify this file to deploy our contracts to the network. We have used ethers.js library to interact with the network and created a similar script. Now let's modify the deploy.js file to deploy our contract to the network.

```javascript
const { ethers } = require("hardhat");

async function main(){
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();
  
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
```

Now we run the given command

```bash
npx hardhat run scripts/deploy.js 
```

We didn't specify the network so it will deploy the contract to the default network which is hardhat. We can see the transaction hash and the address of the contract in the console. We can also see the contract in the artifacts folder.  Now let's modify hardhat.config.js file to deploy the contract to the Rinkeby test netwrok.

Firstly we write defaultNetwork: "Hardhat" to specify the default network. 

```javascript
    require("@nomicfoundation/hardhat-toolbox");

    /** @type import('hardhat/config').HardhatUserConfig */
    module.exports = {
    defaultNetwork: "hardhat",
    solidity: "0.8.19",
    }; 
```

In terminal we specify the network using the --network flag. 

```bash
npx hardhat run scripts/deploy.js --network hardhat
```

Now let's modify config file to add rinkeby network. We add the following code to the config file.

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: "0.8.19",
};

```
bash

```bash
npx hardhat run scripts/deploy.js --network rinkeby
```


Now let's add etherscan plugin to the config file. We add the following code to the config file.

```javascript
require("@nomicfoundation/hardhat-toolbox");
@nomiclabs/hardhat-etherscan"
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;

console.log("SEPOLIA_RPC_URL: ", SEPOLIA_RPC_URL);
console.log("PRIVATE_KEY: ", process.env.PRIVATE_KEY);


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: "0.8.19",
};
```

We install the plugin using the following command.

```bash
npm i --dev @nomiclabs/hardhat-etherscan
```

Now we need to add the API key for etherscan. We add the following code to the config file.

Code - 

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
```

Now let's create own verification script in deploy.js file. We add the following code to the deploy.js file also we will add code to retrueve the favourite number and update it

> We modified network name from rinkeby to sepolia

Config file - 

```javascript
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan"); // Commented out BECAUSE WE HAD TOOLBOX
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
```

```javascript
const { ethers, network } = require("hardhat");

async function main(){
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await SimpleStorage.deploy();
  console.log("Waiting for contract to deployed...");

  console.log("Contract address");
  console.log(simpleStorage.target);

  
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await simpleStorage.deploymentTransaction().wait(6);
    await verify(simpleStorage.target, [])
  }
  
  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}

async function verify(contractAddress,args){
  console.log("Verifying Contract");
  try {
    await run("verify:verify",{
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if(error.message.includes("Contract source code already verified"))
      console.log("Contract already verified");
    else
      console.log(error);
  }
 
}


main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
```

Output - 

```bash
Deploying SimpleStorage...
Waiting for contract to deployed...
Contract address
0x4d7EC45cC0b43247805cc701a5F857F7052bd237
Waiting for block confirmations...
Verifying Contract
Successfully submitted source code for contract
contracts/SimpleStorage.sol:SimpleStorage at 0x4d7EC45cC0b43247805cc701a5F857F7052bd237
for verification on the block explorer. Waiting for verification result...

Successfully verified contract SimpleStorage on the block explorer.
https://sepolia.etherscan.io/address/0x4d7EC45cC0b43247805cc701a5F857F7052bd237#code
Updated Value is: 7
```

Now let's create tasks to retrive block number we creat a floder tasks and create a file blockNumber.js and add the following code to it.

```javascript
const { task } = require("hardhat/config");

task("blockNumber", "Prints the current block number", async (_, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log("Current block number: ", blockNumber);
});

module.exports = {};
```

In the config file we add the following code to add the task to the config file.

```javascript
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/blockNumber");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
```

Bash

```bash
PS C:\Users\shiva\OneDrive\Desktop\blockchain_proj_2> npx hardhat blockNumber
Current block number:  0
PS C:\Users\shiva\OneDrive\Desktop\blockchain_proj_2> npx hardhat blockNumber --network sepolia
Current block number:  4442015
```

Now lets add local network to the config file. We add the following code to the config file.

```javascript
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/blockNumber");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
    }
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
```


Now let's try hardhat console. We run the following command in the terminal.

```bash
npx hardhat console --network localhost
```

Now we can write code like ->

```bash
> const Simp = await ethers.getContractFactory("SimpleStorage")
undefined
> const x= await Simp.deploy()
undefined
> x.target
'0x861f67D7A50De4c8dDAEB5De4A9B1cB81b05db5a'
> x.deploymentTransaction()
ContractTransactionResponse {
  provider: HardhatEthersProvider {
    _hardhatProvider: LazyInitializationProviderAdapter {
      _providerFactory: [AsyncFunction (anonymous)],
      _emitter: [EventEmitter],
      _initializingPromise: [Promise],
      provider: [BackwardsCompatibilityProviderAdapter]
    },
    _networkName: 'localhost',
    _blockListeners: [],
    _transactionHashListeners: Map(0) {},
    _eventListeners: []
  },
  blockNumber: 5,
  ...
```



Now let's do testing. We create a file test-deploy.js in the test folder and add the following code to it.

- First we create a describe function which takes two arguments, a string and a function. The string is the name of the test suite and the function is the test suite itself.
- We can add inside the callback function as many it functions as we want. Each it function is a test case.
- Beforeeach function is run before each test case.
- We can use assert to check if the value is correct or not.
- it() is a test case. We can have as many test cases as we want in a test suite.
- We can add nested describe() functions to create nested test suites. 
- We install chai library using npm i chai to assert the values.


Code

```javascript
const { assert } = require("chai");
const {ethers} = require("hardhat");

describe("SimpleStorage", function () {

  let simpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should start with a value of 0", async function () {
    assert.equal(await simpleStorage.retrieve(), "0");
  });

});
```


Now let's run the test using the following command.

```bash
npx hardhat test
```

We see that the test is passed. Now let's modify the test to check if the value is updated or not. We add the following code to the test file.

```javascript
const { assert } = require("chai");
const {ethers} = require("hardhat");

describe("SimpleStorage", function () {

  let simpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should start with a value of 0", async function () {
    assert.equal(await simpleStorage.retrieve(), "0");
  });

  it("Should update when store is called", async function () {
    const txresp = await simpleStorage.store(7);
    await txresp.wait(1);
    const currFav = await simpleStorage.retrieve();
    console.log("Current favorite number: ", currFav.toString());
    assert.equal(currFav.toString(), "7");
  })

});
```

Now lets check gas usage. We will install gas reporter using the following command.

```bash
npm i hardhat-gas-reporter --dev
```

We add the following code to the config file.

```javascript
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/blockNumber");

require("hardhat-gas-reporter")

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
    }
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  }
};
```

For usd currency we need to get api from coinmarketcap
 

 And we see the report as
```bash
·----------------------------|----------------------------|-------------|-----------------------------·
|    Solc version: 0.8.19    ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
·····························|····························|·············|······························
|  Methods                   ·                6 gwei/gas                ·       1638.93 usd/eth       │
··················|··········|··············|·············|·············|···············|··············
|  Contract       ·  Method  ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··················|··········|··············|·············|·············|···············|··············
|  SimpleStorage  ·  store   ·           -  ·          -  ·      43724  ·            2  ·       0.43  │
··················|··········|··············|·············|·············|···············|··············
|  Deployments               ·                                          ·  % of limit   ·             │
·····························|··············|·············|·············|···············|··············
|  SimpleStorage             ·           -  ·          -  ·     562691  ·        1.9 %  ·       5.53  │
·----------------------------|--------------|-------------|-------------|---------------|-------------·
```



## Fund Me Project

This time we setup the project as before instantly i will add the points which are changes only

Contract is 

1. Fund Me.sol
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
    // Explainer from: https://solidity-by-example.org/fallback/
    // Ether is sent to contract
    //      is msg.data empty?
    //          /   \ 
    //         yes  no
    //         /     \
    //    receive()?  fallback() 
    //     /   \ 
    //   yes   no
    //  /        \
    //receive()  fallback()

    fallback() external payable {
        fund();
    }

    receive() external payable {
        fund();
    }

}

// Concepts we didn't cover yet (will cover in later sections)
// 1. Enum
// 2. Events
// 3. Try / Catch
// 4. Function Selector
// 5. abi.encode / decode
// 6. Hash with keccak256
// 7. Yul / Assembly
```

2. PriceConverter.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// Why is this a library and not abstract?
// Why not an interface?
library PriceConverter {
    // We could make this public, but then we'd have to deploy it
    function getPrice() internal view returns (uint256) {
        // Sepolia ETH / USD Address
        // https://docs.chain.link/data-feeds/price-feeds/addresses#Sepolia%20Testnet
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // ETH/USD rate in 18 digit
        return uint256(answer * 10000000000);
        // or (Both will do the same thing)
        // return uint256(answer * 1e10); // 1* 10 ** 10 == 10000000000
    }

    // 1000000000
    function getConversionRate(uint256 ethAmount)
        internal
        view
        returns (uint256)
    {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;
        // or (Both will do the same thing)
        // uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18; // 1 * 10 ** 18 == 1000000000000000000
        // the actual ETH/USD conversion rate, after adjusting the extra 0s.
        return ethAmountInUsd;
    }
}
```

Let try hardhat ciompile

It shows error

Error HH411: The library @chainlink/contracts, imported from contracts/FundMe.sol, is not installed.


SO we unstall chainlink contracts using npm because remix already provides it

```bash
 npm i  @chainlink/contracts
```

Lets change solc version to 0.8.8 then compile

```bash
npx hardhat compile
```

it compiles successfully

For deploymnet we use hardhat-deploy plugin

```bash
npm install -D hardhat-deploy
```

And add the following statement to your hardhat.config.js:

require('hardhat-deploy');


if we use ethers.js they recommend us also install hardhat-deploy-ethers which add extra features to access deployments as ethers contract.
Since hardhat-deploy-ethers is a fork of @nomiclabs/hardhat-ethers and that other plugin might have a hardcoded dependency on @nomiclabs/hardhat-ethers the best way to install hardhat-deploy-ethers and ensure compatibility is the following:
```bash
npm install --save-dev  @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```

Now lets write the deployment script but this time we will use hardhat-deploy plugin so we will write less code


Lets modify hadhar config to include named accounts as well

In Hardhat, the namedAccounts configuration option is used to define and name specific Ethereum accounts or addresses for various purposes in your development and testing environment. This feature is especially useful when working with multiple accounts, such as deploying contracts, simulating different roles, or providing predefined accounts for testing.

```javascript
require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
},
};
```

Now lets make our code compatible for all networks. To do so we need to modify the contract so that in Aggregator Interface we add address pricefeed in constructor

Fund Me .sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

error FundMe__NotOwner();

contract FundMe {
    using PriceConverter for uint256;


    // State variables
    uint256 public constant MINIMUM_USD = 50 * 10**18;
    address private immutable i_owner;
    address[] private s_funders;
    mapping(address => uint256) private s_addressToAmountFunded;
    AggregatorV3Interface private s_priceFeed;

    // Events (we have none!)
    
    modifier onlyOwner() {
        // require(msg.sender == i_owner);
        if (msg.sender != i_owner) revert FundMe__NotOwner();
        _;
    }
    
    // Functions Order:
    //// constructor
    //// receive
    //// fallback
    //// external
    //// public
    //// internal
    //// private
    //// view / pure


    constructor(address priceFeed) {
        s_priceFeed = AggregatorV3Interface(priceFeed);
        i_owner = msg.sender;
    }


    /// @notice Funds our contract based on the ETH/USD price
    function fund() public payable {
        require(
            msg.value.getConversionRate(s_priceFeed) >= MINIMUM_USD,
            "You need to spend more ETH!"
        );
        // require(PriceConverter.getConversionRate(msg.value) >= MINIMUM_USD, "You need to spend more ETH!");
        s_addressToAmountFunded[msg.sender] += msg.value;
        s_funders.push(msg.sender);
    }

    function withdraw() public onlyOwner {
        for (
            uint256 funderIndex = 0;
            funderIndex < s_funders.length;
            funderIndex++
        ) {
            address funder = s_funders[funderIndex];
            s_addressToAmountFunded[funder] = 0;
        }
        s_funders = new address[](0);
        // Transfer vs call vs Send
        // payable(msg.sender).transfer(address(this).balance);
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        require(success);
    }


    function getAddressToAmountFunded(address fundingAddress)
        public
        view
        returns (uint256)
    {
        return s_addressToAmountFunded[fundingAddress];
    }


    function getVersion() public view returns (uint256) {
        return s_priceFeed.version();
    }

    function getFunder(uint256 index) public view returns (address) {
        return s_funders[index];
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }

    function getPriceFeed() public view returns (AggregatorV3Interface) {
        return s_priceFeed;
    }
    
}
```

PriceConverter.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {

    function getPrice(AggregatorV3Interface priceFeed)
        internal
        view
        returns (uint256)
    {
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // ETH/USD rate in 18 digit
        return uint256(answer * 10000000000);
    }

    // 1000000000
     function getConversionRate(uint256 ethAmount, AggregatorV3Interface priceFeed)
        internal
        view
        returns (uint256)
    {
        uint256 ethPrice = getPrice(priceFeed);
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;
        // the actual ETH/USD conversation rate, after adjusting the extra 0s.
        return ethAmountInUsd;
    }
}
```

Now lets add helper-hardhat-config for adding other config

```javascript
const networkConfig = {
    31337: {
        name: "localhost",
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
```


Lets create and copy MockV3Aggregator.sol from chainlink contracts to contracts folder for local testing

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@chainlink/contracts/src/v0.7/tests/MockV3Aggregator.sol";
```

Since this uses old version of solidity we need to add solc version to hardhat config

```javascript
require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
        {
            version: "0.8.8",
        },
        {
            version: "0.7.6",
        },
    ],
},
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
},
};

```

Lets crate a file 00-deploy-mocks so that we can deploy mock aggregator for local testing before deploying to testnet


```javascript
const { network } = require("hardhat")

const DECIMALS = "8"
const INITIAL_PRICE = "200000000000" // 2000
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // If we are on a local development network, we need to deploy mocks!
    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })
        log("Mocks Deployed!")
        log("------------------------------------------------")
        log(
            "You are deploying to a local network, you'll need a local network running to interact"
        )
        log(
            "Please run `npx hardhat console` to interact with the deployed smart contracts!"
        )
        log("------------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
```


Current hardhat config

```javascript
require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("dotenv").config()


const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const SEPOLIA_RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.7.6",
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
};
```


Now we can use this in our deployment script

```javascript
const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
// const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    let ethUsdPriceFeedAddress
    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    log("----------------------------------------------------")
    // log("Deploying FundMe and waiting for confirmations...")

    // const fundMe = await deploy("FundMe", {
    //     from: deployer,
    //     args: [ethUsdPriceFeedAddress],
    //     log: true,
    //     // we need to wait if on a live network so we can verify properly
    //     waitConfirmations: network.config.blockConfirmations || 1,
    // })


    // log(`FundMe deployed at ${fundMe.address}`)

    // if (
    //     !developmentChains.includes(network.name) &&
    //     process.env.ETHERSCAN_API_KEY
    // ) {
    //     await verify(fundMe.address, [ethUsdPriceFeedAddress])
    // }
}

module.exports.tags = ["all", "fundme"]
```

Lets try deply using the following command

```bash
npx hardhat deploy 
```

It deploys successfully

Lets continue code We will copy verify of previosu simple storage project

```javascript
const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments }) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    let ethUsdPriceFeedAddress
    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    log("----------------------------------------------------")
    log("Deploying FundMe and waiting for confirmations...")

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1,
    })


    log(`FundMe deployed at ${fundMe.address}`)

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, [ethUsdPriceFeedAddress])
    }
}

module.exports.tags = ["all", "fundme"]
```

Now lets write test cases and do unit testing

#### Unit testing

Unit testing is a type of software testing that focuses on individual units or components of a software system. The purpose of unit testing is to validate that each unit of the software works as intended and meets the requirements. Unit testing is typically performed by developers, and it is performed early in the development process before the code is integrated and tested as a whole system.

Unit tests are automated and are run each time the code is changed to ensure that new code does not break existing functionality. Unit tests are designed to validate the smallest possible unit of code, such as a function or a method, and test it in isolation from the rest of the system. This allows developers to quickly identify and fix any issues early in the development process, improving the overall quality of the software and reducing the time required for later testing.


[Link](https://www.geeksforgeeks.org/unit-testing-software-testing/)


### Conitnue code

Lets creat unit test of rfund me in fundme.test.js

```javascript
const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")


!developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", function () {
          let fundMe
          let mockV3Aggregator
          let deployer
          const sendValue = ethers.parseEther("1")
          beforeEach(async () => {
              // const accounts = await ethers.getSigners()
              // deployer = accounts[0]
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])
              fundMe = await ethers.getContract("FundMe", deployer)
              mockV3Aggregator = await ethers.getContract(
                  "MockV3Aggregator",
                  deployer
              )
          })

          describe("constructor", function () {
              it("sets the aggregator addresses correctly", async () => {
                  const response = await fundMe.getPriceFeed()
                  assert.equal(response, mockV3Aggregator.address)
              })
          })

          describe("fund", function () {
              // https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
              // could also do assert.fail
              it("Fails if you don't send enough ETH", async () => {
                  await expect(fundMe.fund()).to.be.revertedWith(
                      "You need to spend more ETH!"
                  )
              })
              // we could be even more precise here by making sure exactly $50 works
              // but this is good enough for now
              it("Updates the amount funded data structure", async () => {
                  await fundMe.fund({ value: sendValue })
                  const response = await fundMe.getAddressToAmountFunded(
                      deployer
                  )
                  assert.equal(response.toString(), sendValue.toString())
              })
              it("Adds funder to array of funders", async () => {
                  await fundMe.fund({ value: sendValue })
                  const response = await fundMe.getFunder(0)
                  assert.equal(response, deployer)
              })
          })
          describe("withdraw", function () {
              beforeEach(async () => {
                  await fundMe.fund({ value: sendValue })
              })
              it("withdraws ETH from a single funder", async () => {
                  // Arrange
                  const startingFundMeBalance =
                      await fundMe.provider.getBalance(fundMe.address)
                  const startingDeployerBalance =
                      await fundMe.provider.getBalance(deployer)

                  // Act
                  const transactionResponse = await fundMe.withdraw()
                  const transactionReceipt = await transactionResponse.wait()
                  const { gasUsed, effectiveGasPrice } = transactionReceipt
                  const gasCost = gasUsed.mul(effectiveGasPrice)

                  const endingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  )
                  const endingDeployerBalance =
                      await fundMe.provider.getBalance(deployer)

                  // Assert
                  // Maybe clean up to understand the testing
                  assert.equal(endingFundMeBalance, 0)
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(gasCost).toString()
                  )
              })
              // this test is overloaded. Ideally we'd split it into multiple tests
              // but for simplicity we left it as one
              it("is allows us to withdraw with multiple funders", async () => {
                  // Arrange
                  const accounts = await ethers.getSigners()
                  for (i = 1; i < 6; i++) {
                      const fundMeConnectedContract = await fundMe.connect(
                          accounts[i]
                      )
                      await fundMeConnectedContract.fund({ value: sendValue })
                  }
                  const startingFundMeBalance =
                      await fundMe.provider.getBalance(fundMe.address)
                  const startingDeployerBalance =
                      await fundMe.provider.getBalance(deployer)

                  // Act
                  const transactionResponse = await fundMe.cheaperWithdraw()
                  // Let's comapre gas costs :)
                  // const transactionResponse = await fundMe.withdraw()
                  const transactionReceipt = await transactionResponse.wait()
                  const { gasUsed, effectiveGasPrice } = transactionReceipt
                  const withdrawGasCost = gasUsed.mul(effectiveGasPrice)
                  console.log(`GasCost: ${withdrawGasCost}`)
                  console.log(`GasUsed: ${gasUsed}`)
                  console.log(`GasPrice: ${effectiveGasPrice}`)
                  const endingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  )
                  const endingDeployerBalance =
                      await fundMe.provider.getBalance(deployer)
                  // Assert
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(withdrawGasCost).toString()
                  )
                  // Make a getter for storage variables
                  await expect(fundMe.getFunder(0)).to.be.reverted

                  for (i = 1; i < 6; i++) {
                      assert.equal(
                          await fundMe.getAddressToAmountFunded(
                              accounts[i].address
                          ),
                          0
                      )
                  }
              })
              it("Only allows the owner to withdraw", async function () {
                  const accounts = await ethers.getSigners()
                  const fundMeConnectedContract = await fundMe.connect(
                      accounts[1]
                  )
                  await expect(
                      fundMeConnectedContract.withdraw()
                  ).to.be.revertedWith("FundMe__NotOwner")
              })
          })
      })
```

To minimise gas we add cheaper withdraw function in fund me contract

```solidity
 function cheaperWithdraw() public onlyOwner {
        address[] memory funders = s_funders;
        // mappings can't be in memory, sorry!
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            s_addressToAmountFunded[funder] = 0;
        }
        s_funders = new address[](0);
        // payable(msg.sender).transfer(address(this).balance);
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        require(success);
    }
```

We add staging test also

```javascript
const { assert } = require("chai")
const { network, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe Staging Tests", function () {
          let deployer
          let fundMe
          const sendValue = ethers.utils.parseEther("0.1")
          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })

          it("allows people to fund and withdraw", async function () {
              const fundTxResponse = await fundMe.fund({ value: sendValue })
              await fundTxResponse.wait(1)
              const withdrawTxResponse = await fundMe.withdraw()
              await withdrawTxResponse.wait(1)

              const endingFundMeBalance = await fundMe.provider.getBalance(
                  fundMe.address
              )
              console.log(
                  endingFundMeBalance.toString() +
                      " should equal 0, running assert equal..."
              )
              assert.equal(endingFundMeBalance.toString(), "0")
          })
      })
```

Rest code is understandable at [Link](https://github.com/PatrickAlphaC/hardhat-fund-me-fcc/tree/main )







### Lottery Project


Events:
Events are specific types of functions within a smart contract.
They are used to notify external parties, including other smart contracts or off-chain applications, about specific state changes or actions that have occurred within the smart contract.
Events are declared using the event keyword in Solidity, the programming language commonly used for Ethereum smart contracts.
When an event is triggered within a smart contract, it emits data that includes relevant information about the event.
External applications or other smart contracts can "listen" for these events and react accordingly when they are emitted.
Events are a way to make the blockchain's data more accessible and usable by providing a history of important actions or updates that have occurred on the blockchain.

```solidity
// Define an event
event Transfer(address indexed from, address indexed to, uint256 value);

// Trigger the event within a function
function transfer(address to, uint256 value) public {
    require(balanceOf[msg.sender] >= value, "Insufficient balance");
    balanceOf[msg.sender] -= value;
    balanceOf[to] += value;
    
    // Trigger the Transfer event
    emit Transfer(msg.sender, to, value);
}
```

Logs:
Logs are a low-level feature of the Ethereum Virtual Machine (EVM).
Logs are used to record information about contract executions, including data that may not be immediately relevant to other smart contracts or external applications.
They are often used for debugging, auditing, or monitoring contract activity.
Logs are more flexible and can record arbitrary data compared to events, which have a predefined structure.
They are generated using the LOG1, LOG2, ..., LOG4 opcodes in Ethereum's bytecode.


Logs and events are different in their use cases and visibility:

Events are explicitly defined and are part of a smart contract's interface, making them accessible and discoverable by external parties.
Logs are generated at a lower level and can record any data, but they are generally used for internal purposes and may not be easily discoverable by external observers.



### Chainlink Nodes

Chainlink nodes listen for events on the blockchain and respond to them by running the requested job. They are the core of the Chainlink Network and are responsible for the majority of the network's functionality. Chainlink nodes are run by independent node operators, who are paid for their services in LINK tokens.


### Events in Smart Contracts

- Indexed Parameters: Indexed parameters are used to filter events. They are stored in a separate data structure that allows for faster lookups. Only the first three parameters of an event can be indexed.
These are also called topics in the Ethereum Virtual Machine (EVM) and are used to filter events in the EVM.

```solidity
event storedNumber(
    uint256 indexed oldnumber,
    uint256 indexed newnumber,
    address indexed sender
    uint256 addednumber
);
```

Emitting events

```solidity
emit storedNumber(oldnumber, newnumber, msg.sender, addednumber);
```


Writing Our Raffle Contract

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AutomationCompatibleInterface.sol";
import "hardhat/console.sol";

/* Errors */
error Raffle__UpkeepNotNeeded(uint256 currentBalance, uint256 numPlayers, uint256 raffleState);
error Raffle__TransferFailed();
error Raffle__SendMoreToEnterRaffle();
error Raffle__RaffleNotOpen();

/**@title A sample Raffle Contract
 * @author Patrick Collins
 * @notice This contract is for creating a sample raffle contract
 * @dev This implements the Chainlink VRF Version 2
 */


contract Raffle is VRFConsumerBaseV2, AutomationCompatibleInterface {
    /* Type declarations */
    enum RaffleState {
        OPEN,
        CALCULATING
    }

    /* State variables */


    // Chainlink VRF Variables
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbackGasLimit;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    // Lottery Variables
    uint256 private immutable i_interval;
    uint256 private immutable i_entranceFee;
    uint256 private s_lastTimeStamp;
    address private s_recentWinner;
    address payable[] private s_players;
    RaffleState private s_raffleState;

    /* Events */
    event RequestedRaffleWinner(uint256 indexed requestId);
    event RaffleEnter(address indexed player);
    event WinnerPicked(address indexed player);

    /* Functions */
    constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane, // keyHash
        uint256 interval,
        uint256 entranceFee,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_gasLane = gasLane;
        i_interval = interval;
        i_subscriptionId = subscriptionId;
        i_entranceFee = entranceFee;
        s_raffleState = RaffleState.OPEN;
        s_lastTimeStamp = block.timestamp;
        i_callbackGasLimit = callbackGasLimit;
    }

    function enterRaffle() public payable {
        // require(msg.value >= i_entranceFee, "Not enough value sent");
        // require(s_raffleState == RaffleState.OPEN, "Raffle is not open");
        if (msg.value < i_entranceFee) {
            revert Raffle__SendMoreToEnterRaffle();
        }
        if (s_raffleState != RaffleState.OPEN) {
            revert Raffle__RaffleNotOpen();
        }
        s_players.push(payable(msg.sender));
        // Emit an event when we update a dynamic array or mapping
        // Named events with the function name reversed
        emit RaffleEnter(msg.sender);
    }

    /**
     * @dev This is the function that the Chainlink Keeper nodes call
     * they look for `upkeepNeeded` to return True.
     * the following should be true for this to return true:
     * 1. The time interval has passed between raffle runs.
     * 2. The lottery is open.
     * 3. The contract has ETH.
     * 4. Implicity, your subscription is funded with LINK.
     */
    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        bool isOpen = RaffleState.OPEN == s_raffleState;
        bool timePassed = ((block.timestamp - s_lastTimeStamp) > i_interval);
        bool hasPlayers = s_players.length > 0;
        bool hasBalance = address(this).balance > 0;
        upkeepNeeded = (timePassed && isOpen && hasBalance && hasPlayers);
        return (upkeepNeeded, "0x0"); // can we comment this out?
    }

    /**
     * @dev Once `checkUpkeep` is returning `true`, this function is called
     * and it kicks off a Chainlink VRF call to get a random winner.
     */
    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        // require(upkeepNeeded, "Upkeep not needed");
        if (!upkeepNeeded) {
            revert Raffle__UpkeepNotNeeded(
                address(this).balance,
                s_players.length,
                uint256(s_raffleState)
            );
        }
        s_raffleState = RaffleState.CALCULATING;
        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        // Quiz... is this redundant?
        emit RequestedRaffleWinner(requestId);
    }

    /**
     * @dev This is the function that Chainlink VRF node
     * calls to send the money to the random winner.
     */
    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        // s_players size 10
        // randomNumber 202
        // 202 % 10 ? what's doesn't divide evenly into 202?
        // 20 * 10 = 200
        // 2
        // 202 % 10 = 2
        uint256 indexOfWinner = randomWords[0] % s_players.length;
        address payable recentWinner = s_players[indexOfWinner];
        s_recentWinner = recentWinner;
        s_players = new address payable[](0);
        s_raffleState = RaffleState.OPEN;
        s_lastTimeStamp = block.timestamp;
        (bool success, ) = recentWinner.call{value: address(this).balance}("");
        // require(success, "Transfer failed");
        if (!success) {
            revert Raffle__TransferFailed();
        }
        emit WinnerPicked(recentWinner);
    }

    /** Getter Functions */

    function getRaffleState() public view returns (RaffleState) {
        return s_raffleState;
    }

    function getNumWords() public pure returns (uint256) {
        return NUM_WORDS;
    }

    function getRequestConfirmations() public pure returns (uint256) {
        return REQUEST_CONFIRMATIONS;
    }

    function getRecentWinner() public view returns (address) {
        return s_recentWinner;
    }

    function getPlayer(uint256 index) public view returns (address) {
        return s_players[index];
    }

    function getLastTimeStamp() public view returns (uint256) {
        return s_lastTimeStamp;
    }

    function getInterval() public view returns (uint256) {
        return i_interval;
    }

    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    function getNumberOfPlayers() public view returns (uint256) {
        return s_players.length;
    }
}
```

Now lets understand step by setp

First

```solidity

event RaffleEnter(address indexed player);

error Raffle__SendMoreToEnterRaffle();

function enterRaffle() public payable {
  if (msg.value < i_entranceFee) {
      revert Raffle__SendMoreToEnterRaffle();
  }

  s_players.push(payable(msg.sender));
  emit RaffleEnter(msg.sender);
}
```

This part is for entering raffle firstly we check if the value is greater than entrance fee if not we revert with error message and if yes we push the player to players array and emit the event



 Second

We need to pick random winner for this we need to use chainlink VRF


For this we need to link the chainlink node to our contract

[Link](https://docs.chain.link/vrf/v2/subscription/examples/get-a-random-number)

So we need to import theis library

```solidity
import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
```

We need to install @chainlink/contracts

```bash
npm install @chainlink/contracts
```

THERFORE ON TOP WE WRITE contract Raffle is VRFConsumerBaseV2, This library expects us to implement some functions whihc we will override, alos we  wiil wire

constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane, // keyHash
        uint256 interval,
        uint256 entranceFee,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2)


We added VRFConsumerBaseV2(vrfCoordinatorV2) to the constructor because the VRFConsumerBaseV2 contract expects us to pass in the address of the VRF Coordinator contract when we deploy our contract. We also need to pass in the subscription ID, key hash, and gas limit that we got from the Chainlink VRF node.


```solidity
 /**
     * @dev This is the function that Chainlink VRF node
     * calls to send the money to the random winner.
     */

function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        // s_players size 10
        // randomNumber 202
        // 202 % 10 ? what's doesn't divide evenly into 202?
        // 20 * 10 = 200
        // 2
        // 202 % 10 = 2
        uint256 indexOfWinner = randomWords[0] % s_players.length;
        address payable recentWinner = s_players[indexOfWinner];
        s_recentWinner = recentWinner;
        s_players = new address payable[](0);
        s_raffleState = RaffleState.OPEN;
        s_lastTimeStamp = block.timestamp;
        (bool success, ) = recentWinner.call{value: address(this).balance}("");
        // require(success, "Transfer failed");
        if (!success) {
            revert Raffle__TransferFailed();
        }
        emit WinnerPicked(recentWinner);
    }
```

Accordint to the documentation we need to implement fulfillRandomWords function we need to call it on VRF Coorinator interface so lets get it

```solidity

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";

    // Chainlink VRF Variables
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbackGasLimit;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;


 constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane, // keyHash
        uint256 interval,
        uint256 entranceFee,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_gasLane = gasLane;
        i_interval = interval;
        i_subscriptionId = subscriptionId;
        i_entranceFee = entranceFee;
        s_raffleState = RaffleState.OPEN;
        s_lastTimeStamp = block.timestamp;
        i_callbackGasLimit = callbackGasLimit;
    }

```

- import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";

This line imports the Chainlink VRF interface, which provides the necessary functions to interact with the Chainlink VRF service.

- VRFCoordinatorV2Interface private immutable i_vrfCoordinator;

This variable holds an instance of the Chainlink VRF Coordinator contract interface. It's marked as immutable to indicate that its value cannot be changed after the contract is deployed.

uint64 private immutable i_subscriptionId;

This variable stores a subscription ID that identifies a specific VRF subscription on the Chainlink network.
bytes32 private immutable i_gasLane;

This variable stores a key hash (gas lane) used for randomness generation. Key hashes are part of Chainlink's security mechanism.
uint32 private immutable i_callbackGasLimit;

This variable specifies the gas limit for the callback function that processes the random number request.
uint16 private constant REQUEST_CONFIRMATIONS = 3;

This constant defines the number of confirmations required for a Chainlink VRF request to be considered successful. In this case, it's set to 3.
uint32 private constant NUM_WORDS = 1;

This constant specifies the number of random words requested from Chainlink VRF. It's set to 1, indicating a single random value will be generated.





Constructor:

The constructor function initializes the contract and sets its initial parameters. It takes several parameters as input, including the VRF Coordinator's address, subscription ID, gas lane (key hash), interval, entrance fee, and callback gas limit.
Inside the constructor, the contract sets these values and also initializes other contract-specific variables, such as the raffle state and the last timestamp.





####### Chainlink vrf

Chainlink VRF, or Chainlink Verifiable Random Function, is a service provided by the Chainlink decentralized oracle network that allows smart contracts on various blockchain platforms to generate truly random and tamper-proof random numbers. This is an important capability for many decentralized applications (dApps) and smart contracts, particularly those involving gaming, gambling, and other use cases that require unpredictable randomness.

Here are some key features and concepts related to Chainlink VRF:

Verifiable Randomness: Chainlink VRF provides a source of randomness that is verifiable and provably fair. This means that the randomness generated by Chainlink VRF can be independently verified by anyone to ensure its integrity and fairness.

Decentralized Oracle Network: Chainlink VRF relies on the Chainlink network, which is a decentralized oracle network. Oracles are services that provide real-world data to smart contracts, and Chainlink is a widely used platform for connecting smart contracts to external data sources and services.

Security and Trustlessness: Chainlink VRF is designed to be secure and trustless. It uses a decentralized network of node operators to generate random numbers. These nodes follow a specific process to generate randomness in a way that is resistant to manipulation and collusion.

Use Cases: Chainlink VRF is used in a variety of applications where random numbers are required. This includes applications like blockchain-based games (e.g., randomizing game outcomes), gambling platforms (e.g., selecting winners fairly), and any other scenario where unpredictability is needed.

Request-Response Model: Smart contracts that want to use Chainlink VRF make a request to the Chainlink network. The request specifies the details of the randomness needed, such as the range of possible values. Chainlink node operators then fulfill the request by generating and providing the random number along with cryptographic proofs of its authenticity.

Cryptographic Proofs: Chainlink VRF uses cryptographic proofs, including a verifiable secret and a proof of randomness, to demonstrate that the generated random number is indeed random and has not been tampered with.





### Requestin winner and emitting

```solidity

event RequestedRaffleWinner(uint256 indexed requestId);


function requestRandomWinner() extenal{
  unit256 reqid = i_vrf.requestRandomWords(i_gasLane, i_subscriptionId, REQUEST_CONFIRMATIONS, i_callbackGasLimit, NUM_WORDS);
}

 emit RequestedRaffleWinner(requestId);

```


### Fulfilling Random Words

```solidity

event WinnerPicked(address indexed player);
error Raffle__TransferFailed();

function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        // s_players size 10
        // randomNumber 202
        // 202 % 10 ? what's doesn't divide evenly into 202?
        // 20 * 10 = 200
        // 2
        // 202 % 10 = 2
        uint256 indexOfWinner = randomWords[0] % s_players.length;
        address payable recentWinner = s_players[indexOfWinner];
        s_recentWinner = recentWinner;
        s_players = new address payable[](0);
        s_raffleState = RaffleState.OPEN;
        s_lastTimeStamp = block.timestamp;
        (bool success, ) = recentWinner.call{value: address(this).balance}("");
        // require(success, "Transfer failed");
        if (!success) {
            revert Raffle__TransferFailed();
        }
        emit WinnerPicked(recentWinner);
    }
```



### Check Upkeep

A contract is Automation-compatible when it follows a specified interface that allows the Chainlink Automation Network to determine if, when, and how the contract should be automated.

The interface you use will depend on the type of trigger you want to use:

If you want a log event to trigger your upkeep, use the ILogAutomation interface.
If you want to use on-chain state in a custom calculation to trigger your upkeep, use AutomationCompatibleInterface interface.
If you want to call a function just based on time, you don't need an interface. Consider insteead usinga time-based upkeep.
If you want to use Automation with Data Streams, use StreamsLookupCompatibleInterface interface.



- Import AutomationCompatible.sol. You can refer to the Chainlink Contracts on GitHub to find the latest version.
- Use the AutomationCompatibleInterface from the library to ensure your checkUpkeep and performUpkeep function definitions match the definitions expected by the Chainlink Automation Network.
- Include a checkUpkeep function that contains the logic that will be executed off-chain to see if performUpkeep should be executed. checkUpkeep can use on-chain data and a specified checkData parameter to perform complex calculations off-chain and then send the result to performUpkeep as performData.
- Include a performUpkeep function that will be executed on-chain when checkUpkeep returns true.


We modify the code

```solidity
/**
     * @dev This is the function that the Chainlink Keeper nodes call
     * they look for `upkeepNeeded` to return True.
     * the following should be true for this to return true:
     * 1. The time interval has passed between raffle runs.
     * 2. The lottery is open.
     * 3. The contract has ETH.
     * 4. Implicity, your subscription is funded with LINK.
     */
    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        bool isOpen = RaffleState.OPEN == s_raffleState;
        bool timePassed = ((block.timestamp - s_lastTimeStamp) > i_interval);
        bool hasPlayers = s_players.length > 0;
        bool hasBalance = address(this).balance > 0;
        upkeepNeeded = (timePassed && isOpen && hasBalance && hasPlayers);
        return (upkeepNeeded, "0x0"); // can we comment this out?
    }

    /**
     * @dev Once `checkUpkeep` is returning `true`, this function is called
     * and it kicks off a Chainlink VRF call to get a random winner.
     */
    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        // require(upkeepNeeded, "Upkeep not needed");
        if (!upkeepNeeded) {
            revert Raffle__UpkeepNotNeeded(
                address(this).balance,
                s_players.length,
                uint256(s_raffleState)
            );
        }
        s_raffleState = RaffleState.CALCULATING;
        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        // Quiz... is this redundant?
        emit RequestedRaffleWinner(requestId);
    }

```

[Link](https://docs.chain.link/vrf/v2/getting-started)
[Link](https://docs.chain.link/chainlink-automation/compatible-contracts)

Now we know wbhy we used 3 imports

```solidity
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AutomationCompatibleInterface.sol";


function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        bool isOpen = RaffleState.OPEN == s_raffleState;
        bool timePassed = ((block.timestamp - s_lastTimeStamp) > i_interval);
        bool hasPlayers = s_players.length > 0;
        bool hasBalance = address(this).balance > 0;
        upkeepNeeded = (timePassed && isOpen && hasBalance && hasPlayers);
        return (upkeepNeeded, "0x0"); // can we comment this out?
    }


    /**
     * @dev Once `checkUpkeep` is returning `true`, this function is called
     * and it kicks off a Chainlink VRF call to get a random winner.
     */
    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        // require(upkeepNeeded, "Upkeep not needed");
        if (!upkeepNeeded) {
            revert Raffle__UpkeepNotNeeded(
                address(this).balance,
                s_players.length,
                uint256(s_raffleState)
            );
        }
        s_raffleState = RaffleState.CALCULATING;
        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        // Quiz... is this redundant?
        emit RequestedRaffleWinner(requestId);
    }
```


We have created

enum RaffleState {
        OPEN,
        CALCULATING
    }


to indicate current raffle state


RaffleState private s_raffleState;


In a smart contract on the Ethereum blockchain, the block.timestamp (or simply block.timestamp) returns the current timestamp (time in seconds since the Unix epoch) of the block being processed by the Ethereum network. This value represents the approximate time when the block was mined.

Block and Transaction Properties
blockhash(uint blockNumber) returns (bytes32): hash of the given block when blocknumber is one of the 256 most recent blocks; otherwise returns zero

block.basefee (uint): current block’s base fee (EIP-3198 and EIP-1559)

block.chainid (uint): current chain id

block.coinbase (address payable): current block miner’s address

block.difficulty (uint): current block difficulty (EVM < Paris). For other EVM versions it behaves as a deprecated alias for block.prevrandao (EIP-4399 )

block.gaslimit (uint): current block gaslimit

block.number (uint): current block number

block.prevrandao (uint): random number provided by the beacon chain (EVM >= Paris)

block.timestamp (uint): current block timestamp as seconds since unix epoch

gasleft() returns (uint256): remaining gas

msg.data (bytes calldata): complete calldata

msg.sender (address): sender of the message (current call)

msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)

msg.value (uint): number of wei sent with the message

tx.gasprice (uint): gas price of the transaction

tx.origin (address): sender of the transaction (full call chain)

Note











After this we will again write our other scripts like before

[Link](https://github.com/PatrickAlphaC/hardhat-smartcontract-lottery-fcc/tree/main)


Mock Depoy Scripts

```javascript
const { network } = require("hardhat")

const BASE_FEE = "250000000000000000" // 0.25 is this the premium in LINK?
const GAS_PRICE_LINK = 1e9 // link per gas, is this the gas lane? // 0.000000001 LINK per gas

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // If we are on a local development network, we need to deploy mocks!
    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: [BASE_FEE, GAS_PRICE_LINK],
        })

        log("Mocks Deployed!")
        log("----------------------------------------------------------")
        log("You are deploying to a local network, you'll need a local network running to interact")
        log(
            "Please run `yarn hardhat console --network localhost` to interact with the deployed smart contracts!"
        )
        log("----------------------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
```


Raffle Deploy

```javascript
const { network, ethers } = require("hardhat")
const {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

const FUND_AMOUNT = ethers.utils.parseEther("1") // 1 Ether, or 1e18 (10^18) Wei

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let vrfCoordinatorV2Address, subscriptionId, vrfCoordinatorV2Mock

    if (chainId == 31337) {
        // create VRFV2 Subscription
        vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address
        const transactionResponse = await vrfCoordinatorV2Mock.createSubscription()
        const transactionReceipt = await transactionResponse.wait()
        subscriptionId = transactionReceipt.events[0].args.subId
        // Fund the subscription
        // Our mock makes it so we don't actually have to worry about sending fund
        await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT)
    } else {
        vrfCoordinatorV2Address = networkConfig[chainId]["vrfCoordinatorV2"]
        subscriptionId = networkConfig[chainId]["subscriptionId"]
    }
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    log("----------------------------------------------------")
    const arguments = [
        vrfCoordinatorV2Address,
        subscriptionId,
        networkConfig[chainId]["gasLane"],
        networkConfig[chainId]["keepersUpdateInterval"],
        networkConfig[chainId]["raffleEntranceFee"],
        networkConfig[chainId]["callbackGasLimit"],
    ]
    const raffle = await deploy("Raffle", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Ensure the Raffle contract is a valid consumer of the VRFCoordinatorV2Mock contract.
    if (developmentChains.includes(network.name)) {
        const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        await vrfCoordinatorV2Mock.addConsumer(subscriptionId, raffle.address)
    }

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(raffle.address, arguments)
    }

    log("Enter lottery with command:")
    const networkName = network.name == "hardhat" ? "localhost" : network.name
    log(`yarn hardhat run scripts/enterRaffle.js --network ${networkName}`)
    log("----------------------------------------------------")
}

module.exports.tags = ["all", "raffle"]
```


Helper Network Config

```javascript
const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },
    31337: {
        name: "localhost",
        subscriptionId: "588",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        keepersUpdateInterval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
    },
    11155111: {
        name: "sepolia",
        subscriptionId: "6926",
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
        keepersUpdateInterval: "30",
        raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
        vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    },
    1: {
        name: "mainnet",
        keepersUpdateInterval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const frontEndContractsFile = "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json"
const frontEndAbiFile = "../nextjs-smartcontract-lottery-fcc/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    frontEndContractsFile,
    frontEndAbiFile,
}
```

We will do unit testing also


No wafter creating a next js app we need to step forawrd to host it


We will use ipfs to host our app

[Link](https://docs.ipfs.tech/concepts/how-ipfs-works/)

We will export our nextks code and add it to ipfs network

filecoin

