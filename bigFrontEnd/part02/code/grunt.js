const sass = require('sass')
const loadGruntTasks = require('module load-grunt-tasks')
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
        },
        babel: {
            main: {
                options: {
                    presets: ['@/presets-env']
                },
                files: {
                    'dist': {
                        'dist/js/app.js': 'src/js/app.js'
                    }
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['babel']
            },
            css: {
                files: ['src/scss/*.scss'],
                tasks: ['sass']
            }
        }
    })
    loadGruntTasks(grunt)

    grunt.registerTask('default', ['sass', ])
    grunt.loadNpmTasks('grunt-sass')
}
// implementation