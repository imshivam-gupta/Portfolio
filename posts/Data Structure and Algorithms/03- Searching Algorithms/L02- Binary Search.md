---
title: "Binary Search Algortihm"
subtitle: "What will this cover"
date: "2020-12-27"
---

Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 

## Iterative Implementation



```cpp
#include<iostream>
#include<vector>
using namespace std;

int binarySearch(vector<int>& arr,int x){
    int si =0, ei = arr.size()-1;
    while(si<=ei){
        int mid = (si+ei)/2;
        if(arr[mid]==x) return mid;
        else if(arr[mid]>x) ei = mid-1;
        else si = mid+1;
    }
    return -1;
}

int main(){
    int n; cin >> n;
    vector<int> arr(n);

    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;

    cout << binarySearch(arr,x) << "\n";
}
```

## Recursive Implementation

```cpp
#include<iostream>
#include<vector>
using namespace std;

int binarySearch(vector<int>& arr,int si,int ei,int x){
    if(si>ei) return -1;
    int mid = (si+ei)/2;
    if(arr[mid]==x) return mid;
    else if(arr[mid]>x) return binarySearch(arr,si,mid-1,x);
    else return binarySearch(arr,mid+1,ei,x);
}

int main(){
    int n; cin >> n;
    vector<int> arr(n);

    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;


    cout << binarySearch(arr,0,arr.size()-1,x) << "\n";
}
```

#### Complexity

- **Space Complexity**: O(1) (Iterative) O(log(n)) (Recursive)
- **Best Case**: O(1) when element is found at mid
- **Worst Case**: O(log(n)) when element is not found


## Using STL Library Function


```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
    int n; cin >> n;
    vector<int> arr(n);

    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;

    cout << lower_bound(arr.begin(),arr.end(),x)-arr.begin() << "\n";
}
```

#### Complexity

- Worst Case: O(log(n)) when element is not found
- Space Complexity: O(1) (Iterative)

