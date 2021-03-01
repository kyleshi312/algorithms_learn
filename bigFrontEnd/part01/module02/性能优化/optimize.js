// 应用和可达
// let obj = {name: 'xm'}
// let ali = obj

// function objGroup(obj1, obj2) {
//     obj1.next = obj2
// }


// 引用计数-------------------------
// const user1 = {age: 11}
// const user1 = {age: 12}
// const user1 = {age: 13}

const nameList = [user1.age, user2.age, user3.age,]
function fn(){
    const num1 = 1  // 作用域内 0
    const num2 = 2 // 作用域内  0
    // num1 = 1  //window 1
    // num2 = 2 //window  1
}
fn()

// 引用计数的缺点
// 对象之间循环引用
// 从全局找不到，但是内部有引用，引用计数无法操作
// 
function fn(){
    const obj1= {}
    const obj2= {}
    obj1.n =obj2
    obj2.n = obj1
}
fn()