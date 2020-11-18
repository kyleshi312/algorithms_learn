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