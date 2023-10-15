---
title: "Running Median"
subtitle: "What will this cover"
date: "2020-12-27"
---

## Simulation
- Simulate the process of adding elements to the array and then finding the median.
- Time Complexity: O(n<sup>2</sup>logn)
- Space Complexity: O(n)

```cpp
#include <algorithm>

vector<int> findMedian(vector<int> &arr, int n){
	vector<int> curr,ans;

	for(int i=0;i<n;i++){
		curr.push_back(arr[i]);
		sort(curr.begin(),curr.end());
		int median = ((i+1)%2==0) ? (curr[i/2]+curr[(i+1)/2])/2 : curr[i/2];
		ans.push_back(median);
	}

	return ans;
}
```

## Using Insertion Sort

- Insertion sort is used to maintain the sorted order of the array.
- Time Complexity: O(n<sup>2</sup>)
- Space Complexity: O(n)

```cpp
vector<int> findMedian(vector<int> &arr, int n){
	vector<int> curr,ans;

	for(int i=0;i<n;i++){
		curr.push_back(arr[i]);
		
		int key = curr[curr.size()-1];
		int j = i-1;

		while(j>=0 and curr[j]>key){
			curr[j+1]=curr[j];
			j--;
		}

		curr[j+1]=key;

		int median = ((i+1)%2==0) ? (curr[i/2]+curr[(i+1)/2])/2 : curr[i/2];
		ans.push_back(median);
	}

	return ans;
}
```

## Using Heap

- The idea is to maintain two heaps, one max heap and one min heap. The max heap stores the elements less than the median and the min heap stores the elements greater than the median because the median is the middle element of the sorted array.
- We maintain the size of the max heap equal to the size of the min heap or one greater than the size of the min heap because when the size of the array is odd, the median is the top of the max heap and when the size of the array is even, the median is the average of the top of the max heap and the top of the min heap.
- Time Complexity: O(nlogn)
- Space Complexity: O(n)

```cpp
vector<int> findMedian(vector<int> &arr, int n){
	vector<int> ans;

	priority_queue<int> left;
	priority_queue<int, vector<int>, greater<int>> right;

	for(int i=0;i<n;i++){
		
		int new_elem = arr[i];

		if(left.size()==0 or left.top()>=new_elem) left.push(new_elem);
		else right.push(new_elem);

		if(left.size()>right.size()+1){
			right.push(left.top());
			left.pop();
		}  else if(right.size()>left.size()){
			left.push(right.top());
			right.pop();
		}

		if(left.size()==right.size())  ans.push_back((left.top()+right.top())/2);
		else ans.push_back(left.top());
	}

	return ans;
}
```