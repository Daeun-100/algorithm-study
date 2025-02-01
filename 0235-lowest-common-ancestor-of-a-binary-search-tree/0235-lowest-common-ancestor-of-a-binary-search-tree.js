/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            // p, q가 모두 현재 노드의 왼쪽에 있음 -> 왼쪽으로 이동
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            // p, q가 모두 현재 노드의 오른쪽에 있음 -> 오른쪽으로 이동
            root = root.right;
        } else {
            // p, q가 다른 방향에 있거나 하나가 root와 같은 경우 -> 현재 root가 LCA
            return root;
        }
    }
    return null;
};
  //공통부모는 무조건 존재함
  //첫번째 방법은 두번의 재귀 호출 사용 -> 한번의 탐색만으로도 가능
