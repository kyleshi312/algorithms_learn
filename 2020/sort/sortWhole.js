//  冒泡
const swan = function (arr, i, j){
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
//  function bubbleSort (arr){
//     for(var i = 0; i < arr.length - 1; i++){
//         //决定每一轮比较多少次
//         for(var j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 var tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     return arr
//  }
function bubbleSort (arr){
    const { length } = arr
    for (let i = 0; i < length; i++) { 
        for (let j = 0; j < length - 1; j++) { // {1} 
            if (arr[j] > arr[j + 1]) { 
                    let save = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j+1] = save
            } 
            // console.log('arr => 1', arr)
        } 
        // console.log('arr', arr)
    }
    return arr
}

//  选择排序
const selectionSort = function(arr){
    const { length } = arr
    for(let i=0; i<length; i++){
        let minIndex = i
        for(let j=i; j<length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            swan(arr, i, minIndex)
        }
        // console.log('arr => 1' , JSON.stringify(arr))
    }
    return arr
}

// 插入排序

const insertionSort = function(arr){
    const { length } = arr
    let temp,
        j
    for(let i=1; i<length; i++){
        j = i
        temp = arr[i]
        console.log('j', j, 'temp', temp)
        while(j>0 && arr[j-1] > temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
        console.log('arr => 1' , JSON.stringify(arr))
    }
    return arr
}



// 归并排序

const mergeSort = function(arr){
    if(arr.length > 1){
        const { length } = arr
        const mid = Math.floor(length/2)
        const left = mergeSort(arr.slice(0, mid))
        console.log('mergeSoft left after: left', JSON.stringify(left))
        const right = mergeSort(arr.slice(mid, length))
        console.log('mergeSoft right after: left', JSON.stringify(left), 'right', JSON.stringify(right))
        arr = merge(left, right)
    }
    console.log('mergeSoft ===== arr before:', JSON.stringify(arr))

    return arr
}

const merge = function(left, right){
    console.log('merge ---------------- left', JSON.stringify(left),'merge right', JSON.stringify(right))
    let result = []
    while(left.length && right.length){
        // if(left[0] < right[0]){
        //     result.push(left.shift())
        // } else {
        //     result.push(right.shift())
        // }
        result.push(left[0] < right[0]? left.shift() : right.shift())
    }
    // if(left.length){
    //     result = result.concat(left)
    // }
    // if(right.length){
    //     result = result.concat(right)
    // }
    return left.length? result.concat(left) : result.concat(right)
}

// 快速排序

const quickSort = function(arr){
    const { length } = arr
    if(length <= 1)return arr
    const mid = Math.floor(length / 2)
    const leftArr = [],
        rightArr = []
    for(let i=0; i<length; i++){
        if(arr[i] > arr[mid]){
            rightArr.push(arr[i])
        } else{
            leftArr.push(arr[i])
        }
    }
    console.log('leftArr', leftArr)
    console.log('rightArr', rightArr)
    // return quickSort(leftArr).concat(arr[mid], quickSort(rightArr))
    return quickSort(leftArr).concat(quickSort(rightArr))
}
// [6, 5, 4, 3, 2, 1]
// mid: 3
// leftArr: [2, 1]
// rightArr: [6, 5, 4]

// mid: 1
// leftArr: []
// rightArr: [2]

// mid: 5
// leftArr: [4]
// rightArr: [6]

// [1, 2] [4, 5, 6]

// function quickSort(array, compareFn = defaultCompare) { 
//     return quick(array, 0, array.length - 1, compareFn); 
// };

// function quick(array, left, right, compareFn) { 
//     let index; // {1} 
//     if (array.length > 1) { // {2} 
//         index = partition(array, left, right, compareFn); // {3} 
//         if (left < index - 1) { // {4} 
//             quick(array, left, index - 1, compareFn); // {5} 
//         } 
//         if (index < right) { // {6} 
//             quick(array, index, right, compareFn); // {7} 
//         } 
//     } 
//     return array; 
// };

// function partition(array, left, right, compareFn) { 
//     const pivot = array[Math.floor((right + left) / 2)]; // {8} 
//     let i = left; // {9} 
//     let j = right; // {10} 
//     while (i <= j) { // {11} 
//         while (compareFn(array[i], pivot) === Compare.LESS_THAN) { // {12} 
//             i++; 
//         } 
//         while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) { // {13} 
//             j--; 
//         } 
//         if (i <= j) { // {14} 
//             swap(array, i, j); // {15} 
//             i++; 
//             j--; 
//         } 
//     } 
//     return i; // {16} 
// }

// 计数排序

// const countingSort = function(array){
//     if(array.length < 2)return array
//     const maxValue = Math.max(...array)
//     const counts = new Array(maxValue + 1)
//     array.forEach(n => {
//         if(!counts[n]){
//             counts[n] = 0
//         }
//         counts[n]++
//     })
//     console.log('counts', counts)
//     console.log('array', array)
//     let sortedIndex = 0
//     counts.forEach((n, index) => {
//         while(n > 0){
//             array[sortedIndex++] = index;
//             n--
//         }
//         console.log('array', array)
//     })
//     return array
// }
const countingSort = function(arr){
    if(arr.length < 2)return arr
    const maxVal = Math.max(...arr)
    const counts = new Array(maxVal + 1)
    arr.forEach(n => {
        if(!counts[n]){
            counts[n] = 0
        }
        counts[n]++
    })
    let countIndex = 0
    counts.forEach((n, i) => {
        while(n>0){
            arr[countIndex++] = i
            n--
        }
    })
    return arr
}

// 桶排序
// 关键：通过最大值 - 最小值获得桶的大小
// 通过 数组的元素 - 最小值 / 桶的size + 1 获取每个元素对应的桶的系数
// 
const bucketSort = function(arr, bucketSize = 5){
    // 建立条件判断
    if(arr.length < 2)return arr
    // 调用桶创建函数，获得响应的二级数组
    // 获得 最小值，最大值
    // 计算桶个数，把数组分别放入桶中
    const buckets = createBuckets(arr, bucketSize)
    // 使用for循环，遍历每个二级数组，使用插入排序进行排序，把子数组合并为最终数组
    return sortBuckets(buckets)
}

function createBuckets(array, bucketSize) { 
    let minValue = array[0]; 
    let maxValue = array[0]; 
    // 获取最大值，最小值
    for (let i = 1; i < array.length; i++) { // {4} 
        if (array[i] < minValue) { 
            minValue = array[i]; 
        } else if (array[i] > maxValue) { 
            maxValue = array[i]; 
        } 
    } 
    // 根据桶大小，获取桶的个数
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; // {5} 
    const buckets = []; 
    // 根据桶个数，生成对应的空的二级数组
    for (let i = 0; i < bucketCount; i++) { // {6} 
        buckets[i] = []; 
    } 
    console.log('buckets', JSON.stringify(buckets))
    // 通过最小值和数组元素，生成对应桶的系数，把数组元素放入对应桶里
    for (let i = 0; i < array.length; i++) { // {7} 
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize); // {8} 
        buckets[bucketIndex].push(array[i]); 
    }
    console.log('buckets', JSON.stringify(buckets))
    return buckets; 
}

