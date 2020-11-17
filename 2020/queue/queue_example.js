class Queue { 
    constructor() { 
        this.count = 0; // {1} 
        this.lowestCount = 0; // {2} 
        this.items = {}; // {3} 
    } 
    // enqueue(element(s))：向队列尾部添加一个（或多个）新的项
    enqueue(element){
        this.items[this.count] = element
        this.count++
    }
    // dequeue()：移除队列的第一项（即排在队列最前面的项）并返回被移除的元素。
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const res = this.items[this.lowestCount]
        Reflect.deleteProperty(this.items, this.lowestCount)
        this.lowestCount++
        return res
    }
    /*peek()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做
    任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。该方
    法在其他语言中也可以叫作 front 方法。*/
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
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
// examples 击鼓传花游戏
function hotPotato(elementsList, num){
    const queue = new Queue()
    const elimitatedList = []
    for(let i=0;i<elementsList.length;i++){
        queue.enqueue(elementsList[i])
    }
    while(queue.size() > 1){
        for(let j=0;j<num;j++){
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return {
        elimitated: elimitatedList,
        winner:queue.dequeue()
    }
}
// 回文检查器