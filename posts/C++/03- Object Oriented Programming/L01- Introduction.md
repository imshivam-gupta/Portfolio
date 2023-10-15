---
title: "Introduction to OOPs"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

### Class

Class is a user-defined data type, which holds its own data members and member functions, which can be accessed and used by creating an instance of that class. Data members are the data variables and member functions are the functions used to manipulate these variables together, these data members and member functions define the properties and behaviour of the objects in a Class.

Example: Class of Cars. There may be many cars with different names and brands but all of them will share some common properties like all of them will have 4 wheels, Speed Limit, Mileage range, etc. So here, the Car is the class, and wheels, speed limits, and mileage are their properties.

A class is defined in C++ using the keyword class followed by the name of the class. The body of the class is defined inside the curly brackets and terminated by a semicolon at the end:

```cpp
class class_name{
    Access Specifier:
        Data Members;
        Member Functions(){}
};
```


### Object

An Object is an instance of a Class. When a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created) memory is allocated. Objects take up space in memory and have an associated address like a record in pascal or structure or union.

We can declare objects like - 

```cpp
ClassName ObjectName;
```


### Accessing Data Members and Member Functions

The data members and member functions of the class can be accessed using the dot(‘.’) operator with the object. For example, if the name of the object is obj and you want to access the member function with the name printName() then you will have to write obj.printName().

```cpp
#include <iostream>
using namespace std;

class Employee{
    public:
        string name;
        int salary;
        void printDetails(){
            cout<<"The name of our first employee is "<< this->name<<" and his salary is "<<this->salary<<endl;
        }
};

int main(){
    // Employee employee1;
    // employee1.name = "Harry";
    // employee1.salary = 100;
    // employee1.printDetails();

    Employee employee2;
    employee2.name = "Rohan";
    employee2.salary = 200;
    employee2.printDetails();
    return 0;
}
```


### Defining Member Functions Outside The Class

There are 2 ways to define a member function:
- **Inside class definition -** To define a member function inside the class definition we have to write the function along with the class definition.
- **Outside class definition -** To define a member function outside the class definition we have to use the scope resolution:: operator along with the class name and function name.


```cpp
#include <iostream>
using namespace std;

class Employee {
    public:
    
    string empname;
    int id;

    void printname();

    void printid(){
        cout <<"Student id is: "<<id;
    }
};

void Employee::printname(){
    cout <<"Employee is: "<< empname; 
}

int main(){
    Employee emp1;
    emp1.empname = "Student";
    emp1.id = 15;

    emp1.printname();
    cout << endl;
    emp1.printid();
    return 0;
}
```


### Semicolon after Class Definition

Just like structure and union, we can also create the instance of a class at the end just before the semicolon.  As a result, once execution reaches at that line, it creates a class and allocates memory to your instance. This is the reason why we need a semicolon at the end of the class definition.

```cpp
#include <iostream>
using namespace std;
  
class Demo{
   int a, b;
    public:
    Demo(){
        cout << "Default Constructor" << endl;
    }
    Demo(int a, int b){  
        cout << "parameterized constructor -values" << a  << " "<< b << endl;
    }
      
} instance; // default constructor
  
  
int main() {
    return 0;
}
```
