
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',

  // 修改入口
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  chainWebpack: config => {

    // 把packages加入webpack编译
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })

    // 修改@符号路径
    config.resolve.alias
      .set('@', resolve('examples'))
  }
}