class Compiler{
    constructor(vm){
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }
    compile(el){
        let childNodes  = el.childNodes
        Array.from(childNodes).forEach(node => {
            // 文本节点
            if(this.isElementNode(node)){
                this.compileElement(node)
            } else if(this.isTextNode(node)){
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
                this.update(node, key, attrName)
            } else {
                console.log('attrrtt', attrName)
            }
        })
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
    modelUpdater(node, val, key){
        node.value = val
        console.log('modelUpdate', node)
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })

        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }

    compileText(node){
        const reg = /\{\{(.+?)\}\}/
        let val = node.textContent
        if(reg.test(val)){
            let key = RegExp.$1.trim()
            node.textContent = val.replace(reg, this.vm[key])
            // create watcher obj when data change ,view update

            new Watcher(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }
    isDirective(attrName){
        console.log('isDirective', `${JSON.stringify(attrName)}`, `${attrName}`.startsWith('v-'))
        return `${attrName}`.startsWith('v-')
    }   

    isTextNode(node){
        return node.nodeType === 3
    }
    isElementNode(node){
        return node.nodeType === 1
    }
}