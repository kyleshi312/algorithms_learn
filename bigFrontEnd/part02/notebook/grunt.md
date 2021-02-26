插件使用：
    * 安装
    * loadNpmTasks 加载插件
    * initConfig设置插件配置
    * grunt-sass
  ```
const sass = require('sass')
module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    'dist/css/main.css': 'src/scss/main/scss '
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-sass')
}
```

module load-grunt-tasks