---
title: "Types of Caching"
subtitle: "What will this cover"
date: "2020-12-27"
--- 


## Types of Caching:

###### Application Server Cache:

In a web application, let’s say a web server has a single node. A cache can be added in in-memory alongside the application server. The user’s request will be stored in this cache and whenever the same request comes again, it will be returned from the cache. For a new request, data will be fetched from the disk and then it will be returned. Once the new request will be returned from the disk, it will be stored in the same cache for the next time request from the user. Placing a cache on the request layer node enables local storage.

The problem arises when we need to scale your system. We add multiple servers in your web application (because one node can not handle a large volume of requests) and we have a load balancer that sends requests to any node. In this scenario, we’ll end up with a lot of cache misses because each node will be unaware of the already cached request. This is not great and to overcome this problem we have two choices: Distribute Cache and Global Cache. 


###### Distributed Cache:

In the distributed cache, each node will have a part of the whole cache space, and then using the consistent hashing function each request can be routed to where the cache request could be found. Let’s suppose we have 10 nodes in a distributed system, and we are using a load balancer to route the request then…
- Each of its nodes will have a small part of the cached data.
- To identify which node has which request the cache is divided up using a consistent hashing function each request can be routed to where the cached request could be found. If a requesting node is looking for a certain piece of data, it can quickly know where to look within the distributed cache to check if the data is available.
- We can easily increase the cache memory by simply adding the new node to the request pool.

###### Global Cache:

As the name suggests, we will have a single cache space and all the nodes use this single space. Every request will go to this single cache space. There are two kinds of the global cache

- First, when a cache request is not found in the global cache, it’s the responsibility of the cache to find out the missing piece of data from anywhere underlying the store (database, disk, etc).
- Second, if the request comes and the cache doesn’t find the data then the requesting node will directly communicate with the DB or the server to fetch the requested data.

###### CDN (Content Distribution Network):

CDN is used where a large amount of static content is served by the website. This can be an HTML file, CSS file, JavaScript file, pictures, videos, etc. First, request ask the CDN for data, if it exists then the data will be returned. If not, the CDN will query the backend servers and then cache it locally.
