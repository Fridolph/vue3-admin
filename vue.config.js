const path = require('path')

let isProd = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: undefined,
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: undefined,
  // parallel: undefined,
  chainWebpack(config) {
    // 设置默认 title
    config.plugin('html').tap((args) => {
      args[0].title = '后台管理中心'
      return args
    })

    // 删除默认 svg 配置
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .uses.clear()
    // svg-loader 使用
    const dir = path.resolve(__dirname, './public/img/svg')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false, symbolId: 'icon-[name]' })
      .end()
    config
      .plugin('svg-sprite')
      .use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir)

    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

    // 设置路径别名
    config.resolve.alias.set('@', resolve('src'))
  },
  // webpack-dev-server 相关配置
  // devServer: {
  //   open: true,
  //   host: '0.0.0.0',
  //   port: 9099,
  //   https: false,
  //   hot: true,
  //   disableHostCheck: false,
  //   proxy: {
  //     '/api': {
  //       target: 'https://10.11.100.10:8888', // zt
  //       // target: 'https://10.11.100.245:8888', //yyq
  //       // target: 'https://10.11.1.22:8888', // zt prod
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },

  // eslint-loader 是否在保存的时候检查
  // lintOnSave: undefined,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  // webpack配置  https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack: config => {},

  // 非生产环境打开 sourcemap，追踪错误位置；生产环境关闭 sourcemap，提高构建速度
  productionSourceMap: !isProd,

  // css相关配置
  // css: {
  // 	extract: {
  // 		ignoreOrder: true,
  // 	},
  // 	loaderOptions: {
  // 		less: {
  // 			javascriptEnabled: true,
  // 		},
  // 	},
  // 	// requireModuleExtension: true,
  // },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // pwa: {},

  // 第三方插件配置
  // pluginOptions: {
  // 	// 导入预处理器公共的样式文件变量
  // 	'style-resources-loader': {
  // 		preProcessor: 'less',
  // 		patterns: [resolve('./src/styles/mixins.less'), resolve('./src/styles/variables.less')],
  // 	},
  // },
}
