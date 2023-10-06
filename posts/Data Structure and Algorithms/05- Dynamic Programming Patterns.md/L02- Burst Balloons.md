[Burst Balloons](https://leetcode.com/problems/burst-balloons/)

```cpp
class Solution {
public:
    int maxCoins(vector<int>& nums) {
       int n=nums.size();
       vector<vector<int>> dp(n, vector<int>(n));

       for(int gap=0;gap<n;gap++){
           for(int i=0,j=gap;j<n;i++,j++){
               int maxv = -1e9;
               for(int k=i;k<=j;k++){
                   int left = (k==i?0:dp[i][k-1]);
                   int right = (k==j?0:dp[k+1][j]);
                   int val= (i==0 ? 1:nums[i-1]) * (nums[k]) * (j==n-1 ? 1:nums[j+1]);
                   maxv = max(maxv,left+right+val);
               }
               cout << i << j << endl;
               dp[i][j] = maxv;
           }
       }

       return dp[0][n-1];
    }
};
```