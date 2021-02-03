/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./async.js ***!
  \******************/
const promise = new Promise(function (resolve, reject){
    resolve(100)
    reject(new Error('there is error'))
})
promise.then(function(data){
    console.log(data)
}, function(err){
    console.log(err)
})
/******/ })()
;
//# sourceMappingURL=main.js.map