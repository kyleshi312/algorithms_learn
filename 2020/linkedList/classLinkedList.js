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
        if(!this.head){
            return null
        }
        let dumy = new Node(0)
        dumy.next = this.head

        let cur = dumy.next
        while(cur.next && cur.next.element !== element){
            cur = cur.next
        }
		if(cur.next){
			cur.next = cur.next.next
		}
        return this.head
    }
    indexOf(element){
        let index = 0
        if(!element)return index = -1
        if(!this.head)return index = -1
        let dumy = new Node(0)
        dumy.next = this.head
        let cur = dumy
        while(cur.next && cur.next.element !== element){
            index++
            cur = cur.next
        }
        if(cur.next.element === element){
            return index + 1
        }
        return index
    }
    // return the element where this postion is equal to index
    elementAt(index){
        let cur = this.head
        while(cur.next){
            if(this.indexOf(cur.element) === index){
                return cur.element
            }
            cur = cur.next
        }
    }
}
var lk = new LinkedList()
console.log(lk.indexOf(11))
console.log(lk.push(22))
console.log(lk.push(22))
console.log(lk.prepend(122), lk.indexOf(22))
console.log(JSON.stringify(lk.insertAt(1, 111)))
console.log(JSON.stringify(lk.removeAt(1)))
console.log(JSON.stringify(lk.removeAt(1)))
console.log(JSON.stringify(lk.push(12),lk.indexOf(22)))
console.log(JSON.stringify(lk.push(13),lk.indexOf(22)))
console.log(JSON.stringify(lk.push(14),lk.indexOf(22)))
console.log(JSON.stringify(lk.remove(132),lk.indexOf(14)))
