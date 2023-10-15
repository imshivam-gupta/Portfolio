---
title: "Errors in JAVA Program"
subtitle: "Errors in JAVA Program"
date: "2023-07-12"
---



## Compile Time Error

- Programmer makes mistakes in the syntax of the program.
- Use methods or variables that are not defined in the program.
- Create objects of abstract classes or interfaces ...


## Run Time Error

- Program is syntactically correct but it fails to execute.
- Programs are running fine for certain inputs but fails for some inputs.
- These are very difficult to decide when writing the program.
- Make program are unreliable and may damage the system.



## Runtime Exception Subclasses:
- ArithmeticException: JAVA Run Time Environment throws an object called ArithmeticException when a = x/(y-z) is executed and y-z = 0.
- ArrayIndexOutOfBoundsException: JAVA Run Time Environment throws an object called ArrayIndexOutOfBoundsException when an array is accessed with an invalid index.
- ArrayStoreException: JAVA Run Time Environment throws an object called ArrayStoreException when an array is accessed with an invalid index.
- ClassCastException: JAVA Run Time Environment throws an object called ClassCastException when an object is cast to a class of which it is not an instance.
- IllegalArgumentException: JAVA Run Time Environment throws an object called IllegalArgumentException when a method m(int x,int y) is called as m(1,5,4).
- SecurityException
- IncompatibleClassChangeError
- IndexOutOfBoundsException
- NegativeArraySizeException: JAVA Run Time Environment throws an object called NegativeArraySizeException when an array is created with a negative size.
- NullPointerException: JAVA Run Time Environment throws an object called NullPointerException when a null object is accessed.
- NumberFormatException: JAVA Run Time Environment throws an object called NumberFormatException when a string is converted to a number but the string is not a valid number.
- StringIndexOutOfBoundsException: JAVA Run Time Environment throws an object called StringIndexOutOfBoundsException when a string is accessed with an invalid index.



## Exception Handling

Whenever Error or Exception occurs in a program, JAVA Runtime Environment throws an object corresponding to that.  Java provides Runtime error managment ti dea, with errors and exceprions. Java exception handling is managed via five keywords: try, catch, throw, throws, and finally.


### Simple Try-Catch Block

```java
try {
    // statements that may cause an exception
} catch (ExceptionType1 exOb) {
    // exception handler for ExceptionType1
} 
```


### Try-Catch Block with Multiple Catch Blocks


A try block can be followed by one or more catch blocks. Each catch block must contain a different exception handler. So, if you have to perform different tasks at the occurrence of different exceptions, use java multi-catch block.

> At a time only one exception occurs and at a time only one catch block is executed. All catch blocks must be ordered from most specific to most general, i.e. catch for ArithmeticException must come before catch for Exception.

Example:

```java
public class MultipleCatchBlock1 {  
    public static void main(String[] args) {  
          
        try{    
            int a[]=new int[5];    
            a[5]=30/0;    
        } catch(ArithmeticException e){  
            System.out.println("Arithmetic Exception occurs");  
        } catch(ArrayIndexOutOfBoundsException e){  
            System.out.println("ArrayIndexOutOfBounds Exception occurs");  
        } catch(Exception e) {  
            System.out.println("Parent Exception occurs");  
        }             
        System.out.println("rest of the code");    
    }  
}  
```

Output:

```bash
Arithmetic Exception occurs
rest of the code
```

### Nested Try Block

In Java, using a try block inside another try block is permitted. It is called as nested try block. Every statement that we enter a statement in try block, context of that exception is pushed onto the stack.

For example, the inner try block can be used to handle ArrayIndexOutOfBoundsException while the outer try block can handle the ArithemeticException (division by zero).


### Finally Block

Java finally block is a block used to execute important code such as closing the connection, etc. Java finally block is always executed whether an exception is handled or not. Therefore, it contains all the necessary statements that need to be printed regardless of the exception occurs or not. The finally block follows the try-catch block.

Example:

```java
class TestFinallyBlock {    
    public static void main(String args[]){    
        try{    
        //below code do not throw any exception  
            int data=25/5;    
            System.out.println(data);    
        }    
        //catch won't be executed  
        catch(NullPointerException e){  
            System.out.println(e);  
        }    

        //executed regardless of exception occurred or not  
        finally {  
            System.out.println("finally block is always executed");  
        }    
    
        System.out.println("rest of phe code...");    
  }    
}    
```

Bash Output:

```bash
5
finally block is always executed
rest of the code...
```


### throw Keyword

If a method is capable of causing an exception that it does not handle, it must specify this behavior so that callers of the method can guard themselves against that exception. This is done by using the throw keyword. A throw clause lists the type of exception that a method might throw. 


Example:

```java
import java.lang.Exception;

class MyException extends Exception {
    MyException(String s) {
        super(s);
    }
}

class TestMyException {
    public static void main(String[] args) {
        int x = 5;
        int y = 1000;
        try {
            float z = (float) x / (float) y;
            if(z < 0.01) {
                throw new MyException("Number is too small");
            }
        } catch (MyException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("finally block is always executed");
        }
    }
}
```

### throws Keyword

The throws keyword is used to declare the exception. It gives an information to the programmer that there may occur an exception so it is better for the programmer to provide the exception handling code so that normal flow can be maintained. The general form of declaring exception is:

```java
type method-name(parameter-list) throws exception-list {
    // body of method
}
```

Example:

```java
import java.io.IOException;

class TestThrows {
    void method() throws IOException {
        throw new IOException("device error");
    }
}

class TestThrows2 {
    public static void main(String[] args) {
        try {
            TestThrows t = new TestThrows();
            t.method();
        } catch (Exception e) {
            System.out.println("exception handled");
        }
        System.out.println("normal flow...");
    }
}
```

### Exception Class Methods

- public String getMessage(): returns the message string of Throwable class which is set while creating an exception object. If no message is set, it returns a string containing the exception class name and "null" as message.
- public Throwable getCause(): returns the cause of the exception as represented by a Throwable object.
- public String toString(): Returns the name of the class concatenated with the result of getMessage().
- public void printStackTrace(): prints the result of toString() along with the stack trace to System.err, the error output stream.
- public StackTraceElement [] getStackTrace(): returns an array containing each element on the stack trace. The element at index 0 represents the top of the call stack, and the last element in the array represents the method at the bottom of the call stack.
- public Throwable fillInStackTrace(): fills the stack trace of this Throwable object with the current stack trace, adding to any previous information in the stack trace.


