---
title: "Classes in java.net package"
subtitle: "What will this cover"
date: "2020-12-27"
---

## URL Class

```java
public final class URL
extends Object
implements Serializable
```

Class URL represents a Uniform Resource Locator, a pointer to a "resource" on the World Wide Web. A resource can be something as simple as a file or a directory, or it can be a reference to a more complicated object, such as a query to a database or to a search engine. 

#### Constructors

| Constructor | Description |
| --- | --- |
| URL(String spec) | Creates a URL object from the String representation. |
| URL(String protocol, String host, int port, String file) | Creates a URL object from the specified protocol, host, port number, and file. |
| URL(String protocol, String host, int port, String file, URLStreamHandler handler) | Creates a URL object from the specified protocol, host, port number, file, and handler. |
| URL(String protocol, String host, String file) | Creates a URL from the specified protocol name, host name, and file name. | 
| URL(URL context, String spec) | Creates a URL by parsing the given spec within a specified context. |
| URL(URL context, String spec, URLStreamHandler handler) |Creates a URL by parsing the given spec with the specified handler within a specified context. |

#### Methods

| Method | Description |
| --- | --- |
| String getAuthority() | Gets the authority part of this URL. |
| Object getContent() | Gets the contents of this URL. |
| int getDefaultPort() | Gets the default port number of the protocol associated with this URL. |
| String getFile() | Gets the file name of this URL. |
| String getHost() | Gets the host name of this URL, if applicable. |
| String getPath() | Gets the path part of this URL. |
| int getPort() | Gets the port number of this URL. |
| String getProtocol() | Gets the protocol name of this URL. |
| String getQuery() | Gets the query part of this URL. |
| String getRef() | Gets the anchor (also known as the "reference") of this URL. |
| String getUserInfo() | Gets the userInfo part of this URL. |


## URLConnection Class

```java
public abstract class URLConnection
extends Object
```

The abstract class URLConnection is the superclass of all classes that represent a communications link between the application and a URL. Instances of this class can be used both to read from and to write to the resource referenced by the URL.

Syntax to get object of URLConnection class:

```java
public URLConnection openConnection() throws IOException
```

#### Constructors

| Constructor | Description |
| --- | --- |
| protected URLConnection(URL url) | Constructs a URL connection to the specified URL. |

#### Methods

**openConnection()** - Returns a URLConnection instance that represents a connection to the remote object referred to by the URL. A new instance of URLConnection is created every time when invoking the URLStreamHandler.openConnection(URL) method of the protocol handler for this URL. We can pass Proxy object as an argument to openConnection() method which is same as openConnection(), except that the connection will be made through the specified proxy; Protocol handlers that do not support proxing will ignore the proxy parameter and make a normal connection. Invoking this method preempts the system's default ProxySelector settings.

**getInputStream()** - Returns an input stream that reads from this open connection. A SocketTimeoutException can be thrown when reading from the returned input stream if the read timeout expires before data is available for read.


## HttpURLConnection Class

```java
public abstract class HttpURLConnection
extends URLConnection
```

A URLConnection with support for HTTP-specific features. Each HttpURLConnection instance is used to make a single request but the underlying network connection to the HTTP server may be transparently shared by other instances. Calling the close() methods on the InputStream or OutputStream of an HttpURLConnection after a request may free network resources associated with this instance but has no effect on any shared persistent connection. Calling the disconnect() method may close the underlying socket if a persistent connection is otherwise idle at that time. **It works for HTTP protocol only.**

This class is used to extract following information from HTTP header:
- Status Code
- Response Message
- Response Header Fields


Example:

```java
public URLConnection openConnection() throws IOException{}
URL url = new URL("http://www.google.com");
HttpURLConnection httpCon = (HttpURLConnection) url.openConnection();
```

#### Methods

| Method | Description |
| --- | --- |
| abstract void disconnect() | Indicates that other requests to the server are unlikely in the near future. Calling disconnect() should not imply that this HttpURLConnection instance can be reused for other requests. |
| static boolean getFollowRedirects() | Returns a boolean indicating whether or not HTTP redirects (3xx) should be automatically followed. |
| String getHeaderField(int n) | Returns the value for the nth header field. |
| long getHeaderFieldDate(String name, long Default) | Returns the value of the named field parsed as date. |
| String getHeaderFieldKey(int n) | Returns the key for the nth header field. |
| String getRequestMethod() | Gets the request method. |
| int getResponseCode() | Gets the status code from an HTTP response message. |
| String getResponseMessage() | Gets the HTTP response message, if any, returned along with the response code from a server. |


