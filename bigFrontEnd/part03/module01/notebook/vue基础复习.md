* Class 和 Style 绑定
  * class列表和内联样式，在vue模板语法中，除了字符串，还可以是对象和数组
  * 对象语法
    * 行内直接写 :class="{ active: isActive, 'text-danger': hasError }"
    * 使用计算属性 :class="classObject"
  * 数组语法
    * 三目式判断 :class="[isActive ? activeClass : '', errorClass]"
    * 与data 联用 :class="[activeClass, errorClass]"
    * 数组内嵌套对象 :class="[{ active: isActive }, errorClass]"
  * 用在组件上
    * 用在组件上的class列表，会直接作用到组件根节点上
    * 也可以使用:class语法
* 绑定内联样式
  * 对象语法
    * 直接绑定 :style="{ color: activeColor, fontSize: fontSize + 'px' }"
    * 绑定对象 :style="styleObject"
  * 数组语法
    * 多样式对象 :style="[baseStyles, overridingStyles]"
  * 自动添加前缀
    * Vue.js 会自动侦测并添加相应的浏览器前缀
  * 多重值
    * 使用数组为同一属性名添加多个值 :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
    * 浏览器会挑选最后一个可以支持属性值，上例如果支持flex，则会只用flex
* 条件渲染/列表渲染
  * 条件渲染
    * v-if
      * v-else 放在v-if或v-else-if随后的同级元素上
      * v-else-if类似
      * 只会渲染value为truthy的节点
      * 可以使用不可见元素template进行元素分组
    * 用 key 管理可复用的元素
      * 同级元素使用v-if切换，vue会最大限度复用相同元素
      * 如果有不需要复用的使用key标记
    * v-show
      * 不删除元素节点，只切换了display属性
      * 没有v-else 和template用法
    * v-if vs v-show
        * v-if
          * 会适当销毁子组件内的属性和监听事件
          * 初始化值为false 什么都不会渲染
          * 切换时性能开销大
        * v-show
          * 初始化时，不管value值是什么，都会渲染出来
          * 只切换css属性
          * 初始化开销大，切换开销小
  * 列表渲染
    * 用 v-for 把一个数组对应为一组元素
      * item in items 形式
      * 绑定:key可以减少渲染性能开销
      * 可以遍历对象 v-for="(value, name, index) in object"
        * 顺序按照Object.keys
        * 不同的渲染引擎效果可能会不同
      * vue 会根据被监听的数组变化，实时更新视图
        * push()
        * pop()
        * shift()
        * unshift()
        * splice()
        * sort()
        * reverse()
      * 替换数组
      * 注意事项
        * 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。深入响应式原理中有相关的讨论。
      * 显示过滤/排序后的结果
        * 计算属性
        * 使用方法过滤items v-for="n in even(set)"
      * 在 v-for 里使用值范围
        * v-for="n in 10"
      * 在 template 上使用 v-for
        * 类似于 v-if，你也可以利用带有 v-for 的 template 来循环渲染一段包含多个元素的内容。


  ```
    <ul>
        <template v-for="item in items">
            <li>{{ item.msg }}</li>
            <li class="divider" role="presentation"></li>
        </template>
    </ul>
  ```
    * v-for 与 v-if 一同使用
      * 注意我们不推荐在同一元素上使用 v-if 和 v-for。更多细节可查阅风格指南。
      * 当它们处于同一节点，v-for 的优先级比 v-if 更高，
* 表单
  * v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
    * text 和 textarea 元素使用 value property 和 input 事件；
    * checkbox 和 radio 使用 checked property 和 change 事件；
    * select 字段将 value 作为 prop 并将 change 作为事件。
  *  