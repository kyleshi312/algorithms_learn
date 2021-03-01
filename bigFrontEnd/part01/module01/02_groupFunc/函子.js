// 为什么 函子 建立再范畴论的基础上

const { rangeRight } = require("lodash")
const fp = require('lodash/fp')
// 控制副作用
// 处理异常  异步作用 

// 普通对象 维护一个值 提供一个map方法 值永远不暴露
// class Constructer{
//     constructor(value){
//         this._value = value
//     }
//     map(fn){
//         return new Constructer(fn(this._value))
//     }
// }

// let r = new Constructer(5)
// .map(x => x+1)
// .map(x => x * x);
//  console.log('rwwww', r)

// class Constructer{
//     static of(val){
//         return new Constructer(val)

//     }
//     constructor(value){
//         this._value = value
//     }
//     map(fn){
//         return Constructer.of(fn(this._value))
//     }
// }

// let r = Constructer.of(5)
// .map(x => x+4)
// .map(x => x*x)


// 传入 undefined
// Constructer.of(null)
// .map(x => x.toUpperCase())
// console.log(r)

// 盒子 里面有个值 


// MayBe 函子

// 对外部空值做处理

class MayBe{
    static of(val){
        return new MayBe(val)
    }
    constructor(val){
        this._value = val
    }
    map(fn){
        return this.isNothing()? MayBe.of(null) : MayBe.of(fn(this._value))
    }
    isNothing(){
        return this._value == null
    }
}

// let r = MayBe.of(null)
// .map(x => x.toUpperCase())
// console.log(r)

// let r = MayBe.of(null)
// .map(x => x.toUpperCase())
// console.log(r)

// Either函子
// 传入null 时 错误不可以定位
// 给出有效错误信息

// class Left{
//     static of (value) {
//         return new Left(value)
//     }
//     constructor(value){
//         return this._value = value
//     }
//     map (fn){
//         return Left.of(fn(this._value))
//     }
// }
// class Right{
//     static of (value) {
//         return new Right(value)
//     }
//     constructor(value){
//         return this._value = value
//     }
//     map (fn){
//         return this
//     }
// }

// let r1 = Right.of(12).map(x => x+ 2)
// let r2 = left.of(12).map(x => x+ 2)

// function parseJSON(str){
//     try{
//         return Right.of(JSON.parse(str))
//     } catch(e){
//         return Left.of({error: e.message})
//     }
// }
// console.log(r1)
// console.log(r2)

// IO函子
// 内部的value 是个函数

// class IO{
//     static of(x){
//         return new IO(function(){
//             return x
//         })
//     }
//     constructor(fn){
//         this._value = fn
//     }
//     map(fn){
//         return new IO(fp.flowRight(fn, this._value))
//     }
// }


// let r =IO.of(process).map(p => p.execPath)
// console.log()

// task函子

// folktale

// const {compose, curry} = require('folktale/core/lambda')
// const { toUpper, first} = require('lodash/fp')
// let f = curry(2, (x, y) => {
//     return x + y
// })

// console.log(f(1, 2))
// console.log(f(1)(2))

// let f = compose(toUpper, first)

// console.log(f(['one', 'tow']))
// 2.0

// const fs = require('fs')
// const {task} = require('folktale/concurrency/task')
// const {split, find} = require('lodash')
// function readFile(filename){
//     return task(resolver => {
//         fs.readFile(filename, 'utf-8', (err, data)=>{
//             if(err)resolver.reject(err)

//             resolver.resolve(data)
//         })
//     })
// }

// readFile('package.json')
// .map(split('\n'))
// .map(find(x => x.includes('version')))
// .run()
// .listen({
//     onRejected: err => {
//         console.log(err)
//     },
//     onResolved: value => {
//         console.log(value)
//     }
// })


// Monad函子

let readFile = function(filename){
    return new IO(function(){
        return fs.readFileSync(filename, 'utf-8')
    })
}
let print = function (x){
    return new IO(function(){
        console.log(x)
        return x
    })
}

let cat = fp.flowRight(print, readFile)

let r = cat('package.json')._value()
// IO(IO(x))

console.log(r)
class IO{
    static of(x){
        return new IO(function(){
            return x
        })
    }
    constructor(fn){
        this._value = fn
    }
    map(fn){
        return new IO(fp.flowRight(fn, this._value))
    }
    join() {
        return this._value
    }
}

