---
title: "DFS and BFS in Graphs"
subtitle: "Random Subtitle"
date: "2023-01-01"
---


## Depth First Search (DFS)

#### Algorithm

1. Pick any node. If it is unvisited, mark it as visited and recur on all its adjacent nodes.
2. Repeat until all the nodes are visited, or the node to be searched is found.

#### Implementation

```cpp
class Solution {
    public:
    
    void dfs (int start,vector<int> adj[],int vis[],vector<int> &ans){
        vis[start]=true;
        ans.push_back(start);
        
        for(auto it:adj[start]){
            if(!vis[it]){
                dfs(it,adj,vis,ans);
            }
        }
    }

    vector<int> dfsOfGraph(int V, vector<int> adj[]) {
        int vis[V] = {0}; 
        int start = 0;
        vector<int> ans; 
        dfs(start, adj, vis, ans); 
        return ans; 
    }
};
```



## Breadth First Search (BFS) 

#### Algorithm

1. Pick any node. If it is unvisited, mark it as visited and enqueue it.
2. Repeat until all the nodes are visited, or the node to be searched is found.


#### Implementation

```cpp
class Solution {
    public:
  
    vector<int> bfsOfGraph(int V, vector<int> adj[]) {
        
        int visited[V]={0};
        visited[0]=1;
        
        queue<int>q;
        q.push(0);
        
        vector<int> ans;
        
        while(!q.empty()){
            int node = q.front();
            q.pop();
            ans.push_back(node);
            
            for(auto it:adj[node]){
                if(!visited[it]){
                    q.push(it);
                    visited[it]=true;
                }
            }
        }
        
        return ans;      
    }
}; 
```

