## Virtual DOM

### 课程目标
* 了解什么是虚拟 DOM，以及虚拟 DOM 的作用
* Snabbdom 的基本使用
* Snabbdom 的源码解析

### 什么是 Virtual DOM
* Virtual DOM(虚拟 DOM)，是由普通的 JS 对象来描述 DOM 对象

### 为什么要使用 Virtual DOM
* 前端开发刀耕火种的时代
* MVVM 框架解决视图和状态同步问题
* 模板引擎可以简化视图操作，没办法跟踪状态
* 虚拟 DOM 跟踪状态变化
* 参考 github 上 __[virtual-dom](https://github.com/Matt-Esch/virtual-dom)__  的动机描述
  * 虚拟 DOM 可以维护程序的状态，跟踪上一次的状态
  * 通过比较前后两次状态差异更新真实 DOM

### 案例演示
* jQuery-demo
* Snabbdom-demo
  
### 虚拟 DOM 的作用
* 维护视图和状态的关系
* 复杂视图情况下提升渲染性能
* 跨平台
  * 浏览器平台渲染DOM
  * 服务端渲染 SSR(Nuxt.js/Next.js)
  * 原生应用(Weex/React Native)
  * 小程序(mpvue/uni-app)等

### 虚拟 DOM 库
* Snabbdom
  * Vue.js 2.x 内部使用的虚拟 DOM 就是改造的 Snabbdom
  * 大约 200 SLOC (single line of code)
  * 通过模块可扩展
  * 源码使用 TypeScript 开发
  * 最快的 Virtual DOM 之一
* virtual-dom

### Snabbdom 基本使用
* 安装 parcel
```
npm i -D parcel-bundler

```
* 配置 scripts
```
  "scripts": {
    "dev": "parcel index.html --open",
    "build": "parcel build index.html"
  },

```

## Snabbdom **基本使用
### Snabbdom 文档
* 看文档的意义
  * 学习任何一个库都要先看文档
  * 通过文档了解库的作用
  * 看文档中提供的示例，自己快速实现一个 demo
  * 通过文档查看 API 的使用
* [Snabbdom 文档](https://github.com/snabbdom/snabbdom)
  * 当前版本 v2.1.0
  
### 导入 Snabbdom
* 安装 Snabbdom
  * npm intall snabbdom@2.1.0 
* 导入 Snabbdom
  * Snabbdom 的两个核心函数 init 和 h()
  * init() 是一个高阶函数，返回 patch()
  * h() 返回虚拟节点 VNode，这个函数我们在使用 Vue.js 的时候见过
  
### 导入 Snabbdom
* 文档中导入的方式
```
import { init } from 'snabdom/init'
init { h } from 'snabdom/h'
const patch = init()
```
* 实际导入的方式
  * parcel/webpack 4 不支持 package.json 中的 exports 字段

```
import { h } from 'snabdom/build/package/h'
import { init } from 'snabdom/build/package/init'
```
### snabbdom 
* init hook
  * 当一个虚拟节点被发现时，正在patch的过程中被invoke 并且是snabbdom还没有任何操作之前 例如：还没有根据vnode创建dom
* insert hook
  * vnode 插入到document中后立刻调用
  * 其他的patch cycle已经完成
  * 可以进行节点测量会是安全的，例如 getBoundingClientRect
  * 不会有任何节点的改变，来影响节点位置
* remove hook
  * 深入元素移除内部操作的hook
  * vnode从DOM移除后，会立即调用hook
  * 操作方法接收两个参数：vnode，callback
  * 可以通过callback来控制和延迟移除操作
  * hook的业务完成后，立即调用callback
  * 必须所有hook调用完callback后才可以移除元素
  * 仅当从父元素中删除子元素时触发
* destroy hook


### 模块的作用
* Snabbdom 的核心库并不能处理 DOM 元素的属性/样式/事件等， 可以通过注册 Snabbdom 默认提供的模块来实现
* Snabbdom 中的模块可以用来扩展 Snabbdom的功能
* Snabbdom 中的模块的实现是通过注册全局的钩子函数来实现的
  
### 官方提供的模块
* attributes
* props
* dataset
* class
* style
* eventlisteners

### 模块使用步骤
* 导入需要的模块
* init() 中注册模块
* h() 函数的第二个参数处使用模块

## Snabbdom 源码解析

### 如何学习源码
* 宏观了解
* 带着目标看源码
* 看源码的过程要不求甚解
* 调试
* 参考资料

### Snabbdom 的核心
* init() 设置模块，创建 patch() 函数
* 使用 h() 函数创建 JavaScript 对象(VNode)描述真实 DOM
* patch() 比较新旧两个 Vnode
* 把变化的内容更新到真实 DOM 树

### Snabbdom 源码
* [源码地址](https://github.com/snabbdom/snabbdom)
  * 当前版本：v2.1.0
* 克隆代码
  * git clone -b v2.1.0 --depth=1 https://github.com/snabbdom/snabbdom.git

### Snabbdom 源码解析
* h 函数介绍
  * 作用：创建 VNode 对象
  * Vue 中的 h 函数
```
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
```