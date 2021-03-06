// 要理解递归，首先要理解递归
function understandRecursion(){
    const recursionAnswer = confirm('Do you understand recursion?')
    if(recursionAnswer === true){
        return true
    }
    understandRecursion()
}

// 每个递归都必须有基线条件——停止点

// 计算一个数的阶乘
// difinition: n!
// 5!: 5*4*3*2*1

function factialIteration(number){
    if(number < 0)return0
    let total = 1
    for(var i=number; i>0; i--){
        total *= i
    }
    return total
}
console.log('factialIteration 5', factialIteration(5))
console.log('factialIteration 10', factialIteration(10))


// n的阶乘 = n * n-1的阶乘
function factorial(n){
    console.log('n', n)
    console.trace();
    if(n === 1 || n === 0){
        return 1
    }
    return n * factorial(n-1)
}
console.log('factorial(3)', factorial(3))
// n * factorial(n-1)
// n * n-1 * factorial(n-2)


// 迭代求斐波那契数
function fb(n){
    if(n === 0)return 0
    if(n === 1 || n === 2) return 1
    let fib1 = 1,
        fib2 = 1,
        fibTotal = 0;
    for(var i=2; i<n; i++){
        fibTotal = fib1 + fib2
        fib1 = fib2
        fib2 = fibTotal
    }
    return fibTotal
}

console.log('fb 6', fb(6))

// 递归求斐波那契数
function fibonacci(n){
    if(n < 1)return 0
    if(n<=2)return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log('fibonacci(5)', fibonacci(5))

// 递归求斐波那契数， 记忆结果
function fibonacciSave(n){
    if(n < 1)return 0
    if(n<=2)return 1
    // var obj = {}
    // var n1 = fibonacciSave(n-1)
    // var n2 = fibonacciSave(n-2)
    // if(obj[n-1]){
    //     n1 = obj[n-1]
    // }else{
    //     obj[n-1] = n1
    // }
    // if(obj[n-2]){
    //     n2 = obj[n-2]
    // }else{
    //     obj[n-2] = n2
    // }
    // return n1 + n2
    var memo = [0, 1]
    if(memo[n])return memo[n]
    return memo[n] = fibonacciSave(n-1) + fibonacciSave(n-2)
}

console.log('fibonacciSave(5)', fibonacciSave(5))
console.log('fibonacciSave(10)', fibonacciSave(10))

function fibonacciMemoization(n) { 
    const memo = [0, 1]; // {1} 
    const fibonacci = (n) => { 
    if (memo[n] != null) return memo[n]; // {2} 
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2); // {3} 
    }; 
    return fibonacci(n);
}
console.log('fibonacciMemoization(10)', fibonacciMemoization(10))

function checkTime(func){
    var a = Math.floor(Math.random() * 100)
    console.time(a)
    func(Array.from(arguments).slice(1))
    console.log(func(Array.from(arguments).slice(1)))
    console.timeEnd(a)
}

checkTime(fibonacciMemoization, 25)
checkTime(fibonacci, 25)
checkTime(fb, 25)
