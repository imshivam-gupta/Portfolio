---
title: "Constructor & Destructor"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

## Constructor

- Constructor is a member function of a class, whose name is same as the class name. Constructor is a special type of member function that is used to initialize the data members for an object of a class automatically, when an object of the same class is created.
- Constructor is invoked at the time of object creation. It constructs the values i.e. provides data for the object which is why it is known as constructors. 
- Constructor do not return value, hence they do not have a return type.
- Constructors are mostly declared in the public section of the class though it can be declared in the private section of the class.
- Constructors can be overloaded.
- Constructor can not be declared virtual.
- Constructor cannot be inherited. 
- Addresses of Constructor cannot be referred. 
- Constructor make implicit calls to new and delete operators during memory allocation.


## Types of Constructors

### Default Constructor

Default constructor is the constructor which doesn’t take any argument. It has no parameters.  It is also called a zero-argument constructor. Even if we do not define any constructor explicitly, the compiler will automatically provide a default constructor implicitly.

```cpp
#include<iostream>
using namespace std;

class student{
    int rno;
    char name[50];
    double fee;
    public:
    student(){ //  Explicit Default constructor
        cout<<"Enter the RollNo:";
        cin>>rno;
        cout<<"Enter the Name:";
        cin>>name;
        cout<<"Enter the Fee:";   
        cin>>fee;
    }   
     
    void display(){
        cout<<endl<<rno<<"\t"<<name<<"\t"<<fee;
    }
};
 
int main(){
    student s;
    s.display();
    return 0;
}
```


### Parameterized Constructor

It is possible to pass arguments to constructors. Typically, these arguments help initialize an object when it is created. To create a parameterized constructor, simply add parameters to it the way you would to any other function. When you define the constructor’s body, use the parameters to initialize the object

```cpp
#include <iostream>
using namespace std;
 
class Point {
private:
    int x, y;
 
public:
    Point(int x1, int y1){
        x = x1;
        y = y1;
    }
 
    int getX() { return x; }
    int getY() { return y; }
};
 
int main(){
    Point p1(10, 15);
    cout << "p1.x = " << p1.getX() << ", p1.y = " << p1.getY();
    return 0;
}
```


### Copy Constructor

- A copy constructor is a member function that initializes an object using another object of the same class. In simple terms, a constructor which creates an object by initializing it with an object of the same class, which has been created previously is known as a copy constructor. 
- Copy constructor is used to initialize the members of a newly created object by copying the members of an already existing object. 
- Copy constructor takes a reference to an object of the same class as an argument. The process of initializing members of an object through a copy constructor is known as copy initialization.
- It is also called member-wise initialization because the copy constructor initializes one object with the existing object, both belonging to the same class on a member by member copy basis.
- The copy constructor can be defined explicitly by the programmer. If the programmer does not define the copy constructor, the compiler does it for us.

Example:

```cpp
#include <iostream>
#include <string.h>
using namespace std;

class student {
   int rno;
   string name;
   double fee;

    public:

   student(int, string, double);

   student(student& t){
        rno = t.rno;
        name = t.name;
        fee = t.fee;
   }
    
    void display();
};

student::student(int no, string n, double f){
	rno = no;
	name = n;
	fee = f;
}

void student::display(){
	cout << endl << rno << "\t" << name << "\t" << fee;
}

int main(){
	student s(1001, "Ram", 10000);
	s.display();
	student ram(s); // copy constructor called
	ram.display();
	return 0;
}
```


##### Invoking Copy Constructor

Copy Constructor may be called in the following cases: 
- When an object of the class is returned by value. 
- When an object of the class is passed (to a function) by value as an argument. 
- When an object is constructed based on another object of the same class. 
- When the compiler generates a temporary object.

It is, however, not guaranteed that a copy constructor will be called in all these cases, because the C++ Standard allows the compiler to optimize the copy away in certain cases, one example is the return value optimization (sometimes referred to as RVO). In copy elision, the compiler prevents the making of extra copies which results in saving space and better the program complexity(both time and space); Hence making the code more optimized.  

##### Need of User Defined Copy Constructor

If we don’t define our own copy constructor, the C++ compiler creates a default copy constructor for each class which does a member-wise copy between objects. The compiler-created copy constructor works fine in general. We need to define our own copy constructor only if an object has pointers or any runtime allocation of the resource like a file handle, a network connection, etc. The default constructor does only shallow copy. 

