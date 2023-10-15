---
title: "Access Modifiers"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

Access Modifiers or Access Specifiers in a class are used to assign the accessibility to the class members, i.e., they set some restrictions on the class members so that they can’t be directly accessed by the outside functions.

## Types of Access Modifiers

#### Public Access Modifier

- All the class members declared under the public specifier will be available to everyone. 
- The data members and member functions declared as public can be accessed by other classes and functions too. 
- The public members of a class can be accessed from anywhere in the program using the direct member access operator (.) with the object of that class.

```cpp
#include<iostream>
using namespace std;
 
class Circle{
public:
   double radius;
         
   double compute_area(){
      return 3.14*radius*radius;
   }
};

int main(){
    Circle obj;
    obj.radius = 5.5;
     
    cout << "Radius is: " << obj.radius << "\n";
    cout << "Area is: " << obj.compute_area();
    return 0;
}
```

#### Private Access Modifier

- If no access modifier is specified for the class members, then by default they are considered to be private.  
- The class members declared as private can be accessed only by the member functions inside the class. They are not allowed to be accessed directly by any object or function outside the class.
- Only the member functions or the friend functions are allowed to access the private data members of the class. 
- We can access the private members indirectly by using the public member functions of the class.

```cpp
#include<iostream>
using namespace std;
 
class Circle{  

    private: 
        double radius;

    public:   
    
        Circle(){
           radius = 1.0;
        }

        Circle(double r){
           radius = r;
        }

        double  compute_area(){   
            return 3.14*radius*radius;
        }
};
 

int main(){  
    Circle obj;
    Circle obj1(5.5);

    cout << "Area is:" << obj1.compute_area(); // Area is:94.985
    return 0;
}
```

#### Protected Access Modifier

- The protected access modifier is similar to the private access modifier in the sense that it can’t be accessed outside of its class unless with the help of a friend class. 
- The difference is that the class members declared as Protected can be accessed by any subclass (derived class) of that class as well.


```cpp
#include <bits/stdc++.h>
using namespace std;
 
class Parent{  
    protected:
    int id_protected;
};
 

class Child : public Parent{
    public:
    void setId(int id){
        id_protected = id;
    }
     
    void displayId(){
        cout << "id_protected is: " << id_protected << endl;
    }
};
 

int main() {     
    Child obj1;

    obj1.setId(81);
    obj1.displayId();
    return 0;
}
```