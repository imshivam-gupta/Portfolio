## Approach 1

```cpp
#include <bits/stdc++.h> 
int kthSmallest(vector<int> &arr, int k){
	vector<int> ans;

	for(int i=0;i<arr.size();i++){
		for(int j=i+1;j<arr.size();j++){
			ans.push_back(arr[i]*arr[j]);
		}
	}

	sort(ans.begin(),ans.end());

	if(k-1>=ans.size()) return -1;
	return ans[k-1];
}
```

## Approach 2

```cpp
#include <algorithm>
#include <queue>

int kthSmallest(vector<int> &arr, int k){

	vector<int> product;
	int n = arr.size();

	if ( k > (n * (n - 1)) / 2)	return -1;
	
	int i=0, j=1;

	priority_queue<int> pq;

	int val;

	while (i<n-1){
		if (j == n){
			i=i+1;
			j=i+1;
		}

		if (i >= n - 1) break;

		if (pq.size() < k) pq.push(arr[i] * arr[j]);
		
		else{
			val = pq.top();
			if (val >= arr[i]*arr[j]){
				pq.pop();
				pq.push(arr[i] * arr[j]);
			}
		}
		
		j = j + 1;
	}
	return pq.top();
}
```

## Approach 3 - Binary Search to be done

```cpp

```