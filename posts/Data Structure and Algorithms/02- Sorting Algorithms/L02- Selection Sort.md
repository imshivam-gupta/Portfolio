---
title: "Selection Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Code

```cpp
#include<iostream>
#include<vector>
using namespace std;


void selectionSort(vector<int> &arr){
    for(int i=0;i<arr.size();i++){
        int min_ind = i;
        for(int j=i+1;j<arr.size();j++){
            if(arr[j]<arr[min_ind]){
                min_ind = j;
            }
        }

       if(min_ind!=i) swap(arr[i],arr[min_ind]);
    }
}


int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    selectionSort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(n<sup>2</sup>)
- **Worst Time Complexity**: O(n<sup>2</sup>)
- **Best Time Complexity**: O(n<sup>2</sup>)
- **Space Complexity**: O(1)
- **Stable**: No





