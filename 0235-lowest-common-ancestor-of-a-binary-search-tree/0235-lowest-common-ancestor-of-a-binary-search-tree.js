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

const findLCA = (val, root, parents, answer, count) => {

    if (parents.includes(root.val)) {
        answer.push(root)
        count -= 1
        if (count === 0) return
    }
    if (val === root.val) return
    else if (val < root.val) root = root.left
    else if (val > root.val) root = root.right

    findLCA(val, root, parents, answer, count)

}

var lowestCommonAncestor = function (root, p, q) {
    let parents = []
    searchParents(p.val, root, parents)

    let answer = []
    findLCA(q.val, root, parents, answer, parents.length)

    return answer.at(-1)
};
  //공통부모는 무조건 존재함