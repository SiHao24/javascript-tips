### 网站性能优化
白屏时间、首屏时间、整页时间、DNS时间、CPU占用率   
重定向—>拉去缓存-》DNS查询=》建立TCP连接-》发起请求-》接受响应-》处理HTML元素-》元素加载完成   
#### 1.webpack线上配置
（1）JS压缩    
```javascript
  optimization : {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMp: true // set to true if you want JS source maps
      }),
      ...Plugins
    ]
  }
```
(2)HTML压缩
```javascript
  new HtmlWebpackPlugin({
    template: __dirname + 'views/index.html', // new 一个这个插件的实例，并传入相关的参数    
    filename: '../index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      userShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    },
    chunksSortMode: 'dependency'
  })
```
(3)提取公共资源    
```javascript
  splitChunks: {
    cacheGroups: {
      vendor: { // 抽离第三方插件
        test: /node_modules/, // 制定node_modules下的第三方包
        chunks: 'initial', 
        name: 'common/vendor', // 打包的文件名，任意命名
        priority: 10 // 设置优先级，防止和自定义的公共代码提取时覆盖，不进行打包
      },
      utils: { // 抽离自定义公共代码
        test: /\.js$/,
        chunks: 'initial',
        name: 'common/utils',
        minSize: 0 // 只要超出0字节就生成一个新包
      }
    }
  }
```
（4）提取css并压缩    
```javascript
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  module: {
    rules: [..., {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        _mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss'
          }
        }
      ]
    }]
  }
```