function quickSort(arr){
  if(arr.length <= 1)return arr

  let midIndex = Math.floor(arr.length / 2)
  let leftArr = []
  let rightArr = []
  for(let i=0;i<arr.length;i++){
    if(arr[i] < arr[midIndex]){
      leftArr.push(arr[i])
    }else if(arr[i] > arr[midIndex]){
      rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(arr[midIndex], quickSort(rightArr))
}