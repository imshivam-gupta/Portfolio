

```cpp
class Solution{
	public:
	
	void dfs(vector<int> adj[],int src,stack<int> &st,int vis[]){
	    vis[src]=1;
	    for(int x:adj[src]){
	        if(!vis[x]) dfs(adj,x,st,vis);
	    }
	    
	    st.push(src);
	}
	
	vector<int> topoSort(int V, vector<int> adj[]){
	    int vis[V] = {0};
	    stack<int> st;
	    
	   for (int i = 0; i < V; i++) {
			if (!vis[i]) {
				dfs(adj, i, st, vis);
			}
		}

		vector<int> ans;
		while (!st.empty()) {
			ans.push_back(st.top());
			st.pop();
		}
		return ans;
	}
};
```

```cpp
class Solution{
	public:

	vector<int> topoSort(int V, vector<int> adj[]){
	    
	    int indegree[V] = {0};
		for (int i = 0; i < V; i++) {
			for (auto it : adj[i]) {
				indegree[it]++;
			}
		}
		
		
	   queue<int> q;
		for (int i = 0; i < V; i++) {
			if (indegree[i] == 0) {
				q.push(i);
			}
		}
		vector<int> topo;
		while (!q.empty()) {
			int node = q.front();
			q.pop();
			topo.push_back(node);

			for (auto it : adj[node]) {
				indegree[it]--;
				if (indegree[it] == 0) q.push(it);
			}
		}

		return topo;
	}
};
```

```cpp
vector<int> dijkstra(int V, vector<vector<int>> adj[], int S){

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> distTo(V, INT_MAX);

    distTo[S] = 0;
    pq.push({0, S});

    while (!pq.empty()){
        int node = pq.top().second;
        int dis = pq.top().first;
        pq.pop();

        for (auto it : adj[node]){
            int v = it[0];
            int w = it[1];
            if (dis + w < distTo[v]){
                distTo[v] = dis + w;
                pq.push({dis + w, v});
            }
        }
    }

    return distTo;
}
```

```cpp
// User function Template for C++

class Solution {
  public:
    /*  Function to implement Bellman Ford
    *   edges: vector of vectors which represents the graph
    *   S: source vertex to start traversing graph with
    *   V: number of vertices
    */
    vector<int> bellman_ford(int V, vector<vector<int>>& edges, int src) {
        
    vector<int> dis(V,1e8);
    dis[src]=0;

    for(int i=0;i<V-1;i++){
        for(auto it:edges){
            int u = it[0];
            int v = it[1];
            int w = it[2];

            if(dis[u]!=1e8 && dis[u]+w<dis[v]){
                dis[v]=dis[u]+w;
            }
        }
    }

    for(auto it:edges){
        int u = it[0];
        int v = it[1];
        int w = it[2];

        if(dis[u]!=1e8 && dis[u]+w<dis[v]){
            return {-1};
        }
    }

    return dis;
    }
};
```

```cpp
void shortest_distance(vector<vector<int>>&matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matrix[i][j] == -1) {
                matrix[i][j] = 1e9;
            }
            if (i == j) matrix[i][j] = 0;
        }
    }

    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = min(matrix[i][j],
                                    matrix[i][k] + matrix[k][j]);
            }
        }
    }




    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matrix[i][j] == 1e9) {
                matrix[i][j] = -1;
            }
        }
    }
}
```


```cpp
int spanningTree(int V, vector<vector<int>> adj[]){

    priority_queue<pair<int, int>,vector<pair<int, int> >, greater<pair<int, int>>> pq;
    vector<int> vis(V, 0);
    pq.push({0, 0});
    int sum = 0;

    while (!pq.empty()) {
        auto it = pq.top();
        pq.pop();
        int node = it.second;
        int wt = it.first;

        if (vis[node] == 1) continue;
        // add it to the mst
        vis[node] = 1;
        sum += wt;
        for (auto it : adj[node]) {
            int adjNode = it[0];
            int edW = it[1];
            if (!vis[adjNode]) {
                pq.push({edW, adjNode});
            }
        }
    }

    return sum;
}
```


```cpp
class DSU{
    public:
    vector<int> parent,size,rank;

    DSU(int n){
        parent.resize(n+1,0);
        size.resize(n+1,1);
        rank.resize(n+1,0);
        for(int i=0;i<=n;i++) parent[i]=i;
    }

    int findUpar(int node){
        if(node==parent[node]) return node;
        else return parent[node]=findUpar(parent[node]);
    }

    void unionbysize(int node1,int node2){
        int node1par = findUpar(node1),node2par=findUpar(node2);
        if(node1par==node2par) return;
        if(size[node1par]<size[node2par]){
            parent[node1par]=node2par;
            size[node2par]+=size[node1par];
        }
        else{
            parent[node2par]=node1par;
            size[node1par]+=size[node2par];
        }
    }

    void union_by_rank(int u,int v){
        int ulp_u = find_ult_par(u);
        int ulp_v = find_ult_par(v);

        if(ulp_u==ulp_v) return;

        if(rank[ulp_u]<rank[ulp_v]){
            parent[ulp_u]=ulp_v;
        } else if(rank[ulp_u]>rank[ulp_v]){
            parent[ulp_v] = ulp_u;
        } else{
            parent[ulp_v]=ulp_u;
            rank[ulp_u]++;
        }
    }
};