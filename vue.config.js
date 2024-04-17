const { defineConfig } = require('@vue/cli-service')

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = defineConfig({
  transpileDependencies: true
})


// module.exports = {
//   devServer: {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': 'true',
//       'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
//       'Access-Control-Allow-Headers':
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//     },
//     proxy: 'https://localhost:7024/',
//   },
// }
