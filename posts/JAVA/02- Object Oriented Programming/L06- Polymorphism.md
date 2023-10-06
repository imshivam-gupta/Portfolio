---
title: "Polymorphism in Java"
subtitle: "Polymorphism in Java"
date: "2023-07-12"
---

Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms. There are two types of polymorphism in Java: compile-time polymorphism and runtime polymorphism. We can perform polymorphism in java by method overloading and method overriding.

## Compile-time Polymorphism

It is also known as static polymorphism. This type of polymorphism is achieved by function overloading or operator overloading.  Note: But Java doesn’t support the Operator Overloading.


## Runtime Polymorphism

It is also known as Dynamic Method Dispatch. It is a process in which a function call to the overridden method is resolved at Runtime. This type of polymorphism is achieved by Method Overriding.

## Method Overloading

When there are multiple functions with the same name but different parameters then these functions are said to be overloaded. Functions can be overloaded by changes in the number of arguments or/and a change in the type of arguments.

> In Java, Method Overloading is not possible by changing the return type of the method only.

```java
package introduction;

class Helper {

    static int Multiply(int a, int b){
        return a * b;
    }
 
    static double Multiply(double a, double b){
        return a*b;
    }

    static int Multiply(int a,int b,int c){
        return a*b*c;
    }
}
 
class Main {
    public static void main(String[] args){
        System.out.println(Helper.Multiply(2, 4));
        System.out.println(Helper.Multiply(5.5, 6.3));
        System.out.println(Helper.Multiply(2,3,4));
    }
}
```

## Method Overriding

Method Overriding is used to provide the specific implementation of a method which is already provided by its superclass. It is used for runtime polymorphism.

Rules for method overriding - 

- The method name should be same as in the parent class
- The method name should have the same parameter as in the parent class
- There must be inheritance

```java
package introduction;

class Point2d{
	 int x;
	 int y;
	
	void display() {
		System.out.println("x="+x+" y="+y);
	}
}

class Point3d extends Point2d{
	int z;
	
	void display() {
		System.out.println("x="+x+" y="+y+" z="+z);
	}
}

public class InheritanceExample {
	public static void main(String args[]){
		Point3d p = new Point3d();
		p.x = 2;
		p.y = 3;
		p.z=5;
		p.display();
	}
}
```


> A subclass object can reference a superclass variable or method if it is not overridden in the subclass. A superclass object cannot reference a variable or method explicitly in the subclass.





## super Keyword

The super keyword in java is a reference variable that is used to refer immediate parent class members. Whenever you create an instance a subclass constructor, an instance of parent class is created implicitly which is referred by super reference variable.

```java
class Animal{  
    String color="white";  

    void printColor(){  
        System.out.println(color);  
    }
}

class Dog extends Animal{  
    String color="black";  
    void printColor(){  
        System.out.println(color);//prints color of Dog class  
        System.out.println(super.color);//prints color of Animal class  

        super.printColor(); // prints color of Animal class
    }  
}

class TestSuper1{  
    public static void main(String args[]){  
        Dog d=new Dog();  
        d.printColor();  
    }
}  
```

Invoking the constructor of parent class

```java
class Point2D{
    int x;
    int y;

    Point2D(int x, int y){
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point2D{
    int z;

    Point3D(int x, int y, int z){
        super(x, y);
        this.z = z;
    }

    void display(){
        System.out.println("x="+x+" y="+y+" z="+z);
    }
}

public class InheritanceExample {
    public static void main(String args[]){
        Point3D p = new Point3D(2, 3, 5);
        p.display();
    }
}
```


## Static and Dynamic Binding

Connecting a method call to the method body is known as binding. There are two types of binding

- Static Binding (also known as Early Binding).
- Dynamic Binding (also known as Late Binding).

#### Static Binding

When the type of the object is determined at compiled time(by the compiler), it is known as static binding. If there is any private, final or static method in a class, there is static binding.

```java
class Dog{  
    private void eat(){
        System.out.println("dog is eating...");
    }  
  
    public static void main(String args[]){  
        Dog d1=new Dog();  
        d1.eat();  
    }  
}  
```


#### Dynamic Binding or Dynamic Method Dispatch

When the type of the object is determined at run-time, it is known as dynamic binding. Dynamic binding is also known as late binding because the type of the object is decided at run-time.  It is called runtime polymorphism.

In this process an overridden method is called through the reference variable of a superclass. The determination of the method to be called is based on the object being referred to by the reference variable.

```java
class Bike{  
    void run(){
        System.out.println("running");
    }  
}

class Splendor extends Bike{  
    void run(){
        System.out.println("running safely with 100kmph");
    }  
  
    public static void main(String args[]){  
        Splendor b = new Splendor();
        b.run(); // prints running safely with 100kmph

        Bike b1 = new Bike();
        b1.run(); // prints running

        Bike b2 = new Splendor(); //upcasting
        b2.run(); // prints running safely with 100kmph

    }  
}  
```


## Abstract Class

Abstraction is a process of hiding the implementation details and showing only functionality to the user. Another way, it shows only essential things to the user and hides the internal details. A class which is declared with the abstract keyword is known as an abstract class in Java. It can have abstract and non-abstract methods (method with the body).

```java
abstract class Bike{  
    abstract void run();  
}

class Honda extends Bike{  
    void run(){
        System.out.println("running safely");
    }  
  
    public static void main(String args[]){  
        Bike obj = new Honda();
        obj.run();
    }  
}  
```


- Abstract class can have abstract and non-abstract methods.
- Abstract class doesn't support multiple inheritance.
- Abstract class can have final, non-final, static and non-static variables.
- Abstract class cannot be instantiated means you cannot create the object of abstract class.
- Abstract class can have static methods only if you provide the method body.
- Abstract class can have final method which will force the subclass not to change the body of the method.