## InetAddress Class

```java
public class InetAddress
extends Object
implements Serializable
```

This class represents an Internet Protocol (IP) address. An IP address is either a 32-bit or 128-bit unsigned number used by IP, a lower-level protocol on which protocols like UDP and TCP are built. The IP address architecture is defined by RFC 790: Assigned Numbers, RFC 1918: Address Allocation for Private Internets, RFC 2365: Administratively Scoped IP Multicast, and RFC 2373: IP Version 6 Addressing Architecture. An instance of an InetAddress consists of an IP address and possibly its corresponding host name (depending on whether it is constructed with a host name or whether it has already done reverse host name resolution).

#### Methods

| Method | Description |
| --- | --- |
| static InetAddress getByName(String host) throws UnknownHostException | Determines the IP address of a host, given the host's name. |
| static InetAddress getLocalHost() throws UnknownHostException | Returns the address of the local host. |
| String getHostAddress() | Returns the IP address string in textual presentation. |
| String getHostName() | Gets the host name for this IP address. |
| boolean isReachable(int timeout) throws IOException | Tests whether that address is reachable. |
| public URLConnection openConnection() throws IOException | Returns a URLConnection instance that represents a connection to the remote object referred to by the URL. |


## DatagramSocket Class

```java
public class DatagramSocket
extends Object
implements Closeable
```

This class represents a socket for sending and receiving datagram packets. A datagram socket is the sending or receiving point for a packet delivery service. Each packet sent or received on a datagram socket is individually addressed and routed. Multiple packets sent from one machine to another may be routed differently, and may arrive in any order.

#### Constructors

| Constructor | Description |
| --- | --- |
| DatagramSocket() | Constructs a datagram socket and binds it to any available port on the local host machine. |
| protected DatagramSocket(DatagramSocketImpl impl) | Creates an unbound datagram socket with the specified DatagramSocketImpl. |
| DatagramSocket(int port) | Constructs a datagram socket and binds it to the specified port on the local host machine. |
| DatagramSocket(int port, InetAddress laddr) | Creates a datagram socket, bound to the specified local address. |
| DatagramSocket(SocketAddress bindaddr) | Creates a datagram socket, bound to the specified local socket address. |


#### Methods

| Method | Description |
| --- | --- |
| void close() | Closes this datagram socket. |
| void bind(SocketAddress addr) | Binds this DatagramSocket to a specific address and port. |
| void connect(InetAddress address, int port) | Connects the socket to a remote address for this socket. |
| void connect(SocketAddress addr) | Connects the socket to a remote socket address (IP address + port number). |
| void disconnect() | Disconnects the socket. |
| InetAddress getInetAddress() | Returns the address to which this socket is connected. |
| InetAddress getLocalAddress() | Gets the local address to which the socket is bound. |
| int getLocalPort() | Returns the port number on the local host to which this socket is bound. |
| SocketAddress getLocalSocketAddress() | Returns the address of the endpoint this socket is bound to. |
| int getPort() | Returns the remote port number to which this socket is connected. |
| void receive(DatagramPacket p) | Receives a datagram packet from this socket. |
| void send(DatagramPacket p) | Sends a datagram packet from this socket. |
| void setSoTimeout(int timeout) | Enable/disable SO_TIMEOUT with the specified timeout, in milliseconds. |
| boolean isClosed() | Tests if this socket is closed. |
| boolean isConnected() | Returns the binding state of the socket. |

#### DatagramPacket Class

```java
public final class DatagramPacket
extends Object
```

**Constructor**

