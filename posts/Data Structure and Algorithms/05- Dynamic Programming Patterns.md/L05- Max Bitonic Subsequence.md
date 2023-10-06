---
title: "Maximum Bitonic Subsequence"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

Given an array of positive integers. Find the maximum length of Bitonic subsequence. A subsequence of array is called Bitonic if it is first strictly increasing, then strictly decreasing. 

[Problem Link](https://practice.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1)

## Bottom Up DP


```cpp

vector<int> incvec(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n,1);

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = max(dp[i],1+dp[j]);
            }
        }
    }

    return dp;
}


vector<int> decvec(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n,1);

    for(int i=n-1;i>=0;i--){
        for(int j=n-1;j>i;j--){
            if(nums[j]<nums[i]){
                dp[i] = max(dp[i],1+dp[j]);
            }
        }
    }

   
    return dp;
}

class Solution{
	public:
	int LongestBitonicSequence(vector<int>nums){
	    vector<int> up = incvec(nums);
	    vector<int> down = decvec(nums);
	    
	    int m = INT_MIN;
	    for(int i=0;i<nums.size();i++) m=max(m,up[i]+down[i]-1);
	    
	    return m;
	    
	}
};
```