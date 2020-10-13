**入口命令（vue2—2.6.10）**
  * 思否 [源码学习说明01](https://segmentfault.com/a/1190000020598857) - vue3优化项目
  * _path_: `package.json`
  * `dev`: "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
    * _path_: `scripts/config.js`
    * `alias` - [别名](./vueSource/alias.md)
      * `Runtime+compiler` - web-full-dev
      * 编译器选择web/entry-runtime-with-compiler.js，
      * 静态文件生成位置dist/vue.js
  * **编译器设置**
    * _path_:`\src\platforms\web\entry-runtime-with-compiler.js`
      * [编译器选项](./vueSource/entry-runtime-with-compiler.md) - _重写$mount方法和compile方法_
        * 从./runtime/index中引入Vue，依然导出Vue
  * **初始化平台工具**
    * _path_:`src\platforms\web\runtime\index.js`
      *  runtime [挂载平台工具、初始化公共$mount、浏览器环境中初始化devtools](./vueSource/runtime_index.md) - 挂载平台（platform）使用的util 、directives、 components、patch方法
 *  **初始化全局API**
   * _path_:`\src\core\index.js`
        * 初始化全局API，劫持prototype的三个属性[initGlobalAPI、defineProperty](./vueSource/core_index.md) - 三个属性：$isServer、$ssrContext、FunctionalRenderContext、Vue.version
        * 
* **定义Vue构造函数，调用Vue.prototype._init**
  * _执行如下函数_
    * initMixin(Vue)
    * stateMixin(Vue)
    * eventsMixin(Vue)
    * lifecycleMixin(Vue)
    * renderMixin(Vue)