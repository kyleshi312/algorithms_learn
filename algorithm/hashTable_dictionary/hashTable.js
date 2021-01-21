
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

class HashTable { 
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
    hashCode(key){
        return this.loseloseHashCode(key)
    }
    // put(key,value)：向散列表增加一个新的项（也能更新散列表）。
    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key)
            console.log(position, value)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }
    // remove(key)：根据键值从散列表中移除值
    remove(key){
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if(valuePair){
            Reflect.deleteProperty(this.table, hash)
            return true
        }
        return false
    }
    // get(key)：返回根据键值检索到的特定的值
    get(key){
        const valuePair = this.table[this.hashCode(key)]
        return valuePair?valuePair.value : undefined
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
    分离链接
    线性探查
    双散列法
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

const hash = new HashTable(); 
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