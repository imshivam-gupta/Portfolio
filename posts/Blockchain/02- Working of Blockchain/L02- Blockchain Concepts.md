---
title: "Internal Working of Blockchain"
subtitle: "What will this cover"
date: "2020-12-27"
---

<iframe 
    width="820" 
    height="400" 
    src="https://www.youtube.com/embed/_160oMzblY8?rel=0" 
    title="Blockchain 101 - A Visual Demo" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
    class="mx-auto rounded-3xl mb-10 shadow-xl"
>
</iframe>

# Important Concepts

### Genesis Block

The Genesis Block is the first block in a blockchain. It serves as the foundation for the entire blockchain network.
It is unique because it has no previous block to reference, unlike other blocks that link to their preceding block using a cryptographic hash.
The Genesis Block typically contains essential information about the blockchain, such as the timestamp of its creation and a reference to the cryptocurrency or network it is associated with.
Once the Genesis Block is created, subsequent blocks are linked to it, forming a chain of blocks, hence the term **blockchain.**


## Immutablity

Immutability — the ability for a blockchain ledger to remain a permanent, indelible, and unalterable history of transactions — is a definitive feature that blockchain evangelists highlight as a key benefit. Immutability has the potential to transform the auditing process into a quick, efficient, and cost-effective procedure, and bring more trust and integrity to the data businesses use and share every day.

Cryptography + Blockchain Hashing Process = Immutability

> Each transaction that is verified by the blockchain network is timestamped and embedded into a “block” of information, cryptographically secured by a hashing process that links to and incorporates the hash of the previous block, and joins the chain as the next chronological update.

The hashing process of a new block always includes meta-data from the previous block’s hash output. This link in the hashing process makes the chain "unbreakable" — it’s impossible to manipulate or delete data after it has been validated and placed in the blockchain, because if attempted, the subsequent blocks in the chain would reject the attempted modification (as their hashes wouldn’t be valid). In other words, if data is tampered with, the blockchain will break, and the reason could be readily identified. This characteristic is not found in traditional databases, where information can be modified or deleted with ease.

## Nonce

In cryptocurrency, a nonce is an abbreviation for "number only used once," which is a number added to a hashed—or encrypted—block in a blockchain that, when rehashed, meets the difficulty level restrictions. The nonce is the number that blockchain miners are solving to receive the block reward. A blockchain nonce is a number added to a hashed—or encrypted—block in a blockchain.

The nonce is used to validate the information contained within a block. The mining program generates a random number, appends it to the hash of the current header, rehashes the value, and compares this to the target hash. If the resulting hash value meets the requirements, the miner has created a solution and is awarded the block. If the value doesn't match the target, the nonce is increased by one, and the process starts again. This continues until one miner meets the target.


## Public Private Key

A public key, as the name suggests, is viewable by others. You can think of it like your checking account and routing numbers. You can safely provide your public key to anybody trying to send you funds, whether it’s in an email signature, on a website or on a social media post. The only thing somebody with your public key will be able to do is send funds to your wallet and see your wallet balance, so sharing it presents no immediate security risk. Public keys are actually mathematically generated from their corresponding private key, but the process is not reversible.

A private key is kept secret and is used to decrypt data that has been encrypted with the associated public key. Unlike public keys, your private key should never be shared with anyone, as whoever has a wallet’s private key can access the funds it contains. To more privacy minded crypto users, this unwillingness to share private keys even extends to centralized exchanges, many of which provide custodial wallets that manage private keys on users’ behalf. The alternative side to custody services is using a self-custody wallet in which you are in full control of your private keys. Possession of private keys is a rather contentious issue in the world of cryptocurrency, with many believing you don’t actually “own” your crypto unless you are the sole possessor of your private key. This point of view has given rise to the popular “not your keys, not your crypto” adage in some crypto circles

## Elliptic Curve Digital Signature Algorithm

