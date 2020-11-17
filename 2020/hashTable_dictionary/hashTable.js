
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
        return hash
    }
    hashCode(key){
        return this.loseloseHashCode(key)
    }
    // put(key,value)：向散列表增加一个新的项（也能更新散列表）。
    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key)
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


}

// test
const hash = new HashTable(); 
hash.put('Gandalf', 'gandalf@email.com'); 
hash.put('John', 'johnsnow@email.com'); 
hash.put('Tyrion', 'tyrion@email.com'); 
console.log(hash.hashCode('Gandalf') + ' - Gandalf'); 
console.log(hash.hashCode('John') + ' - John'); 
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.get('Gandalf')); // gandalf@email.com 
console.log(hash.get('Loiane')); // undefined

hash.remove('Gandalf'); 
console.log(hash.get('Gandalf'));