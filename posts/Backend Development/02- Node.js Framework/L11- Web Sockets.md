---
title: "Web Sockets in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

The Socket.IO connection can be established with different low-level transports:
- HTTP long-polling
- WebSocket
- WebTransport

Socket.IO will automatically pick the best available option, depending on:
- The capabilities of the browser (see here and here)
- The network (some networks block WebSocket and/or WebTransport connections)

> Socket.IO is NOT a WebSocket implementation. Although Socket.IO indeed uses WebSocket for transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either.

## Features of Socket.IO

#### HTTP long-polling fallback

The connection will fall back to HTTP long-polling in case the WebSocket connection cannot be established. Even if most browsers now support WebSockets (more than 97%), it is still a great feature as we still receive reports from users that cannot establish a WebSocket connection because they are behind some misconfigured proxy.

#### Automatic reconnection
Under some particular conditions, the WebSocket connection between the server and the client can be interrupted with both sides being unaware of the broken state of the link. And when the client eventually gets disconnected, it automatically reconnects with an exponential back-off delay, in order not to overwhelm the server.

#### Packet buffering
The packets are automatically buffered when the client is disconnected, and will be sent upon reconnection.

#### Acknowledgements
Socket.IO provides a convenient way to send an event and receive a response:

Sender:

```javascript
socket.emit("hello", "world", (response) => {
  console.log(response); // "got it"
});

// Other Method
// socket.timeout(5000).emit("hello", "world", (err, response) => {
//   if (err) {
//     // the other side did not acknowledge the event in the given delay
//   } else {
//     console.log(response); // "got it"
//   }
// });
```

Receiver:

```javascript
socket.on("hello", (arg, callback) => {
  console.log(arg); // "world"
  callback("got it");
});
```

#### Broadcasting

On the server-side, you can send an event to all connected clients or to a subset of clients:

```javascript
io.emit("hello");

// to all connected clients in the "news" room
io.to("news").emit("hello");
```


## Working of Socket.IO

The bidirectional channel between the Socket.IO server (Node.js) and the Socket.IO client (browser, Node.js, or another programming language) is established with a WebSocket connection whenever possible, and will use HTTP long-polling as fallback.

The Socket.IO codebase is split into two distinct layers:
- the low-level plumbing: what we call Engine.IO, the engine inside Socket.IO
- the high-level API: Socket.IO itself

##### Engine.IO

Engine.IO is responsible for establishing the low-level connection between the server and the client. It handles:
- the various transports and the upgrade mechanism
- the disconnection detection

**Transports**

There are currently two implemented transports:
- HTTP long-polling
- WebSocket