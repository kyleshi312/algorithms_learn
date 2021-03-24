### webpack编译流程
* tapable
  * 独立的库
  * 工作流
    * 实例化hook注册事件监听
      * hook本质是hook的实例对象
      * hook执行机制
        * 同步
          * SynckHook
          * SyncBailHook
          * SyncWaterfallHook
          * SyncLoopHook
        * 异步
          * 串行
            * AsyncSeriesHook
            * AsyncSeriesBailHook
            * AsyncSeriesWaterfallHook
          * 并行
            * AsyncParallerHook
            * AsyncParalleBailHook
        * Hook 普通钩子监听器之间相互 独立不干扰
        * BailHook熔断钩子，某个监听返回非undefined时后续不执行
        * WaterfallHook 瀑布钩子， 上一个监听的返回值可传递至下一个
        * LoopHook 循环钩子，如果未返回false，则一直执行
    * 通过hook触发事件监听
    * 执行懒编译生成的可执行代码
* 配置初始化
  * 事件驱动型事件流工作机制
  * 负责编译的complier
  * 负责创建bundles的compilation
* 内容编译
* 输出编译后内容

* 异步钩子
  * AsyncParallelHook
    * tap 同步
    * tapAsync 异步 调用回调callback
    * tapPromise 异步 返回Promise 实例 resolve
  * AsyncparallelBailHook
    * tapAsync 调用callback
* SyncHook 源码分析
  * SyncHook 大部分方法和属性继承于Hook，同时在自身上加一些针对自身特点的判断
* SyncHook 源码手写
  * SyncHook 继承自Hook的tap方法
    * 参数1 生成 name
    * 参数2 fn放入实例的taps中

### webpack 主流程
  


|  开始   | 开始  |
|  ----  | ----  |
| 合并配置  | compiler.beforeRun |
| 实例化compiler  | compiler.run |
| 设置Node文件读写的能力  | Compiler.beforeCompile |
| 通过循环挂载plugins  | Compiler.compile |
| 处理webpack内部默认的插件（入口文件）  | Compiler.make |