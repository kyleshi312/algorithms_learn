const path = require('path')

module.exports = {
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}