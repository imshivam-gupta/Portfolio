---
title: "File System Module in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---


To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System). Node.js gives the functionality of file I/O by providing wrappers around the standard POSIX functions. All file system operations can have synchronous and asynchronous forms depending upon user requirements. To use this File System module, use the require() method:

```javascript
const fs = require("fs");
```

## Synchronous vs Asynchronous

- Synchronous approach: They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the result from previous commands.
- Asynchronous approach: They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations in the first go itself. The result of each operation will be handled once the result is available i.e. each command will be executed soon after the execution of the previous command. While the previous command runs in the background and loads the result once it is finished processing the data.

Example:

```javascript
const fs = require("fs");

// Synchronous
const data = fs.readFileSync("file.txt");
console.log(data.toString());

// Asynchronous
fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

Methods of File System Module: [Link](https://nodejs.org/api/fs.html)