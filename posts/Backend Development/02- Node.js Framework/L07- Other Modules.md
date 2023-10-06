---
title: "Other Modules in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---


## DNS Module

DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup. 

Advantage: No need for memorizing IP addresses – DNS servers provide a nifty solution for converting domain or subdomain names to IP addresses. 

Example: In this example, we will print the address of GeeksforGeeks on the console.

```javascript
const dns = require('dns');
 
const website = 'geeksforgeeks.org';
// Call to lookup function of dns
dns.lookup(website, (err, address, family) =>; {
    console.log('address of %s is %j family: IPv%s',
        website, address, family);
});
```

## OS Module

Node.js OS module provides information about the computer operating system.

```javascript
// Import the os module
const os = require("os");

let osVersion = os.version();
console.log("OS Version:", osVersion);
```


## Crypto Module

Node.js crypto module handles cryptographic functionality. Cryptography is an important aspect when we deal with network security. ‘Crypto’ means secret or hidden. Cryptography is the science of secret writing with the intention of keeping the data secret.

Example: 

```javascript
// Node.js program to demonstrate the
// cipher.final() method

// Importing crypto module
const crypto = require('crypto');

// Creating and initializing algorithm and password
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// Getting key for the cipher object
const key = crypto.scryptSync(password, 'salt', 24);

// Creating and initializing the static iv
const iv = Buffer.alloc(16, 0);

// Creating and initializing the cipher object
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Getting buffer value
// by using final() method
let value = cipher.final('hex');

// Display the result
console.log("buffer :- " + value);
```

The crypto.pbkdf2Sync() method gives a synchronous Password-Based Key Derivation Function 2 i.e, (PBKDF2) implementation. Moreover, a particular HMAC digest algorithm which is defined by digest is implemented to derive a key of the required byte length (keylen) from the stated password, salt, and iterations. Syntax:
    
```javascript
crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
```

Parameters:

- password: It is of type string, Buffer, TypedArray, or DataView.
- salt: It must be as unique as possible. However, it is recommended that a salt is arbitrary and in any case, it is at least 16 bytes long. It is of type string, Buffer, TypedArray, or DataView.
- iterations: It must be a number and should be set as high as possible. So, the more is the number of iterations, the more secure the derived key will be, but in that case, it takes a greater amount of time to complete. It is of type number.
- keylen: It is the key of the required byte length and it is of type number.
- digest: It is a digest algorithm of string type.

Example:

```javascript
const crypto = require('crypto');
 
// Implementing pbkdf2Sync
const key = crypto.pbkdf2Sync('secret',
       'salt', 100000, 100, 'sha512');
 
// Prints key which is encoded and converted
// to string
console.log(key.toString('hex'));
```

## HTTP Module

To make HTTP requests in Node.js, there is a built-in module HTTP in Node.js to transfer data over the HTTP. To use the HTTP server in the node, we need to require the HTTP module. The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

Example:

```javascript
const http = require('http');
  
// Importing agentkeepalive module
const Agent = require('agentkeepalive');
  
// Creating new agent
const keepAliveAgent = new Agent({});
  
console.log(keepAliveAgent.maxSockets);
  
// Options object
const options = {
    host: 'geeksforgeeks.org',
    port: 80,
    path: '/',
    method: 'GET',
    agent: keepAliveAgent,
};
  
// Requesting via http server module
const req = http.request(options, (res) => {
    console.log("StatusCode: ", res.statusCode);
});
  
req.end();
```