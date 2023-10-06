---
title: "Longest Increasing Subsequence 2"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

Given an integer array nums, return the length of the longest strictly increasing 
subsequence with difference between adjacent elements atmost k.

[Problem Link](https://leetcode.com/problems/longest-increasing-subsequence-ii/)

## Segmented Tree Approach

```cpp
int maxn = 1e5+2;

class SegmentTree {
    public:
    vector<int> seg;
    
    SegmentTree() {
        seg = vector<int>(maxn * 4 + 10, 0);
    }
    
    int query(int l, int r) {
        return query_util(0, 0, maxn - 1, l, r);   
    }
    
    int query_util(int i, int low, int high, int l, int r) {
        if(low >= l && high <= r)
            return seg[i];
        if(low > r || high < l)
            return INT_MIN;
        int mid = (low + high) / 2;
        int left = query_util(2 * i + 1, low, mid, l, r);
        int right = query_util(2 * i + 2, mid + 1, high, l, r);
        return max(left, right);
    }
    
    void update(int len, int ele) {
        update_util(0, 0, maxn - 1, ele, len);
    }
    
    void update_util(int i, int low, int high, int ele, int len) {
        if(high == low) {
            seg[i] = len;
            return;
        }
        int mid = (low + high) / 2;
        if(low <= ele && ele <= mid) {
            update_util(2 * i + 1, low, mid, ele, len);
        } else {
            update_util(2 * i + 2, mid + 1, high, ele, len);
        }
        seg[i] = max(seg[2 * i + 1], seg[2 * i + 2]);
    }
};

class Solution {
public:
    
    int lengthOfLIS(vector<int>& nums, int k) {
      SegmentTree st;
      for(auto it:nums){
        int l=max(0,it-k);
        int maxi  = 1+ st.query(l,it-1);
        st.update(maxi,it);
      }
      return st.query(0,maxn);
    }
};
```