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

''.match(/\s+/g)
''.match(/\d+/g)
function match(reg, str){
    return str.match(reg)
}

const curry = function(fn){
    return function CurriedFn(...args){
        console.log('fn.length', fn.length)
        if(fn.length > args.length){
            return function(){
                console.log(...args)
                return CurriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return fn(...args)
    }
}
// function curry (func) {
//     // 取名字是为了下面实参小于形参的时候用的
//     return function curriedFn(...args) {
//       // 判断实参和形参的个数
//       if(args.length < func.length) {
//         return function() {
//           // 等待传递的剩余参数，如果剩余函数的参数加上之前的参数等于形参，那么就返回func
//           // 第一部分参数在args里面，第二部分参数在arguments里面，要将两个合并并且展开传递（使用...）
//           // concat函数要合并两个数组，arguments为伪数组，所以用Array.from进行转换
//           return curriedFn(...args.concat(Array.from(arguments)))
//         }
//       }
//       // 如果实参大于等于形参的个数
//       // args是剩余参数，是个数组形式，而返回的时候要展开（使用...）
//       return func(...args)
//     }
//   }
  
function getSum(a, b, c){
    return a + b + c
}
const curried = curry(getSum)
// console.log(curried)
console.log(curried(1)(2)(3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2, 3))
