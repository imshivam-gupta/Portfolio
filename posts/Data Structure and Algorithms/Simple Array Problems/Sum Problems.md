---
title: "Sum Problems"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

## Introduction

The other array problems which are important for interviews and competitive programming are.

### Two Sum Problem

**Variant 1**: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

**Variant 2**: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.


Approach 1: Brute Force

```cpp
#include <bits/stdc++.h>
using namespace std;

bool twoSum(vector<int> &arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[i] + arr[j] == target) {
                return true;
            }
        }
    }
    return false;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int target = 10;
    cout << twoSum(arr, target) << endl;
    return 0;
}
```

Approach 2: Using Hashing

```cpp
#include <bits/stdc++.h>
using namespace std;

bool twoSum(vector<int> &arr, int target) {
    unordered_set<int> s;
    for (int i = 0; i < arr.size(); i++) {
        if (s.find(target - arr[i]) != s.end()) {
            return true;
        }
        s.insert(arr[i]);
    }
    return false;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int target = 10;
    cout << twoSum(arr, target) << endl;
    return 0;
}
```


Approach 3: Using Sorting

```cpp
#include <bits/stdc++.h>
using namespace std;

bool twoSum(vector<int> &arr, int target) {
    sort(arr.begin(), arr.end());
    int i = 0;
    int j = arr.size() - 1;
    while (i < j) {
        if (arr[i] + arr[j] == target) {
            return true;
        } else if (arr[i] + arr[j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int target = 10;
    cout << twoSum(arr, target) << endl;
    return 0;
}
```

### Three Sum Problem

**Variant 1**: Return triplets of numbers such that i != j != k and arr[i] + arr[j] + arr[k] = target. Solution Set should not contain duplicate triplets.

**Variant 2**: Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. Each input has only one solution.

**Variant 3**: Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.


Variant 1: Two Pointers

```cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int sum = 0;
        vector<vector<int>> ans;

        for(int i=0;i<nums.size();i++){
            if (i > 0 && nums[i] == nums[i-1]) {
                continue;
            }

            int req = sum-nums[i];
            int si = i+1, ei= nums.size()-1;
            while(si<ei){
                int currsum = nums[si]+nums[ei];
                if(currsum<req){
                    si++;
                } else if(currsum>req){
                    ei--;
                } else{
                    ans.push_back({nums[i],nums[si],nums[ei]});
                    int cstart = si, cend = ei;

                    while(si<nums.size() and nums[cstart]==nums[si]) si++;
                    while(ei>=0 and nums[cend]==nums[ei]) ei--;
                }
            }
        }

        return ans;
    }
};
```

Variant 2: Two Pointers

```cpp
class Solution {
public:
    int threeSumClosest(vector<int>& arr, int target) {

        sort(arr.begin(),arr.end());
        long long res=INT_MAX;
        int start = 0;
        
        while(start<arr.size()){
            
            while(start>0 && start<arr.size() && arr[start] == arr[start - 1]) 
                start++;
  
            if(start==arr.size()) break;

            int front = start+1;
            int back = arr.size()-1;
            
    
            while(front<back){
                int curr_sum = arr[start]+arr[front]+arr[back];
                
                if(abs(target-curr_sum)<abs(target-res)){
                    res=curr_sum;
                }

                else if(curr_sum>target) --back;
                
                else if(curr_sum<target) front++;

                else{
                
                    int front_elem = arr[front];
                    int back_elem = arr[back];
                           
                    while(front<back && arr[front] == front_elem) front++;
                    
                    while(front<back && arr[back] == back_elem) back--;

                }


            }
            start++;
            
        }

        
        return res;
    }
};
```


Variant 3: Two Pointers

```cpp
class Solution {
public:
    int threeSumMulti(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());
        int  mod = 1e9+7;
        int sum = target;
        int res = 0;

        for(int i=0;i<nums.size();i++){
            int req = sum-nums[i];
            int si = i+1, ei= nums.size()-1;
            while(si<ei){
                int currsum = nums[si]+nums[ei];
                if(currsum<req){
                    si++;
                } else if(currsum>req){
                    ei--;
                } else{
                    int cstart = si, cend = ei;

                    if(nums[si]==nums[ei]){
                        int count = ei-si+1;
                        int perm = ((count * (count-1))%mod)/2;
                        res=((res%mod)+(perm%mod))%mod;
                        break;
                    }

                    while(si<nums.size() and nums[cstart]==nums[si]) si++;
                    while(ei>=0 and nums[cend]==nums[ei]) ei--;

                    res+=(si-cstart)*(cend-ei);
                }
            }
        }

        return res;
    }
};
```

## Problems to Solve

| Problem | Link | Difficulty | Expected Time |
| ------- | ---- | ---------- | ------------------------ |
| Two Sum Problem | [Link](https://leetcode.com/problems/two-sum/) | Easy | O(n) |
| Three Sum Problem | [Link](https://leetcode.com/problems/3sum/) | Medium | O(n^2) |
| Three Sum Closest | [Link](https://leetcode.com/problems/3sum-closest/) | Medium | O(n^2) |
| Three Sum Smaller | [Link](https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article) | Medium | O(n^2) |
| Three Sum Multiplicity | [Link](https://leetcode.com/problems/3sum-with-multiplicity/) | Medium | O(n^2) |
| Four Sum Problem | [Link](https://leetcode.com/problems/4sum/) | Medium | O(n^3) |