| Constructor | Description |
| --- | --- |
| DatagramPacket(byte[] buf, int length) | Constructs a DatagramPacket for receiving packets of length length. |
| DatagramPacket(byte[] buf, int offset, int length) | Constructs a DatagramPacket for receiving packets of length length, specifying an offset into the buffer. |
| DatagramPacket(byte[] buf, int length, InetAddress address, int port) | Constructs a datagram packet for sending packets of length length to the specified port number on the specified host. |
| DatagramPacket(byte[] buf, int offset, int length, InetAddress address, int port) | Constructs a datagram packet for sending packets of length length with offset ioffsetto the specified port number on the specified host. |
| DatagramPacket(byte[] buf, int length, SocketAddress address) | Constructs a datagram packet for sending packets of length length with offset ioffsetto the specified port number on the specified host. |
| DatagramPacket(byte[] buf, int length, SocketAddress address) | Constructs a datagram packet for sending packets of length length to the specified port number on the specified host. |

**Methods**

| Method | Description |
| --- | --- |
| InetAddress getAddress() | Returns the IP address of the machine to which this datagram is being sent or from which the datagram was received. |
| byte[] getData() | Returns the data buffer. |
| int getLength() | Returns the length of the data to be sent or the length of the data received. |
| int getOffset() | Returns the offset of the data to be sent or the offset of the data received. |
| int getPort() | Returns the port number on the remote host to which this datagram is being sent or from which the datagram was received. |
|  SocketAddress getSocketAddress() | Returns the SocketAddress (usually IP address + port number) of the remote host that this packet is being sent to or is coming from. |
| void setAddress(InetAddress iaddr) | Sets the IP address of the machine to which this datagram is being sent. |
| void setData(byte[] buf) | Sets the data buffer for this packet. |
| void setLength(int length) | Sets the length of the data to be sent or the length of the data to be read. |
| void setPort(int iport) | Sets the port number on the remote host to which this datagram is being sent. |
| void setSocketAddress(SocketAddress address) | Sets the SocketAddress (usually IP address + port number) of the remote host to which this datagram is being sent. |


## ServerSocket Class

```java
public class ServerSocket
extends Object
implements Closeable
```

his class implements server sockets. A server socket waits for requests to come in over the network. It performs some operation based on that request, and then possibly returns a result to the requester.
The actual work of the server socket is performed by an instance of the SocketImpl class. An application can change the socket factory that creates the socket implementation to configure itself to create sockets appropriate to the local firewall.

#### Constructors

| Constructor | Description |
| --- | --- |
| ServerSocket() throws IOException| Creates an unbound server socket. |
| ServerSocket(int port) throws IOException| Creates a server socket, bound to the specified port. |
| ServerSocket(int port, int backlog) throws IOException| Creates a server socket and binds it to the specified local port number, with the specified backlog. |
| ServerSocket(int port, int backlog, InetAddress bindAddr) throws IOException| Create a server with the specified port, listen backlog, and local IP address to bind to. |

## ServerSocket Methods

```java
public class ServerSocket
extends Object
implements Closeable
```

This class implements server sockets. A server socket waits for requests to come in over the network. It performs some operation based on that request, and then possibly returns a result to the requester.
The actual work of the server socket is performed by an instance of the SocketImpl class. An application can change the socket factory that creates the socket implementation to configure itself to create sockets appropriate to the local firewall.

#### Constructors

| Constructor | Description |
| --- | --- |
| ServerSocket() throws IOException| Creates an unbound server socket. |
| ServerSocket(int port) throws IOException| Creates a server socket, bound to the specified port. |
| ServerSocket(int port, int backlog) throws IOException| reates a server socket and binds it to the specified local port number, with the specified backlog. |
| ServerSocket(int port, int backlog, InetAddress bindAddr) throws IOException| Create a server with the specified port, listen backlog, and local IP address to bind to. |


#### Methods

| Method | Description |
| --- | --- |
| int getLocalPort() | Returns the port number on which this socket is listening. |
| Socket accept() | Listens for a connection to be made to this socket and accepts it. |
| void bind(SocketAddress endpoint) | Binds the ServerSocket to a specific address (IP address and port number). |
| void close() | Closes this socket. |
| InetAddress getInetAddress() | Returns the address of the endpoint this socket is bound to, or null if it is not bound yet. |
| int 	getSoTimeout() | Returns setting for SO_TIMEOUT. |
| void setSoTimeout(int timeout) | Enable/disable SO_TIMEOUT with the specified timeout, in milliseconds. |