
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


class ValuePair{
    constructor(key, value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[#${this.key}：${this.value}]`
    }
}


function defaultToString(item) { 
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString(); // {1}
}

class HashTableLinearProbingLazy {
    constructor(toStrFn = defaultToString) { 
        this.toStrFn = toStrFn; 
        this.table = {}; 
    }
    loseloseHashCode(key){
        if(typeof key === 'number'){
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0;
        for(let i=0; i<tableKey.length; i++){
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }
    djb2HashCode(key){
        let k = this.toStrFn(key)
        let baseHash = 5381
        let h = 0
        for(var i =0; i<k.length; i++){
            h += (baseHash * 33) + k.charCodeAt(i)
        }
        return h % 1013
    }
    hashCode(key){
        // return this.loseloseHashCode(key)
        return this.djb2HashCode(key)
    }
    // put(key,value)：向散列表增加一个新的项（也能更新散列表）。
    put(key, value){
        if(key == null && value == null){
            return false
        }
        const pos = this.hashCode(key)
        if(!this.table[pos]){
            this.table[pos] = new ValuePair(key, value)
        }else {
            let index = pos + 1
            while(this.table[index]){
                index++
            }
            this.table[index] = new ValuePair(key, value)
        }
        console.log('pos', pos, 'key', key)
        return true
    }
    // remove(key)：根据键值从散列表中移除值
    remove(key){
        let pos = this.hashCode(key)
        if(!this.table[pos])return false
        if(this.table[pos].key === key){
            Reflect.deleteProperty(this.table, pos)
            this.verifyRemoveSideEffect(key, pos)
            return true
        }else{
            let index = pos + 1
            while(this.table[index]){
                if(this.table[index].key === key){
                    Reflect.deleteProperty(this.table, index)
                    this.verifyRemoveSideEffect(key, index)
                    return true
                }
                index++
            }
        }
    }
    verifyRemoveSideEffect(key, moveIndex){
        let index = moveIndex + 1
        let pos = this.hashCode(key)
        while(this.table[index]){
            const posHash = this.hashCode(index)
            if(posHash <= moveIndex || posHash <= index){
                this.table[moveIndex] = this.table[index]
                Reflect.deleteProperty(this.table, index)
                moveIndex = index
            }
            index++
        }
    }
    // get(key)：返回根据键值检索到的特定的值
    get(key){
        if(!key)return undefined
        let pos = this.hashCode(key)
        let posObj = this.table[pos]
        if(posObj){
            if(posObj.key === key){
                return posObj.value
            }
        }
        let index = pos + 1
        while(this.table[index]){
            if(this.table[index].key === key){
                return this.table[index].value
            }
            index++
        }
    }
    isEmpty(){
        return Object.keys(this.table).length === 0
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        const keys = Object.keys(this.table)
        let objString = `{${keys[0]}} => ${this.table[keys[0]].toString()}\r\n`
        for(var i=1;i<keys.length; i++){
            objString += `{${keys[i]}} => ${this.table[keys[i]].toString()}\r\n`
        }
        return objString
    }
    // 处理冲突的几种方法
}

// test
// const hash = new HashTable(); 
// hash.put('Gandalf', 'gandalf@email.com'); 
// hash.put('John', 'johnsnow@email.com'); 
// hash.put('Tyrion', 'tyrion@email.com'); 
// console.log(hash.hashCode('Gandalf') + ' - Gandalf'); 
// console.log(hash.hashCode('John') + ' - John'); 
// console.log(hash.hashCode('Tyrion') + ' - Tyrion');

// console.log(hash.get('Gandalf')); // gandalf@email.com 
// console.log(hash.get('Loiane')); // undefined

// hash.remove('Gandalf'); 
// console.log(hash.get('Gandalf'));

const hash = new HashTableLinearProbingLazy(); 
hash.put('Ygritte', 'ygritte@email.com'); 
hash.put('Jonathan', 'jonathan@email.com'); 
hash.put('Jamie', 'jamie@email.com'); 
hash.put('Jack', 'jack@email.com'); 
hash.put('Jasmine', 'jasmine@email.com'); 
hash.put('Jake', 'jake@email.com'); 
hash.put('Nathan', 'nathan@email.com'); 
hash.put('Athelstan', 'athelstan@email.com'); 
hash.put('Sue', 'sue@email.com'); 
hash.put('Aethelwulf', 'aethelwulf@email.com'); 
hash.put('Sargeras', 'sargeras@email.com');
console.log('test', JSON.parse(JSON.stringify(hash)))
console.log('test get', hash.get('Sue'))
console.log('test get', hash.get('Athelstan'))
console.log('test get', hash.get('Ygritte'))
console.log('test get', hash.get('Jonathan'))
console.log('test get', hash.get('Jamie'))
console.log('test get', hash.get('Jack'))
console.log('test get', hash.get('Jasmine'))
console.log('test get', hash.get('Aethelwulf'))
console.log('test remove Jonathan', hash.remove('Jonathan'), JSON.parse(JSON.stringify(hash)))
// console.log('test remove Aethelwulf', hash.remove('Aethelwulf'), JSON.parse(JSON.stringify(hash)))
// console.log('test remove Sue', hash.remove('Sue'), JSON.parse(JSON.stringify(hash)))
// console.log('test remove Athelstan', hash.remove('Athelstan'), JSON.parse(JSON.stringify(hash)))