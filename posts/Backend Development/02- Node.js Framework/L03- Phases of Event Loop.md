---
title: "Phases of Event Loop"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---


#### Phase 1: Timers

- In Node.js timers, or functions that execute callbacks after a set period of time, are provided by the core timers module. This module provides two global functions: setTimeout(), and setInterval(). These allows to define code to execute after a period of time. 
- Both functions take a callback function, and delay in milliseconds, as their arguments. Additional arguments can optionally be passed after the delay -- those arguments will be passed to the callback function.
- The timers phase is executed directly by the Event Loop. At the beginning of this phase the Event Loop updates its own time. Then it checks a queue, or pool, of timers. This queue consists of all timers that are currently set. The Event Loop takes the timer with the shortest wait time and compares it with the Event Loop's current time. If the wait time has elapsed, then the timer's callback is queued to be called once the call stack is empty.
- Node.js has different types of timers: setTimeout() and setInterval(). The fundamental difference between them is that setInterval() has a repeat flag which places the timer back into the queue once its execution is finished. This is a how a process, like a server, can stay "alive" waiting for a request indefinitely.
- The nature of executing timer callbacks as part of the Event Loop explains the non-obvious feature that a timer's wait time is not an exact time in which the callback will be executed -- it is, in fact, a minimum time that will pass before the callback is queued for execution.

Example:

```javascript
setTimeout(() => {
  console.log('Hello after 4 seconds');
}, 4 * 1000);

setInterval(() => {
  console.log('Hello every 3 seconds');
}, 3 * 1000);
```


#### Phase 2: I/O Callbacks

- When application is waiting for a file to be read, it doesn't have to necessarily wait until the system gets back to it with the content of the file. It can continue code execution and receive the file's content asynchronously when it is ready.
- This is what non-blocking I/O interfaces allow us to do. The asynchronous I/O request is recorded into the queue and then the main call stack can continue working as expected. In the second phase of the Event Loop the I/O callbacks of completed or errored out I/O operations are processed.
- The fs.readFile operation is a classic I/O operation. Node.js will pass the request to read a file filesystem of your OS. Then the code execution will immediately continue past the fs.readFile() code to myAwesomeFunction(). When the I/O operation is complete, or errors out, its callback will be placed in the pending queue and it will be processed during the I/O callbacks phase of the Event Loop.


Example:

```javascript
fs.readFile("/file.md", (err, data) => {
  if (err) throw err;
});

myAwesomeFunction();
```


#### Phase 3: Idle/ Waiting/ Preparation

- During this phase the Event Loop performs internal operations of any callbacks. Technically speaking, there is no possible direct influence on this phase, or its length. No mechanism is present that could guarantee code execution during this phase. It is primarily used for gathering information, and planning of what needs to be executed during the next tick of the Event Loop.



#### Phase 4: Polling for I/O

- This is the phase in which all the JavaScript code that we write is executed, starting at the beginning of the file, and working down. Depending on the code it may execute immediately, or it may add something to the queue to be executed during a future tick of the Event Loop.
- During this phase the Event Loop is managing the I/O workload, calling the functions in the queue until the queue is empty, and calculating how long it should wait until moving to the next phase. All callbacks in this phase are called synchronously in the order that they were added to the queue, from oldest to newest.
- This is the phase that can potentially block our application if any of these callbacks are slow and not executed asynchronously.
- If there are any setImmediate() timers scheduled, Node.js will skip this phase during the current tick and move to the setImmediate() phase. If there are no functions in the queue, and no timers, the application will wait for callbacks to be added to the queue and execute them immediately, until the internal setTimeout() that is set at the beginning of this phase is up. At that point, it moves on to the next phase. The value of the delay in this timeout also depends on the state of the application.

> Note: this phase is optional. It may not happen on every tick, depending on the state of your application.


#### Phase 5: setImmediate() callbacks

Node.js has a special timer, setImmediate(), and its callbacks are executed during this phase. This phase runs as soon as the poll phase becomes idle. If setImmediate() is scheduled within the I/O cycle it will always be executed before other timers regardless of how many timers are present.

#### Phase 6: Close events

This phase executes the callbacks of all close events. For example, a close event of web socket callback, or when process.exit() is called. This is when the Event Loop is wrapping up one cycle and is ready to move to the next one. It is primarily used to clean the state of the application.



Examples - 

```javascript
const fs = require('fs');

setTimeout(()=> console.log('Timer 1 finished'), 0); 
// This is not in the event loop we need to use this in callback function


setImmediate(()=> console.log('Immediate 1 finished')); 
// This is in the event loop we need to use this in callback function
// No order is guaranteed between setImmediate and setTimeout if they are in top level code

fs.readFile('test-file.txt', ()=> {
    console.log('I/O finished');
    console.log('-----------------');
    setTimeout(()=> console.log('Timer 2 finished'), 0);
    setTimeout(()=> console.log('Timer 3 finished'), 3000);
    setImmediate(()=> console.log('Immediate 2 finished'));

    process.nextTick(()=> console.log('Process.nextTick'));
});

console.log('Hello from the top-level code');
```

Output - 

```bash
Hello from the top-level code
Timer 1 finished
Immediate 1 finished
I/O finished
-----------------
Process.nextTick
Immediate 2 finished
Timer 2 finished
Timer 3 finished
```

> Statements above line were not in event loop and statements below line were in event loop. Immediate 2 finished was printed before Timer 2 finished because when both setImmediate and setTimeout with a delay of 0 are in the event loop queue, setImmediate callbacks will be executed first, followed by setTimeout callbacks. Also Process.nextTick is executed before Immediate 2 finished because process.nextTick() fires immediately on the same phase. This means that it will always execute before setTimeout and setImmediate. 


Example - 

```javascript
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(()=> console.log('Timer 1 finished'), 0);
setImmediate(()=> console.log('Immediate 1 finished'));

fs.readFile("test-file.txt",()=>{
    console.log('I/O finished');
    console.log('-----------------');

    setTimeout(()=> console.log('Timer 2 finished'), 0);
    setTimeout(()=> console.log('Timer 3 finished'), 3000);
    setImmediate(()=> console.log('Immediate 2 finished'));

    process.nextTick(()=> console.log('Process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start, 'Password encrypted');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start, 'Password encrypted');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start, 'Password encrypted');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start, 'Password encrypted');
    });
});

console.log('Hello from the top-level code');
```

Output - 

```bash
Hello from the top-level code
Timer 1 finished
Immediate 1 finished
I/O finished
-----------------
Process.nextTick
Immediate 2 finished
Timer 2 finished
2262 'Password encrypted'
2272 'Password encrypted'
2303 'Password encrypted'
2310 'Password encrypted'
Timer 3 finished
```

> All took nearly same time to execute because all were executed in thread pool and by default there are 4 threads in thread pool. So all were executed in parallel. We can modify the number of threads in thread pool by using process.env.UV_THREADPOOL_SIZE = 2; before the thread pool code.