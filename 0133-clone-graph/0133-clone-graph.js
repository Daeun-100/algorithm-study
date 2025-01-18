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
    let visited = new Map()
    visited.set(node, new Node(node.val));

    while (stack.length > 0) {
        let node = stack.pop()

        for (const neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val));
                stack.push(neighbor); // 스택에 추가
            }
            visited.get(node).neighbors.push(visited.get(neighbor))

        }
    }

    return visited.get(node)
};