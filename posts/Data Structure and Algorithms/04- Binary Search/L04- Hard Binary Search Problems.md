---
title: "Hard Binary Search Problems"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Find Peak Element - [Link](https://leetcode.com/problems/find-peak-element/)

```cpp
class Solution {
public:
    int findPeakElement(vector<int>& nums){
        int start = 0, end = nums.size()-1;
        if(start==end)                    return start;
        if(nums[start]>nums[start+1])     return start;
        if(nums[end]>nums[end-1])         return end;
        start++, end--;
        while(start<=end){
            int mid = start+(end-start)/2;
            if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1])
                return mid;
            else if(nums[mid-1]>nums[mid])
                end = mid-1;
            else if(nums[mid+1]>nums[mid])
                start = mid+1;
        }
        return -1;
    }
};
```


