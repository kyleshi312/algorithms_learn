class Watcher{
    constructor(vm, key, cb){
        this.vm = vm
        this.key = key
        // cb update the view
        this.cb = cb

        // save watcher obj into property target
        // 
        Dep.target = this

        // invoke get invoke addSub
        this.oldValue = vm[key]
        
        Dep.target = null
    }
    // when data change update view
    update(){
        let newValue = this.vm[this.key]
        if(this.oldValue === newValue){
            return
        }
        this.cb(newValue)
    }
}