ECDSA is a widely used digital signature algorithm in blockchain and cryptographic applications. It's based on the mathematics of elliptic curves and provides a way to create a digital signature for a piece of data using a private key and verify that signature using the corresponding public key.
ECDSA is known for its efficiency and security, making it a popular choice for securing transactions and messages in blockchain networks.


<iframe 
    width="820" 
    height="400" 
    src="https://www.youtube.com/embed/6TI5YOpnrgI?rel=0" 
    title="Blockchain 101 - A Visual Demo" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
    class="mx-auto rounded-3xl my-10 shadow-xl"
>
</iframe>


## Signing Message using Private Key and Verifying using Public Key

When you sign a message using your private key, you are essentially creating a digital signature that is unique to you and the message.
To verify the signature, someone can use your public key, the signed message, and the generated signature. If the signature can be verified with the public key, it means the message was indeed signed by the private key holder, ensuring the authenticity and integrity of the message.
This process is vital in blockchain transactions, as it allows anyone to verify that a transaction was authorized by the rightful owner of the private key without revealing the private key itself.

Internal working of signing and verifying message using private and public key

**Signing a Message using a Private Key:**

- Data Hashing: The process often starts by creating a cryptographic hash of the message or data you want to sign. A cryptographic hash function takes an input (your message) and produces a fixed-length string of characters, which is a unique representation of that input.
- Private Key and Digital Signature: To sign the message, you use your private key, which is essentially a secret number known only to you. You perform a mathematical operation on the hash of the message and your private key, which produces a digital signature.
- Digital Signature: The digital signature is a unique, fixed-length string of characters that is specific to both the message and your private key. It serves as a proof that the message was signed by you, the owner of the private key.
- Sending the Signature: You send both the message and the digital signature along with it to the recipient or anyone who needs to verify the authenticity of the message.

**Verifying a Message using a Public Key:**

- Hashing the Received Message: The recipient or verifier receives your message and the attached digital signature. They start by applying the same hash function to the received message to generate a hash.
- Using the Public Key: The verifier uses your public key, which is openly available and associated with your private key, to perform a mathematical operation on the digital signature. This operation is the inverse of the one used to create the digital signature.
- Comparison: The verifier now has a result from the operation on the digital signature using your public key. They compare this result to the hash of the received message.
- Verification: If the result from the operation on the digital signature matches the hash of the received message, it means that the digital signature is valid. This verifies that the message was indeed signed by the private key associated with the public key used for verification.


## Gas Concept

#### Gas
Gas is a unit of measurement in the Ethereum network that quantifies the computational work required to execute transactions and smart contracts. It is used to allocate resources like CPU time, memory, and storage.
In Ethereum, all operations, including sending transactions and executing smart contracts, consume gas. Different operations consume different amounts of gas, depending on their complexity and resource requirements.
The concept of gas was introduced to ensure that the network remains secure and efficient. It prevents malicious actors from overloading the network with resource-intensive operations.
Gas can be thought of as a transaction cost, as users must pay for the computational resources they consume when interacting with the Ethereum blockchain.


#### Gas Limit
Gas limits are the maximum amount of gas that a sender is willing to provide for the execution of a transaction or a smart contract.
Gas limits are set by the sender of the transaction, and they represent the maximum computational work the sender is willing to pay for.
If the gas consumed during the execution of a transaction exceeds the gas limit, the transaction will fail, and all changes made by the transaction are reverted (state changes are rolled back). However, the sender still incurs the cost of the gas consumed up to the limit.
Setting an appropriate gas limit is essential. If it's too low, the transaction may fail to execute, and if it's too high, it may be unnecessarily costly.

#### Transaction Fee

Transaction fees are the cost associated with sending a transaction on the Ethereum network. They are typically denominated in Ether (ETH) but are paid using gas. The total transaction fee is calculated as the gas used during the execution of the transaction (gas consumed) multiplied by the current gas price (the cost of one unit of gas in Ether).

