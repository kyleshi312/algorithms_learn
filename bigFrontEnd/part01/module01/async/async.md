- 调用者定义，执行者执行的函数
- 事件机制
- 订阅机制
# Promise
- Pending
- Fullfilled > onFullfilled
- Rejected > onRejected
# 基本用法
```
    const promise = new Promise(function(resolve, reject){
        resolve(100)
        //  reject(new Error('promise rejected'))
    })
```