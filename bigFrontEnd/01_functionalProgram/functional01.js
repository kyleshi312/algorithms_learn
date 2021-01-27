// forEach()
// filter



const once = function(fn){
    let done = false
    return function(){
        if(!done){
            fn.apply(this, arguments)
        }
    }
}

const pay = once(function(n){
    console.log('pay money', n)
})

pay(232)
pay(44444)

// 使用高阶函数
// 抽象可以帮助屏蔽细节
// 代码更简洁
// 

// 模拟map
// 返回处理过的数组
// const map = (array, fn) => {
//     let arr = []
//     for(let n of array){
//         arr.push(fn(n))
//     }
//     return arr
// }

// const a = [1, 3,4,56]
// console.log(map(a,(n) => n*2))

// every
// 判断数组中每个元素是否都符合条件

// const every = (array, fn) => {
//     let res = true
//     for(let n of array){
//         res = fn(n)
//         if(!res)break
//     }
//     return res
// }

// // test
// let arr = [11, 12]
// let r = every(arr, v => v > 10)
// console.log(r)

// some
// 检测元素有否有满足条件的

// const some = (array, fn) =>{
//     let res = false
//     for(let n of array){
//         res = fn(n)
//         if(res)break
//     }
//     return res
// }

// // test
// const array = [2, 4, 5]
// let t = some(array, v => v%2 === 0)
// console.log(t)


