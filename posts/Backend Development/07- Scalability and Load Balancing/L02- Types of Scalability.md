---
title: "Horizontal and Vertical Scalability"
subtitle: "What will this cover"
date: "2020-12-27"
---


![Horizontal vs Vertical Scalability](https://www.section.io/assets/images/blog/featured-images/horizontal-vs-vertical-scaling-diagram.png)

## Horizontal Scalability

Horizontal scalability, also known as scaling out, involves adding more resources, typically additional servers or instances, to a system or application to handle increased workload or traffic. Horizontal scaling aims to distribute the load across multiple resources, which can be deployed on separate physical machines or virtual instances. This approach is commonly used in modern distributed systems and cloud computing environments. Key characteristics of horizontal scalability include:

##### Pros of Horizontal Scalability:
- High Availability: By adding redundant resources, horizontal scaling can enhance system availability. If one server fails, other instances can still handle incoming requests.
- Cost-Effective: Horizontal scaling allows you to incrementally add resources as needed, making it cost-effective and suitable for handling variable workloads.
- Easy to Implement: Adding new servers or instances is relatively straightforward, making it an accessible approach for scaling.

##### Cons of Horizontal Scalability:
- Complexity: Managing multiple instances and ensuring they work cohesively can introduce complexity in terms of configuration, load balancing, and coordination.
- Limited Per-Instance Resources: Each individual server or instance has a finite amount of resources (CPU, memory, etc.), so horizontal scaling may eventually reach its limits.

##### Scenarios for Horizontal Scalability:
- Web Servers: Popular websites and web applications often employ horizontal scaling to handle traffic spikes. Additional web servers are added to distribute incoming requests.
- Microservices Architectures: In microservices architectures, each microservice can be independently horizontally scaled to meet varying demand.
- Load Balancers: Load balancers are used to evenly distribute traffic across multiple backend servers, facilitating horizontal scalability.

&nbsp; 

## Vertical Scalability (Scaling Up):

Vertical scalability, also known as scaling up, involves increasing the capacity of an existing resource, typically a single server or machine, to handle a greater workload. This is achieved by upgrading hardware components such as CPUs, memory, storage, or network capacity. Vertical scaling is often used when individual resources need additional power or performance. Key characteristics of vertical scalability include:

##### Pros of Vertical Scalability:

- Simplicity: Upgrading a single resource is conceptually simpler than managing multiple instances.
- Higher Individual Performance: Vertical scaling can provide a significant boost in performance for a single resource.
- Resource Consolidation: Vertical scaling can help consolidate workloads onto fewer, more powerful servers, potentially reducing operational costs.

##### Cons of Vertical Scalability:

- Limited Scalability: Vertical scaling has inherent limitations. At some point, it becomes impractical or cost-prohibitive to upgrade further.
- Risk: Upgrading hardware components can introduce risks, including potential downtime and compatibility issues.

##### Scenarios for Vertical Scalability:

- Database Servers: Vertical scaling is common for database servers where increased memory or CPU power can significantly improve query performance.
- Legacy Systems: Older systems or monolithic applications may benefit from vertical scaling when rearchitecting for horizontal scalability is challenging.
- Resource-Intensive Workloads: Applications with resource-intensive workloads, such as scientific simulations, may require vertical scaling to meet performance requirements.


&nbsp;

## Comparing Horizontal and Vertical Scalability

| Horizontal Scalability | Vertical Scalability |
| --- | --- |
| When new server racks are added to the existing system to meet the higher expectation, it is known as horizontal scaling. | When new resources are added in the existing system to meet the expectation, it is known as vertical scaling |
|It expands the size of the existing system horizontally. | 	It expands the size of the existing system vertically. |
| It is easier to upgrade.| It is harder to upgrade and may involve downtime.|
| It is difficult to implement | It is easy to implement |
|It is costlier, as new server racks comprise a lot of resources | 	It is cheaper as we need to just add new resources |
| It takes more time to be done | It takes less time to be done|
| High resilience and fault tolerance | Single point of failure |
| Examples of databases that can be easily scaled- Cassandra, MongoDB, Google Cloud Spanner | Examples  of databases that can be easily scaled- MySQL, Amazon RDS |