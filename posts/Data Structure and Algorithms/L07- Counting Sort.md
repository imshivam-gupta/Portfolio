---
title: "Counting Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Code

```cpp
#include<iostream>
#include<vector>
using namespace std;

void countingSort(vector<int> &arr){
    int max = arr[0];
    for(int i=1;i<arr.size();i++) if(arr[i]>max) max = arr[i];

    vector<int> count(max+1,0);
    for(int i=0;i<arr.size();i++) count[arr[i]]++;

    for(int i=1;i<count.size();i++) count[i] += count[i-1];

    int n = arr.size();
    vector<int> output(n);

    for(int i=n-1;i>=0;i--){
        output[count[arr[i]]-1] = arr[i];
        count[arr[i]]--;
    }

    for(int i=0;i<n;i++) arr[i] = output[i];
}

int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    countingSort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(n+m), where m is the size of count array
- **Worst Time Complexity**: O(n+m)
- **Best Time Complexity**: O(n+m)
- **Space Complexity**: O(n+m)
- **Stable**: Yes



