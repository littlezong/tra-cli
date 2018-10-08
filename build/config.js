module.exports = {
    dev: {
        host: 'localhost',
        port: '8008',
        autoOpenBrowser: true,
        proxyTable: {
            '/api': {
                target: 'http://139.199.65.139:8090/', // 测试服
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    prod: {}
}