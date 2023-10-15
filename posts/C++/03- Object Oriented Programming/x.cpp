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