module.exports = {
  configureWebpack: {
    resolve:{
      extensions:[],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
  devServer: {
    proxy: {
      '/api/': { target: 'https://cms.ednet.cn' },
      '/AbpUserConfiguration/': { target: 'https://cms.ednet.cn' }
    }
  }
}
