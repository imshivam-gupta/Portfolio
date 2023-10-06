---
title: "Insertion Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Code

```cpp
#include<iostream>
#include<vector>
using namespace std;


void insertionSort(vector<int> &arr){
    for(int i=1;i<arr.size();i++){
        int key = arr[i];
        int j = i-1;

        while (j>=0 && arr[j]>key) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}


int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    insertionSort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(n<sup>2</sup>)
- **Worst Time Complexity**: O(n<sup>2</sup>)
- **Best Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Stable**: Yes




