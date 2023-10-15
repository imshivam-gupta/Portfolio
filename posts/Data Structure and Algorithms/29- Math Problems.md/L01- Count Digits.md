---
title: "Count Digits in a Number"
subtitle: "Random Subtitle"
date: "2023-01-01"
---


Given a number N, find its number of digits: [Problem Link](https://www.codingninjas.com/studio/problems/count-digits_8416387)


## Approach 1 (Iterative)

- Keep dividing the number by 10 and increment the count.
- Time Complexity: O(log(n))


## Approach 2 (String Conversion)

- Convert the number to string and return the length of the string.
- Time Complexity: O(1)


## Approach 3 (Mathematical)

- Calculate the floor of log10(n) + 1.
- Time Complexity: O(1)

```cpp
#include <bits/stdc++.h> 
using namespace std; 
  
int countDigit(long long n) { 
    if (n == 0) return 1; 
    int count = 0; 

    while (n != 0) { 
        n = n / 10; 
        ++count; 
    } 

    return count; 
} 


int main(void) { 
    long long n = 345289467; 
    cout << "Number of digits : " << countDigit(n); 
    return 0; 
} 
```


#### Logic

Logarithms are the inverse operations of exponentiation. In other words, if you have a number x raised to the power of y (x^y), the logarithm base x of the result is equal to y. Mathematically, this can be expressed as:

x^y = z => log_x(z) = y

In the context of base-10 logarithms, it looks like this:

10^y = z => log10(z) = y

Counting Digits:
When you take the base-10 logarithm (log10) of a positive number N, you are essentially asking: "To what power must I raise 10 to get N?" This is equivalent to asking how many digits are in N when written in base 10.

For example:

- If N is 100, then log10(100) = 2, indicating that there are 2 digits in the number 100.
- If N is 1,000, then log10(1,000) = 3, indicating that there are 3 digits in the number 1,000.

Rounding Up:
The concept of taking the "upper bound" of the log10(N) means rounding up to the nearest integer. This is because when you calculate log10(N), you may not always get an integer result. For example, log10(100) is exactly 2, but log10(1000) is not an integer; it's approximately 3.