Deep copy is possible only with a user-defined copy constructor. In a user-defined copy constructor, we make sure that pointers (or references) of copied objects point to new memory locations.  

<div class="flex flex-row">
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/copy-constructor.png" alt="Shallow Copy" width="450" height="300">
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/copy-constructor1.png" alt="Deep Copy" width="400" height="300">
</div>



Example:

```cpp
// C++ program to demonstrate the
// Working of Copy constructor
#include <cstring>
#include <iostream>
using namespace std;

class String {
private:
	char* s;
	int size;

public:
	String(const char* str = NULL); // constructor
	~String() { delete[] s; } // destructor
	String(const String&); // copy constructor
	void print()
	{
		cout << s << endl;
	} // Function to print string
	void change(const char*); // Function to change
};

// In this the pointer returns the CHAR ARRAY
// in the same sequence of string object but
// with an additional null pointer '\0'
String::String(const char* str){
	size = strlen(str);
	s = new char[size + 1];
	strcpy(s, str);
}

void String::change(const char* str){
	delete[] s;
	size = strlen(str);
	s = new char[size + 1];
	strcpy(s, str);
}

String::String(const String& old_str)
{
	size = old_str.size;
	s = new char[size + 1];
	strcpy(s, old_str.s);
}

int main()
{
	String str1("GeeksQuiz");
	String str2 = str1;

	str1.print(); // what is printed ?
	str2.print();

	str2.change("GeeksforGeeks");

	str1.print(); // what is printed now ?
	str2.print();
	return 0;
}
```

Output:

```bash
GeeksQuiz
GeeksQuiz
GeeksQuiz
GeeksforGeeks
```


```cpp
#include <cstring>
#include <iostream>
using namespace std;
 
class String {
private:
    char* s;
    int size;
 
public:
    String(const char* str = NULL); // constructor
    ~String() { delete[] s; } // destructor
    void print() { cout << s << endl; }
    void change(const char*); // Function to change
};
 
String::String(const char* str){
    size = strlen(str);
    s = new char[size + 1];
    strcpy(s, str);
}
 
// In this the pointer returns the CHAR ARRAY
// in the same sequence of string object but
// with an additional null pointer '\0'
void String::change(const char* str) { strcpy(s, str); }
 
int main(){
    String str1("GeeksQuiz");
    String str2 = str1;
 
    str1.print(); // what is printed ?
    str2.print();
 
    str2.change("GeeksforGeeks");
 
    str1.print(); // what is printed now ?
    str2.print();
    return 0;
}
```

Output:

```bash
GeeksQuiz
GeeksQuiz
GeeksforGeeks
GeeksforGeeks
```


## Destructor

- A destructor is also a special member function like a constructor. Destructor destroys the class objects created by the constructor. 
- Destructor has the same name as their class name preceded by a tilde (~) symbol. It is not possible to define more than one destructor. 
- The destructor is only one way to destroy the object created by the constructor. Hence destructor can-not be overloaded. Destructor neither requires any argument nor returns any value. It is automatically called when an object goes out of scope. 
- Destructor release memory space occupied by the objects created by the constructor. In destructor, objects are destroyed in the reverse of an object creation. If the object is created by using new or the constructor uses new to allocate memory that resides in the heap memory or the free store, the destructor should use delete to free the memory. 
- It cannot be declared static or const. The destructor does not have arguments. It has no return type not even void.

A Destructor function is called automatically when the object goes out of scope:
- the function ends 
- the program ends 
- a block containing local variables ends 
- a delete operator is called  

```cpp
#include <iostream>
using namespace std;

class Test {
public:
    Test() { cout << "\n Constructor executed"; }

    ~Test() { cout << "\n Destructor executed"; }
};

main(){
    // Create multiple objects of the Test class
    Test t, t1, t2, t3;
    return 0;
}
```

### Private Destructor

Destructors with the access modifier as private are known as Private Destructors. Whenever we want to prevent the destruction of an object, we can make the destructor private. Whenever we want to control the destruction of objects of a class, we make the destructor private. For dynamically created objects, it may happen that we pass a pointer to the object to a function and the function deletes the object. If the object is referred after the function call, the reference will become dangling.

```cpp
#include <iostream>
using namespace std;
 
class Test {
private:
    ~Test() {}
};

int main() { Test t; } // Error
```

```cpp
#include <iostream>
using namespace std;
 
class Test {
private:
    ~Test() {}
};

int main() { Test* t = new Test; } // No error
```
