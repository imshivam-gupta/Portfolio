---
title: "Bubble Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---




## Iterative Approach

### Algorithm

- Traverse the array from start to end.
- For each element in the array, check if the element is greater than the next element. If yes, swap the two elements.
- If no swapping takes place in the first iteration, then the array is already sorted.


### Implementation
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

## Recursive Approach

### Algorithm

- Base Case: If the array size is 1, return.
- Do One Pass of normal Bubble Sort. This pass fixes the last element of the current subarray.
- Recur for all elements except the last of the current subarray.



### Implementation
```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

void bubbleSort(vector<int> &arr, int n){
    if(n==1) return;

    int swapped = false;

    for(int i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            swap(arr[i], arr[i+1]);
            swapped = true;
        }
    }

    if(!swapped) return;
    bubbleSort(arr, n-1);
}

int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    bubbleSort(arr, arr.size());
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(n<sup>2</sup>)
- **Worst Time Complexity**: O(n<sup>2</sup>)
- **Best Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Stable**: Yes



