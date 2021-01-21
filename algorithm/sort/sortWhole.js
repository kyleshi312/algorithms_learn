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