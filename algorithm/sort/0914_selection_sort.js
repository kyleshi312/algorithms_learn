function selectionSort(arr){
    let a = [...arr]
    for(let i = 0;i<a.length-1;i++){
        let minIndex = i
        for(let j=i+1;j<a.length;j++){
            if(a[j] < a[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [a[i], a[minIndex]] = [a[minIndex], a[i]]
        }
    }
    return a
}