---
title: "Array Problems"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

## Introduction

This part will take array problems to the next level. 

### Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function.

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int si = 0, ei = nums.size()-1;

        for(int i=0;i<=ei;){
            if(nums[i]==1) i++;
            else if(nums[i]==0) swap(nums[si++],nums[i++]);
            else swap(nums[i],nums[ei--]);
        }
    }
};
```


### Moore's Voting Algorithm

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

```cpp
class Solution {
public:
    int majorityElement(vector<int>& arr) {
        int ele=arr[0];
        int count=0;
        
        for(int i=0;i<arr.size();i++){
            if(count==0) ele=arr[i];
            count+=(ele==arr[i])?1:-1;
        }

        return ele;
    }
};
```

### Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. Follow-up: Could you solve the problem in linear time and in O(1) space?

```cpp
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int count1 = 0, count2 = 0; 
        int candidate1 = 0, candidate2 = 0; 

        for (int i = 0; i < nums.size(); i++) {
            if (count1 == 0  && nums[i] != candidate2) {
                candidate1 = nums[i];
            }  else if (count2 == 0 && nums[i] != candidate1) {
                candidate2 = nums[i];
            } 

            if (candidate1 == nums[i]) {
                count1++;
            } else if (candidate2 == nums[i]) {
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        vector<int> result;
        int threshold = nums.size() / 3; 

        count1 = 0, count2 = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (candidate1 == nums[i]) {
                count1++;
            } else if (candidate2 == nums[i]) {
                count2++;
            }
        }

       
        if (count1 > threshold) {
            result.push_back(candidate1);
        }
        if (count2 > threshold) {
            result.push_back(candidate2);
        }

        return result;
    }
};
```


### Maximum Subarray 

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. This is **Kadane's Algorithm**.


**Kadane's Approach -**

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int ans = -1e9;
        int csum = 0;

        for(int i=0;i<nums.size();i++){
            csum+=nums[i];
            ans = max(ans,csum);
            if(csum<0) csum=0;
        }

        return ans;
    }
};
```

**Divide and Conquer Approach -**

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        return maxSubArraySum(nums,0,nums.size()-1);
    }

    int maxSubArraySum(vector<int>& nums,int l,int r){
        if(l==r) return nums[l];

        int m = (l+r)/2;

        return max({maxSubArraySum(nums,l,m),maxSubArraySum(nums,m+1,r),maxCrossingSum(nums,l,m,r)});
    }

    int maxCrossingSum(vector<int>& nums,int l,int m,int r){
        int sum = 0;
        int left_sum = INT_MIN;
        for (int i = m; i >= l; i--) {
            sum += nums[i];
            if (sum > left_sum)
                left_sum = sum;
        }

        sum = 0;
        int right_sum = INT_MIN;
        for (int i = m + 1; i <= r; i++) {
            sum += nums[i];
            if (sum > right_sum)
                right_sum = sum;
        }

        return max({left_sum + right_sum, left_sum, right_sum});
    }
};
```

Other Important Problems -

| Problem | Link | Difficulty | Expected Time |
| ------- | ---- | ---------- | ------------------------ |
| Sort Colors | [Link](https://leetcode.com/problems/sort-colors/) | Medium | O(n) |
| Majority Element | [Link](https://leetcode.com/problems/majority-element/) | Easy | O(n) |
| Majority Element II | [Link](https://leetcode.com/problems/majority-element-ii/) | Medium | O(n) |
| Maximum Subarray | [Link](https://leetcode.com/problems/maximum-subarray/) | Medium | O(n) |
| Maximum Product Subarray | [Link](https://leetcode.com/problems/maximum-product-subarray/) | Hard | O(n) |
| Stock Buy and Sell | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Medium | O(n) |
| Rearrange Array Elements by Sign | [Link](https://leetcode.com/problems/rearrange-array-elements-by-sign/description/) | Easy | O(n) |
| Next Permutation | [Link](https://leetcode.com/problems/next-permutation/) | Medium | O(n) |



