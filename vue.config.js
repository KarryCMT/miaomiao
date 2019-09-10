module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // outputDir: 'dist',
    // pages:{ type:Object,Default:undfind } 
    devServer: {
         // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: 'http://39.97.33.178/api' // 配置跨域处理,只有一个代理
        // proxy: {
        //     '/api': {
        //         target: '<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        // },  // 配置多个代理
    }
  }
  