---
title: "Boolean Parenthisation"
subtitle: "Random Subtitle"
date: "2023-01-01"
---

```cpp
int mod = 1003;

class Solution{
public:
    int countWays(int N, string S){

        vector<vector<vector<int>>> dp(N,vector<vector<int>>(N,vector<int>(2,0)));
        
        
        for(int g=0;g<N;g++){
            for(int si=0,ei=g;ei<N;si+=1,ei+=1){
                
                if(g==0){
                    char c = S[si];
                    dp[si][ei][0]=(c=='F');
                    dp[si][ei][1]=(c=='T');
                    continue;
                } 
 
                int total_true =0; 
                int toal_false=0;

                for(int k=si+1;k<=ei-1;k+=2){
                        
                    char opr = S[k];

                    int left_true = dp[si][k-1][1];
                    int right_true = dp[k+1][ei][1];
                    int left_false = dp[si][k-1][0];
                    int right_false = dp[k+1][ei][0];
                    
                    if(opr=='&'){
                        total_true = (total_true + (left_true * right_true) % mod) % mod;
                        toal_false = (toal_false + (left_false * right_true) % mod + (left_true * right_false) % mod + (left_false * right_false) %mod) % mod;
                    } 
                    
                    else if(opr=='|'){
                        total_true =  (total_true  + (left_false * right_true) % mod + (left_true * right_false) % mod + (left_true *right_true) % mod) % mod;
                        toal_false = (toal_false + (left_false * right_false) % mod) % mod;
                    } 
                    
                    else if(opr=='^'){
                        total_true= (total_true + (left_false * right_true) % mod + (left_true * right_false) % mod) % mod;
                        toal_false = (toal_false+ (left_false * right_false) % mod + (left_true * right_true) % mod) % mod;
                    }
                }
                    
                    
                dp[si][ei][1] = total_true;
                dp[si][ei][0] = toal_false;
            }
        }
        
        return dp[0][N-1][1];
    }
};
```