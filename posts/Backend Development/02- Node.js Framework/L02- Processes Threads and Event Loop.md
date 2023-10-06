---
title: "Threads and Event Loop in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---

## Working of Node.js Process

- A process is an instance of a computer program that is being executed.
- When we run a Node.js program, it creates a process.
- In the process Node.js works on a single thread
- Any number of clients that connect to the server are handled by the same thread so it is also called single threaded model. We need to make sure that the code we write is non-blocking.
- When thread runs first the top level code is executed the required modules are loaded and the event callback functions are registered.
- Then the event loop starts and the process enters the event loop.
- Since some taks are quite long and may block the event loop, Node.js provides ways to run these tasks in parallel and supply the results back to the event loop. This is done through thread pool. We get 4 additional threads in the thread pool by default and we can increase or decrease the number of threads in the thread pool upto 128.

![Working of Node.js](https://media.geeksforgeeks.org/wp-content/uploads/20210223163055/ezgifcomgifmaker2.gif)


## Event Loop

All the application code that is inside callback functions (non blocking code) is executed by the event loop. The event loop is a single thread that is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. The event loop is the heart of Node.js. 

Node.js is built around callback functions. It has event driven architecture that is events are emitted event loops picks them up and callbacks are called. Event Loop does orchestration that is it decides which callback to call when. 

The Event Loop is composed of the following six phases, which are repeated for as long as the application still has code that needs to be executed:
- Timers
- I/O Callbacks
- Waiting / Preparation
- I/O Polling
- setImmediate() callbacks
- Close events

These six phases create one cycle, or loop, which is known as a tick. A Node.js process exits when there is no more pending work in the Event Loop, or when process.exit() is called manually. A program only runs for as long as there are tasks queued in the Event Loop, or present on the call stack. Some phases are executed by the Event Loop itself, but for some of them the main tasks are passed to the asynchronous C++ APIs. 