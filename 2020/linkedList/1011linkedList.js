// wikipeaia 地址：https://en.wikipedia.org/wiki/Linked_list

// 定义：链表是数据元素的线性集合，其顺序不是由其在内存中的物理地址给出的。相反，每一个都指向下一个。
// 它是一种数据结构，有节点的集合组成，这些节点一起代表一个序列。以其最基本的形式，每个节点都包含：data和
// 一个引用（或者说是一个链接）到序列的下一个节点。

// **优势**
// 快速插入和删除、

// **劣势**
// 线性访问、不可以随机访问（随机索引：例如获取随后一个节点，查找给定数据节点，）、
// 指针占用存储，比数组占用更多内存
// 顺序访问，必须从头开始读取节点
// 节点不连续的存储，增加了访问列表中各个元素的时间，尤其是使用cpu缓存时
// 反向遍历困难，双链表更容易反向遍历（但是更占用内存）

// **基本概念和术语**
// 链表的每个记录通常被称为：元素、或节点
// 包含下一个节点地址的每个节点的字段通常称为“下一个链接”，或“下一个指针”。
// 列表的“头”，是指它的第一个节点。
// 列表的尾部，可以指“头”之后的其余部分，也可以指列表的最后一个节点。

// 演示：将具有数据值的新节点添加到单链表的末尾
// 节点 addNode（节点头，整数值 ）{
//  节点 温度，p；//声明两个节点temp和p
//  temp = createNode（）；//假定createNode创建了一个data=0并指向null的新节点
//  temp-> data = value
// 如果（head === null）{ 
    // head = temp
// }
// else{
//  p = 头；//将head分配给p
// while（p->next ！== null）{
//  p = p->next //遍历列表，直到p是最后一个节点。最后一个节点始终指向null。
// }
// p->next = temp
// } 
// return 头
// }

// 前哨节点
// 在某些实现中，可以在第一个数据记录之前，或是最后一个数据记录之后添加一个额外的
// “前哨”节点或“虚拟”节点。通过确保可以安全地取消引用所有链接并且每个列表
// （甚至不包含任何数据元素的列表）始终有“第一个”和“最后一个”节点，此约定简化并
// 加速了一些列表处理算法

//*********  相关定义 ************
// 指针：许多计算机语言中的对象，用于存储内存地址
// 数据结构：是一种数据组织、管理和存储格式。

// leetcode 链接，题目： 删除链表的倒数第N个节点
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dumy = new ListNode(0, head)
    dumy.next = head
    let length = 0
    while(head.next !== null){
        length++
        head = head.next
    }
    length -= n
    head = dumy.next
    while(length > 0){
        length--
        head = head.next
    }
    head.next = head.next.next
    return dumy.next
};