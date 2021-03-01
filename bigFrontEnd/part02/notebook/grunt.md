插件使用：
    * 安装
    * loadNpmTasks 加载插件
    * initConfig设置插件配置
    * grunt-sass
  ```
缺点
操作文件

```
module.exports = grunt => {
    // register a task

    //     grunt.registerTask('foo', () => {
    //         console.log('hello grunt~')
    //         return false
    //     })

    // export default task
    // yarn grunt 
    // if it is not default
    // we should run as below:
    // yarn grunt <taskName>

    //     grunt.registerTask('default', ['foo', 'bar'])

    // config a obj data
    // grunt.initConfig({
    //     foo: {
    //         bar: 123
    //     }
    // })
    // grunt.registerTask('foo1', ()=>{
    //     console.log(grunt.config('foo.bar'))
    // })

}
```

运行多任务
```
    grunt.initConfig({
        build:{
            css: '123',
            js: '2'
        }
    })
    grunt.registerMultiTask('build', function(){
        console.log(this.options())
        console.log('build task', this.target, '---', this.data)
    })
    // yarn grunt build
    // yarn grunt build:css

```

options内部的会覆盖外层的options
```
    grunt.initConfig({
        build:{
            options: {
                foo: 'bar'
            }
            css: '123',
            js: {
                options:{

                },
                js: 222
            }
        }
    })

```

### 插件使用
