// 斐波那契数列
// const fib = function(n){
//     if(n === 1)return 1
//     if(n === 2)return 1
//     return fib(n-1) + fib(n - 2)
// }
// const fibSave = function(n){
//     if(n<1)return 0
//     const memo = []
//     return helper(n, memo)
// }
// const helper = function(n, memo){
//     if(n=== 1 || n=== 2)return 1
//     if(memo[n]>0)return memo[n]
//     memo[n] = helper(n-1, memo) + helper(n-2, memo)
//     return memo[n]
// }
// const fibFor = function(n){
//     if(n < 1)return 0
//     if(n === 1 || n === 2)return 1
//     let cur = 1,  pre = 1
//     const table = []
//     table[1] = 1
//     table[2] = 1
//     for(let i=3; i<=n; i++){
//         table[i] = table[i-1] + table[i-2]
//     }
//     return table[n]
// }
const fibForUpdate = function(n){
    if(n < 1)return 0
    if(n === 1 || n === 2)return 1
    let cur = 1, pre = 1
    for(let i=3; i<=n; i++){
        let sum = cur + pre;
        pre = cur
        cur = sum
    }
    return cur
}

// 凑零钱问题
const coins = [1, 3, 5]
const dp = function(n){
    if(n === 0)return 0
    if(n<0)return -1
    let min = Number.MAX_SAFE_INTEGER
    let res
    for(let coin of coins){
        console.log('coin', coin)
        let subproblem = dp(n - coin)
        if(subproblem === -1)continue
        console.log('subproblem', subproblem)
        console.log('res -------', res)
        res = Math.min(min, 1 + subproblem)
    }
    return res !== min? res : -1
}