Transaction fees serve several purposes:
- Compensation: They compensate miners for including the transaction in a block and performing the computational work.
- Network Resource Allocation: They incentivize users to prioritize their transactions and not flood the network with low-priority or spam transactions.
- Security: They prevent denial-of-service (DoS) attacks by requiring users to pay for the computational resources they consume.



## Units of Ether

Gwei and Wei are two units of measurement for the cryptocurrency Ether (ETH) in the Ethereum blockchain. These units are used to express the value and cost of gas, transaction fees, and other Ethereum-related operation

#### Wei:

- Wei is the smallest denomination of Ether in the Ethereum blockchain. It is named after Wei Dai, a computer scientist known for his contributions to cryptography and the concept of cryptocurrencies.
- 1 Ether (ETH) is equivalent to 1,000,000,000,000,000,000 Wei (10^18 Wei). In other words, Wei is the base unit, and all other units of Ethereum currency are derived from it.
- When interacting with Ethereum smart contracts or sending transactions, gas costs and transaction fees are often denominated in Wei.
- Wei is used for very precise calculations and represents the smallest possible fraction of Ether.

#### Gwei (GigaWei):

- Gwei is a more user-friendly and commonly used unit in the Ethereum ecosystem, especially when discussing gas prices and transaction fees.
- 1 Gwei is equivalent to 1,000,000,000 Wei (10^9 Wei), which is one billion Wei.
- Gwei is named after Wei Dai (Wei) and the SI (International System of Units) prefix "giga" (G), signifying a billion.
- Gas prices are typically expressed in Gwei per gas unit (e.g., 20 Gwei/gas). This indicates that for each unit of gas consumed in a transaction, the sender is willing to pay 20 Gwei.
- Transaction fees are calculated by multiplying the gas used by the gas price in Gwei. For example, if a transaction consumes 21000 gas and the gas price is 20 Gwei/gas, the total fee would be 420,000 Wei (0.00042 ETH).

#### Relationship between Gwei and Wei:

- To convert from Gwei to Wei, multiply the amount in Gwei by 1,000,000,000.
- To convert from Wei to Gwei, divide the amount in Wei by 1,000,000,000.


## Nodes in Blockchain

- The number of nodes in a blockchain network can vary significantly and depends on several factors, including the blockchain's design, purpose, and popularity.
- In a public blockchain network like Bitcoin or Ethereum, there are typically thousands to tens of thousands of nodes distributed worldwide. These nodes validate transactions, maintain the blockchain's history, and participate in the consensus mechanism.
- Private or permissioned blockchains, used in enterprise settings, may have a smaller number of nodes, often managed by a specific group of participants.


#### Creating a New Node:

- Creating a new node in a blockchain network generally involves the following steps:
- Choose a Blockchain: Decide which blockchain network you want to participate in. For example, if you're interested in Bitcoin, you'll need to set up a Bitcoin node.
- Get Hardware: Ensure you have suitable hardware with sufficient computing power, memory, and storage space. The requirements vary depending on the blockchain.
- Install Software: Download and install the official software client for the chosen blockchain. For Bitcoin, it would be Bitcoin Core; for Ethereum, it would be Geth or Parity, depending on your preference.
- Configure the Node: Configure the software client by specifying parameters such as whether you want to run a full node or a light node, network settings, and data storage location.
- Sync with the Network: After installation and configuration, your node will start syncing with the blockchain network. This process can take time, as it involves downloading and verifying the entire blockchain's history.
- Join the Network: Once your node is fully synced, it will participate in the blockchain network. In the case of Bitcoin, it will validate transactions and blocks, and you'll become a part of the Bitcoin peer-to-peer network.


#### Pruning:

