---
title: "Implementing Hashmap in C++"
subtitle: "Hashmap Algorithms"
date: "2023-10-03"
---



## Hashmap Implementation using Separate Chaining


```cpp
struct KeyValuePair {
    int key;
    int value;
    KeyValuePair(int k, int v) : key(k), value(v) {}
};

class MyHashMap {
public:

    int tableSize;
    vector<vector<KeyValuePair>> table;

    int binarySearch(vector<KeyValuePair>& bucket, int key) {
        int left = 0;
        int right = bucket.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (bucket[mid].key == key) {
                return mid; 
            } else if (bucket[mid].key < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; 
    }
    
    MyHashMap() {
        tableSize = 10;
        table.resize(10);
    }
    
    void put(int key, int value) {
        int index = key % tableSize;
        auto& bucket = table[index];
        int position = binarySearch(bucket, key);
       if (position != -1) {
            bucket[position].value = value;
        } else {
            bucket.insert(upper_bound(bucket.begin(), bucket.end(), key,
                            [](int k, const KeyValuePair& kv) { return k < kv.key; }),
                            KeyValuePair(key, value));
        }
    }
    
    int get(int key) {
        int index = key % tableSize;
        auto bucket = table[index];
        int position = binarySearch(bucket, key);
        return (position != -1) ? bucket[position].value : -1;        
    }
    
    void remove(int key) {
        int index = key % tableSize;
        auto& bucket = table[index];
        int position = binarySearch(bucket, key);
        if (position != -1) {
            bucket.erase(bucket.begin() + position);
        }
    }
};
```