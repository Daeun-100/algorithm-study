/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let nodeStore = []
    let cur = head

    while (cur) {
        nodeStore.push(cur)
        cur = cur.next
    }

    nodeStore.reverse()

    let newHead = nodeStore[0]
    let newCur = newHead

    for (let i = 1; i < nodeStore.length; i++) {
        newCur.next = nodeStore[i]
        newCur=newCur.next
        if(i===nodeStore.length-1){
            newCur.next=null
        }
    }

    if(!newHead) {
        return head
    }
    return newHead

};