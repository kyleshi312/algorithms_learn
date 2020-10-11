
function mergeSort(array) {
  if(array.length <= 1){
    return array
  }
  const midIndex = Math.floor(array.length/2);
  let leftArr = array.slice(0, midIndex)
  let rightArr = array.slice(midIndex)
  leftArr = mergeSort(leftArr)
  rightArr = mergeSort(rightArr)
  return mergeSortedArray(leftArr, rightArr)
}
const mergeSortedArray = function(leftArr, rightArr){
  let contentArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      contentArr.push(leftArr.shift())
    }else{
      contentArr.push(rightArr.shift())
    }
  }
  if(leftArr.length){
    contentArr = contentArr.concat(leftArr)
  }
  if(rightArr.length){
    contentArr = contentArr.concat(rightArr)
  }
  return contentArr
}