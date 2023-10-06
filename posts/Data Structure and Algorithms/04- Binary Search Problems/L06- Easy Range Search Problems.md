---
title: "Easy Range Search Problems"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Square Root of an Integer- [Link](https://www.codingninjas.com/studio/problems/square-root-integral_893351)

```cpp
int floorSqrt(int n){
    long long int si =0, ei = n;
    long long int ans = 0;
    while(si<=ei){
        long long int mid = ((si+ei)>>1);
        long long int curr = mid*mid;
        if(curr==n) return mid;
        else if(curr<n){
            si=mid+1;
            ans = max(ans,mid);
        } else{
            ei=mid-1;
        }
    }

    return (int)ans;
}
```


## Nth Root of an Integer- [Link](https://www.codingninjas.com/studio/problems/nth-root-of-m_1062679)

```cpp
int func(int mid, int n, int m) {
    long long ans = 1;
    for (int i = 1; i <= n; i++) {
        ans = ans * mid;
        if (ans > m) return 2;
    }
    if (ans == m) return 1;
    return 0;
}


int NthRoot(int m, int n) {
  long long int si =0, ei = n;
    long long int ans = 0;
    while(si<=ei){
        long long int mid = ((si+ei)>>1);
        
        int f = func(mid,m,n);

        if(f==1) return mid;
        else if(f==0) si=mid+1;
        else ei=mid-1;
    }

    return -1;
}
```

## Koko Eating Bananas- [Link](https://leetcode.com/problems/koko-eating-bananas/)

```cpp
class Solution {
public:

    int fun(int mid,vector<int> &piles,int h){
        int temp = 0;

        for(int x:piles){
            temp+=(x/mid);
            if(x%mid!=0) temp++;
        }

        if(temp>h) return 1;
        else return 2;
    }

    int minEatingSpeed(vector<int>& piles, int h) {
        long long sum=0; int max_pile=INT_MIN;
        for(int pile:piles) {sum+=pile; max_pile=max(max_pile,pile);}
        int si = sum/h;

        if(si==0) return 1;
        int ei = max_pile;
        int ans = -1;

        while(si<=ei){
            int mid=si+ (ei-si)/2;
            int f = fun(mid,piles,h);
            
            if(f==1) si=mid+1;
            else{
                ans=mid;
                ei=mid-1;
            }
        }

        return ans;
    }
};
```
