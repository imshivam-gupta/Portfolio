---
title: "Comparison between REST and SOAP Architecture"
subtitle: "What will this cover"
date: "2020-12-27"
---
| Characteristic             | REST                                          | SOAP                                          | GraphQL                                       |
|----------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| **Architecture Type**      | Architectural Style                            | Protocol                                      | Query Language and Runtime                   |
| **Message Format**         | Typically uses XML, JSON, or HTML for data    | Uses XML exclusively for message format        | JSON                                          |
| **Communication Protocol** | Primarily over HTTP, but not limited to it    | Supports multiple transport protocols (e.g., HTTP, SMTP) | Primarily over HTTP                           |
| **State**                  | Stateless by design                           | Can be stateless or stateful                  | Stateless                                     |
| **Method/Verb**            | Uses HTTP methods (GET, POST, PUT, DELETE, etc.) | Defines its own set of methods               | Uses queries and mutations                   |
| **Service Description**    | Often lacks a formal service description      | Defined using WSDL (Web Services Description Language) | Strongly typed schema                         |
| **Security**               | Typically relies on HTTPS for encryption     | Offers WS-Security for authentication and encryption | No specific security mechanism (customizable)  |
| **Error Handling**         | Uses HTTP status codes and custom error messages | Defines standard fault elements for errors   | Standardized error format (extensions possible) |
| **Complex Data Types**     | Supports simple and complex data structures   | Supports complex data types and user-defined structures | Supports custom types and relationships       |
| **Performance**            | Generally considered lightweight and efficient | Can have higher overhead due to XML format and features | Efficient data fetching                       |
| **Interoperability**       | Good for interoperability across different platforms | Supports interoperability through standards | Good for interoperability                      |
| **Caching**                | Supports caching through HTTP mechanisms      | Caching can be implemented but is less common | Supports caching strategies                   |
| **Middleware Support**     | Various frameworks and libraries available    | Middleware and frameworks for SOAP are common | Rich ecosystem of tools and libraries         |
| **Versioning**             | Versioning can be implemented in various ways | Often relies on versioning in WSDL descriptions | Versioning strategies depend on implementation  |
| **Tooling Support**        | Code generation tools available for client and server | Extensive tooling for generating code from WSDL | Tools available for schema generation and query execution |
| **Real-time Data**         | Usually not natively supported, may require additional technologies | Not natively supported, may require additional technologies | Supports real-time data with subscriptions     |
