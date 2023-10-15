---
title: "Introduction to Multithreading"
subtitle: "Introduction to Multithreading"
date: "2023-07-12"
---


Multithreading in Java is a process of executing multiple threads simultaneously.

A thread is a lightweight sub-process, the smallest unit of processing. Multiprocessing and multithreading, both are used to achieve multitasking.

However, we use multithreading than multiprocessing because threads use a shared memory area. They don't allocate separate memory area so saves memory, and context-switching between the threads takes less time than process.



## Process vs Thread

Process is exectable program loaded in memory. Each process has own address space. Each process may execute a different program. Communication via operating system, files, network, etc. It may contain multiple threads.

Thread is sequentially executed stream of instructions. It shares address space with other threads of the same process. It has own execution context: Program counter, stack, local variables. These communicate via a shared access to data. Multiple threads of the same process may execute the same program. It is also called lightweight process.


## Advantages of Java Multithreading

- Captures logical structure of the program: May have concurrent interacting components. We can handle each component with a separate thread. 
- Better utilizes hardware resources: When thread is delayed, we can compute other threads. Given extra hardware resources, we can compute more threads in parallel. Reduces overall execution time.


## Multithreading in Java

Java has built-in support for multithreaded programming.
- Syncronization
- Thread Scheduling
- Inter-thread Communication

Java Garbage Collector is an example of multithreading in Java. It is a low priority thread that runs in the background and cleans unused objects.

## Java Thread 

Thread class provides constructors and methods to create and perform operations on a thread. Thread class extends Object class and implements Runnable interface.

| Modifier and Type | Method | Description |
| --- | --- | --- |
| static Thread | 	currentThread()	| It returns a reference to the currently executing thread object. |
| static void | yeild() | It causes the currently executing thread object to temporarily pause and allow other threads to execute. |
| static void | sleep(long milliseconds) | It causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds. |
| void | resume() | It is used to resume a suspended thread. |
| void | start() | It is used to start the execution of the thread. |
| void | run() | It is used to do the action for a thread. |
| void | stop() | It is used to stop the execution of the thread. |
| void | setPriority(int newPriority) | It is used to change the priority of the thread. |
| int | getPriority() | It is used to return the priority of the thread. |
| void | suspend() | It is used to suspend the thread. |
| void | setName(String name) | It is used to change the name of the thread. |
| String | getName() | It is used to return the name of the thread. |
| void | join() | The join() method of thread class waits for a thread to die. It is used when you want one thread to wait for completion of another.  |
| long | getId() | It is used to return the id of the thread. |
| boolean | isAlive() | It tests if the thread is alive. |
| void | destroy() | It is used to destroy the thread group and all of its subgroups. |
| boolean | isDaemon() | It tests if the thread is a daemon thread. |
| void | setDaemon(boolean b) | It marks the thread as daemon or user thread. |
| void | interrupt() | It interrupts the thread. |
| boolean | isInterrupted() | It tests whether the thread has been interrupted. |
| static boolean | interrupted() | It tests whether the current thread has been interrupted. |
| ClassLoader | getContextClassLoader() | It returns the context ClassLoader for this Thread. |
| String | toString() | It returns a string representation of this thread, including the thread's name, priority, and thread group. |
| void | notify() | It is used to give the notification for only one thread which is waiting for a particular object.|
| void | notifyAll() | It is used to give the notification to all waiting threads of a particular object. |
| static int | activeCount() | It returns the number of active threads in the current thread's thread group. |
| void | checkAccess() | It determines if the currently running thread has permission to modify this thread. |
| static boolean | holdsLock(Object x) | It returns true if and only if the current thread holds the monitor lock on the specified object. |
| static void | dumpStack() | It is used to print a stack trace of the current thread to the standard error stream.|
| StackTraceElement[] | getStackTrace() | It returns an array of stack trace elements representing the stack dump of the thread. |
| static int | enumerate(Thread[] tarray) |It is used to copy every active thread's thread group and its subgroup into the specified array. |
| Thread.State | getState() | It is used to return the state of the thread. |
| Thread.UncaughtExceptionHandler | getUncaughtExceptionHandler() | It returns the handler invoked when this thread abruptly terminates due to an uncaught exception. |
| ThreadGroup | getThreadGroup() | It returns the thread group to which this thread belongs. |



<!-- 
- Thread starts executing when start() method is called.
- It is not recommended to override the start() method.
- If you override the start() method, the new method will be called when you call the start() method.
- The start() method can be called only once in a program.
- If you call the start() method more than once, it will throw IllegalThreadStateException. -->


For running a thread, Thread class provides two methods:
- Extending the Thread class
- Implementing the Runnable Interface

In both cases, we call start() method to start a thread and override run() method to specify the code that executes in the new thread.

```java
class Multi extends Thread{  
    public void run(){  
        System.out.println("thread is running...");  
    }  

    public static void main(String args[]){  
        Multi t1=new Multi();  
        t1.start();  
    }  
}  
```

```java
class Multi3 implements Runnable{  
    public void run(){  
        System.out.println("thread is running...");  
    }  
  
    public static void main(String args[]){  
        Multi3 m1=new Multi3();  
        Thread t1 =new Thread(m1);   // Using the constructor Thread(Runnable r)  
        t1.start();  
    }  
}  
```

### Thread Class

```java
public class Thread extends Object implements Runnable{
    public Thread();
    public Thread(String name);
    public Thread(Runnable target);
    public Thread(Runnable target, String name);

    public void run();
    public void start();
    ...
}
```

### States of Thread

- New: Thread allocated and waiting for start.
- Runnable: Thread can begin execution
- Running: Thread is executing
- Blocked: Thread is waiting for event
- Dead: Thread has completed execution


### Java Thread Types

User Thread: Created by application to perform a task. JVM does not terminate until all user threads are terminated.


Daemon Thread: Created by JVM for its own purpose. JVM terminates itself when all daemon threads are terminated. Garbage collector is an example of daemon thread.

- Provides general purpose services
- Typically never terminate
- Call setDaemon(true) to make a thread daemon before starting it


### Synchronization

It controls thread execution order to prevent data inconsistencies. It eliminates data races.

When 2 or more processes attempt to access a shared resource, it should be synchronized to avoid conflicts. Java supports methods to be synchronized. Following is the syntax of synchronized method to protect from simultaneous access.

```java
synchronised(object){
    // Access shared variables and other shared resources
}
```

Example:

```java
public void push(int item){
    synchronized(this){
        // Access shared variables and other shared resources
    }
}

// Shorter version
public synchronized void push(int item){
    // Access shared variables and other shared resources
}
```
