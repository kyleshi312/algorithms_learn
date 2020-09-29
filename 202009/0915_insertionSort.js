function directInsertionSort(array) {
    var length = array.length, index, current;
    for (var i = 1; i < length; i++) {
      index = i - 1;         //待比较元素的下标
      current = array[i];     //当前元素
  console.log('array index', array[index])
  console.log('index',index)
  console.log('i,,,,',i)
  console.log('cuurrent', current)
      while(index >= 0 && array[index] > current) { //前置条件之一:待比较元素比当前元素大
        array[index+1] = array[index];    //将待比较元素后移一位
        index--;                           //游标前移一位
        console.log(array);
      }
      
      console.log('index----==============', index)
      if(index+1 != i){                   //避免同一个元素赋值给自身
        array[index+1] = current;            //将当前元素插入预留空位
        console.log(array);
      }        
    }
    return array;
  }
// 优化版
  function insertSort02(array){
    let arr = array.slice(0)
    for(let i=1;i<arr.length;i++){
      let curIndex = i
      let cur = arr[i]
      console.log('cur',cur,'curIndex', curIndex)
      while(curIndex > 0 && cur < arr[curIndex-1]){
        console.log('cur',cur,'curIndex', curIndex)
        // arr[curIndex] = arr[curIndex-1]
        // arr[curIndex-1] = cur
        let index = curIndex-1;
        [arr[curIndex], arr[index]] = [arr[index], cur]
        curIndex--
      }
    }
    return arr

  }