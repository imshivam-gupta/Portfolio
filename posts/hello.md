---
title: "Getting Started with AWS"
subtitle: "Create an AWS account and set up CLI/SDK access."
date: "2020-12-27"
---

# Distributed Computing

A distributed system is a collection of independent computers, interconnected via a network, capable of collaborating on a task. The machines linked in a distributed system are autonomous. In distributed systems, the entire network will be viewed as a computer. The multiple systems connected to the network will appear as a single system to the user. Thus the distributed systems hide the complexity of the underlying architecture to the user. In a distributed system, each device or system has its own processing capabilities and may also store and manage its own data. These devices or systems work together to perform tasks and share resources, with no single device serving as the central hub.

Distributed computing is computing performed in a distributed system. Distributed computing is widely used due to advancements in machines and faster and cheaper networks.

&nbsp;

## Features of Distributed Computing

- Communication is hidden from users
- Applications interact in uniform and consistent way
- High degree of scalability
- A distributed system is functionally equivalent to the systems of which it is composed.
- Resource sharing is possible in distributed systems.
- Distributed systems act as fault tolerant systems
- Enhanced performance

| Centralized System | Distributed System |
| --- | --- |
| In Centralized Systems, several jobs are done on a particular central processing unit(CPU) | In Distributed Systems, jobs are distributed among several processors. The Processor are interconnected by a computer network |
| They have shared memory and shared variables. | They have no global state (i.e.) no shared memory and no shared variables. |
| Clocking is present. | No global clock |

&nbsp;

# Examples of Distributed Computing

#### Web Search -

- The task of a web search engine is to index the entire contents of the World Wide Web. Distributed search is a search engine model in which the tasks of Web crawling, indexing and query processing are distributed among multiple computers and networks.
- The search engines were supported by a single supercomputer . But in recent years, they have moved to a distributed model. Google search relies upon thousands of computers crawling the Web from multiple locations all over the world.
- Google's distributed search system, each computer involved in indexing crawls and reviews a portion of the Web, taking a URL and following every link available from it.
- The computer gathers the crawled results from the URLs and sends that information back to a centralized server in compressed format.

**Massively multiplayer online games (MMOGs) -**

- These games simulate real-life as much as possible. As such it is necessary to constantly evolve the game world using a set of laws. These laws are a complex set of rules that the game engine applies with every clock tick.
- MMOGs must be able to handle a very large number of simultaneous users. As the information transferred between the players and the game server is large, the bandwidth required to support a huge number of players if enormous.
- Very large virtual worlds require huge computational power to simulate the existence of life (AI Algorithms). No single processor machine can handle the computational load required.
- These gaming applications work on both client server and distributed architectures. In distributed architectures, the large virtual world of the game is split into different smaller areas and each area is to be handled by a separate physical machine (server).
- Therefore both the bandwidth and computational load is spread out on many machines, thus making the application distributed.

**Financial Trading -**

- The financial trading is now moving to distributed systems. These systems require frequent modifications, in response to the communication.
- Processing the events in distributed systems, demands reliability. So distributed event based systems are used.
- They can create web applications that use the power of distributed systems to do the following: Deliver low-cost, personalized premiums.
- Use distributed databases to securely support a very high volume of financial transactions.

**Cloud Computing -**

- A cloud computing system, where resources such as computing power, storage, and networking are delivered over the Internet and accessed on demand.
- In this type of system, users can access and use shared resources through a web browser or other client software.

**Healthcare -**

- Healthcare and life sciences use distributed computing to model and simulate complex life science data. Image analysis, medical drug research, and gene structure analysis all become faster with distributed systems. These are some examples:
    - Reduce genomic data processing times to get early insights into cancer, cystic fibrosis.
    - Develop intelligent systems that help doctors diagnose patients by processing a large volume of complex images like MRIs, X-rays, and CT scans.

&nbsp;

## Trends in Distributed Computing

Distributed systems are undergoing a period of significant change and this can be traced back to a number of influential trends:

**Pervasive networking and the modern Internet -**

