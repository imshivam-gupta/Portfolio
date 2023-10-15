
## Jump Game 1

```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        int max_end =n-1;

        for(int i=max_end-1;i>=0;i--){
            if(i+nums[i]>=max_end){
                max_end=i;
            }
        }
        return max_end==0;
    }
};
```

DP

```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n, -1);
        dp[n-1] = 1; 
        
        for(int idx = n-2; idx >= 0; idx--) {
            if(nums[idx] == 0) {
                dp[idx] = false;
                continue;   
            }
            
            int flag = 0;
            int reach = idx + nums[idx];
            for(int jump=idx + 1; jump <= reach; jump++) {
                if(jump < nums.size() && dp[jump]) {
                    dp[idx] = true;
                    flag = 1;  
                    break;
                }
            }
            if(flag == 1) 
                continue;
           
            dp[idx] = false;
			
        }
        return dp[0]; 
    }
};
```

## Jump Game 2

```cpp
#include<bits/stdc++.h>
using namespace std;

struct Pair{
    int idx;
    string psf;
    int jmps;
};

class Solution {
public:

    void possiblePaths(vector<int> &nums,vector<int> &dp){
        queue<Pair> q;
        Pair p = {0,to_string(0),dp[0]};
        q.push(p);

        while(q.size()){
            Pair tmp = q.front();
            q.pop();

            if(tmp.jmps==0){
                cout << tmp.psf << "\n";
                continue;
            }

            for(int steps =1;steps<=nums[tmp.idx];steps++){
                if(tmp.idx+steps<nums.size() and tmp.jmps-1==dp[tmp.idx+steps]){
                    Pair p2 = {tmp.idx+steps,tmp.psf+"->"+to_string(tmp.idx+steps),tmp.jmps-1};
                    q.push(p2);
                }
            }
        }
    }

    int jump(vector<int>& nums) {
        int n = nums.size();

        vector<int> dp(n,1e9);
        dp[n-1]=0;

        for(int i=n-2;i>=0;i--){
            int max_jump = nums[i];
            for(int j =1;j<=max_jump;j++){
                if(i+j<n){
                    dp[i] = min(dp[i],1+dp[i+j]);
                }
            }
        }
        
        possiblePaths(nums,dp);
        return dp[0];

    }
};
```


```cpp
class Solution {
public:
    int jump(vector<int>& nums) {

        int ans=0, left=0, right=0;

        while(right<nums.size()-1){
            int farthest =0;
            for(int i=left;i<=right;i++) 
                farthest = max(farthest,i+nums[i]);
            left=right+1;
            right=farthest;
            ans++;
        }

        return ans;
    }
};
```


largest number

```cpp
class Solution {
public:

    bool static comp(int a,int b){
        // return to_string(a)>to_string(b); This is wrong because of 3 and 30
        return to_string(a)+to_string(b)>to_string(b)+to_string(a);
    }

    string largestNumber(vector<int>& nums) {
        sort(nums.begin(),nums.end(),comp);
        string ans = "";
        for(auto x:nums) ans+=to_string(x);
        if(ans[0]=='0') return "0";
        return ans; 
    }
};
```



candies
```cpp
class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();

        vector<int> lmax(n,1);
        vector<int> rmax(n,1);
        
        for(int i=1;i<n;i++) if(ratings[i-1]<ratings[i]) lmax[i]=lmax[i-1]+1;
        for(int i=n-2;i>=0;i--) if(ratings[i]>ratings[i+1]) rmax[i]=rmax[i+1]+1;

        vector<int> ans(n,1);
        for(int i=0;i<n;i++){ 
            cout << lmax[i] << " " <<rmax[i] << endl;
            ans[i]=max(lmax[i],rmax[i]);
        }
        
        return accumulate(ans.begin(),ans.end(),0);
    }
};
// 1265431 example
```



stcok 2
```cpp
class Solution {
public:

    int f(int ind,bool buy,vector<int>& arr,vector<vector<int>> &dp){

        if(ind==arr.size()) return 0;

        if(dp[ind][buy]!=-1) return dp[ind][buy];
        
        if(buy==1){
            return dp[ind][buy] = max(f(ind+1,buy,arr,dp),-arr[ind]+f(ind+1,!buy,arr,dp));
        }

        else{
            return dp[ind][buy] = max(f(ind+1,buy,arr,dp),arr[ind]+f(ind+1,!buy,arr,dp));
        }
    }

    int maxProfit(vector<int>& prices) {
        vector<vector<int>> dp(prices.size(),vector<int>(2,-1));
        return f(0,1,prices,dp);
    }
};
```

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int ans=0;
        for(int i=1;i<prices.size();i++){
            if(prices[i]-prices[i-1]>0)
                ans+=prices[i]-prices[i-1];
        } 
        return ans;
    }
};
```




```cpp

int Solution::solve(vector<vector<int> > &A) {
    
    
   priority_queue<int, vector<int>, greater<int>> pq;
    sort(A.begin(), A.end());
    int ans = 1;
    pq.push(A[0][1]);

    for (int i = 1; i < A.size(); i++) {
        vector<int> temp = A[i];
        if (temp[0] < pq.top()) {
            ans++;
        } 
        else pq.pop();
        pq.push(temp[1]);
    }

    return ans;
}

/* [
  [0, 14]
  [6, 25]
  [12, 19]
  [13, 19]
  [5, 9]
]
*/
```


```cpp
int solve1(vector<vector<int> > &A){
    int n=A.size();
    assert(1 <= n && n<= 100000);
     int start[n];
     int end[n];
     for (int i=0; i<n; i++) {
       start[i]=A[i][0];
       end[i]=A[i][1];
     }
     sort(start,start+n);
     sort(end,end+n);
     int i=0, j=0, res=0;
     while (i<n) {
       if (start[i]<end[j])
        i++;
       else if (start[i]>end[j])
        j++;
       else {
         i++;
         j++;
       }
       res=max(res,i-j);
     }
     return res;
}
```


```cpp
vector<int> wiggleSort(int n, vector<int> arr) {

    for (int i = 0; i < n - 1; i++) {

        if (i%2==0 && arr[i]>arr[i + 1]) {
            swap(arr[i], arr[i+1]);
        }

        if (i%2!=0 && arr[i]<arr[i + 1]) {
            swap(arr[i], arr[i+1]);
        }
    }

    return arr;
}
```


```cpp
vector<int> wiggleSort(int n, vector<int> arr) {
    
    sort(arr.begin(), arr.end());

    int low = 0, high = n - 1;


    vector<int> ans;


    while (low < high) {
        ans.push_back(arr[low]);
        ans.push_back(arr[high]);
        low++;
        high--;
    }


    if (low == high) {
        ans.push_back(arr[low]);
    }

    
    return ans;
}
```