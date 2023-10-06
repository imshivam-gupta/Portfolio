---
title: "Implementing Caching in Node.js"
subtitle: "What will this cover"
date: "2020-12-27"
---

Caching in Express.js can be implemented using various techniques and caching libraries, each with its own advantages and use cases. 

### In-Memory Caching with node-cache

node-cache is an easy-to-use in-memory caching library for Node.js. It's suitable for small to medium-sized projects where we want to cache data in the server's memory.

```javascript
const express = require('express');
const NodeCache = require('node-cache');
const app = express();

const cache = new NodeCache();
const cacheTTL = 3600; // Cache items for 1 hour

// Middleware to serve cached responses
app.use((req, res, next) => {
  const cacheKey = req.originalUrl;
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    res.send(cachedResponse);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.set(cacheKey, body, cacheTTL);
      res.sendResponse(body);
    };
    next();
  }
});

// Example route that will be cached
app.get('/api/data', (req, res) => {
  const data = fetchDataFromDatabase(); // Replace with your data retrieval logic
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```


### Distributed Caching with Redis

Redis is a popular distributed caching and data store that provides high performance and scalability. It's suitable for applications with higher traffic and distributed environments.

```javascript
const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient();

// Middleware to serve cached responses
app.use((req, res, next) => {
  const cacheKey = req.originalUrl;

  client.get(cacheKey, (err, cachedResponse) => {
    if (cachedResponse) {
      res.send(cachedResponse);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.setex(cacheKey, cacheTTL, body);
        res.sendResponse(body);
      };
      next();
    }
  });
});

// Example route that will be cached
app.get('/api/data', (req, res) => {
  const data = fetchDataFromDatabase(); // Replace with your data retrieval logic
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

### Caching Middleware with express-cache-middleware:

The express-cache-middleware library provides middleware for caching responses in Express.js. It's a versatile option that allows you to cache responses for specific routes or conditions.

```javascript
const express = require('express');
const cacheMiddleware = require('express-cache-middleware');
const app = express();

const cache = new cacheMiddleware();

// Example route that will be cached
app.get('/api/data', cache.route(), (req, res) => {
  const data = fetchDataFromDatabase(); // Replace with your data retrieval logic
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
    
```