---
title: "Design Patterns in Node.js"
subtitle: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
date: "2019-12-01"
---


# Observer Pattern

Pattern (observer): defines an object (called subject), which can notify a set of observers (or listeners), when a change in its state happens. The main difference from the callback pattern is that the subject can actually notify multiple observers, while a traditional continuation-passing style callback will usually propagate its result to only one listener, the callback.

## Event Emitter

In traditional object-oriented programming, the observer pattern requires interfaces, concrete classes, and a hierarchy; in Node.js, all becomes much simpler. The observer pattern is already built into the core and is available through the EventEmitter class. The EventEmitter class allows us to register one or more functions as listeners, which will be invoked when a particular event type is fired

<img
    src="https://static.packt-cdn.com/products/9781783287314/graphics/7314OS_01_06.jpg"
    alt="Event Emitter"
    style="width: 600px; height: 400px;"
>


The EventEmitter is a prototype, and it is exported from the events core module. The following code shows how we can obtain a reference to it:

```javascript
var EventEmitter = require('events').EventEmitter;
var eeInstance = new EventEmitter();
```

##### Important Methods of EventEmitter

- on(event, listener): Adds a listener to the end of the listeners array for the specified event.
- once(event, listener): Adds a one time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.
- removeListener(event, listener): Removes a listener from the listener array for the specified event.
- emit(event, [arg1], [arg2], [...]): Execute each of the listeners in order with the supplied arguments.

All the preceding methods will return the EventEmitter instance to allow chaining. The listener function has the signature, function([arg1], […]), so it simply accepts the arguments provided the moment the event is emitted. Inside the listener, this refers to the instance of the EventEmitter that produces the event.

Example:

```javascript
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}

const observer = new EventObserver();

const observerA = (data) => console.log(`Observer A: ${data}`);
const observerB = (data) => console.log(`Observer B: ${data}`);

observer.subscribe(observerA);
observer.subscribe(observerB);

observer.broadcast("Hello, Observers!");
```

It is also used to setup server in Node.js. Code:

```javascript
const server = require("http").createServer();

server.on("request", (req, res) => {
    console.log("Request received");
    console.log(req.url);
    res.end("Request received");
});

server.on("request",(req,res)=>{
    console.log("Another request received");
});

server.on("close", () => {
    console.log("Server closed");
});

server.listen(8000,() => {
    console.log("Waiting for requests...");
});
```


# Factory Pattern

The Factory pattern is a creational design pattern that provides a simple way to create objects without having to specify the exact class of object that will be created. This is particularly useful in Node.js, where the same object may be created in multiple places throughout the application. With the Factory pattern, a single object acts as a factory and is responsible for creating new objects. This object can be configured to return different types of objects based on the inputs it receives. This makes it easier to change the object creation process in the future, without having to modify the code in multiple places.

Example:

```javascript
function vehicleFactory(type) {
  if (type === "car") {
    return new Car();
  } else if (type === "truck") {
    return new Truck();
  } else {
    throw new Error(`Unsupported vehicle type: ${type}`);
  }
}

class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
}

const car = vehicleFactory("car");
car.drive(); // Output: Driving a car

const truck = vehicleFactory("truck");
truck.drive(); // Output: Driving a truck
```

# Singleton Pattern

The Singleton pattern is a creational design pattern that ensures that a class has only one instance, while providing a global point of access to this instance for the rest of the application. This pattern is useful in Node.js because it allows for a shared resource to be used throughout the application, without the risk of multiple instances being created. For example, a database connection can be implemented as a singleton. This ensures that only one connection is established, even if the database is accessed from multiple places in the application. This helps to reduce the overhead of establishing multiple connections, as well as providing a central point of control for the database connection.

Example:

```javascript
const databaseSingleton = (() => {
  let instance;

  const createInstance = () => {
    const database = new Database();
    return database;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

class Database {
  constructor() {
    console.log("Creating a new database connection");
  }
}

const db1 = databaseSingleton.getInstance();
const db2 = databaseSingleton.getInstance();

console.log(db1 === db2); // Output: true
```

# Command Pattern

The Command pattern is a behavioral design pattern that encapsulates a request as an object, thereby allowing for deferred execution of requests, as well as the ability to queue or log requests. This pattern is useful for implementing undo-redo functionality, as well as for improving the performance of an application by allowing requests to be executed in the background. For example, a user’s request to save changes to a document can be implemented as a command object. The command object can be executed immediately, or it can be deferred and executed at a later time, or even logged for auditing purposes. This flexibility allows for a more streamlined and efficient handling of user requests.

Example:

```javascript
class Command {
  execute() {}
}

// Concrete Command 1
class ConcreteCommand1 extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    console.log("ConcreteCommand1 executing...");
    this.receiver.action1();
  }
}

// Concrete Command 2
class ConcreteCommand2 extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    console.log("ConcreteCommand2 executing...");
    this.receiver.action2();
  }
}

// Receiver
class Receiver {
  action1() {
    console.log("Receiver performing action 1...");
  }

  action2() {
    console.log("Receiver performing action 2...");
  }
}

// Invoker
class Invoker {
  constructor() {
    this.commands = [];
  }

  setCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach((command) => command.execute());
  }
}

// Client
class Client {
  run() {
    const receiver = new Receiver();
    const command1 = new ConcreteCommand1(receiver);
    const command2 = new ConcreteCommand2(receiver);

    const invoker = new Invoker();
    invoker.setCommand(command1);
    invoker.setCommand(command2);
    invoker.executeCommands();
  }
}

const client = new Client();
client.run();

// Output:
// ConcreteCommand1 executing...
// Receiver performing action 1...
// ConcreteCommand2 executing...
// Receiver performing action 2...
```