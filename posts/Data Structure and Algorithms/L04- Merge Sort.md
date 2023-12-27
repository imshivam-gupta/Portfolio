---
title: "Merge Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Code

```cpp
#include<iostream>
#include<vector>
using namespace std;


void merge(int l,int r,int mid,vector<int> &arr){
    vector<int> output(r-l+1);
    
    int ptr = 0;
    int i=l, j=mid+1;

    while(i<=mid && j<=r){
        if(arr[i]<arr[j]) output[ptr++]=arr[i++];
        else output[ptr++]=arr[j++];
    }

    while(i<=mid) output[ptr++] = arr[i++];
    while(j<=r) output[ptr++] = arr[j++];



    for(int z=l;z<=r;z++) arr[z]=output[z-l];
}


void mergesort(vector<int>& arr,int si,int ei){
    if(si>=ei) return;
    int mid = (si+ei)/2;
    mergesort(arr,si,mid);
    mergesort(arr,mid+1,ei);
    merge(si,ei,mid,arr);
}


int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }
    
    mergesort(arr,0,arr.size()-1);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Properties

- **Average Time Complexity**: O(nlogn)
- **Worst Time Complexity**: O(nlogn)
- **Best Time Complexity**: O(nlogn)
- **Space Complexity**: O(N)
- **Stable**: Yes
- **Parallelizable**: Yes by the use of threads





