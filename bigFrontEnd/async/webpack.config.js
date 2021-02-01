const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './generator.js',
    mode: "development",
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: "./dist", // 本地服务器所加载文件的目录
        port: "8088",   // 设置端口号为8088
        inline: true, // 文件修改后实时刷新
        historyApiFallback: true, //不跳转
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', {//注意这里是一个map结构
                                "modules": false,
                                 "useBuiltIns": "usage",//按需加载转换语法
                                 "corejs": 2//使用useBuiltIns字段必须声明@babel/runtime版本
                            }]],
                             //plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                ]
            }
        ]
    },
}