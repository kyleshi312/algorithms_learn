class Observer{
    constructor(data){
        this.walk(data)
    }
    walk(data){
        if(!data || typeof data !== 'object') {
            return
        }
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }
    defineReactive(obj, key, val){
        const _this = this
        let dep = new Dep()
        this.walk(val)
        Object.defineProperty(obj, key, {
            enumerable: true, 
            configurable: true,
            get(){
                Dep.target && dep.addSub(Dep.target)
                // console.log('dep', dep)
                return val
            },
            set(newVal){
                if(newVal === val){
                    return
                }
                val = newVal
                _this.walk(newVal)
                dep.notify()
            }   
        })
    }
}