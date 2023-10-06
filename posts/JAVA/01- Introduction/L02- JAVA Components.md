---
title: "Components of JAVA"
subtitle: "History of JAVA"
date: "2023-07-12"
---


## Tools in JAVA

Java Software Development Kit (JDK) - It is a bundle of tools and libraries needed to develop Java applications. It includes:

- javac: JAVA compiler
- java: JAVA interpreter
- javadoc: JAVA documentation generator in HTML format
- appletviewer: Java interpreter to execute applets
- jdb: Java debugger
- javap: Java class file disassembler to display the contents of a class file in a human readable form, it also diplays the meaning of byte code.
- javah: To create interface between JAVA and C/C++ code


## Packages in JAVA

API(Application Programming Interface) in JAVA SDK  enables developers to develop varities of applets and applications. It contains 9 packages:

- java.applet: for creating applets
- java.awt: The abstract window toolkit for designing GUI(Graphical User Interface) like buttons, checkboxes, etc.
- java.io: File input/output handling
- java.lang: Provides useful classes to handle Object, Thread, String, Exception, System, Math, Float, Integer, etc.
- java.net: Provides useful classes to handle networking related tasks supports TCP/IP protocol
- java.util: Provides useful classes to handle date, time, calendar, vector, stack, etc.
- java.sql: For database connectivity
- javax.swing: For designing GUI(Graphical User Interface) like buttons, checkboxes, etc.


## Built in Data Types

| Type | Size | Range |
| --- | --- | --- |
| boolean | 1 bit | true or false |
| byte | 1 byte | -128 to 127 |
| char | 2 bytes | 0 to 65,536 |
| short | 2 bytes | -32,768 to 32,767 |
| int | 4 bytes | -2,147,483,648 to 2,147,483,647 |
| long | 8 bytes | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float | 4 bytes | 1.40129846432481707e-45 to 3.40282346638528860e+38 |
| double | 8 bytes | 4.94065645841246544e-324d to 1.79769313486231570e+308d |


## Identifiers in JAVA

- Names given to classes, variables, methods, etc. are called identifiers.
- May consist of letters, digits, underscore(_) with no spaces.
- Blank and comma are not allowed.
- Identifiers are case sensitive like name and Name are different.
- Identifiers should not start with digits.
- It can be arbitrarily long.
- Keywords cannot be used as identifiers.

## Array in JAVA

Array is finite ordered collection of homogeneous data elements stored in contiguous memory locations. For manipulating array we perform 3 tasks:
- Declaration of array
- Allocation of memory
- Loading of values in array


Declaration of array:

```java
int[] arr;
```

Allocation of memory:

```java
arr = new int[5];
```

Declaration and allocation of memory:

```java
int[] arr = new int[5];
```

Initialization of array:

```java
int[] arr = {1, 2, 3, 4, 5};

int[] arr2 = new int[4];

for(int i=0; i<4; i++){
    arr2[i] = i+1;
}
```

