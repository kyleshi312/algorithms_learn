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

class ValuePair{
    constructor(key, value){
        this.key = key
        this.value = value
    }
    toString(){
        return `[#${this.key}：${this.value}]`
    }
}

class HashTableSeparateChaining { 
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
    put(key, value){
        if(key != null && value != null){
            const pos = this.hashCode(key)
            if(!this.table[pos]){
                this.table[pos] = new LinkedList()
                this.table[pos].push(new ValuePair(key, value))
            }else{
                this.table[pos].push(new ValuePair(key, value))
            }
            return true
        }
        return false
    }
    get(key){
        const pos = this.hashCode(key)
        const linkList = this.table[pos]
        if(linkList !== null && !linkList.isEmpty()){
            let current = linkList.getHead()
            while(current != null){
                if(current.element.key === key){
                    return current.element.value
                }
                current = current.next
            }
        }
        return undefined
    }
    remove(key){
        const pos = this.hashCode(key)
        const linkList = this.table[pos]
        if(linkList !== null && !linkList.isEmpty()){
            const cur = linkList.getHead()
            while(cur){
                if(cur.element.key === key){
                    linkList.remove(cur.element)
                    if(linkList.isEmpty()){
                        Reflect.deleteProperty(this.table, pos)
                    }
                    return true
                }
                cur = cur.next
            }
        }
        return false
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

}

const hash = new HashTableSeparateChaining(); 
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