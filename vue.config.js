// const { resolve } = require("core-js/fn/promise");

module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'views':'@/views',
        'common':'@/common',
        'network':'@/network'      
      }
    }
  }
}