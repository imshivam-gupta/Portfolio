---
title: "Characterstics of Service Oriented Architecture"
subtitle: "What will this cover"
date: "2020-12-27"
---
 

#### Provides interoperability between the services

SOA promotes interoperability by allowing services to communicate with each other regardless of the technologies or platforms they are built on. This is achieved through the use of standardized communication protocols and data formats, such as HTTP, SOAP, XML, or JSON. Interoperability enables different services, even those developed with different technologies, to work together seamlessly. Imagine a large organization with various departments, each using different software systems. SOA allows these systems to communicate seamlessly. For example, the HR system can interact with the Finance system using standardized protocols like HTTP or REST, enabling data exchange without compatibility issues.

#### Service Encapsulation:

Service encapsulation refers to the practice of encapsulating the internal implementation details of a service while exposing a well-defined interface. Clients interact with a service solely through its interface, which hides the underlying complexities. This encapsulation promotes modularity and allows for changes to the internal implementation without affecting service consumers.  Consider an e-commerce platform with a payment service. Service encapsulation ensures that the payment service's internal payment processing logic is hidden from external systems. External systems, such as the order processing module, interact with the payment service through a well-defined interface, like an API, without needing to understand its internal workings. 

#### Service Discoverability:

Service discovery mechanisms help services locate and communicate with other services dynamically. In large SOA ecosystems, services need a way to find each other without hardcoding IP addresses or endpoints. Service registries and service brokers are often used for this purpose. In a cloud-based environment, dynamic service discovery is crucial. Tools like Kubernetes provide service discovery mechanisms. Services register themselves with a service registry or broker, allowing other services to discover and communicate with them without needing to know their specific network addresses. It is different from domain name resilution because it is dynamic and can be used to locate services in a distributed environment whereas domain name resolution is static and is used to locate servers in a network.


#### Service Composition:

Service composition involves combining multiple services to achieve a higher-level business function or workflow. SOA enables the composition of services in a flexible and orchestrated manner. For example, you can compose services to create complex business processes by chaining together individual services.  Imagine an e-commerce platform that uses multiple services for order processing, inventory management, and payment processing. Service composition enables the creation of complex workflows where a customer's order triggers a sequence of services. For example, when an order is placed, services are orchestrated to update inventory, charge the customer, and send a confirmation email. 


#### Service Reusability:

SOA promotes service reusability, allowing services to be used in various contexts and applications. Reusable services reduce development effort and improve consistency across different parts of an application or multiple applications within an organization. A shipping service designed for one application can be reused across various e-commerce applications within the same organization. This reusability reduces development effort and ensures consistent shipping calculations and tracking across different applications.


#### Service Integration:

SOA facilitates the integration of disparate systems and applications by exposing their functionalities as services. Integration can be achieved through standardized communication protocols, making it easier to connect and exchange data between different components of a distributed system. Consider a retail company that integrates its online store with a third-party payment gateway for credit card processing. The payment gateway's functionality is exposed as a service, allowing seamless integration with the store's checkout process through standardized communication protocols.


#### Quality of Service (QoS) and SLA:

SOA often includes mechanisms for defining and enforcing Quality of Service (QoS) levels through Service Level Agreements (SLAs). SLAs specify the expected performance, availability, and reliability of a service. This ensures that service consumers can rely on the promised level of service quality. Cloud service providers offer QoS guarantees through SLAs. For example, a cloud provider might promise 99.9% uptime for a database service. The SLA defines the expected performance, availability, and support levels, ensuring that consumers can rely on the agreed-upon service quality.


#### Loose Coupling:

Services in SOA are designed to be loosely coupled, meaning they have minimal dependencies on each other. This loose coupling allows services to evolve independently without causing disruptions to other services. Changes to one service do not require corresponding changes in other services. In a large e-commerce platform, services like user authentication and product catalog are loosely coupled. Changes to the authentication service, such as upgrading security features, do not require corresponding updates in the product catalog service. This independence allows services to evolve independently.


#### Location Transparency, Scalability, and Availability:

SOA provides location transparency, meaning that service consumers do not need to know the physical location of a service. This promotes better scalability and availability since services can be distributed across multiple servers or locations to handle varying workloads and ensure high availability. Cloud providers distribute services across multiple data centers or regions to ensure high availability and scalability. Service consumers do not need to know the physical location of a service; they can access it globally with minimal latency, thanks to location-transparent routing.


#### Ease of Maintenance and Reduced Costs:

SOA can lead to ease of maintenance and reduced development and deployment costs. Services can be updated or replaced without affecting the entire system, reducing the risk and cost associated with making changes to a monolithic application. Additionally, reusing services across applications can lead to cost savings and improved maintenance. Updating a single service within a complex application is less risky and costly than modifying an entire monolithic application. Additionally, reusing services across multiple applications reduces development and maintenance costs.