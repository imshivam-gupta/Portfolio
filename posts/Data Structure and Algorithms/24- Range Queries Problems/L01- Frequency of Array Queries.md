```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

struct TreeNode {
    int start;
    int end;
    unordered_map<int, int> mp;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int start, int end) : start(start), end(end), left(nullptr), right(nullptr) {}
};

void buildSegmentTree(TreeNode* root, const vector<int>& input) {
    if (root->start == root->end) {
        root->mp[input[root->start]] = 1;
    } else {
        int mid = root->start + (root->end - root->start) / 2;
        root->left = new TreeNode(root->start, mid);
        root->right = new TreeNode(mid + 1, root->end);

        buildSegmentTree(root->left, input);
        buildSegmentTree(root->right, input);

        for (const auto& pair : root->left->mp) {
            root->mp[pair.first] += pair.second;
        }

        for (const auto& pair : root->right->mp) {
            root->mp[pair.first] += pair.second;
        }
    }
}

unordered_map<int, int> querySegmentTree(TreeNode* root, int l, int r) {
    if (root->start == l && root->end == r) {
        return root->mp;
    }

    int mid = root->start + (root->end - root->start) / 2;

    if (r <= mid) {
        return querySegmentTree(root->left, l, r);
    } else if (l > mid) {
        return querySegmentTree(root->right, l, r);
    } else {
        unordered_map<int, int> leftResult = querySegmentTree(root->left, l, mid);
        unordered_map<int, int> rightResult = querySegmentTree(root->right, mid + 1, r);

        for (const auto& pair : rightResult) {
            leftResult[pair.first] += pair.second;
        }

        return leftResult;
    }
}

int countPairs(const vector<int>& input, TreeNode* root, int l, int r) {
    unordered_map<int, int> mp = querySegmentTree(root, l, r);

    int pairsCount = 0;
    for (const auto& pair : mp) {
        int count = pair.second;
        pairsCount += count/2; // Calculate pairs using combination formula
    }

    return pairsCount;
}

int main() {
    int n = 4;
    vector<int> tags = {2, 2,2, 2};
    int q = 2;
    vector<pair<int, int>> queries = {{1,4},{1,3}};

    TreeNode* root = new TreeNode(0, n - 1);
    buildSegmentTree(root, tags);

    for (const auto& query : queries) {
        int l = query.first - 1;
        int r = query.second - 1;
        int pairs = countPairs(tags, root, l, r);
        cout << "Pairs in range [" << l + 1 << ", " << r + 1 << "]: " << pairs << endl;
    }

    return 0;
}
```