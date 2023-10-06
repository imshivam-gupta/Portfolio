---
title: "Inheritance in JAVA"
subtitle: "Nested Class in JAVA"
date: "2023-07-12"
---

## Terminologies

- Superclass: A class that is inherited is called a superclass.
- Subclass: A class that inherits from another class is called a subclass. It inherits the fields and methods of the superclass and adds its own fields and methods.
- Reusability: It is mechanism which facilitates you to reuse the fields and methods of the existing class when you create a new class. You can use the same fields and methods already defined in the previous class.


## Syntax of Inheritance:

The extends keyword is used to define a new class that derives an existing class. The meaning of extends is to increase the functionality.

```java
class <subclass-name> extends <superclass-name>  {  
   //methods and fields  
}  
```

## Example of Inheritance:

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

## Types of Inheritance

#### Single Inheritance

When a class inherits another class, it is known as a single inheritance. In the example in the point example above, Point3d is a subclass of Point2d class.

#### Multiple Inheritance

When a class inherits the properties of more than one class, known as multiple inheritance. Java does not support multiple inheritance.

#### Multi-level Inheritance 

When there is a chain of inheritance, it is known as multilevel inheritance. As you can see in the example given below, BabyDog class inherits the Dog class which again inherits the Animal class, so there is a multilevel inheritance.

```java
class Animal{  
    void eat(){
        System.out.println("eating...");
    }  
}  

class Dog extends Animal{  
    void bark(){
        System.out.println("barking...");
    }  
}  

class BabyDog extends Dog{  
    void weep(){
        System.out.println("weeping...");
    }  
}  

class TestInheritance2{  
    public static void main(String args[]){  
        BabyDog d=new BabyDog();  
        d.weep();  
        d.bark();  
        d.eat();  
    }
}  
```

#### Hierarchical Inheritance

When a class has more than one child classes (subclasses) or in other words, more than one child classes have the same parent class, known as hierarchical inheritance.

Example:

```java
class Animal{  
    void eat(){
        System.out.println("eating...");
    }  
}  

class Dog extends Animal{  
    void bark(){
        System.out.println("barking...");
    }  
}  

class Cat extends Animal{  
    void meow(){
        System.out.println("meowing...");
    }  
}  

class TestInheritance3{  
    public static void main(String args[]){  
        Cat c=new Cat();  
        c.meow();  
        c.eat();  
        //c.bark();//C.T.Error  
    }
}  
```

