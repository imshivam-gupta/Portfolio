---
title: "Coding Examples"
subtitle: "Coding Examples"
date: "2023-07-12"
---


## Creating a Circle class

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

## Command Line Input

We gave input to the program using the command line. The command line arguments are passed to the main method of the program. The main method accepts an array of String object as parameter. The command line arguments are stored in this array.

> In Eclipse, we can give command line arguments by going to Run -> Run Configurations -> Arguments tab.

```java
public class Echo{
    public static void main(String args[]){
        for(int i=0;i<args.length;i++){
            System.out.println(args[i]);
        }
        System.exit(0);
    }
}
```

Output:

```bash
Hello
World
```

## Initializing Array using Command Line Arguments

```java
public class ArrayExample{
    public static void main(String args[]){
        int a[] = new int[args.length];
        for(int i=0;i<args.length;i++){
            a[i] = Integer.parseInt(args[i]);
        }
        for(int i=0;i<a.length;i++){
            System.out.println(a[i]);
        }
        System.exit(0);
    }
}
```

## Taking Average of integers using Scanner and ArrayList

```java
package introduction;

import java.util.*;

public class ArrayListExamples {
	public static void main(String args[]) {
		int sum = 0;
		float avg = 0;
		
		ArrayList<Integer> l = new ArrayList<Integer>();
		
		System.out.println("Enter Input");
		Scanner sc = new Scanner(System.in);
		
		while(sc.hasNextInt()) {
			l.add(sc.nextInt());
		}
		
		for(int x:l) sum+=x;
		
		avg = sum/l.size();
		System.out.println("Average is " + avg);
		

	}
}
```

> Press Ctrl+Z to stop taking input from the user.