---
title: "Minimum Removals to Make Mountain Array"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height. Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other). Note: You cannot rotate an envelope.

[Problem Link](https://leetcode.com/problems/russian-doll-envelopes/)

## Bottom Up DP


```cpp
class Solution {
public:

    int longestBitonicSubsequence(vector<int>& nums, int n){
        vector<int> dp1(n,1);

        for(int i=1;i<n;i++){
            for(int j=i-1;j>=0;j--){
                if(nums[j]<nums[i]) dp1[i] = max(dp1[i],1+dp1[j]);
            }
        }

        vector<int> dp2(n,1);

        for(int i=n;i>=0;i--){
            for(int j=i+1;j<n;j++){
                if(nums[j]<nums[i]) dp2[i] = max(dp2[i],1+dp2[j]);
            }
        }

        int ans =0;
        for(int i=0;i<n;i++){
            if(dp1[i]!=1 and dp2[i]!=1) ans = max(ans,dp1[i]+dp2[i]-1);
        }
        
        return ans;
    }

    int minimumMountainRemovals(vector<int>& nums) {
        return nums.size()-longestBitonicSubsequence(nums,nums.size());
    }
};
```