- The products that are connected to the pervasive network are easily available . The main goal of pervasive computing is to create an environment where the connectivity of devices is embedded in such a way that the connectivity is unobtrusive and always available.
- Internet can be seen as a large distributed system. Internet is actually a collection of numerous sub networks operated by companies and other organizations and typically protected by firewalls. The role of a firewall is to protect an intranet by preventing unauthorized messages from leaving or entering.
- Internet Service Providers (ISPs) are companies that provide broadband links and other types of connection to individual users and small organizations, enabling them to access services anywhere in the Internet as well as providing local services such as email and web hosting.
- The intranets are linked together by backbones network link with a high transmission capacity, employing satellite connections, fibre optic cables and other high-bandwidth circuits

**Mobile and ubiquitous computing -**

- Internet is now build into numerous small devices from laptops to watches.
- These devices must have high degree of portability. Mobile computing supports this. Mobile computing is the performances of computing tasks while the user dynamically changing his geographic location.
- Ubiquitous computing (small computing ) means that all small computing devices will eventually become so pervasive in everyday objects.

| Ubiquitous Computing | Mobile Computing |
| --- | --- |
| They could connect tens/hundreds of computing devices in every room/person, becoming “invisible” and part of the environment – WANs, LANs, PANs  networking in small spaces | They could connect a few devices for every person, small enough to carry around – devices connected to cellular networks or WLANs |
| They could connect even the non- mobile devices and offer various forms of communication. | They are actually a subset of ubiquitous computing. |
| They could support all form of devices that are connected to the internet from laptops to watches. | They support only conventional, discrete computers and devices. |

**Distributed multimedia systems -**

- A distributed system supports the storage, transmission and presentation of discrete media types. A distributed multimedia system should be able to perform the same functions for continuous media types such as audio and video.
- It should be able to store and locate audio or video files, to transmit them across the network to support the presentation of the media types to the user and optionally also to share the media types across a group of users. The processing of such media files includes handling of temporal dimensions and integrity of media.
- The distributed multimedia computing allows a wide range of new multimedia services and application to be provided on the desktop. This includes access to live or pre-recorded television broadcasts, access to film libraries offering video-on-demand services, access to music libraries, the provision of audio and video conferencing facilities and integrated telephony features including IP telephony or related technologies such as Skype, a peer-to-peer alternative to IP telephony .
- Webcasting is an application of distributed multimedia technology. Webcasting is the ability to broadcast continuous media, typically audio or video, over the Internet. Webcasting demands the following changes in the infrastructure: Support for an range of encoding and encryption formats.
    - Support for range of mechanisms to ensure that the desired quality of service can be met.
    - Adaptability to associated resource management strategies.
    - Providing adaptation strategies to deal with the situation where QOS is difficult to achieve.

**Distributed computing as a utility -**

- Distributed systems are seen as a utility like water and electricity. The resources are provided by appropriate service suppliers and effectively rented by the end user. The services may be physical or logical services.
- Physical resources such as storage and processing can be made available to networked computers through data centres. Operating system virtualization is a key enabling technology that users may actually be provided with services by a virtual rather than a physical node. Software services rental, services such as email and distributed calendars.
- Cloud computing is the child of resource sharing. A cloud is defined as a set of Internet-based application, storage and computing services sufficient to support most users’ needs, thus enabling them to largely or totally dispense with local data storage and application software with local data storage and application software. Clouds are generally implemented on cluster computers. A cluster computer is a set of interconnected computers that cooperate closely to provide a single, integrated high performance computing capability.

&nbsp;

## Challanges in Distributed Strategies

**Heterogeneity -**

- Heterogeneity means the diversity of the distributed systems in terms of hardware, software, platform, etc.
- Modern distributed systems will likely to be operating with different: Hardware devices: computers, tablets, mobile phones, embedded devices, etc. Operating System: Ms Windows, Linux, Mac, Unix, etc. Network: Local network, the Internet, wireless network, satellite links, etc. Programming languages: Java, C/C++, Python, PHP, etc. Different roles of software developers, designers, system managers.
- Middleware: Middleware applies to a software layer that provides a programming abstraction as well as masking the heterogeneity of the underlying networks, hardware, operating systems and programming languages. E.g.: CORBA, RMI. Heterogeneity in mobile code: Mobile code is used to refer to program code that can be transferred from one computer to another and run at the destination. E.g.: Java applets.

