### 也就是通过new Vue()生成html做了哪些事情
  ##### 比如使用如下代码
    var a = new Vue({
        data: {
            world: ' this is a big world www' 
        }
    }).$mount('#app')
* initMixin - 初始化_init函数
    * 生命周期 - initLifecycle
    * 事件 - initEvents
    * 渲染 - initRender
    * callHook(vm, 'beforeCreate');
    * 注入 - initInjections（resolve injections before data/props）
    * 状态 - initState
    * initProvide - initProvide
    * callHook(vm, 'created');
* stateMixin - 初始化state prop
  * props 增加拦截 提示readonly 不可以直接修改 - 拦截修改
  * instance root data - 不可以替换 - 拦截修改
  * 定义prototype上$set $delete $watch
* eventsMixin - prototype上添加$on方法，可以添加事件监听
  * 接收 event数组进行循环添加事件
* lifecycleMixin - prototype上初始化_update $forceUpdate $destroy
  * _update
    * 根据vm._vnode 来判断节点处理方式
      * initial render - vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      * `updates - vm.$el = vm.__patch__(prevVnode, vnode);`    
      * update __vue__ reference
      ```      
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
      ```
  * $forceUpdate
    * 强制_watcher.update()调用
        ```
        if (vm._watcher) {
            vm._watcher.update();
        }
  * $destroy
    * `callHook(vm, 'beforeDestroy')`
    * 通过remove、teardown销毁节点
        ```
      if (parent && !parent._isBeingDestroyed 
            && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
    * // fire destroyed hook - __触发destroyed回调__
      * `callHook(vm, 'destroyed');`
    * vm.$off() - 关闭所有实例监听
  * renderMixin 
    * installRenderHelpers - 安装与运行时有帮助的helper
    * 定义`Vue.prototype.$nextTick`
    * 定义`Vue.prototype._render`
  * initGlobalAPI 
* 调用_init 方法
  * path: _src/core/instance/init.js_
  ```
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  ```
    * 作用如下；
      * [Vue选项的规范化](http://caibaojian.com/vue-design/art/4vue-normalize.html)
      * [Vue选项的合并](http://caibaojian.com/vue-design/art/5vue-merge.html)
    * mergeOptions - path: _core/util/options.js_
  
