const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  // devtool: 'inline-source-map',
  
  //  devServer: {
  //    contentBase: './dist',
  //    proxy: {
  //      '/api': {
  //        target: 'https://api.github.com',
  //         pathRewrite: {
  //           '^/api': ''
  //         },
  //         changeOrigin: true
  //      }
  //    }
  //  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /.jpg$/,
        use: [
            {
                loader: 'file-loader'
            },
            {
                loader: 'url-loader', 
            }
        ]
    }
]
  }
};