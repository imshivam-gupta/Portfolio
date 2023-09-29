---
title: "Bubble Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---




## Code

```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;


void bubbleSort(vector<int> &arr){
    bool swapped;
    for(int i=0;i<arr.size();i++){
        swapped = false;
        for(int j=0;j<arr.size()-i-1;j++){
            if (arr[j]>arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if(!swapped) break;
    }
}


int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    bubbleSort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```



## Properties

- **Average Time Complexity**: O(n<sup>2</sup>)
- **Worst Time Complexity**: O(n<sup>2</sup>)
- **Best Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Stable**: Yes



