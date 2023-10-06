---
title: "Maximum Sum Increasing Subsequence"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

Given an array of n positive integers. Find the sum of the maximum sum subsequence of the given array such that the integers in the subsequence are sorted in strictly increasing order i.e. a strictly increasing subsequence. 

[Problem Link](https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1)

## Bottom Up DP


```cpp
class Solution{
		
	public:
	int maxSumIS(int arr[], int n)  {  
        vector<int> ans(n,0);
        
        for(int i=0;i<n;i++) ans[i] = arr[i];
        
        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                if(arr[i]>arr[j] and ans[i]<arr[i]+ans[j]) ans[i] = arr[i]+ans[j];
            }
        }
        
        int s = ans[0];
        for(int i=1;i<n;i++){
            s = max(s,ans[i]);
        }
        
        return s;
	}  
};

```