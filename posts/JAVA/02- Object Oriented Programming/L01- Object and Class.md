---
title: "Introduction to OOP in JAVA"
subtitle: "Introduction to OOP in JAVA"
date: "2023-07-12"
---

## Class

A class is a group of objects which have common properties. It is a template or blueprint from which objects are created. It is a logical entity. It can't be physical. This grouping of data and functions into a single unit is called encapsulation. A class in Java can contain:

- Fields
- Methods
- Constructors
- Blocks
- Nested class and interface

Example of a class:

```java
public class Book{
package introduction;

public class Book{
    String name;
    String author;
    float price;

    Book(String name, String author, float price){
        this.name = name;
        this.author = author;
        this.price = price;
    }

    public void display(){
        System.out.println("Name: "+this.name);
        System.out.println("Author: "+this.author);
        System.out.println("Price: "+this.price);
    }
    
    private void issue(){
        System.out.println("Book issued");
    }
    
    public static int fine(){
        return 10;
    }
}
```

- There should be a class which contains the main method.
- The main method is the entry point of the program.
- There is only one main method in a program.
- The main method is always public, static and void.
- The name of file should be same as the name of class followed by .java extension.
- If there is no main class there should be compile time error.


## Object

An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class. Object Definitions:

- An object is a real-world entity.
- An object is a runtime entity.
- The object is an entity which has state and behavior.
- The object is an instance of a class.