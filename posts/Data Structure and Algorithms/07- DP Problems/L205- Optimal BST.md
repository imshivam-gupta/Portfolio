---
title: "Optimal BST"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

```cpp
#include <bits/stdc++.h> 

int optimalCost(vector<int>& keys, vector<int>& freq, int n){
	vector<vector<int>> dp(n,vector<int>(n,0));


	vector<int> psum(n,0);
	psum[0]=freq[0];
	for(int i=1;i<n;i++) psum[i]=psum[i-1]+freq[i];
	

	for(int si=n-1;si>=0;si--){
		for(int ei=si;ei<=n-1;ei++){

			if(si==ei){
				dp[si][ei] = freq[si];
				continue;
			}

			dp[si][ei] = 1e9; 

			for(int r=si;r<=ei;r++){
				int c1 = r!=si?dp[si][r-1]:0;
				int c2 = r!=ei?dp[r+1][ei]:0;

				int tmp = psum[ei]-psum[si-1];

				int cost = c1+c2+tmp;
				dp[si][ei] = min(dp[si][ei],cost);
			}
		}
	}

	return dp[0][n-1];
}
```

## Complexity Analysis

- Time Complexity: O(n<sup>3</sup>)
- Space Complexity: O(n<sup>2</sup>)