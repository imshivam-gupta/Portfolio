---
title: "Maximum Non-overlapping Bridges"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

You are given a number n, representing the number of bridges on a river. You are given n pair of numbers, representing the north bank and south bank co-ordinates of each bridge. You are required to print the count of maximum number of non-overlapping bridges.

[Problem Link](https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/max-non-overlapping-bridges-official/ojquestion)

## Bottom Up DP


```cpp
class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int n = nums.size();
        vector<vector<int>> v(n);

        for(int i=0;i<n;i++){
            v[i].push_back(nums[i]);
        }

        vector<int> dp(n,1);

        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                if(nums[i]%nums[j]==0 and dp[i]<1+dp[j]){
                    vector<int> pr = v[j];
                    v[i] = v[j];
                    v[i].push_back(nums[i]);
                    dp[i]=1+dp[j];
                }
            }
        }

        int mn =0;
        vector<int> ans;
        for(int i=0;i<nums.size();i++){
            if(v[i].size()>mn){
                ans=v[i];
                mn=v[i].size();
            }
        }

        return ans;
    }
};
```

## Bottom Up DP (Optimized)

```cpp
class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int n = nums.size();
        vector<int> dp(n,1);
        vector<int> hash(n,1);

        for(int i=0;i<n;i++){
            hash[i] = i;
            for(int j=0;j<i;j++){
                if(nums[i]%nums[j]==0 and 1+dp[j]>dp[i]){
                    dp[i] =1+dp[j];
                    hash[i] =j;
                }
            }
        }

        int ans_val = -1;
        int ans_ind = -1;
        for (int i = 0; i < n; i++) {
            if(ans_val<dp[i]){
                ans_val = dp[i];
                ans_ind = i;
            }
        }

        vector<int> ans;
        ans.push_back(nums[ans_ind]);
        while(hash[ans_ind]!=ans_ind){
            ans_ind = hash[ans_ind];
            ans.push_back(nums[ans_ind]);
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
```