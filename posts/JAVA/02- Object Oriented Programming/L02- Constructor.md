---
title: "Constructors in JAVA"
subtitle: "Constructors in JAVA"
date: "2023-07-12"
---

It is tedious task to initialize all of the variables in a class each time the object is initialized. JAVA allows objects to initialize themselves when they are created. This automatic initialization is performed through constructors.

## Properties of Constructors

- A constructor initializes an object immediately upon creation.
- Constructor in JAVA is a method.
- Constructor name must be the same as its class name
- Once defined, the constructor is automatically called when the object is created.
- It has no return type, not even void.
- Implicitly it returns the class type itself.
- It initializes internal state of the object.
- A Java constructor cannot be abstract, static, final, and synchronized

## this keyword

this keyword is used to reduce namespace collision. It is used to refer to the object that invoked it. this can be used inside any method to refer to the current object. It can be used to refer to current class instance variable. Usage of this keyword:
- this can be used to refer current class instance variable.
- this can be used to invoke current class method (implicitly)
- this() can be used to invoke current class constructor.
- this can be passed as an argument in the method call.
- this can be passed as argument in the constructor call.
- this can be used to return the current class instance from the method.

## Types of Constructors

#### Default Constructor

A constructor is called "Default Constructor" when it doesn't have any parameter.

```java
class Circle{
    double radius;
    double x;
    double y;
    Circle(){
        radius = 1.0;
        x = 0.0;
        y = 0.0;
    }
}
```

#### Parameterized Constructor

A constructor is called "Parameterized Constructor" when it has parameters.

```java
class Circle{
    double radius;
    double x;
    double y;
    Circle(double r){
        radius = r;
    }
}
```

## Constructor Overloading

Sometimes we need to create multiple constructors with different parameters. This is known as constructor overloading. Java allows to declare one or more constructors with different list of parameters and different method definition. 

```java
class Circle{
    double radius;
    double x;
    double y;
    Circle(){
        radius = 1.0;
        x = 0.0;
        y = 0.0;
    }
    Circle(double r){
        radius = r;
        x = 0.0;
        y = 0.0;
    }
    Circle(double r, double x, double y){
        radius = r;
        this.x = x;
        this.y = y;
    }

    double area(){
        return Math.PI*radius*radius;
    }

    double circumference(){
        return 2*Math.PI*radius;
    }
}
```

We can use this keyword to call one constructor from another constructor.

```java
class Circle{
    double radius;
    double x;
    double y;
    Circle(){
        this(1.0, 0.0, 0.0);
    }
    Circle(double r){
        this(r, 0.0, 0.0);
    }
    Circle(double r, double x, double y){
        radius = r;
        this.x = x;
        this.y = y;
    }

    double area(){
        return Math.PI*radius*radius;
    }

    double circumference(){
        return 2*Math.PI*radius;
    }
}
```

> this should be the first statement in the constructor. If not, it will throw a compile time error.