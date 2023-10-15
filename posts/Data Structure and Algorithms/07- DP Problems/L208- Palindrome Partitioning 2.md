---
title: "Palindrome Partitioning 2"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

```cpp
class Solution {
public:
    int minCut(string s) {
        int n = s.size();
        vector<int> dp(s.size()+1,0);

        vector<vector<bool>> ispal(n,vector<bool>(n,false));
        
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s[i] == s[j] && (j - i <= 1 || ispal[i + 1][j - 1])) {
                    ispal[i][j] = true;
                }
            }
        }

        for(int i=s.size()-1;i>=0;i--){
            int ans = 1e9;
            for(int j=i;j<=n-1;j++){
                if(ispal[i][j]){
                    ans = min(ans,1+dp[j+1]);
                }
            }
            dp[i]=ans;
        }

        return dp[0]-1;
    }
};
```

## Complexity Analysis

- Time Complexity: O(n<sup>2</sup>)
- Space Complexity: O(n<sup>2</sup>)