// 集合是由一组无序且唯一（即不能重复）的项组成的
class Set { 
    constructor() { 
        this.items = {}; 
    } 
    // add(element)：向集合添加一个新元素
    add(el){
        if(!this.has(el)){
            this.items[el] = el
            return true
        }
        return false
    }
    // delete(element)：从集合移除一个元素
    delete(el){
        if(this.has(el)){
            return Reflect.deleteProperty(this.items, el)
        }
        return false
    }
    // has(element)：如果元素在集合中，返回 true，否则返回 false
    has(el){
        // 查询包含原型链上的属性
        return Reflect.has(this.items, el)
        return Object.hasOwnProperty.call(this.items, el)
    }
    // clear()：移除集合中的所有元素
    clear(){
        this.items = {}
    }
    // size()：返回集合所包含元素的数量。它与数组的 length 属性类似
    size(){
        let count = 0;
        for(let key in this.items){
            // 必须判断key是直接在 this.items上，而不是在prototype上
            if(this.items.hasOwnProperty(key)){
                count++
            }
        }
        return count
    }
    // values()：返回一个包含集合中所有值（元素）的数组
    values(){
        let arr = [];
        for(let key in this.items){
            // 必须判断key是直接在 this.items上，而不是在prototype上
            if(this.items.hasOwnProperty(key)){
                arr.push(this.items[key])
            }
        }
        return arr
    }
    // 并集操作 纯函数
    union(otherSet){
        const newSet = new Set()
        const values = this.values()
        values.forEach(el => {
            newSet.add(el)
        });
        const otherValues = otherSet.values()
        otherValues.forEach(el => {
            newSet.add(el)
        })
        return newSet
    }
    // 交集 纯函数
    // intersection(otherSet){
    //     const newSet = new Set()
    //     values = this.values()
    //     for(let i=0;i<values.length;i++){
    //         if(otherSet.has(values[i])){
    //             newSet.add(values[i])
    //         }
    //     }
    //     return newSet
    // }
    intersection(otherSet){
        const newSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let smallerSet,biggerSet
        if(values.length - otherValues.length > 0){
            smallerSet = otherValues
            biggerSet = values
        } else {
            smallerSet = values
            biggerSet = otherValues
        }
        for(let i=0; i<smallerSet.length;i++){
            if(biggerSet.includes(smallerSet[i])){
                newSet.add(smallerSet[i])
            }
        }
        return newSet
    }
    // 差集
    difference(otherSet){
        const newSet = new Set()
        const values = this.values()
        for(let i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                newSet.add(values[i])
            }
        }
        return newSet
    }
    // 子集
    isSubsetOf(otherSet){
        console.log('isSubsetOf 3333')
        if(this.size() > otherSet.size()){
            return false
        }
        const res = this.values().every(n => {
            console.log('isSubsetOf', n)
            if(!otherSet.has(n)){
                return false
            } else{
                return true
            }
        })
        return res
    }
}
const set = new Set(); 
set.add(1); 
console.log(set.values()); // 输出[1] 
console.log(set.has(1)); // 输出 true 
console.log(set.size()); // 输出 1 
set.add(2); 
console.log(set.values()); // 输出[1, 2] 
console.log(set.has(2)); // 输出 true 
console.log(set.size()); // 输出 2 
set.delete(1); 
console.log(set.values()); // 输出[2] 
set.delete(2); 
console.log(set.values()); // 输出[]

// 并集test
const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 
const setB = new Set(); 
setB.add(3); 
setB.add(4); 
setB.add(5); 
setB.add(6); 
const unionAB = setA.union(setB); 
console.log(unionAB.values());

// 交集 test
const setC = new Set(); 
setC.add(1); 
setC.add(2); 
setC.add(3); 
const setD = new Set(); 
setD.add(2); 
setD.add(3); 
setD.add(4); 
const intersectionAB = setC.intersection(setD); 
console.log(intersectionAB.values());
// 差集
const setE = new Set(); 
setE.add(1); 
setE.add(2); 
setE.add(3); 
const setF = new Set(); 
setF.add(2); 
setF.add(3); 
setF.add(4); 
const differenceAB = setE.difference(setF);
console.log('差集', differenceAB.values());
// 子集
const setH = new Set(); 
setH.add(1); 
setH.add(2); 
const setI = new Set(); 
setI.add(1); 
setI.add(2); 
setI.add(3); 
const setJ = new Set(); 
setJ.add(2);
setJ.add(3); 
setJ.add(4); 
console.log('子集', setH.isSubsetOf(setI)); 
console.log('子集', setH.isSubsetOf(setJ));
// 集合运算
// 想学习更多有关 SQL联接运算的知识，请阅读 http://www.sql-join.com/sql-join-types