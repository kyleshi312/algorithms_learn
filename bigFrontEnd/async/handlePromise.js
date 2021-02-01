// promise 就是一个类，executor exec,传递一个执行器进去
// 有三种状态 成功 fulfilled 失败 rejected 等待 pending
// pending => fulfilled
// pending => rejected


// 状态确定不可更改
// resolve 和 reject 用来更改状态的
// resolve => fulfilled
// reject => rejected
// then inside judge status
// if fulfilled invoke fulfilled
// if rejected invoke rejected

// then method is difined on the prototype

// then if success return successfull data
// if fail return fail error
// then in the prototype object 
// two params 
// multi invoke then method
// const MyPromise = require('./Promise')
// 链式调用
// 把 返回值传入下一个then
// let promise = new MyPromise((resolve, reject) => {
    // throw(new Error('executrorrr '))
    // setTimeout(function(){
        // reject('失败')
        // resolve('sssssssssss')
    // })
    // }, 2000)
    // throw(new Error('executor error ------------ '))
        // reject('fail')
    // }, 2000)
    // reject('fail')
    // resolve('success')
// })
// function other(){
//     return new MyPromise(function(resolve){
//         resolve('other 222222222')
//     })
//     // .then()
// }
// // promise.then().then().then().then().then()
// promise.then().then().then().then().then()
// .then(function(v){
//     console.log('ooo', v)
// }, function(r){
//     console.log('rrrrrrrrr',r)
// })
function p1 (){
    return new MyPromise(function(resolve, reject){
        setTimeout(function(){
            resolve('p1')
        }, 2000)
    })
}
// function p2(){
//     return new MyPromise(function(resolve, reject){
//         resolve('p2')
//     })
// }

// MyPromise.all(['a', 'b', p1(), p2()]).then(res => console.log(res))
MyPromise.resolve(2).then(val => console.log(val))
MyPromise.resolve(p1()).then(val => console.log(val))