**Transparency -**

- Distributed systems designers must hide the complexity of the systems. Adding abstraction layer is particularly useful in distributed systems.
-  The access and location transparency is collectively referred as network transparency.
- While users hit search in google.com, they never notice that their query goes through a complex process before google shows them a result. Some terms of transparency in distributed systems are:

| Transparency | Description |
| --- | --- |
| Access | Hide differences in data representation and how a resource is accessed |
| Location | Hide where a resource is located |
| Migration | Hide that a resource may move to another location |
| Relocation | Hide that a resource may be moved to another location while in use |
| Replication | Hide that a resource may be copied in several places |
| Concurrency | Hide that a resource may be shared by several competitive users |
| Failure | Hide the failure and recovery of a resource |
| Persistence | Hide whether a (software) resource is in memory or a disk |

**Openness -**  
- If the well-defined interfaces for a system are published, it is easier for developers to add new features or replace sub-systems in the future. 
- Example: Twitter and Facebook have API that allows developers to develop their software. 
- The following are key points in openness:
	- key interfaces are published.
	- uniform communication mechanism and published interfaces for access to shared resources.
	- Open distributed systems can be constructed from heterogeneous hardware and software, possibly from different vendors.

**Concurrency -** 
- Distributed Systems usually is multi-users environment. 
- In order to maximize concurrency, resource handling components should anticipate as they will be accessed by competing users. 
- Concurrency prevents the system to become unstable when users compete to view or update data.

**Security -** 
- Every system must consider strong security measurement. 
- Distributed Systems somehow deals with sensitive information; so secure mechanism must be in place.
- The folowing attacks are more common in distributed systems:
    - Denial of service attacks: When the requested service is not available at the time of request it is Denial of Service (DOS) attack. This attack is done by bombarding the service with a large number of useless requests that the serious users are unable to use it
    - Security of mobile code: Mobile code needs to be handled with care since they are transmitted in an open environment.
    
**Scalability -** 
- Distributed systems must be scalable as the number of user increases. 
- A system is said to be scalable if it can handle the addition of users and resources without suffering a noticeable loss of performance or increase in administrative complexity. 
- Scalability has 3 dimensions:
    - Size: Number of users and resources to be processed. Problem associated with this is overloading.
    - Geography: Distance between users and resources. Problem associated is communication reliability
    - Administration: As the size of distributed systems increases, many of the system needs to be controlled. Problem associated is administrative mess  
- Scalability often conflicts with small system performance. Claim of scalability in such system is often abused. The following are the scalability challenges:
    - Controlling the cost of physical resources
    - Controlling the performance loss
    - Preventing software resources running out
    - Avoiding performance bottlenecks

**Resilience to Failure (Fault tolerance) -** 
- Distributed Systems involves a lot of collaborating components (hardware, software, communication). So there is a huge possibility of partial or total failure. The failures are handled in series of steps:
    - Detecting failures: Some failures like checksum can be detected.
    - Masking failures: Some failures that have been detected can be hidden or made less severe. Examples of hiding failures include retransmission of messages and maintaining a redundant copy of same data.
    - Tolerating failures: All the failures cannot be handled. Some failures must be accepted by the user. Example of this is waiting for a video file to be streamed in.
    - Recovery from failures: Recovery involves the design of software so that the state of permanent data can be recovered or rolled back after a server has crashed.
    - Redundancy: Services can be made to tolerate failures by the use of redundant components. Examples for this includes: maintenance of two different paths between same source and destination.
    - Availability is also a major concern in the fault tolerance. The availability of a system is a measure of the proportion of time that it is available for use. It is a useful performance metric.

**Quality of Service:** 
- The distributed systems must confirm the following non functional requirements:
	- Reliability: A reliable distributed system is designed to be as fault tolerant as possible. Reliability is the quality of a measurement indicating the degree to which the measure is consistent.
     - Security: Security is the degree of resistance to, or protection from, harm. It applies to any vulnerable and valuable asset, such as a person, dwelling, community, nation, or organization. Distributed systems spread across wide geographic locations. So security is a major concern.
     - Adaptability: The frequent changing of configurations and resource availability demands the distributed system to e highly adaptable.