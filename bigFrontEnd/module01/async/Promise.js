const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise{
    constructor(executor){
        try{
            // MyPromise 实例传入的方法自动执行
            executor(this.resolve, this.reject)
        }catch(e){
            // 出现异常，抛出异常
            this.reject(e)
        }
    }
    // default waiting
    status = PENDING
    // success status
    value = undefined
    // fail status
    reason = undefined
    // save successful invoded func, 
    // set the value to array,as the multi invoke then of instance
    successCallback = []
    // save fail invoded func
    failCallback = []
    // when the status is fulfilled, invoke resolve func
    resolve= value => {
        // the status could only be changed once
        if(this.status !== PENDING)return
        // change status into success when invoke resolve func,
        this.status = FULFILLED
        // save successful callback val
        this.value = value
        // invoke successful func in cycle
        // as maybe this are many callbacks until the array is empty
        while(this.successCallback.length){
            this.successCallback.shift()()
        }
    }
    reject = reason => {
        // can't be changed when the status isn't PENDING
        if(this.status !== PENDING)return
        // when invoked the reject func, change the status into failed status
        this.status = REJECTED
        // fave fail callback reason
        this.reason = reason
        // invoke the failed callback (or more), until the saved array is empty
        while(this.failCallback.length){
            this.failCallback.shift()()
        }
    }
    then(successCallback, failCallback){
        // assign the default callback if there is not callback
        successCallback = successCallback?successCallback: value=>value
        failCallback = failCallback?failCallback: reason => {throw reason}
        // as the invoking of chain,we need return a instance
        let promise2 = new MyPromise((resolve, reject) => {
            // when the status have been fixed, and is succeful,
            // we invoke the successful callback
            if(this.status === FULFILLED){  
                // we start a timer, then we can get the return instance by ourselves
                setTimeout(() => {
                    // handle the successful callback error
                    try{
                        // get the return value from successful callback
                        let x = successCallback(this.value)
                        // judge the two types of the return value and handle it
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        // handle error
                        reject(e)
                    }
                })
                // when the status is fail
            } else if(this.status === REJECTED){
                // get the instance of our
                setTimeout(() => {
                    // handle the error
                    try{
                        // get the return value from the fail callback 
                        let x = failCallback(this.reason)
                        // handle the return value
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        // handle error
                        reject(e)
                    }
                })
            } else {
                // when invoking then func, if the status is not fixed,
                // we should save the callback func
                this.successCallback.push(() => {
                    // as above, the successful callback
                    setTimeout(() => {
                        try{
    
                            let x = successCallback(this.value)
                            // 
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
                
                this.failCallback.push(() => {
                    // as above, the fail callback
                    setTimeout(() => {
                        try{
                            let x = failCallback(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
            }
        })
        // as the invoking of chain, we return the MyPromise instance
        return promise2
    }
    // invoke the callback in it every time 
    // invoke then after invoke finally method
    finally(callback){
        // as we can invoke then func after invode finally
        // we need return a instance
        return this.then(value => {
            // handle the return value or instance by static  resolve method
            return MyPromise.resolve(callback()).then(() => value)
        }, reason =>{
            // handle the return value or instance by static  resolve method
            return MyPromise.resolve(callback()).then(reason => {throw reason})
        })
    }
    catch(failCallback){
        return this.then(undefined, failCallback)
    }
    // params: array
    // all element of array have been fixed when invoke then method
    // when there is a error , all func stop
    static all(array){
        // define the return array
        let res = []
        // 用来标记所有方法都已经完成
        let index=0
        // 返回一个实例，用于then方法调用
        return new MyPromise((resolve, reject) => {
            // 记录所有的函数都已完成，并储存执行结果
            function addData(key, value){
                res[key] = value
                index++
                if(index === array.length){
                    console.log('index', index)
                    resolve(res)
                }
            }
            // 循环执行传入的数组元素
            for(let i=0; i<array.length; i++ ){
                let cur = array[i]
                if(cur instanceof MyPromise){
                    // 如果元素是MyPromise 实例，则调用then方法，全部执行完成后修改all方法的执行状态
                    cur.then(value => addData(i, value), (reason) => reject(reason))
                } else {
                    // 保存普通value
                    addData(i, array[i])
                }
            }
            // 全部完成后，返回执行结果
            if(index === array.length){
                resolve(res)
            }
        })
    }
    static resolve(x){
        // 判断类方法的参数类型，如果是MyPromise,则直接返回实例
        if(x instanceof MyPromise){
            return x
        }
        // 参数为普通值时，包上MyPromise实例返回结果
        return    new MyPromise(function(resolve, reject){
            resolve(x)
        })
    }

}
// 判断then方法中，回调函数的类型，分别处理
function resolvePromise(promise2, x, resolve, reject){
    // 如果then方法的返回值等于成功或失败的回调，那么抛出异常
    if(promise2 === x){
        throw(new Error('sdaffdsafasdf'))
    }
    // 当回调的返回值是实例时，调用then方法处理
    if(x instanceof MyPromise){
        // x.then(resolve, reject)
        x.then(val => resolve(val), val => reject(val))
    } else {
        // 普通值直接返回
        resolve(x)
    }
}