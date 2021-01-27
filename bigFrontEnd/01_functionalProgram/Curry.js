// 柯里化
// 解决硬编码

// function checkAge (min, age){
//     return age >= min
// }

// console.log(checkAge(18, 33))
// console.log(checkAge(18, 23))
// console.log(checkAge(22, 23))

// function checkAge (min){
//     return function(age){
//         return age >= min
//     }
// }

// let checkAge = (min) => (age => age >= min)

// let checkAge20 = checkAge(20)
// let checkAge18 = checkAge(18)

// console.log(checkAge18(19))
// console.log(checkAge20(19))

// 功能
// 传递部分参数， 返回一个可以继续接受其余参数的函数
// 将多元函数转为一元
// const _ = require('lodash')
// function getSum(a, b, c){
//     return a + b + c
// }
// const curried = _.curry(getSum)

// console.log(curried(1)(2)(3))
// console.log(curried(1, 2)(3))
// console.log(curried(1)(2, 3))

''.match(/\s+/g)
''.match(/\d+/g)
function match(reg, str){
    return str.match(reg)
}