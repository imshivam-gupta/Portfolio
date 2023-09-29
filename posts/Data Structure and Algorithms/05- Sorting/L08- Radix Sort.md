---
title: "Radix Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Code

```cpp
#include<iostream>
#include<vector>
using namespace std;

void countSort(vector<int>& arr, int exp){
    int n = arr.size();

    vector<int> count(10,0);
    for(int i=0;i<n;i++) count[(arr[i]/exp)%10]++;
    for(int i=1;i<10;i++) count[i] += count[i-1];

    vector<int> output(n);
    for(int i=n-1;i>=0;i--){
        output[count[(arr[i]/exp)%10]-1] = arr[i];
        count[(arr[i]/exp)%10]--;
    }

    for(int i=0;i<n;i++) arr[i] = output[i];
}


void radixSort(vector<int>& arr){
    int mx = arr[0];
    for(int i=1;i<arr.size();i++) if(arr[i]>mx) mx = arr[i];

    for(int exp=1;mx/exp>0;exp*=10){
        countSort(arr, exp);
    }
}

int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    radixSort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(d* (n+b)), where d is no of digits and b is base system
- **Worst Time Complexity**: O(d* (n+b)), where d is no of digits and b is base system
- **Best Time Complexity**: O(d* (n+b)), where d is no of digits and b is base system
- **Space Complexity**: O(n+b)
- **Stable**: Yes





