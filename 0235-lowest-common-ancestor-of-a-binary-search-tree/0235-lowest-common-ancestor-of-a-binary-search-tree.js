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
const searchParents = (val, root, parents) => {
    parents.push(root.val)
    if (val === root.val) return
    else if (val < root.val) root = root.left
    else if (val > root.val) root = root.right

    searchParents(val, root, parents)
}

const findLCA = (val, root, parents, answer) => {

    if (parents.includes(root.val)) {
        answer.node = root
    }
    if (val === root.val) return
    else if (val < root.val) root = root.left
    else if (val > root.val) root = root.right

    findLCA(val, root, parents, answer)

}

var lowestCommonAncestor = function (root, p, q) {
    let parents = []
    searchParents(p.val, root, parents)

    let answer = { node: null }
    findLCA(q.val, root, parents, answer)

    return answer.node
};
  //공통부모는 무조건 존재함