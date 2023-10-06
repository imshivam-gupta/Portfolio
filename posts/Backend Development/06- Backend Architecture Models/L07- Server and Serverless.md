---
title: "Server and Serverless"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Server 

A server, in the context of computing and web development, refers to a physical or virtual machine that provides services or resources to clients over a network. Servers are responsible for processing requests, executing tasks, and delivering responses to clients. They play a central role in traditional client-server architectures and are typically managed, configured, and maintained by system administrators or DevOps teams. 

##### Key characteristics of servers include:

- Infrastructure: Servers require infrastructure management, including hardware provisioning, software installation, and ongoing maintenance.
- Resource Management: Administrators are responsible for allocating and managing server resources such as CPU, memory, and storage.
- Scaling: To handle increased demand, servers often require manual scaling by adding more resources or replicating servers in a load-balanced configuration.
- Costs: Servers have associated costs, including hardware, software licenses, and operational expenses.
- Responsibility: Administrators are responsible for server uptime, security, and performance.

## Serverless

Serverless computing, often referred to as Function as a Service (FaaS), is a cloud computing paradigm in which developers write and deploy code in the form of functions without the need to manage underlying server infrastructure. In a serverless environment, cloud providers automatically allocate and manage resources for executing functions in response to events or requests. 

##### Key characteristics of serverless computing include:

- Event-Driven: Serverless functions are triggered by events, such as HTTP requests, database changes, or messages from queues.
- Scalability: Serverless platforms automatically scale resources to handle the number of incoming requests or events. Developers do not need to manually provision or manage servers.
- Billing Model: Users are billed based on the actual compute resources used during the execution of functions, often measured in milliseconds.
- Abstraction: Developers focus on writing code (functions) and do not concern themselves with server provisioning, maintenance, or scaling.
- Statelessness: Serverless functions are typically stateless, and any required state or data persistence must be managed externally, such as in databases or storage services.


### Server vs Serverless

| Characteristic        | Server (Traditional)                     | Serverless (FaaS)                          |
|-----------------------|-----------------------------------------|--------------------------------------------|
| Infrastructure        | Requires manual infrastructure management | Cloud provider manages infrastructure       |
| Resource Scaling      | Manual scaling often required             | Automatic scaling based on demand           |
| Billing Model         | Fixed costs for server resources         | Pay-per-use billing based on function execution |
| Resource Allocation   | Resources allocated upfront              | Resources allocated dynamically as needed   |
| Responsibility        | Admins manage server uptime and security | Cloud provider manages infrastructure       |
| State Management      | State can be managed on the server       | State is often external (e.g., databases)   |
| Latency               | Lower latency due to server control      | Slight latency variability due to dynamic resource allocation |