function sortBuckets(buckets) { 
    // 声明最终生成的数组
    const sortedArray = []; // {9} 
    // 遍历生成的桶数组，使用插入排序进行子数组排序，将排好序的子数组合并为最终数组，并返回
    for (let i = 0; i < buckets.length; i++) { // {10} 
        if (buckets[i] != null) { 
            insertionSort(buckets[i]); // {11} 
            sortedArray.push(...buckets[i]); // {12} 
        } 
    } 
    return sortedArray; 
}

// 基数排序

function radixSort(array, radixBase = 10) { 
    if (array.length < 2) { 
        return array; 
    } 
    const minValue = Math.min(...array); 
    const maxValue = Math.max(...array); 
    let significantDigit = 1; // {1} 
    while ((maxValue - minValue) / significantDigit >= 1) { // {2} 
        console.log('significantDigit', significantDigit)
        array = countingSortForRadix(array, radixBase, significantDigit, minValue); // {3} 
        significantDigit *= radixBase; // {4} 
    } 
    return array; 
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) { 
    let bucketsIndex; 
    const buckets = []; 
    const aux = []; 
    console.log('countingSortForRadix ------ array, radixBase, significantDigit, minValue',array, radixBase, significantDigit, minValue)
    for (let i = 0; i < radixBase; i++) { // {5} 
        buckets[i] = 0; 
    } 
    console.log('buckets === 01', JSON.stringify(buckets))
    for (let i = 0; i < array.length; i++) { // {6} 
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {7} 
        buckets[bucketsIndex]++; // {8} 
    } 
    console.log('buckets ==== 02', JSON.stringify(buckets))
    for (let i = 1; i < radixBase; i++) { // {9} 
        buckets[i] += buckets[i - 1]; 
    } 
    console.log('buckets ===== 03', JSON.stringify(buckets))
    for (let i = array.length - 1; i >= 0; i--) { // {10} 
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {11} 
        let bIndex = --buckets[bucketsIndex]
        console.log('bucketsIndex', bucketsIndex, 'bIndex', bIndex, 'array[i]', array[i])
        aux[bIndex] = array[i]; // {12} 
    } 
    console.log('aux--------------aux', JSON.stringify(aux))
    for (let i = 0; i < array.length; i++) { // {13} 
        array[i] = aux[i]; 
    } 
    return array; 
}
