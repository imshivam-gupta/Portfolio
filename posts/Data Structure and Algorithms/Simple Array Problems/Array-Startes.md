---
title: "Array Problems"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

## Introduction

This is the first part of the array problems. In this part, we will cover the following problems:

#### Largest Element in an Array -

Best approach is to use a max variable and update it whenever we find a larger element. Time complexity is O(n). Space complexity is O(1).

```cpp
#include <bits/stdc++.h>
using namespace std;

int largestElement(vector<int> &arr) {
    int max = INT_MIN;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    cout << largestElement(arr) << endl;
    return 0;
}
```


#### Second Largest Element in an Array 

Best approach is to use two variables, max and secondMax. We will update the secondMax whenever we find a larger element than secondMax. Time complexity is O(n). Space complexity is O(1).

```cpp
#include <bits/stdc++.h>
using namespace std;

int secondLargestElement(vector<int> &arr) {
    int max = INT_MIN;
    int secondMax = INT_MIN;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}


int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    cout << secondLargestElement(arr) << endl;
    return 0;
}
```

### Check if an array is sorted or not

Best approach is to use a flag variable and set it to true. Then iterate over the array and check if the current element is smaller than the previous element. If it is, then set the flag to false and break out of the loop. Time complexity is O(n). Space complexity is O(1).

```cpp
#include <bits/stdc++.h>
using namespace std;

bool isSorted(vector<int> &arr) {
    bool flag = true;
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] < arr[i - 1]) {
            flag = false;
            break;
        }
    }
    return flag;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    cout << isSorted(arr) << endl;
    return 0;
}
```

### Remove duplicates inplace from a sorted array

First approach is to use a set. We will iterate over the array and insert the elements in the set. Then we iterate over the set and insert the elements in the array. Time complexity is O(nlogn). Space complexity is O(n).

```cpp
#include <bits/stdc++.h>
using namespace std;

void removeDuplicates(vector<int> &arr) {
    set<int> s;
    for (int i = 0; i < arr.size(); i++) {
        s.insert(arr[i]);
    }
    arr.clear();
    for (auto it = s.begin(); it != s.end(); it++) {
        arr.push_back(*it);
    }
}

int main() {
    vector<int> arr = {1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9};
    removeDuplicates(arr);
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}
```

Second approach is to use two pointers. We will iterate over the array and check if the current element is equal to the next element. If it is, then we will increment the next pointer. If it is not, then we will increment the current pointer and set the current element to the next element. Time complexity is O(n). Space complexity is O(1).

```cpp
#include <bits/stdc++.h>
using namespace std;

int removeDuplicates(int arr[], int n) {
    int i = 0;
    for (int j = 1; j < n; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

int main() {
    int arr[] = {1,1,2,2,2,3,3};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = removeDuplicates(arr, n);
    cout << "The array after removing duplicate elements is " << endl;
    for (int i = 0; i < k; i++) {
        cout << arr[i] << " ";
    }
}
```


## Other Problems

| Problem | Link | Difficulty | Expected Time |
| ------- | ---- | ---------- | ------------------------ |
| Rotate Array | [Link](https://leetcode.com/problems/rotate-array/) | Medium | O(n) |
| Move Zeroes | [Link](https://leetcode.com/problems/move-zeroes/) | Easy | O(n) |
| Union of 2 arrays | [Link](https://www.codingninjas.com/studio/problems/sorted-array_6613259) | Easy | O(n+m) |
| Missing Number | [Link](https://leetcode.com/problems/missing-number/) | Medium | O(n) |
| Single Number | [Link](https://leetcode.com/problems/single-number/) | Easy | O(n) |
| Maximum Consecutive Ones | [Link](https://leetcode.com/problems/max-consecutive-ones/) | Easy | O(n) |
| Longest Subarray Sum K - 1 | [Link](https://www.codingninjas.com/studio/problems/longest-subarray-with-sum-k_6682399) | Hard | O(n) |
| Longest Subarray Sum K - 2 | [Link](https://www.codingninjas.com/studio/problems/longest-subarray-with-sum-k_5713505) | Hard | O(n) |