// 纯函数
// 相同的输入 始终得到相同的输出
// 描述输入输出的关系
// 数组的slice 不该百年原数组  纯函数
// splice 修改原数组   不纯的

// let array = [1,2,3, 4,5]
// console.log('lice', array.slice(0,3))
// console.log('lice', array.slice(0,3))
// console.log('lice', array.slice(0,3))
// console.log('array', array)

// console.log('splice', array.splice(0, 3))
// console.log('splice', array.splice(0, 3))
// console.log('splice', array.splice(0, 3))
// console.log('array', array)

// function getSum(n1, n2){
//     return n1 + n2
// }
// console.log('getSum', getSum(1,3))
// console.log('getSum', getSum(1,3))
// console.log('getSum', getSum(1,3))
// console.log('getSum', getSum(1,3))

// 好处
// 函数式编程中
// 不保存计算过程的结果

// lodash 使用
const { chain } = require('lodash')
const _ = require('lodash')
let array = ['aa', 'bb', 'cc', 'dd']
console.log(_.first(array))
console.log(_.last(array))
console.log(_.toUpper(_.last(array)))
console.log(_.reverse(array))
console.log(array)
let a = _.each(array, (n, i) => {
    console.log(n, i)
})
console.log('a', a)
// 柯里化
// first 

// 记忆函数

// const _ = require('lodash')
function getArea(r){
    console.log(r)
    return Math.PI * r * r
}

function memoize(f){
    let cache = {}
    return function(){
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f, arguments)
        return cache[key]
    }
}
let getAreaMemory = _.memoize(getArea)

console.log(getAreaMemory(4))
console.log(getAreaMemory(4))
console.log(getAreaMemory(4))
console.log(getAreaMemory(4))
// 纯函数好处
// 测试更方便
// 方便并行处理



// 副作用
// 没有任何可观察的副作用
// 依赖外部状态（全局变量，配置文件，用户输入） 变得不纯
// 降低函数的通用性