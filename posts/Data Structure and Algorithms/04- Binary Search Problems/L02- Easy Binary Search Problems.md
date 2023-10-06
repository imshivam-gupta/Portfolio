---
title: "Easy Binary Search Problems"
subtitle: "What will this cover"
date: "2020-12-27"
---


## Search Insert Position - [Link](https://leetcode.com/problems/search-insert-position/)

```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        return lower_bound(nums.begin(),nums.end(),target)-nums.begin();
    }
};
```

## Find First and Last Position of Element in Sorted Array- [Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int lb = lower_bound(nums.begin(),nums.end(),target)-nums.begin();
        int ub = upper_bound(nums.begin(),nums.end(),target)-nums.begin()-1;
        if(ub==-1) return {-1,-1};
        if(lb>nums.size() or nums[lb]!=target) lb=-1;
        if(ub>nums.size() or nums[ub]!=target) ub=-1;
        return {lb,ub};
    }
};
```

## Count Occurrences of an Element in a Sorted Array - [Link](https://www.codingninjas.com/studio/problems/occurrence-of-x-in-a-sorted-array_630456)
```cpp
int count(vector<int>& arr, int n, int x) {
	return upper_bound(arr.begin(),arr.end(),x)-lower_bound(arr.begin(),arr.end(),x);
}
```
