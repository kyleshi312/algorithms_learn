class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.count = 0
        this.head = null
    }
    push(element){
        const node = new Node(element)
        if(this.head === null){
            this.head = node
        } else {
            let cur = this.head
            while(cur.next !== null){
                cur = cur.next
            }
            cur.next = node
        }
        this.count++
        return this.head
    }
    prepend(element){
        const node = new Node(element)
        if(this.head === null){
            this.head = node
        } else {
            let cur = this.head
            this.head = node
            this.head.next = cur
        }
        this.count++
        return this.head
    }
    removeAt(index){
        index--
        let cur = this.head,
            pre,
            curIndex = 0
        if(index < 0 || index > this.count){
            return null
        }
        if(index === 0){
            this.head = cur.next
        } else {
            while(curIndex < index){
                curIndex++
                pre = cur
                cur = cur.next
            }
            pre.next = cur.next
        }
        return cur.element
    }
    insertAt(index, element){
        if(!element){
            return this.head
        }
        index--
        let cur = this.head,
            pre,
            curIndex = 0,
            node = new Node(element)
        if(index <= 0){
            this.head = node
            this.head.next = cur
        } else if(index > this.count){
            while(cur.next){
                cur = cur.next
            }
            cur.next = node
        } 
        else {
            while(curIndex < index){
                curIndex++
                pre = cur
                cur = cur.next
            }
            pre.next = node
            pre.next.next = cur
        }
        return this.head
    }
    remove(element){

    }
    indexOf(element){

    }
}
var lk = new LinkedList()
console.log(lk.push(22))
console.log(lk.push(22))
console.log(lk.prepend(122))
console.log(JSON.stringify(lk.insertAt(1, 111)))
console.log(JSON.stringify(lk.removeAt(1)))
console.log(JSON.stringify(lk.removeAt(1)))
console.log(lk)
