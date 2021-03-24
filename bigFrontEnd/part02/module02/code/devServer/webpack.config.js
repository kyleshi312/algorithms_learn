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
  
   devServer: {
    //  contentBase: './public',
     proxy: {
       '/api': {
         target: 'https://api.github.com',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true
       }
     }
   },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /.jpg$/,
        use: 
            {
                loader: 'url-loader', 
            }
        
    }
]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],

};