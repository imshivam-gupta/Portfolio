---
title: "Networking in Java"
subtitle: "What will this cover"
date: "2020-12-27"
---

For networking in JAVA, it provides 2 types of sockets:

- **Stream Sockets:** With stream sockets a process establishes a connection to another process. While connection is in place, data flows between processes are continuous streams. Hence stream sockets provide connection-oriented service. Protocol used is TCP.
- **Datagram Sockets:**  With datagram sockets, individual pockets of information are transmitted. Hence datagram sockets provide connection-less service. Protocol used is UDP.

## java.net Package

The java.net package provides classes for networking applications. It provides the classes for implementing networking applications. The java.net package can be roughly divided in two sections:

**A Low Level API, which deals with the following abstractions:**

- Addresses, which are networking identifiers, like IP addresses.
- Sockets, which are basic bidirectional data communication mechanisms.
- Interfaces, which describe network interfaces.

**A High Level API, which deals with the following abstractions:**

- URIs, which represent Universal Resource Identifiers.
- URLs, which represent Universal Resource Locators.
- Connections, which represents connections to the resource pointed to by URLs.

### Classes and Interfaces in java.net package

Important classes of java.net package are:

| Class | Description |
| --- | --- |
| URL	| Class URL represents a Uniform Resource Locator, a pointer to a "resource" on the World Wide Web. |
| URLConnection | The abstract class URLConnection is the superclass of all classes that represent a communications link between the application and a URL. | 
| InetAddress | This class represents an Internet Protocol (IP) address. |
| HttpUrlConnection | A URLConnection with support for HTTP-specific features. |
| DatagramSocket | This class represents a socket for sending and receiving datagram packets. |
| ServerSocket  | This class implements server sockets. |
| Socket | This class implements client sockets (also called just "sockets"). |


Interfaces of java.net package are:

| Interface	| Description| 
| --- | --- |
| ContentHandlerFactory	|  This interface defines a factory for content handlers.| 
| CookiePolicy	|  CookiePolicy implementations decide which cookies should be accepted and which should be rejected.| 
| CookieStore	 | A CookieStore object represents a storage for cookie.| 
| DatagramSocketImplFactory	|  This interface defines a factory for datagram socket implementations.| 
| FileNameMap	|  A simple interface which provides a mechanism to map between a file name and a MIME type string.| 
| ProtocolFamily	|  Represents a family of communication protocols.| 
| SocketImplFactory	|  This interface defines a factory for socket implementations.| 
| SocketOption&lt;T&gt;| 	 A socket option associated with a socket.| 
| SocketOptions	|  Interface of methods to get/set socket options.| 
| URLStreamHandlerFactory	|  This interface defines a factory for URL stream protocol handlers.| 