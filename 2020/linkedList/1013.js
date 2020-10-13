// leetcode:
// https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/submissions/

// 面试题 02.02. 返回倒数第 k 个节点

// 双指针

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    const dumy = new ListNode(0, head)
    dumy.next = head
    let first = dumy
    let second = dumy
    for(var i = 0;i<k;i++){
        first = first.next
    }
    while(first && first.next !== null){
        first = first.next
        second = second.next
    }
    return second.next.val
    };