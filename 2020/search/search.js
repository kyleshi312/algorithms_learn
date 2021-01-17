function binarySearch(array, value, compareFn = defaultCompare) { 
    const sortedArray = quickSort(array); // {1} 
    let low = 0; // {2} 
    let high = sortedArray.length - 1; // {3} 
    while (lesserOrEquals(low, high, compareFn) { // {4} 
        const mid = Math.floor((low + high) / 2); // {5} 
        const element = sortedArray[mid]; // {6} 
        if (compareFn(element, value) === Compare.LESS_THAN) { // {7} 
            low = mid + 1; // {8} 
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {9} 
            high = mid - 1; // {10} 
        } else { 
            return mid; // {11} 
        } 
    } 
    return DOES_NOT_EXIST; // {12} 
}