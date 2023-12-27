---
title: "Insertion Sort"
subtitle: "What will this cover"
date: "2020-12-27"
---



## Iterative Approach

### Algorithm

- Iterate from arr[1] to arr[n] over the array.
- Compare the current element (key) to its predecessor.
- If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.


### Implementation

```cpp
#include<iostream>
#include<vector>
using namespace std;


void insertionSort(vector<int> &arr){
    for(int i=1;i<arr.size();i++){
        int key = arr[i];
        int j = i-1;

        while (j>=0 && arr[j]>key) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}


int main(){
    int n; cin >> n;
    vector<int> arr;
    while(n--){ 
        int t; cin >> t;
        arr.push_back(t);
    }

    insertionSort(arr);
    for(int i=0;i<arr.size();i++) cout << arr[i] << "\n";
}
```

## Recursive Approach

### Algorithm

- Base Case: If index==n return.
- Take the element at index i from the unsorted array.
- Place the element in its corresponding position in the sorted part(using swapping).
- After that, Shift the remaining elements accordingly.
- Call the function recursively for index+1.


### Implementation

```cpp
#include<iostream>
#include<vector>
using namespace std;

void insertion_sort(int arr[], int i, int n) {

    if (i == n) return;

    int j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        int temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
    }

    insertion_sort(arr, i + 1, n);
}

int main() {
    int arr[] = {5, 4, 3, 2, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertion_sort(arr, 0, n);
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    return 0;
}
```




## Properties

- **Average Time Complexity**: O(n<sup>2</sup>)
- **Worst Time Complexity**: O(n<sup>2</sup>)
- **Best Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Stable**: Yes




