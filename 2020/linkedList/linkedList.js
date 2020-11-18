
// 实现LinkedList类的相应方法
/*
Fn name: push(element) // 向链表尾部添加一个新元素
Fn name: insert(element, postion) // 向链表特定位置添加一个新元素
Fn name: getElementAt(index) // 获取特定位置的元素，如果不存在，则返回undefined
Fn name: remove(element) // 从链表中删除一个元素
Fn name: indexOf(element) // 返回元素在链表中的索引，如果链表中没有则返回-1
Fn name: indexOf(element) // 返回元素在链表中的索引，如果链表中没有则返回-1
Fn name: removeAt(position) // 删除指定位置的元素
Fn name: isEmpty() // 如果链表中没有元素返回true，否则返回false
Fn name: size() // 返回链表的长度
Fn name: toString() // 返回表示整个链表的字符串，重写toString

*/
class Node{
    constructor(element){
        this.element = element
        this.next = undefined
    }
}
// export 
const defaultEquals = function (a, b) {
    return a === b
}

// export default 
class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    getHead(){
        return this.head
    }
    push (element) {
        let node = new Node(element)
        // 如果不存在head，则直接把element设置为head
        if(!this.head){
            this.head = node
        } else{
            let cur = this.head
            while(cur.next){
                cur = cur.next
            }
            cur.next = node
        }
        this.count++
        return this.head

    }
    // 链表 index 从0开始
    insert(element, postion){
        if(postion >= 0 && postion < this.count){
            let index = 1
            let cur = new Node(this.head)
            let ele = new Node(element)
            while(cur !== undefined && index < postion){
                index++
                cur = cur.next
            }
            cur.next = ele
            ele.next = cur.next.next
        } else if(postion = this.count){
            this.push(element)
        }
        return this.head
    }
    getElementAt(pos){
        let index = 1
        let cur = new Node(this.head)
        if(pos < 0 && pos > this.count){
            return undefined
        }
        while(cur !== null && index < pos){
            index++
            cur = cur.next
        }
        return cur
    }
    remove(el){
        let ahead = new Node(0)
        ahead.next = this.head
        let cur = ahead
        while(cur){
            if(cur.next === el){
                cur.next = cur.next.next
            }
            cur = cur.next
        }
    }
    isEmpty(){
        return this.count === 0
    }
}

