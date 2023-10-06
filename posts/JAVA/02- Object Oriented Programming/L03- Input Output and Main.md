---
title: "Understanding main method"
subtitle: "Understanding main method"
date: "2023-07-12"
---

```java
import java.lang.*;

class Calculator{
    double i;
    double x = Math.sqrt(i);
}

class Understanding_Main_Method{
    public static void main(String[] args){
        Calculator c = new Calculator();
        c.i = 25;
        System.out.println("Square root of "+c.i+" is "+c.x);
    }
}
```

Output:

```bash
Square root of 25.0 is 5.0
```

## Main method

- **public:** It is an access specifier which represents visibility. It means it is visible to all. It should always be public for main method not private or protected otherwise JVM will not be able to call main() method and will through an error.
- **void:** It is the return type of the method. It means it doesn't return any value. Main method doesn't return anything hence it's return type is void and should always be void otherwise JVM will through an error.
- **static:** It is a keyword. If we declare any method as static, it is known as the static method. The core advantage of the static method is that there is no need to create an object to invoke the static method. The main method is executed by the JVM, so it doesn't require to create an object to invoke the main method. So it saves memory. Main method is always static hence it should always be static otherwise JVM will through an error.
- **String args[] :** It is the parameter passed to the main method. Here we are defining an array of String type which is used to accept command line arguments. We could write it as String[] x also but it is customary to write it as String args[]. We can use this to pass arguments to the main method.


## Output Statement

System.out.println(): It is used to print the output on the console. 

- System is final class defined in the java.lang package.
- out is class variable of type PrintStream, which is the output stream to write the data.
- println() is the method of PrintStream class used to print the different values. It causes cursor to move to the beginning of the next line after printing the desired result.

#### print vs println

- print() method prints the string inside the quotation marks. It doesn't move the cursor to the next line. So, the next printing takes place from the same line.
- println() method prints the string inside the quotation marks similar like the print() method. But, it moves the cursor to the next line after printing the desired result.


## String to Integer

```java
int a = Integer.parseInt(args[0]);
```

## Input from User using Scanner class

Scanner is one of the predefined class in java.util package used for obtaining the input of the primitive types like int, double etc. and strings. It is the easiest way to read input in a Java program, though not very efficient if you want an input method for scenarios where time is a constraint like in competitive programming.

```java
import java.util.Scanner;

public class ScannerDemo{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int a = sc.nextInt(); // Read user input from keyboard
        System.out.println("You entered "+a);
        int b = sc.nextInt();
        System.out.println("You entered "+b);
        System.out.println("Sum of "+a+" and "+b+" is "+(a+b));
    }
}
```