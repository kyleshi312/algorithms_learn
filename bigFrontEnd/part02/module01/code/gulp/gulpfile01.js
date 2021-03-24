const { series, parallel } = require('gulp')

exports.foo = (done) => {
    console.log('foo task working~')
    // mark async task finished
    done()
}

exports.default = done => {
    console.log('default task working')
    done()
}

const gulp  = require('gulp')

gulp.task('bar', done => {
    console.log('bar working')
    done()
})
