class Compiler{
    constructor(vm){
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }
    compile(el){
        let childNodes  = el.childNodes
        Array.from(childNodes).forEach(node => {
            if(this.isElementNode(node)){
                this.compileElement(node)
            } else if(this.isTextNode(node)){
                // 文本节点
                this.compileText(node)
            }
            
            if(node.childNodes && node.childNodes.length){
                this.compile(node)
            }
        })
    }
    // 
    compileElement(node){
        let arr = Array.from(node.attributes)
        arr.forEach(attr => {
            let attrName = attr.name
            if(this.isDirective(attrName)){
                attrName = attrName.substr(2)
                let key = attr.value
                const attrNames = attrName.split(':')
                if(attrNames?.length>1){
                    this.addEListener(node, key, attrNames)
                } else {
                    this.update(node, key, attrName)
                }
            } else {
                console.log('attrrtt', attrName)
            }
        })
    }
    addEListener(node, key, attrNames){
        const _t = this
        //传递参数处理
        console.log('click -------', node, key, attrNames)
        // no params
        node.addEventListener(attrNames[1], function(){
            _t.vm.$options[key]()
        }, false)
    }
    update(node, key, attrName){
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }
    textUpdater(node,value, key){
        node.textContent = value
        new Watcher(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }
    htmlUpdater(node,value, key){
        node.innerHTML = value
        new Watcher(this.vm, key, (newValue) => {
            node.innerHTML = newValue
        })
    }
    onUpdater(node,value, key){
        node.addEventListener(value,  )
    }
    modelUpdater(node, val, key){
        node.value = val
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })

        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }
    
    compileText(node){
        const reg = /\{\{(.+?)\}\}/g
        let val = node.textContent
        // const matches = val.matchAll(reg)
        // console.log('matches', matches)
        if(reg.test(val)){
            let key = RegExp.$1.trim()
            console.log('match', val.match(reg))
            node.textContent = val.replace(reg, this.vm[key])
            // create watcher obj when data change ,view update
            console.log('node.textContent', node.textContent, val)
            new Watcher(this.vm, key, (newValue) => {
                node.textContent = val.replace(reg, newValue)
            })
        }
    }
    isDirective(attrName){
        // console.log('isDirective', `${JSON.stringify(attrName)}`, `${attrName}`.startsWith('v-'))
        return `${attrName}`.startsWith('v-')
    }   

    isTextNode(node){
        return node.nodeType === 3
    }
    isElementNode(node){
        return node.nodeType === 1
    }
}