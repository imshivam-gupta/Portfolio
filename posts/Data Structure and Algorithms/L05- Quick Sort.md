---
title: "Quick Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---


## Code

We can select many pivots like first,mid and last element, but we will select the last element as the pivot.


```cpp
#include<iostream>
#include<vector>
using namespace std;


int partition(vector<int>& arr,int si,int ei){
    int pivot = arr[ei];

    int i = si;

    for(int j=si;j<ei;j++){
        if(arr[j]<pivot){
            swap(arr[i],arr[j]);
            i++;
        }
    }

    swap(arr[i],arr[ei]);
    return i;
}


void quicksort(vector<int>& arr,int si,int ei){
    if(si>=ei) return;
    int pivot = partition(arr,si,ei);
    quicksort(arr,si,pivot-1);
    quicksort(arr,pivot+1,ei);
}


int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }
    
    quicksort(arr,0,arr.size()-1);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(nlogn)
- **Worst Time Complexity**: O(n<sup>2</sup>)
- **Best Time Complexity**: O(nlogn)
- **Space Complexity**: O(1)+O(logn) for stack
- **Stable**: No




