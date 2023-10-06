---
title: "Cluster Module in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---

Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads. When process isolation is not needed, use the worker_threads module instead, which allows running multiple application threads within a single Node.js instance.


## Example of Cluster Module and Working


```javascript
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

The worker processes are spawned using the child_process.fork() method, so that they can communicate with the parent via IPC and pass server handles back and forth.

The cluster module supports two methods of distributing incoming connections. The first one (and the default one on all platforms except Windows) is the round-robin approach, where the primary process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process. The second approach is where the primary process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly. The second approach should, in theory, give the best performance. In practice however, distribution tends to be very unbalanced due to operating system scheduler vagaries. Loads have been observed where over 70% of all connections ended up in just two processes, out of a total of eight.


## Cluster Module Properties and Methods

| Method | 	Description |
| ------ | ------------- |
| disconnect()| 	Disconnects all workers|
| exitedAfterDisconnect	| Returns true if a worker was exited after disconnect, or the kill method|
| fork()	| Creates a new worker, from a master|
| id	| A unique id for a worker|
| isConnected	| Returns true if the worker is connected to its master, otherwise false|
| isDead| 	Returns true if the worker's process is dead, otherwise false|
| isMaster| 	Returns true if the current process is master, otherwise false|
| isWorker| 	Returns true if the current process is worker, otherwise false|
| kill()| 	Kills the current worker|
| process| 	Returns the global Child Process|
| schedulingPolicy| 	Sets or gets the schedulingPolicy|
| send()| 	sends a message to a master or a worker|
| settings| 	Returns an object containing the cluster's settings|
| setupMaster()	| Changes the settings of a cluster|
| worker| 	Returns the current worker object|
| workers	| Returns all workers of a master|