
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
class Dictionary { 
    constructor(toStrFn = defaultToString) { 
        this.toStrFn = toStrFn; // {1} 
        this.table = {}; // {2} 
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null
    }
    set(key, value){
        if(key != null || value != null){
            const keyStr = this.toStrFn(key)
            this.table[keyStr] = new ValuePair(keyStr, value)
            return true
        }
        return false
    }
    remove(key){
        if(this.hasKey(key)){
            Reflect.deleteProperty(this.table, this.toStrFn(key))
        }
    }
    get(key){
        const ValuePair = this.table[this.toStrFn(key)]
        return ValuePair ? ValuePair.value : undefined
    }
    // values(){
    //     return Object.values(this.table)
    // }
    values(){
        const valuesList = []
        for(let key in this.table){
            if(this.hasKey(key)){
                valuesList.push(this.table[this.toStrFn(key)].value)
            }
        }
        return valuesList
    }
    keyValues(){
        const valuesList = []
        for(let key in this.table){
            if(this.hasKey(key)){
                valuesList.push(this.table[this.toStrFn(key)])
            }
        }
        return valuesList
    }
    keys(){
        return this.values().map(pairValue =>pairValue.key)
    }
    forEach(callbackFn){
        const values = this.values()
        for(var i=0; i<values.length; i++){
            var res = callbackFn(values[i].key, values[i].value)
            if(res === false){
                break
            }
        }
    }
    size(){
        return Object.keys(this.table).length
    }
    isEmpty(){
        return this.size() === 0
    }
    clear(){
        this.table = {}
    }
    toString(){
        if(this.size()){
            return ''
        }
        const ValuePairs = this.values()
        let objString = `${ValuePairs[0].toString()}`
        for(let i=0; i<ValuePairs.length; i++){
            objString += ValuePairs[0].toString()
        }
    }
}
// tests
const dictionary = new Dictionary(); 
dictionary.set('Gandalf', 'gandalf@email.com'); 
dictionary.set('John', 'johnsnow@email.com'); 
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.hasKey('Gandalf'));

console.log(dictionary.size());

console.log(dictionary.keys()); 
console.log(dictionary.values()); 
console.log(dictionary.get('Tyrion'));

console.log(dictionary.keys()); 
console.log(dictionary.values()); 
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => { 
    console.log('forEach: ', `key: ${k}, value: ${v}`); 
   });