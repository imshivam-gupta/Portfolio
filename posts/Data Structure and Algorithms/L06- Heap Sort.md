---
title: "Heap Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Code

```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

void heapify(vector<int>& arr,int n,int root){
    int largest = root;
    int lchild = 2*root+1, rchild = 2*root+2;

    if(lchild<n and arr[lchild]>arr[largest]) largest = lchild;
    if(rchild<n and arr[rchild]>arr[largest]) largest = rchild;

    if(largest!=root){
        swap(arr[root],arr[largest]);
        heapify(arr,n,largest);
    }
}

void heapsort(vector<int> &arr){
    for (int i=arr.size()/2-1;i>=0;i--) heapify(arr,arr.size(),i);
    for (int i = arr.size()- 1;i>0;i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }
    
    heapsort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(nlogn)
- **Worst Time Complexity**: O(nlogn)
- **Best Time Complexity**: O(nlogn)
- **Space Complexity**: O(1)+O(logn) for recursive calls
- **Stable**: No





