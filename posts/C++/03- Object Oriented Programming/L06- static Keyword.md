---
title: "Static Keyword"
subtitle: "Random Subtitle"
date: "2023-01-01"
---


## Static Variables

When a variable is declared as static, space for it gets allocated for the lifetime of the program.
Even if the function is called multiple times, space for the static variable is allocated only once and the value of the variable in the previous call gets carried through the next function call. 
This is useful for implementing coroutines in C/C++ or any other application where the previous state of function needs to be stored.

Code - 

```cpp
#include <iostream>
#include <string>
using namespace std;
 
void demo(){
    static int count = 0;
    cout << count << " ";
    count++;
}

void demo2(){
    int count = 0;
    cout << count << " ";
    count++;
}
 
int main(){

    cout << "Output when demo func called " << endl;
    for (int i = 0; i < 5; i++)
        demo();

    cout << endl << "Output when demo2 func called " << endl;
    for (int i = 0; i < 5; i++)
        demo2();
    return 0;
}
```

Output - 

```bash
Output when demo func called 
0 1 2 3 4 
Output when demo2 func called 
0 0 0 0 0 
```


## Static Data Members

- A static data member in C++ is a data member defined in a class that is not instantiated with each object created of the class. Data members defined in a class are usually instantiated with every object created of the class. That is, each object of the class will have their own instances or copies of the data members defined in the class. 
- However, if a data member is initialized with the static keyword, that data member will not be instantiated and there shall exist only one copy of that data member for all objects or instances of the class.
- A static data member in C++ is declared inside a class but is defined within static member functions or outside the class using a scope resolution operator(::).

Example - 

```cpp
class A{
    //Declaration
    static int x;
};

//Definition
int A::x=0;
```

## Static Member Functions

A static member function is a member function of a class that is defined with the static keyword. For example -
