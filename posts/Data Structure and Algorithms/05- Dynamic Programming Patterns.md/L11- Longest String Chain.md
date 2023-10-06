---
title: "Longest String Chain"
subtitle: "Problems based on Longest Increasing Subsequence DP"
date: "2020-12-27"
---

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height. Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other). Note: You cannot rotate an envelope.

[Problem Link](https://www.codingninjas.com/studio/problems/longest-string-chain_3752111)

## Bottom Up DP


```cpp
int longestStrChain(vector<string> &arr){
   
    sort(arr.begin(), arr.end(),[&](string a,string b){
        return a.size()<b.size();
    });
    unordered_map<string, int> mp;

    int maxChain = 0;


    for (int j = 0; j < arr.size(); j++){
        int chainLength = 1;

        for (int i = 0; i < arr[j].length(); i++){
            string s = arr[j].substr(0, i) + arr[j].substr(i + 1);
            if (mp.find(s) != mp.end()) chainLength = max(chainLength, 1 + mp[s]);
        }

        mp[arr[j]] = chainLength;
        maxChain = max(maxChain, chainLength);
    }

    return maxChain;
}
```