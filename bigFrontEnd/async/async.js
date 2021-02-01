// const promise = new Promise(function (resolve, reject){
//     // resolve(100)
//     reject(new Error('there is error'))
// })
// promise.then(function(data){
//     console.log(data)
// }, function(err){
//     console.log(err)
// })
// console.log('weinsadf')

// const { reject } = require("lodash")

// 使用 Promise 封装ajax

function ajax(url){
    console.log('ajaj')
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = function(){
            if(this.state === 200){
                resolve('43434')
            }else{
                reject(new Error('err happen'))
            }
        }
        xhr.send()
    })
}
// const promise1 = ajax('asdf')
// const promise2 = ajax('asdf')
// console.log('333', promise1 === promise2)
// ajax('/api/foo.json').then(function(res){
//     console.log('res',res)
// })
// .then(function(d){
//     console.log('dddddddddd', d)
//     return ajax('/api/foo.json')
// })
// .catch(function(err){
//     console.log('rrrr catch', err)

// })

// 链式调用
// Promise的then方法会返回一个全新的Promise对象
// ========= 因为每次调用会返回new 所以不一样
// 后面的then方法就是在为上一个then返回的Promise注册回调
// =============如果返回new Promise 后面的.then 也按照promise来等候回调
// 前面then方法中回调函数的返回值会作为后面then方法回调的参数
// =========  如果前面返回 的是具体结果，不是new Promise对象，后面的.then, 会直接在resolve中处理 返回结果
// 如果回调中返回的是Promise，那后面then方法的回调会等待他的结果
// =================

// 异常处理
// onRejected 
// catch 整个链条 的捕获


// 静态方法
// Promise resolve 
// 快速把一个值转化promise对象

// Promise reject
// 建立一个失败的对象

// var promise = ajax('dd')
// var p2 = Promise.resolve(promise)
// console.log(promise === p2)

// 并行执行
// Promise.all
// 必须全部执行完毕后，才返回结果
// 一个失败，则失败
var promise = Promise.all([ajax('aaa'), ajax('bbb'), ajax('cccc')])

// Promise.race
// 跟着第一个任务完成，而完成



// Promise 
// 执行时序 / 宏任务 / 微任务 promise MutationObserver process.nexttick

// console.log('global start')
// 宏任务 
// setTimeout(function(){
//     console.log('timeout')
// })
// 微任务 
// Promise.resolve()
// .then(function(){
//     console.log('then')
// })

// console.log('g end')

// Generator 函数

function * main(){
    const users = yield ajax('/api')
    console.log(users)
}
const g = main()

const res = g.next()




