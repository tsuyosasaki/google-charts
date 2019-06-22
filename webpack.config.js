const path =  require('path')

const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devServer: {
    contentBase: outputPath
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.html$/,
  //       loader: "html-loader"
  //     }
  //   ],
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "./html/index.html"
  //     })
  //   ]
  // }
}