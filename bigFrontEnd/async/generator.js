// function ajax(url){
//     console.log('ajaj')
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', url)
//         xhr.responseType = 'json'
//         xhr.onload = function(){
//             if(this.state === 200){
//                 resolve('43434')
//             }else{
//                 reject(new Error('err happen'))
//             }
//         }
//         xhr.send()
//     })
// }

const { reject } = require("lodash");

// function * main(){
//     const users = yield ajax('test.json')
//     console.log('users', users)
//     const test22 = yield ajax('test22.json')
//     console.log('test22', test22)
// }
// const g = main()
// const res = g.next()
// console.error('ressss', res)
// function handleRes(res){
//     res.value.then(function(d){
//         console.log('res.th', d)
//         const r2 = g.next(d)
//         if(r2.done)return
//         handleRes(r2)
//     })
//     .catch(function(err){
//         console.error('catch', err)
//     })
// }
// res.value.then(function(d){
//     console.log('res.th', d)
//     const r2 = g.next()
//     if(r2.done)return
//     r2.value.then(function(){

//     })
//     .catch(function(err){
//         console.error('r2', err)
//         g.next('catch nnnn'+ err)

//     })
// })
// .catch(function(err){
//     console.error('catch', err)
// })

// function* foo(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield (y / 3);
//     return (x + y + z);
//   }
//   const a = foo(6)

//   console.log('a1',a.next())
//   console.log('a2',a.next(6))
//   console.log('a3',a.next(4))


// promise 就是一个类，
// 有三种状态 成功fulfilled 失败rejected pending
// 状态确定不可更改
// resolve 和 reject 用来更改状态的
// then inside judge status
// if fulfilled invoke fulfilled
// if rejected invoke rejected
// then if success return successfull data
// if fail return fail error
// then in the prototype object 
// two params 

const MyPromise = require('./Promise')
console.log(MyPromise)
let promise = new MyPromise((resolve, reject) => {
    resolve('success')
})

promise.then((val)=>{
    console.log(val)
}, reason => {
    console.log(reason)
})