---
title: "Binary Search Space Based"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Minimum Days to Make m Bouquets- [Link](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)

```cpp
class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        
        int ei=-1;
        for(int x:bloomDay) ei=max(x,ei);
        
        int si=1;
        int ans=-1;
        
        while(si<=ei){
            int mid = si+(ei-si)/2;
            
            int temp=0;
            int count=0;

            for(int i=0;i<bloomDay.size();i++){
                if(bloomDay[i] <= mid){
                    count++;
                    if(count==k){
                        temp++;
                        count = 0;
                    }
                } else {
                    count =0;
                }
            }

            if(temp>=m){
                ans=mid;
                ei=mid-1;
            }

            else{
                si=mid+1;
            }
        }

        return ans; 
    }
};
```


## Find the smallest Divisor- [Link](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)

```cpp
class Solution {
public:

     int findDivisionSum(vector<int>& nums, int& divisor) {
        int result = 0;
        for (int& num : nums) {
            result += ceil((1.0 * num) / divisor);
        }
        return result;
    }
    
    int smallestDivisor(vector<int>& nums, int threshold) {

        int ans = -1;
        int low = 1, high = *max_element(nums.begin(), nums.end());
        
        while (low <= high) {
            int mid = (low + high) / 2;
            int result = findDivisionSum(nums, mid);
   
            if (result <= threshold) {
                ans = mid;
                high = mid - 1;
            }

            else {
                low = mid + 1;
            }
        }
        
        return ans;
    }
};
```


## Capacity to Ship Packages Within D Days- [Link](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

```cpp
class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        
        int sum=0;
        for(int wt:weights) sum+=wt;

        int si = sum/days;
        int ei = sum;
        int ans=-1;

        while(si<=ei){
            int mid = si+ (ei-si)/2;

            int curr_hold=0;
            int days_taken=0;
            for(int i=0;i<weights.size();i++){
                if(weights[i]>mid){
                    days_taken =1e9;
                    break;
                }
                if(curr_hold+weights[i]>mid){
                    days_taken++;
                    curr_hold=0;
                } 
                curr_hold+=weights[i];
            }
            if(curr_hold>0) days_taken++;

            cout << mid << " " << days_taken << endl;

            if(days_taken<=days){
                ans=mid;
                ei=mid-1;
            } else {
                si=mid+1;
            }
        }

        return ans;
    }
};
```

