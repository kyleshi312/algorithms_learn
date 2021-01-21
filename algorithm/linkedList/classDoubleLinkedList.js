class DoublyLinkedListNode {
    constructor(value, next = null, previous = null) {
      this.value = value;
      this.next = next;
      this.previous = previous;
    }
  
    toString(callback) {
      return callback ? callback(this.value) : `${this.value}`;
    }
}

class DoublyLinkedList{
    constructor(){
        this.count = 0
        this.head = null
        this.tail = null
    }
     /**
         * @param {*} value
         * @return {DoublyLinkedList}
     */
    // prepend 
    prepend(value) {
        // 创建一个next为head的node
        const node = new DoublyLinkedListNode(value, this.head)
        
        if(this.head)this.head.previous = node
        this.head = node

        // 如果tail 不为空，则后面的操作与tail无关
        if(this.tail === null){
            this.tail = node
        }
        
        this.count++
        return this 
    }
    /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
    //   append
    append(value){
        const node = new DoublyLinkedListNode(value, null, this.tail)

        if(!this.head)this.head = node

        if(this.tail){
            this.tail.next = node
        }
        this.tail = node
        this.count++
        return this
    }
    /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
//   delete
    delete(value){
        if(!this.head)return null

        let delNode = null
        let cur = this.head
        while(cur){
            if(cur.value === value){
                delNode = cur
                if(delNode === this.head){
                    this.head = cur.next
                    if(!this.head){
                        this.tail = this.head
                    }else{
                        cur.next.previous = null
                    }
                } else if(delNode === this.tail){
                    this.tail = cur.previous
                    this.tail.next = null
                } else {
                    let preNode = cur.previous
                    let nextNode = cur.next
                    preNode.next = nextNode
                    nextNode.previous = preNode
                }
                this.count--
            }
            cur = cur.next
        }
        return delNode
    }
/**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
//   find
    find({ value = undefined, callback = undefined }) {
        if(!this.head)return null
        
        let cur = this.head
        while(cur){
            if(cur.value = value){
                if(Object.prototype.toString.call(callback) === '[object Function]'){
                    callback()
                    return this
                }
            }
            cur = cur.next
        }
    }
/**
   * @return {DoublyLinkedListNode}
   */
    deleteHead(){
        if(!this.head)return null
        if(this.head === this.tail){
            this.head = this.tail = null
        } else {
            this.head = this.head.next
            this.head.previous = null
        }
        this.count--
        return this
    }
/**
   * @return {DoublyLinkedListNode}
   */
    deleteTail(){
        if(!this.head)return null
        if(this.tail === this.head){
            this.head = this.tail = null
        } else {
            this.tail = this.tail.previous
            this.tail.next = null
        }
        this.count--
        return this

    }
/**
   * @return {DoublyLinkedListNode[]}
   */
     toArray(){
         const arr = []
         let cur = this.head
         while(cur){
             arr.push(cur)
             cur = cur.next
         }
         return arr
     }
    
/**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {DoublyLinkedList}
   */
    fromArray(arr){
        for(let n of arr){
            this.append(n)
        }
        return this
    }
/**
   * @param {function} [callback]
   * @return {string}
   */
    toString(){
        let str = ''
        let cur = this.head
        while(cur){
            str += cur.value.toString()
            cur = cur.next
        }
        return cur
    }
/**
   * Reverse a linked list.
   * @returns {DoublyLinkedList}
   */
    reverse(){
        let cur = this.head,
            pre = null,
            next = null

        while(cur){
            pre = cur.previous
            next = cur.next

            cur.next = pre
            cur.previous = next
            
            pre = cur
            cur = next
        }
        this.tail = this.head
        this.head = pre
        return this
    }
    copy(){
        let map = new Map(); //创建HashMap集合
        let cur = this.head;
        //复制结点值
        while(cur){
            //存储put:<key,value1>
            map.set(cur,new DoublyLinkedListNode(cur.value)); //顺序遍历，存储老结点和新结点(先存储新创建的结点值)
            cur=cur.next;
        }
        //复制结点指向
        cur = this.head;
        while(cur){
            //得到get:<key>.value2,3
            map.get(cur).next = map.get(cur.next); //新结点next指向同旧结点的next指向
            map.get(cur).previous = map.get(cur.previous); //新结点random指向同旧结点的random指向
            cur = cur.next;
        }
        console.log('this', this)
        //返回复制的链表
        return map.get(this.head);    
    }
}
const dlk = new DoublyLinkedList()
console.log(dlk.prepend(10))
console.log(dlk.prepend(20))
console.log(dlk.prepend(30))
console.log(dlk.append(40))
console.log(dlk.append(50))
console.log(dlk.append(60))
const dlk01 = new DoublyLinkedList()
console.log(dlk01.append(110))
console.log(dlk01.append(120))
