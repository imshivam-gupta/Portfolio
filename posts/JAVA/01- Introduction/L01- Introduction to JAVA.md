---
title: "Inroduction to JAVA"
subtitle: "History of JAVA"
date: "2023-07-12"
---

## History of JAVA

- James Gosling, Mike Sheridan and Patrick Naughton initiated the Java language project in June 1991. The small team of sun engineers called Green Team. 
- Initially it was called as **Greentalk** by James Gosling and file extension was **.gt**.
- It was designed for digital devices such as set-top boxes, televisions, etc.
- After that, it was called as **Oak** and was developed as a part of the Green project.
- Then it was incorporated by **NetScape** and renamed as **Java** in 1995.
- JDK 1.0 released in(January 23, 1996).

## Features of JAVA

- Simple
- Robust
- Portable
- Object-Oriented
- Architecture Neutral
- Secure
- High Performance
- Multithreaded
- Interpreted
- Platform Independent
- Dynamic


## Function and Object Oriented Programming

| Function Oriented Programming | Object Oriented Programming |
| --- | --- |
| Program is divided into small parts called functions. | Program is divided into small parts called objects. |
| Importance is not given on data but on functions. | Importance is given on data rather than functions. |
| FOP follows top-down approach. | OOP follows bottom-up approach. |
| It does not have any access specifier. | It has access specifiers like public, private, protected, etc. |
| Data can move freely from function to function. | Objects can move and communicate with each other through member functions. |
| Adding new data and function is difficult. | Adding new data and function is easy. |
| Function uses Global data for sharing that can be accessed freely from function to function in system. | Objects use local data and can be accessed in a controlled manner. |
| No data hiding is possible hence security is not provided. | Data hiding is possible hence security is provided. |
| Polymorphism is not possible. | Polymorphism is possible. |
| Example: C, Pascal, Fortran, Visual Basic | Example: C++, Java, C#, etc. |


## Programming Paradigms

Java is based on Object Oriented Programming(OOP) paradigm. Object contains both data and the functionality that operates on the data. OOP is based on the following principles:


#### 1. Encapsulation

Encapsulation in JAVA is wrapping of code and data together in a single unit. For example - We have Book its data members are name, author, price, etc. and its functionality is to issue, fine, return, open, close. So, here Book is an object which wraps its data and functionality together.


#### 2. Inheritance

Inheritance is a mechanism in which one object acquires all the properties and behaviors of its parent object automatically. For example - Book has many categories like Textbook which has features of book as well and some additional features like DOP,version, department, etc. So, here Textbook is a child class which inherits all the features of Book class and some additional features as well. Also there is another class called ReferenceBook which also inherits all the features of Book class and some additional features as well. So, here Textbook and ReferenceBook are child classes and Book is a parent class.


#### 3. Abstraction

Abstraction is a process of hiding the implementation details and showing only functionality to the user. For example - We use mobile phones to make calls, send messages, click photos, etc. We don't know the internal processing of calling, sending messages and how images are clicked. So, here mobile phone is an object which provides the functionality to the user to make calls, send messages, click photos, etc. but we don't know the internal processing of all these operations. We achieve abstraction using access modifiers like public, private, protected, etc.

#### 4. Polymorphism

Polymorphism refers to a programming language's ability to process objects depending on their class. For example - Add method can be used to add two integers, two floats, two strings, etc. So, here Add method is performing different operations on different data types. We achieve polymorphism using method overloading and method overriding.


### JAVA Program Compilation & Execution

##### Compilation
JAVA Source Code(.java) -> Compiler -> Bytecode(.class)

##### Execution
Bytecode(.class) -> JIT Compiler -> Machine Code
