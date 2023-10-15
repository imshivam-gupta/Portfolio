---
title: "this Keyword"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

We can create multiple objects of the same class, and each object in C++ gets its copy of the data members of the class they point to, but all class objects access the same function definitions as present in the code segment. The this pointer in C++ stores the address of the class instance (object), which is called from the member function, to enable functions to access the correct object data members.

Suppose we create an object named objectA of class A. The class A has a non-static member function foo(). When we call the function using objectA as objectA.foo(), the pointer this is passed to the function by the compiler implicitly. this pointer can be accessed from inside the function body to access data members of objectA because it stores the address of objectA. So, when we call the function foo() we are calling foo(&objectA) because C++ adds a new parameter to the function. Since a new parameter is passed to the function, C++ converts the function definition from 

```cpp
void A::foo (); 

// to 

void A::foo (A* this);.
```

This new parameter is consistently named this and is a hidden pointer inside every class method (functions) that points to the class object. Friend functions don't have access to the this pointer because such functions are not class members.

It's important to note that this is a const pointer. We can change the value of the object it points to, but we cannot make it a point to any other object. This is why we can not declare and make assignments to the this pointer.

If a class has a member function declared with const, the type of this pointer for such class is of type const className* const. this pointer, in this case, can be used only with const member functions. Data members of the class will be constant within the function body, and to change their values inside the function; we will need to use const_cast as shown below:.

```cpp
void className::foo () const {
    memberVariable = 200; // illegal
    const_cast <int&> (member) = 200; // correct way
}
```


### Deleting this Pointer

Delete is the operation used in C++ to de-allocate the storage space of the variable and can be used only on objects created using the new keyword. Generally, the delete operator should not be used with the this pointer to de-allocate it from memory. Trying to delete the this pointer inside the member function is wrong and must be avoided, but if we try deleting the this pointer following things can happen.
If the object is created on stack memory, then deleting the this pointer from the objects member function can either result in the program crashing or undefined behaviour.

If the object is created in heap memory (using the new operator), then deleting objects from the this pointer will destroy the object from the program's memory. It will not crash the program, but later, if any object member function tries to access the this pointer, the program will crash.


#### Example - 

```cpp
#include<iostream>
using namespace std;

class Foo {
    private:
        int member;
    public:
        Foo (int member) {
            // constructor
            this->member = member;
        }
        void bar () {
            cout<<"member = "<<this->member;
        }
        void displayText () {
            cout<<"Not accessing any member variable";
        }
        void destroy() {
            // deleting this pointer using 
            // keyword delete
            delete this;
        }
    
};

int main () {
    // Creating object of type Foo.
    Foo *ptr = new Foo(5);
    
    // Delete this pointer.
    ptr->destroy();

    // Accessing member function after this is destroyed.
    ptr->displayText();

    return 0;
}
```