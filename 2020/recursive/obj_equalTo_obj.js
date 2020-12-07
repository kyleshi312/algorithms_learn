export const   isObjectValueEqual = (a, b) => {
    // 判断两个对象是否指向同一内存，指向同一内存返回true
    if (a === b) return true
    if(!a || !b){
      return false
    }
    // console.log('a',a)
    // console.log('b',b)
    // 获取两个对象键值数组
    let aProps = Object.getOwnPropertyNames(a)
    let bProps = Object.getOwnPropertyNames(b)
    // console.log('aProps.length',aProps.length)
    // console.log('bProps.length', bProps.length)
    // console.log('Object.keys(a)', Object.keys(a))
    // 判断两个对象键值数组长度是否一致，不一致返回false
    if (aProps.length !== bProps.length) return false
    // 遍历对象的键值
    for (let prop of Object.keys(a)) {
      // 判断a的键值，在b中是否存在，不存在，返回false
      if (b.hasOwnProperty(prop)) {
        // 判断a的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回false
        if (typeof a[prop] === 'object') {
          // console.log('isObjectValueEqual(a[prop], b[prop])', isObjectValueEqual(a[prop], b[prop]))
          if (!isObjectValueEqual(a[prop], b[prop])) return false
        } else if (a[prop] !== b[prop]) {
          // console.log('a[prop]',a[prop])
          // console.log('b[prop]',b[prop], a[prop] !== b[prop])
          return false
        }
      } else {
        return false
      }
    }
    return true
  }
  

function getType (obj){
    return Object.prototype.toString.call(obj).split(' ')[1].split(']')[0].toLowerCase()
}