_items = Symbol('stackItems')
class Stack { 
    constructor() { 
        this.count = 0; 
        this[_items] = {}; 
    } 
    // 方法
    push(element){
        this[_items][this.count] = element
        this.count++
        return this
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count === 0
    }
    pop(){
        if(this.isEmpty())return undefined
        this.count--
        const res = this[_items][this.count]
        Reflect.deleteProperty(this[_items], this.count)
        return res
    }
    peek(){
        if(this.isEmpty())return undefined
        return this[_items][this.count - 1]
    }
    clear(){
        // this[_items] = []
        // this.count = 0
        while(!this.isEmpty()){
            this.pop()
        }
    }
    toString(){
        if(this.isEmpty())return ''
        let str = this[_items][0]
        for(let i=1;i<this.count;i++){
            str += this[_items][i]
        }
        return str
    }
}

function decimalToBinary(decNumber, base){
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber
    let rem
    let binaryStr = ''
    
    if (!(base >= 2 && base <= 36)) { 
        return ''; 
    }
    while(number > 0){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while(!remStack.isEmpty()){
        binaryStr += digits[remStack.pop()].toString()
    }
    return binaryStr
}