- In some blockchain networks, especially those with large and long histories, the removal of older blocks can occur through a process called "pruning."
- Pruning is a mechanism used to reduce the storage requirements of a full node while maintaining the integrity and security of the blockchain.
How pruning works:
- Pruning typically starts after a node has fully synchronized with the blockchain.
- Older blocks that are no longer necessary for validation are deleted from local storage, while the most recent blocks are retained.
- Pruned nodes maintain a "pruned" version of the blockchain, which contains only essential information for verifying new transactions.
- Not all blockchains support pruning, and it's usually an optional feature that can be enabled or disabled based on the node operator's preference.



## Resilience of Blockchains:

Blockchains are often considered resilient due to several key features and mechanisms:

- Decentralization: Blockchains are typically decentralized networks, meaning they are not controlled by a single entity. Instead, they consist of a distributed network of nodes (computers) that participate in the validation and maintenance of the blockchain. This decentralization makes it challenging for any single point of failure to disrupt the network.
- Redundancy: Transactions and data are replicated across multiple nodes in the network. If one node fails or is compromised, other nodes continue to operate, ensuring data availability and network resilience.
- Consensus Mechanisms: Blockchains use consensus mechanisms like proof-of-work (PoW) or proof-of-stake (PoS) to validate and agree on the contents of the blockchain. These mechanisms make it extremely difficult for malicious actors to manipulate the data.
- Immutability: Once data is added to a block and confirmed by the network, it becomes nearly impossible to alter. This immutability ensures that the historical record of transactions remains intact and trustworthy.
- Cryptography: Strong cryptographic techniques are used to secure data on the blockchain. Private keys, public keys, and digital signatures provide a high level of security against unauthorized access and tampering.
- Peer-to-Peer Network: Blockchains operate on a peer-to-peer (P2P) network, where each node communicates directly with other nodes. This eliminates central points of control and enhances resilience against censorship or network failures.

While blockchains are designed to be highly resilient, they are not immune to all threats. Potential risks include 51% attacks (in PoW-based blockchains), smart contract vulnerabilities, and network upgrades. However, the robust design of blockchains and ongoing development efforts aim to mitigate these risks.

## Creation of Blocks

Blocks in a blockchain are created through a specific process that involves several steps:

- Transaction Pool: Transactions initiated by users are collected in a transaction pool (also known as a mempool). These transactions are waiting to be included in the next block.
- Mining: In a proof-of-work (PoW) blockchain, miners compete to solve a cryptographic puzzle. The first miner to find a valid solution gets the right to create the next block and add transactions to it. This process is resource-intensive and requires computational power.
- Block Formation: Once a miner finds a solution, they assemble a new block by selecting a set of transactions from the transaction pool and adding them to the block. The miner also includes a special transaction called the coinbase transaction, which rewards them with newly created cryptocurrency (e.g., Bitcoin) and transaction fees.
- Verification: Other nodes on the network verify the validity of the newly created block. They check that the transactions within the block are valid and that the miner's solution to the cryptographic puzzle is correct.
- Consensus: If the majority of nodes agree that the block is valid, it is added to the blockchain, and the process repeats for the next block. This consensus mechanism ensures that all nodes in the network maintain a consistent and secure ledger.

The creation of blocks and their addition to the blockchain occurs at regular intervals, which is known as the **block generation time**. In Bitcoin, for example, new blocks are added approximately every 10 minutes.




## Concensus

Consensus is a critical concept in blockchain technology, and it refers to the process by which participants in a distributed network agree on the state of a shared ledger. It ensures that all nodes in the network have a consistent view of the data and can trust the information recorded in the blockchain. Consensus mechanisms are the protocols and rules that enable this agreement among participants.

**Key Aspects of Consensus:**

- Shared Ledger: A blockchain is a decentralized, distributed ledger that records transactions or data across multiple nodes. Consensus ensures that all nodes maintain an identical copy of this ledger.
- Immutability: Once data is added to the blockchain through consensus, it becomes extremely difficult to alter or delete. This immutability ensures the integrity of the ledger.
- Security: Consensus mechanisms protect the blockchain against malicious actors who may attempt to manipulate or compromise the data. They make it costly and challenging for attackers to gain control of the network.

