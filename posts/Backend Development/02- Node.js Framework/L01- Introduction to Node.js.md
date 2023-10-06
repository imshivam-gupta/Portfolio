---
title: "What is Node.js?"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---

Node.js is an open-source and cross-platform JavaScript runtime environment. Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

### Advantages of Node.js

- Single-threaded based on event driven, non-blocking I/O model.
- Perfect for building fast and scalable data-intensive applications.
- Companies like Netflix, Uber, Paypal, eBay, LinkedIn, Medium, Trello, and many more use Node.js in production.
- Javascript across the entire stack provides faster and more efficient development.
- NPM is huges library of open source packages available for free.
- We can use it when we want to use API with database behind it.
- For data streaming applications like youtube, netflix, etc.
- For real-time chat applications.
- Server side web applications.

### Disadvantages of Node.js

- Not suitable for CPU intensive applications.
- For these applications, we should use other technologies like Python, Java, etc.


### Key Components of Node.js

###### V8 JavaScript Engine

- V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
- Other browsers use similar engines like SpiderMonkey in Firefox, Chakra in Microsoft Edge and JavaScriptCore in Safari.
- V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.
- V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.
- JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it. JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

###### Libuv

- Libuv is a C library that provides the asynchronous I/O functionality used by Node.js.
- Event-driven asynchronous I/O model is integrated.
- It allows the CPU and other resources to be used simultaneously while still performing I/O operations, resulting in efficient use of resources and network.
- It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.
- It also has mechanisms to handle services like File System, DNS, network, child processes, pipes, signal handling, polling, and streaming.
- To perform blocking operations that can’t be done asynchronously at OS level, libuv also includes a thread pool to distribute CPU loads. 
- After Node 10.5 worker threads can also be used to execute JavaScript in parallel. Libuv uses 4 threads by default, but can be changed using the UV_THREADPOOL_SIZE 

```bash
process.env.UV_THREADPOOL_SIZE = 5
```

- It supports Asynchronous TCP (net module) and UDP (dgram module), Asynchronous DNS resolution (used partly for the dns module), Asynchronous file, file system operations & events (fs module).
- It gives functionality of event loop, timers, and process management.

#### Other Key Components

http-parser, c-ares, OpenSSL, zlib, and Google's libev.