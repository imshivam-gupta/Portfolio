---
title: "Number of Longest Increasing Subsequence"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

Find the number of longest increasing subsequence in an array.

[Problem Link](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)

## Bottom Up DP


```cpp
class Solution {
public:
    int findNumberOfLIS(std::vector<int>& nums) {
        int n = nums.size();
        vector<int> length(n, 1);
        vector<int> count(n, 1);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    if (length[j] + 1 > length[i]) {
                        length[i] = length[j] + 1;
                        count[i] = 0;
                    }
                    if (length[j] + 1 == length[i]) {
                        count[i] += count[j];
                    }
                }
            }
        }

        int maxLength = *max_element(length.begin(), length.end());
        int result = 0;

        for (int i = 0; i < n; i++) {
            if (length[i] == maxLength) {
                result += count[i];
            }
        }

        return result;
    }
};
```