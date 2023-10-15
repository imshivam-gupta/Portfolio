---
title: "Packages in Java"
subtitle: "Packages in Java"
date: "2023-07-12"
---

A package is a container for the classes that are used to keep the class name space compartmentalized. It is used to keep the classes and the interface in different packages according to their functionality. This helps in keeping the code clean and easy to understand.

Example: We can create all classes related to all sorting algorithms in a package named sorting and all classes related to searching algorithms in a package named searching.

It allows flexibility to give the same name but to many classes that is to avoid name space collision. Package is both naming and visibility control mechanism. It supports reusability and maintainability of the code.

## Advantages of using packages

- Packages provide code reusability because a package contains a group of classes.
- It helps in removing name space collision when multiple packages have classes with the same name.
- Packages also provide the hiding of class facility. Thus programs can't use classes from another package until they are public. 
- Access Limitation can be applied with the help of packages.
- Nesting of packages is also possible in heirarchical manner.

## User Defined Packages

- We can maintain our own packages and classes in a package.
- Java uses file system directory to store packages.
- The package statement should be the first statement in the source file.

```java
package myPackage;

public class MyClass {
    // ...
}
```

- Packages are ususally defined with heirarchical naming convention. For example, a package named myPackage.mySubPackage.mySubSubPackage can be used to define a package named myPackage which is a sub package of mySubPackage which is a sub package of mySubSubPackage. Levels in heirarchy are separated by a dot(.).
- Thre is no semantic relationship between packages. For example, a package named myPackage.mySubPackage.mySubSubPackage is not a sub package of myPackage.mySubPackage
- Package name should be all lower case letters whenever possible.

