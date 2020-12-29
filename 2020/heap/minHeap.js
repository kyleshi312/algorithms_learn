 function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }
 function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
  }
  
const Compare = {
    LESS_THAN : -1,
    BIGGER_THAN : 1,
    EQUALS: 0
  }
class MinHeap{
    constructor(compareFn = defaultCompare){
        this.heap = []
        this.compareFn = compareFn
    }
    getLeftIndex(index){
        return index * 2 + 1
    }
    getRightIndex(index){
        return index * 2 + 2
    }
    getParentIndex(index){
        if(index === 0)return undefined
        return Math.floor((index - 1) / 2)
    }
    // insert(value)：这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回 false
    insert(value){
        if(value){
            this.heap.push(value)
            this.siftUp(this.heap.length - 1)
            return true
        }
        return false
    }
    siftUp(index){
        let parent = this.getParentIndex(index)
        // while(index > 0 && this.heap[parent] > this.heap[index]){
        while(index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN){
            swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
    // extract()：这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
    extract(){
        if(this.isEmpty())return undefined
        if(this.size() === 1)return this.heap.shift()
        const removeValue = this.heap.shift()
        this.siftDown(0)
        return removeValue
    }
    siftDown(index){
        let element = index
        let left = this.getLeftIndex(index)
        let right = this.getRightIndex(index)
        let size = this.size()
        if(left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN){
            index = left
        }
        if(right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN){
            index = right
        }
        if(index !== element){
            swap(this.heap, index, element)
            this.siftDown(index)
        }
    }
    // findMinimum()：这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值
    size(){
        return this.heap.length
    }
    isEmpty(){
        return this.size() === 0
    }
    findMinimum(){
        return this.isEmpty()?undefined:this.heap[0]
    }
}

function swap(arr, a, b){
    // let tmp = arr[a]
    // arr[a] = arr[b]
    // arr[b] = tmp
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

const heap = new MinHeap()

heap.insert(4)
heap.insert(6)
heap.insert(9)
heap.insert(11)
heap.insert(16)
console.log('heap', JSON.parse(JSON.stringify(heap)))

heap.insert(1)
console.log('heap', JSON.parse(JSON.stringify(heap)))
console.log('mim', heap.findMinimum())
console.log('extract', heap.extract())

class MaxHeap extends MinHeap { 
    constructor(compareFn = defaultCompare) { 
    super(compareFn); 
    this.compareFn = reverseCompare(compareFn); // {1} 
    } 
   }

const maxHeap = new MaxHeap()
for(var i=0;i<10;i++){
    maxHeap.insert(i)
}
console.log(maxHeap)

console.log('Heap size: ', maxHeap.size()); // 5 
console.log('Heap min value: ', maxHeap.findMinimum()); // 5