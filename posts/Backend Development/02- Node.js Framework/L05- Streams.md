---
title: "Streams in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. These are used to process(read and write) data piece by piece (chunk by chunk) without buffering the whole data in memory. Streams are memory efficient, fast, and scalable. This is similar to streaming in youtube or netflix. 

This makes it perfect for handling large volume of data for example videos and provide more efficient memory usage.

## Types of Streams

There are four types of streams in Node.js:

- Readable: Used for read operation.
- Writable: Used for write operation.
- Duplex: Used for both read and write operation.
- Transform: A type of duplex stream where the output is computed based on input.

| Stream Type | Description | Example | Imp. Events | Imp. Methods |
| ----------- | ----------- | ------- | ----------- | ------------ |
| Readable | Used for read operation | http requests,fs read streams | data, end, error, close | pipe(), unpipe(), read(), push() |
| Writable | Used for write operation | http responses, fs write streams | drain, finish, error, close | write(), end() |
| Duplex | Used for both read and write operation | net web sockets | - | - |
| Transform | A type of duplex stream where the output is computed based on input | zlib streams | - | - |


Example:

```javascript
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const src = fs.createReadStream("./big.file");
  src.on("data", (chunk) => {
    res.write(chunk);
  });
    src.on("end", () => {
        res.end();
    });
});

app.listen(3000);
```

Now for example if we want to create a program that zips a 400 mb file then if we dont use streams then it will load the whole file in memory and then zip it. But if we use streams then it will load the file in chunks and then zip it. This will be more efficient in terms of memory usage because before that the whole file was loaded in memory and then zipped but now it will load the file in chunks and then zip it.

