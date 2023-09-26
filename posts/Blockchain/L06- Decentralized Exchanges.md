---
title: "Introduction to Data Structures and Algorithms"
subtitle: "What will this cover"
date: "2020-12-27"
---


# Decentralized Exchanges

A DEX (decentralized exchange) is a peer-to-peer marketplace where users can trade cryptocurrencies in a non-custodial manner without the need for an intermediary to facilitate the transfer and custody of funds. DEXs substitute intermediaries—traditionally, banks, brokers, payment processors, or other institutions—with blockchain-based smart contracts that facilitate the exchange of assets. 

Compared to traditional financial transactions, which are opaque and run through intermediaries who offer extremely limited insight into their actions, DEXs offer complete transparency into the movement of funds and the mechanisms facilitating exchange. In addition, as user funds don’t pass through a third party’s cryptocurrency wallet during trading, DEXs reduce counterparty risk and can decrease systemic centralization risks in the cryptocurrency ecosystem.

## Working of DEX

There are several DEX designs, each offering a different benefits and trade-offs in terms of feature-sets, scalability, and decentralization. The two most common types are order book DEXs and automated market makers (AMMs). DEX aggregators, which parse through multiple DEXs on-chain to find the best price or lowest gas cost for the user’s desired transaction, are also a widely used category.

One of the main benefits of DEXs is the high degree of determinism achieved by using blockchain technology and immutable smart contracts. Whereas in centralized exchanges (CEXs), such as Coinbase or Binance, the platform facilitates trading using the internal matching engine of the exchange, DEXs execute trades through smart contracts and on-chain transactions. Furthermore, DEXs allow users to maintain full custody of their funds via their self-hosted wallets during trading.

DEX users are typically required to pay two types of fees—network fees and trading fees. Network fees refer to the gas cost of the on-chain transaction while trading fees are collected by the underlying protocol, its liquidity providers, token holders, or a combination of these entities as specified by the design of the protocol.

The vision behind many DEXs is to have permissionlessly accessible, end-to-end on-chain infrastructure with no central points of failure and decentralized ownership across a community of distributed stakeholders. This typically means protocol administrative rights are governed by a decentralized autonomous organization (DAO), made up of a community of stakeholders, which votes on key protocol decisions. 

However, maximizing the decentralization of the protocol while keeping it competitive in a crowded DEX landscape isn’t an easy feat, as the core development team behind the DEX is generally able to make more informed decisions about mission-critical protocol functionality than a distributed set of stakeholders. Even so, many DEXs opt for a distributed governance structure in an attempt to increase censorship resistance and long-term resiliency.

### Order Book DEXs

An order book—a real-time collection of open buy and sell orders in a market—is a foundational pillar of electronic exchanges. Order books allow an exchange’s internal systems to match buy and sell orders.

Fully on-chain order book DEXs have been historically less common in DeFi, as they require every interaction within the order book to be posted on the blockchain. This requires either far higher throughput than most current blockchains can handle or significant compromises in network security and decentralization. As such, early examples of order book DEXs on Ethereum had low liquidity and suboptimal user experience. Even so, these exchanges were a compelling proof of concept for how a DEX could facilitate trading using smart contracts. 

With scalability innovations such as layer-2 networks like optimistic rollups and ZK-rollups and the launch of higher-throughput and app-specific blockchains, on-chain order book exchanges have become more feasible and now attract a considerable amount of trading activity. Additionally, hybrid order book designs have become more popular, where the order book management and matching processes take place off-chain while the settlement of trades occurs on-chain.  

Some popular order book DEXs include 0x, dYdX, Loopring DEX, and Serum.

### Automated Market Makers (AMMs)
Automated market makers are the most widely used type of DEX as they enable instant liquidity, democratized access to liquidity provision, and—in many cases—permissionless market creation for any token. An AMM is essentially a money robot that is always willing to quote a price between two (or more) assets. Instead of an order book, an AMM utilizes a liquidity pool that users can swap their tokens against, with the price determined by an algorithm based on the proportion of tokens in the pool.

Since they’re always able to quote a price for a user, AMMs enable instant access to liquidity in markets that otherwise may have lower liquidity. In the case of an order book DEX, a willing buyer has to wait for their order to be matched with the order of a seller—even if the buyer posts their order to the “top” of the order book close to the current price, the order may never execute. 

In the case of an AMM, the exchange rate is determined by a smart contract. Users can get instant access to liquidity, while liquidity providers (depositors into the AMM’s liquidity pool) can earn passive income via trading fees. This combination of instant liquidity and democratized access to liquidity provision has enabled an explosion of new tokens being launched through AMMs and unlocked new designs that focus on distinct use cases, such as stablecoin swaps. If you’d like a more detailed exploration of AMMs, read this post covering how AMMs work.

While most current AMM designs deal with cryptocurrencies, AMMs could also be used to facilitate swaps of NFTs, tokenized real-world assets, carbon credits, and much more.

Some popular AMM DEXs include Bancor, Balancer, Curve, PancakeSwap, Sushiswap, Trader Joe, and Uniswap.



## DEX Risks and Considerations

- Smart contract risk—Blockchains are considered highly secure for executing financial transactions. However, the code quality of a smart contract is nevertheless dependent on the skill level and experience of team that developed it. Smart contract bugs, hacks, vulnerabilities, and exploits can occur, leaving DEX users susceptible to a loss of funds. Developers can mitigate this risk through security audits, peer-reviewed code, and sound testing practices, but diligence is always required.
- Liquidity risk—While DEXs are becoming increasingly popular, some DEX markets have poor liquidity conditions, leading to large amounts of slippage and a suboptimal user experience. Due to how the network effects of liquidity works (high liquidity attracts more liquidity, low liquidity attracts less liquidity), significant portions of trading activity is still conducted on centralized exchanges, which often leads to less liquidity on DEX trading pairs.
- Frontrunning risk—Due to the public nature of blockchain transactions, DEX trades may be frontrun by arbitrageurs or maximal extractable value (MEV) bots trying to siphon value from unwitting users. Similar to high-frequency traders in traditional markets, these bots try to exploit market inefficiencies by paying higher transaction fees and optimizing network latency to exploit ordinary users’ DEX trades.
- Centralization risk—While many DEXs aim to maximize their decentralization and censorship resistance, points of centralization can still be present. These include the DEX’s matching engine being hosted on centralized servers, the development team having administrative access to the DEX’s smart contracts, and the use of low-quality token bridging infrastructure among others.
- Network risk—As the exchange of assets is facilitated by a blockchain, using a DEX may be prohibitively expensive or outright impossible if the network experiences congestion or downtime, leaving DEX users susceptible to market movements.
- Token risk—As many DEXs feature permissionless market creation—the ability for anyone to create a market for any token—the risks of buying low-quality or malicious tokens can be higher than in centralized exchanges. DEX users need to consider the risks associated with participating in early-stage projects.