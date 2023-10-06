---
title: "Final Keyword"
subtitle: "Java"
date: "2023-12-12"
---

The final keyword in JAVA is used to restrict the access of a variable, method or class from its superclass to subclass. The Java final keyword can be used in many context. 

- Variable: A variable cannot be accessed in subclass
- Method: A method cannot be called from a subclass object
- Class: A class cannot be subclassed

> Extending a final class throws a compile time error.

```java
final class Bike{}

class Honda extends Bike{} // Compile time error
```

> A final method cannot be overridden

```java
class Bike{  
    final void run(){
        System.out.println("running");
    }  
}  
     
class Honda extends Bike{  
    void run(){ // Compile time error
        System.out.println("running safely with 100kmph");
    }  
     
    public static void main(String args[]){  
        Honda honda= new Honda();  
        honda.run();  
    }  
}  
```

> A final variable cannot be changed

```java
class Bike9{  
    final int speedlimit=90;
    
    void run(){  
        speedlimit=400;  
    }  
    
    public static void main(String args[]){  
        Bike9 obj=new  Bike9();  
        obj.run();  
    }  
}
``` 