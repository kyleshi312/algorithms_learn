// 块 作用域
// 以前没有
// if(true){
//     let a  = 'dfd'
// }
// console.log(a)
// var 都是全局变量，外部会拿全局覆盖的作用域
// for(var i=0; i< 3; i++){
//     for(var i=0; i< 3; i++){
//         console.log(i)
//     }
// }
// for(let i=0; i< 3; i++){
//     for(let i=0; i< 3; i++){
//         console.log(i)
//     }
// }

const { includes, startsWith, endsWith } = require("lodash");

// var elements = [{}, {}, {}]
// for(let i = 0; i<elements.lastIndexOf; i++){
//     elements[i].onclick = function(){
//         console.log(i)
//     }
// }
// elements[0].click()

// 变量提升
// var 
// console.log(a)
// var a = 11

// console.log(a)
// let a = 11


// const a = 'mm'
// a = 44

// const obj = {}
// Object.freeze(obj)
// obj.a = 1

// 最佳实践： 不用var， 全部使用const

// 解构赋值

// const arr = [100, 200, 300]
// const [a, ...rest] = arr
// console.log(a, rest)

// const obj = {name: 1, age: 33}
// const {age: myAge, name: n} = obj
// console.log(myAge, n)
// var aName = 'world'
// console.log(`my name is ${aName}`)

// const name = 'tom ${}'

// 模板字符串 标签函数


// const str = console.log`str my`

// const name = 'tom'
// const gender = true

// function myTagFunc (strings, name, gender){
//     console.log(strings, name, gender)
//     return '123'
// }
// const result = myTagFunc`hey, ${name} is a ${gender}.`

// console.log(result)

// includes 
// startsWith
// endsWith
// const message = 'Error : foo is not undefined.'

// console.log(
//     message.startsWith('Error'),
//     message.endsWith('.'),
//     message.includes('foo')
// )

// parmas default value

// function foo(enable){
//     anable = enable === undefined?true: enable
// }
// function foo(aaa, enable = 1){
//     anable = enable === undefined?true: enable
// }

// function f(...rest){
//     console.log(rest)
// }
// f(1,2,3,4,5,6)

// const arr = ['a', 'b', 'c']

// console.log.apply(console, arr)
// console.log(...arr)
// const a = n => n

// const arr = [1,2,3,4,5,6,7]
// console.log(arr.filter(n => n%2))

// const obj = {

// }
// let m = {mm: 1}
// let obj1 = {
//     a: 1,
//     b: 2
// }
// let obj2 = {
//     a: 3,
//     d: 5
// }
// let obj3 = {
//     a: 65,
//     e: 11,
//     h:  m
// }
// let a =Object.assign(obj1, obj2, obj3)
// console.log(a, obj1, obj2)
// console.log(a.h === obj3.h)
// 用后面对象中的属性 覆盖第一个对象中的属性
// console.log(Object.is(+0, -0), +0 === -0)

// const person = {
//     name : 'zce',
//     age: 20
// }
// const personProxy = new Proxy(person, {
//     get(target, property){
//         return property in target?target[property]: 'default'
//         console.log(target, property)
//         return 100
//     },
//     set(target, property, value){
//         if(property === 'aget'){
//             throw new Error('s;yntax d--------')
//         }
//         target[property] = value
//     },
//     deleteProperty(target, property){
//         console.log('dele')
//     }
// })
// delete person.name
// // person.age = 1

// // proxy 
// // delete 
// // 方法调用
// const list = []
// const listProxy = new Proxy(list, {
//     set(target, property, value){
//         console.log(property)
//         return true
//     }
// })
// listProxy[0] = 22
// listProxy[3] = 223
// listProxy.push(4)

// console.log(list)
// let obj = {
//     name:1
// }
// console.log(Reflect.has(obj, 'name'))
// console.log(Reflect.ownKeys(obj,))


// class A {
//     constructor(){

//     }
//     say(){

//     }
// }

// const s = new Set()
// s.add(1).add(2).add(4)
// s.clear()
// s.forEach(i => console.log(i, s.has(i),s.delete(i)), s)

const obj = {
}

obj[true] = 'value'
obj[123] = 'value'
obj[{a:1}] = 'value'
console.log(obj)

const m = new Map()
m.set({a: 1}, 2)
m.set(true, 2)
console.log(m , m.has(true))

m.forEach((value, key) => console.log(value, key))

const cache = {}
cache['foo'] = Math.random()

cache['foo'] = Math.random()
cache[Symbol('ssss')] = 1
console.log(cache)