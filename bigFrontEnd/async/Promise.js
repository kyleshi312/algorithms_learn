const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise{
    constructor(executor){
        try{
            executor(this.resolve, this.reject)
        }catch(e){
            this.reject(e)
        }
    }
    // default waiting
    status = PENDING
    // success
    value = undefined
    // fail
    reason = undefined
    successCallback = []
    failCallback = []
    resolve= value => {
        if(this.status !== PENDING)return
        // change status into success
        this.status = FULFILLED
        // save success val
        this.value = value
        // 
        // this.successCallback && this.successCallback(this.value)
        while(this.successCallback.length){
            this.successCallback.shift()()
        }
    }
    reject = reason => {
        if(this.status !== PENDING)return
        this.status = REJECTED
        // fave fail reason
        this.reason = reason
        // this.failCallback && this.failCallback(this.reason)
        while(this.failCallback.length){
            this.failCallback.shift()()
        }
    }
    then(successCallback, failCallback){
        successCallback = successCallback?successCallback: value=>value
        failCallback = failCallback?failCallback: reason => {throw reason}
        let promise2 = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED){  
                setTimeout(() => {
                    try{

                        let x = successCallback(this.value)
                        // 
                        // resolve(x)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                })
            } else if(this.status === REJECTED){
                // failCallback(this.reason)
                setTimeout(() => {
                    try{

                        let x = failCallback(this.value)
                        // 
                        // resolve(x)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                })
            } else {
                // pending
                // save suceessCall & failCallback
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try{
    
                            let x = successCallback(this.value)
                            // 
                            // resolve(x)
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try{
    
                            let x = failCallback(this.value)
                            // 
                            // resolve(x)
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
            }
        })
        return promise2
    }
    finally(callback){
        this.then(() => {
            callback()
        }, () =>{
            
        })
    }
    static all(array){
        let res = []
        let index=0
        return new MyPromise((resolve, reject) => {
            function addData(key, value){
                res[key] = value
                index++
                if(index === array.length){
                    console.log('index', index)
                    resolve(res)
                }
            }
            for(let i=0; i<array.length; i++ ){
                let cur = array[i]
                if(cur instanceof MyPromise){
                    cur.then(value => addData(i, value), (reason) => reject(reason))
                } else {
                    addData(i, array[i])
                }
            }
            if(index === array.length){
                resolve(res)
            }
    })
    }
    static resolve(x){
        if(x instanceof MyPromise){
            // x.then(resolve, reject)
            return x
        }
        return    new MyPromise(function(resolve, reject){
            resolve(x)
        })
    }

}

function resolvePromise(promise2, x, resolve, reject){
    if(promise2 === x){
        throw(new Error('sdaffdsafasdf'))
    }
    if(x instanceof MyPromise){
        // x.then(resolve, reject)
        x.then(val => resolve(val), val => reject(val))
    } else {
        resolve(x)
    }
}