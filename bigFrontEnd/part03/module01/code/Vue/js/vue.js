class Vue{
    constructor(options){
        //tongguo 属性保存选项的数据

        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = options.el
        // 把data中的成元转换为setter/geeter
        this._proxyData(this.$data)
        // invoke observer
        new Observer(this.$data)
        // invode compiler  
        new Compiler(this)
    }

    _proxyData(data){
        // forEach all property
        Object.keys(data).forEach(key => {
            // add property into instance
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get (){
                    return data[key]
                },
                set(newValue){
                    if(newValue === data[key]){
                        return 
                    }
                    data[key] = newValue
                }
            })
        })
    }
}