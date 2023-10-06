---
title: "Medium Difficulty Binary Search Problems"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Search in Rotated Sorted Array - [Link](https://leetcode.com/problems/search-in-rotated-sorted-array/)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        // check which part is sorted
        int low =0, high=nums.size()-1;
        while(low<=high){
            int mid = ((low+high)>>1);

            if(nums[mid]==target) return mid;

            if(nums[low]<=nums[mid]){
                if(nums[low]<=target and target<=nums[mid]) high=mid-1;
                else low=mid+1;
            } else{
                if(nums[mid]<=target and target<=nums[high]) low=mid+1;
                else high=mid-1;
            }
        }

        return -1;
    }
};
```


## Search in Rotated Sorted Array 2 - [Link](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

```cpp
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        // check which part is sorted
        int low =0, high=nums.size()-1;
        while(low<=high){
            int mid = ((low+high)>>1);

            if(nums[mid]==target) return true;
            if(nums[low]==nums[high] and nums[low]==nums[mid]){low++;high--; continue;}

            if(nums[low]<=nums[mid]){
                if(nums[low]<=target and target<=nums[mid]) high=mid-1;
                else low=mid+1;
            } else{
                if(nums[mid]<=target and target<=nums[high]) low=mid+1;
                else high=mid-1;
            }
        }

        return false;
    }
};
```

## Find minimum in Rotated Sorted Array - [Link](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

```cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int low=0, high=nums.size()-1;
        int ans = INT_MAX;

        while(low<=high){
            int mid = low + ((high-low)>>1);

            if(nums[mid]>=nums[low]){
                ans=min(ans,nums[low]);
                low=mid+1;
            }

            else{
                ans=min(ans,nums[mid]);
                high=mid-1;
            }
        }
        return ans;
    }
};
```


## Times the array has been rotated- [Link](https://www.codingninjas.com/studio/problems/rotation_7449070?leftPanelTab=1)

```cpp
int findKRotation(vector<int> &nums){
    int low=0, high=nums.size()-1;
    int ans = 1e9;
    int ans_ind = 0;

    while(low<=high){
        int mid = low + ((high-low)>>1);

        if(nums[mid]>=nums[low]){
            if(ans>nums[low]){
                ans_ind = low;
                ans = nums[low];
            }
            low=mid+1;
        }

        else{
            if(ans>nums[mid]){
                ans_ind = mid;
                ans = nums[mid];
            }
            high=mid-1;
        }
    }
    return ans_ind;
}
```

## Single Element in a Sorted Array- [Link](https://leetcode.com/problems/single-element-in-a-sorted-array/description/)

```cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        if(nums.size() == 1){
            return nums[0];
        }

        if(nums[0] != nums[1]){
            return nums[0];
        }

        if(nums[nums.size() - 1] != nums[nums.size() - 2]){
            return nums[nums.size() - 1];
        }

        int low = 1,high = nums.size() - 2;
        while(low <= high){
            int mid = (low + high)/2;

            if(nums[mid] != nums[mid + 1] && nums[mid] != nums[mid-1]){
                return nums[mid];
            }

            int highest_of_mid=mid;
            
            if(nums[mid]==nums[mid+1]){
                highest_of_mid=mid+1;
            }

            int lowest_of_mid=mid;
            if(nums[mid]==nums[mid-1]){
                lowest_of_mid=mid-1;
            }

            if(highest_of_mid%2!=0){
                low=highest_of_mid+1;
            }
            else{
                high=lowest_of_mid-1;
            }
        }
        return -1;
    }
};
```


