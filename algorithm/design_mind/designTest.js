const bucketsSort = function(arr, bucketsSize = 5){
    if(arr.length < 5)return arr
    const buckets = createBuckets(arr, bucketsSize)
    return sortBuckets(buckets)
}
const createBuckets = function(arr, bucketsSize){
    const maxVal = Math.max(...arr)
    const minVal = Math.min(...arr)
    const bucketsLen = Math.floor((maxVal - minVal) / bucketsSize) + 1
    const buckets = []
    for(let i=0; i< bucketsLen; i++){
        buckets[i] = []
    }
    arr.forEach((el, index) => {
        let bucketIndex = Math.floor((el - minVal) / bucketsSize)
        buckets[bucketIndex].push(el)
    })
    return buckets
}
const insertSort = function(arr){
    if(arr.length < 2)return arr
    for(let i=1; i<arr.length; i++){
        let j=i;
        let temp  = arr[i]
        while(j > 0 && arr[j-1] > temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
const sortBuckets = function(buckets){
    const resArr = []
    buckets.forEach((el, index) => {
        insertSort(el)
        resArr.push(...el)
    })
    return resArr
}


const binarySearch = function(arr, val){
    const { length } = arr
    const array = bucketsSort(arr)
    let low = 0
    let high = length - 1
    return binarySearchRecursive(array, val, low, high)
}

const binarySearchRecursive = function(array, val, low, high){
    console.log('binarySearchRecursive low high', low, high )
    let mid = Math.floor((low + high) / 2)
    if(low <= high){
        if(val > array[mid]){
            return binarySearchRecursive(array, val, mid+1, high)
        } else if(val < array[mid]) {
            return binarySearchRecursive(array, val, low, mid-1)
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
            if (newAmount >= 0) { 
                newMin = makeChange(newAmount); // {7} 
            } 
            console.log('newMin', newMin)
            console.log('coin', coin)
            console.log('value', value)
            console.log('newAmount', newAmount)
            // console.log('newMin.length < min.length - 1', newMin.length < min.length - 1)
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

// 背包问题

function knapSack(capacity, weights, values, n) { 
    const kS = []; 
    for (let i = 0; i <= n; i++) { // {1} 
        kS[i] = []; 
    } 
    for (let i = 0; i <= n; i++) { 
        for (let w = 0; w <= capacity; w++) { 
            if (i === 0 || w === 0) { // {2} 
                kS[i][w] = 0; 
            } else if (weights[i - 1] <= w) { // {3} 
                const a = values[i - 1] + kS[i - 1][w - weights[i - 1]]; 
                const b = kS[i - 1][w]; 
                kS[i][w] = a > b ? a : b; // {4} max(a,b) 
            } else { 
                kS[i][w] = kS[i - 1][w]; // {5} 
            } 
        } 
    } 
    findValues(n, capacity, kS, weights, values); // {6} 增加的代码
    return kS[n][capacity]; // {7} 
}

function findValues(n, capacity, kS, weights, values) { 
    let i = n; 
    let k = capacity; 
    console.log('构成解的物品：'); 
    while (i > 0 && k > 0) { 
        if (kS[i][k] !== kS[i - 1][k]) { 
            console.log(`物品 ${i} 可以是解的一部分 w,v: ${weights[i - 1]}, ${values[i - 1]}`); 
            i--; 
            k -= kS[i][k]; 
        } else { 
            i--; 
        } 
    } 
}

// 最长公共子序列

function lcs(wordX, wordY) { 
    const m = wordX.length; 
    const n = wordY.length; 
    const l = []; 
    for (let i = 0; i <= m; i++) { 
        l[i] = []; // {1} 
        for (let j = 0; j <= n; j++) { 
            l[i][j] = 0; // {2} 
        } 
    } 
    for (let i = 0; i <= m; i++) { 
        for (let j = 0; j <= n; j++) { 
            if (i === 0 || j === 0) { 
                l[i][j] = 0; 
            } else if (wordX[i - 1] === wordY[j - 1]) { 
                l[i][j] = l[i - 1][j - 1] + 1; // {3} 
            } else { 
                const a = l[i - 1][j]; 
                const b = l[i][j - 1]; 
                l[i][j] = a > b ? a : b; // {4} max(a,b) 
            } 
        } 
    } 
    return l[m][n]; // {5} 
}


export function ratInAMaze(maze) { 
    const solution = []; 
    for (let i = 0; i < maze.length; i++) { // {1} 
        solution[i] = []; 
        for (let j = 0; j < maze[i].length; j++) { 
            solution[i][j] = 0; 
        } 
    } 
    if (findPath(maze, 0, 0, solution) === true) { // {2} 
        return solution; 
    } 
    return 'NO PATH FOUND'; // {3} 
}

function findPath(maze, x, y, solution) { 
    const n = maze.length; 
    if (x === n - 1 && y === n - 1) { // {4} 
        solution[x][y] = 1;
        return true; 
    } 
    if (isSafe(maze, x, y) === true) { // {5} 
        solution[x][y] = 1; // {6} 
        if (findPath(maze, x + 1, y, solution)) { // {7} 
            return true; 
        } 
        if (findPath(maze, x, y + 1, solution)) { // {8} 
            return true; 
        } 
        solution[x][y] = 0; // {9} 
        return false; 
    } 
    return false; // {10} 
}
function isSafe(maze, x, y) { 
    const n = maze.length; 
    if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) { 
        return true; // {11} 
    } 
    return false; 
}