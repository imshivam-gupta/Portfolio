---
title: "Static Keyword"
subtitle: "Static Keyword"
date: "2023-07-12"
---


Java does not allow global variable. Each variable in JAVA must be inside a class. Static keyword is used to make a variable just like global variable. Static variable is also known as class variable. It acts like a global variable i.e. there is only one copy of variable associated with the class. This means only one copy regardless of how many objects of the class are created. Static variables are created at the start of program execution and destroyed automatically when execution ends. 


## Static Variable

The static variable can be used to refer to the common property of all objects (which is not unique for each object), for example, the company name of employees, college name of students, etc. The static variable gets memory only once in the class area at the time of class loading. It makes your program memory efficient (i.e., it saves memory).

Example - 

```java
package introduction;


class StaticExample{
	static int circlecount = 0;
    double radius;
    double x;
    double y;
    StaticExample(){
        this(1.0, 0.0, 0.0);
    }
    StaticExample(double r){
        this(r, 0.0, 0.0);
    }
    StaticExample(double r, double x, double y){
        radius = r;
        this.x = x;
        this.y = y;
        circlecount++;
    }

    double area(){
        return Math.PI*radius*radius;
    }

    double circumference(){
        return 2*Math.PI*radius;
    }
    
    public static void main(String args[]) {
    	StaticExample c1 = new StaticExample();
    	StaticExample c2 = new StaticExample(1.0);
    	StaticExample c3 = new StaticExample(1.0,2,3.0);
    	
    	System.out.println("Circle has count " + c3.circlecount);	
    }
}
```

Output:

```bash
Circle has count 3
```


## Static Method

If you apply static keyword with any method, it is known as static method.

- A static method belongs to the class rather than the object of a class.
- A static method can be invoked without the need for creating an instance of a class.
- A static method can access static data member and can change the value of it.

Restrictions for static method -
- The static method can not use non static data member or call non-static method directly.
- this and super cannot be used in static context.

Example - 

```java
package introduction;

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

    
    public static Circle biggerCircle(Circle a, Circle b) {
    	if(a.radius>b.radius) return a;
    	else return b;
    }
    
    public static void main(String args[]) {
    	Circle c1 = new Circle();
    	Circle c2 = new Circle(1.0);
    	Circle c3 = new Circle(1.0,2,3.0);
    	
    	Circle bigger = Circle.biggerCircle(c2, c3);
    	System.out.println(bigger.radius);	
    }
}
```

Output:

```bash
1.0
```

## Static Nested Class

Nested classes are divided into two types: static and non-static. Nested static class doesn't need reference of Outer class but non-static nested class or inner class requires Outer class reference. A static nested class is same as any other top-level class and is nested for only packaging convenience.

```java
package introduction;


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
    
    public static class Point{
        double x;
        double y;
        Point(double x, double y){
            this.x = x;
            this.y = y;
        }
    }

    public boolean contains(Point p){
        double dx = p.x - x;
        double dy = p.y - y;
        double distance = Math.sqrt(dx*dx + dy*dy);
        return distance <= radius;
    }
    
    public static void main(String args[]) {
    	Circle c1 = new Circle();
    	Circle c2 = new Circle(1.0);
    	Circle c3 = new Circle(1.0,2,3.0);

        Point p2 = new Point(2.0, 2.0);

        System.out.println(c2.contains(p2));
    }
}
```

## Static Block

Is used to initialize the static data member. It is executed before the main method at the time of classloading.

```java
class A2{  
  static{System.out.println("static block is invoked");}  
  public static void main(String args[]){  
   System.out.println("Hello main");  
  }  
}  
```


> After JDK 1.7, it is not possible to execute a java program without the main method. So, it was necessary to provide a block that gets executed before the execution of main method. Thus, static block is used to initialize the static data member.