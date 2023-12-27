---
title: "Traversal of Binary Trees"
subtitle: "What will this cover"
date: "2020-12-27"
---

# Coming Soon! Stay Tuned!

Subset Sum Problem Alternative in codeforces



```
#include<iostream>

using namespace std;

typedef long long ll;

const int N=300010,mod=998244353;

ll st[N],top;
ll f[N],a[N],sf[N],s[N];

int n;

void solve(){
	cin>>n;
	top=0;
	for(int i=1;i<=n;i++) cin>>a[i],a[n+1]=2e9;
	for(int i=1;i<=n+1;i++){
		while(top&&a[st[top]]>a[i]){
			top--;
		}
		if(top==0) f[i]=1;
		f[i]+=(sf[i-1]-sf[st[top]]+s[top])%mod;
		st[++top]=i,s[top]=(s[top-1]+f[i])%mod,sf[i]=(sf[i-1]+f[i])%mod;
	}
	cout<<(f[n+1]%mod+mod)%mod<<endl;
	for(int i=1;i<=n+1;i++){
		f[i]=sf[i]=s[i]=0;
	}
	
}

int main()
{
	int t;
	cin>>t;
	while(t--){
		solve();
	}
}
```


```#include <algorithm>
#include <iostream>

using namespace std;

const int  N = 300000;
const int MD = 998244353;

int aa[N], qu[N], dp[N + 1], dq[N + 1], pp[N + 1];

int main() {
	int t; cin >> t;
	while (t--) {
		int n; cin >> n;
		for (int i = 0; i < n; i++)
			cin >> aa[i];
		dp[0] = dq[0] = pp[0] = 1;
		for (int cnt = 0, i = 0; i < n; i++) {
			while (cnt && aa[qu[cnt - 1]] > aa[i])
				cnt--;
			int i_ = cnt ? qu[cnt - 1] : -1;
			dp[i + 1] = ((long long) pp[i] - pp[i_ + 1] + dq[i_ + 1]) % MD;
			dq[i + 1] = (dp[i + 1] + (i_ >= 0 ? dq[i_ + 1] : 0)) % MD;
			pp[i + 1] = (dp[i + 1] + pp[i]) % MD;
			qu[cnt++] = i;
		}
		int ans = dq[n];
		if (ans < 0)
			ans += MD;
		cout << ans << '\n';
	}
	return 0;
}
````

```
#include <stdio.h>

#define N	300000
#define MD	998244353

int main() {
	int t;

	scanf("%d", &t);
	while (t--) {
		static int aa[N], qu[N], dp[N], dq[N];
		int n, cnt, i, j, sum;

		scanf("%d", &n);
		for (i = 0; i < n; i++)
			scanf("%d", &aa[i]);
		cnt = 0, sum = 0;
		for (j = 0; j < n; j++) {
			while (cnt && aa[i = qu[cnt - 1]] > aa[j])
				cnt--, sum = (sum - dp[i] + MD) % MD;
			dp[j] = ((long long) sum + (j == 0 ? 0 : dq[j - 1]) - (cnt == 0 ? -1 : dq[qu[cnt - 1]]) + MD) % MD;
			dq[j] = ((j == 0 ? 0 : dq[j - 1]) + dp[j]) % MD;
			qu[cnt++] = j, sum = (sum + dp[j]) % MD;
		}
		printf("%d\n", sum);
	}
	return 0;
}
```


```
#include<bits/stdc++.h>
#define int long long
using namespace std;

const int N=3e5+5,p=998244353;
int n,m,top,a[N],f[N],s[N],stk[N];

inline int rd()
{
    int x=0;char c=getchar();
    for(;!isdigit(c);c=getchar());
    for(; isdigit(c);c=getchar()) x=(x<<3)+(x<<1)+(c^48);
    return x;
}

void solve()
{
    n=rd();
    for(int i=1;i<=n;i++) a[i]=rd();
    int sum=0;top=0;
    for(int i=1;i<=n;i++)
    {
        while(top&&a[stk[top]]>a[i]) sum=(sum-f[stk[top]]+p)%p,top--;
        f[i]=(sum+s[i-1]-s[stk[top]]+(top==0)+p)%p;
        s[i]=(s[i-1]+f[i])%p;
        stk[++top]=i,sum=(sum+f[i])%p;
    }
    cout<<sum<<'\n';
}

signed main()
{
    int t=rd();
    while(t--) solve();
}
```

```
#include <bits/stdc++.h>

using i64 = long long;

constexpr int N = 300010, mod = 998244353;

int n;
int p[N];

void solve() {
    std::cin >> n;
    for (int i = 0; i < n; i++) std::cin >> p[i];
    std::vector<int> s(n + 1), f(n), stk(n + 1);
    int tt = 0;
    i64 sum = 0;
    for (int i = 0; i < n; i++) {
        while (tt > 0 && p[stk[tt]] > p[i]) sum -= f[stk[tt--]];
        int j = tt == 0 ? 0 : (stk[tt] + 1);
        f[i] = (sum + s[i] - s[j] + (tt == 0)) % mod;
        s[i + 1] = (s[i] + f[i]) % mod;
        sum = (sum + f[i]) % mod;
        stk[++tt] = i;
    }
    std::cout << (sum + mod) % mod << "\n";
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    
    int t;
    std::cin >> t;
    
    while (t--) {
        solve();
    }
    
    return 0;
}
```