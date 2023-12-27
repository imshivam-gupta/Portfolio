---
title: "Coding Examples"
subtitle: "Coding Examples"
date: "2023-07-12"
---

## Hello World Program

```java
package introduction;

public class HelloWorld {
	public static void main(String[] args) {
		System.out.println("First Java Program");
	}
}
```


## Array Example

```java
package introduction;

public class ArrayExample {

	public static void main(String[] args) {
		int a[] = {10,20,30,40,50};
		
		for(int i=0;i<a.length;i++) {
			System.out.println(a[i]);
		}
		
		float sum = 0; 
		float avg;
		
		for(int i=0;i<a.length;i++) {
			sum+=a[i];
		}
		
		avg = sum/a.length;
		System.out.println("Average = "+avg);
	}
}
```