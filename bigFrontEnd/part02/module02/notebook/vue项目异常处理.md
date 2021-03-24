### in ./src/App.vue?vue&type=style&index=0&lang=css& (./node_modules/vue-loader/lib/index.js??vue-loade

缺少vue文件内的css处理
```

            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                ]
            }, 

```

#### TypeError: this.getOptions is not a function

less-loader安装的版本过高
