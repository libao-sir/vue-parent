module.exports = {
  devServer: {
    open: false,
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://adminapidev.aosom.com/dimension/v1',
        // target: 'http://localhost:8001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}