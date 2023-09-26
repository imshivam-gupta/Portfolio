---
title: "Introduction to Data Structures and Algorithms"
subtitle: "What will this cover"
date: "2020-12-27"
---



# Hashing

A hash function is a mathematical function that takes an input string of any length and converts it to a fixed-length output string. The fixed-length output is known as the hash value. To be cryptographically secure and useful, a hash function should have the following properties:
- Collision resistant: Give two messages m1 and m2, it is difficult to find a hash value such that hash(k, m1) = hash(k, m2) where k is the key value.
- Preimage resistance: Given a hash value h, it is difficult to find a message m such that h = hash(k, m).
- Second preimage resistance: Given a message m1, it is difficult to find another message m2 such that hash(k, m1) = hash(k, m2).
- Large output space: The only way to find a hash collision is via a brute force search, which requires checking as many inputs as the hash function has possible outputs.
- Deterministic: A hash function must be deterministic, which means that for any given input a hash function must always give the same result.
- Avalanche Effect: This means for a small change in the input, the output will change significantly.
- Puzzle Friendliness: This means even if one gets to know the first 200 bytes, one cannot guess or determine the next 56 bytes.
- Fixed-length Mapping: For any input of fixed length, the hash function will always generate the output of the same length.

## Working of Hashing
The hash function takes the input of variable lengths and returns outputs of fixed lengths. In cryptographic hash functions, the transactions are taken as inputs and the hash algorithm gives an output of a fixed size. 

## Why Hashing is used?
Hashing is used to index and retrieve items in a database because it is faster to find the item using the shorter hashed key than to find it using the original value. It is also used in many encryption algorithms. In Blockchain, hashing is used to create a unique hash value of the input data. The hash value is used to identify the blocks in the blockchain network. Bitcoin uses the SHA-256 hashing algorithm to generate the hash value of the input data. Ethereum uses the Keccak-256 hashing algorithm to generate the hash value of the input data.

## Types of Cryptographic Hash Functions

### SHA-256

One of the safest and most often used hash algorithms is SHA-256. It can be used to scramble and alter data irreversibly, which ensures that the input cannot be deduced from the SHA-256 algorithm’s output, which is 256 bits long. Uses for SHA-256 continue to be useful and include blockchain, cryptocurrencies, Secure Sockets Layer (SSL) certificates, and more. 

SHA-256 is used in blockchain and cryptocurrency applications for mining, proof of work, and creating cryptocurrency addresses. The miner must go through a process in order to generate hash values for newly produced blocks, and that process includes SHA-256. Similar to that, the public key necessary to generate new Bitcoin addresses must conform to SHA-256.

A sort of security technology called an SSL certificate is used to create an encrypted connection between a client and a server. Websites and web services can communicate securely thanks to it. Certain cryptographic components of the SSL certification make use of SHA-256, the current industry standard.

**Features of SHA-256**
- Message Length: 2^64 bits. This means that the message length can be up to 2^64 bits long. The message length is the length of the input to the hash function.
- Message Digest Size: 256 bits. This means that the message digest size is 256 bits long. Message digest size is the size of the output of the hash function.
- Irreversible: The hash function is irreversible, which means that it is not possible to find the input from the output.

### Keccak-256

Keccak-256, a cryptographic function, is part of Solidity (SHA-3 Family). This function computes the hash of an input to a fixed-length output, yielding a singular 32-byte hash from any number of inputs. This cryptographic hash function can only be used in one direction and cannot be reversed. Even the slightest alteration or modification to the string has a significant impact on the hash digest. No matter how much input is provided, the outcome will always be the same.

**Usage of Keccak-256**
- Ethereum uses Keccak-256 to generate the hash value of the input data.
- Small sized cryptographic signature.
- Extract unique identifiers from the data.

| SHA-256 | Keccak-256 |
| --- | --- |
|SHA-256 is the implementation of the SHA-2 standard with a 256 bits key. | Keccak256, a cryptographic function, is part of Solidity (SHA-3 Family).|
| The SHA-256 is weaker than Keccak-256. | The keccak-256 is much stronger compared to SHA-256.|
|The Bitcoin blockchain makes extensive use of SHA-256, including when identifying transaction hashes and when miners are performing proof-of-work mining.| Ethereum uses Keccak-256 in a consensus engine called Ethash.  |


