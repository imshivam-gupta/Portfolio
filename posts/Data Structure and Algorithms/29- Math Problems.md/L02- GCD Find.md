---
title: "Find GCD of two numbers"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

## Approach 1: Naive Approach

- Traverse from 1 to min(a, b) and check if both a and b are divisible by the current number.
- Time Complexity: O(min(a, b))


## Approach 2: Euclidean Algorithm

- gcd(a, b) = gcd(b%a, a) if a != 0 else b
- Time Complexity: O(log(min(a, b)))

```cpp
int gcd(int a, int b){
    if (a == 0) return b;
    return gcd(b % a, a);
}

int main(){
    int a = 10, b = 15;
    cout << gcd(a, b) << endl;
    return 0;
}
```


