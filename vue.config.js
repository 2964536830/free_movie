const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

// cdn预加载使用
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  iview: 'iview'
  // 'mint-ui': 'MINT',
  // 'element-ui': 'ELE'
  //   'js-cookie': 'Cookies',
  //   'nprogress': 'NProgress'
}

const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js'
    ]
  }
}

module.exports = {
  publicPath: './',
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    // 设置文件路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("com", resolve("src/components"))
    // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
    // config.plugin('define').tap(args => {
    //   const argv = process.argv
    //   const mode = argv[argv.indexOf('--project-mode') + 1]
    //   args[0]['process.env'].MODE = `"${mode}"`
    //   args[0]['process.env'].BASE_API = BASE_API
    //   return args
    // })

    /**
     *  添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      process.env.NODE_ENV === 'production' ? args[0].cdn = cdn.build : args[0].cdn = cdn.dev;
      return args
    })
  }

}