/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (node === null) return null
    let stack = [node]
    let newNodes = {}
    let set = new Set()
    while (stack.length > 0) {

        let node = stack.pop()

        if (set.has(node.val)) continue
        set.add(node.val)
        if (!newNodes[node.val]) {
            const newNode = new Node(node.val)
            newNodes[node.val] = newNode
        }

        for (let i = node.neighbors.length - 1; i >= 0; i--) {
            if (!newNodes[node.neighbors[i].val]) {
                const newNode = new Node(node.neighbors[i].val)
                newNodes[node.neighbors[i].val] = newNode
            }
            newNodes[node.val].neighbors.push(newNodes[node.neighbors[i].val])
            if (!set.has(node.neighbors[i].val)) {
                stack.push(node.neighbors[i])
            }
        }
    }
    
    return newNodes[1]
};