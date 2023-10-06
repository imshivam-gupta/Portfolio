[Matrix Chain Multiplication](https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1)

```cpp
class Solution{
public:
    int matrixMultiplication(int N, int arr[]){
        vector<vector<int>> dp(N-1,vector<int>(N-1,0));
        
        for(int g=0;g<N-1;g++){
            for(int si=0,ei=g;ei<N-1;si++,ei++){
                if(g==0){
                    dp[si][ei]=0;
                    continue;
                }
                
                if(g==1){
                    dp[si][ei] = arr[si]*arr[ei]*arr[ei+1];
                    continue;
                }
                
                int mn = 1e9;
                for(int k=si;k<ei;k++){
                    int lc = dp[si][k];
                    int rc = dp[k+1][ei];
                    int mc = arr[si]*arr[k+1]*arr[ei+1];
                    mn = min(mn,lc+rc+mc);
                }
                
                dp[si][ei] = mn;
            }
        }
        
        return dp[0][N-2];
    }
};

```