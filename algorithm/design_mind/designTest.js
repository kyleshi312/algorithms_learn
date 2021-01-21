const binarySearch = function(array, val){
    const { length } = array
    let low = 0
    let high = length - 1
    console.log('')
    return binarySearchRecursive(array, val, low, high)
}

const binarySearchRecursive = function(array, val, low, high){
    console.log('binarySearchRecursive low high', low, high )
    let mid = Math.floor((low + high) / 2)
    while(low <= high){
        if(val > array[mid]){
            binarySearchRecursive(array, val, mid+1, high)
        } else if(val < array[mid]) {
            binarySearchRecursive(array, val, low, mid-1)
        } else {
            return mid
        }
    }
    return -1
}

function minCoinChange(coins, amount) { 
    const cache = []; // {1} 
    const makeChange = (value) => { // {2} 
        if (!value) { // {3} 
            return []; 
        } 
        if (cache[value]) { // {4} 
            return cache[value]; 
        } 
        let min = []; 
        let newMin; 
        let newAmount; 
        for (let i = 0; i < coins.length; i++) { // {5} 
            const coin = coins[i]; 
            newAmount = value - coin; // {6} 
            console.log('newAmount', newAmount)
            if (newAmount >= 0) { 
                newMin = makeChange(newAmount); // {7} 
            } 
            console.log('newMin.length < min.length - 1', newMin.length < min.length - 1)
            if ( 
                newAmount >= 0 && // {8} 
                (newMin.length < min.length - 1 || !min.length) && // {9} 
                (newMin.length || !newAmount) // {10} 
            ) { 
                min = [coin].concat(newMin); // {11} 
                console.log('new Min ' + min + ' for ' + amount); 
            }
        } 
        return (cache[value] = min); // {12} 
    }; 
    return makeChange(amount); // {13} 
}