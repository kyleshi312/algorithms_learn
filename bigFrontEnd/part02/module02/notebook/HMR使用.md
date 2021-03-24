开启HMR
webpack-dev-server --hot
配置文件
devServer：{
    hot: true
}
插件

HMR并不可以开箱即用
手动处理模块热替换逻辑

Q1； 为什么样式文件可以
style-loader处理了

Q2：为什么样式文件可以
直接替换修改前样式

Q3: vue-cli 等工具没有处理
JS文件复杂没有逻辑
vuecli有固定格式标准
脚手架集成了HMR解决方案

