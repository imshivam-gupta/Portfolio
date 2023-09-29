---
title: "Binary Search Algortihm"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Iterative Code

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

## Recursive Code

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

## Complexity

- **Space Complexity**: O(1) (Iterative) O(log(n)) (Recursive)
- **Best Case**: O(1) when element is found at mid
- **Worst Case**: O(log(n)) when element is not found

&nbsp;

## Lower Bound


#### Binary Search Code

```cpp
#include<iostream>
#include<vector>
using namespace std;

int lb(vector<int>& arr,int x){
    int si =0, ei = arr.size()-1;
    int ans = n;
    while(si<=ei){
        int mid = (si+ei)/2;
        if(arr[mid]>=x) {
            ans = mid;
            ei = mid-1;
        }
        else si = mid+1;
    }
    return ans;
}

int main(){
    int n; cin >> n;
    vector<int> arr(n);

    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;

    cout << lb(arr,x) << "\n";
}
```

#### Using STL


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

&nbsp; &nbsp;

## Upper Bound

#### Binary Search Code

```cpp
#include<iostream>
#include<vector>
using namespace std;

int upperBound(vector<int> &nums, int target, int n){
	int si =0 , ei = nums.size()-1;
    int ans = n;

	while(si<=ei){
		int mid = si + ((ei-si)>>1);
		if(nums[mid]>target){
            ans = mid;
            ei = mid-1;
        }
        else si = mid+1;
	}

    return ans;
}

int main(){
    int n; cin >> n;
    vector<int> arr(n);

    for(int i=0;i<n;i++) cin >> arr[i];
    int x; cin >> x;

    cout << upperBound(arr,x,n) << "\n";
}
```

#### Using STL


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

    cout << upper_bound(arr.begin(),arr.end(),x)-arr.begin() << "\n";
}
```

#### Complexity

- Worst Case: O(log(n)) when element is not found
- Space Complexity: O(1) (Iterative)

#### Important Points
- When element is not found, lower bound and upper bound will return the same index. lower bound will return pointer to the position of a number just higher than num and upper bound return pointer to position of next higher number than num.
- When single element is present in the array - lower bound will return pointer to the position of a number and upper bound will return the index of the next higher element.
- When multiple elements are present in the array - lower bound will return pointer to position of num and upper bound returns pointer to the first position of the next higher number than the last occurrence of num. 
