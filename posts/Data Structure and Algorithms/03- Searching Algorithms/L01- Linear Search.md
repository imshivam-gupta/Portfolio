---
title: "Linear Search Algortihm"
subtitle: "What will this cover"
date: "2020-12-27"
---

Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

## Implementation

```cpp
#include<iostream>
#include<vector>
using namespace std;

int linear_search(vector<int>& arr,int x){
    for(int i=0;i<arr.size();i++) if(arr[i]==x) return i;
    return -1;
}

int main(){
    int n; cin >> n;
    vector<int> arr(n);
    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;
    cout << linear_search(arr,x) << endl;
}
```

## STL Library Function

```cpp
#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main(){
    int n; cin >> n;
    vector<int> arr(n);

    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;

    vector<int>::iterator it;
    cout << find(arr.begin(), arr.end(), x)-arr.begin() << endl;
}
```


## Complexity

- **Space Complexity**: O(1)
- **Best Case**: O(1) when element is found at first index
- **Worst Case**: O(n) when element is not found