---
title: "Load Balancing"
subtitle: "What will this cover"
date: "2020-12-27"
---

Load balancing is a critical concept in computer networking and distributed computing that involves the distribution of incoming network traffic or workloads across multiple servers, resources, or paths. The primary goal of load balancing is to ensure that each resource is utilized efficiently, prevent overload on any single resource, and enhance the performance, availability, and reliability of a system or application.  


![Load Balancing](https://phoenixnap.com/kb/wp-content/uploads/2021/06/how-does-load-balancing-work.png)

## Characteristics of Load Balancing

##### Traffic Distribution:

Load balancers evenly distribute incoming network traffic or requests across multiple servers or resources. This distribution can be based on various algorithms or rules, depending on the load balancing strategy.

##### Load Balancing Algorithms:

Load balancers use specific algorithms to determine how to route traffic. Common algorithms include:
- Round Robin: Requests are distributed sequentially to each server in a rotating order.
- Least Connections: Traffic goes to the server with the fewest active connections, distributing load based on real-time server capacity.
- Weighted Distribution: Servers are assigned different weights, allowing more traffic to be directed to higher-capacity servers.

##### Health Checks:
Load balancers often perform health checks on the servers in their pool to determine their availability and responsiveness. Unresponsive or failed servers are temporarily taken out of the rotation until they recover.

##### Session Persistence:
Some applications require session persistence, also known as sticky sessions. In such cases, the load balancer ensures that all requests from a specific client are directed to the same backend server to maintain session state.

##### SSL/TLS Offloading:
Load balancers can handle SSL/TLS encryption and decryption, offloading this resource-intensive process from backend servers, thereby improving overall system performance.

##### Content-Based Routing:
Load balancers can route traffic based on content or characteristics of the request, such as URL paths, HTTP headers, or specific content types.

##### Global Load Balancing:
In distributed and cloud environments, global load balancers distribute traffic across multiple data centers or regions to provide low-latency and high-availability services.

##### Dynamic Load Balancing:
Dynamic load balancing adjusts the load balancing configuration in real-time based on changing traffic patterns and server health, ensuring optimal resource utilization.

## Types of Load Balancing

##### Software Load Balancers in Clients

- All the logic of load balancing resides on the client application (Eg. A mobile phone app).  The client application will be provided with a list of web servers/application servers to interact with.
- The application chooses the first one in the list and requests data from the server. If any failure occurs persistently (after a configurable number of retries) and the server becomes unavailable, it discards that server and chooses the other one from the list to continue the process. 
- This is one of the cheapest ways to implement load balancing. 

##### Software Load Balancers in Services
- These load balancers are the pieces of software that receive a set of requests and redirect these requests according to a set of rules. This load balancer provides much more flexibility because it can be installed on any standard device (Ex: Windows or Linux machine). 
- It is also less expensive because there is no need to purchase or maintain the physical device, unlike hardware load balancers. You can have the option to use the off-the-shelf software load balancer or you can write your custom software (Ex: load balances Active Directory Queries of Microsoft Office365) for load balancing.

##### Hardware Load Balancers
- As the name suggests we use a physical appliance to distribute the traffic across the cluster of network servers. These load balancers are also known as Layer 4-7 Routers and these are capable of handling all kinds of HTTP, HTTPS, TCP, and UDP traffic. 
- HLDs provide a virtual server address to the outside world. When a request comes from a client application, it forwards the connection to the most appropriate real server doing bi-directional network address translation (NAT). 
- HLDs can handle a large volume of traffic but it comes with a hefty price tag and it also has limited flexibility. HLDs keep doing the health checks on each server and ensure that each server is responding properly. 
- If any of the servers don’t produce the desired response,  it immediately stops sending the traffic to the servers. These load balancers are expensive to acquire and configure, which is the reason a lot of service providers use them only as the first entry point for user requests. Later the internal software load balancers are used to redirect the data behind the infrastructure wall.

## Applications of Load Balancing

##### Web Applications:
Load balancers are commonly used in web applications to distribute user requests across multiple web servers. This improves responsiveness and ensures high availability.

##### Content Delivery Networks (CDNs):
CDNs use load balancing to distribute cached content (such as images, videos, and scripts) from edge servers to users around the world, reducing latency and improving load times.

##### Cloud Environments:
Cloud providers offer load balancing services that distribute traffic across multiple instances or virtual machines, enabling scalable and fault-tolerant architectures.

##### Microservices Architectures:
Load balancing is crucial in microservices architectures, where requests are routed to different microservices based on specific criteria, such as API endpoints or service availability.

##### Database Clustering:
Database clusters use load balancing to distribute database queries across multiple nodes to improve query performance and achieve high availability.

##### Firewall and Security:
Load balancers can act as security devices, filtering malicious traffic, and distributing legitimate traffic to protected servers.

##### VoIP and Video Streaming:
In real-time communication services like Voice over IP (VoIP) and video streaming, load balancers ensure efficient distribution of media streams for high-quality user experiences.