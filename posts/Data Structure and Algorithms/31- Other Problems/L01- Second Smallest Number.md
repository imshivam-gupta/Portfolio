---
title: "Second Smallest Number"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

```cpp
#include<iostream>
#include<vector>
#include<climits>
using namespace std;

int findSecondSmallest(vector<int> v){
    int n = v.size();
    if(n<2) return -1;

    int smallest = INT_MAX;
    int secondSmallest = INT_MAX;

    for(int i=0;i<n;i++){
        if(v[i]<smallest){
            secondSmallest = smallest;
            smallest = v[i];
        }
        else if(v[i]<secondSmallest && v[i]!=smallest){
            secondSmallest = v[i];
        }
    }
}

int main(){
    int n;
    cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    int ans = findSecondSmallest(v);
    cout<<ans<<endl;
    return 0;
}
```