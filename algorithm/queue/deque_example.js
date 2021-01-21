class Deque { 
    constructor() { 
        this.count = 0; 
        this.lowestCount = 0; 
        this.items = {}; 
    } 
    // addFront(element)：该方法在双端队列前端添加新的元素。
    addFront(element){
        if(this.isEmpty()){
            this.items[this.count] = element
        } else if(this.lowestCount > 0){
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for(let i=this.items.length;i>0;i--){
                this.items[i] = this.items[i-1]
            }
            this.items[0] = element
            this.count++
            this.lowestCount = 0
        }

    }
    // addBack(element)：该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的
    // enqueue 方法相同）。
    addBack(element){
        this.items[this.count] = element
        this.count++
    }
    // removeFront()：该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的
    // dequeue 方法相同）。
    removeFront(){
        if(this.isEmpty()){
            return undefined
        }
        const res = this.items[this.lowestCount]
        Reflect.deleteProperty(this.items, this.lowestCount)
        this.lowestCount++
        return res
    }
    //     removeBack()：该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的
    // pop 方法一样）。
    removeBack(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--
        const res = this.items[this.count]
        Reflect.deleteProperty(this.items, this.count)
        return res
    }
    /*peekFront()：该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek
    方法一样）*/
    peekFront(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    // peekBack()：该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek
    // 方法一样）。
    peekBack(){
        if(this.isEmpty()){
            return undefined
        }
        const i = this.count - 1
        return this.items[i]
    }
    // isEmpty()：如果队列中不包含任何元素，返回 true，否则返回 false
    isEmpty(){
        return this.count === this.lowestCount
    }
    // size()：返回队列包含的元素个数，与数组的 length 属性类似。
    size(){
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString(){
        if(this.isEmpty()){
            return undefined
        }
        let str = this.items[this.lowestCount]
        for(let i = this.lowestCount+1;i<this.count;i++){
            str += `${this.items[i]}`
        }
        return str
    }
}
// 回文检查器
// 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam或 racecar。
function palindromeChecker(aStr) {
    if(!aStr){
        return false
    }
    const deque = new Deque()
    const lowerStr = aStr.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar,lastChar
    for(let i=0;i<lowerStr.length;i++){
        deque.addBack(lowerStr.charAt(i))
    }
    while (deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar !== lastChar){
            isEqual = false
        }
    }
    return isEqual
}