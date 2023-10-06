---
title: "Express Framework"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---


Express is a minimal node.js framework a h higher level of abstraction. It contains very robust set of features: complex routing easier handiling of requests, responses, middleware, server side rendering etc. It is easier to implement MVC architecture.


## Installation

```bash
npm install express --save
```

## Handling Requests and Responses

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST request. We use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).

These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.


```javascript
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

```



## Middleware

Comparison of middleware in Node.js and Express.js

```javascript
const http = require('http');

// Define the middleware function
function logRequest(req, res, next) {
  console.log(`Request URL: ${req.url}`);
  next(); // Call next to pass control to the next middleware
}

const server = http.createServer((req, res) => {
  // Apply the middleware to every request
  logRequest(req, res, () => {
    // Handle incoming requests here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

```javascript
const express = require('express');
const app = express();

// Define the middleware function
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next(); // Call next to pass control to the next middleware
});

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

## Serving Static Files

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

```javascript
app.use(express.static('public'))
```

