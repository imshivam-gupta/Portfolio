---
title: "Introduction to Data Structures and Algorithms"
subtitle: "What will this cover"
date: "2020-12-27"
---


# Blockchain Oracle

Blockchain oracles are entities that connect blockchains to external systems, thereby enabling smart contracts to execute based upon inputs and outputs from the real world. 

Oracles provide a way for the decentralized Web3 ecosystem to access existing data sources, legacy systems, and advanced computations. Decentralized oracle networks (DONs) enable the creation of hybrid smart contracts, where on-chain code and off-chain infrastructure are combined to support advanced decentralized applications (dApps) that react to real-world events and interoperate with traditional systems.


![Blockchain oracles connect blockchains to inputs and outputs in the real world](https://assets-global.website-files.com/5f75fe1dce99248be5a892db/646e04e88a4e406b0c6e017c_643ff1bca542abf77f19170f_Hybrid%2520Smart%2520Contract.webp)
<!-- https://chain.link/education/blockchain-oracles -->

For example, let’s assume Alice and Bob want to bet on the outcome of a sports match. Alice bets $20 on team A and Bob bets $20 on team B, with the $40 total held in escrow by a smart contract. When the game ends, how does the smart contract know whether to release the funds to Alice or Bob? The answer is it requires an oracle mechanism to fetch accurate match outcomes off-chain and deliver it to the blockchain in a secure and reliable manner.

## Oracle Problem

The blockchain oracle problem outlines a fundamental limitation of smart contracts—they cannot inherently interact with data and systems existing outside their native blockchain environment. Resources external to the blockchain are considered “off-chain,” while data already stored on the blockchain is considered on-chain. By being purposely isolated from external systems, blockchains obtain their most valuable properties like strong consensus on the validity of user transactions, prevention of double-spending attacks, and mitigation of network downtime. Securely interoperating with off-chain systems from a blockchain requires an additional piece of infrastructure known as an “oracle” to bridge the two environments.

![Blockchain oracles connect blockchains to inputs and outputs in the real world](https://assets-global.website-files.com/5f75fe1dce99248be5a892db/646e04e88a4e406b0c6e0173_6446860364e21445ed422e26_education_blockchain-oracle-image-2.jpeg)
<!-- https://chain.link/education/blockchain-oracles -->

Solving the oracle problem is of the utmost importance because the vast majority of smart contract use cases like DeFi require knowledge of real-world data and events happening off-chain. Thus, oracles expand the types of digital agreements that blockchains can support by offering a universal gateway to off-chain resources while still upholding the valuable security properties of blockchains. Major industries benefit from combining oracles and smart contracts including asset prices for finance, weather information for insurance, randomness for gaming, IoT sensors for supply chain, ID verification for government, and much more. Because the data delivered by oracles to blockchains directly determines the outcomes of smart contracts, it is critically important that the oracle mechanism is correct if the agreement is to execute exactly as expected.


## Decentralized Oracles

Blockchain oracle mechanisms using a centralized entity to deliver data to a smart contract introduce a single point of failure, defeating the entire purpose of a decentralized blockchain application. If the single oracle goes offline, then the smart contract will not have access to the data required for execution or will execute improperly based on stale data.

Even worse, if the single oracle is corrupted, then the data being delivered on-chain may be highly incorrect and lead to smart contracts executing very wrong outcomes. This is commonly referred to as the “garbage in, garbage out” problem where bad inputs lead to bad outputs. Additionally, because blockchain transactions are automated and immutable, a smart contract outcome based on faulty data cannot be reversed, meaning user funds can be permanently lost. Therefore, centralized oracles are a non-starter for smart contract applications.

overcoming the oracle problem necessitates decentralized oracles to prevent data manipulation, inaccuracy, and downtime. A Decentralized Oracle Network, or DON for short, combines multiple independent oracle node operators and multiple reliable data sources to establish end-to-end decentralization. Many Chainlink DONs, such as Chainlink Price Feeds, incorporate three layers of decentralization—at the data source, individual node operator, and oracle network levels—to eliminate any single point of failure. Chainlink Price Feeds already help secure tens of billions of dollars across smart contract ecosystems through this multi-layered decentralization approach, ensuring smart contracts can safely rely on data inputs during their execution.

![Centralized oracles are a single point of failure](https://assets-global.website-files.com/5f75fe1dce99248be5a892db/646e04e88a4e406b0c6e0166_6446866a81ec4626f25b72d5_education_blockchain-oracle-image-3.jpeg)
<!-- https://chain.link/education/blockchain-oracles -->

## Types of Oracles

1. **Input Oracles:** The most widely recognized type of oracle today is known as an “input oracle,” which fetches data from the real-world (off-chain) and delivers it onto a blockchain network for smart contract consumption. These types of oracles are used to power Chainlink Price Feeds, providing DeFi smart contracts with on-chain access to financial market data.
2. **Output Oracles:** The opposite of input oracles are “output oracles,” which allow smart contracts to send commands to off-chain systems that trigger them to execute certain actions. This can include informing a banking network to make a payment, telling a storage provider to store the supplied data, or pinging an IoT system to unlock a car door once the on-chain rental payment is made.
3. **Cross-Chain Oracles:**  Another type of oracle are cross-chain oracles that can read and write information between different blockchains. Cross-chain oracles enable interoperability for moving both data and assets between blockchains, such as using data on one blockchain to trigger an action on another or bridging assets cross-chain so they can be used outside the native blockchain they were issued on.
4. **Compute-Enabled Oracles:**  These use secure off-chain computation to provide decentralized services that are impractical to do on-chain due to technical, legal, or financial constraints. This can include using Chainlink Automation to trigger the running of smart contracts when predefined events take place, computing zero-knowledge proofs to generate data privacy, or running a verifiable randomness function to provide a tamper-proof and provably fair source of randomness to smart contracts.


![Different Types of Blockchain](https://assets-global.website-files.com/5f75fe1dce99248be5a892db/646e04e88a4e406b0c6e016f_644686edcd9476d56f041c7a_education_blockchain-oracle-image-5.jpeg)
<!-- https://chain.link/education/blockchain-oracles -->

## Applications of Oracles

1. **Decentralized Finance (DeFi):** A large portion of the decentralized finance (DeFi) ecosystem requires oracles to access financial data about assets and markets. For example, decentralized money markets use price oracles to determine users’ borrowing capacity and check if users’ positions are undercollateralized and subject to liquidation. Similarly, synthetic asset platforms use price oracles to peg the value of tokens to real-world assets and automated market makers (AMMs) use price oracles to help concentrate liquidity at the current market price to improve capital efficiency.
2. **Dynamic NFTs and Gaming:** Oracles enable non-financial use cases for smart contracts too such as dynamic NFTs—Non-Fungible Tokens that can change in appearance, value, or distribution based on external events like the time of day or the weather. Additionally, compute oracles are used to generate verifiable randomness that projects then use to assign randomized traits to NFTs or to select random lucky winners in high-demand NFT drops. On-chain gaming applications also use verifiable randomness to create more engaging and unpredictable gameplay experiences like the appearance of random loot boxes or randomized matchmaking during a tournament.
3. **Insurance:** Insurance smart contracts use input oracles to verify the occurrence of insurable events during claims processing, opening up access to physical sensors, web APIs, satellite imagery, and legal data. Output oracles can also provide insurance smart contracts with a way to make payouts on claims using other blockchains or traditional payment networks.
4. **Enterprise:** Cross-chain oracles offer enterprises a secure blockchain middleware that allows them to connect their backend systems to any blockchain network. In doing so, enterprise systems can read/write to any blockchain and perform complex logic on how to deploy assets and data across chains and with counterparties using the same oracle network. The result is institutions being able to quickly join blockchains in high demand by their counterparties and swiftly create support for smart contract services wanted by their users without having to spend time and development resources integrating with each individual blockchain.
5. **Sustainability:** Hybrid smart contracts are advancing environmental sustainability by creating better incentives to partake in green practices through advanced verification techniques around the true impact of green initiatives. Oracles are a critical tool to supplying smart contracts with environmental data from sensor readings, satellite imagery, and advanced ML computation, which then allow smart contracts to dispense rewards to people practicing reforestation or engaging in conscious consumption. Oracles are also supporting many new forms of carbon credits to offset the impacts of climate change.


# Hybrid Smart Contracts

A hybrid smart contract combines on-chain infrastructure with off-chain data and computation provided by decentralized oracle networks to create a feature-rich decentralized application. By being able to seamlessly combine on-chain and off-chain components, hybrid smart contracts can unlock smart contract use cases and functionality that wouldn’t be possible by using just one of the components.

A hybrid smart contract is an application that consists of two parts:
1. Smart contract - code that runs exclusively on the blockchain
2. Decentralized oracle network(s) - secure off-chain services that support the smart contract. 

The two components interact with one another seamlessly and securely to form a single hybrid smart contract application. The result is on-chain code that is augmented in a variety of unique and important ways, opening up many new use cases that would not be possible through on-chain code alone due to technical, legal, or financial constraints.


## How Hybrid Smart Contracts Combine On-Chain and Off-Chain Computation

#### On-Chain: Blockchain
- Maintain a persistent ledger that provides authoritative custody of users’ assets and interacts with private keys
- Execute final settlement by processing irreversible transactions that transfer value between users
- Provide dispute resolution and guardrails to secure the proper functioning of the off-chain services performed by a DON

#### Off-Chain: Decentralized Oracle Network
- Fetch, validate, secure, and deliver data from external APIs to smart contracts running on blockchains and layer-2 solutions
- Perform various types of computations for smart contracts running on blockchains and layer-2 solutions
- Relay outputs of smart contract code to other blockchains or external systems

![Hybrid smart contracts](https://assets-global.website-files.com/5f75fe1dce99248be5a892db/643ebbd4a4ebb5e3235dbae0_Chainlink-Whitepaper-Blog-Diagram-1.webp)
<!-- https://chain.link/education/blockchain-oracles -->