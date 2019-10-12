const isBuild = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isBuild ? './child/dist' : './',

  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
  }
}
