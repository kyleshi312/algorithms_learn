### webpack
模块化是必要的 
* 设想
    * 开发阶段模块化 =》 生产阶段
    * 新特性编译
    * 模块化JS打包
    * 支持不同类型的资源模块
* 模块打包工具
    * webpack
        * 模块打包 
        * 模块加载器 - module loader
        * 代码拆分 - code spliting
        * 资源模块 - Asset Module
        * 前端整体的模块化
    * webpack 快速上手
        * webpack webpack-cli
    * 配置文件
        * src/index.js =》 dist/index.js
        * webpack.config.js
            * entry: ./src/main.js
            * output
                * filename: bundle.js
                * path: path.join(__dirpath, 'output')
    * 工作模式
        * --mode
            * --mode development
            * --mode none
            * 默认 production
            * config.js mode: ''
    * 打包结构运行原理
        * 模块放在一个文件，并且保持模块化运行规则
    * 资源模块加载
        * 内部loader只能处理js
        * 安装 css-loader 将css代码push 数组中
            * style-loader
            * 多个loader从后往前执行
            * loader是webpack加载资源的核心
            * loader可以帮助我们加载任何类型资源
    * 导入资源模块
        学习思想
        * js驱动资源，驱动整个前端资源
        * js import ./main.css'
        * 载入任何资源，代码载入
    * 文件资源加载器
        * 打包的资源文件位置 - publicPath
    * URL 加载器
        * data URL
            * data：text/html;charset=UTF-8,<h1>html content</h1>
            * html代码
            * 二进制 base64编码 
                * data：image/png;base64,i...编码
            * 静态资源加载
                * url-loader
                * png 转换为data URL
                * 最佳实践 - 小文件，减少请求次数
                * 大文件 - 单独提取存放，提高加载速度
                * 支持配置选项
                    * options 
                        * limit： 10 * 1025 单位：字节
                * 需要file-loader - 处理大文件
    * 常用加载器分类
        1. 编译转换类型
            * css-loader
        2. 文件操作类型
            * file-loader
        3. 代码检查类
            * eslint-loader
    * Webpack 与 ES2015
        * 模块打包需要import 和 export
        * babel-loader @babel/core preset-env
        * babel 转换js的平台
            * 配置相应的插件 options
            * presets： preset-env
        * Webpack 只是打包工具
            * 加载器可以用来编译转换代码
    * 模块加载方式
        1. ES Module
        2. require
            * 导入import导出时，需要require(moduleName).default
        3. AMD define require
        * 不要混合使用，使用统一的标准
        * css-loader
            * css url 触发 url-loader
        * html 的 src属性
            * image src属性
                * @import指令 和url函数
            * html - a 标签 href属性
                * html-loader
                * options
                    attrs： 
            * html默认将代码作为字符串导出
    * webpack 核心工作过程

        * 配置 - 打包入口文件 js
            * import / require
            * 依赖关系树
            * 递归依赖树
            * 找到每个节点对应的资源文件
            * 文件的roles属性找到对应的加载器
            * 将加载到的结果放到bundlejs文件中，从而项目打包
        * loader 机制是webpack的核心
            * 各种资源
    * Loader的工作原理
        * markdown-loader
