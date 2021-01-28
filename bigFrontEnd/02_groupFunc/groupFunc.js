// 组合
// function compose(f, g){
//     return function(value){
//         return f(g(value))
//     }
// }


// const last = compose(first, reverse)
// function reverse(arr){
//     return arr.reverse()
// }

// function first (arr){
//     return arr[0]
// }

// console.log(last(['john', 'jack', 'fasdf']))

const _ = require('lodash')

// function reverse(arr){
//     return arr.reverse()
// }

// function first (arr){
//     return arr[0]
// }

// const toUpper = s => s.toUpperCase()



// lodash flowRight

// function compose(...args){
    //     return function(val){
        //         return args.reverse().reduce(function(acc, fn){
            //             return fn(acc)
            //         }, val)
            //     }
            // }
            
// const compose = (...args) => (val => args.reverse().reduce((acc, fn) => fn(acc),val))
// const f =compose(toUpper, first, reverse)

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
// const f = _.flowRight(_.toUpper,_.flowRight( _.first, _.reverse))
// console.log(f(['df', 'dfdf', 'aasdf']))
const trace = _.curry((tag, v) => {
    console.log(tag, v)
    return v
})

// 组合的调试
// const map = _.curry((fn, array) => _.map(array, fn))
// const split = _.curry((sep, str) => _.split(str, sep))
// const join = _.curry((sep, array) => _.join(array, sep))
// const f = _.flowRight(join('-'),trace('map'),map(_.toLower),trace('spli'), split(' '))
// console.log(f('A B C'))

// lodash 
// FP model
// 函数有限， 数据之后
const fp = require('lodash/fp')

// const f=fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
// console.log(f('A B C'))

// console.log(_.map(['333', '8', '10'], parseInt))
console.log(fp.map(parseInt,['333', '8', '10'] ))
fp.map



// pointFree 模式

// 运算过程抽象为函数，不关心数据

// const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)
// console.log(f('hello     world'))

// const firstLetterToUpper = fp.flowRight(fp.join(', '),fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
const firstLetterToUpper = fp.flowRight(fp.join(', '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))
console.log(firstLetterToUpper('wwww dddd ffff'))