## Consensus Mechanisms

### Proof of Work (PoW)

Miners compete to solve complex mathematical puzzles (hash functions).
The first miner to solve the puzzle broadcasts their solution, and if it's correct, the new block is added to the blockchain.
PoW is known for its security but is energy-intensive.

The genesis of all consensus mechanisms, proof of work depends on an army of miners, or validators, to verify transactions through solving arbitrary mathematical problems in the race for a block prize. Essentially, the energy-intensive process hires a network of specialized computers to solve for x, with x being a 64-digit hexadecimal number, known as a hash, which is encoded by cryptography. Crypto mining, the block generative process described above that can reap thousands in rewards in the form of new crypto tokens, is a popular use case for proof-of-work systems.

Pros: Arguably the most decentralized and secure of all verification mechanisms. Lauded as extremely reliable. In the case of Bitcoin, a generous bounty for block validation - currently valued at around $16,800 - has resulted in high engagement on the platform. 

Cons: Slow transaction rates, expensive gas fees, expensive operational fees and eco-hazardous energy usage summarize the inefficiency associated with a proof-of-work system. Bitcoin’s average block time - the time it takes to process a transaction - is 10 minutes, and the process requires a staggering amount of electricity.

Examples: Bitcoin, Dogecoin, Litecoin


### Proof of Stake (PoS)

In PoS, validators (often referred to as "stakers") are chosen to create new blocks and validate transactions based on the amount of cryptocurrency they hold and are willing to "stake" as collateral. In a proof-of-stake model, users pledge a designated number of tokens in a process known as staking to receive validator privileges. When a user’s coins are staked, this means that they are locked away for the time being. Staked coins passively earn rewards and contribute to the network until the user unfreezes them, most often for the purpose of trade. Validating opportunities are rewarded at random, in a sort of lottery pool, to eligible validators. The more tokens staked, the likelier a users’ chances are to win the raffle. In addition to processing trades and adding blocks to the blockchain, validators stand in as active community members responsible for storing data. If any user breaks consensus, their stake is forfeited. 

Pro: The optimal method of consensus in Web3 for scalability. It’s both energy efficient and inexpensive, in respect to both gas fees and equipment.

Cons: Not as decentralized or secure as proof of work. Power is delegated by wallet size. 

Examples: Ethereum, Cardano, Tezos, Algorand

### Delegated Proof of Stake (DPoS)

DPoS is a variation of PoS where a limited number of trusted nodes (delegates) are chosen to produce blocks and validate transactions.
It offers high transaction throughput.

Imagine proof of stake, but with an electoral process. In this approach to determining consensus, network participants cast votes via staking pools for their favored delegate, those who are presumed to be best equipped to protect the network, based on reputation. As a result, validating privileges are reserved and awarded at random only to a team of top tier candidates. At any point in time, a validator can be surpassed by someone deemed more trustworthy. 

Pros: This system is efficient and democratic. It improves from the original proof-of-stake method by being more financially inclusive to users and provides incentive for validators to remain accountable in keeping the network alive.

Cons: While there is an obvious tradeoff of decentralization, a delegated proof-of-stake protocol may be considered too high maintenance for some users as it requires a healthy level of engagement. Appointing network control to a few over many also increases its vulnerability to malicious actors, such as in a 51 percent attack.

Examples: EOS, Lisk, Ark, Tron, BitShares, Steem


### Proof of Authority (PoA)

Favored by private or permissioned blockchains, a proof-of-authority consensus mechanism selects validators based on reputation rather than a user’s digital assets. In this system, a group of validators are pre-approved in a vetting process that often includes a background check.

Pro: This method is highly scalable and requires virtually no computing power.

Con: Any structure designed to concentrate power compromises decentralization. Additionally, a validator’s pseudo-anonymity is forfeited, as public identifiability is part of the deal. 

Examples: Xodex, JP Morgan (JPMCoin), VeChain (VET) and Ethereum Kovan testnet


