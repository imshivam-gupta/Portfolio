---
title: "Maximum Bitonic Subsequence"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height. Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other). Note: You cannot rotate an envelope.

[Problem Link](https://leetcode.com/problems/russian-doll-envelopes/)

## Bottom Up DP


```cpp
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& nums) {
        sort(nums.begin(),nums.end(),[](vector<int> &a,vector<int> &b){
            if(a[1]!=b[1])return a[1]<b[1];
            else return a[0]>b[0];
        });

        vector<int> ans;
        for(auto x:nums){
            if(ans.empty() or ans.back()<x[0]){
                ans.push_back(x[0]);
            }
            else{
                int ind = lower_bound(ans.begin(),ans.end(),x[0])-ans.begin();
                ans[ind]=x[0];
            }
        }
        return ans.size();
    }
};
```