

```cpp
class Solution {
public:

    bool dfs(int curr,vector<int> &vis,vector<vector<int>> &adj,int destination){
        
        vis[curr]=true;
        
        if(curr==destination){
            return true;
        }

        bool ans = false;
        for(int node:adj[curr]){
            if(!vis[node]){
                ans|=dfs(node,vis,adj,destination);
                if(ans==true) return true;
            }
        }
        return ans;
    }

    // Will work if nodes are till 32
    bool dfs_opt(int curr,int &vis,vector<vector<int>> &adj,int destination){
        
        vis |= (1<<curr);
        // vis[curr]=true;
        
        if(curr==destination){
            return true;
        }

        bool ans = false;
        for(int node:adj[curr]){
            if((vis & (1 << node)) == 0){
                ans|=dfs_opt(node,vis,adj,destination);
                if(ans==true) return true;
            }
        }
        return ans;
    }

    bool bfs(int source, int destination, vector<vector<int>>& edges,int n){
        queue<int> q;
        vector<bool> visited(n,false);
        int curr;

        q.push(source);
        visited[source] = true;

        while(q.size()){
            curr = q.front();
            q.pop();

            if(curr==destination) return true;

            for(auto& node:edges[curr]){
                if(node==destination) return true;
                else if(!visited[node]){
                    q.push(node);
                    visited[node]=true;
                }
            }
        }

        return false;
    }

    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        vector<vector<int>> adj(n);

        for(vector i:edges){
            adj[i[0]].push_back(i[1]);
            adj[i[1]].push_back(i[0]);
        }

        // vector<int> vis(n,0);
        int vis = 0;

        return bfs(source,destination,adj,n);
    }
};
```



Town Judge ->

```cpp
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& edges) {

        vector<bool> who_trust(n+1,false);
        for(vector i:edges) who_trust[i[0]]=true;
        
        int can_be_judge;

        for(int i=1;i<=n;i++){
            if(who_trust[i]==false) can_be_judge=i;
        }
        
        int count=0;
        for(vector i:edges) if(i[1]==can_be_judge) count++;

        if(count==n-1) return can_be_judge;
        else return -1;

    }
};


class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
       vector<int> trusting(n+1,0);
       vector<int> trusted(n+1,0);

       for(int i=0; i<trust.size();i++){
          trusting[trust[i][0]]++;
          trusted[trust[i][1]]++;
       } 
       int ans = -1;
       for(int i=1; i<=n; i++){
           if(trusting[i] == 0 && trusted[i] == n-1){
               ans = i;
           }
       }
       return ans;
    }
};
```


All paths  ->

```cpp
class Solution {
public:

    void dfs(int curr,vector<int> &vis,vector<vector<int>> &adj,int destination,vector<vector<int>> &ans,vector<int> &curr_list){
        
        vis[curr]=true;
        curr_list.push_back(curr);
        
        if(curr==destination){
            ans.push_back(curr_list);
        }

        for(int node:adj[curr]){
            if(!vis[node]){
                dfs(node,vis,adj,destination,ans,curr_list);
            }
        }

        curr_list.pop_back();  
        vis[curr] = false; 
    }

    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        vector<vector<int>> ans;
        vector<int> t;
        vector<int> vis(graph.size(),false);
        dfs(0,vis,graph,graph.size()-1,ans,t);
        return ans;
    }
};
```

Minimum Set of Vertices to Reach All Nodes ->

```cpp
class Solution {
public:
    vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges) {

        vector<int> indegree(n,0);
        for(int i = 0; i<edges.size(); i++)
            indegree[edges[i][1]]++;
    
        vector<int> ans;
        for(int i = 0; i < n; i++)
            if(indegree[i] == 0)
                ans.push_back(i);
                
        return ans;
    }
};
```


KLey and Room

```cpp
class Solution {
public:

    bool dfs(int curr,vector<int> &vis,vector<vector<int>> &adj,vector<int> &key,int &visited){
        
        vis[curr]=true;
        visited++;
        if(visited==adj.size()) return true;

        bool ans = false;
        for(int node:adj[curr]){
            key[node] = true;
            if(!vis[node] and key[node]){
                bool curr=dfs(node,vis,adj,key,visited);
                if(curr==true) return true;
                ans|=curr;
            }
        }
        return ans;
    }

    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<int> vis(n,false);
        vector<int> key(n,false);
        key[0]=true;
        int visited=0;
        return dfs(0,vis,rooms,key,visited);
    }
};
```

```cpp
class Solution {
public:

     void dfs (int start,vector<int> adj[],vector<int> &vis){
        vis[start]=1;
        
        for(auto it:adj[start]){
            if(!vis[it]){
                dfs(it,adj,vis);
            }
        }
    }

    int findCircleNum(vector<vector<int>>& isConnected) {
        
        int V= isConnected.size();
        vector<int> adj[V];

        for(int i=0;i<V;i++){
            for(int j=0;j<V;j++){
                if(isConnected[i][j]==1)
                {    
                    adj[i].push_back(j);
                    adj[j].push_back(i);
                }
            }
        }
        
        vector<int> visited(V,0);
        int ans=0;

        for(int i=0;i<V;i++){
            if(!visited[i]){
                dfs(i,adj,visited);
                ans++;
            }
        }

        return ans;
    }
};
```


Minimum Fuel Cost to Report to the Capital -> 