## Sybil Resistance


Sybil resistance is a concept that refers to a network's ability to resist attacks by malicious actors who create a large number of pseudonymous identities (Sybil nodes) to gain control or disrupt the network. In a Sybil attack, a malicious actor can attempt to overwhelm a network by controlling a significant portion of its nodes, potentially undermining the network's security and consensus mechanisms. Sybil resistance mechanisms aim to make it challenging or economically costly for an attacker to create and control a large number of nodes. Sybil resistance is a fundamental security feature in blockchain networks, as it helps maintain network decentralization and integrity.




## Miners and Validators

The validators are amended to Proof-of-Stake (PoS) which validators are the ones building the block of the chain enabling tasks for checking transactions, verifying activity, voting on outcomes, and maintaining records.
To become a validator is to “buy into” the position means that token owners will have to offer their tokens as collateral for the chance to validate blocks. Token owners who staked their coins will become validators and receive transaction fees as rewards. 

 

Miners are found in Proof-of-Work (PoW) blockchain network, their task is to solve complex mathematical equations to complete the requirement of becoming nodes for a chain. 
Miners usually need to invest in highly advanced equipment, powerful computer RIG, and energy power to run the work. As the name suggests, as proof of work, miners rely on the amount of work they input to receive block rewards.

## Sybil Attack and 51% Attack

[Link](https://www.imperva.com/learn/application-security/sybil-attack/#:~:text=Block%20users%20from%20the%20network,hash%20rate%20or%20computing%20power.)





## Carbon in blockchian


Carbon in the context of blockchain typically refers to "carbon emissions" or the environmental impact associated with blockchain technologies, particularly those that rely on energy-intensive consensus mechanisms like Proof of Work (PoW). Here's an explanation of carbon emissions in blockchain:

1. Environmental Impact of Blockchain:

Blockchain networks, especially those using PoW, require a substantial amount of computational power to validate transactions and secure the network.
Mining, the process by which miners compete to solve complex mathematical puzzles to add new blocks to the blockchain, consumes a significant amount of electricity.
The carbon footprint of blockchain networks is closely tied to the energy source used for mining and the energy efficiency of the hardware employed by miners.
2. Carbon Emissions Concerns:

The environmental concerns surrounding blockchain technologies primarily revolve around the carbon emissions associated with energy-intensive consensus mechanisms like PoW.
Miners often use data centers filled with specialized hardware (ASICs) to compete for block rewards, and these data centers can consume vast amounts of electricity, often sourced from fossil fuels.
The electricity consumption and carbon emissions generated by these mining operations have raised concerns about the environmental impact, especially in regions where the energy mix relies heavily on fossil fuels.
3. Efforts to Address Carbon Emissions:

The blockchain community is increasingly aware of the environmental impact of PoW-based networks, and there are ongoing efforts to mitigate carbon emissions:

a. Transition to Proof of Stake (PoS): Some blockchain projects are transitioning from PoW to PoS consensus mechanisms, which are generally more energy-efficient. Ethereum, for example, is in the process of transitioning to Ethereum 2.0, which utilizes PoS.

b. Carbon Offsetting: Some blockchain projects and cryptocurrency organizations are exploring carbon offset initiatives to neutralize the emissions produced by their operations. This involves investing in projects that reduce greenhouse gas emissions elsewhere.

c. Green Mining Practices: Miners and mining pools are increasingly considering environmentally friendly mining practices, including using renewable energy sources and more energy-efficient hardware.

4. Measuring Carbon Footprint:

Organizations and researchers are developing methods to measure the carbon footprint of blockchain networks accurately. These measurements consider factors like electricity consumption, energy source, and hardware efficiency









 
Scaling,Sharding Rollup


Layers :
L1-Base laye blockchain implmentation
L2-Any Application built on ;layer 2
Rollup
Pow and pos are sybil resistance machine

How many transaction can fir into a block


Merkle tree
Hyperleder fabric
