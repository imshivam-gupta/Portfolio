---
title: "Serverless vs Microservices vs SOA"
subtitle: "What will this cover"
date: "2020-12-27"
---


| Characteristic                  | Microservices                                      | Service-Oriented Architecture             | Serverless Architecture                            |
|---------------------------------|---------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| **Granularity**                     | Smaller, fine-grained services                    | Can vary from fine-grained to coarse-grained       | Functions (smaller than traditional services)       |
| **Independence**                    | Highly independent, services have minimal coupling | Loosely coupled, services have some independence    | Stateless and event-driven, high independence      |
| **Scaling**                         | Services can be individually scaled               | Services can be individually scaled                 | Automatically scaled based on demand               |
| **Communication Protocol**          | Typically uses lightweight protocols (HTTP, gRPC) | May use various protocols (HTTP, SOAP, REST, etc.)  | Event-driven (HTTP, event triggers, etc.)          |
| **Development Teams **              | Smaller, focused teams often own individual services | Teams may own specific services                   | Development teams focus on functions               |
| **Data Storage**                  | Each microservice may have its own database       | Can use shared or individual databases             | Typically relies on external data storage systems   |
| **State Management**                | Stateless services with no shared state            | May have stateful services, depending on design    | Stateless functions with no shared state           |
| **Deployment**                      | Independently deployable services                 | Independently deployable services                   | Automatic deployment, no server management         |
| **Resource Management**             | Requires more operational management              | Requires some operational management                | Minimal server management, auto-scaled resources    |
| **Use Cases**                       | Ideal for complex, highly scalable applications  | Commonly used in enterprise-level applications      | Event-driven applications, automation, and APIs     |
